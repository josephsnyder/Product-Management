<!DOCTYPE html>
<html>
  <title>Synthea Patient Display</title>
  <head>
    <?php
      include_once "vivian_common_header.php";
      include_once "install_scale.css";
    ?>
    <!-- JQuery Buttons -->
    <script>
      $(function() {
        $( "button" ).button().click(function(event){
          event.preventDefault();
        });
        fileName = window.location.href.substring(window.location.href.lastIndexOf('/')+1)
        $('a[href="'+fileName+'"]').parents("#navigation_buttons li").each(function (i) {
            $(this).removeClass().addClass("active");
        });
      });

    </script>
    <?php include_once "vivian_google_analytics.php" ?>
  </head>

<body>
  <script src="jquery-ui.min.js"></script>
  <div>
    <?php include_once "vivian_osehra_image.php" ?>
    <!-- <select id="category"></select> -->
  </div>
  <!-- Tooltip -->
     <div id="toolTip" class="tooltip" style="opacity:0;">
      <div id="header1" class="header"></div>
      <div id="installDate" ></div>
      <div id="filesTip" ></div>
      <div id="routinesTip" ></div>
      <div class="tooltipTail"></div>
    </div>
  </div>
  </br>
  </br>
  <div id="descrHeader" ></div>
  </br>
   <div>
    <label > Select synthetic patient file:</label>
    <select id="vivSelect"></select>
  <script type="text/javascript">

    var files = "<?php  foreach(glob('./synthea/*.json') as $filename) { echo $filename.",";  };?>"
    filesArray = files.split(",")
    filesArray.pop()
    for( var localFile in filesArray) {
      $("#vivSelect").append("<option val='"+filesArray[localFile]+"'>"+filesArray[localFile]+"</option>");
    }
  </script>
  </br>
    <label title="Set the data parameters for the timeline.">Select date range to view:</label>
    <input type="text" id="timeline_date_start" >
    <input type="text" id="timeline_date_stop">
    <button id="timeline_date_update">Update</button>
    <button id="timeline_date_reset">Reset</button>
  </div>
  <div id="legend_placeholder" style="position:relative; left:20px;"></div>


<div id="dialog-modal" style="display:none;">
        <div id='filteredObjs'></div>
    </div>
 </div>
<div id="treeview_placeholder"/>
  <svg class="chart" ></svg>
<script type="text/javascript">
var margin = {top: 40, right: 40, bottom: 40, left:40},
        width = 1500,
        height =750;
var originalTransform = [40,60];

var visitDict = { "DiagnosticReport": {"color": "red", "height":0,"sd": "effectiveDateTime" ,"ed":"","desc":"code"},
	"Claim": {"color": "orange", "height":.1,"sd": "billablePeriod" ,"ed":"billablePeriod","desc":"total"},
	"MedicationRequest": {"color": "yellow", "height":.2,"sd": "authoredOn" ,"ed":"","desc":"medicationCodeableConcept"},
	"Encounter": {"color": "green", "height":.3,"sd": "period" ,"ed":"period","desc":"type"},
	"Observation": {"color": "blue", "height":.4,"sd": "issued" ,"ed":"","desc":"code"},
	"CarePlan": {"color": "purple", "height":.5,"sd": "period" ,"ed":"period","desc":"category"},
	"Procedure": {"color": "steelblue", "height":.6,"sd": ["performedDateTime", "performedPeriod"] ,"ed":["performedDateTime", "performedPeriod"],"desc":"code"},
	"Condition": {"color": "black", "height":.7,"sd": "onsetDateTime" ,"ed":"abatementDateTime","desc":"code"},
	"Immunization": {"color": "pink", "height":.8,"sd": "date" ,"ed":"","desc":"vaccineCode"},
}
var chartHeight = height - margin.top - margin.bottom;
var chartWidth = width - margin.left - margin.right
var y = d3.scale.linear()
    .range([chartHeight, 0]);
var shownPackage;
var index = 0
colors = d3.scale.category20b()
backgroundColors = d3.scale.category20()
var currentDate = new Date();
var endDate = "12/31/"+ currentDate.getFullYear()
$("#timeline_date_start").datepicker()
$("#timeline_date_stop").datepicker()
var organizationDict = {};
var organizationColorDict = {};
var legendShapeChart = d3.chart.treeview()
              .height(50)
              .width(1500)
              .margins({top:10, left:10, right:0, bottom:0})
              .textwidth(110);
/*
*  Function to handle the updating of the time scale.
*  takes the values of the two date boxes and uses that to
*  redraw the graph, keeping the same package, with the values
*/
$("#timeline_date_update").click( function() {
  if( $("#timeline_date_start")[0].value == $("#timeline_date_stop")[0].value) {
    alert("Cannot show data that begins and ends on the same day")
  }
  else {    
    selectValue = d3.select('#vivSelect').property('value')
    resetMenuFile(selectValue, $("#timeline_date_start")[0].value, $("#timeline_date_stop")[0].value,Object.keys(visitDict))
  }
})

/*
*  Function to handle the resetting of the time scale.
*  Clears the values of the two date boxes and redraws the
*  graph, keeping the same package, and uses the default values
*  for date selection
*/

$("#timeline_date_reset").click( function() {
  $("#timeline_date_start")[0].value = ""
  $("#timeline_date_stop")[0].value = ""
  selectValue = d3.select('#vivSelect').property('value')
  d3.select('#legend_placeholder').selectAll("svg").selectAll("*").attr("class","")
  d3.select("#legend_placeholder").datum(null).call(legendShapeChart);
  createLegend();
  resetMenuFile(selectValue,"","",Object.keys(visitDict))
})

/*
*  Function which is called when each box in the chart has the mouse
*  hovering over it.  It generates the tooltip and positions it at
*  the location of the mouse event.
*/
function rect_onMouseOver(d) {
  var header1Text = "Type: " + d.resourceType +
                    "</br>Status: " + d.status +
                    "</br>Description: " + findDescription(d) +
                    "</br>Date: " + findStartDate(d);
  $('#header1').html(header1Text);
  d3.select("#toolTip").style("left", (d3.event.pageX + 0) + "px")
          .style("top", (d3.event.pageY - 0) + "px")
          .style("opacity", ".9");
}

/*
*   Clears the tooltip information and hides the tooltip from view
*/
function rect_onMouseOut(d) {
  $('#header1').text("");
  $('#installDate').text("");
  $('#routinesTip').text("");
  $('#filesTip').text("");
  d3.select("#toolTip").style("opacity", "0");
}

/*
* When each bar is clicked on, show the files page for each install
*/

function rect_onClick(d) {
    var overlayDialogObj = {
          autoOpen: true,
          height: ($(window).height() - 200),
          position : {my: "top center", at: "top center", of: $("#treeview_placeholder")},
          width: 700,
          modal: true,
          title: "Filtered Object Information",
          open: function (event) {
           $("#filteredObjs").empty();
            Object.keys(d).forEach(function(key) {
                var objectData = d[key]
                if(key === "serviceProvider") {
                    objectData = organizationDict[d.serviceProvider.reference.substr(9)]
                }
                $("#filteredObjs").append("<p>"+key+":"+JSON.stringify(objectData)+"</p>")
            });
          }
       };
       $('#dialog-modal').dialog(overlayDialogObj);
       $('#dialog-modal').show();
}

function findStartDate(d) {
  var startDate=''
  var dateKeys = [visitDict[d.resourceType]["sd"]]
  if (typeof visitDict[d.resourceType]["sd"] == 'object') {
    dateKeys = visitDict[d.resourceType]["sd"];
  }
  dateKeys.forEach(function(dateKey) {
  if (Object.keys(d).indexOf(dateKey) != -1) {
      startDate = d[dateKey]
      if (typeof d[dateKey] == 'object') {
         startDate = d[dateKey]['start'];
      }
    }
  })
  return startDate
}
function findStopDate(d) {
  var stopDate = endDate
  if(visitDict[d.resourceType]["ed"] == "") {
   return 3;
  }
  var dateKeys = [visitDict[d.resourceType]["ed"]]
  if (typeof visitDict[d.resourceType]["ed"] == 'object') {
    dateKeys = visitDict[d.resourceType]["ed"];
  }
  dateKeys.forEach(function(dateKey) {
  if (Object.keys(d).indexOf(dateKey) != -1) {
      stopDate = d[dateKey]
      if (typeof d[dateKey] == 'object') {
         stopDate = d[dateKey]['start'];
      }
    }
  })
  return stopDate
}

function findDescription(d) {
  var descObj = d[visitDict[d.resourceType]["desc"]];
  var description = descObj["text"]
  if (description == undefined) {
     if (Object.keys(descObj).indexOf("value") != -1) {
        description = descObj["value"] + descObj['code'];
     } else {
        description = descObj[0]["text"]
     }
  }
  return description;
}
  d3.select("#vivSelect").on("change", function(){
    selectValue = d3.select('#vivSelect').property('value')
    resetMenuFile(selectValue,"","",Object.keys(visitDict))
  });
function pkgVersionData_gen(pkgInfo) {
    var pkgVersions=[]
    var pkgVersionStart = pkgInfo[0].installDate
    pkgInfo.forEach(function(d) {
      if (d.packageSwitch) {
        pkgVersions.push({"stop" : d.installDate, "start": pkgVersionStart})
        pkgVersionStart = d.installDate
      }
    });
    pkgVersions.push({"stop" : endDate, "start": pkgVersionStart})// pkgInfo[pkgInfo.length-1].installDate
    return pkgVersions;
}

/*
*  Main function to set up the scales and objects necessary to show
*  the install information
*/
function resetMenuFile(jsonFile,start,stop,filterList) {
  //Read in the INSTALL JSON file
  d3.json(jsonFile, function(json) {
    /*
    *  Capture the package specific information.  The start date
    *  of the scale should be the install date of the first patch
    *  The end date is set to be some time in the future.
    *  TODO: Add a more specific date to the end.
    */
    var ptInfoArray = [];
    json["entry"].forEach(function (val, indx) {
      if (filterList.indexOf(val["resource"]['resourceType']) != -1) {
        ptInfoArray.push(val["resource"])
      } else if (val["resource"]['resourceType'] == "Organization") {
         if (Object.keys(organizationDict).indexOf(val["resource"]['id']) == -1) {
             organizationDict[val["resource"]['id']] = val["resource"]
             organizationColorDict[val["resource"]['identifier'][0]["value"]] = colors(indx)
         }
      }
    })
    //ptInfoArray.sort(function(a,b) {console.log(a); return a.issued.localeCompare(b.issued); });
    if (start === "") {start = findStartDate(ptInfoArray[0])}
    if (stop === "") { stop = endDate}
    var svg = d3.select('#treeview_placeholder').select('svg')
    svg.selectAll("*").remove();
    $("#timeline_date_start").datepicker("setDate",new Date(start))
    $("#timeline_date_stop").datepicker("setDate",new Date(stop))

    // Generate a time scale to position the dates along the axis
    // domain uses the dates above, rangeRound is set to keep it within
    // the visualization window
    var x = d3.time.scale()
      .domain([new Date(start), new Date(stop)])
      .range([0, width]);

    // Generate the xAxis for the above scale
    var xAxis = d3.svg.axis()
      .scale(x)
      .orient('top')
      .tickSize(10)
      .tickPadding(8);
    /*
    *  This function generates the background bars which represent
    *  different versions of each package.
    *
    *  ie Change from Dietetics 5.0 to Dietetics 5.5
    */
    //var pkgVersions= pkgVersionData_gen(ptInfoArray)

    /* Sorts the pkgInfo to put the longest bars first, this should prevent the smaller bars from being
    *  hidden by a taller bar.
    */
    ptInfoArray.sort(function(a,b) {
              return (x(new Date(findStopDate(b))) - x(new Date(findStartDate(b)))) - (x(new Date(findStopDate(a))) - x(new Date(findStartDate(a))));
    });

    // Add the chart to the SVG object
    svg.attr('class', 'chart')
      .attr('width', width)
      .attr('height', height)
      .call(zoomListener).on("wheel.zoom", null)
    /*
    */
    
    
      
    svg.append('g')
      .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')
      .attr('class', 'x axis')
      .attr('width',chartWidth)
      //Adds xAXIS to g

    zoomListener.translate(originalTransform).scale(1)
    var svgG = d3.select('#treeview_placeholder').select('svg').select('g')
    svgG.selectAll('.rect')
      .data(ptInfoArray)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('y', function(d) {
          var yCoord = height * visitDict[d.resourceType]["height"]
          d.originalY = yCoord
          return yCoord
          })
      .attr('originalY', function(d) { return d.originalY})
      .attr('x', function(d) {return x(new Date(findStartDate(d))); })
      .attr('width', function(d) {
          if (d.resourceType === "Condition"){
              return (x(new Date(findStopDate(d))) - x(new Date(findStartDate(d)))); }
          else {return 3}
      })
      .attr('height', function(d) {
          // Check to see if existing objects need to be shrunk
          var xCoord = x(new Date(findStartDate(d)))
          var yCoord = height * visitDict[d.resourceType]["height"]
          var existingBars;
          if (d.resourceType === "Condition"){
           existingBars= $(".bar[originalY='"+yCoord+"']")
          } else {
           existingBars= $(".bar[x='"+xCoord+"'][originalY='"+yCoord+"']")
          }
          var heightVal = (height * .095)/(existingBars.length)
          existingBars.each(function (index,obj) {
            $(obj).attr("height", heightVal);
            $(obj).attr("y", yCoord + (heightVal * index-1));
          })
          return heightVal
      })
      .attr("fill", function(d,i) {return visitDict[d.resourceType]["color"]; })
      .attr('stroke', function(d,i) {
          var color = "white";
          if (d.serviceProvider) {
            color = organizationColorDict[organizationDict[d.serviceProvider.reference.substr(9)]['identifier'][0]["value"]]
          }
          return color;
      })
      .attr('stroke-linecap', 'butt')
      .attr('stroke-width', 1.5)
      
      svgG.call(xAxis)
      // Selecting the text to to be able to modify the labels for the axis
      // 1. have the text run vertically
      // 2. have the anchor be at the start of the word, not the middle.
      .selectAll("text")
      .attr("y", 0)
      .attr("x", -11)
      .attr("dy", ".35em")
      .attr("transform", "rotate(90)")
      .style("text-anchor", "end");

    /*
    *  Set all of the ".bar" classed bars, all of the install information, to have the
    *  mouse events described above.
    */

    svg.selectAll('.bar')
      .on("mouseover", rect_onMouseOver)
      .on("mouseout", rect_onMouseOut)
      .on("click", rect_onClick);

      //shownPackage=packageName;
});

  //Taken from http://bl.ocks.org/robschmuecker/6afc2ecb05b191359862
  // =================================================================
  var panSpeed = 200;
  var zoomListener = d3.behavior.zoom().scaleExtent([.5,2])
                                       .on("zoom", zoomFunc);
  var isZoomed=false;
  function zoomFunc() {
      var scaleTxt = "scale("+d3.event.scale+")"
      if (d3.event.sourceEvent.type === "dblclick") {
        if (isZoomed) {
            zoomListener.scale(1);
            scaleTxt = "scale(1)";
            zoomListener.translate(originalTransform);
            scaleTxt = "translate("+originalTransform+")";
        }
        isZoomed = !isZoomed;
      }
      var translateText=""
      if (d3.event.sourceEvent.type === "mousemove") {
          translateText= "translate(" + d3.event.translate + ")";
      }
      var svg = d3.select('#treeview_placeholder').select('g')
      svg.attr("transform", translateText + scaleTxt);
  }
  //===================================================================
};



function createLegend() {
  var legend = legendShapeChart.svg().selectAll("g.legend")
    .data(Object.keys(visitDict))
    .enter().append("svg:g")
    .attr("class", "legend")
    .attr("transform", function(d, i) {return "translate(" + (i * 125) +",30)"; })

  legend.append("svg:text")
    .attr("x", 13)
    .attr("dy", ".31em")
    .attr("fill",function(d) {return visitDict[d].color;})
    .attr("stroke", "black")
    .attr("stroke-width", .25)
    .text(function(d) { return  d; })
    .on("click", function(d) { 
      var deactivate = false;
      // Find elements that are active to deactivate
      d3.select('#legend_placeholder').selectAll(".legend").selectAll('.active')
      .attr("fill", function(element) {
        var returnColor  = visitDict[element].color;
        if(d === element ) { deactivate= true; returnColor = "gray" } 
        return returnColor
      }).attr("class", function(element) {
        var classVal = "active"
        if(d === element ) { deactivate= true;classVal = "" }
        return classVal
      })
      if (!deactivate) {
        // find "non-active" elements to activate
        d3.select('#legend_placeholder').selectAll(".legend").selectAll('text:not(.active)')
        .attr("fill", function(element) {
          var returnColor  = "gray";
          if(d === element ) { returnColor = visitDict[d].color } 
          return returnColor
        }).attr("class", function(element) {
          var classVal = ""
          if(d === element ) { classVal = "active"}
          return classVal
        })
      }
      selectValue = d3.select('#vivSelect').property('value')
      resetMenuFile(selectValue,
                    $("#timeline_date_start")[0].value,
                    $("#timeline_date_stop")[0].value,
                    d3.select('#legend_placeholder').selectAll(".active").data())
    });

  var legend = legendShapeChart.svg()
  legend.append("text")
          .attr("x", 0)
          .attr("y", 10 )
          .attr("text-anchor", "left")
          .style("font-size", "16px")
          .text("Color Legend")

          
}
// Start the visualization at the

d3.select("#legend_placeholder").datum(null).call(legendShapeChart);
createLegend();
resetMenuFile(d3.select('#vivSelect').property('value'),"","", Object.keys(visitDict))
    </script>
  </body>
</html>
