<!DOCTYPE html>
<html>
  <title>ViViaN</title>
  <head>
    <?php
      include_once "vivian_common_header.php";
      include_once "vivian_tree_layout.css";
    ?>
    <!-- JQuery Buttons -->
    <?php include_once "vivian_google_analytics.php" ?>
    <script>
      $(function() {
        $('#navigation_buttons li').each(function (i) {
          if (i === 9) {
            $(this).removeClass().addClass("active");
          }
          else {
            $(this).removeClass();
          }
        });
      });
    </script>
  </head>

<body >
  <div>
    <?php include_once "vivian_osehra_image.php" ?>
    <!-- <select id="category"></select> -->
  </div>
</br>
</br>
</br>
<div id="legend_placeholder"></div>
<div><label for="option_autocomplete"> Search for a file:</label></div>
<div><input id="option_autocomplete" size="40" >
  <div id="buttons" style="position:relative; top:10px;">
      <button onclick="_expandAllNode()">Expand All</button>
      <button onclick="_collapseAllNode()">Collapse All</button>
      <button onclick="_resetAllNode()">Reset</button>
  </div>
</div>
<div id="treeview_placeholder"/>

<script type="text/javascript">

// Note: vivian_tree_layout_common expects this variable
// to be called 'chart'.
var width=1500
var height=1500
var chart = d3.chart.treeview()
              .height(1280)
              .width(1200)
              .margins({top:50, left:200, right:0, bottom:0})
              .textwidth(220)
              .nodeTextHyperLink(getFileDetailLink);
var legendShapeChart = d3.chart.treeview()
              .height(50)
              .width(550)
              .margins({top:42, left:10, right:0, bottom:0})
              .textwidth(110);
$("#accordion").accordion({heightStyle: 'content', collapsible: true}).hide();

<?php include_once "vivian_tree_layout_common.js" ?>

var package_link_url = "http://code.osehra.org/dox/";
var toolTip = d3.select(document.getElementById("toolTip"));
var header = d3.select(document.getElementById("header1"));
var selectedIndex = 0;
var distProp = [ // constants to store property of each distribution
  { name: "All", color: "black", distribution: 'All', doxlink: package_link_url},
  { name: "OSEHRA", color: "#FF0000", distribution: 'OSEHRA VistA', doxlink: "http://code.osehra.org/OSEHRA_dox/"},
  { name: "VA", color: "#3300CC", distribution: 'VA FOIA VistA' ,doxlink: package_link_url},
  { name: "DSS", color: "#080", distribution: 'DSS vxVistA' , doxlink: "http://code.osehra.org/dox_alpha/vxvista/"}

  /**
  ,{
    name: "Medsphere",
    color: "#FF00FF"
  },
  {
    name: "Oroville",
    color: "#660000"
  } **/
];

var color = d3.scale.category20();
var shapeLegend = [{name: "File/SubFile", shape: "triangle-up"},
                   {name: "Field Group", shape:"cross"},
                   {name: "Field", shape:"circle"}]
var himInfoJSON;
var filesJSON

function getFileDetailLink(node) {
  if(node["isFieldGroup"]) { return ""}
  var baseNodeLink = "files/dox/Global_" + btoa(chart.nodes().name.replace("_"," ") +"_"+chart.nodes().ien) + ".html"
  var SubFileNodeLink = "files/dox/Subfile_"+node.ien+".html"
  if (node["depth"] > 0) {
    if (node.children || node._children) {
      return SubFileNodeLink
    }
    else if (node['depth'] == 1 || node["grpVal"]){
      return baseNodeLink + "#"+node.FieldNo
    }
    else{
      return "files/dox/Subfile_"+node.parent.ien+".html#"+node.FieldNo;
    }
  }
  return baseNodeLink
}

d3.json("files/files_json/PHARMACY_SYSTEM_tree.json", function(json) {
  chart.on("node", "event","click", onNodeClick)
     /*.on("node", "event", "mouseover", node_onMouseOver)
     .on("node", "event","mouseout", node_onMouseOut)
     .on("text", "attr", "cursor", function(d) {
        return d.hasLink !== undefined && d.hasLink ? "pointer" : "hand";
      })*/
     .on("text", "attr", "fill", change_node_color)
     .on("path", "style", "fill", change_circle_color)
     .on("path", "attr", "r", function(d) { return 7 - d.depth; });

  d3.select("#treeview_placeholder").datum(json).call(chart);
  d3.select("#legend_placeholder").datum(null).call(legendShapeChart);
  resetAllNode(chart.nodes());
  chart.update(chart.nodes())
  clearAutocomplete();
  /*createLegend();*/
  createShapeLegend();
});
d3.json('files/files_json/fileDictionary.json', function(json) {
// Note: vivian_tree_layout_common expects this control
// to be called 'option_autocomplete'.
$("#option_autocomplete").autocomplete({
  source: json,
  select: fileAutoCompleteChanged
}).data('autocomplete');
});


function onNodeClick(node) {
    chart.onNodeClick(node)
}
function change_node_color(node) {
  if (distProp.length === 0) {
    return "black";
  }
  var category = distProp[selectedIndex];
  if (category.name === "All" || node.hasLink === undefined) {
    return "black";
  }
  if (node.distribution) {
    var index = node.distribution.indexOf(category.name);
    if (index >= 0) {
      return category.color;
    }
  }
  return "#E0E0E0";
}

function change_circle_color(d){
  if (d._children){
    return "lightsteelblue";
  }
  else {
    if (d.hasLink !== undefined && selectedIndex > 0){
      var category = distProp[selectedIndex];
      if (d.distribution !== undefined){
        var index = d.distribution.indexOf(category.name);
        if (index >= 0) {
          return category.color;
        }
      }
      else {
        return category.color;
      }
    }
    return "#fff";
  }
}


  function fileAutoCompleteChanged(event, ui) {
    d3.json("files/files_json/"+ui.item.value+"_tree.json", function(json) {
      chart.on("node", "event","click", onNodeClick)
         /*.on("node", "event", "mouseover", node_onMouseOver)
         .on("node", "event","mouseout", node_onMouseOut)
         .on("text", "attr", "cursor", function(d) {
            return d.hasLink !== undefined && d.hasLink ? "pointer" : "hand";
          })*/
         .on("text", "attr", "fill", change_node_color)
         .on("path", "style", "fill", change_circle_color)
         .on("path", "attr", "r", function(d) { return 7 - d.depth; });

      d3.select("#treeview_placeholder").datum(json).call(chart);
      d3.select("#legend_placeholder").datum(null).call(legendShapeChart);
      /*/d3.select("#legend_placeholder").datum(null).call(legendDistChart);*/
      resetAllNode(chart.nodes());
      chart.update(chart.nodes())
      clearAutocomplete();
      /*createLegend();*/
      createShapeLegend();
        })
  }



function createShapeLegend() {
  var shapeLegendDisplay = legendShapeChart.svg().selectAll("g.shapeLegend")
      .data(shapeLegend)
      .enter().append("svg:g")
      .attr("class", "shapeLegend")
      .attr("transform", function(d, i) { return "translate("+(i * 200) +", -10)"; })

  shapeLegendDisplay.append("path")
      .attr("class", function(d) {return d.name;})
      .attr("d", d3.svg.symbol().type(function(d) { return d.shape;}))
      .attr("r", 3);

  shapeLegendDisplay.append("svg:text")
      .attr("class", function(d) {return d.name;})
      .attr("x", 13)
      .attr("dy", ".31em")
      .text(function(d) {
        return  d.name;
      });

  var shapeLegendDisplay = legendShapeChart.svg();
  shapeLegendDisplay.append("text")
          .attr("x", 0)
          .attr("y", -28 )
          .attr("text-anchor", "left")
          .style("font-size", "16px")
          .text("Shape Legend");
}
    </script>
  </body>
</html>
