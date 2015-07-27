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
if (! _$jscoverage['d3.dependencyedgebundling.js']) {
  _$jscoverage['d3.dependencyedgebundling.js'] = [];
  _$jscoverage['d3.dependencyedgebundling.js'][1] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][12] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][14] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][15] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][16] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][17] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][18] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][19] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][20] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][21] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][22] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][24] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][25] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][26] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][29] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][31] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][32] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][33] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][34] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][36] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][37] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][40] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][41] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][42] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][44] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][45] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][47] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][49] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][50] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][51] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][55] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][56] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][58] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][59] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][60] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][61] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][62] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][63] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][64] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][65] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][70] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][71] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][72] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][75] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][79] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][80] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][84] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][85] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][89] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][90] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][91] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][95] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][98] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][99] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][101] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][102] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][103] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][105] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][108] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][110] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][112] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][115] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][116] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][118] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][125] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][128] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][129] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][132] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][135] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][139] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][140] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][142] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][143] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][150] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][152] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][154] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][155] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][156] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][161] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][164] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][167] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][168] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][169] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][170] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][173] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][174] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][176] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][177] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][181] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][184] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][188] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][190] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][191] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][197] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][198] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][199] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][200] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][203] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][204] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][205] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][206] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][209] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][210] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][211] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][212] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][215] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][216] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][217] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][218] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][221] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][222] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][223] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][224] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][227] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][228] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][229] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][230] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][233] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][234] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][235] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][236] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][239] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][240] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][241] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][242] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][245] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][246] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][247] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][248] = 0;
  _$jscoverage['d3.dependencyedgebundling.js'][251] = 0;
}
_$jscoverage['d3.dependencyedgebundling.js'].source = ["d3.chart = d3.chart || {};","","/**"," * Dependency edge bundling chart for d3.js"," *"," * Usage:"," * var chart = d3.chart.dependencyedgebundling();"," * d3.select('#chart_placeholder')"," *   .datum(data)"," *   .call(chart);"," */","d3.chart.dependencyedgebundling = function(options) {","","  var _radius;","  var _diameter = 600;","  var _textRadius = 160;","  var _innerRadius;","  var _nodeTextHyperLink;","  var _txtLinkGap = 5;","  var _minTextWidth = 7.0;","  var _radialTextHeight = 12;","  var _mouseOvered, _mouseOuted;","","  function resetDimension() {","    _radius = _diameter / 2;","    _innerRadius = _radius - _textRadius;","  }","","  function autoDimension(data) {","    // automatically resize the dimension based on total number of nodes","    var item=0, maxLength=0, length=0, maxItem;","    for (item in data){","      length = data[item].name.length;","      if (maxLength &lt; length)","        {","          maxLength = length;","          maxItem = data[item].name;","        }","    }","    var minTextRadius = Math.ceil(maxLength * _minTextWidth);","    if (_textRadius &lt; minTextRadius) {","      _textRadius = minTextRadius;","    }","    var minInnerRadius = Math.ceil((_radialTextHeight * data.length)/2/Math.PI);","    if (minInnerRadius &lt; 140)","      {","        minInnerRadius = 140;","      }","    var minDiameter = 2 * (_textRadius + minInnerRadius + _txtLinkGap + 2);","    if (_diameter &lt; minDiameter) {","      _diameter = minDiameter;","    }","  }","  // Lazily construct the package hierarchy","  var _packageHierarchy = function (classes) {","    var map = {};","","    function setparent(name, data) {","      var node = map[name];","      if (!node) {","        node = map[name] = data || {name: name, children: []};","        if (name.length) {","          node.parent = map[\"\"];","          node.parent.children.push(node);","          node.key = name;","        }","      }","    }","","    setparent(\"\", null);","    classes.forEach(function(d) {","      setparent(d.name, d);","    });","","    return map[\"\"];","  }","","  // Return a list of depends for the given array of nodes.","  var packageDepends = function (nodes) {","    var map = {},","        depends = [];","","    // Compute a map from name to node.","    nodes.forEach(function(d) {","      map[d.name] = d;","    });","","    // For each dependency, construct a link from the source to target node.","    nodes.forEach(function(d) {","      if (d.depends) d.depends.forEach(function(i) {","        depends.push({source: map[d.name], target: map[i]});","      });","    });","","    return depends;","  }","  ","  function chart(selection) {","    selection.each(function(data) {","      // logic to set the size of the svg graph based on input","      autoDimension(data);","      resetDimension();","      var root = data;","      // create the layout","      var cluster =  d3.layout.cluster()","        .size([360, _innerRadius])","        .sort(null)","        .value(function(d) {return d.size; });","","      var bundle = d3.layout.bundle();","","      var line = d3.svg.line.radial()","          .interpolate(\"bundle\")","          .tension(.95)","          .radius(function(d) { return d.y; })","          .angle(function(d) { return d.x / 180 * Math.PI; });","","      var svg = selection.insert(\"svg\")","          .attr(\"width\", _diameter)","          .attr(\"height\", _diameter)","        .append(\"g\")","          .attr(\"transform\", \"translate(\" + _radius + \",\" + _radius + \")\");","","      // get all the link and node","      var link = svg.append(\"g\").selectAll(\".link\"),","          node = svg.append(\"g\").selectAll(\".node\");","      ","      var pkgNodes  = _packageHierarchy(root);","      var nodes = cluster.nodes(pkgNodes),","          links = packageDepends(nodes);","      ","      link = link","          .data(bundle(links))","        .enter().append(\"path\")","          .each(function(d) { d.source = d[0], d.target = d[d.length - 1]; })","          .attr(\"class\", \"link\")","          .attr(\"d\", line);","","      node = node","          .data(nodes.filter(function(n) { return !n.children; }))","        .enter();","      if (_nodeTextHyperLink) {","        node = node.append(\"a\")","          .attr(\"xlink:href\", _nodeTextHyperLink)","          .attr(\"target\", \"_blank\")","          .style(\"text-decoration\", \"none\")","          .insert(\"text\");","      }","      else {","        node = node.append(\"text\");","      }","      node = node.attr(\"class\", \"node\")","          .attr(\"dy\", \".31em\")","          .attr(\"transform\", function(d) { return \"rotate(\" + (d.x - 90) + \")translate(\" + (d.y + _txtLinkGap) + \",0)\" + (d.x &lt; 180 ? \"\" : \"rotate(180)\"); })","          .style(\"text-anchor\", function(d) { return d.x &lt; 180 ? \"start\" : \"end\"; })","          .text(function(d) { return d.name; })","          .on(\"mouseover\", mouseovered)","          .on(\"mouseout\", mouseouted);","          //.on(\"click\", _onNodeClick);","","      function mouseovered(d) {","","        node","            .each(function(n) { n.target = n.source = false; });","","        link","            .classed(\"link--target\", function(l) { if (l.target === d) return l.source.source = true; })","            .classed(\"link--source\", function(l) { if (l.source === d) return l.target.target = true; })","            .filter(function(l) { return l.target === d || l.source === d; })","            .each(function() { this.parentNode.appendChild(this); });","","        node","            .classed(\"node--target\", function(n) { return n.target; })","            .classed(\"node--source\", function(n) { return n.source; });","        ","        if (_mouseOvered) {","          _mouseOvered(d);","        }","      }","","      function mouseouted(d) {","        link","            .classed(\"link--target\", false)","            .classed(\"link--source\", false);","","        node","            .classed(\"node--target\", false)","            .classed(\"node--source\", false);","","        if (_mouseOuted) {","          _mouseOuted(d);","        }","      }","    });","  }","","  chart.nodeTextHyperLink = function(n) {","    if (!arguments.length) return n;","    _nodeTextHyperLink = n;","    return chart;","  };","  ","  chart.packageHierarchy = function (p) {","    if (!arguments.length) return p;","    _packageHierarchy = p;","    return chart;","  };","","  chart.diameter = function (d) {","    if (!arguments.length) return d;","    _diameter = d;","    return chart;","  };","","  chart.textRadius = function (t) {","    if (!arguments.length) return t;","    _textRadius = t;","    return chart;","  };","","  chart.txtLinkGap = function (t) {","    if (!arguments.length) return t;","    _txtLinkGap = t;","    return chart;","  };","","  chart.txtWidth = function (t) {","    if (!arguments.length) return t;","    _minTextWidth = t;","    return chart;","  };","","  chart.nodeWidth = function (n) {","    if (!arguments.length) return n;","    _radialTextHeight = n;","    return chart;","  };","  ","  chart.mouseOvered = function (d) {","    if (!arguments.length) return d;","    _mouseOvered = d;","    return chart;","  };","","  chart.mouseOuted = function (d) {","    if (!arguments.length) return d;","    _mouseOuted = d;","    return chart;","  };","","  return chart;","","};"];
_$jscoverage['d3.dependencyedgebundling.js'][1]++;
d3.chart = d3.chart || {};
_$jscoverage['d3.dependencyedgebundling.js'][12]++;
d3.chart.dependencyedgebundling = function(options) {
  _$jscoverage['d3.dependencyedgebundling.js'][14]++;
  var _radius;
  _$jscoverage['d3.dependencyedgebundling.js'][15]++;
  var _diameter = 600;
  _$jscoverage['d3.dependencyedgebundling.js'][16]++;
  var _textRadius = 160;
  _$jscoverage['d3.dependencyedgebundling.js'][17]++;
  var _innerRadius;
  _$jscoverage['d3.dependencyedgebundling.js'][18]++;
  var _nodeTextHyperLink;
  _$jscoverage['d3.dependencyedgebundling.js'][19]++;
  var _txtLinkGap = 5;
  _$jscoverage['d3.dependencyedgebundling.js'][20]++;
  var _minTextWidth = 7.0;
  _$jscoverage['d3.dependencyedgebundling.js'][21]++;
  var _radialTextHeight = 12;
  _$jscoverage['d3.dependencyedgebundling.js'][22]++;
  var _mouseOvered, _mouseOuted;
  _$jscoverage['d3.dependencyedgebundling.js'][24]++;
  function resetDimension() {
    _$jscoverage['d3.dependencyedgebundling.js'][25]++;
    _radius = _diameter / 2;
    _$jscoverage['d3.dependencyedgebundling.js'][26]++;
    _innerRadius = _radius - _textRadius;
  }
  _$jscoverage['d3.dependencyedgebundling.js'][29]++;
  function autoDimension(data) {
    _$jscoverage['d3.dependencyedgebundling.js'][31]++;
    var item = 0, maxLength = 0, length = 0, maxItem;
    _$jscoverage['d3.dependencyedgebundling.js'][32]++;
    for (item in data) {
      _$jscoverage['d3.dependencyedgebundling.js'][33]++;
      length = data[item].name.length;
      _$jscoverage['d3.dependencyedgebundling.js'][34]++;
      if (maxLength < length) {
        _$jscoverage['d3.dependencyedgebundling.js'][36]++;
        maxLength = length;
        _$jscoverage['d3.dependencyedgebundling.js'][37]++;
        maxItem = data[item].name;
      }
    }
    _$jscoverage['d3.dependencyedgebundling.js'][40]++;
    var minTextRadius = Math.ceil(maxLength * _minTextWidth);
    _$jscoverage['d3.dependencyedgebundling.js'][41]++;
    if (_textRadius < minTextRadius) {
      _$jscoverage['d3.dependencyedgebundling.js'][42]++;
      _textRadius = minTextRadius;
    }
    _$jscoverage['d3.dependencyedgebundling.js'][44]++;
    var minInnerRadius = Math.ceil((_radialTextHeight * data.length) / 2 / Math.PI);
    _$jscoverage['d3.dependencyedgebundling.js'][45]++;
    if (minInnerRadius < 140) {
      _$jscoverage['d3.dependencyedgebundling.js'][47]++;
      minInnerRadius = 140;
    }
    _$jscoverage['d3.dependencyedgebundling.js'][49]++;
    var minDiameter = 2 * (_textRadius + minInnerRadius + _txtLinkGap + 2);
    _$jscoverage['d3.dependencyedgebundling.js'][50]++;
    if (_diameter < minDiameter) {
      _$jscoverage['d3.dependencyedgebundling.js'][51]++;
      _diameter = minDiameter;
    }
  }
  _$jscoverage['d3.dependencyedgebundling.js'][55]++;
  var _packageHierarchy = function(classes) {
  _$jscoverage['d3.dependencyedgebundling.js'][56]++;
  var map = {};
  _$jscoverage['d3.dependencyedgebundling.js'][58]++;
  function setparent(name, data) {
    _$jscoverage['d3.dependencyedgebundling.js'][59]++;
    var node = map[name];
    _$jscoverage['d3.dependencyedgebundling.js'][60]++;
    if (!node) {
      _$jscoverage['d3.dependencyedgebundling.js'][61]++;
      node = map[name] = data || {
  name: name, 
  children: []};
      _$jscoverage['d3.dependencyedgebundling.js'][62]++;
      if (name.length) {
        _$jscoverage['d3.dependencyedgebundling.js'][63]++;
        node.parent = map[""];
        _$jscoverage['d3.dependencyedgebundling.js'][64]++;
        node.parent.children.push(node);
        _$jscoverage['d3.dependencyedgebundling.js'][65]++;
        node.key = name;
      }
    }
  }
  _$jscoverage['d3.dependencyedgebundling.js'][70]++;
  setparent("", null);
  _$jscoverage['d3.dependencyedgebundling.js'][71]++;
  classes.forEach(function(d) {
  _$jscoverage['d3.dependencyedgebundling.js'][72]++;
  setparent(d.name, d);
});
  _$jscoverage['d3.dependencyedgebundling.js'][75]++;
  return map[""];
};
  _$jscoverage['d3.dependencyedgebundling.js'][79]++;
  var packageDepends = function(nodes) {
  _$jscoverage['d3.dependencyedgebundling.js'][80]++;
  var map = {}, depends = [];
  _$jscoverage['d3.dependencyedgebundling.js'][84]++;
  nodes.forEach(function(d) {
  _$jscoverage['d3.dependencyedgebundling.js'][85]++;
  map[d.name] = d;
});
  _$jscoverage['d3.dependencyedgebundling.js'][89]++;
  nodes.forEach(function(d) {
  _$jscoverage['d3.dependencyedgebundling.js'][90]++;
  if (d.depends) 
    d.depends.forEach(function(i) {
  _$jscoverage['d3.dependencyedgebundling.js'][91]++;
  depends.push({
  source: map[d.name], 
  target: map[i]});
});
});
  _$jscoverage['d3.dependencyedgebundling.js'][95]++;
  return depends;
};
  _$jscoverage['d3.dependencyedgebundling.js'][98]++;
  function chart(selection) {
    _$jscoverage['d3.dependencyedgebundling.js'][99]++;
    selection.each(function(data) {
  _$jscoverage['d3.dependencyedgebundling.js'][101]++;
  autoDimension(data);
  _$jscoverage['d3.dependencyedgebundling.js'][102]++;
  resetDimension();
  _$jscoverage['d3.dependencyedgebundling.js'][103]++;
  var root = data;
  _$jscoverage['d3.dependencyedgebundling.js'][105]++;
  var cluster = d3.layout.cluster().size([360, _innerRadius]).sort(null).value(function(d) {
  _$jscoverage['d3.dependencyedgebundling.js'][108]++;
  return d.size;
});
  _$jscoverage['d3.dependencyedgebundling.js'][110]++;
  var bundle = d3.layout.bundle();
  _$jscoverage['d3.dependencyedgebundling.js'][112]++;
  var line = d3.svg.line.radial().interpolate("bundle").tension(.95).radius(function(d) {
  _$jscoverage['d3.dependencyedgebundling.js'][115]++;
  return d.y;
}).angle(function(d) {
  _$jscoverage['d3.dependencyedgebundling.js'][116]++;
  return d.x / 180 * Math.PI;
});
  _$jscoverage['d3.dependencyedgebundling.js'][118]++;
  var svg = selection.insert("svg").attr("width", _diameter).attr("height", _diameter).append("g").attr("transform", "translate(" + _radius + "," + _radius + ")");
  _$jscoverage['d3.dependencyedgebundling.js'][125]++;
  var link = svg.append("g").selectAll(".link"), node = svg.append("g").selectAll(".node");
  _$jscoverage['d3.dependencyedgebundling.js'][128]++;
  var pkgNodes = _packageHierarchy(root);
  _$jscoverage['d3.dependencyedgebundling.js'][129]++;
  var nodes = cluster.nodes(pkgNodes), links = packageDepends(nodes);
  _$jscoverage['d3.dependencyedgebundling.js'][132]++;
  link = link.data(bundle(links)).enter().append("path").each(function(d) {
  _$jscoverage['d3.dependencyedgebundling.js'][135]++;
  d.source = d[0] , d.target = d[d.length - 1];
}).attr("class", "link").attr("d", line);
  _$jscoverage['d3.dependencyedgebundling.js'][139]++;
  node = node.data(nodes.filter(function(n) {
  _$jscoverage['d3.dependencyedgebundling.js'][140]++;
  return !n.children;
})).enter();
  _$jscoverage['d3.dependencyedgebundling.js'][142]++;
  if (_nodeTextHyperLink) {
    _$jscoverage['d3.dependencyedgebundling.js'][143]++;
    node = node.append("a").attr("xlink:href", _nodeTextHyperLink).attr("target", "_blank").style("text-decoration", "none").insert("text");
  } else {
    _$jscoverage['d3.dependencyedgebundling.js'][150]++;
    node = node.append("text");
  }
  _$jscoverage['d3.dependencyedgebundling.js'][152]++;
  node = node.attr("class", "node").attr("dy", ".31em").attr("transform", function(d) {
  _$jscoverage['d3.dependencyedgebundling.js'][154]++;
  return "rotate(" + (d.x - 90) + ")translate(" + (d.y + _txtLinkGap) + ",0)" + (d.x < 180 ? "" : "rotate(180)");
}).style("text-anchor", function(d) {
  _$jscoverage['d3.dependencyedgebundling.js'][155]++;
  return d.x < 180 ? "start" : "end";
}).text(function(d) {
  _$jscoverage['d3.dependencyedgebundling.js'][156]++;
  return d.name;
}).on("mouseover", mouseovered).on("mouseout", mouseouted);
  _$jscoverage['d3.dependencyedgebundling.js'][161]++;
  function mouseovered(d) {
    _$jscoverage['d3.dependencyedgebundling.js'][164]++;
    node.each(function(n) {
  n.target = n.source = false;
});
    _$jscoverage['d3.dependencyedgebundling.js'][170]++;
    link.classed("link--target", function(l) {
  _$jscoverage['d3.dependencyedgebundling.js'][167]++;
  if (l.target === d) 
    return l.source.source = true;
}).classed("link--source", function(l) {
  _$jscoverage['d3.dependencyedgebundling.js'][168]++;
  if (l.source === d) 
    return l.target.target = true;
}).filter(function(l) {
  _$jscoverage['d3.dependencyedgebundling.js'][169]++;
  return l.target === d || l.source === d;
}).each(function() {
  this.parentNode.appendChild(this);
});
    _$jscoverage['d3.dependencyedgebundling.js'][174]++;
    node.classed("node--target", function(n) {
  _$jscoverage['d3.dependencyedgebundling.js'][173]++;
  return n.target;
}).classed("node--source", function(n) {
  return n.source;
});
    _$jscoverage['d3.dependencyedgebundling.js'][176]++;
    if (_mouseOvered) {
      _$jscoverage['d3.dependencyedgebundling.js'][177]++;
      _mouseOvered(d);
    }
  }
  _$jscoverage['d3.dependencyedgebundling.js'][181]++;
  function mouseouted(d) {
    _$jscoverage['d3.dependencyedgebundling.js'][184]++;
    link.classed("link--target", false).classed("link--source", false);
    _$jscoverage['d3.dependencyedgebundling.js'][188]++;
    node.classed("node--target", false).classed("node--source", false);
    _$jscoverage['d3.dependencyedgebundling.js'][190]++;
    if (_mouseOuted) {
      _$jscoverage['d3.dependencyedgebundling.js'][191]++;
      _mouseOuted(d);
    }
  }
});
  }
  _$jscoverage['d3.dependencyedgebundling.js'][197]++;
  chart.nodeTextHyperLink = function(n) {
  _$jscoverage['d3.dependencyedgebundling.js'][198]++;
  if (!arguments.length) 
    return n;
  _$jscoverage['d3.dependencyedgebundling.js'][199]++;
  _nodeTextHyperLink = n;
  _$jscoverage['d3.dependencyedgebundling.js'][200]++;
  return chart;
};
  _$jscoverage['d3.dependencyedgebundling.js'][203]++;
  chart.packageHierarchy = function(p) {
  _$jscoverage['d3.dependencyedgebundling.js'][204]++;
  if (!arguments.length) 
    return p;
  _$jscoverage['d3.dependencyedgebundling.js'][205]++;
  _packageHierarchy = p;
  _$jscoverage['d3.dependencyedgebundling.js'][206]++;
  return chart;
};
  _$jscoverage['d3.dependencyedgebundling.js'][209]++;
  chart.diameter = function(d) {
  _$jscoverage['d3.dependencyedgebundling.js'][210]++;
  if (!arguments.length) 
    return d;
  _$jscoverage['d3.dependencyedgebundling.js'][211]++;
  _diameter = d;
  _$jscoverage['d3.dependencyedgebundling.js'][212]++;
  return chart;
};
  _$jscoverage['d3.dependencyedgebundling.js'][215]++;
  chart.textRadius = function(t) {
  _$jscoverage['d3.dependencyedgebundling.js'][216]++;
  if (!arguments.length) 
    return t;
  _$jscoverage['d3.dependencyedgebundling.js'][217]++;
  _textRadius = t;
  _$jscoverage['d3.dependencyedgebundling.js'][218]++;
  return chart;
};
  _$jscoverage['d3.dependencyedgebundling.js'][221]++;
  chart.txtLinkGap = function(t) {
  _$jscoverage['d3.dependencyedgebundling.js'][222]++;
  if (!arguments.length) 
    return t;
  _$jscoverage['d3.dependencyedgebundling.js'][223]++;
  _txtLinkGap = t;
  _$jscoverage['d3.dependencyedgebundling.js'][224]++;
  return chart;
};
  _$jscoverage['d3.dependencyedgebundling.js'][227]++;
  chart.txtWidth = function(t) {
  _$jscoverage['d3.dependencyedgebundling.js'][228]++;
  if (!arguments.length) 
    return t;
  _$jscoverage['d3.dependencyedgebundling.js'][229]++;
  _minTextWidth = t;
  _$jscoverage['d3.dependencyedgebundling.js'][230]++;
  return chart;
};
  _$jscoverage['d3.dependencyedgebundling.js'][233]++;
  chart.nodeWidth = function(n) {
  _$jscoverage['d3.dependencyedgebundling.js'][234]++;
  if (!arguments.length) 
    return n;
  _$jscoverage['d3.dependencyedgebundling.js'][235]++;
  _radialTextHeight = n;
  _$jscoverage['d3.dependencyedgebundling.js'][236]++;
  return chart;
};
  _$jscoverage['d3.dependencyedgebundling.js'][239]++;
  chart.mouseOvered = function(d) {
  _$jscoverage['d3.dependencyedgebundling.js'][240]++;
  if (!arguments.length) 
    return d;
  _$jscoverage['d3.dependencyedgebundling.js'][241]++;
  _mouseOvered = d;
  _$jscoverage['d3.dependencyedgebundling.js'][242]++;
  return chart;
};
  _$jscoverage['d3.dependencyedgebundling.js'][245]++;
  chart.mouseOuted = function(d) {
  _$jscoverage['d3.dependencyedgebundling.js'][246]++;
  if (!arguments.length) 
    return d;
  _$jscoverage['d3.dependencyedgebundling.js'][247]++;
  _mouseOuted = d;
  _$jscoverage['d3.dependencyedgebundling.js'][248]++;
  return chart;
};
  _$jscoverage['d3.dependencyedgebundling.js'][251]++;
  return chart;
};
