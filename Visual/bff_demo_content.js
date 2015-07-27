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
if (! _$jscoverage['bff_demo_content.js']) {
  _$jscoverage['bff_demo_content.js'] = [];
  _$jscoverage['bff_demo_content.js'][1] = 0;
  _$jscoverage['bff_demo_content.js'][3] = 0;
  _$jscoverage['bff_demo_content.js'][4] = 0;
  _$jscoverage['bff_demo_content.js'][10] = 0;
  _$jscoverage['bff_demo_content.js'][11] = 0;
  _$jscoverage['bff_demo_content.js'][16] = 0;
  _$jscoverage['bff_demo_content.js'][19] = 0;
  _$jscoverage['bff_demo_content.js'][20] = 0;
  _$jscoverage['bff_demo_content.js'][23] = 0;
  _$jscoverage['bff_demo_content.js'][24] = 0;
  _$jscoverage['bff_demo_content.js'][26] = 0;
  _$jscoverage['bff_demo_content.js'][27] = 0;
  _$jscoverage['bff_demo_content.js'][28] = 0;
  _$jscoverage['bff_demo_content.js'][31] = 0;
  _$jscoverage['bff_demo_content.js'][35] = 0;
  _$jscoverage['bff_demo_content.js'][38] = 0;
  _$jscoverage['bff_demo_content.js'][39] = 0;
  _$jscoverage['bff_demo_content.js'][40] = 0;
  _$jscoverage['bff_demo_content.js'][48] = 0;
  _$jscoverage['bff_demo_content.js'][49] = 0;
  _$jscoverage['bff_demo_content.js'][50] = 0;
  _$jscoverage['bff_demo_content.js'][51] = 0;
  _$jscoverage['bff_demo_content.js'][52] = 0;
  _$jscoverage['bff_demo_content.js'][55] = 0;
  _$jscoverage['bff_demo_content.js'][56] = 0;
  _$jscoverage['bff_demo_content.js'][57] = 0;
  _$jscoverage['bff_demo_content.js'][59] = 0;
  _$jscoverage['bff_demo_content.js'][60] = 0;
  _$jscoverage['bff_demo_content.js'][61] = 0;
  _$jscoverage['bff_demo_content.js'][64] = 0;
  _$jscoverage['bff_demo_content.js'][69] = 0;
  _$jscoverage['bff_demo_content.js'][70] = 0;
  _$jscoverage['bff_demo_content.js'][73] = 0;
  _$jscoverage['bff_demo_content.js'][74] = 0;
  _$jscoverage['bff_demo_content.js'][75] = 0;
}
_$jscoverage['bff_demo_content.js'].source = ["function bff_main () {","","  $(\"#accordion\").accordion({heightStyle: 'content', collapsible: true}).hide();","  chart = d3.chart.treeview()","                .height(940)","                .width(1880)","                .margins({top: 45, left: 280, bottom: 0, right: 0})","                .textwidth(280);","","  d3.json(\"bff.json\", function(json) {","    resetAllNode(json);","    chart.on(\"node\", \"event\", \"mouseover\", node_onMouseOver)","       .on(\"node\", \"event\",\"mouseout\", node_onMouseOut)","       .on(\"node\", \"event\",\"click\", chart.onNodeClick)","       .on(\"text\", \"attr\", \"cursor\", function(d) {","          return d.description !== undefined &amp;&amp; d.description ? \"pointer\" : \"hand\";","        })","       .on(\"text\", \"event\", \"click\", text_onMouseClick)","       .on(\"circle\", \"attr\", \"r\", function(d) { return 7 - d.depth/2; });","    d3.select(\"#treeview_placeholder\").datum(json).call(chart);","  });","","  toolTip = d3.select(document.getElementById(\"toolTip\"));","  header = d3.select(document.getElementById(\"head\"));","}","function node_onMouseOver(d) {","    if (d.number !== undefined){","      header.text(\"\" + d.number);","    }","    else{","      return;","    }","    toolTip.style(\"left\", (d3.event.pageX + 20) + \"px\")","           .style(\"top\", (d3.event.pageY + 5) + \"px\")","           .style(\"opacity\", \".9\");","}","","function text_onMouseClick(d) {","  if (d.description) {","    var overlayDialogObj = {","      autoOpen: true,","      height: 'auto',","      width: 700,","      modal: true,","      position: [\"center\",\"center-50\"],","      title: \"\" + d.number + \": \" + d.name,","      open: function(){","          $('#description').html(d.description);","          if (d.commentary){","            $('#commentary').html(d.commentary);","            $('#commentary').show();","            $('#commentary_head').show();","          }","          else{","            $('#commentary').html('');","            $('#commentary_head').hide();","            $('#commentary').hide();","          }","          $('#accordion').accordion(\"option\", \"active\", 0);","          $('#accordion').accordion(\"refresh\");","          $('#accordion').accordion({heightStyle: 'content'}).show();","      },","   };","   $('#dialog-modal').dialog(overlayDialogObj).show();","    // var pkgUrl = package_link_url + d.name.replace(/ /g, '_') + \".html\";","    // var win = window.open(pkgUrl, '_black');","    // win.focus();","  }","  d3.event.preventDefault();","  d3.event.stopPropagation();","}","","function node_onMouseOut(d) {","  header.text(\"\");","  toolTip.style(\"opacity\", \"0\");","}"];
_$jscoverage['bff_demo_content.js'][1]++;
function bff_main() {
  _$jscoverage['bff_demo_content.js'][3]++;
  $("#accordion").accordion({
  heightStyle: 'content', 
  collapsible: true}).hide();
  _$jscoverage['bff_demo_content.js'][4]++;
  chart = d3.chart.treeview().height(940).width(1880).margins({
  top: 45, 
  left: 280, 
  bottom: 0, 
  right: 0}).textwidth(280);
  _$jscoverage['bff_demo_content.js'][10]++;
  d3.json("bff.json", function(json) {
  _$jscoverage['bff_demo_content.js'][11]++;
  resetAllNode(json);
  _$jscoverage['bff_demo_content.js'][19]++;
  chart.on("node", "event", "mouseover", node_onMouseOver).on("node", "event", "mouseout", node_onMouseOut).on("node", "event", "click", chart.onNodeClick).on("text", "attr", "cursor", function(d) {
  _$jscoverage['bff_demo_content.js'][16]++;
  return d.description !== undefined && d.description ? "pointer" : "hand";
}).on("text", "event", "click", text_onMouseClick).on("circle", "attr", "r", function(d) {
  return 7 - d.depth / 2;
});
  _$jscoverage['bff_demo_content.js'][20]++;
  d3.select("#treeview_placeholder").datum(json).call(chart);
});
  _$jscoverage['bff_demo_content.js'][23]++;
  toolTip = d3.select(document.getElementById("toolTip"));
  _$jscoverage['bff_demo_content.js'][24]++;
  header = d3.select(document.getElementById("head"));
}
_$jscoverage['bff_demo_content.js'][26]++;
function node_onMouseOver(d) {
  _$jscoverage['bff_demo_content.js'][27]++;
  if (d.number !== undefined) {
    _$jscoverage['bff_demo_content.js'][28]++;
    header.text("" + d.number);
  } else {
    _$jscoverage['bff_demo_content.js'][31]++;
    return;
  }
  _$jscoverage['bff_demo_content.js'][35]++;
  toolTip.style("left", (d3.event.pageX + 20) + "px").style("top", (d3.event.pageY + 5) + "px").style("opacity", ".9");
}
_$jscoverage['bff_demo_content.js'][38]++;
function text_onMouseClick(d) {
  _$jscoverage['bff_demo_content.js'][39]++;
  if (d.description) {
    _$jscoverage['bff_demo_content.js'][40]++;
    var overlayDialogObj = {
  autoOpen: true, 
  height: 'auto', 
  width: 700, 
  modal: true, 
  position: ["center", "center-50"], 
  title: "" + d.number + ": " + d.name, 
  open: function() {
  _$jscoverage['bff_demo_content.js'][48]++;
  $('#description').html(d.description);
  _$jscoverage['bff_demo_content.js'][49]++;
  if (d.commentary) {
    _$jscoverage['bff_demo_content.js'][50]++;
    $('#commentary').html(d.commentary);
    _$jscoverage['bff_demo_content.js'][51]++;
    $('#commentary').show();
    _$jscoverage['bff_demo_content.js'][52]++;
    $('#commentary_head').show();
  } else {
    _$jscoverage['bff_demo_content.js'][55]++;
    $('#commentary').html('');
    _$jscoverage['bff_demo_content.js'][56]++;
    $('#commentary_head').hide();
    _$jscoverage['bff_demo_content.js'][57]++;
    $('#commentary').hide();
  }
  _$jscoverage['bff_demo_content.js'][59]++;
  $('#accordion').accordion("option", "active", 0);
  _$jscoverage['bff_demo_content.js'][60]++;
  $('#accordion').accordion("refresh");
  _$jscoverage['bff_demo_content.js'][61]++;
  $('#accordion').accordion({
  heightStyle: 'content'}).show();
}};
    _$jscoverage['bff_demo_content.js'][64]++;
    $('#dialog-modal').dialog(overlayDialogObj).show();
  }
  _$jscoverage['bff_demo_content.js'][69]++;
  d3.event.preventDefault();
  _$jscoverage['bff_demo_content.js'][70]++;
  d3.event.stopPropagation();
}
_$jscoverage['bff_demo_content.js'][73]++;
function node_onMouseOut(d) {
  _$jscoverage['bff_demo_content.js'][74]++;
  header.text("");
  _$jscoverage['bff_demo_content.js'][75]++;
  toolTip.style("opacity", "0");
}
