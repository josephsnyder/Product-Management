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
if (! _$jscoverage['d3.treeview.js']) {
  _$jscoverage['d3.treeview.js'] = [];
  _$jscoverage['d3.treeview.js'][1] = 0;
  _$jscoverage['d3.treeview.js'][13] = 0;
  _$jscoverage['d3.treeview.js'][15] = 0;
  _$jscoverage['d3.treeview.js'][40] = 0;
  _$jscoverage['d3.treeview.js'][49] = 0;
  _$jscoverage['d3.treeview.js'][50] = 0;
  _$jscoverage['d3.treeview.js'][51] = 0;
  _$jscoverage['d3.treeview.js'][52] = 0;
  _$jscoverage['d3.treeview.js'][56] = 0;
  _$jscoverage['d3.treeview.js'][57] = 0;
  _$jscoverage['d3.treeview.js'][58] = 0;
  _$jscoverage['d3.treeview.js'][63] = 0;
  _$jscoverage['d3.treeview.js'][67] = 0;
  _$jscoverage['d3.treeview.js'][68] = 0;
  _$jscoverage['d3.treeview.js'][70] = 0;
  _$jscoverage['d3.treeview.js'][71] = 0;
  _$jscoverage['d3.treeview.js'][77] = 0;
  _$jscoverage['d3.treeview.js'][79] = 0;
  _$jscoverage['d3.treeview.js'][82] = 0;
  _$jscoverage['d3.treeview.js'][83] = 0;
  _$jscoverage['d3.treeview.js'][85] = 0;
  _$jscoverage['d3.treeview.js'][88] = 0;
  _$jscoverage['d3.treeview.js'][89] = 0;
  _$jscoverage['d3.treeview.js'][91] = 0;
  _$jscoverage['d3.treeview.js'][93] = 0;
  _$jscoverage['d3.treeview.js'][96] = 0;
  _$jscoverage['d3.treeview.js'][97] = 0;
  _$jscoverage['d3.treeview.js'][98] = 0;
  _$jscoverage['d3.treeview.js'][99] = 0;
  _$jscoverage['d3.treeview.js'][100] = 0;
  _$jscoverage['d3.treeview.js'][101] = 0;
  _$jscoverage['d3.treeview.js'][102] = 0;
  _$jscoverage['d3.treeview.js'][105] = 0;
  _$jscoverage['d3.treeview.js'][106] = 0;
  _$jscoverage['d3.treeview.js'][109] = 0;
  _$jscoverage['d3.treeview.js'][110] = 0;
  _$jscoverage['d3.treeview.js'][114] = 0;
  _$jscoverage['d3.treeview.js'][115] = 0;
  _$jscoverage['d3.treeview.js'][116] = 0;
  _$jscoverage['d3.treeview.js'][117] = 0;
  _$jscoverage['d3.treeview.js'][119] = 0;
  _$jscoverage['d3.treeview.js'][121] = 0;
  _$jscoverage['d3.treeview.js'][123] = 0;
  _$jscoverage['d3.treeview.js'][125] = 0;
  _$jscoverage['d3.treeview.js'][127] = 0;
  _$jscoverage['d3.treeview.js'][129] = 0;
  _$jscoverage['d3.treeview.js'][131] = 0;
  _$jscoverage['d3.treeview.js'][133] = 0;
  _$jscoverage['d3.treeview.js'][135] = 0;
  _$jscoverage['d3.treeview.js'][140] = 0;
  _$jscoverage['d3.treeview.js'][143] = 0;
  _$jscoverage['d3.treeview.js'][144] = 0;
  _$jscoverage['d3.treeview.js'][145] = 0;
  _$jscoverage['d3.treeview.js'][148] = 0;
  _$jscoverage['d3.treeview.js'][150] = 0;
  _$jscoverage['d3.treeview.js'][153] = 0;
  _$jscoverage['d3.treeview.js'][156] = 0;
  _$jscoverage['d3.treeview.js'][159] = 0;
  _$jscoverage['d3.treeview.js'][161] = 0;
  _$jscoverage['d3.treeview.js'][164] = 0;
  _$jscoverage['d3.treeview.js'][165] = 0;
  _$jscoverage['d3.treeview.js'][167] = 0;
  _$jscoverage['d3.treeview.js'][169] = 0;
  _$jscoverage['d3.treeview.js'][172] = 0;
  _$jscoverage['d3.treeview.js'][173] = 0;
  _$jscoverage['d3.treeview.js'][174] = 0;
  _$jscoverage['d3.treeview.js'][176] = 0;
  _$jscoverage['d3.treeview.js'][178] = 0;
  _$jscoverage['d3.treeview.js'][184] = 0;
  _$jscoverage['d3.treeview.js'][186] = 0;
  _$jscoverage['d3.treeview.js'][188] = 0;
  _$jscoverage['d3.treeview.js'][189] = 0;
  _$jscoverage['d3.treeview.js'][190] = 0;
  _$jscoverage['d3.treeview.js'][194] = 0;
  _$jscoverage['d3.treeview.js'][195] = 0;
  _$jscoverage['d3.treeview.js'][196] = 0;
  _$jscoverage['d3.treeview.js'][197] = 0;
  _$jscoverage['d3.treeview.js'][204] = 0;
  _$jscoverage['d3.treeview.js'][206] = 0;
  _$jscoverage['d3.treeview.js'][207] = 0;
  _$jscoverage['d3.treeview.js'][211] = 0;
  _$jscoverage['d3.treeview.js'][214] = 0;
  _$jscoverage['d3.treeview.js'][217] = 0;
  _$jscoverage['d3.treeview.js'][218] = 0;
  _$jscoverage['d3.treeview.js'][220] = 0;
  _$jscoverage['d3.treeview.js'][223] = 0;
  _$jscoverage['d3.treeview.js'][226] = 0;
  _$jscoverage['d3.treeview.js'][227] = 0;
  _$jscoverage['d3.treeview.js'][229] = 0;
  _$jscoverage['d3.treeview.js'][234] = 0;
  _$jscoverage['d3.treeview.js'][235] = 0;
  _$jscoverage['d3.treeview.js'][236] = 0;
  _$jscoverage['d3.treeview.js'][240] = 0;
  _$jscoverage['d3.treeview.js'][244] = 0;
  _$jscoverage['d3.treeview.js'][245] = 0;
  _$jscoverage['d3.treeview.js'][247] = 0;
  _$jscoverage['d3.treeview.js'][250] = 0;
  _$jscoverage['d3.treeview.js'][251] = 0;
  _$jscoverage['d3.treeview.js'][252] = 0;
  _$jscoverage['d3.treeview.js'][253] = 0;
  _$jscoverage['d3.treeview.js'][255] = 0;
  _$jscoverage['d3.treeview.js'][256] = 0;
  _$jscoverage['d3.treeview.js'][260] = 0;
  _$jscoverage['d3.treeview.js'][261] = 0;
  _$jscoverage['d3.treeview.js'][262] = 0;
  _$jscoverage['d3.treeview.js'][263] = 0;
  _$jscoverage['d3.treeview.js'][267] = 0;
  _$jscoverage['d3.treeview.js'][268] = 0;
  _$jscoverage['d3.treeview.js'][271] = 0;
  _$jscoverage['d3.treeview.js'][272] = 0;
  _$jscoverage['d3.treeview.js'][273] = 0;
  _$jscoverage['d3.treeview.js'][274] = 0;
  _$jscoverage['d3.treeview.js'][277] = 0;
  _$jscoverage['d3.treeview.js'][278] = 0;
  _$jscoverage['d3.treeview.js'][279] = 0;
  _$jscoverage['d3.treeview.js'][280] = 0;
  _$jscoverage['d3.treeview.js'][283] = 0;
  _$jscoverage['d3.treeview.js'][284] = 0;
  _$jscoverage['d3.treeview.js'][285] = 0;
  _$jscoverage['d3.treeview.js'][286] = 0;
  _$jscoverage['d3.treeview.js'][289] = 0;
  _$jscoverage['d3.treeview.js'][290] = 0;
  _$jscoverage['d3.treeview.js'][291] = 0;
  _$jscoverage['d3.treeview.js'][292] = 0;
  _$jscoverage['d3.treeview.js'][296] = 0;
  _$jscoverage['d3.treeview.js'][297] = 0;
  _$jscoverage['d3.treeview.js'][298] = 0;
  _$jscoverage['d3.treeview.js'][299] = 0;
  _$jscoverage['d3.treeview.js'][302] = 0;
  _$jscoverage['d3.treeview.js'][303] = 0;
  _$jscoverage['d3.treeview.js'][306] = 0;
  _$jscoverage['d3.treeview.js'][307] = 0;
  _$jscoverage['d3.treeview.js'][308] = 0;
  _$jscoverage['d3.treeview.js'][310] = 0;
  _$jscoverage['d3.treeview.js'][311] = 0;
  _$jscoverage['d3.treeview.js'][313] = 0;
  _$jscoverage['d3.treeview.js'][316] = 0;
  _$jscoverage['d3.treeview.js'][317] = 0;
  _$jscoverage['d3.treeview.js'][318] = 0;
  _$jscoverage['d3.treeview.js'][321] = 0;
  _$jscoverage['d3.treeview.js'][322] = 0;
  _$jscoverage['d3.treeview.js'][325] = 0;
  _$jscoverage['d3.treeview.js'][329] = 0;
  _$jscoverage['d3.treeview.js'][330] = 0;
  _$jscoverage['d3.treeview.js'][331] = 0;
  _$jscoverage['d3.treeview.js'][332] = 0;
  _$jscoverage['d3.treeview.js'][334] = 0;
}
_$jscoverage['d3.treeview.js'].source = ["d3.chart = d3.chart || {};","","/**"," * d3 tree layout view for d3.js"," *"," * Usage:"," * var chart = d3.chart.treeview();"," * d3.select('#treelayout_placeholder')"," *   .datum(data)"," *   .call(chart);"," */","","d3.chart.treeview = function(option) {","","  var _width = 1600, _height = 800,","          _margins = {top: 0, left: 180, right: 0, bottom: 0},","          _textwidth = 220,","          _svg,","          _nodes,","          _i = 0,","          _tree,","          _diagonal,","          _nodeTextHyperLink,","          _cust = {","            node: {","              event:{","                click: chart.onNodeClick","              },","              attr: {},","              style: {}","            },","            text: {","              event:{},","              attr:{},","              style:{","              }","            },","            circle: {","              attr: {","                r: function(d) {return 4.5;}","              },","              style:{","                fill: fillNodeCircle","              },","              event:{}","            }","          };","","  function chart(selection) {","    selection.each(function(data) {","      _nodes = data;","      renderTree(selection);","    });","  }","","  function renderTree(selection) {","      if (!_svg) {","          _svg = selection.insert(\"svg\")","                  .attr(\"height\", _height)","                  .attr(\"width\", _width)","                  .append(\"svg:g\")","                  .attr(\"transform\", function(d){","                    return \"translate(\" + _margins.left + \",\" + _margins.top + \")\";","                  });","      }","","      renderBody(_svg);","  };","","  function renderBody(svg) {","      _tree = d3.layout.tree()","              .size([","        (_height - _margins.top - _margins.bottom),","        (_width - _margins.left - _margins.right)","      ]);","","      _diagonal = d3.svg.diagonal()","              .projection(function (d) {","                  return [d.y, d.x];","              });","","      _nodes.x0 = (_height - _margins.top - _margins.bottom) / 2;","      _nodes.y0 = 0;","","      render(_nodes);","  }","","  function render(source) {","      var nodes = _tree.nodes(_nodes).reverse();","","      renderNodes(nodes, source);","","      renderLinks(nodes, source);","  }","","  function _customization(src, target, type, prop) {","    var custinfos =  _cust[target];","    var custs = {};","    if (custinfos !== undefined &amp;&amp; custinfos) {","      if (type !== undefined) {","        if (custinfos[type] !== undefined){","          if (prop !== undefined &amp;&amp;","              custinfos[type][prop] !== undefined &amp;&amp;","              custinfos[type][prop] ) {","            custs[type] = {};","            custs[type][prop] = custinfos[type][prop];","          }","          else {","            custs = {};","            custs[type] = custinfos[type];","          }","        }","      }","      for (var tp in custs) {","        if (custs[tp]) {","          var pt;","          switch (tp) {","            case 'event':","              for (pt in custs[tp]) {","                //console.log(\"on \" + pt + \" \" + target);","                src.on(pt, custs[tp][pt]);","              }","              break;","            case 'attr':","              for (pt in custs[tp]) {","                //console.log(\"attr \" + pt + \" \" + target);","                src.attr(pt, custs[tp][pt]);","              }","              break;","            case 'style':","              for (pt in custs[tp]) {","                //console.log(\"style \" + pt + \" \" + target);","                src.style(pt, custs[tp][pt]);","              }","              break;","          }","        }","      }","    }","    return src;","  }","","  function renderNodes(nodes, source) {","      nodes.forEach(function (d) {","          d.y = d.depth * _textwidth;","      });","","      var node = _svg.selectAll(\"g.node\")","              .data(nodes, function (d) {","                  return d.id || (d.id = ++_i);","              });","","      var nodeEnter = node.enter().append(\"svg:g\")","              .attr(\"class\", \"node\")","              .attr(\"transform\", function (d) {","                  return \"translate(\" + source.y0","          + \",\" + source.x0 + \")\";","              });","      _customization(nodeEnter, 'node', 'event');","","      var circleEnter = nodeEnter.append(\"svg:circle\")","              .attr(\"r\", 1e-6);","","      _customization(circleEnter, 'circle', 'event');","      _customization(circleEnter, 'circle', 'style');","","      var nodeUpdate = node.transition()","              .attr(\"transform\", function (d) {","                  return \"translate(\" + d.y + \",\" + d.x + \")\";","              });","","      var circleUpdate = nodeUpdate.select(\"circle\");","      _customization(circleUpdate, 'circle', 'attr');","      _customization(circleUpdate, 'circle', 'style');","","      var nodeExit = node.exit().transition()","              .attr(\"transform\", function (d) {","                  return \"translate(\" + source.y","          + \",\" + source.x + \")\";","              })","              .remove();","","      nodeExit.select(\"circle\")","              .attr(\"r\", 1e-6);","","      renderLabels(nodeEnter, nodeUpdate, nodeExit);","","      nodes.forEach(function (d) {","          d.x0 = d.x;","          d.y0 = d.y;","      });","  }","","  function renderLabels(nodeEnter, nodeUpdate, nodeExit) {","      var textEnter;","      if (_nodeTextHyperLink) {","        textEnter = nodeEnter.append(\"a\")","          .attr(\"xlink:href\", _nodeTextHyperLink)","          .attr(\"target\", \"_blank\")","          .style(\"text-decoration\", \"none\")","          .insert(\"svg:text\");","      }","      else {","        textEnter = nodeEnter.append(\"svg:text\");","      }","      textEnter = textEnter.attr(\"x\", function (d) {","                  return d.children || d._children ? -10 : 10;","              })","              .attr(\"dy\", \".35em\")","              .attr(\"text-anchor\", function (d) {","                  return d.children || d._children ? \"end\" : \"start\";","              })","              .text(function (d) {","                  return d.name;","              })","              .style(\"fill-opacity\", 1e-6);","      _customization(textEnter, \"text\", \"attr\");","      _customization(textEnter, \"text\", \"event\");","      nodeUpdate.select(\"text\")","              .style(\"fill-opacity\", 1);","","      nodeExit.select(\"text\")","              .style(\"fill-opacity\", 1e-6);","  }","","  function renderLinks(nodes, source) {","      var link = _svg.selectAll(\"path.link\")","              .data(_tree.links(nodes), function (d) {","                  return d.target.id;","              });","","      link.enter().insert(\"svg:path\", \"g\")","              .attr(\"class\", \"link\")","              .attr(\"d\", function (d) {","                  var o = {x: source.x0, y: source.y0};","                  return _diagonal({source: o, target: o});","              });","","      link.transition()","              .attr(\"d\", _diagonal);","","      link.exit().transition()","              .attr(\"d\", function (d) {","                  var o = {x: source.x, y: source.y};","                  return _diagonal({source: o, target: o});","              })","              .remove();","  }","","  function toggle(d) {","      if (d.children) {","          d._children = d.children;","          d.children = null;","      } else {","          d.children = d._children;","          d._children = null;","      }","  }","","  function toggleAll(d) {","      if (d.children) {","          d.children.forEach(toggleAll);","          toggle(d);","      }","  }","","  function fillNodeCircle(d) {","    return d._children ? \"lightsteelblue\" : \"#fff\";","  }","","  chart.width = function (w) {","      if (!arguments.length) return _width;","      _width = w;","      return chart;","  };","","  chart.height = function (h) {","      if (!arguments.length) return _height;","      _height = h;","      return chart;","  };","","  chart.margins = function (m) {","      if (!arguments.length) return _margins;","      _margins = m;","      return chart;","  };","","  chart.textwidth = function (m) {","      if (!arguments.length) return _textwidth;","      _textwidth = m;","      return chart;","  };","","","  chart.nodes = function (n) {","      if (!arguments.length) return _nodes;","      _nodes = n;","      return chart;","  };","","  chart.svg = function (n) {","    return _svg;","  };","","  chart.on = function(target, type, prop, value) {","      if (arguments.length == 3) {","        return _cust[target][type][prop];","      }","      if (arguments.length &gt; 3) {","        _cust[target][type][prop] = value;","      }","      return chart;","  };","","  chart.onNodeClick = function (d) {","    toggle(d);","    render(d);","  };","","  chart.update = function (d) {","    render(d);","  };","","  chart.resetAllNode = function() {","","  };","","  chart.nodeTextHyperLink = function(n) {","    if (!arguments.length) return n;","    _nodeTextHyperLink = n;","    return chart;","  };","  return chart;","}"];
_$jscoverage['d3.treeview.js'][1]++;
d3.chart = d3.chart || {};
_$jscoverage['d3.treeview.js'][13]++;
d3.chart.treeview = function(option) {
  _$jscoverage['d3.treeview.js'][15]++;
  var _width = 1600, _height = 800, _margins = {
  top: 0, 
  left: 180, 
  right: 0, 
  bottom: 0}, _textwidth = 220, _svg, _nodes, _i = 0, _tree, _diagonal, _nodeTextHyperLink, _cust = {
  node: {
  event: {
  click: chart.onNodeClick}, 
  attr: {}, 
  style: {}}, 
  text: {
  event: {}, 
  attr: {}, 
  style: {}}, 
  circle: {
  attr: {
  r: function(d) {
  _$jscoverage['d3.treeview.js'][40]++;
  return 4.5;
}}, 
  style: {
  fill: fillNodeCircle}, 
  event: {}}};
  _$jscoverage['d3.treeview.js'][49]++;
  function chart(selection) {
    _$jscoverage['d3.treeview.js'][50]++;
    selection.each(function(data) {
  _$jscoverage['d3.treeview.js'][51]++;
  _nodes = data;
  _$jscoverage['d3.treeview.js'][52]++;
  renderTree(selection);
});
  }
  _$jscoverage['d3.treeview.js'][56]++;
  function renderTree(selection) {
    _$jscoverage['d3.treeview.js'][57]++;
    if (!_svg) {
      _$jscoverage['d3.treeview.js'][58]++;
      _svg = selection.insert("svg").attr("height", _height).attr("width", _width).append("svg:g").attr("transform", function(d) {
  _$jscoverage['d3.treeview.js'][63]++;
  return "translate(" + _margins.left + "," + _margins.top + ")";
});
    }
    _$jscoverage['d3.treeview.js'][67]++;
    renderBody(_svg);
  }
  _$jscoverage['d3.treeview.js'][68]++;
  ;
  _$jscoverage['d3.treeview.js'][70]++;
  function renderBody(svg) {
    _$jscoverage['d3.treeview.js'][71]++;
    _tree = d3.layout.tree().size([(_height - _margins.top - _margins.bottom), (_width - _margins.left - _margins.right)]);
    _$jscoverage['d3.treeview.js'][77]++;
    _diagonal = d3.svg.diagonal().projection(function(d) {
  _$jscoverage['d3.treeview.js'][79]++;
  return [d.y, d.x];
});
    _$jscoverage['d3.treeview.js'][82]++;
    _nodes.x0 = (_height - _margins.top - _margins.bottom) / 2;
    _$jscoverage['d3.treeview.js'][83]++;
    _nodes.y0 = 0;
    _$jscoverage['d3.treeview.js'][85]++;
    render(_nodes);
  }
  _$jscoverage['d3.treeview.js'][88]++;
  function render(source) {
    _$jscoverage['d3.treeview.js'][89]++;
    var nodes = _tree.nodes(_nodes).reverse();
    _$jscoverage['d3.treeview.js'][91]++;
    renderNodes(nodes, source);
    _$jscoverage['d3.treeview.js'][93]++;
    renderLinks(nodes, source);
  }
  _$jscoverage['d3.treeview.js'][96]++;
  function _customization(src, target, type, prop) {
    _$jscoverage['d3.treeview.js'][97]++;
    var custinfos = _cust[target];
    _$jscoverage['d3.treeview.js'][98]++;
    var custs = {};
    _$jscoverage['d3.treeview.js'][99]++;
    if (custinfos !== undefined && custinfos) {
      _$jscoverage['d3.treeview.js'][100]++;
      if (type !== undefined) {
        _$jscoverage['d3.treeview.js'][101]++;
        if (custinfos[type] !== undefined) {
          _$jscoverage['d3.treeview.js'][102]++;
          if (prop !== undefined && custinfos[type][prop] !== undefined && custinfos[type][prop]) {
            _$jscoverage['d3.treeview.js'][105]++;
            custs[type] = {};
            _$jscoverage['d3.treeview.js'][106]++;
            custs[type][prop] = custinfos[type][prop];
          } else {
            _$jscoverage['d3.treeview.js'][109]++;
            custs = {};
            _$jscoverage['d3.treeview.js'][110]++;
            custs[type] = custinfos[type];
          }
        }
      }
      _$jscoverage['d3.treeview.js'][114]++;
      for (var tp in custs) {
        _$jscoverage['d3.treeview.js'][115]++;
        if (custs[tp]) {
          _$jscoverage['d3.treeview.js'][116]++;
          var pt;
          _$jscoverage['d3.treeview.js'][117]++;
          switch (tp) {
            case 'event':
              _$jscoverage['d3.treeview.js'][119]++;
              for (pt in custs[tp]) {
                _$jscoverage['d3.treeview.js'][121]++;
                src.on(pt, custs[tp][pt]);
              }
              _$jscoverage['d3.treeview.js'][123]++;
              break;
            case 'attr':
              _$jscoverage['d3.treeview.js'][125]++;
              for (pt in custs[tp]) {
                _$jscoverage['d3.treeview.js'][127]++;
                src.attr(pt, custs[tp][pt]);
              }
              _$jscoverage['d3.treeview.js'][129]++;
              break;
            case 'style':
              _$jscoverage['d3.treeview.js'][131]++;
              for (pt in custs[tp]) {
                _$jscoverage['d3.treeview.js'][133]++;
                src.style(pt, custs[tp][pt]);
              }
              _$jscoverage['d3.treeview.js'][135]++;
              break;
          }
        }
      }
    }
    _$jscoverage['d3.treeview.js'][140]++;
    return src;
  }
  _$jscoverage['d3.treeview.js'][143]++;
  function renderNodes(nodes, source) {
    _$jscoverage['d3.treeview.js'][144]++;
    nodes.forEach(function(d) {
  _$jscoverage['d3.treeview.js'][145]++;
  d.y = d.depth * _textwidth;
});
    _$jscoverage['d3.treeview.js'][148]++;
    var node = _svg.selectAll("g.node").data(nodes, function(d) {
  _$jscoverage['d3.treeview.js'][150]++;
  return d.id || (d.id = ++_i);
});
    _$jscoverage['d3.treeview.js'][153]++;
    var nodeEnter = node.enter().append("svg:g").attr("class", "node").attr("transform", function(d) {
  _$jscoverage['d3.treeview.js'][156]++;
  return "translate(" + source.y0 + "," + source.x0 + ")";
});
    _$jscoverage['d3.treeview.js'][159]++;
    _customization(nodeEnter, 'node', 'event');
    _$jscoverage['d3.treeview.js'][161]++;
    var circleEnter = nodeEnter.append("svg:circle").attr("r", 1e-6);
    _$jscoverage['d3.treeview.js'][164]++;
    _customization(circleEnter, 'circle', 'event');
    _$jscoverage['d3.treeview.js'][165]++;
    _customization(circleEnter, 'circle', 'style');
    _$jscoverage['d3.treeview.js'][167]++;
    var nodeUpdate = node.transition().attr("transform", function(d) {
  _$jscoverage['d3.treeview.js'][169]++;
  return "translate(" + d.y + "," + d.x + ")";
});
    _$jscoverage['d3.treeview.js'][172]++;
    var circleUpdate = nodeUpdate.select("circle");
    _$jscoverage['d3.treeview.js'][173]++;
    _customization(circleUpdate, 'circle', 'attr');
    _$jscoverage['d3.treeview.js'][174]++;
    _customization(circleUpdate, 'circle', 'style');
    _$jscoverage['d3.treeview.js'][176]++;
    var nodeExit = node.exit().transition().attr("transform", function(d) {
  _$jscoverage['d3.treeview.js'][178]++;
  return "translate(" + source.y + "," + source.x + ")";
}).remove();
    _$jscoverage['d3.treeview.js'][184]++;
    nodeExit.select("circle").attr("r", 1e-6);
    _$jscoverage['d3.treeview.js'][186]++;
    renderLabels(nodeEnter, nodeUpdate, nodeExit);
    _$jscoverage['d3.treeview.js'][188]++;
    nodes.forEach(function(d) {
  _$jscoverage['d3.treeview.js'][189]++;
  d.x0 = d.x;
  _$jscoverage['d3.treeview.js'][190]++;
  d.y0 = d.y;
});
  }
  _$jscoverage['d3.treeview.js'][194]++;
  function renderLabels(nodeEnter, nodeUpdate, nodeExit) {
    _$jscoverage['d3.treeview.js'][195]++;
    var textEnter;
    _$jscoverage['d3.treeview.js'][196]++;
    if (_nodeTextHyperLink) {
      _$jscoverage['d3.treeview.js'][197]++;
      textEnter = nodeEnter.append("a").attr("xlink:href", _nodeTextHyperLink).attr("target", "_blank").style("text-decoration", "none").insert("svg:text");
    } else {
      _$jscoverage['d3.treeview.js'][204]++;
      textEnter = nodeEnter.append("svg:text");
    }
    _$jscoverage['d3.treeview.js'][206]++;
    textEnter = textEnter.attr("x", function(d) {
  _$jscoverage['d3.treeview.js'][207]++;
  return d.children || d._children ? -10 : 10;
}).attr("dy", ".35em").attr("text-anchor", function(d) {
  _$jscoverage['d3.treeview.js'][211]++;
  return d.children || d._children ? "end" : "start";
}).text(function(d) {
  _$jscoverage['d3.treeview.js'][214]++;
  return d.name;
}).style("fill-opacity", 1e-6);
    _$jscoverage['d3.treeview.js'][217]++;
    _customization(textEnter, "text", "attr");
    _$jscoverage['d3.treeview.js'][218]++;
    _customization(textEnter, "text", "event");
    _$jscoverage['d3.treeview.js'][220]++;
    nodeUpdate.select("text").style("fill-opacity", 1);
    _$jscoverage['d3.treeview.js'][223]++;
    nodeExit.select("text").style("fill-opacity", 1e-6);
  }
  _$jscoverage['d3.treeview.js'][226]++;
  function renderLinks(nodes, source) {
    _$jscoverage['d3.treeview.js'][227]++;
    var link = _svg.selectAll("path.link").data(_tree.links(nodes), function(d) {
  _$jscoverage['d3.treeview.js'][229]++;
  return d.target.id;
});
    _$jscoverage['d3.treeview.js'][234]++;
    link.enter().insert("svg:path", "g").attr("class", "link").attr("d", function(d) {
  _$jscoverage['d3.treeview.js'][235]++;
  var o = {
  x: source.x0, 
  y: source.y0};
  _$jscoverage['d3.treeview.js'][236]++;
  return _diagonal({
  source: o, 
  target: o});
});
    _$jscoverage['d3.treeview.js'][240]++;
    link.transition().attr("d", _diagonal);
    _$jscoverage['d3.treeview.js'][247]++;
    link.exit().transition().attr("d", function(d) {
  _$jscoverage['d3.treeview.js'][244]++;
  var o = {
  x: source.x, 
  y: source.y};
  _$jscoverage['d3.treeview.js'][245]++;
  return _diagonal({
  source: o, 
  target: o});
}).remove();
  }
  _$jscoverage['d3.treeview.js'][250]++;
  function toggle(d) {
    _$jscoverage['d3.treeview.js'][251]++;
    if (d.children) {
      _$jscoverage['d3.treeview.js'][252]++;
      d._children = d.children;
      _$jscoverage['d3.treeview.js'][253]++;
      d.children = null;
    } else {
      _$jscoverage['d3.treeview.js'][255]++;
      d.children = d._children;
      _$jscoverage['d3.treeview.js'][256]++;
      d._children = null;
    }
  }
  _$jscoverage['d3.treeview.js'][260]++;
  function toggleAll(d) {
    _$jscoverage['d3.treeview.js'][261]++;
    if (d.children) {
      _$jscoverage['d3.treeview.js'][262]++;
      d.children.forEach(toggleAll);
      _$jscoverage['d3.treeview.js'][263]++;
      toggle(d);
    }
  }
  _$jscoverage['d3.treeview.js'][267]++;
  function fillNodeCircle(d) {
    _$jscoverage['d3.treeview.js'][268]++;
    return d._children ? "lightsteelblue" : "#fff";
  }
  _$jscoverage['d3.treeview.js'][271]++;
  chart.width = function(w) {
  _$jscoverage['d3.treeview.js'][272]++;
  if (!arguments.length) 
    return _width;
  _$jscoverage['d3.treeview.js'][273]++;
  _width = w;
  _$jscoverage['d3.treeview.js'][274]++;
  return chart;
};
  _$jscoverage['d3.treeview.js'][277]++;
  chart.height = function(h) {
  _$jscoverage['d3.treeview.js'][278]++;
  if (!arguments.length) 
    return _height;
  _$jscoverage['d3.treeview.js'][279]++;
  _height = h;
  _$jscoverage['d3.treeview.js'][280]++;
  return chart;
};
  _$jscoverage['d3.treeview.js'][283]++;
  chart.margins = function(m) {
  _$jscoverage['d3.treeview.js'][284]++;
  if (!arguments.length) 
    return _margins;
  _$jscoverage['d3.treeview.js'][285]++;
  _margins = m;
  _$jscoverage['d3.treeview.js'][286]++;
  return chart;
};
  _$jscoverage['d3.treeview.js'][289]++;
  chart.textwidth = function(m) {
  _$jscoverage['d3.treeview.js'][290]++;
  if (!arguments.length) 
    return _textwidth;
  _$jscoverage['d3.treeview.js'][291]++;
  _textwidth = m;
  _$jscoverage['d3.treeview.js'][292]++;
  return chart;
};
  _$jscoverage['d3.treeview.js'][296]++;
  chart.nodes = function(n) {
  _$jscoverage['d3.treeview.js'][297]++;
  if (!arguments.length) 
    return _nodes;
  _$jscoverage['d3.treeview.js'][298]++;
  _nodes = n;
  _$jscoverage['d3.treeview.js'][299]++;
  return chart;
};
  _$jscoverage['d3.treeview.js'][302]++;
  chart.svg = function(n) {
  _$jscoverage['d3.treeview.js'][303]++;
  return _svg;
};
  _$jscoverage['d3.treeview.js'][306]++;
  chart.on = function(target, type, prop, value) {
  _$jscoverage['d3.treeview.js'][307]++;
  if (arguments.length == 3) {
    _$jscoverage['d3.treeview.js'][308]++;
    return _cust[target][type][prop];
  }
  _$jscoverage['d3.treeview.js'][310]++;
  if (arguments.length > 3) {
    _$jscoverage['d3.treeview.js'][311]++;
    _cust[target][type][prop] = value;
  }
  _$jscoverage['d3.treeview.js'][313]++;
  return chart;
};
  _$jscoverage['d3.treeview.js'][316]++;
  chart.onNodeClick = function(d) {
  _$jscoverage['d3.treeview.js'][317]++;
  toggle(d);
  _$jscoverage['d3.treeview.js'][318]++;
  render(d);
};
  _$jscoverage['d3.treeview.js'][321]++;
  chart.update = function(d) {
  _$jscoverage['d3.treeview.js'][322]++;
  render(d);
};
  _$jscoverage['d3.treeview.js'][325]++;
  chart.resetAllNode = function() {
};
  _$jscoverage['d3.treeview.js'][329]++;
  chart.nodeTextHyperLink = function(n) {
  _$jscoverage['d3.treeview.js'][330]++;
  if (!arguments.length) 
    return n;
  _$jscoverage['d3.treeview.js'][331]++;
  _nodeTextHyperLink = n;
  _$jscoverage['d3.treeview.js'][332]++;
  return chart;
};
  _$jscoverage['d3.treeview.js'][334]++;
  return chart;
};
