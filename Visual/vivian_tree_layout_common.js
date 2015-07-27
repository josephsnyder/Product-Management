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
if (! _$jscoverage['vivian_tree_layout_common.js']) {
  _$jscoverage['vivian_tree_layout_common.js'] = [];
  _$jscoverage['vivian_tree_layout_common.js'][1] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][2] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][3] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][4] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][8] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][10] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][11] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][14] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][15] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][16] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][19] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][20] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][21] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][22] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][26] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][27] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][28] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][30] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][32] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][46] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][47] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][48] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][49] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][54] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][55] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][56] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][57] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][62] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][63] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][64] = 0;
  _$jscoverage['vivian_tree_layout_common.js'][65] = 0;
}
_$jscoverage['vivian_tree_layout_common.js'].source = ["function toggleAll(d) {","  if (d.children) {","    d.children.forEach(toggleAll);","    toggle(d);","  }","}","","function expandAllNode(root) {","  //root.children.forEach(toggleAll);","  expand(root)","  root.children.forEach(expandAll);","}","","function collapseAllNode(root) {","  root.children.forEach(collapseAll);","  collapse(root)","}","","function expandAll(d) {","  expand(d);","  if (d.children) {","    d.children.forEach(expandAll);","  }","}","","function resetAllNode(root) {","  expand(root);","  if (root.children !== undefined &amp;&amp; root.children)","  {","    root.children.forEach(collapseAll);","    // Initialize the display to show a few nodes.","    expandAll(root.children[0]);","  }","  //root.children[0].forEach(toggleAll);","  //toggle(root.children[0]);","  //toggle(root.children[0].children[2]);","  //toggle(root.children[0].children[3]);","  //toggle(root.children[1]);","  //toggle(root.children[1].children[0]);","  //toggle(root.children[1].children[4]);","  //toggle(root.children[4]);","  //toggle(root.children[4].children[0]);","  //update(root);","}","","function collapseAll(d) {","  if (d.children) {","    d.children.forEach(collapseAll);","    collapse(d);","  }","}","","// Collapse Node.","function collapse(d) {","  if (d.children) {","    d._children = d.children;","    d.children = null;","  }","}","","// Expand children.","function expand(d) {","  if (d._children) {","    d.children = d._children;","    d._children = null;","  }","}",""];
_$jscoverage['vivian_tree_layout_common.js'][1]++;
function toggleAll(d) {
  _$jscoverage['vivian_tree_layout_common.js'][2]++;
  if (d.children) {
    _$jscoverage['vivian_tree_layout_common.js'][3]++;
    d.children.forEach(toggleAll);
    _$jscoverage['vivian_tree_layout_common.js'][4]++;
    toggle(d);
  }
}
_$jscoverage['vivian_tree_layout_common.js'][8]++;
function expandAllNode(root) {
  _$jscoverage['vivian_tree_layout_common.js'][10]++;
  expand(root);
  _$jscoverage['vivian_tree_layout_common.js'][11]++;
  root.children.forEach(expandAll);
}
_$jscoverage['vivian_tree_layout_common.js'][14]++;
function collapseAllNode(root) {
  _$jscoverage['vivian_tree_layout_common.js'][15]++;
  root.children.forEach(collapseAll);
  _$jscoverage['vivian_tree_layout_common.js'][16]++;
  collapse(root);
}
_$jscoverage['vivian_tree_layout_common.js'][19]++;
function expandAll(d) {
  _$jscoverage['vivian_tree_layout_common.js'][20]++;
  expand(d);
  _$jscoverage['vivian_tree_layout_common.js'][21]++;
  if (d.children) {
    _$jscoverage['vivian_tree_layout_common.js'][22]++;
    d.children.forEach(expandAll);
  }
}
_$jscoverage['vivian_tree_layout_common.js'][26]++;
function resetAllNode(root) {
  _$jscoverage['vivian_tree_layout_common.js'][27]++;
  expand(root);
  _$jscoverage['vivian_tree_layout_common.js'][28]++;
  if (root.children !== undefined && root.children) {
    _$jscoverage['vivian_tree_layout_common.js'][30]++;
    root.children.forEach(collapseAll);
    _$jscoverage['vivian_tree_layout_common.js'][32]++;
    expandAll(root.children[0]);
  }
}
_$jscoverage['vivian_tree_layout_common.js'][46]++;
function collapseAll(d) {
  _$jscoverage['vivian_tree_layout_common.js'][47]++;
  if (d.children) {
    _$jscoverage['vivian_tree_layout_common.js'][48]++;
    d.children.forEach(collapseAll);
    _$jscoverage['vivian_tree_layout_common.js'][49]++;
    collapse(d);
  }
}
_$jscoverage['vivian_tree_layout_common.js'][54]++;
function collapse(d) {
  _$jscoverage['vivian_tree_layout_common.js'][55]++;
  if (d.children) {
    _$jscoverage['vivian_tree_layout_common.js'][56]++;
    d._children = d.children;
    _$jscoverage['vivian_tree_layout_common.js'][57]++;
    d.children = null;
  }
}
_$jscoverage['vivian_tree_layout_common.js'][62]++;
function expand(d) {
  _$jscoverage['vivian_tree_layout_common.js'][63]++;
  if (d._children) {
    _$jscoverage['vivian_tree_layout_common.js'][64]++;
    d.children = d._children;
    _$jscoverage['vivian_tree_layout_common.js'][65]++;
    d._children = null;
  }
}
