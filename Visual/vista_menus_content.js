function BranchData() {
    this.position = -1;
    this.nodeLength = -1;
    this.src = null;
    this.evalFalse = 0;
    this.evalTrue = 0;

    this.init = function(position, nodeLength, src) {
        this.position = position;
        this.nodeLength = nodeLength;
        this.src = src;
        return this;
    }

    this.ranCondition = function(result) {
        if (result)
            this.evalTrue++;
        else
            this.evalFalse++;
    };

    this.pathsCovered = function() {
        var paths = 0;
        if (this.evalTrue > 0)
          paths++;
        if (this.evalFalse > 0)
          paths++;
        return paths;
    };

    this.covered = function() {
        return this.evalTrue > 0 && this.evalFalse > 0;
    };

    this.toJSON = function() {
        return '{"position":' + this.position
            + ',"nodeLength":' + this.nodeLength
            + ',"src":' + jscoverage_quote(this.src)
            + ',"evalFalse":' + this.evalFalse
            + ',"evalTrue":' + this.evalTrue + '}';
    };

    this.message = function() {
        if (this.evalTrue === 0 && this.evalFalse === 0)
            return 'Condition never evaluated         :\t' + this.src;
        else if (this.evalTrue === 0)
            return 'Condition never evaluated to true :\t' + this.src;
        else if (this.evalFalse === 0)
            return 'Condition never evaluated to false:\t' + this.src;
        else
            return 'Condition covered';
    };
}

BranchData.fromJson = function(jsonString) {
    var json = eval('(' + jsonString + ')');
    var branchData = new BranchData();
    branchData.init(json.position, json.nodeLength, json.src);
    branchData.evalFalse = json.evalFalse;
    branchData.evalTrue = json.evalTrue;
    return branchData;
};

BranchData.fromJsonObject = function(json) {
    var branchData = new BranchData();
    branchData.init(json.position, json.nodeLength, json.src);
    branchData.evalFalse = json.evalFalse;
    branchData.evalTrue = json.evalTrue;
    return branchData;
};

function buildBranchMessage(conditions) {
    var message = 'The following was not covered:';
    for (var i = 0; i < conditions.length; i++) {
        if (conditions[i] !== undefined && conditions[i] !== null && !conditions[i].covered())
          message += '\n- '+ conditions[i].message();
    }
    return message;
};

function convertBranchDataConditionArrayToJSON(branchDataConditionArray) {
    var array = [];
    var length = branchDataConditionArray.length;
    for (var condition = 0; condition < length; condition++) {
        var branchDataObject = branchDataConditionArray[condition];
        if (branchDataObject === undefined || branchDataObject === null) {
            value = 'null';
        } else {
            value = branchDataObject.toJSON();
        }
        array.push(value);
    }
    return '[' + array.join(',') + ']';
}

function convertBranchDataLinesToJSON(branchData) {
    if (branchData === undefined) {
        return '[]'
    }
    var array = [];
    var length = branchData.length;
    for (var line = 0; line < length; line++) {
        var branchDataObject = branchData[line];
        if (branchDataObject === undefined || branchDataObject === null) {
            value = 'null';
        } else {
            value = convertBranchDataConditionArrayToJSON(branchDataObject);
        }
        array.push(value);
    }
    return '[' + array.join(',') + ']';
}

function convertBranchDataLinesFromJSON(jsonObject) {
    if (jsonObject === undefined) {
        return [];
    }
    var length = jsonObject.length;
    for (var line = 0; line < length; line++) {
        var branchDataJSON = jsonObject[line];
        if (branchDataJSON !== null) {
            for (var conditionIndex = 0; conditionIndex < branchDataJSON.length; conditionIndex ++) {
                var condition = branchDataJSON[conditionIndex];
                if (condition !== null) {
                    branchDataJSON[conditionIndex] = BranchData.fromJsonObject(condition);
                }
            }
        }
    }
    return jsonObject;
}
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
      top.opener._$jscoverage.branchData = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
      top._$jscoverage.branchData = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    this._$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (! this._$jscoverage) {
  this._$jscoverage = {};
  this._$jscoverage.branchData = {};
}
if (! _$jscoverage['vista_menus_content.js']) {
  _$jscoverage['vista_menus_content.js'] = [];
  _$jscoverage['vista_menus_content.js'][1] = 0;
  _$jscoverage['vista_menus_content.js'][2] = 0;
  _$jscoverage['vista_menus_content.js'][8] = 0;
  _$jscoverage['vista_menus_content.js'][9] = 0;
  _$jscoverage['vista_menus_content.js'][11] = 0;
  _$jscoverage['vista_menus_content.js'][24] = 0;
  _$jscoverage['vista_menus_content.js'][25] = 0;
  _$jscoverage['vista_menus_content.js'][26] = 0;
  _$jscoverage['vista_menus_content.js'][27] = 0;
  _$jscoverage['vista_menus_content.js'][28] = 0;
  _$jscoverage['vista_menus_content.js'][29] = 0;
  _$jscoverage['vista_menus_content.js'][30] = 0;
  _$jscoverage['vista_menus_content.js'][33] = 0;
  _$jscoverage['vista_menus_content.js'][37] = 0;
  _$jscoverage['vista_menus_content.js'][38] = 0;
  _$jscoverage['vista_menus_content.js'][39] = 0;
  _$jscoverage['vista_menus_content.js'][40] = 0;
  _$jscoverage['vista_menus_content.js'][41] = 0;
  _$jscoverage['vista_menus_content.js'][42] = 0;
  _$jscoverage['vista_menus_content.js'][45] = 0;
  _$jscoverage['vista_menus_content.js'][46] = 0;
  _$jscoverage['vista_menus_content.js'][49] = 0;
  _$jscoverage['vista_menus_content.js'][50] = 0;
  _$jscoverage['vista_menus_content.js'][51] = 0;
  _$jscoverage['vista_menus_content.js'][52] = 0;
  _$jscoverage['vista_menus_content.js'][55] = 0;
  _$jscoverage['vista_menus_content.js'][56] = 0;
  _$jscoverage['vista_menus_content.js'][57] = 0;
  _$jscoverage['vista_menus_content.js'][60] = 0;
  _$jscoverage['vista_menus_content.js'][61] = 0;
  _$jscoverage['vista_menus_content.js'][62] = 0;
  _$jscoverage['vista_menus_content.js'][65] = 0;
  _$jscoverage['vista_menus_content.js'][67] = 0;
  _$jscoverage['vista_menus_content.js'][68] = 0;
  _$jscoverage['vista_menus_content.js'][69] = 0;
  _$jscoverage['vista_menus_content.js'][72] = 0;
  _$jscoverage['vista_menus_content.js'][75] = 0;
  _$jscoverage['vista_menus_content.js'][76] = 0;
  _$jscoverage['vista_menus_content.js'][77] = 0;
  _$jscoverage['vista_menus_content.js'][81] = 0;
  _$jscoverage['vista_menus_content.js'][82] = 0;
  _$jscoverage['vista_menus_content.js'][84] = 0;
  _$jscoverage['vista_menus_content.js'][85] = 0;
  _$jscoverage['vista_menus_content.js'][86] = 0;
  _$jscoverage['vista_menus_content.js'][88] = 0;
  _$jscoverage['vista_menus_content.js'][89] = 0;
  _$jscoverage['vista_menus_content.js'][95] = 0;
  _$jscoverage['vista_menus_content.js'][96] = 0;
  _$jscoverage['vista_menus_content.js'][99] = 0;
  _$jscoverage['vista_menus_content.js'][100] = 0;
  _$jscoverage['vista_menus_content.js'][101] = 0;
  _$jscoverage['vista_menus_content.js'][102] = 0;
  _$jscoverage['vista_menus_content.js'][104] = 0;
  _$jscoverage['vista_menus_content.js'][107] = 0;
  _$jscoverage['vista_menus_content.js'][111] = 0;
  _$jscoverage['vista_menus_content.js'][112] = 0;
  _$jscoverage['vista_menus_content.js'][113] = 0;
  _$jscoverage['vista_menus_content.js'][117] = 0;
  _$jscoverage['vista_menus_content.js'][118] = 0;
  _$jscoverage['vista_menus_content.js'][122] = 0;
  _$jscoverage['vista_menus_content.js'][124] = 0;
  _$jscoverage['vista_menus_content.js'][125] = 0;
  _$jscoverage['vista_menus_content.js'][127] = 0;
  _$jscoverage['vista_menus_content.js'][128] = 0;
  _$jscoverage['vista_menus_content.js'][133] = 0;
  _$jscoverage['vista_menus_content.js'][134] = 0;
  _$jscoverage['vista_menus_content.js'][142] = 0;
  _$jscoverage['vista_menus_content.js'][143] = 0;
  _$jscoverage['vista_menus_content.js'][146] = 0;
}
_$jscoverage['vista_menus_content.js'].source = ["function menus_main() {","  chart = d3.chart.treeview()","                .height(1050)","                .width(1280*2)","                .margins({top: 42, left: 260, bottom: 0, right: 0})","                .textwidth(300)","                .nodeTextHyperLink(getOptionDetailLink);","  chart.on(\"text\",\"attr\",\"fill\",color_by_type);","  selectedIndex=0;","","  menuType = [","    {iName: \"legend\",color: \"black\",dName: \"All Types\"},","    {iName: \"menu\",color :\"gray\",dName: \"Menu\"},","    {iName: \"run routine\",color :\"#ff7f0e\",dName: \"Run Routine\"},","    {iName: \"Broker (Client/Server)\" , color : \"#17becf\", dName: \"Broker (Client/Server)\"},","    {iName: \"edit\",color :\"#2ca02c\",dName: \"Edit\"},","    {iName: \"server\",color :\"#d62728\",dName: \"Server\"},","    {iName: \"print\",color :\"#9467bd\",dName: \"Print\"},","    {iName: \"action\",color :\"#8c564b\",dName: \"Action\"},","    {iName: \"ScreenMan\",color :\"#e377c2\",dName: \"ScreenMan\"},","    {iName: \"inquire\" , color : \"#bcbd22\",dName: \"Inquire\" }","  ];","}","function color_by_type(node) {","  if(node.type == undefined){","    return node.color","  };","  for(var i=0;i&lt;menuType.length; i++) {","    if  (node.type == menuType[i].iName) {","      return menuType[i].color;","    }","  }","  return \"#E0E0E0\";","  ","}","","function color_filter(d) {","  if(d.type == undefined){","    return d.color","  };","  if (d.type != menuType[selectedIndex].iName) {","    return \"#E0E0E0\";","  }","  else {","    return menuType[selectedIndex].color;","  };","}","","function autoCompleteChanged(eve, ui) {","  var menuFile = \"menus/VistAMenu-\" + ui.item.id + \".json\";","  console.log(\"Menu file is \" + menuFile);","  resetMenuFile(menuFile);","}","","function _collapseAllNode() {","  collapseAllNode(chart.nodes());","  chart.update(chart.nodes());    ","}","","function _resetAllNode() {","  resetAllNode(chart.nodes());","  chart.update(chart.nodes());","}","","resetMenuFile(\"menus/VistAMenu-9.json\");","","function resetMenuFile(menuFile) {","  d3.json(menuFile, function(json) {","    resetAllNode(json);","    chart.on(\"node\", \"event\", \"mouseover\", node_onMouseOver)","       .on(\"node\", \"event\",\"mouseout\", node_onMouseOut)","       .on(\"text\", \"attr\", \"cursor\", function(d) { return \"pointer\"; })","       //.on(\"text\", \"event\",\"click\", node_onMouseClick)","       .on(\"circle\", \"event\", \"click\", node_onMouseClick)","       .on(\"circle\", \"attr\", \"r\", function(d) { return 7 - d.depth/2; });","    d3.select(\"#treeview_placeholder\").datum(json).call(chart);","    generate_legend();","  })","}","","var toolTip = d3.select(document.getElementById(\"toolTip\"));","var header = d3.select(document.getElementById(\"head\"));","","function node_onMouseClick(d) {","  chart.onNodeClick(d);","  if(selectedIndex !== 0){","    d3.selectAll(\"text\")","      .attr(\"fill\", function (d) {","        return color_filter(d);","      });","  }","}","","","function getOptionDetailLink(node) {","  return \"files/19-\" + node.ien + \".html\";","}","","function node_onMouseOver(d) {","  var headText = \"Option Name: \" + d.option;","  if (d.lock !== undefined){","    headText = headText + \"&lt;br&gt;\" + \"Security Key: \" + d.lock + \"&lt;/br&gt;\";","  }","  header.html(headText);","  toolTip.style(\"left\", (d3.event.pageX + 20) + \"px\")","         .style(\"top\", (d3.event.pageY + 5) + \"px\")","         .style(\"opacity\", \".9\");","","}","","function node_onMouseOut(d) {","  header.text(\"\");","  toolTip.style(\"opacity\", \"0\");","","}","","function generate_legend() {","  var legend = chart.svg().selectAll(\"g.legend\")","    .data(menuType)","    .enter().append(\"svg:g\")","    .attr(\"class\", \"legend\")","    .attr(\"transform\", function(d, i) { return \"translate(-250,\" + (i * 30 + 180) + \")\"; })","    .on(\"click\", function(d) {","      selectedIndex = menuType.indexOf(d);","      if(selectedIndex !== 0){","        d3.selectAll(\"text\")","          .attr(\"fill\", function (d) {","            return color_filter(d);","          });","      }","      else {","        d3.selectAll(\"text\")","          .attr(\"fill\", function (d) {","            return color_by_type(d);","          });","      }","    });","","  legend.append(\"svg:text\")","    .attr(\"x\", 13)","    .attr(\"dy\", \".31em\")","    .attr(\"fill\",function(d) {return d.color;})","    .text(function(d) {return  d.dName; });","","","};  "];
_$jscoverage['vista_menus_content.js'][1]++;
function menus_main() {
  _$jscoverage['vista_menus_content.js'][2]++;
  chart = d3.chart.treeview().height(1050).width(1280 * 2).margins({
  top: 42, 
  left: 260, 
  bottom: 0, 
  right: 0}).textwidth(300).nodeTextHyperLink(getOptionDetailLink);
  _$jscoverage['vista_menus_content.js'][8]++;
  chart.on("text", "attr", "fill", color_by_type);
  _$jscoverage['vista_menus_content.js'][9]++;
  selectedIndex = 0;
  _$jscoverage['vista_menus_content.js'][11]++;
  menuType = [{
  iName: "legend", 
  color: "black", 
  dName: "All Types"}, {
  iName: "menu", 
  color: "gray", 
  dName: "Menu"}, {
  iName: "run routine", 
  color: "#ff7f0e", 
  dName: "Run Routine"}, {
  iName: "Broker (Client/Server)", 
  color: "#17becf", 
  dName: "Broker (Client/Server)"}, {
  iName: "edit", 
  color: "#2ca02c", 
  dName: "Edit"}, {
  iName: "server", 
  color: "#d62728", 
  dName: "Server"}, {
  iName: "print", 
  color: "#9467bd", 
  dName: "Print"}, {
  iName: "action", 
  color: "#8c564b", 
  dName: "Action"}, {
  iName: "ScreenMan", 
  color: "#e377c2", 
  dName: "ScreenMan"}, {
  iName: "inquire", 
  color: "#bcbd22", 
  dName: "Inquire"}];
}
_$jscoverage['vista_menus_content.js'][24]++;
function color_by_type(node) {
  _$jscoverage['vista_menus_content.js'][25]++;
  if (node.type == undefined) {
    _$jscoverage['vista_menus_content.js'][26]++;
    return node.color;
  }
  _$jscoverage['vista_menus_content.js'][27]++;
  ;
  _$jscoverage['vista_menus_content.js'][28]++;
  for (var i = 0; i < menuType.length; i++) {
    _$jscoverage['vista_menus_content.js'][29]++;
    if (node.type == menuType[i].iName) {
      _$jscoverage['vista_menus_content.js'][30]++;
      return menuType[i].color;
    }
  }
  _$jscoverage['vista_menus_content.js'][33]++;
  return "#E0E0E0";
}
_$jscoverage['vista_menus_content.js'][37]++;
function color_filter(d) {
  _$jscoverage['vista_menus_content.js'][38]++;
  if (d.type == undefined) {
    _$jscoverage['vista_menus_content.js'][39]++;
    return d.color;
  }
  _$jscoverage['vista_menus_content.js'][40]++;
  ;
  _$jscoverage['vista_menus_content.js'][41]++;
  if (d.type != menuType[selectedIndex].iName) {
    _$jscoverage['vista_menus_content.js'][42]++;
    return "#E0E0E0";
  } else {
    _$jscoverage['vista_menus_content.js'][45]++;
    return menuType[selectedIndex].color;
  }
  _$jscoverage['vista_menus_content.js'][46]++;
  ;
}
_$jscoverage['vista_menus_content.js'][49]++;
function autoCompleteChanged(eve, ui) {
  _$jscoverage['vista_menus_content.js'][50]++;
  var menuFile = "menus/VistAMenu-" + ui.item.id + ".json";
  _$jscoverage['vista_menus_content.js'][51]++;
  console.log("Menu file is " + menuFile);
  _$jscoverage['vista_menus_content.js'][52]++;
  resetMenuFile(menuFile);
}
_$jscoverage['vista_menus_content.js'][55]++;
function _collapseAllNode() {
  _$jscoverage['vista_menus_content.js'][56]++;
  collapseAllNode(chart.nodes());
  _$jscoverage['vista_menus_content.js'][57]++;
  chart.update(chart.nodes());
}
_$jscoverage['vista_menus_content.js'][60]++;
function _resetAllNode() {
  _$jscoverage['vista_menus_content.js'][61]++;
  resetAllNode(chart.nodes());
  _$jscoverage['vista_menus_content.js'][62]++;
  chart.update(chart.nodes());
}
_$jscoverage['vista_menus_content.js'][65]++;
resetMenuFile("menus/VistAMenu-9.json");
_$jscoverage['vista_menus_content.js'][67]++;
function resetMenuFile(menuFile) {
  _$jscoverage['vista_menus_content.js'][68]++;
  d3.json(menuFile, function(json) {
  _$jscoverage['vista_menus_content.js'][69]++;
  resetAllNode(json);
  _$jscoverage['vista_menus_content.js'][75]++;
  chart.on("node", "event", "mouseover", node_onMouseOver).on("node", "event", "mouseout", node_onMouseOut).on("text", "attr", "cursor", function(d) {
  _$jscoverage['vista_menus_content.js'][72]++;
  return "pointer";
}).on("circle", "event", "click", node_onMouseClick).on("circle", "attr", "r", function(d) {
  return 7 - d.depth / 2;
});
  _$jscoverage['vista_menus_content.js'][76]++;
  d3.select("#treeview_placeholder").datum(json).call(chart);
  _$jscoverage['vista_menus_content.js'][77]++;
  generate_legend();
});
}
_$jscoverage['vista_menus_content.js'][81]++;
var toolTip = d3.select(document.getElementById("toolTip"));
_$jscoverage['vista_menus_content.js'][82]++;
var header = d3.select(document.getElementById("head"));
_$jscoverage['vista_menus_content.js'][84]++;
function node_onMouseClick(d) {
  _$jscoverage['vista_menus_content.js'][85]++;
  chart.onNodeClick(d);
  _$jscoverage['vista_menus_content.js'][86]++;
  if (selectedIndex !== 0) {
    _$jscoverage['vista_menus_content.js'][88]++;
    d3.selectAll("text").attr("fill", function(d) {
  _$jscoverage['vista_menus_content.js'][89]++;
  return color_filter(d);
});
  }
}
_$jscoverage['vista_menus_content.js'][95]++;
function getOptionDetailLink(node) {
  _$jscoverage['vista_menus_content.js'][96]++;
  return "files/19-" + node.ien + ".html";
}
_$jscoverage['vista_menus_content.js'][99]++;
function node_onMouseOver(d) {
  _$jscoverage['vista_menus_content.js'][100]++;
  var headText = "Option Name: " + d.option;
  _$jscoverage['vista_menus_content.js'][101]++;
  if (d.lock !== undefined) {
    _$jscoverage['vista_menus_content.js'][102]++;
    headText = headText + "<br>" + "Security Key: " + d.lock + "</br>";
  }
  _$jscoverage['vista_menus_content.js'][104]++;
  header.html(headText);
  _$jscoverage['vista_menus_content.js'][107]++;
  toolTip.style("left", (d3.event.pageX + 20) + "px").style("top", (d3.event.pageY + 5) + "px").style("opacity", ".9");
}
_$jscoverage['vista_menus_content.js'][111]++;
function node_onMouseOut(d) {
  _$jscoverage['vista_menus_content.js'][112]++;
  header.text("");
  _$jscoverage['vista_menus_content.js'][113]++;
  toolTip.style("opacity", "0");
}
_$jscoverage['vista_menus_content.js'][117]++;
function generate_legend() {
  _$jscoverage['vista_menus_content.js'][118]++;
  var legend = chart.svg().selectAll("g.legend").data(menuType).enter().append("svg:g").attr("class", "legend").attr("transform", function(d, i) {
  _$jscoverage['vista_menus_content.js'][122]++;
  return "translate(-250," + (i * 30 + 180) + ")";
}).on("click", function(d) {
  _$jscoverage['vista_menus_content.js'][124]++;
  selectedIndex = menuType.indexOf(d);
  _$jscoverage['vista_menus_content.js'][125]++;
  if (selectedIndex !== 0) {
    _$jscoverage['vista_menus_content.js'][127]++;
    d3.selectAll("text").attr("fill", function(d) {
  _$jscoverage['vista_menus_content.js'][128]++;
  return color_filter(d);
});
  } else {
    _$jscoverage['vista_menus_content.js'][133]++;
    d3.selectAll("text").attr("fill", function(d) {
  _$jscoverage['vista_menus_content.js'][134]++;
  return color_by_type(d);
});
  }
});
  _$jscoverage['vista_menus_content.js'][143]++;
  legend.append("svg:text").attr("x", 13).attr("dy", ".31em").attr("fill", function(d) {
  _$jscoverage['vista_menus_content.js'][142]++;
  return d.color;
}).text(function(d) {
  return d.dName;
});
}
_$jscoverage['vista_menus_content.js'][146]++;
;
