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
  <!-- Tooltip -->
  <div id="toolTip" class="tooltip" style="opacity:0;">
      <div id="header1" class="header"></div>
      <div  class="tooltipTail"></div>
  </div>
</br>
<div><label for="option_autocomplete"> Search for a file:</label></div>
<div><input id="option_autocomplete" size="40" ></div>
<svg height=1500 width=1500 id="treeview_placeholder"/>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script type="text/javascript">

// Note: vivian_tree_layout_common expects this variable
// to be called 'chart'.

var width=1500
var height=1500
var chart = d3.forceSimulation()
    .force("link", d3.forceLink().distance(90).id(function(d) {return d["id"]; }))
    .force("charge", d3.forceManyBody().strength(-100))
    .force("center", d3.forceCenter(width /3, height / 3.5));
var legendShapeChart = d3.chart.treeview()
              .height(50)
              .width(350)
              .margins({top:42, left:10, right:0, bottom:0})
              .textwidth(110);
var legendDistChart = d3.chart.treeview()
              .height(50)
              .width(800)
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
var shapeLegend = [{name: "Package Category", shape: "triangle-up"},
                   {name: "Package", shape:"circle"}]
var himInfoJSON;
var filesJSON

function link_onMouseOver(d) {
  if (d["fieldName"]) {
    header.text("Connection through field: "+d["fieldName"])
    toolTip.style("left", (d3.event.pageX + 20) + "px")
         .style("top", (d3.event.pageY + 5) + "px")
         .style("opacity", ".9");
  }
}

function link_onMouseOut(d) {
  header.text("");
  toolTip.style("opacity", "0");
}

var svg = d3.select("svg")
d3.json("files/files_json/PHARMACY_SYSTEM.json", function(json) {
  filesJSON= json;
  findAll(json.nodes,json.links);
});
d3.json('files/files_json/fileDictionary.json', function(json) {
// Note: vivian_tree_layout_common expects this control
// to be called 'option_autocomplete'.
$("#option_autocomplete").autocomplete({
  source: json,
  select: fileAutoCompleteChanged
}).data('autocomplete');
});
function draw(inNodes,inLinks) {

  var totalLinks = []
  svg.selectAll("*").remove();
  testLinks = d3.layout.tree().links(inNodes);
  totalLinks= totalLinks.concat(testLinks);
  totalLinks = totalLinks.concat(inLinks);

  svg.append("svg:defs").selectAll("marker")
      .data(["end"])      // Different link/path types can be defined here
    .enter().append("svg:marker")    // This section adds in the arrows
      .attr("id", 'arrowhead')
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 15)
      .attr("refY", -1.5)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
    .append("svg:path")
      .attr("d", "M0,-5L10,0L0,5");
  var link = svg//.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(totalLinks)
    .enter().append("line")
      .attr("class","link")
      .attr("marker-end","url(#arrowhead)")
      .attr("stroke-width", function(d) { return Math.sqrt(1); })
      .style("stroke", function(d){ return d.style})
      .on("mouseover", link_onMouseOver)
      .on("mouseout", link_onMouseOut);
  var node = svg.append("g")
      .attr("class", "nodes")
    .selectAll("path")
    .data(inNodes)
    .enter().append("g")
    .attr("fill", function(d) {return color(d.group);})
    .attr("stroke", "black")
    .attr("stroke-width", .25)

  node.append("title")
      .text(function(d) { return d.id; });
  node.append("text")
      .attr("dx", 12)
      .attr("dy", ".35em")
      .text(function(d) {if((d.shape !="circle") && !d.isNested) { return d.name }})
  node.append("path")      .attr("r", 5).attr("class", "node")
      .attr("d", d3.svg.symbol()
              .size(function(d) { return d.size; })
              .type(function(d) { return d.shape; }))
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended))
          .on("click", click);
  chart
      .nodes(inNodes)
     .on("tick", ticked);

  chart.force("link")
       .links(totalLinks);
  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("transform", function(d) {
        //return "translate(" + d.x + "," + d.y + ")";
        return "translate(" + Math.max(10, Math.min(width - 10, d.x)) + "," + Math.max(10, Math.min(height - 10, d.y)) + ")";
    });
  }
}
  function dragstarted(d) {
    if (!d3.event.active) chart.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  function dragended(d) {
    if (!d3.event.active) chart.alphaTarget(0);
    if(!d.fixed) {
    d.fx = null;
    d.fy = null;
    }
  }

  function click(d) {
    if (d3.event.defaultPrevented) return; // ignore drag
    if (d.shape == "triangle-up") return; // ignore drag
    var totalLinks =d3.selectAll(".link").data()
    totalLinks= totalLinks.concat(filesJSON.links)
    foundNodes= d3.selectAll(".node").data()
    if (d.children.length > 0) {
      d.fx = null;
      d.fy = null;
      d.fixed= false;
      d._children = d.children;
      d.children.forEach(function(child){
        foundNodes.splice(foundNodes.indexOf(child),1);
      })
      d.children = [];
      findAll(foundNodes,totalLinks);
    }
    else if(d._children.length > 0) {
      d.fx = d.x;
      d.fy = d.y;
      d.fixed= true;
      d.children = d._children;
      d._children.forEach(function(child){
        foundNodes.concat([child]);
      })
      d._children = [];
      findAll(foundNodes,totalLinks);
    }
    else {
      d.fx = d.x;
      d.fy = d.y;
      d.fixed=true;
      d3.json("files/files_json/"+d.name.replace(' ',"_")+".json", function(json)  {
        if( json != null) {
          json.nodes.forEach(function(newNode) {
            var found =  foundNodes.findIndex(x => x.id === newNode.id)
            newNode.children= newNode._children;
            if(found == -1) {foundNodes= [newNode].concat(foundNodes);}
            else {foundNodes[found].children = newNode.children;}
          })
          //foundNodes = foundNodes.concat(json.nodes);
          totalLinks = totalLinks.concat(json.links);
          filesJSON= json;
          findAll(foundNodes,totalLinks);
        }
      });
    }
  }

  function findAll(inNodes, inLinks, mainNodeName) {
    var totalNode = []
    var filteredLinks = []
    inNodes.filter(function(d) {return d.shape != "circle"}).forEach(function(d,i) {
      var found =  totalNode.findIndex(x => x.id === d.id)
           if(found == -1) {totalNode= totalNode.concat([d]);}
           else {totalNode[found]["group"] = d["group"]}
      if(d.children.length > 0) {
        d.children.forEach(function(child) {
           var found = totalNode.some(function(val) {return val.name === child.name})
           if(!found) {totalNode = totalNode.concat([child]);}
        })
      }
    })
    totalNode.forEach(function (node) {
      inLinks.forEach( function(link) {
        if( [link.target, link.target.id].indexOf(node.id) > -1 ) {
          if (totalNode.findIndex(x => ((x.name === link.source) || (x.name === link.source.name))) > -1) {
            filteredLinks = filteredLinks.concat([link]);
          }
        }
      })
    })
    draw(totalNode,filteredLinks);
  }


  function fileAutoCompleteChanged(event, ui) {
    d3.json("files/files_json/"+ui.item.value+".json", function(json) {
      filesJSON= json;
      findAll(json.nodes,json.links, ui.item.value );
    })
  }
    </script>
  </body>
</html>
