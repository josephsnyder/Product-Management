<!DOCTYPE html>
<html>
  <head>
    <?php
      include_once "vivian_common_header.php";
      include_once "vivian_tree_layout.css";
    ?>
    <!-- JQuery Buttons -->
    <script>
      $(function() {
        $( "button" ).button().click(function(event){
          event.preventDefault();
        });
        $('#demoexamples li').each(function (i) {
          if (i === 0) {
            $(this).removeClass("active").addClass("active");
          }
          else {
            $(this).removeClass("active");
          }
        });
      });
    </script>
    <?php include_once "vivian_google_analytics.php" ?>
  </head>

<body >
  <div>
    <?php include_once "vivian_osehra_image.php" ?>
    <!-- <select id="category"></select> -->
    <div style="font-size:10px; position:absolute; left:60px; top:100px">
      <button onclick="_expandAllNode()">Expand All</button>
      <button onclick="_collapseAllNode()">Collapse All</button>
      <button onclick="_resetAllNode()">Reset</button>
    </div>
  </div>
  <!-- Tooltip -->
<div id="toolTip" class="tooltip" style="opacity:0;">
    <div id="header1" class="header"></div>
    <div  class="tooltipTail"></div>
</div>

<div id="dialog-modal">
  <div id="accordion">
      <h3><a href="#">Namespaces</a></h3>
      <div id='namespaces' style="display:none"></div>
      <h3><a href="#">Dependencies</a></h3>
      <div id='dependencies' style="display:none"></div>
      <h3><a href="#">Interfaces</a></h3>
      <div id="interface"></div>
      <h3><a href="#">Description</a></h3>
      <div id="description"></div>
  </div>
</div>
<div id="treeview_placeholder">
<script type="text/javascript">
var chart = d3.chart.treeview()
              .height(1280)
              .width(1200)
              .margins({top:42, left:180, right:0, bottom:0})
              .textwidth(220);
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


d3.json("packages.json", function(json) {
  resetAllNode(json);
  chart.on("node", "event","click", pkgLinkClicked)
     .on("node", "event", "mouseover", node_onMouseOver)
     .on("node", "event","mouseout", node_onMouseOut)
     .on("text", "attr", "cursor", function(d) {
        return d.hasLink !== undefined && d.hasLink ? "pointer" : "hand";
      })
     .on("text", "attr", "fill", change_node_color)
     .on("circle", "style", "fill", change_circle_color)
     .on("circle", "attr", "r", function(d) { return 7 - d.depth; });
  d3.select("#treeview_placeholder").datum(json).call(chart);
  createLegend();
  
  //Testing for main window load
  
  // Checks the name of the first node
  // checks that the children of the first node have a populated name
  QUnit.test("mainPage_test", function() {
    var nodes = chart.nodes()
    equal(nodes["name"],"Vista","First node is correct");
    $(nodes.children).each(function(i,d) {
      ok(/[A-Za-z&\/]/.test(d.name), "First level of children is populated. Found " + d.name)
    })
  });
});

function _expandAllNode() {
  expandAllNode(chart.nodes());
  chart.update(chart.nodes());
}

function _collapseAllNode() {
  collapseAllNode(chart.nodes());
  chart.update(chart.nodes());
}

function _resetAllNode() {
  resetAllNode(chart.nodes());
  chart.update(chart.nodes());
}


var sddesc = "<p>The VistA Scheduling package allows a user to Schedule appointments for" +
" the following types of appointments:" +
"<ul><li>Scheduled</li>" +
"<li>C and P</li>" +
"<li>Collateral</li></ul>" +
" It also allows entry of an unscheduled appointment at any time during a day" +
" on which the clinic being scheduled into meets.  From these appointments," +
" various output reports are produced such as, but not limited to, file room" +
" list, appointment list, routing slips, letters for cancellations, no-shows," +
" and pre-appointment.  There is an additional capability where additional" +
" clinic stop credits can be directly entered and associated with a particular" +
" patient and date.  AMIS reporting is handled via a set of extract routines" +
" that summarize the data found by reading through the appointments and" +
" additional clinic stops and the 10/10 and unscheduled visits (outpatient" +
" credit given to Admitting/Screening) and storing the information by patient" +
" and visit date in the OCP File.  The AMIS 223 report and the OPC" +
" file to be sent to the Austin DPC are generated using this file.</p>";

function pkgLinkClicked(d) {
  if (d.hasLink) {
    var overlayDialogObj = {
      autoOpen: true,
      height: 'auto',
      width: 700,
      modal: true,
      position: ["center","center-50"],
      title: "Package: " + d.name,
      open: function(){
          htmlLnk = getInterfaceHtml(d);
          $('#interface').html(htmlLnk);
          $('#namespaces').html(getNamespaceHtml(d))
          $('#namespaces').show();
          if (d.name === 'Scheduling'){
            $('#description').html(sddesc);
          }
          else{
            $('#description').html(d.name);
          }
          depLink = getDependencyContentHtml(d.name, d)
          var depLink_html = "";
          for(var i = 0; i < depLink.length;i++) {
            depLink_html += depLink[i] + " ";
          }
          $('#dependencies').html(depLink_html);
          $('#dependencies').show();
          $('#accordion').accordion("option", "active", 0);
          $('#accordion').accordion("refresh");
          $('#accordion').accordion({heightStyle: 'content'}).show();
      },
   };
   $('#dialog-modal').dialog(overlayDialogObj).show();
    // var pkgUrl = package_link_url + d.name.replace(/ /g, '_') + ".html";
    // var win = window.open(pkgUrl, '_black');
    // win.focus();

    QUnit.test("modalWindow_test", function() {
      // Tests for Modal window
      // Check for presence of each accordion header
      // Check for content: link or text inside of each one
      equal($('#ui-accordion-accordion-header-0')[0].innerText,"Namespaces","Namespace Header exists");
      ok($("#namespaces")[0].innerHTML.search("Includes:.+Excludes") != -1, "Namespace content has appropriate headers");
      equal($('#ui-accordion-accordion-header-1')[0].innerText,"Dependencies","Dependencies Header exists");
      ok(/href/.test($("#dependencies")[0].innerHTML), "Dependencies contains a link");
      equal($('#ui-accordion-accordion-header-2')[0].innerText,"Interfaces","Interfaces Header exists");
      console.log($("#interface")[0].innerHTML);
      ok($("#interface")[0].innerHTML.search("M API.+Web Service API.+HL7") != -1, "Interface content contains correct text")
      equal($('#ui-accordion-accordion-header-3')[0].innerText,"Description","Description Header exists");
      ok($("#description")[0].innerHTML.search("[A-Za-z]+") != -1, "description content exists")      
    })     
  }  
  else{
    chart.onNodeClick(d);
  }
}

function getPackageDoxLink(pkgName, node) {
  var doxUrl = [];
  var doxLinkName = pkgName.replace(/ /g, '_').replace(/-/g, '_')
  var category = distProp[selectedIndex];
  var index = node.distribution.indexOf(category.name);
  if (index >= 0) {
    doxUrl.push(category.doxlink + "Package_" + doxLinkName + ".html");
  }
  else if (index == -1) {
    for(var i = 1; i < distProp.length;i++) {
      doxUrl.push(distProp[i].doxlink + "Package_" + doxLinkName + ".html");
    }
  }
  else {
    doxUrl.push(getDistributionPropByName(node.distribution[0]).doxlink);
  }
  QUnit.test("PackageDox_test", function() {
    ok(/http:\/\/code.osehra.org\/dox\/Package/.test(doxUrl),"Link found in Package Dox content");
  })
  return doxUrl;  // + "Package_" + doxLinkName + ".html";
}

function getDistributionPropByName(distName){
  var index = 0;
  for (index = 0; index < distProp.length; index++) {
    if (distProp[index].name === distName) {
      return distProp[index];
    }
  }
  return null;
}

function getNamespaceHtml(pkg) {
  var i=0, len=pkg.Posprefixes.length;
  var htmlLnk = "<h4>Namespaces: </h4>Includes:";
  for (; i<len-1; i++) {
    htmlLnk += "&nbsp;" + pkg.Posprefixes[i] + ",&nbsp;";
  }
  htmlLnk += "&nbsp;" + pkg.Posprefixes[i];

  var i=0, len=pkg.Negprefixes.length;
  htmlLnk += "</br>Excludes:"
  if(len > 0) {
    for (; i<len-1; i++) {
      htmlLnk += "&nbsp;" + pkg.Negprefixes[i] + ",&nbsp;";
    }
    htmlLnk += "&nbsp;" + pkg.Negprefixes[i];
  }
  return htmlLnk;
}

function getRPCLinkByPackageName(pkgName, linkUrl) {
  var defLnk = "files";
  if (linkUrl){
    defLnk = linkUrl + '/' + defLnk;
  }
  return "<a href=\"" + defLnk + "/" + pkgName + "-RPC.html\" target=\"_blank\">Remote Procedure Call</a>";
}

function getHL7LinkByPackageName(pkgName, linkUrl) {
  var defLnk = "files";
  if (linkUrl){
    defLnk = linkUrl + '/' + defLnk;
  }
  return "<a href=\"" + defLnk + "/" + pkgName + "-HL7.html\" target=\"_blank\">HL7</a>";
}

function getInterfaceHtml(node) {
  pkgName = node.name
  var htmlLnk = "<ul>";
  var rpcLink = "";
  var hl7Link = "";
  var extraLink = "";
  if (node.interfaces !== undefined){
    if (selectedIndex === 3) {
      category = distProp[selectedIndex].name;
      if (node.distribution && node.distribution.indexOf(category) >=0) {
        extraLink = "vxvista";
      }
    }
    var index = node.interfaces.indexOf("RPC");
    if (index >= 0){
      rpcLink = getRPCLinkByPackageName(pkgName, extraLink);
    }
    index = node.interfaces.indexOf("HL7");
    if (index >= 0){
      hl7Link = getHL7LinkByPackageName(pkgName, extraLink);
    }
  }
  if (pkgName === 'Order Entry Results Reporting'){
    htmlLnk += "<li><a href=\"http://www.osehra.org/content/vista-api?quicktabs_vista_api=0#quicktabs-vista_api\" target=\"_blank\">M API</a></li>";
    htmlLnk += "<li>" + rpcLink + "</li>";
    htmlLnk += "<li><a href=\"http://www.osehra.org/content/vista-api?quicktabs_vista_api=2#quicktabs-vista_api\" target=\"_blank\">Web Service API</a></li>";
    htmlLnk += "<li>" + hl7Link + "</li>";
    htmlLnk += "</ul>";
  }
  else{
    htmlLnk += "<li>M API</li>";
    if (rpcLink.length > 0) {
      htmlLnk += "<li>" + rpcLink + "</li>";
    }
    htmlLnk += "<li>Web Service API</li>";
    if (hl7Link.length > 0){
      htmlLnk += "<li>" + hl7Link + "</li>";
    }
    htmlLnk += "</ul>";
  }
  return htmlLnk;
}

function getDependencyContentHtml(pkgName, node) {
  var pkgUrl = getPackageDoxLink(pkgName, node)
  var depLink = []
  for(var i = 0; i < pkgUrl.length;i++) {
    depLink_str = "<h4><a href=\"" + pkgUrl[i] + "\" target=\"_blank\">";
    if( selectedIndex==0 ) {depLink_str += distProp[i+1].name +" Dependencies & Code View" + "</a></h4>";}
    else {depLink_str += distProp[selectedIndex].name +" Dependencies & Code View" + "</a></h4>";}
    depLink.push(depLink_str);
  }
  QUnit.test("dependencyContent_test", function() {
    ok(/http:\/\/.+dox/.test(depLink),"link found in dependency content");
  })
  return depLink;

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

function node_onMouseOver(d) {
  if (d.hasLink === undefined || !d.hasLink) {
    return;
  }
  if (d.Posprefixes !== undefined){
    tooltipString = "Namespace: Includes: " + d.Posprefixes + ".\r\n";
  }
  if (d.Negprefixes !== undefined){
    tooltipString += "Excludes: " + d.Negprefixes;
  }
  else{
    return;
  }
  header.text(tooltipString)
  toolTip.style("left", (d3.event.pageX + 20) + "px")
         .style("top", (d3.event.pageY + 5) + "px")
         .style("opacity", ".9");
         
  //QUnit.test("tooltip_test", function() {
  //  ok($("#toolTip")[0].innerHTML.search("Includes:.+") != -1, "");
  //  ok($("#toolTip")[0].innerHTML.search("Excludes:.+") != -1, "");
  //})
}

function node_onMouseOut(d) {
  header.text("");
  toolTip.style("opacity", "0");
}


// var categories = ["All", "OSEHRA", "VA", "DSS", "Medsphere", "Oroville"];
// Legend.
function createLegend() {
  var legend = chart.svg().selectAll("g.legend")
      .data(distProp)
    .enter().append("svg:g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(-100," + (i * 30 + 80) + ")"; })
      .on("click", function(d) {
        selectedIndex = distProp.indexOf(d);
        d3.selectAll("text")
          .filter(function (d) { return d.hasLink != undefined;})
          .attr("fill", function (node) {
            return change_node_color(node);
          });
        d3.selectAll("circle")
          .filter(function (d) { return d.hasLink != undefined;})
          .style("fill", function (d) {
            return change_circle_color(d);
          });

      });

  legend.append("svg:circle")
      .attr("class", function(d) {return d.name;})
      .attr("r", 3);

  legend.append("svg:text")
      .attr("class", function(d) {return d.name;})
      .attr("x", 13)
      .attr("dy", ".31em")
      .text(function(d) {
        return  d.distribution; 
      });
  // Tests for legend
  // Check name and link for each entry in the legend
  QUnit.test("legend_test", function() {
    $(".legend").each( function(i,d) {
      console.log(d.innerHTML)
      ok(d.innerHTML.search(distProp[i]["distribution"]), "Legend text is correct: " + distProp[i]["distribution"]);
      ok(d.innerHTML.search(distProp[i]["doxlink"]), "Legend link is correct: " + distProp[i]["doxlink"]);
    })
  })
}
    </script>
  </div>
    </div>
    <div id="qunit">
      <h1 id="qunit-header">QUnit Test Suite</h1>
      <h2 id="qunit-banner"></h2>
      <div id="qunit-testrunner-toolbar"></div>
      <h2 id="qunit-userAgent"></h2>
      <ol id="qunit-tests"></ol>
    </div>
  </body>
</html>
