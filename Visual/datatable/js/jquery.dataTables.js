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
if (! _$jscoverage['datatable/js/jquery.dataTables.js']) {
  _$jscoverage['datatable/js/jquery.dataTables.js'] = [];
  _$jscoverage['datatable/js/jquery.dataTables.js'][26] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][28] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][29] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][32] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][34] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][39] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][41] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][45] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][78] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][88] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][90] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][91] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][92] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][100] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][103] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][105] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][109] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][112] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][114] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][117] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][119] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][122] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][124] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][129] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][140] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][142] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][145] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][148] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][150] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][153] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][155] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][156] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][159] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][160] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][165] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][167] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][169] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][173] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][174] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][176] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][177] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][179] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][181] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][183] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][185] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][188] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][190] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][194] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][197] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][198] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][200] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][202] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][203] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][205] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][207] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][208] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][210] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][212] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][213] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][224] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][227] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][229] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][232] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][233] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][235] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][248] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][250] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][252] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][266] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][268] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][269] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][271] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][281] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][283] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][295] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][297] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][299] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][300] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][301] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][305] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][315] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][317] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][318] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][320] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][322] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][323] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][325] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][329] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][339] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][341] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][342] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][344] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][346] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][348] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][350] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][351] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][356] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][366] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][368] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][369] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][371] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][373] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][375] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][377] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][392] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][394] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][397] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][400] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][403] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][404] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][406] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][409] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][411] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][414] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][416] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][420] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][422] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][425] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][427] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][430] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][432] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][435] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][444] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][446] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][448] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][462] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][464] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][467] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][472] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][473] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][474] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][475] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][478] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][479] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][481] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][484] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][486] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][490] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][494] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][497] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][498] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][500] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][501] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][503] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][505] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][508] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][515] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][518] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][520] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][523] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][532] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][534] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][544] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][546] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][547] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][549] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][551] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][552] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][553] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][557] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][558] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][559] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][560] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][562] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][563] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][565] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][566] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][568] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][571] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][579] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][580] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][581] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][583] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][584] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][586] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][587] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][589] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][591] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][596] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][598] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][601] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][603] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][606] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][614] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][616] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][618] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][619] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][622] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][624] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][625] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][627] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][628] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][630] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][632] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][636] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][641] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][644] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][646] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][651] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][655] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][657] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][658] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][659] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][662] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][667] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][669] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][673] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][675] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][676] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][680] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][683] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][685] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][694] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][696] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][698] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][699] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][712] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][714] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][726] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][728] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][730] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][732] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][734] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][737] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][750] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][752] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][753] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][755] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][757] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][770] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][772] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][773] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][774] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][776] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][778] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][780] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][783] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][785] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][789] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][791] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][793] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][796] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][799] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][801] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][803] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][815] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][817] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][818] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][820] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][825] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][834] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][836] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][839] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][840] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][843] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][845] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][846] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][849] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][857] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][858] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][859] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][861] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][863] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][866] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][868] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][869] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][872] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][873] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][875] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][878] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][879] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][882] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][883] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][888] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][889] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][893] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][896] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][898] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][900] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][904] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][907] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][908] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][914] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][915] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][928] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][930] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][933] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][935] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][937] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][938] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][941] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][944] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][945] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][946] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][948] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][951] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][953] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][955] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][956] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][959] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][960] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][961] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][964] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][966] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][967] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][968] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][973] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][978] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][980] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][982] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][987] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][990] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][991] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][997] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][998] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1010] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1012] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1013] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1014] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1016] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1018] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1027] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1029] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1030] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1031] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1032] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1043] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1045] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1047] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1049] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1051] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1053] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1055] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1059] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1061] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1075] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1077] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1079] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1093] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1095] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1096] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1098] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1100] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1105] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1108] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1110] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1113] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1115] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1119] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1121] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1122] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1127] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1132] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1134] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1137] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1139] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1140] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1144] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1147] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1149] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1155] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1165] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1167] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1168] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1169] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1170] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1173] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1176] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1178] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1179] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1180] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1182] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1183] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1186] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1188] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1192] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1194] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1201] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1203] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1205] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1206] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1207] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1209] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1211] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1214] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1216] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1217] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1221] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1224] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1226] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1228] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1230] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1231] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1232] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1234] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1235] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1236] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1237] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1241] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1243] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1245] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1247] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1251] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1257] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1259] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1263] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1265] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1266] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1268] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1270] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1271] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1273] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1294] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1296] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1297] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1298] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1299] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1300] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1302] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1304] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1308] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1310] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1311] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1314] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1316] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1318] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1323] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1326] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1328] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1331] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1333] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1335] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1339] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1341] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1342] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1347] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1349] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1350] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1353] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1356] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1357] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1361] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1365] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1367] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1369] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1373] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1374] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1386] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1389] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1390] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1392] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1393] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1396] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1397] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1398] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1399] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1400] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1402] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1405] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1407] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1409] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1413] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1416] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1417] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1421] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1423] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1424] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1426] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1428] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1430] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1432] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1435] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1437] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1438] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1440] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1442] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1443] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1446] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1448] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1449] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1451] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1454] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1457] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1459] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1460] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1462] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1463] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1468] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1471] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1472] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1475] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1477] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1479] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1481] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1482] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1491] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1493] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1495] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1498] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1499] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1500] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1502] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1504] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1506] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1509] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1510] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1511] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1512] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1513] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1515] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1519] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1522] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1530] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1535] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1537] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1538] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1543] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1546] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1548] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1553] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1555] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1558] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1559] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1561] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1566] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1569] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1570] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1571] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1573] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1575] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1576] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1578] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1589] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1591] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1594] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1596] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1599] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1603] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1604] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1614] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1620] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1621] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1626] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1627] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1630] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1633] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1634] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1635] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1637] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1638] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1640] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1643] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1646] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1647] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1649] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1650] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1651] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1653] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1654] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1658] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1660] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1662] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1664] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1670] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1672] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1673] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1674] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1676] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1678] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1682] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1685] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1688] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1689] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1691] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1694] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1696] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1699] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1700] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1702] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1705] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1706] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1708] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1711] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1712] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1714] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1717] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1718] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1720] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1723] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1724] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1726] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1729] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1730] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1732] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1735] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1736] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1738] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1740] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1741] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1743] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1745] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1751] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1753] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1755] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1757] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1758] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1763] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1776] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1778] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1779] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1780] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1781] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1782] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1783] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1784] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1785] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1787] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1790] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1793] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1795] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1799] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1801] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1802] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1805] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1806] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1807] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1811] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1812] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1813] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1814] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1819] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1822] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1825] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1827] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1829] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1833] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1837] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1851] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1853] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1854] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1856] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1857] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1859] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1860] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1864] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1866] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1868] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1871] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1876] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1887] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1889] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1891] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1892] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1893] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1894] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1895] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1897] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1899] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1901] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1905] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1916] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1918] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1919] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1920] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1922] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1923] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1924] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1925] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1926] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1929] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1931] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1932] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1936] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1938] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1939] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1940] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1942] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1943] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1944] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1949] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1951] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1953] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1957] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1959] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1961] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1963] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1964] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1965] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1968] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1970] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1972] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1976] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1986] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][1988] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2003] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2005] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2010] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2012] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2016] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2020] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2023] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2025] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2026] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2029] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2030] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2031] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2032] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2034] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2037] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2038] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2040] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2043] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2044] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2046] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2048] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2053] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2056] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2058] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2059] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2060] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2061] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2072] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2074] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2076] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2077] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2081] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2082] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2083] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2084] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2086] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2089] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2093] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2095] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2096] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2098] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2099] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2101] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2103] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2105] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2110] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2112] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2123] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2125] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2127] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2132] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2143] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2145] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2146] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2147] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2149] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2150] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2151] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2152] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2156] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2159] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2160] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2163] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2165] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2170] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2174] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2178] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2179] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2182] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2183] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2184] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2187] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2196] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2198] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2199] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2201] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2203] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2204] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2206] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2207] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2214] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2216] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2217] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2234] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2236] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2238] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2241] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2242] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2244] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2246] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2248] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2250] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2251] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2267] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2269] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2270] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2271] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2274] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2276] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2280] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2282] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2288] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2290] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2291] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2299] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2304] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2307] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2313] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2315] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2317] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2326] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2329] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2331] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2333] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2334] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2348] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2350] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2353] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2355] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2356] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2360] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2362] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2377] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2379] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2382] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2384] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2388] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2400] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2402] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2404] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2409] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2410] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2411] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2415] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2416] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2428] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2430] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2432] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2434] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2436] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2438] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2440] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2442] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2444] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2446] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2456] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2458] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2459] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2460] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2470] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2472] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2473] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2476] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2479] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2485] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2487] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2489] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2498] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2501] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2503] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2506] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2514] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2517] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2521] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2524] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2527] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2531] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2532] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2534] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2536] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2540] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2541] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2543] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2548] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2550] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2562] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2564] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2567] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2581] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2583] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2586] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2588] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2589] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2593] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2596] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2597] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2598] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2600] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2604] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2607] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2609] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2612] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2614] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2616] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2624] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2626] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2628] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2630] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2634] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2635] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2636] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2640] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2642] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2643] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2644] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2645] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2649] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2651] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2657] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2659] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2661] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2665] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2666] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2667] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2670] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2671] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2673] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2677] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2679] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2680] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2692] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2694] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2695] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2706] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2708] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2713] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2716] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2720] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2723] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2735] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2737] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2739] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2743] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2744] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2745] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2746] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2748] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2751] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2753] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2758] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2760] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2763] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2765] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2766] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2768] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2770] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2771] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2777] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2779] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2780] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2783] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2784] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2786] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2788] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2793] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2794] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2797] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2799] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2800] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2802] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2806] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2808] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2811] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2815] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2817] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2826] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2828] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2830] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2837] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2840] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2844] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2862] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2864] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2866] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2869] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2870] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2872] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2874] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2875] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2880] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2882] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2884] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2885] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2886] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2892] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2904] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2906] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2908] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2910] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2911] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2913] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2916] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2918] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2920] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2922] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2927] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2929] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2932] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2934] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2937] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2939] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2944] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2947] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2949] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2951] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2952] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2956] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2961] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2963] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2965] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2976] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2978] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2980] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2982] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2984] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2985] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2986] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2988] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2998] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3000] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3002] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3003] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3005] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3009] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3018] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3021] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3023] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3042] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3056] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3057] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3058] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3059] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3060] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3061] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3062] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3063] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3065] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3066] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3067] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3070] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3071] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3072] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3073] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3074] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3075] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3077] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3079] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3080] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3081] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3082] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3085] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3086] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3087] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3088] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3092] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3093] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3094] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3095] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3097] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3098] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3103] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3104] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3106] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3107] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3109] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3111] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3113] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3121] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3123] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3124] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3126] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3128] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3132] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3133] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3135] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3137] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3143] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3145] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3149] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3155] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3157] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3159] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3162] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3166] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3168] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3169] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3170] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3177] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3178] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3180] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3195] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3197] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3208] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3209] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3210] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3211] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3212] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3213] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3221] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3224] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3225] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3226] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3227] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3229] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3231] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3232] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3233] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3234] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3245] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3247] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3248] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3251] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3252] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3254] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3255] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3258] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3260] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3261] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3268] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3270] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3274] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3275] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3278] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3284] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3287] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3292] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3295] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3297] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3301] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3302] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3305] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3311] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3319] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3327] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3331] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3332] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3337] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3338] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3341] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3344] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3346] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3348] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3349] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3352] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3353] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3356] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3366] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3367] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3368] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3371] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3373] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3374] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3375] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3382] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3385] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3390] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3393] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3397] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3398] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3400] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3402] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3406] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3408] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3411] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3413] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3420] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3421] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3423] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3425] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3433] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3439] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3441] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3445] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3447] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3449] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3451] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3453] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3458] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3459] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3460] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3464] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3465] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3467] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3469] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3470] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3471] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3475] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3478] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3480] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3493] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3495] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3496] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3498] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3500] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3501] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3502] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3504] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3506] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3508] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3512] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3514] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3516] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3517] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3519] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3530] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3532] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3534] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3537] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3539] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3542] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3543] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3544] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3546] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3547] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3548] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3550] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3559] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3561] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3562] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3563] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3564] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3565] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3566] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3567] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3568] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3569] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3572] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3574] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3576] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3578] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3580] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3582] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3584] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3587] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3596] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3599] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3601] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3602] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3604] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3615] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3622] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3623] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3624] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3626] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3627] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3628] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3632] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3633] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3636] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3637] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3639] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3643] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3644] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3645] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3647] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3648] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3650] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3652] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3654] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3658] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3663] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3665] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3667] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3668] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3670] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3671] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3673] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3675] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3681] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3687] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3689] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3691] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3693] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3694] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3696] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3699] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3701] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3703] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3705] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3707] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3710] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3716] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3717] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3719] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3727] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3729] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3730] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3731] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3733] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3735] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3737] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3741] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3744] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3748] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3749] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3752] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3753] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3755] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3757] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3758] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3760] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3762] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3766] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3767] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3769] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3772] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3774] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3785] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3787] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3792] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3793] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3795] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3798] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3810] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3812] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3813] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3815] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3818] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3820] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3821] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3822] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3824] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3835] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3837] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3838] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3840] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3842] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3843] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3844] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3846] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3847] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3851] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3862] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3864] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3866] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3869] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3871] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3873] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3875] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3879] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3880] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3882] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3884] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3893] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3895] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3896] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3897] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3898] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3899] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3901] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3902] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3903] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3904] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3905] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3906] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3907] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3908] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3909] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3910] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3911] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3913] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3914] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3915] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3916] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3917] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3919] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3922] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3923] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3932] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3934] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3945] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3948] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3955] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3957] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3958] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3959] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3960] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3962] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3965] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3967] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3969] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3974] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3982] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3984] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3991] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3992] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3993] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3995] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3997] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3999] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4001] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4002] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4004] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4028] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4029] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4030] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4032] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4034] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4036] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4038] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4043] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4045] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4050] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4055] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4057] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4060] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4062] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4063] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4064] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4065] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4068] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4070] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4072] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4074] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4076] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4081] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4087] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4092] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4093] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4096] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4099] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4103] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4104] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4105] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4106] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4119] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4121] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4123] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4125] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4141] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4142] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4145] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4148] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4149] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4151] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4153] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4154] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4155] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4157] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4160] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4165] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4166] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4168] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4173] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4175] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4182] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4184] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4185] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4186] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4188] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4190] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4191] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4195] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4196] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4202] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4205] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4207] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4211] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4212] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4213] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4214] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4216] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4222] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4224] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4236] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4238] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4239] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4240] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4241] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4243] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4245] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4247] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4252] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4254] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4258] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4262] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4264] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4266] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4267] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4268] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4270] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4272] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4274] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4275] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4278] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4280] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4283] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4284] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4287] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4288] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4290] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4292] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4294] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4298] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4301] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4309] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4324] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4326] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4328] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4331] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4332] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4333] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4335] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4337] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4339] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4340] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4342] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4344] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4349] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4350] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4351] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4354] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4357] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4359] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4361] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4363] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4366] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4368] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4371] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4384] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4386] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4388] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4392] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4393] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4404] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4406] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4409] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4411] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4421] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4423] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4425] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4428] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4429] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4431] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4437] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4438] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4440] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4444] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4447] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4448] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4449] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4450] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4451] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4452] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4455] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4456] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4462] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4463] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4465] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4466] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4469] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4482] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4484] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4485] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4493] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4494] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4495] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4497] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4499] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4501] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4506] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4513] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4518] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4520] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4522] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4525] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4526] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4527] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4529] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4531] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4542] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4543] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4547] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4548] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4550] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4553] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4554] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4559] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4569] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4571] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4576] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4578] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4580] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4582] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4585] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4587] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4590] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4600] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4602] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4604] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4606] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4610] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4620] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4622] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4623] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4624] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4626] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4628] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4631] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4643] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4645] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4646] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4647] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4648] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4652] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4654] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4655] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4658] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4660] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4661] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4664] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4665] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4666] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4668] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4669] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4671] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4673] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4676] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4677] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4679] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4681] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4685] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4686] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4692] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4703] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4705] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4709] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4711] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4713] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4717] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4719] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4721] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4723] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4736] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4738] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4740] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4742] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4744] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4760] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4762] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4764] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4766] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4768] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4770] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4772] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4776] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4781] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4794] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4798] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4799] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4802] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4803] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4805] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4807] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4821] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4823] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4825] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4844] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4846] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4847] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4849] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4851] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4854] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4856] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4859] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4874] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4877] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4878] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4881] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4883] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4885] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4889] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4894] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4896] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4897] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4899] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4901] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4903] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4905] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4908] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4911] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4921] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4927] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4934] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4935] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4936] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4975] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4977] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4978] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4979] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4980] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4981] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4983] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4985] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4988] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4996] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4998] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5000] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5001] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5003] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5007] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5009] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5011] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5012] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5014] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5018] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5020] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5022] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5023] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5025] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5029] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5031] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5033] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5034] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5036] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5040] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5042] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5044] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5045] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5047] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5053] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5060] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5061] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5062] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5064] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5115] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5117] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5118] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5119] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5121] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5123] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5126] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5167] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5169] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5171] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5174] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5175] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5178] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5181] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5183] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5185] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5186] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5188] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5190] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5195] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5196] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5198] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5200] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5203] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5205] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5207] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5209] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5233] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5235] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5236] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5238] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5240] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5242] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5245] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5263] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5266] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5267] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5269] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5271] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5299] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5302] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5304] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5306] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5308] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5309] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5312] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5314] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5315] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5318] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5339] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5342] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5343] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5345] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5349] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5352] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5354] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5356] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5361] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5362] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5365] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5366] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5369] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5371] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5375] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5377] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5378] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5380] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5384] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5386] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5387] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5390] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5407] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5409] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5410] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5411] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5412] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5414] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5417] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5420] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5423] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5425] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5427] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5429] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5435] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5438] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5441] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5443] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5444] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5447] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5449] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5450] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5454] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5455] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5457] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5458] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5459] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5461] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5463] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5469] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5472] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5474] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5475] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5476] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5477] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5478] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5483] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5485] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5487] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5489] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5492] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5494] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5496] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5501] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5503] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5510] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5511] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5513] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5514] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5516] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5521] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5523] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5525] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5530] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5531] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5548] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5550] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5551] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5553] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5554] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5558] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5581] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5583] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5585] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5587] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5590] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5592] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5595] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5597] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5600] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5602] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5605] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5607] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5610] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5613] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5620] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5622] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5623] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5627] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5628] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5630] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5634] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5642] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5648] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5689] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5691] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5693] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5695] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5696] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5698] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5699] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5701] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5703] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5705] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5706] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5710] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5712] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5714] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5717] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5738] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5740] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5742] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5743] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5746] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5777] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5779] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5780] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5782] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5784] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5786] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5788] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5789] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5790] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5792] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5818] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5820] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5821] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5823] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5825] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5827] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5830] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5863] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5866] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5869] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5870] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5872] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5876] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5878] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5879] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5880] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5881] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5882] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5884] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5886] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5890] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5894] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5895] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5897] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5900] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5905] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5924] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5926] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5927] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5928] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5930] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5932] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5952] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5954] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5955] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5956] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5957] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5958] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5961] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5963] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5967] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5969] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5970] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5972] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5974] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5979] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5982] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5984] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5986] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5988] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5989] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5994] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5996] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5998] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6000] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6006] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6016] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6018] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6020] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6021] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6022] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6028] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6031] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6032] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6034] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6038] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6040] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6046] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6048] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6049] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6052] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6071] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6073] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6091] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6093] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6094] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6095] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6114] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6116] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6141] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6143] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6144] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6145] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6148] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6151] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6154] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6156] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6159] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6162] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6164] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6166] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6172] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6173] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6175] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6176] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6178] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6179] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6181] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6185] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6188] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6195] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6196] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6202] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6204] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6208] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6210] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6212] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6232] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6247] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6249] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6250] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6252] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6264] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6354] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6356] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6358] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6360] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6365] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6366] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6367] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6368] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6369] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6370] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6374] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6376] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6378] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6382] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6385] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6387] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6389] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6391] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6393] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6394] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6398] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6401] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6410] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6412] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6413] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6418] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6420] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6421] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6425] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6433] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6437] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6440] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6442] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6446] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6448] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6451] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6454] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6455] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6456] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6457] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6458] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6459] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6460] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6461] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6462] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6463] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6464] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6465] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6466] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6467] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6468] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6469] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6470] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6471] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6472] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6473] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6474] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6475] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6476] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6477] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6478] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6479] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6480] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6481] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6482] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6483] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6484] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6485] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6486] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6487] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6488] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6489] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6490] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6491] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6492] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6493] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6494] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6497] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6498] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6499] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6500] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6501] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6502] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6503] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6504] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6505] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6506] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6507] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6509] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6515] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6517] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6519] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6522] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6527] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6529] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6532] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6537] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6539] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6542] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6544] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6547] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6550] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6551] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6555] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6557] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6558] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6559] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6562] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6564] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6565] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6566] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6567] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6570] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6572] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6576] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6582] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6583] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6584] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6585] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6586] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6588] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6592] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6599] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6601] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6608] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6609] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6610] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6612] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6613] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6614] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6616] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6618] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6621] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6625] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6627] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6635] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6636] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6637] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6638] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6640] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6641] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6645] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6647] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6648] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6650] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6655] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6659] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6662] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6664] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6666] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6668] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6671] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6675] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6676] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6684] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6686] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6688] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6690] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6693] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6695] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6699] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6701] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6705] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6707] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6709] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6710] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6718] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6727] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6730] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6731] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6734] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6735] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6737] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6738] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6740] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6742] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6743] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6745] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6746] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6748] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6749] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6750] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6751] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6753] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6754] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6758] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6759] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6762] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6764] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6765] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6769] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6771] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6773] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6779] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6783] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6786] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6791] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6793] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6796] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6797] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6815] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6818] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6820] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6821] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6823] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6825] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6826] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6827] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6829] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6831] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6832] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6835] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6853] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6855] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6857] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6859] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6861] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6865] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6884] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6886] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6888] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6889] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6891] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6895] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6907] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6920] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6928] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6941] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][7465] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][7506] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][7575] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][7831] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][8554] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][8557] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][8560] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][8562] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][8564] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][8566] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][8568] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][8570] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][8740] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][8744] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][8745] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][8748] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][8749] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][8755] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][8756] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][8830] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][8831] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][8833] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][8834] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][8837] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][8840] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][8930] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][9782] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][10559] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11346] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11347] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11349] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11359] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11360] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11362] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11373] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11374] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11375] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11377] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11381] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11427] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11429] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11495] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11545] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11562] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11563] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11564] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11565] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11567] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11571] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11577] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11579] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11580] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11583] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11584] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11587] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11589] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11590] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11591] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11593] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11594] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11607] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11609] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11612] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11613] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11614] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11617] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11619] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11620] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11623] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11627] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11628] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11659] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11660] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11661] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11662] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11664] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11668] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11675] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11676] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11681] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11682] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11683] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11684] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11687] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11689] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11690] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11691] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11692] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11693] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11706] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11708] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11711] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11712] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11713] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11714] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11715] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11716] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11717] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11718] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11719] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11720] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11721] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11723] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11724] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11725] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11730] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11732] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11733] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11734] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11736] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11738] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11739] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11741] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11743] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11744] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11746] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11748] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11749] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11753] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11754] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11759] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11761] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11767] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11769] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11770] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11772] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11778] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11781] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11782] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11787] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11788] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11793] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11803] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11809] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11810] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11812] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11817] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11822] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11831] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11836] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11841] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11850] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11852] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11854] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11856] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11861] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11866] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11875] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11880] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11885] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11890] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11900] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11902] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11904] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11906] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11909] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11910] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11911] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11912] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11915] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11916] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11918] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11922] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11924] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11925] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11927] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11931] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11933] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11935] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11937] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11941] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11952] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11953] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11955] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11957] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11968] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11970] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11972] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11978] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11979] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11980] = 0;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11981] = 0;
}
_$jscoverage['datatable/js/jquery.dataTables.js'].source = ["/**"," * @summary     DataTables"," * @description Paginate, search and sort HTML tables"," * @version     1.9.4"," * @file        jquery.dataTables.js"," * @author      Allan Jardine (www.sprymedia.co.uk)"," * @contact     www.sprymedia.co.uk/contact"," *"," * @copyright Copyright 2008-2012 Allan Jardine, all rights reserved."," *"," * This source file is free software, under either the GPL v2 license or a"," * BSD style license, available at:"," *   http://datatables.net/license_gpl2"," *   http://datatables.net/license_bsd"," * "," * This source file is distributed in the hope that it will be useful, but "," * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY "," * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details."," * "," * For details please refer to: http://www.datatables.net"," */","","/*jslint evil: true, undef: true, browser: true */","/*globals $, jQuery,define,_fnExternApiFunc,_fnInitialise,_fnInitComplete,_fnLanguageCompat,_fnAddColumn,_fnColumnOptions,_fnAddData,_fnCreateTr,_fnGatherData,_fnBuildHead,_fnDrawHead,_fnDraw,_fnReDraw,_fnAjaxUpdate,_fnAjaxParameters,_fnAjaxUpdateDraw,_fnServerParams,_fnAddOptionsHtml,_fnFeatureHtmlTable,_fnScrollDraw,_fnAdjustColumnSizing,_fnFeatureHtmlFilter,_fnFilterComplete,_fnFilterCustom,_fnFilterColumn,_fnFilter,_fnBuildSearchArray,_fnBuildSearchRow,_fnFilterCreateSearch,_fnDataToSearch,_fnSort,_fnSortAttachListener,_fnSortingClasses,_fnFeatureHtmlPaginate,_fnPageChange,_fnFeatureHtmlInfo,_fnUpdateInfo,_fnFeatureHtmlLength,_fnFeatureHtmlProcessing,_fnProcessingDisplay,_fnVisibleToColumnIndex,_fnColumnIndexToVisible,_fnNodeToDataIndex,_fnVisbleColumns,_fnCalculateEnd,_fnConvertToWidth,_fnCalculateColumnWidths,_fnScrollingWidthAdjust,_fnGetWidestNode,_fnGetMaxLenString,_fnStringToCss,_fnDetectType,_fnSettingsFromNode,_fnGetDataMaster,_fnGetTrNodes,_fnGetTdNodes,_fnEscapeRegex,_fnDeleteIndex,_fnReOrderIndex,_fnColumnOrdering,_fnLog,_fnClearTable,_fnSaveState,_fnLoadState,_fnCreateCookie,_fnReadCookie,_fnDetectHeader,_fnGetUniqueThs,_fnScrollBarWidth,_fnApplyToChildren,_fnMap,_fnGetRowData,_fnGetCellData,_fnSetCellData,_fnGetObjectDataFn,_fnSetObjectDataFn,_fnApplyColumnDefs,_fnBindAction,_fnCallbackReg,_fnCallbackFire,_fnJsonString,_fnRender,_fnNodeToColumnIndex,_fnInfoMacros,_fnBrowserDetect,_fnGetColumns*/","","(/** @lends &lt;global&gt; */function( window, document, undefined ) {","","(function( factory ) {","\t\"use strict\";","","\t// Define as an AMD module if possible","\tif ( typeof define === 'function' &amp;&amp; define.amd )","\t{","\t\tdefine( ['jquery'], factory );","\t}","\t/* Define using browser globals otherwise","\t * Prevent multiple instantiations if the script is loaded twice","\t */","\telse if ( jQuery &amp;&amp; !jQuery.fn.dataTable )","\t{","\t\tfactory( jQuery );","\t}","}","(/** @lends &lt;global&gt; */function( $ ) {","\t\"use strict\";","\t/** ","\t * DataTables is a plug-in for the jQuery Javascript library. It is a ","\t * highly flexible tool, based upon the foundations of progressive ","\t * enhancement, which will add advanced interaction controls to any ","\t * HTML table. For a full list of features please refer to","\t * &lt;a href=\"http://datatables.net\"&gt;DataTables.net&lt;/a&gt;.","\t *","\t * Note that the &lt;i&gt;DataTable&lt;/i&gt; object is not a global variable but is","\t * aliased to &lt;i&gt;jQuery.fn.DataTable&lt;/i&gt; and &lt;i&gt;jQuery.fn.dataTable&lt;/i&gt; through which ","\t * it may be  accessed.","\t *","\t *  @class","\t *  @param {object} [oInit={}] Configuration object for DataTables. Options","\t *    are defined by {@link DataTable.defaults}","\t *  @requires jQuery 1.3+","\t * ","\t *  @example","\t *    // Basic initialisation","\t *    $(document).ready( function {","\t *      $('#example').dataTable();","\t *    } );","\t *  ","\t *  @example","\t *    // Initialisation with configuration options - in this case, disable","\t *    // pagination and sorting.","\t *    $(document).ready( function {","\t *      $('#example').dataTable( {","\t *        \"bPaginate\": false,","\t *        \"bSort\": false ","\t *      } );","\t *    } );","\t */","\tvar DataTable = function( oInit )","\t{","\t\t","\t\t","\t\t/**","\t\t * Add a column to the list used for the table with default values","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {node} nTh The th element for this column","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnAddColumn( oSettings, nTh )","\t\t{","\t\t\tvar oDefaults = DataTable.defaults.columns;","\t\t\tvar iCol = oSettings.aoColumns.length;","\t\t\tvar oCol = $.extend( {}, DataTable.models.oColumn, oDefaults, {","\t\t\t\t\"sSortingClass\": oSettings.oClasses.sSortable,","\t\t\t\t\"sSortingClassJUI\": oSettings.oClasses.sSortJUI,","\t\t\t\t\"nTh\": nTh ? nTh : document.createElement('th'),","\t\t\t\t\"sTitle\":    oDefaults.sTitle    ? oDefaults.sTitle    : nTh ? nTh.innerHTML : '',","\t\t\t\t\"aDataSort\": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],","\t\t\t\t\"mData\": oDefaults.mData ? oDefaults.oDefaults : iCol","\t\t\t} );","\t\t\toSettings.aoColumns.push( oCol );","\t\t\t","\t\t\t/* Add a column specific filter */","\t\t\tif ( oSettings.aoPreSearchCols[ iCol ] === undefined || oSettings.aoPreSearchCols[ iCol ] === null )","\t\t\t{","\t\t\t\toSettings.aoPreSearchCols[ iCol ] = $.extend( {}, DataTable.models.oSearch );","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\tvar oPre = oSettings.aoPreSearchCols[ iCol ];","\t\t\t\t","\t\t\t\t/* Don't require that the user must specify bRegex, bSmart or bCaseInsensitive */","\t\t\t\tif ( oPre.bRegex === undefined )","\t\t\t\t{","\t\t\t\t\toPre.bRegex = true;","\t\t\t\t}","\t\t\t\t","\t\t\t\tif ( oPre.bSmart === undefined )","\t\t\t\t{","\t\t\t\t\toPre.bSmart = true;","\t\t\t\t}","\t\t\t\t","\t\t\t\tif ( oPre.bCaseInsensitive === undefined )","\t\t\t\t{","\t\t\t\t\toPre.bCaseInsensitive = true;","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\t/* Use the column options function to initialise classes etc */","\t\t\t_fnColumnOptions( oSettings, iCol, null );","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Apply options for a column","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {int} iCol column index to consider","\t\t *  @param {object} oOptions object with sType, bVisible and bSearchable etc","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnColumnOptions( oSettings, iCol, oOptions )","\t\t{","\t\t\tvar oCol = oSettings.aoColumns[ iCol ];","\t\t\t","\t\t\t/* User specified column options */","\t\t\tif ( oOptions !== undefined &amp;&amp; oOptions !== null )","\t\t\t{","\t\t\t\t/* Backwards compatibility for mDataProp */","\t\t\t\tif ( oOptions.mDataProp &amp;&amp; !oOptions.mData )","\t\t\t\t{","\t\t\t\t\toOptions.mData = oOptions.mDataProp;","\t\t\t\t}","\t\t","\t\t\t\tif ( oOptions.sType !== undefined )","\t\t\t\t{","\t\t\t\t\toCol.sType = oOptions.sType;","\t\t\t\t\toCol._bAutoType = false;","\t\t\t\t}","\t\t\t\t","\t\t\t\t$.extend( oCol, oOptions );","\t\t\t\t_fnMap( oCol, oOptions, \"sWidth\", \"sWidthOrig\" );","\t\t","\t\t\t\t/* iDataSort to be applied (backwards compatibility), but aDataSort will take","\t\t\t\t * priority if defined","\t\t\t\t */","\t\t\t\tif ( oOptions.iDataSort !== undefined )","\t\t\t\t{","\t\t\t\t\toCol.aDataSort = [ oOptions.iDataSort ];","\t\t\t\t}","\t\t\t\t_fnMap( oCol, oOptions, \"aDataSort\" );","\t\t\t}","\t\t","\t\t\t/* Cache the data get and set functions for speed */","\t\t\tvar mRender = oCol.mRender ? _fnGetObjectDataFn( oCol.mRender ) : null;","\t\t\tvar mData = _fnGetObjectDataFn( oCol.mData );","\t\t","\t\t\toCol.fnGetData = function (oData, sSpecific) {","\t\t\t\tvar innerData = mData( oData, sSpecific );","\t\t","\t\t\t\tif ( oCol.mRender &amp;&amp; (sSpecific &amp;&amp; sSpecific !== '') )","\t\t\t\t{","\t\t\t\t\treturn mRender( innerData, sSpecific, oData );","\t\t\t\t}","\t\t\t\treturn innerData;","\t\t\t};","\t\t\toCol.fnSetData = _fnSetObjectDataFn( oCol.mData );","\t\t\t","\t\t\t/* Feature sorting overrides column specific when off */","\t\t\tif ( !oSettings.oFeatures.bSort )","\t\t\t{","\t\t\t\toCol.bSortable = false;","\t\t\t}","\t\t\t","\t\t\t/* Check that the class assignment is correct for sorting */","\t\t\tif ( !oCol.bSortable ||","\t\t\t\t ($.inArray('asc', oCol.asSorting) == -1 &amp;&amp; $.inArray('desc', oCol.asSorting) == -1) )","\t\t\t{","\t\t\t\toCol.sSortingClass = oSettings.oClasses.sSortableNone;","\t\t\t\toCol.sSortingClassJUI = \"\";","\t\t\t}","\t\t\telse if ( $.inArray('asc', oCol.asSorting) == -1 &amp;&amp; $.inArray('desc', oCol.asSorting) == -1 )","\t\t\t{","\t\t\t\toCol.sSortingClass = oSettings.oClasses.sSortable;","\t\t\t\toCol.sSortingClassJUI = oSettings.oClasses.sSortJUI;","\t\t\t}","\t\t\telse if ( $.inArray('asc', oCol.asSorting) != -1 &amp;&amp; $.inArray('desc', oCol.asSorting) == -1 )","\t\t\t{","\t\t\t\toCol.sSortingClass = oSettings.oClasses.sSortableAsc;","\t\t\t\toCol.sSortingClassJUI = oSettings.oClasses.sSortJUIAscAllowed;","\t\t\t}","\t\t\telse if ( $.inArray('asc', oCol.asSorting) == -1 &amp;&amp; $.inArray('desc', oCol.asSorting) != -1 )","\t\t\t{","\t\t\t\toCol.sSortingClass = oSettings.oClasses.sSortableDesc;","\t\t\t\toCol.sSortingClassJUI = oSettings.oClasses.sSortJUIDescAllowed;","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Adjust the table column widths for new data. Note: you would probably want to ","\t\t * do a redraw after calling this function!","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnAdjustColumnSizing ( oSettings )","\t\t{","\t\t\t/* Not interested in doing column width calculation if auto-width is disabled */","\t\t\tif ( oSettings.oFeatures.bAutoWidth === false )","\t\t\t{","\t\t\t\treturn false;","\t\t\t}","\t\t\t","\t\t\t_fnCalculateColumnWidths( oSettings );","\t\t\tfor ( var i=0 , iLen=oSettings.aoColumns.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\toSettings.aoColumns[i].nTh.style.width = oSettings.aoColumns[i].sWidth;","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Covert the index of a visible column to the index in the data array (take account","\t\t * of hidden columns)","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {int} iMatch Visible column index to lookup","\t\t *  @returns {int} i the data index","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnVisibleToColumnIndex( oSettings, iMatch )","\t\t{","\t\t\tvar aiVis = _fnGetColumns( oSettings, 'bVisible' );","\t\t","\t\t\treturn typeof aiVis[iMatch] === 'number' ?","\t\t\t\taiVis[iMatch] :","\t\t\t\tnull;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Covert the index of an index in the data array and convert it to the visible","\t\t *   column index (take account of hidden columns)","\t\t *  @param {int} iMatch Column index to lookup","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @returns {int} i the data index","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnColumnIndexToVisible( oSettings, iMatch )","\t\t{","\t\t\tvar aiVis = _fnGetColumns( oSettings, 'bVisible' );","\t\t\tvar iPos = $.inArray( iMatch, aiVis );","\t\t","\t\t\treturn iPos !== -1 ? iPos : null;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Get the number of visible columns","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @returns {int} i the number of visible columns","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnVisbleColumns( oSettings )","\t\t{","\t\t\treturn _fnGetColumns( oSettings, 'bVisible' ).length;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Get an array of column indexes that match a given property","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {string} sParam Parameter in aoColumns to look for - typically ","\t\t *    bVisible or bSearchable","\t\t *  @returns {array} Array of indexes with matched properties","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnGetColumns( oSettings, sParam )","\t\t{","\t\t\tvar a = [];","\t\t","\t\t\t$.map( oSettings.aoColumns, function(val, i) {","\t\t\t\tif ( val[sParam] ) {","\t\t\t\t\ta.push( i );","\t\t\t\t}","\t\t\t} );","\t\t","\t\t\treturn a;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Get the sort type based on an input string","\t\t *  @param {string} sData data we wish to know the type of","\t\t *  @returns {string} type (defaults to 'string' if no type can be detected)","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnDetectType( sData )","\t\t{","\t\t\tvar aTypes = DataTable.ext.aTypes;","\t\t\tvar iLen = aTypes.length;","\t\t\t","\t\t\tfor ( var i=0 ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\tvar sType = aTypes[i]( sData );","\t\t\t\tif ( sType !== null )","\t\t\t\t{","\t\t\t\t\treturn sType;","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\treturn 'string';","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Figure out how to reorder a display list","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @returns array {int} aiReturn index list for reordering","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnReOrderIndex ( oSettings, sColumns )","\t\t{","\t\t\tvar aColumns = sColumns.split(',');","\t\t\tvar aiReturn = [];","\t\t\t","\t\t\tfor ( var i=0, iLen=oSettings.aoColumns.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\tfor ( var j=0 ; j&lt;iLen ; j++ )","\t\t\t\t{","\t\t\t\t\tif ( oSettings.aoColumns[i].sName == aColumns[j] )","\t\t\t\t\t{","\t\t\t\t\t\taiReturn.push( j );","\t\t\t\t\t\tbreak;","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\treturn aiReturn;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Get the column ordering that DataTables expects","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @returns {string} comma separated list of names","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnColumnOrdering ( oSettings )","\t\t{","\t\t\tvar sNames = '';","\t\t\tfor ( var i=0, iLen=oSettings.aoColumns.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\tsNames += oSettings.aoColumns[i].sName+',';","\t\t\t}","\t\t\tif ( sNames.length == iLen )","\t\t\t{","\t\t\t\treturn \"\";","\t\t\t}","\t\t\treturn sNames.slice(0, -1);","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Take the column definitions and static columns arrays and calculate how","\t\t * they relate to column indexes. The callback function will then apply the","\t\t * definition found for a column to a suitable configuration object.","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {array} aoColDefs The aoColumnDefs array that is to be applied","\t\t *  @param {array} aoCols The aoColumns array that defines columns individually","\t\t *  @param {function} fn Callback function - takes two parameters, the calculated","\t\t *    column index and the definition for that column.","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnApplyColumnDefs( oSettings, aoColDefs, aoCols, fn )","\t\t{","\t\t\tvar i, iLen, j, jLen, k, kLen;","\t\t","\t\t\t// Column definitions with aTargets","\t\t\tif ( aoColDefs )","\t\t\t{","\t\t\t\t/* Loop over the definitions array - loop in reverse so first instance has priority */","\t\t\t\tfor ( i=aoColDefs.length-1 ; i&gt;=0 ; i-- )","\t\t\t\t{","\t\t\t\t\t/* Each definition can target multiple columns, as it is an array */","\t\t\t\t\tvar aTargets = aoColDefs[i].aTargets;","\t\t\t\t\tif ( !$.isArray( aTargets ) )","\t\t\t\t\t{","\t\t\t\t\t\t_fnLog( oSettings, 1, 'aTargets must be an array of targets, not a '+(typeof aTargets) );","\t\t\t\t\t}","\t\t","\t\t\t\t\tfor ( j=0, jLen=aTargets.length ; j&lt;jLen ; j++ )","\t\t\t\t\t{","\t\t\t\t\t\tif ( typeof aTargets[j] === 'number' &amp;&amp; aTargets[j] &gt;= 0 )","\t\t\t\t\t\t{","\t\t\t\t\t\t\t/* Add columns that we don't yet know about */","\t\t\t\t\t\t\twhile( oSettings.aoColumns.length &lt;= aTargets[j] )","\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\t_fnAddColumn( oSettings );","\t\t\t\t\t\t\t}","\t\t","\t\t\t\t\t\t\t/* Integer, basic index */","\t\t\t\t\t\t\tfn( aTargets[j], aoColDefs[i] );","\t\t\t\t\t\t}","\t\t\t\t\t\telse if ( typeof aTargets[j] === 'number' &amp;&amp; aTargets[j] &lt; 0 )","\t\t\t\t\t\t{","\t\t\t\t\t\t\t/* Negative integer, right to left column counting */","\t\t\t\t\t\t\tfn( oSettings.aoColumns.length+aTargets[j], aoColDefs[i] );","\t\t\t\t\t\t}","\t\t\t\t\t\telse if ( typeof aTargets[j] === 'string' )","\t\t\t\t\t\t{","\t\t\t\t\t\t\t/* Class name matching on TH element */","\t\t\t\t\t\t\tfor ( k=0, kLen=oSettings.aoColumns.length ; k&lt;kLen ; k++ )","\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\tif ( aTargets[j] == \"_all\" ||","\t\t\t\t\t\t\t\t     $(oSettings.aoColumns[k].nTh).hasClass( aTargets[j] ) )","\t\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\t\tfn( k, aoColDefs[i] );","\t\t\t\t\t\t\t\t}","\t\t\t\t\t\t\t}","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t","\t\t\t// Statically defined columns array","\t\t\tif ( aoCols )","\t\t\t{","\t\t\t\tfor ( i=0, iLen=aoCols.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\tfn( i, aoCols[i] );","\t\t\t\t}","\t\t\t}","\t\t}","\t\t","\t\t/**","\t\t * Add a data array to the table, creating DOM node etc. This is the parallel to ","\t\t * _fnGatherData, but for adding rows from a Javascript source, rather than a","\t\t * DOM source.","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {array} aData data array to be added","\t\t *  @returns {int} &gt;=0 if successful (index of new aoData entry), -1 if failed","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnAddData ( oSettings, aDataSupplied )","\t\t{","\t\t\tvar oCol;","\t\t\t","\t\t\t/* Take an independent copy of the data source so we can bash it about as we wish */","\t\t\tvar aDataIn = ($.isArray(aDataSupplied)) ?","\t\t\t\taDataSupplied.slice() :","\t\t\t\t$.extend( true, {}, aDataSupplied );","\t\t\t","\t\t\t/* Create the object for storing information about this new row */","\t\t\tvar iRow = oSettings.aoData.length;","\t\t\tvar oData = $.extend( true, {}, DataTable.models.oRow );","\t\t\toData._aData = aDataIn;","\t\t\toSettings.aoData.push( oData );","\t\t","\t\t\t/* Create the cells */","\t\t\tvar nTd, sThisType;","\t\t\tfor ( var i=0, iLen=oSettings.aoColumns.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\toCol = oSettings.aoColumns[i];","\t\t","\t\t\t\t/* Use rendered data for filtering / sorting */","\t\t\t\tif ( typeof oCol.fnRender === 'function' &amp;&amp; oCol.bUseRendered &amp;&amp; oCol.mData !== null )","\t\t\t\t{","\t\t\t\t\t_fnSetCellData( oSettings, iRow, i, _fnRender(oSettings, iRow, i) );","\t\t\t\t}","\t\t\t\telse","\t\t\t\t{","\t\t\t\t\t_fnSetCellData( oSettings, iRow, i, _fnGetCellData( oSettings, iRow, i ) );","\t\t\t\t}","\t\t\t\t","\t\t\t\t/* See if we should auto-detect the column type */","\t\t\t\tif ( oCol._bAutoType &amp;&amp; oCol.sType != 'string' )","\t\t\t\t{","\t\t\t\t\t/* Attempt to auto detect the type - same as _fnGatherData() */","\t\t\t\t\tvar sVarType = _fnGetCellData( oSettings, iRow, i, 'type' );","\t\t\t\t\tif ( sVarType !== null &amp;&amp; sVarType !== '' )","\t\t\t\t\t{","\t\t\t\t\t\tsThisType = _fnDetectType( sVarType );","\t\t\t\t\t\tif ( oCol.sType === null )","\t\t\t\t\t\t{","\t\t\t\t\t\t\toCol.sType = sThisType;","\t\t\t\t\t\t}","\t\t\t\t\t\telse if ( oCol.sType != sThisType &amp;&amp; oCol.sType != \"html\" )","\t\t\t\t\t\t{","\t\t\t\t\t\t\t/* String is always the 'fallback' option */","\t\t\t\t\t\t\toCol.sType = 'string';","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\t/* Add to the display array */","\t\t\toSettings.aiDisplayMaster.push( iRow );","\t\t","\t\t\t/* Create the DOM information */","\t\t\tif ( !oSettings.oFeatures.bDeferRender )","\t\t\t{","\t\t\t\t_fnCreateTr( oSettings, iRow );","\t\t\t}","\t\t","\t\t\treturn iRow;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Read in the data from the target table from the DOM","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnGatherData( oSettings )","\t\t{","\t\t\tvar iLoop, i, iLen, j, jLen, jInner,","\t\t\t \tnTds, nTrs, nTd, nTr, aLocalData, iThisIndex,","\t\t\t\tiRow, iRows, iColumn, iColumns, sNodeName,","\t\t\t\toCol, oData;","\t\t\t","\t\t\t/*","\t\t\t * Process by row first","\t\t\t * Add the data object for the whole table - storing the tr node. Note - no point in getting","\t\t\t * DOM based data if we are going to go and replace it with Ajax source data.","\t\t\t */","\t\t\tif ( oSettings.bDeferLoading || oSettings.sAjaxSource === null )","\t\t\t{","\t\t\t\tnTr = oSettings.nTBody.firstChild;","\t\t\t\twhile ( nTr )","\t\t\t\t{","\t\t\t\t\tif ( nTr.nodeName.toUpperCase() == \"TR\" )","\t\t\t\t\t{","\t\t\t\t\t\tiThisIndex = oSettings.aoData.length;","\t\t\t\t\t\tnTr._DT_RowIndex = iThisIndex;","\t\t\t\t\t\toSettings.aoData.push( $.extend( true, {}, DataTable.models.oRow, {","\t\t\t\t\t\t\t\"nTr\": nTr","\t\t\t\t\t\t} ) );","\t\t","\t\t\t\t\t\toSettings.aiDisplayMaster.push( iThisIndex );","\t\t\t\t\t\tnTd = nTr.firstChild;","\t\t\t\t\t\tjInner = 0;","\t\t\t\t\t\twhile ( nTd )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tsNodeName = nTd.nodeName.toUpperCase();","\t\t\t\t\t\t\tif ( sNodeName == \"TD\" || sNodeName == \"TH\" )","\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\t_fnSetCellData( oSettings, iThisIndex, jInner, $.trim(nTd.innerHTML) );","\t\t\t\t\t\t\t\tjInner++;","\t\t\t\t\t\t\t}","\t\t\t\t\t\t\tnTd = nTd.nextSibling;","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t\tnTr = nTr.nextSibling;","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\t/* Gather in the TD elements of the Table - note that this is basically the same as","\t\t\t * fnGetTdNodes, but that function takes account of hidden columns, which we haven't yet","\t\t\t * setup!","\t\t\t */","\t\t\tnTrs = _fnGetTrNodes( oSettings );","\t\t\tnTds = [];","\t\t\tfor ( i=0, iLen=nTrs.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\tnTd = nTrs[i].firstChild;","\t\t\t\twhile ( nTd )","\t\t\t\t{","\t\t\t\t\tsNodeName = nTd.nodeName.toUpperCase();","\t\t\t\t\tif ( sNodeName == \"TD\" || sNodeName == \"TH\" )","\t\t\t\t\t{","\t\t\t\t\t\tnTds.push( nTd );","\t\t\t\t\t}","\t\t\t\t\tnTd = nTd.nextSibling;","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\t/* Now process by column */","\t\t\tfor ( iColumn=0, iColumns=oSettings.aoColumns.length ; iColumn&lt;iColumns ; iColumn++ )","\t\t\t{","\t\t\t\toCol = oSettings.aoColumns[iColumn];","\t\t","\t\t\t\t/* Get the title of the column - unless there is a user set one */","\t\t\t\tif ( oCol.sTitle === null )","\t\t\t\t{","\t\t\t\t\toCol.sTitle = oCol.nTh.innerHTML;","\t\t\t\t}","\t\t\t\t","\t\t\t\tvar","\t\t\t\t\tbAutoType = oCol._bAutoType,","\t\t\t\t\tbRender = typeof oCol.fnRender === 'function',","\t\t\t\t\tbClass = oCol.sClass !== null,","\t\t\t\t\tbVisible = oCol.bVisible,","\t\t\t\t\tnCell, sThisType, sRendered, sValType;","\t\t\t\t","\t\t\t\t/* A single loop to rule them all (and be more efficient) */","\t\t\t\tif ( bAutoType || bRender || bClass || !bVisible )","\t\t\t\t{","\t\t\t\t\tfor ( iRow=0, iRows=oSettings.aoData.length ; iRow&lt;iRows ; iRow++ )","\t\t\t\t\t{","\t\t\t\t\t\toData = oSettings.aoData[iRow];","\t\t\t\t\t\tnCell = nTds[ (iRow*iColumns) + iColumn ];","\t\t\t\t\t\t","\t\t\t\t\t\t/* Type detection */","\t\t\t\t\t\tif ( bAutoType &amp;&amp; oCol.sType != 'string' )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tsValType = _fnGetCellData( oSettings, iRow, iColumn, 'type' );","\t\t\t\t\t\t\tif ( sValType !== '' )","\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\tsThisType = _fnDetectType( sValType );","\t\t\t\t\t\t\t\tif ( oCol.sType === null )","\t\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\t\toCol.sType = sThisType;","\t\t\t\t\t\t\t\t}","\t\t\t\t\t\t\t\telse if ( oCol.sType != sThisType &amp;&amp; ","\t\t\t\t\t\t\t\t          oCol.sType != \"html\" )","\t\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\t\t/* String is always the 'fallback' option */","\t\t\t\t\t\t\t\t\toCol.sType = 'string';","\t\t\t\t\t\t\t\t}","\t\t\t\t\t\t\t}","\t\t\t\t\t\t}","\t\t","\t\t\t\t\t\tif ( oCol.mRender )","\t\t\t\t\t\t{","\t\t\t\t\t\t\t// mRender has been defined, so we need to get the value and set it","\t\t\t\t\t\t\tnCell.innerHTML = _fnGetCellData( oSettings, iRow, iColumn, 'display' );","\t\t\t\t\t\t}","\t\t\t\t\t\telse if ( oCol.mData !== iColumn )","\t\t\t\t\t\t{","\t\t\t\t\t\t\t// If mData is not the same as the column number, then we need to","\t\t\t\t\t\t\t// get the dev set value. If it is the column, no point in wasting","\t\t\t\t\t\t\t// time setting the value that is already there!","\t\t\t\t\t\t\tnCell.innerHTML = _fnGetCellData( oSettings, iRow, iColumn, 'display' );","\t\t\t\t\t\t}","\t\t\t\t\t\t","\t\t\t\t\t\t/* Rendering */","\t\t\t\t\t\tif ( bRender )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tsRendered = _fnRender( oSettings, iRow, iColumn );","\t\t\t\t\t\t\tnCell.innerHTML = sRendered;","\t\t\t\t\t\t\tif ( oCol.bUseRendered )","\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\t/* Use the rendered data for filtering / sorting */","\t\t\t\t\t\t\t\t_fnSetCellData( oSettings, iRow, iColumn, sRendered );","\t\t\t\t\t\t\t}","\t\t\t\t\t\t}","\t\t\t\t\t\t","\t\t\t\t\t\t/* Classes */","\t\t\t\t\t\tif ( bClass )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tnCell.className += ' '+oCol.sClass;","\t\t\t\t\t\t}","\t\t\t\t\t\t","\t\t\t\t\t\t/* Column visibility */","\t\t\t\t\t\tif ( !bVisible )","\t\t\t\t\t\t{","\t\t\t\t\t\t\toData._anHidden[iColumn] = nCell;","\t\t\t\t\t\t\tnCell.parentNode.removeChild( nCell );","\t\t\t\t\t\t}","\t\t\t\t\t\telse","\t\t\t\t\t\t{","\t\t\t\t\t\t\toData._anHidden[iColumn] = null;","\t\t\t\t\t\t}","\t\t","\t\t\t\t\t\tif ( oCol.fnCreatedCell )","\t\t\t\t\t\t{","\t\t\t\t\t\t\toCol.fnCreatedCell.call( oSettings.oInstance,","\t\t\t\t\t\t\t\tnCell, _fnGetCellData( oSettings, iRow, iColumn, 'display' ), oData._aData, iRow, iColumn","\t\t\t\t\t\t\t);","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t","\t\t\t/* Row created callbacks */","\t\t\tif ( oSettings.aoRowCreatedCallback.length !== 0 )","\t\t\t{","\t\t\t\tfor ( i=0, iLen=oSettings.aoData.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\toData = oSettings.aoData[i];","\t\t\t\t\t_fnCallbackFire( oSettings, 'aoRowCreatedCallback', null, [oData.nTr, oData._aData, i] );","\t\t\t\t}","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Take a TR element and convert it to an index in aoData","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {node} n the TR element to find","\t\t *  @returns {int} index if the node is found, null if not","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnNodeToDataIndex( oSettings, n )","\t\t{","\t\t\treturn (n._DT_RowIndex!==undefined) ? n._DT_RowIndex : null;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Take a TD element and convert it into a column data index (not the visible index)","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {int} iRow The row number the TD/TH can be found in","\t\t *  @param {node} n The TD/TH element to find","\t\t *  @returns {int} index if the node is found, -1 if not","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnNodeToColumnIndex( oSettings, iRow, n )","\t\t{","\t\t\tvar anCells = _fnGetTdNodes( oSettings, iRow );","\t\t","\t\t\tfor ( var i=0, iLen=oSettings.aoColumns.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\tif ( anCells[i] === n )","\t\t\t\t{","\t\t\t\t\treturn i;","\t\t\t\t}","\t\t\t}","\t\t\treturn -1;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Get an array of data for a given row from the internal data cache","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {int} iRow aoData row id","\t\t *  @param {string} sSpecific data get type ('type' 'filter' 'sort')","\t\t *  @param {array} aiColumns Array of column indexes to get data from","\t\t *  @returns {array} Data array","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnGetRowData( oSettings, iRow, sSpecific, aiColumns )","\t\t{","\t\t\tvar out = [];","\t\t\tfor ( var i=0, iLen=aiColumns.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\tout.push( _fnGetCellData( oSettings, iRow, aiColumns[i], sSpecific ) );","\t\t\t}","\t\t\treturn out;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Get the data for a given cell from the internal cache, taking into account data mapping","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {int} iRow aoData row id","\t\t *  @param {int} iCol Column index","\t\t *  @param {string} sSpecific data get type ('display', 'type' 'filter' 'sort')","\t\t *  @returns {*} Cell data","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnGetCellData( oSettings, iRow, iCol, sSpecific )","\t\t{","\t\t\tvar sData;","\t\t\tvar oCol = oSettings.aoColumns[iCol];","\t\t\tvar oData = oSettings.aoData[iRow]._aData;","\t\t","\t\t\tif ( (sData=oCol.fnGetData( oData, sSpecific )) === undefined )","\t\t\t{","\t\t\t\tif ( oSettings.iDrawError != oSettings.iDraw &amp;&amp; oCol.sDefaultContent === null )","\t\t\t\t{","\t\t\t\t\t_fnLog( oSettings, 0, \"Requested unknown parameter \"+","\t\t\t\t\t\t(typeof oCol.mData=='function' ? '{mData function}' : \"'\"+oCol.mData+\"'\")+","\t\t\t\t\t\t\" from the data source for row \"+iRow );","\t\t\t\t\toSettings.iDrawError = oSettings.iDraw;","\t\t\t\t}","\t\t\t\treturn oCol.sDefaultContent;","\t\t\t}","\t\t","\t\t\t/* When the data source is null, we can use default column data */","\t\t\tif ( sData === null &amp;&amp; oCol.sDefaultContent !== null )","\t\t\t{","\t\t\t\tsData = oCol.sDefaultContent;","\t\t\t}","\t\t\telse if ( typeof sData === 'function' )","\t\t\t{","\t\t\t\t/* If the data source is a function, then we run it and use the return */","\t\t\t\treturn sData();","\t\t\t}","\t\t","\t\t\tif ( sSpecific == 'display' &amp;&amp; sData === null )","\t\t\t{","\t\t\t\treturn '';","\t\t\t}","\t\t\treturn sData;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Set the value for a specific cell, into the internal data cache","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {int} iRow aoData row id","\t\t *  @param {int} iCol Column index","\t\t *  @param {*} val Value to set","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnSetCellData( oSettings, iRow, iCol, val )","\t\t{","\t\t\tvar oCol = oSettings.aoColumns[iCol];","\t\t\tvar oData = oSettings.aoData[iRow]._aData;","\t\t","\t\t\toCol.fnSetData( oData, val );","\t\t}","\t\t","\t\t","\t\t// Private variable that is used to match array syntax in the data property object","\t\tvar __reArray = /\\[.*?\\]$/;","\t\t","\t\t/**","\t\t * Return a function that can be used to get data from a source object, taking","\t\t * into account the ability to use nested objects as a source","\t\t *  @param {string|int|function} mSource The data source for the object","\t\t *  @returns {function} Data get function","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnGetObjectDataFn( mSource )","\t\t{","\t\t\tif ( mSource === null )","\t\t\t{","\t\t\t\t/* Give an empty string for rendering / sorting etc */","\t\t\t\treturn function (data, type) {","\t\t\t\t\treturn null;","\t\t\t\t};","\t\t\t}","\t\t\telse if ( typeof mSource === 'function' )","\t\t\t{","\t\t\t\treturn function (data, type, extra) {","\t\t\t\t\treturn mSource( data, type, extra );","\t\t\t\t};","\t\t\t}","\t\t\telse if ( typeof mSource === 'string' &amp;&amp; (mSource.indexOf('.') !== -1 || mSource.indexOf('[') !== -1) )","\t\t\t{","\t\t\t\t/* If there is a . in the source string then the data source is in a ","\t\t\t\t * nested object so we loop over the data for each level to get the next","\t\t\t\t * level down. On each loop we test for undefined, and if found immediately","\t\t\t\t * return. This allows entire objects to be missing and sDefaultContent to","\t\t\t\t * be used if defined, rather than throwing an error","\t\t\t\t */","\t\t\t\tvar fetchData = function (data, type, src) {","\t\t\t\t\tvar a = src.split('.');","\t\t\t\t\tvar arrayNotation, out, innerSrc;","\t\t","\t\t\t\t\tif ( src !== \"\" )","\t\t\t\t\t{","\t\t\t\t\t\tfor ( var i=0, iLen=a.length ; i&lt;iLen ; i++ )","\t\t\t\t\t\t{","\t\t\t\t\t\t\t// Check if we are dealing with an array notation request","\t\t\t\t\t\t\tarrayNotation = a[i].match(__reArray);","\t\t","\t\t\t\t\t\t\tif ( arrayNotation ) {","\t\t\t\t\t\t\t\ta[i] = a[i].replace(__reArray, '');","\t\t","\t\t\t\t\t\t\t\t// Condition allows simply [] to be passed in","\t\t\t\t\t\t\t\tif ( a[i] !== \"\" ) {","\t\t\t\t\t\t\t\t\tdata = data[ a[i] ];","\t\t\t\t\t\t\t\t}","\t\t\t\t\t\t\t\tout = [];","\t\t\t\t\t\t\t\t","\t\t\t\t\t\t\t\t// Get the remainder of the nested object to get","\t\t\t\t\t\t\t\ta.splice( 0, i+1 );","\t\t\t\t\t\t\t\tinnerSrc = a.join('.');","\t\t","\t\t\t\t\t\t\t\t// Traverse each entry in the array getting the properties requested","\t\t\t\t\t\t\t\tfor ( var j=0, jLen=data.length ; j&lt;jLen ; j++ ) {","\t\t\t\t\t\t\t\t\tout.push( fetchData( data[j], type, innerSrc ) );","\t\t\t\t\t\t\t\t}","\t\t","\t\t\t\t\t\t\t\t// If a string is given in between the array notation indicators, that","\t\t\t\t\t\t\t\t// is used to join the strings together, otherwise an array is returned","\t\t\t\t\t\t\t\tvar join = arrayNotation[0].substring(1, arrayNotation[0].length-1);","\t\t\t\t\t\t\t\tdata = (join===\"\") ? out : out.join(join);","\t\t","\t\t\t\t\t\t\t\t// The inner call to fetchData has already traversed through the remainder","\t\t\t\t\t\t\t\t// of the source requested, so we exit from the loop","\t\t\t\t\t\t\t\tbreak;","\t\t\t\t\t\t\t}","\t\t","\t\t\t\t\t\t\tif ( data === null || data[ a[i] ] === undefined )","\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\treturn undefined;","\t\t\t\t\t\t\t}","\t\t\t\t\t\t\tdata = data[ a[i] ];","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t","\t\t\t\t\treturn data;","\t\t\t\t};","\t\t","\t\t\t\treturn function (data, type) {","\t\t\t\t\treturn fetchData( data, type, mSource );","\t\t\t\t};","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\t/* Array or flat object mapping */","\t\t\t\treturn function (data, type) {","\t\t\t\t\treturn data[mSource];\t","\t\t\t\t};","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Return a function that can be used to set data from a source object, taking","\t\t * into account the ability to use nested objects as a source","\t\t *  @param {string|int|function} mSource The data source for the object","\t\t *  @returns {function} Data set function","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnSetObjectDataFn( mSource )","\t\t{","\t\t\tif ( mSource === null )","\t\t\t{","\t\t\t\t/* Nothing to do when the data source is null */","\t\t\t\treturn function (data, val) {};","\t\t\t}","\t\t\telse if ( typeof mSource === 'function' )","\t\t\t{","\t\t\t\treturn function (data, val) {","\t\t\t\t\tmSource( data, 'set', val );","\t\t\t\t};","\t\t\t}","\t\t\telse if ( typeof mSource === 'string' &amp;&amp; (mSource.indexOf('.') !== -1 || mSource.indexOf('[') !== -1) )","\t\t\t{","\t\t\t\t/* Like the get, we need to get data from a nested object */","\t\t\t\tvar setData = function (data, val, src) {","\t\t\t\t\tvar a = src.split('.'), b;","\t\t\t\t\tvar arrayNotation, o, innerSrc;","\t\t","\t\t\t\t\tfor ( var i=0, iLen=a.length-1 ; i&lt;iLen ; i++ )","\t\t\t\t\t{","\t\t\t\t\t\t// Check if we are dealing with an array notation request","\t\t\t\t\t\tarrayNotation = a[i].match(__reArray);","\t\t","\t\t\t\t\t\tif ( arrayNotation )","\t\t\t\t\t\t{","\t\t\t\t\t\t\ta[i] = a[i].replace(__reArray, '');","\t\t\t\t\t\t\tdata[ a[i] ] = [];","\t\t\t\t\t\t\t","\t\t\t\t\t\t\t// Get the remainder of the nested object to set so we can recurse","\t\t\t\t\t\t\tb = a.slice();","\t\t\t\t\t\t\tb.splice( 0, i+1 );","\t\t\t\t\t\t\tinnerSrc = b.join('.');","\t\t","\t\t\t\t\t\t\t// Traverse each entry in the array setting the properties requested","\t\t\t\t\t\t\tfor ( var j=0, jLen=val.length ; j&lt;jLen ; j++ )","\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\to = {};","\t\t\t\t\t\t\t\tsetData( o, val[j], innerSrc );","\t\t\t\t\t\t\t\tdata[ a[i] ].push( o );","\t\t\t\t\t\t\t}","\t\t","\t\t\t\t\t\t\t// The inner call to setData has already traversed through the remainder","\t\t\t\t\t\t\t// of the source and has set the data, thus we can exit here","\t\t\t\t\t\t\treturn;","\t\t\t\t\t\t}","\t\t","\t\t\t\t\t\t// If the nested object doesn't currently exist - since we are","\t\t\t\t\t\t// trying to set the value - create it","\t\t\t\t\t\tif ( data[ a[i] ] === null || data[ a[i] ] === undefined )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tdata[ a[i] ] = {};","\t\t\t\t\t\t}","\t\t\t\t\t\tdata = data[ a[i] ];","\t\t\t\t\t}","\t\t","\t\t\t\t\t// If array notation is used, we just want to strip it and use the property name","\t\t\t\t\t// and assign the value. If it isn't used, then we get the result we want anyway","\t\t\t\t\tdata[ a[a.length-1].replace(__reArray, '') ] = val;","\t\t\t\t};","\t\t","\t\t\t\treturn function (data, val) {","\t\t\t\t\treturn setData( data, val, mSource );","\t\t\t\t};","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\t/* Array or flat object mapping */","\t\t\t\treturn function (data, val) {","\t\t\t\t\tdata[mSource] = val;\t","\t\t\t\t};","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Return an array with the full table data","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @returns array {array} aData Master data array","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnGetDataMaster ( oSettings )","\t\t{","\t\t\tvar aData = [];","\t\t\tvar iLen = oSettings.aoData.length;","\t\t\tfor ( var i=0 ; i&lt;iLen; i++ )","\t\t\t{","\t\t\t\taData.push( oSettings.aoData[i]._aData );","\t\t\t}","\t\t\treturn aData;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Nuke the table","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnClearTable( oSettings )","\t\t{","\t\t\toSettings.aoData.splice( 0, oSettings.aoData.length );","\t\t\toSettings.aiDisplayMaster.splice( 0, oSettings.aiDisplayMaster.length );","\t\t\toSettings.aiDisplay.splice( 0, oSettings.aiDisplay.length );","\t\t\t_fnCalculateEnd( oSettings );","\t\t}","\t\t","\t\t","\t\t /**","\t\t * Take an array of integers (index array) and remove a target integer (value - not ","\t\t * the key!)","\t\t *  @param {array} a Index array to target","\t\t *  @param {int} iTarget value to find","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnDeleteIndex( a, iTarget )","\t\t{","\t\t\tvar iTargetIndex = -1;","\t\t\t","\t\t\tfor ( var i=0, iLen=a.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\tif ( a[i] == iTarget )","\t\t\t\t{","\t\t\t\t\tiTargetIndex = i;","\t\t\t\t}","\t\t\t\telse if ( a[i] &gt; iTarget )","\t\t\t\t{","\t\t\t\t\ta[i]--;","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\tif ( iTargetIndex != -1 )","\t\t\t{","\t\t\t\ta.splice( iTargetIndex, 1 );","\t\t\t}","\t\t}","\t\t","\t\t","\t\t /**","\t\t * Call the developer defined fnRender function for a given cell (row/column) with","\t\t * the required parameters and return the result.","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {int} iRow aoData index for the row","\t\t *  @param {int} iCol aoColumns index for the column","\t\t *  @returns {*} Return of the developer's fnRender function","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnRender( oSettings, iRow, iCol )","\t\t{","\t\t\tvar oCol = oSettings.aoColumns[iCol];","\t\t","\t\t\treturn oCol.fnRender( {","\t\t\t\t\"iDataRow\":    iRow,","\t\t\t\t\"iDataColumn\": iCol,","\t\t\t\t\"oSettings\":   oSettings,","\t\t\t\t\"aData\":       oSettings.aoData[iRow]._aData,","\t\t\t\t\"mDataProp\":   oCol.mData","\t\t\t}, _fnGetCellData(oSettings, iRow, iCol, 'display') );","\t\t}","\t\t/**","\t\t * Create a new TR element (and it's TD children) for a row","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {int} iRow Row to consider","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnCreateTr ( oSettings, iRow )","\t\t{","\t\t\tvar oData = oSettings.aoData[iRow];","\t\t\tvar nTd;","\t\t","\t\t\tif ( oData.nTr === null )","\t\t\t{","\t\t\t\toData.nTr = document.createElement('tr');","\t\t","\t\t\t\t/* Use a private property on the node to allow reserve mapping from the node","\t\t\t\t * to the aoData array for fast look up","\t\t\t\t */","\t\t\t\toData.nTr._DT_RowIndex = iRow;","\t\t","\t\t\t\t/* Special parameters can be given by the data source to be used on the row */","\t\t\t\tif ( oData._aData.DT_RowId )","\t\t\t\t{","\t\t\t\t\toData.nTr.id = oData._aData.DT_RowId;","\t\t\t\t}","\t\t","\t\t\t\tif ( oData._aData.DT_RowClass )","\t\t\t\t{","\t\t\t\t\toData.nTr.className = oData._aData.DT_RowClass;","\t\t\t\t}","\t\t","\t\t\t\t/* Process each column */","\t\t\t\tfor ( var i=0, iLen=oSettings.aoColumns.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\tvar oCol = oSettings.aoColumns[i];","\t\t\t\t\tnTd = document.createElement( oCol.sCellType );","\t\t","\t\t\t\t\t/* Render if needed - if bUseRendered is true then we already have the rendered","\t\t\t\t\t * value in the data source - so can just use that","\t\t\t\t\t */","\t\t\t\t\tnTd.innerHTML = (typeof oCol.fnRender === 'function' &amp;&amp; (!oCol.bUseRendered || oCol.mData === null)) ?","\t\t\t\t\t\t_fnRender( oSettings, iRow, i ) :","\t\t\t\t\t\t_fnGetCellData( oSettings, iRow, i, 'display' );","\t\t\t\t","\t\t\t\t\t/* Add user defined class */","\t\t\t\t\tif ( oCol.sClass !== null )","\t\t\t\t\t{","\t\t\t\t\t\tnTd.className = oCol.sClass;","\t\t\t\t\t}","\t\t\t\t\t","\t\t\t\t\tif ( oCol.bVisible )","\t\t\t\t\t{","\t\t\t\t\t\toData.nTr.appendChild( nTd );","\t\t\t\t\t\toData._anHidden[i] = null;","\t\t\t\t\t}","\t\t\t\t\telse","\t\t\t\t\t{","\t\t\t\t\t\toData._anHidden[i] = nTd;","\t\t\t\t\t}","\t\t","\t\t\t\t\tif ( oCol.fnCreatedCell )","\t\t\t\t\t{","\t\t\t\t\t\toCol.fnCreatedCell.call( oSettings.oInstance,","\t\t\t\t\t\t\tnTd, _fnGetCellData( oSettings, iRow, i, 'display' ), oData._aData, iRow, i","\t\t\t\t\t\t);","\t\t\t\t\t}","\t\t\t\t}","\t\t","\t\t\t\t_fnCallbackFire( oSettings, 'aoRowCreatedCallback', null, [oData.nTr, oData._aData, iRow] );","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Create the HTML header for the table","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnBuildHead( oSettings )","\t\t{","\t\t\tvar i, nTh, iLen, j, jLen;","\t\t\tvar iThs = $('th, td', oSettings.nTHead).length;","\t\t\tvar iCorrector = 0;","\t\t\tvar jqChildren;","\t\t\t","\t\t\t/* If there is a header in place - then use it - otherwise it's going to get nuked... */","\t\t\tif ( iThs !== 0 )","\t\t\t{","\t\t\t\t/* We've got a thead from the DOM, so remove hidden columns and apply width to vis cols */","\t\t\t\tfor ( i=0, iLen=oSettings.aoColumns.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\tnTh = oSettings.aoColumns[i].nTh;","\t\t\t\t\tnTh.setAttribute('role', 'columnheader');","\t\t\t\t\tif ( oSettings.aoColumns[i].bSortable )","\t\t\t\t\t{","\t\t\t\t\t\tnTh.setAttribute('tabindex', oSettings.iTabIndex);","\t\t\t\t\t\tnTh.setAttribute('aria-controls', oSettings.sTableId);","\t\t\t\t\t}","\t\t","\t\t\t\t\tif ( oSettings.aoColumns[i].sClass !== null )","\t\t\t\t\t{","\t\t\t\t\t\t$(nTh).addClass( oSettings.aoColumns[i].sClass );","\t\t\t\t\t}","\t\t\t\t\t","\t\t\t\t\t/* Set the title of the column if it is user defined (not what was auto detected) */","\t\t\t\t\tif ( oSettings.aoColumns[i].sTitle != nTh.innerHTML )","\t\t\t\t\t{","\t\t\t\t\t\tnTh.innerHTML = oSettings.aoColumns[i].sTitle;","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\t/* We don't have a header in the DOM - so we are going to have to create one */","\t\t\t\tvar nTr = document.createElement( \"tr\" );","\t\t\t\t","\t\t\t\tfor ( i=0, iLen=oSettings.aoColumns.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\tnTh = oSettings.aoColumns[i].nTh;","\t\t\t\t\tnTh.innerHTML = oSettings.aoColumns[i].sTitle;","\t\t\t\t\tnTh.setAttribute('tabindex', '0');","\t\t\t\t\t","\t\t\t\t\tif ( oSettings.aoColumns[i].sClass !== null )","\t\t\t\t\t{","\t\t\t\t\t\t$(nTh).addClass( oSettings.aoColumns[i].sClass );","\t\t\t\t\t}","\t\t\t\t\t","\t\t\t\t\tnTr.appendChild( nTh );","\t\t\t\t}","\t\t\t\t$(oSettings.nTHead).html( '' )[0].appendChild( nTr );","\t\t\t\t_fnDetectHeader( oSettings.aoHeader, oSettings.nTHead );","\t\t\t}","\t\t\t","\t\t\t/* ARIA role for the rows */\t","\t\t\t$(oSettings.nTHead).children('tr').attr('role', 'row');","\t\t\t","\t\t\t/* Add the extra markup needed by jQuery UI's themes */","\t\t\tif ( oSettings.bJUI )","\t\t\t{","\t\t\t\tfor ( i=0, iLen=oSettings.aoColumns.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\tnTh = oSettings.aoColumns[i].nTh;","\t\t\t\t\t","\t\t\t\t\tvar nDiv = document.createElement('div');","\t\t\t\t\tnDiv.className = oSettings.oClasses.sSortJUIWrapper;","\t\t\t\t\t$(nTh).contents().appendTo(nDiv);","\t\t\t\t\t","\t\t\t\t\tvar nSpan = document.createElement('span');","\t\t\t\t\tnSpan.className = oSettings.oClasses.sSortIcon;","\t\t\t\t\tnDiv.appendChild( nSpan );","\t\t\t\t\tnTh.appendChild( nDiv );","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\tif ( oSettings.oFeatures.bSort )","\t\t\t{","\t\t\t\tfor ( i=0 ; i&lt;oSettings.aoColumns.length ; i++ )","\t\t\t\t{","\t\t\t\t\tif ( oSettings.aoColumns[i].bSortable !== false )","\t\t\t\t\t{","\t\t\t\t\t\t_fnSortAttachListener( oSettings, oSettings.aoColumns[i].nTh, i );","\t\t\t\t\t}","\t\t\t\t\telse","\t\t\t\t\t{","\t\t\t\t\t\t$(oSettings.aoColumns[i].nTh).addClass( oSettings.oClasses.sSortableNone );","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\t/* Deal with the footer - add classes if required */","\t\t\tif ( oSettings.oClasses.sFooterTH !== \"\" )","\t\t\t{","\t\t\t\t$(oSettings.nTFoot).children('tr').children('th').addClass( oSettings.oClasses.sFooterTH );","\t\t\t}","\t\t\t","\t\t\t/* Cache the footer elements */","\t\t\tif ( oSettings.nTFoot !== null )","\t\t\t{","\t\t\t\tvar anCells = _fnGetUniqueThs( oSettings, null, oSettings.aoFooter );","\t\t\t\tfor ( i=0, iLen=oSettings.aoColumns.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\tif ( anCells[i] )","\t\t\t\t\t{","\t\t\t\t\t\toSettings.aoColumns[i].nTf = anCells[i];","\t\t\t\t\t\tif ( oSettings.aoColumns[i].sClass )","\t\t\t\t\t\t{","\t\t\t\t\t\t\t$(anCells[i]).addClass( oSettings.aoColumns[i].sClass );","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Draw the header (or footer) element based on the column visibility states. The","\t\t * methodology here is to use the layout array from _fnDetectHeader, modified for","\t\t * the instantaneous column visibility, to construct the new layout. The grid is","\t\t * traversed over cell at a time in a rows x columns grid fashion, although each ","\t\t * cell insert can cover multiple elements in the grid - which is tracks using the","\t\t * aApplied array. Cell inserts in the grid will only occur where there isn't","\t\t * already a cell in that position.","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param array {objects} aoSource Layout array from _fnDetectHeader","\t\t *  @param {boolean} [bIncludeHidden=false] If true then include the hidden columns in the calc, ","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnDrawHead( oSettings, aoSource, bIncludeHidden )","\t\t{","\t\t\tvar i, iLen, j, jLen, k, kLen, n, nLocalTr;","\t\t\tvar aoLocal = [];","\t\t\tvar aApplied = [];","\t\t\tvar iColumns = oSettings.aoColumns.length;","\t\t\tvar iRowspan, iColspan;","\t\t","\t\t\tif (  bIncludeHidden === undefined )","\t\t\t{","\t\t\t\tbIncludeHidden = false;","\t\t\t}","\t\t","\t\t\t/* Make a copy of the master layout array, but without the visible columns in it */","\t\t\tfor ( i=0, iLen=aoSource.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\taoLocal[i] = aoSource[i].slice();","\t\t\t\taoLocal[i].nTr = aoSource[i].nTr;","\t\t","\t\t\t\t/* Remove any columns which are currently hidden */","\t\t\t\tfor ( j=iColumns-1 ; j&gt;=0 ; j-- )","\t\t\t\t{","\t\t\t\t\tif ( !oSettings.aoColumns[j].bVisible &amp;&amp; !bIncludeHidden )","\t\t\t\t\t{","\t\t\t\t\t\taoLocal[i].splice( j, 1 );","\t\t\t\t\t}","\t\t\t\t}","\t\t","\t\t\t\t/* Prep the applied array - it needs an element for each row */","\t\t\t\taApplied.push( [] );","\t\t\t}","\t\t","\t\t\tfor ( i=0, iLen=aoLocal.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\tnLocalTr = aoLocal[i].nTr;","\t\t\t\t","\t\t\t\t/* All cells are going to be replaced, so empty out the row */","\t\t\t\tif ( nLocalTr )","\t\t\t\t{","\t\t\t\t\twhile( (n = nLocalTr.firstChild) )","\t\t\t\t\t{","\t\t\t\t\t\tnLocalTr.removeChild( n );","\t\t\t\t\t}","\t\t\t\t}","\t\t","\t\t\t\tfor ( j=0, jLen=aoLocal[i].length ; j&lt;jLen ; j++ )","\t\t\t\t{","\t\t\t\t\tiRowspan = 1;","\t\t\t\t\tiColspan = 1;","\t\t","\t\t\t\t\t/* Check to see if there is already a cell (row/colspan) covering our target","\t\t\t\t\t * insert point. If there is, then there is nothing to do.","\t\t\t\t\t */","\t\t\t\t\tif ( aApplied[i][j] === undefined )","\t\t\t\t\t{","\t\t\t\t\t\tnLocalTr.appendChild( aoLocal[i][j].cell );","\t\t\t\t\t\taApplied[i][j] = 1;","\t\t","\t\t\t\t\t\t/* Expand the cell to cover as many rows as needed */","\t\t\t\t\t\twhile ( aoLocal[i+iRowspan] !== undefined &amp;&amp;","\t\t\t\t\t\t        aoLocal[i][j].cell == aoLocal[i+iRowspan][j].cell )","\t\t\t\t\t\t{","\t\t\t\t\t\t\taApplied[i+iRowspan][j] = 1;","\t\t\t\t\t\t\tiRowspan++;","\t\t\t\t\t\t}","\t\t","\t\t\t\t\t\t/* Expand the cell to cover as many columns as needed */","\t\t\t\t\t\twhile ( aoLocal[i][j+iColspan] !== undefined &amp;&amp;","\t\t\t\t\t\t        aoLocal[i][j].cell == aoLocal[i][j+iColspan].cell )","\t\t\t\t\t\t{","\t\t\t\t\t\t\t/* Must update the applied array over the rows for the columns */","\t\t\t\t\t\t\tfor ( k=0 ; k&lt;iRowspan ; k++ )","\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\taApplied[i+k][j+iColspan] = 1;","\t\t\t\t\t\t\t}","\t\t\t\t\t\t\tiColspan++;","\t\t\t\t\t\t}","\t\t","\t\t\t\t\t\t/* Do the actual expansion in the DOM */","\t\t\t\t\t\taoLocal[i][j].cell.rowSpan = iRowspan;","\t\t\t\t\t\taoLocal[i][j].cell.colSpan = iColspan;","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Insert the required TR nodes into the table for display","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnDraw( oSettings )","\t\t{","\t\t\t/* Provide a pre-callback function which can be used to cancel the draw is false is returned */","\t\t\tvar aPreDraw = _fnCallbackFire( oSettings, 'aoPreDrawCallback', 'preDraw', [oSettings] );","\t\t\tif ( $.inArray( false, aPreDraw ) !== -1 )","\t\t\t{","\t\t\t\t_fnProcessingDisplay( oSettings, false );","\t\t\t\treturn;","\t\t\t}","\t\t\t","\t\t\tvar i, iLen, n;","\t\t\tvar anRows = [];","\t\t\tvar iRowCount = 0;","\t\t\tvar iStripes = oSettings.asStripeClasses.length;","\t\t\tvar iOpenRows = oSettings.aoOpenRows.length;","\t\t\t","\t\t\toSettings.bDrawing = true;","\t\t\t","\t\t\t/* Check and see if we have an initial draw position from state saving */","\t\t\tif ( oSettings.iInitDisplayStart !== undefined &amp;&amp; oSettings.iInitDisplayStart != -1 )","\t\t\t{","\t\t\t\tif ( oSettings.oFeatures.bServerSide )","\t\t\t\t{","\t\t\t\t\toSettings._iDisplayStart = oSettings.iInitDisplayStart;","\t\t\t\t}","\t\t\t\telse","\t\t\t\t{","\t\t\t\t\toSettings._iDisplayStart = (oSettings.iInitDisplayStart &gt;= oSettings.fnRecordsDisplay()) ?","\t\t\t\t\t\t0 : oSettings.iInitDisplayStart;","\t\t\t\t}","\t\t\t\toSettings.iInitDisplayStart = -1;","\t\t\t\t_fnCalculateEnd( oSettings );","\t\t\t}","\t\t\t","\t\t\t/* Server-side processing draw intercept */","\t\t\tif ( oSettings.bDeferLoading )","\t\t\t{","\t\t\t\toSettings.bDeferLoading = false;","\t\t\t\toSettings.iDraw++;","\t\t\t}","\t\t\telse if ( !oSettings.oFeatures.bServerSide )","\t\t\t{","\t\t\t\toSettings.iDraw++;","\t\t\t}","\t\t\telse if ( !oSettings.bDestroying &amp;&amp; !_fnAjaxUpdate( oSettings ) )","\t\t\t{","\t\t\t\treturn;","\t\t\t}","\t\t\t","\t\t\tif ( oSettings.aiDisplay.length !== 0 )","\t\t\t{","\t\t\t\tvar iStart = oSettings._iDisplayStart;","\t\t\t\tvar iEnd = oSettings._iDisplayEnd;","\t\t\t\t","\t\t\t\tif ( oSettings.oFeatures.bServerSide )","\t\t\t\t{","\t\t\t\t\tiStart = 0;","\t\t\t\t\tiEnd = oSettings.aoData.length;","\t\t\t\t}","\t\t\t\t","\t\t\t\tfor ( var j=iStart ; j&lt;iEnd ; j++ )","\t\t\t\t{","\t\t\t\t\tvar aoData = oSettings.aoData[ oSettings.aiDisplay[j] ];","\t\t\t\t\tif ( aoData.nTr === null )","\t\t\t\t\t{","\t\t\t\t\t\t_fnCreateTr( oSettings, oSettings.aiDisplay[j] );","\t\t\t\t\t}","\t\t","\t\t\t\t\tvar nRow = aoData.nTr;","\t\t\t\t\t","\t\t\t\t\t/* Remove the old striping classes and then add the new one */","\t\t\t\t\tif ( iStripes !== 0 )","\t\t\t\t\t{","\t\t\t\t\t\tvar sStripe = oSettings.asStripeClasses[ iRowCount % iStripes ];","\t\t\t\t\t\tif ( aoData._sRowStripe != sStripe )","\t\t\t\t\t\t{","\t\t\t\t\t\t\t$(nRow).removeClass( aoData._sRowStripe ).addClass( sStripe );","\t\t\t\t\t\t\taoData._sRowStripe = sStripe;","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t\t","\t\t\t\t\t/* Row callback functions - might want to manipulate the row */","\t\t\t\t\t_fnCallbackFire( oSettings, 'aoRowCallback', null, ","\t\t\t\t\t\t[nRow, oSettings.aoData[ oSettings.aiDisplay[j] ]._aData, iRowCount, j] );","\t\t\t\t\t","\t\t\t\t\tanRows.push( nRow );","\t\t\t\t\tiRowCount++;","\t\t\t\t\t","\t\t\t\t\t/* If there is an open row - and it is attached to this parent - attach it on redraw */","\t\t\t\t\tif ( iOpenRows !== 0 )","\t\t\t\t\t{","\t\t\t\t\t\tfor ( var k=0 ; k&lt;iOpenRows ; k++ )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tif ( nRow == oSettings.aoOpenRows[k].nParent )","\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\tanRows.push( oSettings.aoOpenRows[k].nTr );","\t\t\t\t\t\t\t\tbreak;","\t\t\t\t\t\t\t}","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\t/* Table is empty - create a row with an empty message in it */","\t\t\t\tanRows[ 0 ] = document.createElement( 'tr' );","\t\t\t\t","\t\t\t\tif ( oSettings.asStripeClasses[0] )","\t\t\t\t{","\t\t\t\t\tanRows[ 0 ].className = oSettings.asStripeClasses[0];","\t\t\t\t}","\t\t","\t\t\t\tvar oLang = oSettings.oLanguage;","\t\t\t\tvar sZero = oLang.sZeroRecords;","\t\t\t\tif ( oSettings.iDraw == 1 &amp;&amp; oSettings.sAjaxSource !== null &amp;&amp; !oSettings.oFeatures.bServerSide )","\t\t\t\t{","\t\t\t\t\tsZero = oLang.sLoadingRecords;","\t\t\t\t}","\t\t\t\telse if ( oLang.sEmptyTable &amp;&amp; oSettings.fnRecordsTotal() === 0 )","\t\t\t\t{","\t\t\t\t\tsZero = oLang.sEmptyTable;","\t\t\t\t}","\t\t","\t\t\t\tvar nTd = document.createElement( 'td' );","\t\t\t\tnTd.setAttribute( 'valign', \"top\" );","\t\t\t\tnTd.colSpan = _fnVisbleColumns( oSettings );","\t\t\t\tnTd.className = oSettings.oClasses.sRowEmpty;","\t\t\t\tnTd.innerHTML = _fnInfoMacros( oSettings, sZero );","\t\t\t\t","\t\t\t\tanRows[ iRowCount ].appendChild( nTd );","\t\t\t}","\t\t\t","\t\t\t/* Header and footer callbacks */","\t\t\t_fnCallbackFire( oSettings, 'aoHeaderCallback', 'header', [ $(oSettings.nTHead).children('tr')[0], ","\t\t\t\t_fnGetDataMaster( oSettings ), oSettings._iDisplayStart, oSettings.fnDisplayEnd(), oSettings.aiDisplay ] );","\t\t\t","\t\t\t_fnCallbackFire( oSettings, 'aoFooterCallback', 'footer', [ $(oSettings.nTFoot).children('tr')[0], ","\t\t\t\t_fnGetDataMaster( oSettings ), oSettings._iDisplayStart, oSettings.fnDisplayEnd(), oSettings.aiDisplay ] );","\t\t\t","\t\t\t/* ","\t\t\t * Need to remove any old row from the display - note we can't just empty the tbody using","\t\t\t * $().html('') since this will unbind the jQuery event handlers (even although the node ","\t\t\t * still exists!) - equally we can't use innerHTML, since IE throws an exception.","\t\t\t */","\t\t\tvar","\t\t\t\tnAddFrag = document.createDocumentFragment(),","\t\t\t\tnRemoveFrag = document.createDocumentFragment(),","\t\t\t\tnBodyPar, nTrs;","\t\t\t","\t\t\tif ( oSettings.nTBody )","\t\t\t{","\t\t\t\tnBodyPar = oSettings.nTBody.parentNode;","\t\t\t\tnRemoveFrag.appendChild( oSettings.nTBody );","\t\t\t\t","\t\t\t\t/* When doing infinite scrolling, only remove child rows when sorting, filtering or start","\t\t\t\t * up. When not infinite scroll, always do it.","\t\t\t\t */","\t\t\t\tif ( !oSettings.oScroll.bInfinite || !oSettings._bInitComplete ||","\t\t\t\t \toSettings.bSorted || oSettings.bFiltered )","\t\t\t\t{","\t\t\t\t\twhile( (n = oSettings.nTBody.firstChild) )","\t\t\t\t\t{","\t\t\t\t\t\toSettings.nTBody.removeChild( n );","\t\t\t\t\t}","\t\t\t\t}","\t\t\t\t","\t\t\t\t/* Put the draw table into the dom */","\t\t\t\tfor ( i=0, iLen=anRows.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\tnAddFrag.appendChild( anRows[i] );","\t\t\t\t}","\t\t\t\t","\t\t\t\toSettings.nTBody.appendChild( nAddFrag );","\t\t\t\tif ( nBodyPar !== null )","\t\t\t\t{","\t\t\t\t\tnBodyPar.appendChild( oSettings.nTBody );","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\t/* Call all required callback functions for the end of a draw */","\t\t\t_fnCallbackFire( oSettings, 'aoDrawCallback', 'draw', [oSettings] );","\t\t\t","\t\t\t/* Draw is complete, sorting and filtering must be as well */","\t\t\toSettings.bSorted = false;","\t\t\toSettings.bFiltered = false;","\t\t\toSettings.bDrawing = false;","\t\t\t","\t\t\tif ( oSettings.oFeatures.bServerSide )","\t\t\t{","\t\t\t\t_fnProcessingDisplay( oSettings, false );","\t\t\t\tif ( !oSettings._bInitComplete )","\t\t\t\t{","\t\t\t\t\t_fnInitComplete( oSettings );","\t\t\t\t}","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Redraw the table - taking account of the various features which are enabled","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnReDraw( oSettings )","\t\t{","\t\t\tif ( oSettings.oFeatures.bSort )","\t\t\t{","\t\t\t\t/* Sorting will refilter and draw for us */","\t\t\t\t_fnSort( oSettings, oSettings.oPreviousSearch );","\t\t\t}","\t\t\telse if ( oSettings.oFeatures.bFilter )","\t\t\t{","\t\t\t\t/* Filtering will redraw for us */","\t\t\t\t_fnFilterComplete( oSettings, oSettings.oPreviousSearch );","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\t_fnCalculateEnd( oSettings );","\t\t\t\t_fnDraw( oSettings );","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Add the options to the page HTML for the table","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnAddOptionsHtml ( oSettings )","\t\t{","\t\t\t/*","\t\t\t * Create a temporary, empty, div which we can later on replace with what we have generated","\t\t\t * we do it this way to rendering the 'options' html offline - speed :-)","\t\t\t */","\t\t\tvar nHolding = $('&lt;div&gt;&lt;/div&gt;')[0];","\t\t\toSettings.nTable.parentNode.insertBefore( nHolding, oSettings.nTable );","\t\t\t","\t\t\t/* ","\t\t\t * All DataTables are wrapped in a div","\t\t\t */","\t\t\toSettings.nTableWrapper = $('&lt;div id=\"'+oSettings.sTableId+'_wrapper\" class=\"'+oSettings.oClasses.sWrapper+'\" role=\"grid\"&gt;&lt;/div&gt;')[0];","\t\t\toSettings.nTableReinsertBefore = oSettings.nTable.nextSibling;","\t\t","\t\t\t/* Track where we want to insert the option */","\t\t\tvar nInsertNode = oSettings.nTableWrapper;","\t\t\t","\t\t\t/* Loop over the user set positioning and place the elements as needed */","\t\t\tvar aDom = oSettings.sDom.split('');","\t\t\tvar nTmp, iPushFeature, cOption, nNewNode, cNext, sAttr, j;","\t\t\tfor ( var i=0 ; i&lt;aDom.length ; i++ )","\t\t\t{","\t\t\t\tiPushFeature = 0;","\t\t\t\tcOption = aDom[i];","\t\t\t\t","\t\t\t\tif ( cOption == '&lt;' )","\t\t\t\t{","\t\t\t\t\t/* New container div */","\t\t\t\t\tnNewNode = $('&lt;div&gt;&lt;/div&gt;')[0];","\t\t\t\t\t","\t\t\t\t\t/* Check to see if we should append an id and/or a class name to the container */","\t\t\t\t\tcNext = aDom[i+1];","\t\t\t\t\tif ( cNext == \"'\" || cNext == '\"' )","\t\t\t\t\t{","\t\t\t\t\t\tsAttr = \"\";","\t\t\t\t\t\tj = 2;","\t\t\t\t\t\twhile ( aDom[i+j] != cNext )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tsAttr += aDom[i+j];","\t\t\t\t\t\t\tj++;","\t\t\t\t\t\t}","\t\t\t\t\t\t","\t\t\t\t\t\t/* Replace jQuery UI constants */","\t\t\t\t\t\tif ( sAttr == \"H\" )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tsAttr = oSettings.oClasses.sJUIHeader;","\t\t\t\t\t\t}","\t\t\t\t\t\telse if ( sAttr == \"F\" )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tsAttr = oSettings.oClasses.sJUIFooter;","\t\t\t\t\t\t}","\t\t\t\t\t\t","\t\t\t\t\t\t/* The attribute can be in the format of \"#id.class\", \"#id\" or \"class\" This logic","\t\t\t\t\t\t * breaks the string into parts and applies them as needed","\t\t\t\t\t\t */","\t\t\t\t\t\tif ( sAttr.indexOf('.') != -1 )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tvar aSplit = sAttr.split('.');","\t\t\t\t\t\t\tnNewNode.id = aSplit[0].substr(1, aSplit[0].length-1);","\t\t\t\t\t\t\tnNewNode.className = aSplit[1];","\t\t\t\t\t\t}","\t\t\t\t\t\telse if ( sAttr.charAt(0) == \"#\" )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tnNewNode.id = sAttr.substr(1, sAttr.length-1);","\t\t\t\t\t\t}","\t\t\t\t\t\telse","\t\t\t\t\t\t{","\t\t\t\t\t\t\tnNewNode.className = sAttr;","\t\t\t\t\t\t}","\t\t\t\t\t\t","\t\t\t\t\t\ti += j; /* Move along the position array */","\t\t\t\t\t}","\t\t\t\t\t","\t\t\t\t\tnInsertNode.appendChild( nNewNode );","\t\t\t\t\tnInsertNode = nNewNode;","\t\t\t\t}","\t\t\t\telse if ( cOption == '&gt;' )","\t\t\t\t{","\t\t\t\t\t/* End container div */","\t\t\t\t\tnInsertNode = nInsertNode.parentNode;","\t\t\t\t}","\t\t\t\telse if ( cOption == 'l' &amp;&amp; oSettings.oFeatures.bPaginate &amp;&amp; oSettings.oFeatures.bLengthChange )","\t\t\t\t{","\t\t\t\t\t/* Length */","\t\t\t\t\tnTmp = _fnFeatureHtmlLength( oSettings );","\t\t\t\t\tiPushFeature = 1;","\t\t\t\t}","\t\t\t\telse if ( cOption == 'f' &amp;&amp; oSettings.oFeatures.bFilter )","\t\t\t\t{","\t\t\t\t\t/* Filter */","\t\t\t\t\tnTmp = _fnFeatureHtmlFilter( oSettings );","\t\t\t\t\tiPushFeature = 1;","\t\t\t\t}","\t\t\t\telse if ( cOption == 'r' &amp;&amp; oSettings.oFeatures.bProcessing )","\t\t\t\t{","\t\t\t\t\t/* pRocessing */","\t\t\t\t\tnTmp = _fnFeatureHtmlProcessing( oSettings );","\t\t\t\t\tiPushFeature = 1;","\t\t\t\t}","\t\t\t\telse if ( cOption == 't' )","\t\t\t\t{","\t\t\t\t\t/* Table */","\t\t\t\t\tnTmp = _fnFeatureHtmlTable( oSettings );","\t\t\t\t\tiPushFeature = 1;","\t\t\t\t}","\t\t\t\telse if ( cOption ==  'i' &amp;&amp; oSettings.oFeatures.bInfo )","\t\t\t\t{","\t\t\t\t\t/* Info */","\t\t\t\t\tnTmp = _fnFeatureHtmlInfo( oSettings );","\t\t\t\t\tiPushFeature = 1;","\t\t\t\t}","\t\t\t\telse if ( cOption == 'p' &amp;&amp; oSettings.oFeatures.bPaginate )","\t\t\t\t{","\t\t\t\t\t/* Pagination */","\t\t\t\t\tnTmp = _fnFeatureHtmlPaginate( oSettings );","\t\t\t\t\tiPushFeature = 1;","\t\t\t\t}","\t\t\t\telse if ( DataTable.ext.aoFeatures.length !== 0 )","\t\t\t\t{","\t\t\t\t\t/* Plug-in features */","\t\t\t\t\tvar aoFeatures = DataTable.ext.aoFeatures;","\t\t\t\t\tfor ( var k=0, kLen=aoFeatures.length ; k&lt;kLen ; k++ )","\t\t\t\t\t{","\t\t\t\t\t\tif ( cOption == aoFeatures[k].cFeature )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tnTmp = aoFeatures[k].fnInit( oSettings );","\t\t\t\t\t\t\tif ( nTmp )","\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\tiPushFeature = 1;","\t\t\t\t\t\t\t}","\t\t\t\t\t\t\tbreak;","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t}","\t\t\t\t","\t\t\t\t/* Add to the 2D features array */","\t\t\t\tif ( iPushFeature == 1 &amp;&amp; nTmp !== null )","\t\t\t\t{","\t\t\t\t\tif ( typeof oSettings.aanFeatures[cOption] !== 'object' )","\t\t\t\t\t{","\t\t\t\t\t\toSettings.aanFeatures[cOption] = [];","\t\t\t\t\t}","\t\t\t\t\toSettings.aanFeatures[cOption].push( nTmp );","\t\t\t\t\tnInsertNode.appendChild( nTmp );","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\t/* Built our DOM structure - replace the holding div with what we want */","\t\t\tnHolding.parentNode.replaceChild( oSettings.nTableWrapper, nHolding );","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Use the DOM source to create up an array of header cells. The idea here is to","\t\t * create a layout grid (array) of rows x columns, which contains a reference","\t\t * to the cell that that point in the grid (regardless of col/rowspan), such that","\t\t * any column / row could be removed and the new grid constructed","\t\t *  @param array {object} aLayout Array to store the calculated layout in","\t\t *  @param {node} nThead The header/footer element for the table","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnDetectHeader ( aLayout, nThead )","\t\t{","\t\t\tvar nTrs = $(nThead).children('tr');","\t\t\tvar nTr, nCell;","\t\t\tvar i, k, l, iLen, jLen, iColShifted, iColumn, iColspan, iRowspan;","\t\t\tvar bUnique;","\t\t\tvar fnShiftCol = function ( a, i, j ) {","\t\t\t\tvar k = a[i];","\t\t                while ( k[j] ) {","\t\t\t\t\tj++;","\t\t\t\t}","\t\t\t\treturn j;","\t\t\t};","\t\t","\t\t\taLayout.splice( 0, aLayout.length );","\t\t\t","\t\t\t/* We know how many rows there are in the layout - so prep it */","\t\t\tfor ( i=0, iLen=nTrs.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\taLayout.push( [] );","\t\t\t}","\t\t\t","\t\t\t/* Calculate a layout array */","\t\t\tfor ( i=0, iLen=nTrs.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\tnTr = nTrs[i];","\t\t\t\tiColumn = 0;","\t\t\t\t","\t\t\t\t/* For every cell in the row... */","\t\t\t\tnCell = nTr.firstChild;","\t\t\t\twhile ( nCell ) {","\t\t\t\t\tif ( nCell.nodeName.toUpperCase() == \"TD\" ||","\t\t\t\t\t     nCell.nodeName.toUpperCase() == \"TH\" )","\t\t\t\t\t{","\t\t\t\t\t\t/* Get the col and rowspan attributes from the DOM and sanitise them */","\t\t\t\t\t\tiColspan = nCell.getAttribute('colspan') * 1;","\t\t\t\t\t\tiRowspan = nCell.getAttribute('rowspan') * 1;","\t\t\t\t\t\tiColspan = (!iColspan || iColspan===0 || iColspan===1) ? 1 : iColspan;","\t\t\t\t\t\tiRowspan = (!iRowspan || iRowspan===0 || iRowspan===1) ? 1 : iRowspan;","\t\t","\t\t\t\t\t\t/* There might be colspan cells already in this row, so shift our target ","\t\t\t\t\t\t * accordingly","\t\t\t\t\t\t */","\t\t\t\t\t\tiColShifted = fnShiftCol( aLayout, i, iColumn );","\t\t\t\t\t\t","\t\t\t\t\t\t/* Cache calculation for unique columns */","\t\t\t\t\t\tbUnique = iColspan === 1 ? true : false;","\t\t\t\t\t\t","\t\t\t\t\t\t/* If there is col / rowspan, copy the information into the layout grid */","\t\t\t\t\t\tfor ( l=0 ; l&lt;iColspan ; l++ )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tfor ( k=0 ; k&lt;iRowspan ; k++ )","\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\taLayout[i+k][iColShifted+l] = {","\t\t\t\t\t\t\t\t\t\"cell\": nCell,","\t\t\t\t\t\t\t\t\t\"unique\": bUnique","\t\t\t\t\t\t\t\t};","\t\t\t\t\t\t\t\taLayout[i+k].nTr = nTr;","\t\t\t\t\t\t\t}","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t\tnCell = nCell.nextSibling;","\t\t\t\t}","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Get an array of unique th elements, one for each column","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {node} nHeader automatically detect the layout from this node - optional","\t\t *  @param {array} aLayout thead/tfoot layout from _fnDetectHeader - optional","\t\t *  @returns array {node} aReturn list of unique th's","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnGetUniqueThs ( oSettings, nHeader, aLayout )","\t\t{","\t\t\tvar aReturn = [];","\t\t\tif ( !aLayout )","\t\t\t{","\t\t\t\taLayout = oSettings.aoHeader;","\t\t\t\tif ( nHeader )","\t\t\t\t{","\t\t\t\t\taLayout = [];","\t\t\t\t\t_fnDetectHeader( aLayout, nHeader );","\t\t\t\t}","\t\t\t}","\t\t","\t\t\tfor ( var i=0, iLen=aLayout.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\tfor ( var j=0, jLen=aLayout[i].length ; j&lt;jLen ; j++ )","\t\t\t\t{","\t\t\t\t\tif ( aLayout[i][j].unique &amp;&amp; ","\t\t\t\t\t\t (!aReturn[j] || !oSettings.bSortCellsTop) )","\t\t\t\t\t{","\t\t\t\t\t\taReturn[j] = aLayout[i][j].cell;","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\treturn aReturn;","\t\t}","\t\t","\t\t","\t\t","\t\t/**","\t\t * Update the table using an Ajax call","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @returns {boolean} Block the table drawing or not","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnAjaxUpdate( oSettings )","\t\t{","\t\t\tif ( oSettings.bAjaxDataGet )","\t\t\t{","\t\t\t\toSettings.iDraw++;","\t\t\t\t_fnProcessingDisplay( oSettings, true );","\t\t\t\tvar iColumns = oSettings.aoColumns.length;","\t\t\t\tvar aoData = _fnAjaxParameters( oSettings );","\t\t\t\t_fnServerParams( oSettings, aoData );","\t\t\t\t","\t\t\t\toSettings.fnServerData.call( oSettings.oInstance, oSettings.sAjaxSource, aoData,","\t\t\t\t\tfunction(json) {","\t\t\t\t\t\t_fnAjaxUpdateDraw( oSettings, json );","\t\t\t\t\t}, oSettings );","\t\t\t\treturn false;","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\treturn true;","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Build up the parameters in an object needed for a server-side processing request","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @returns {bool} block the table drawing or not","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnAjaxParameters( oSettings )","\t\t{","\t\t\tvar iColumns = oSettings.aoColumns.length;","\t\t\tvar aoData = [], mDataProp, aaSort, aDataSort;","\t\t\tvar i, j;","\t\t\t","\t\t\taoData.push( { \"name\": \"sEcho\",          \"value\": oSettings.iDraw } );","\t\t\taoData.push( { \"name\": \"iColumns\",       \"value\": iColumns } );","\t\t\taoData.push( { \"name\": \"sColumns\",       \"value\": _fnColumnOrdering(oSettings) } );","\t\t\taoData.push( { \"name\": \"iDisplayStart\",  \"value\": oSettings._iDisplayStart } );","\t\t\taoData.push( { \"name\": \"iDisplayLength\", \"value\": oSettings.oFeatures.bPaginate !== false ?","\t\t\t\toSettings._iDisplayLength : -1 } );","\t\t\t\t","\t\t\tfor ( i=0 ; i&lt;iColumns ; i++ )","\t\t\t{","\t\t\t  mDataProp = oSettings.aoColumns[i].mData;","\t\t\t\taoData.push( { \"name\": \"mDataProp_\"+i, \"value\": typeof(mDataProp)===\"function\" ? 'function' : mDataProp } );","\t\t\t}","\t\t\t","\t\t\t/* Filtering */","\t\t\tif ( oSettings.oFeatures.bFilter !== false )","\t\t\t{","\t\t\t\taoData.push( { \"name\": \"sSearch\", \"value\": oSettings.oPreviousSearch.sSearch } );","\t\t\t\taoData.push( { \"name\": \"bRegex\",  \"value\": oSettings.oPreviousSearch.bRegex } );","\t\t\t\tfor ( i=0 ; i&lt;iColumns ; i++ )","\t\t\t\t{","\t\t\t\t\taoData.push( { \"name\": \"sSearch_\"+i,     \"value\": oSettings.aoPreSearchCols[i].sSearch } );","\t\t\t\t\taoData.push( { \"name\": \"bRegex_\"+i,      \"value\": oSettings.aoPreSearchCols[i].bRegex } );","\t\t\t\t\taoData.push( { \"name\": \"bSearchable_\"+i, \"value\": oSettings.aoColumns[i].bSearchable } );","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\t/* Sorting */","\t\t\tif ( oSettings.oFeatures.bSort !== false )","\t\t\t{","\t\t\t\tvar iCounter = 0;","\t\t","\t\t\t\taaSort = ( oSettings.aaSortingFixed !== null ) ?","\t\t\t\t\toSettings.aaSortingFixed.concat( oSettings.aaSorting ) :","\t\t\t\t\toSettings.aaSorting.slice();","\t\t\t\t","\t\t\t\tfor ( i=0 ; i&lt;aaSort.length ; i++ )","\t\t\t\t{","\t\t\t\t\taDataSort = oSettings.aoColumns[ aaSort[i][0] ].aDataSort;","\t\t\t\t\t","\t\t\t\t\tfor ( j=0 ; j&lt;aDataSort.length ; j++ )","\t\t\t\t\t{","\t\t\t\t\t\taoData.push( { \"name\": \"iSortCol_\"+iCounter,  \"value\": aDataSort[j] } );","\t\t\t\t\t\taoData.push( { \"name\": \"sSortDir_\"+iCounter,  \"value\": aaSort[i][1] } );","\t\t\t\t\t\tiCounter++;","\t\t\t\t\t}","\t\t\t\t}","\t\t\t\taoData.push( { \"name\": \"iSortingCols\",   \"value\": iCounter } );","\t\t\t\t","\t\t\t\tfor ( i=0 ; i&lt;iColumns ; i++ )","\t\t\t\t{","\t\t\t\t\taoData.push( { \"name\": \"bSortable_\"+i,  \"value\": oSettings.aoColumns[i].bSortable } );","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\treturn aoData;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Add Ajax parameters from plug-ins","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param array {objects} aoData name/value pairs to send to the server","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnServerParams( oSettings, aoData )","\t\t{","\t\t\t_fnCallbackFire( oSettings, 'aoServerParams', 'serverParams', [aoData] );","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Data the data from the server (nuking the old) and redraw the table","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {object} json json data return from the server.","\t\t *  @param {string} json.sEcho Tracking flag for DataTables to match requests","\t\t *  @param {int} json.iTotalRecords Number of records in the data set, not accounting for filtering","\t\t *  @param {int} json.iTotalDisplayRecords Number of records in the data set, accounting for filtering","\t\t *  @param {array} json.aaData The data to display on this page","\t\t *  @param {string} [json.sColumns] Column ordering (sName, comma separated)","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnAjaxUpdateDraw ( oSettings, json )","\t\t{","\t\t\tif ( json.sEcho !== undefined )","\t\t\t{","\t\t\t\t/* Protect against old returns over-writing a new one. Possible when you get","\t\t\t\t * very fast interaction, and later queries are completed much faster","\t\t\t\t */","\t\t\t\tif ( json.sEcho*1 &lt; oSettings.iDraw )","\t\t\t\t{","\t\t\t\t\treturn;","\t\t\t\t}","\t\t\t\telse","\t\t\t\t{","\t\t\t\t\toSettings.iDraw = json.sEcho * 1;","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\tif ( !oSettings.oScroll.bInfinite ||","\t\t\t\t   (oSettings.oScroll.bInfinite &amp;&amp; (oSettings.bSorted || oSettings.bFiltered)) )","\t\t\t{","\t\t\t\t_fnClearTable( oSettings );","\t\t\t}","\t\t\toSettings._iRecordsTotal = parseInt(json.iTotalRecords, 10);","\t\t\toSettings._iRecordsDisplay = parseInt(json.iTotalDisplayRecords, 10);","\t\t\t","\t\t\t/* Determine if reordering is required */","\t\t\tvar sOrdering = _fnColumnOrdering(oSettings);","\t\t\tvar bReOrder = (json.sColumns !== undefined &amp;&amp; sOrdering !== \"\" &amp;&amp; json.sColumns != sOrdering );","\t\t\tvar aiIndex;","\t\t\tif ( bReOrder )","\t\t\t{","\t\t\t\taiIndex = _fnReOrderIndex( oSettings, json.sColumns );","\t\t\t}","\t\t\t","\t\t\tvar aData = _fnGetObjectDataFn( oSettings.sAjaxDataProp )( json );","\t\t\tfor ( var i=0, iLen=aData.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\tif ( bReOrder )","\t\t\t\t{","\t\t\t\t\t/* If we need to re-order, then create a new array with the correct order and add it */","\t\t\t\t\tvar aDataSorted = [];","\t\t\t\t\tfor ( var j=0, jLen=oSettings.aoColumns.length ; j&lt;jLen ; j++ )","\t\t\t\t\t{","\t\t\t\t\t\taDataSorted.push( aData[i][ aiIndex[j] ] );","\t\t\t\t\t}","\t\t\t\t\t_fnAddData( oSettings, aDataSorted );","\t\t\t\t}","\t\t\t\telse","\t\t\t\t{","\t\t\t\t\t/* No re-order required, sever got it \"right\" - just straight add */","\t\t\t\t\t_fnAddData( oSettings, aData[i] );","\t\t\t\t}","\t\t\t}","\t\t\toSettings.aiDisplay = oSettings.aiDisplayMaster.slice();","\t\t\t","\t\t\toSettings.bAjaxDataGet = false;","\t\t\t_fnDraw( oSettings );","\t\t\toSettings.bAjaxDataGet = true;","\t\t\t_fnProcessingDisplay( oSettings, false );","\t\t}","\t\t","\t\t","\t\t","\t\t/**","\t\t * Generate the node required for filtering text","\t\t *  @returns {node} Filter control element","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnFeatureHtmlFilter ( oSettings )","\t\t{","\t\t\tvar oPreviousSearch = oSettings.oPreviousSearch;","\t\t\t","\t\t\tvar sSearchStr = oSettings.oLanguage.sSearch;","\t\t\tsSearchStr = (sSearchStr.indexOf('_INPUT_') !== -1) ?","\t\t\t  sSearchStr.replace('_INPUT_', '&lt;input type=\"text\" /&gt;') :","\t\t\t  sSearchStr===\"\" ? '&lt;input type=\"text\" /&gt;' : sSearchStr+' &lt;input type=\"text\" /&gt;';","\t\t\t","\t\t\tvar nFilter = document.createElement( 'div' );","\t\t\tnFilter.className = oSettings.oClasses.sFilter;","\t\t\tnFilter.innerHTML = '&lt;label&gt;'+sSearchStr+'&lt;/label&gt;';","\t\t\tif ( !oSettings.aanFeatures.f )","\t\t\t{","\t\t\t\tnFilter.id = oSettings.sTableId+'_filter';","\t\t\t}","\t\t\t","\t\t\tvar jqFilter = $('input[type=\"text\"]', nFilter);","\t\t","\t\t\t// Store a reference to the input element, so other input elements could be","\t\t\t// added to the filter wrapper if needed (submit button for example)","\t\t\tnFilter._DT_Input = jqFilter[0];","\t\t","\t\t\tjqFilter.val( oPreviousSearch.sSearch.replace('\"','&amp;quot;') );","\t\t\tjqFilter.bind( 'keyup.DT', function(e) {","\t\t\t\t/* Update all other filter input elements for the new display */","\t\t\t\tvar n = oSettings.aanFeatures.f;","\t\t\t\tvar val = this.value===\"\" ? \"\" : this.value; // mental IE8 fix :-(","\t\t","\t\t\t\tfor ( var i=0, iLen=n.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\tif ( n[i] != $(this).parents('div.dataTables_filter')[0] )","\t\t\t\t\t{","\t\t\t\t\t\t$(n[i]._DT_Input).val( val );","\t\t\t\t\t}","\t\t\t\t}","\t\t\t\t","\t\t\t\t/* Now do the filter */","\t\t\t\tif ( val != oPreviousSearch.sSearch )","\t\t\t\t{","\t\t\t\t\t_fnFilterComplete( oSettings, { ","\t\t\t\t\t\t\"sSearch\": val, ","\t\t\t\t\t\t\"bRegex\": oPreviousSearch.bRegex,","\t\t\t\t\t\t\"bSmart\": oPreviousSearch.bSmart ,","\t\t\t\t\t\t\"bCaseInsensitive\": oPreviousSearch.bCaseInsensitive ","\t\t\t\t\t} );","\t\t\t\t}","\t\t\t} );","\t\t","\t\t\tjqFilter","\t\t\t\t.attr('aria-controls', oSettings.sTableId)","\t\t\t\t.bind( 'keypress.DT', function(e) {","\t\t\t\t\t/* Prevent form submission */","\t\t\t\t\tif ( e.keyCode == 13 )","\t\t\t\t\t{","\t\t\t\t\t\treturn false;","\t\t\t\t\t}","\t\t\t\t}","\t\t\t);","\t\t\t","\t\t\treturn nFilter;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Filter the table using both the global filter and column based filtering","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {object} oSearch search information","\t\t *  @param {int} [iForce] force a research of the master array (1) or not (undefined or 0)","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnFilterComplete ( oSettings, oInput, iForce )","\t\t{","\t\t\tvar oPrevSearch = oSettings.oPreviousSearch;","\t\t\tvar aoPrevSearch = oSettings.aoPreSearchCols;","\t\t\tvar fnSaveFilter = function ( oFilter ) {","\t\t\t\t/* Save the filtering values */","\t\t\t\toPrevSearch.sSearch = oFilter.sSearch;","\t\t\t\toPrevSearch.bRegex = oFilter.bRegex;","\t\t\t\toPrevSearch.bSmart = oFilter.bSmart;","\t\t\t\toPrevSearch.bCaseInsensitive = oFilter.bCaseInsensitive;","\t\t\t};","\t\t","\t\t\t/* In server-side processing all filtering is done by the server, so no point hanging around here */","\t\t\tif ( !oSettings.oFeatures.bServerSide )","\t\t\t{","\t\t\t\t/* Global filter */","\t\t\t\t_fnFilter( oSettings, oInput.sSearch, iForce, oInput.bRegex, oInput.bSmart, oInput.bCaseInsensitive );","\t\t\t\tfnSaveFilter( oInput );","\t\t","\t\t\t\t/* Now do the individual column filter */","\t\t\t\tfor ( var i=0 ; i&lt;oSettings.aoPreSearchCols.length ; i++ )","\t\t\t\t{","\t\t\t\t\t_fnFilterColumn( oSettings, aoPrevSearch[i].sSearch, i, aoPrevSearch[i].bRegex, ","\t\t\t\t\t\taoPrevSearch[i].bSmart, aoPrevSearch[i].bCaseInsensitive );","\t\t\t\t}","\t\t\t\t","\t\t\t\t/* Custom filtering */","\t\t\t\t_fnFilterCustom( oSettings );","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\tfnSaveFilter( oInput );","\t\t\t}","\t\t\t","\t\t\t/* Tell the draw function we have been filtering */","\t\t\toSettings.bFiltered = true;","\t\t\t$(oSettings.oInstance).trigger('filter', oSettings);","\t\t\t","\t\t\t/* Redraw the table */","\t\t\toSettings._iDisplayStart = 0;","\t\t\t_fnCalculateEnd( oSettings );","\t\t\t_fnDraw( oSettings );","\t\t\t","\t\t\t/* Rebuild search array 'offline' */","\t\t\t_fnBuildSearchArray( oSettings, 0 );","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Apply custom filtering functions","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnFilterCustom( oSettings )","\t\t{","\t\t\tvar afnFilters = DataTable.ext.afnFiltering;","\t\t\tvar aiFilterColumns = _fnGetColumns( oSettings, 'bSearchable' );","\t\t","\t\t\tfor ( var i=0, iLen=afnFilters.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\tvar iCorrector = 0;","\t\t\t\tfor ( var j=0, jLen=oSettings.aiDisplay.length ; j&lt;jLen ; j++ )","\t\t\t\t{","\t\t\t\t\tvar iDisIndex = oSettings.aiDisplay[j-iCorrector];","\t\t\t\t\tvar bTest = afnFilters[i](","\t\t\t\t\t\toSettings,","\t\t\t\t\t\t_fnGetRowData( oSettings, iDisIndex, 'filter', aiFilterColumns ),","\t\t\t\t\t\tiDisIndex","\t\t\t\t\t);","\t\t\t\t\t","\t\t\t\t\t/* Check if we should use this row based on the filtering function */","\t\t\t\t\tif ( !bTest )","\t\t\t\t\t{","\t\t\t\t\t\toSettings.aiDisplay.splice( j-iCorrector, 1 );","\t\t\t\t\t\tiCorrector++;","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Filter the table on a per-column basis","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {string} sInput string to filter on","\t\t *  @param {int} iColumn column to filter","\t\t *  @param {bool} bRegex treat search string as a regular expression or not","\t\t *  @param {bool} bSmart use smart filtering or not","\t\t *  @param {bool} bCaseInsensitive Do case insenstive matching or not","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnFilterColumn ( oSettings, sInput, iColumn, bRegex, bSmart, bCaseInsensitive )","\t\t{","\t\t\tif ( sInput === \"\" )","\t\t\t{","\t\t\t\treturn;","\t\t\t}","\t\t\t","\t\t\tvar iIndexCorrector = 0;","\t\t\tvar rpSearch = _fnFilterCreateSearch( sInput, bRegex, bSmart, bCaseInsensitive );","\t\t\t","\t\t\tfor ( var i=oSettings.aiDisplay.length-1 ; i&gt;=0 ; i-- )","\t\t\t{","\t\t\t\tvar sData = _fnDataToSearch( _fnGetCellData( oSettings, oSettings.aiDisplay[i], iColumn, 'filter' ),","\t\t\t\t\toSettings.aoColumns[iColumn].sType );","\t\t\t\tif ( ! rpSearch.test( sData ) )","\t\t\t\t{","\t\t\t\t\toSettings.aiDisplay.splice( i, 1 );","\t\t\t\t\tiIndexCorrector++;","\t\t\t\t}","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Filter the data table based on user input and draw the table","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {string} sInput string to filter on","\t\t *  @param {int} iForce optional - force a research of the master array (1) or not (undefined or 0)","\t\t *  @param {bool} bRegex treat as a regular expression or not","\t\t *  @param {bool} bSmart perform smart filtering or not","\t\t *  @param {bool} bCaseInsensitive Do case insenstive matching or not","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnFilter( oSettings, sInput, iForce, bRegex, bSmart, bCaseInsensitive )","\t\t{","\t\t\tvar i;","\t\t\tvar rpSearch = _fnFilterCreateSearch( sInput, bRegex, bSmart, bCaseInsensitive );","\t\t\tvar oPrevSearch = oSettings.oPreviousSearch;","\t\t\t","\t\t\t/* Check if we are forcing or not - optional parameter */","\t\t\tif ( !iForce )","\t\t\t{","\t\t\t\tiForce = 0;","\t\t\t}","\t\t\t","\t\t\t/* Need to take account of custom filtering functions - always filter */","\t\t\tif ( DataTable.ext.afnFiltering.length !== 0 )","\t\t\t{","\t\t\t\tiForce = 1;","\t\t\t}","\t\t\t","\t\t\t/*","\t\t\t * If the input is blank - we want the full data set","\t\t\t */","\t\t\tif ( sInput.length &lt;= 0 )","\t\t\t{","\t\t\t\toSettings.aiDisplay.splice( 0, oSettings.aiDisplay.length);","\t\t\t\toSettings.aiDisplay = oSettings.aiDisplayMaster.slice();","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\t/*","\t\t\t\t * We are starting a new search or the new search string is smaller ","\t\t\t\t * then the old one (i.e. delete). Search from the master array","\t\t\t \t */","\t\t\t\tif ( oSettings.aiDisplay.length == oSettings.aiDisplayMaster.length ||","\t\t\t\t\t   oPrevSearch.sSearch.length &gt; sInput.length || iForce == 1 ||","\t\t\t\t\t   sInput.indexOf(oPrevSearch.sSearch) !== 0 )","\t\t\t\t{","\t\t\t\t\t/* Nuke the old display array - we are going to rebuild it */","\t\t\t\t\toSettings.aiDisplay.splice( 0, oSettings.aiDisplay.length);","\t\t\t\t\t","\t\t\t\t\t/* Force a rebuild of the search array */","\t\t\t\t\t_fnBuildSearchArray( oSettings, 1 );","\t\t\t\t\t","\t\t\t\t\t/* Search through all records to populate the search array","\t\t\t\t\t * The the oSettings.aiDisplayMaster and asDataSearch arrays have 1 to 1 ","\t\t\t\t\t * mapping","\t\t\t\t\t */","\t\t\t\t\tfor ( i=0 ; i&lt;oSettings.aiDisplayMaster.length ; i++ )","\t\t\t\t\t{","\t\t\t\t\t\tif ( rpSearch.test(oSettings.asDataSearch[i]) )","\t\t\t\t\t\t{","\t\t\t\t\t\t\toSettings.aiDisplay.push( oSettings.aiDisplayMaster[i] );","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t  }","\t\t\t  else","\t\t\t\t{","\t\t\t  \t/* Using old search array - refine it - do it this way for speed","\t\t\t  \t * Don't have to search the whole master array again","\t\t\t\t\t */","\t\t\t  \tvar iIndexCorrector = 0;","\t\t\t  \t","\t\t\t  \t/* Search the current results */","\t\t\t  \tfor ( i=0 ; i&lt;oSettings.asDataSearch.length ; i++ )","\t\t\t\t\t{","\t\t\t  \t\tif ( ! rpSearch.test(oSettings.asDataSearch[i]) )","\t\t\t\t\t\t{","\t\t\t  \t\t\toSettings.aiDisplay.splice( i-iIndexCorrector, 1 );","\t\t\t  \t\t\tiIndexCorrector++;","\t\t\t  \t\t}","\t\t\t  \t}","\t\t\t  }","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Create an array which can be quickly search through","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {int} iMaster use the master data array - optional","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnBuildSearchArray ( oSettings, iMaster )","\t\t{","\t\t\tif ( !oSettings.oFeatures.bServerSide )","\t\t\t{","\t\t\t\t/* Clear out the old data */","\t\t\t\toSettings.asDataSearch = [];","\t\t","\t\t\t\tvar aiFilterColumns = _fnGetColumns( oSettings, 'bSearchable' );","\t\t\t\tvar aiIndex = (iMaster===1) ?","\t\t\t\t \toSettings.aiDisplayMaster :","\t\t\t\t \toSettings.aiDisplay;","\t\t\t\t","\t\t\t\tfor ( var i=0, iLen=aiIndex.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\toSettings.asDataSearch[i] = _fnBuildSearchRow(","\t\t\t\t\t\toSettings,","\t\t\t\t\t\t_fnGetRowData( oSettings, aiIndex[i], 'filter', aiFilterColumns )","\t\t\t\t\t);","\t\t\t\t}","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Create a searchable string from a single data row","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {array} aData Row data array to use for the data to search","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnBuildSearchRow( oSettings, aData )","\t\t{","\t\t\tvar sSearch = aData.join('  ');","\t\t\t","\t\t\t/* If it looks like there is an HTML entity in the string, attempt to decode it */","\t\t\tif ( sSearch.indexOf('&amp;') !== -1 )","\t\t\t{","\t\t\t\tsSearch = $('&lt;div&gt;').html(sSearch).text();","\t\t\t}","\t\t\t","\t\t\t// Strip newline characters","\t\t\treturn sSearch.replace( /[\\n\\r]/g, \" \" );","\t\t}","\t\t","\t\t/**","\t\t * Build a regular expression object suitable for searching a table","\t\t *  @param {string} sSearch string to search for","\t\t *  @param {bool} bRegex treat as a regular expression or not","\t\t *  @param {bool} bSmart perform smart filtering or not","\t\t *  @param {bool} bCaseInsensitive Do case insensitive matching or not","\t\t *  @returns {RegExp} constructed object","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnFilterCreateSearch( sSearch, bRegex, bSmart, bCaseInsensitive )","\t\t{","\t\t\tvar asSearch, sRegExpString;","\t\t\t","\t\t\tif ( bSmart )","\t\t\t{","\t\t\t\t/* Generate the regular expression to use. Something along the lines of:","\t\t\t\t * ^(?=.*?\\bone\\b)(?=.*?\\btwo\\b)(?=.*?\\bthree\\b).*$","\t\t\t\t */","\t\t\t\tasSearch = bRegex ? sSearch.split( ' ' ) : _fnEscapeRegex( sSearch ).split( ' ' );","\t\t\t\tsRegExpString = '^(?=.*?'+asSearch.join( ')(?=.*?' )+').*$';","\t\t\t\treturn new RegExp( sRegExpString, bCaseInsensitive ? \"i\" : \"\" );","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\tsSearch = bRegex ? sSearch : _fnEscapeRegex( sSearch );","\t\t\t\treturn new RegExp( sSearch, bCaseInsensitive ? \"i\" : \"\" );","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Convert raw data into something that the user can search on","\t\t *  @param {string} sData data to be modified","\t\t *  @param {string} sType data type","\t\t *  @returns {string} search string","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnDataToSearch ( sData, sType )","\t\t{","\t\t\tif ( typeof DataTable.ext.ofnSearch[sType] === \"function\" )","\t\t\t{","\t\t\t\treturn DataTable.ext.ofnSearch[sType]( sData );","\t\t\t}","\t\t\telse if ( sData === null )","\t\t\t{","\t\t\t\treturn '';","\t\t\t}","\t\t\telse if ( sType == \"html\" )","\t\t\t{","\t\t\t\treturn sData.replace(/[\\r\\n]/g,\" \").replace( /&lt;.*?&gt;/g, \"\" );","\t\t\t}","\t\t\telse if ( typeof sData === \"string\" )","\t\t\t{","\t\t\t\treturn sData.replace(/[\\r\\n]/g,\" \");","\t\t\t}","\t\t\treturn sData;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * scape a string such that it can be used in a regular expression","\t\t *  @param {string} sVal string to escape","\t\t *  @returns {string} escaped string","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnEscapeRegex ( sVal )","\t\t{","\t\t\tvar acEscape = [ '/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\\\', '$', '^', '-' ];","\t\t\tvar reReplace = new RegExp( '(\\\\' + acEscape.join('|\\\\') + ')', 'g' );","\t\t\treturn sVal.replace(reReplace, '\\\\$1');","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Generate the node required for the info display","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @returns {node} Information element","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnFeatureHtmlInfo ( oSettings )","\t\t{","\t\t\tvar nInfo = document.createElement( 'div' );","\t\t\tnInfo.className = oSettings.oClasses.sInfo;","\t\t\t","\t\t\t/* Actions that are to be taken once only for this feature */","\t\t\tif ( !oSettings.aanFeatures.i )","\t\t\t{","\t\t\t\t/* Add draw callback */","\t\t\t\toSettings.aoDrawCallback.push( {","\t\t\t\t\t\"fn\": _fnUpdateInfo,","\t\t\t\t\t\"sName\": \"information\"","\t\t\t\t} );","\t\t\t\t","\t\t\t\t/* Add id */","\t\t\t\tnInfo.id = oSettings.sTableId+'_info';","\t\t\t}","\t\t\toSettings.nTable.setAttribute( 'aria-describedby', oSettings.sTableId+'_info' );","\t\t\t","\t\t\treturn nInfo;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Update the information elements in the display","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnUpdateInfo ( oSettings )","\t\t{","\t\t\t/* Show information about the table */","\t\t\tif ( !oSettings.oFeatures.bInfo || oSettings.aanFeatures.i.length === 0 )","\t\t\t{","\t\t\t\treturn;","\t\t\t}","\t\t\t","\t\t\tvar","\t\t\t\toLang = oSettings.oLanguage,","\t\t\t\tiStart = oSettings._iDisplayStart+1,","\t\t\t\tiEnd = oSettings.fnDisplayEnd(),","\t\t\t\tiMax = oSettings.fnRecordsTotal(),","\t\t\t\tiTotal = oSettings.fnRecordsDisplay(),","\t\t\t\tsOut;","\t\t\t","\t\t\tif ( iTotal === 0 )","\t\t\t{","\t\t\t\t/* Empty record set */","\t\t\t\tsOut = oLang.sInfoEmpty;","\t\t\t}","\t\t\telse {","\t\t\t\t/* Normal record set */","\t\t\t\tsOut = oLang.sInfo;","\t\t\t}","\t\t","\t\t\tif ( iTotal != iMax )","\t\t\t{","\t\t\t\t/* Record set after filtering */","\t\t\t\tsOut += ' ' + oLang.sInfoFiltered;","\t\t\t}","\t\t","\t\t\t// Convert the macros","\t\t\tsOut += oLang.sInfoPostFix;","\t\t\tsOut = _fnInfoMacros( oSettings, sOut );","\t\t\t","\t\t\tif ( oLang.fnInfoCallback !== null )","\t\t\t{","\t\t\t\tsOut = oLang.fnInfoCallback.call( oSettings.oInstance, ","\t\t\t\t\toSettings, iStart, iEnd, iMax, iTotal, sOut );","\t\t\t}","\t\t\t","\t\t\tvar n = oSettings.aanFeatures.i;","\t\t\tfor ( var i=0, iLen=n.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\t$(n[i]).html( sOut );","\t\t\t}","\t\t}","\t\t","\t\t","\t\tfunction _fnInfoMacros ( oSettings, str )","\t\t{","\t\t\tvar","\t\t\t\tiStart = oSettings._iDisplayStart+1,","\t\t\t\tsStart = oSettings.fnFormatNumber( iStart ),","\t\t\t\tiEnd = oSettings.fnDisplayEnd(),","\t\t\t\tsEnd = oSettings.fnFormatNumber( iEnd ),","\t\t\t\tiTotal = oSettings.fnRecordsDisplay(),","\t\t\t\tsTotal = oSettings.fnFormatNumber( iTotal ),","\t\t\t\tiMax = oSettings.fnRecordsTotal(),","\t\t\t\tsMax = oSettings.fnFormatNumber( iMax );","\t\t","\t\t\t// When infinite scrolling, we are always starting at 1. _iDisplayStart is used only","\t\t\t// internally","\t\t\tif ( oSettings.oScroll.bInfinite )","\t\t\t{","\t\t\t\tsStart = oSettings.fnFormatNumber( 1 );","\t\t\t}","\t\t","\t\t\treturn str.","\t\t\t\treplace(/_START_/g, sStart).","\t\t\t\treplace(/_END_/g,   sEnd).","\t\t\t\treplace(/_TOTAL_/g, sTotal).","\t\t\t\treplace(/_MAX_/g,   sMax);","\t\t}","\t\t","\t\t","\t\t","\t\t/**","\t\t * Draw the table for the first time, adding all required features","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnInitialise ( oSettings )","\t\t{","\t\t\tvar i, iLen, iAjaxStart=oSettings.iInitDisplayStart;","\t\t\t","\t\t\t/* Ensure that the table data is fully initialised */","\t\t\tif ( oSettings.bInitialised === false )","\t\t\t{","\t\t\t\tsetTimeout( function(){ _fnInitialise( oSettings ); }, 200 );","\t\t\t\treturn;","\t\t\t}","\t\t\t","\t\t\t/* Show the display HTML options */","\t\t\t_fnAddOptionsHtml( oSettings );","\t\t\t","\t\t\t/* Build and draw the header / footer for the table */","\t\t\t_fnBuildHead( oSettings );","\t\t\t_fnDrawHead( oSettings, oSettings.aoHeader );","\t\t\tif ( oSettings.nTFoot )","\t\t\t{","\t\t\t\t_fnDrawHead( oSettings, oSettings.aoFooter );","\t\t\t}","\t\t","\t\t\t/* Okay to show that something is going on now */","\t\t\t_fnProcessingDisplay( oSettings, true );","\t\t\t","\t\t\t/* Calculate sizes for columns */","\t\t\tif ( oSettings.oFeatures.bAutoWidth )","\t\t\t{","\t\t\t\t_fnCalculateColumnWidths( oSettings );","\t\t\t}","\t\t\t","\t\t\tfor ( i=0, iLen=oSettings.aoColumns.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\tif ( oSettings.aoColumns[i].sWidth !== null )","\t\t\t\t{","\t\t\t\t\toSettings.aoColumns[i].nTh.style.width = _fnStringToCss( oSettings.aoColumns[i].sWidth );","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\t/* If there is default sorting required - let's do it. The sort function will do the","\t\t\t * drawing for us. Otherwise we draw the table regardless of the Ajax source - this allows","\t\t\t * the table to look initialised for Ajax sourcing data (show 'loading' message possibly)","\t\t\t */","\t\t\tif ( oSettings.oFeatures.bSort )","\t\t\t{","\t\t\t\t_fnSort( oSettings );","\t\t\t}","\t\t\telse if ( oSettings.oFeatures.bFilter )","\t\t\t{","\t\t\t\t_fnFilterComplete( oSettings, oSettings.oPreviousSearch );","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\toSettings.aiDisplay = oSettings.aiDisplayMaster.slice();","\t\t\t\t_fnCalculateEnd( oSettings );","\t\t\t\t_fnDraw( oSettings );","\t\t\t}","\t\t\t","\t\t\t/* if there is an ajax source load the data */","\t\t\tif ( oSettings.sAjaxSource !== null &amp;&amp; !oSettings.oFeatures.bServerSide )","\t\t\t{","\t\t\t\tvar aoData = [];","\t\t\t\t_fnServerParams( oSettings, aoData );","\t\t\t\toSettings.fnServerData.call( oSettings.oInstance, oSettings.sAjaxSource, aoData, function(json) {","\t\t\t\t\tvar aData = (oSettings.sAjaxDataProp !== \"\") ?","\t\t\t\t\t \t_fnGetObjectDataFn( oSettings.sAjaxDataProp )(json) : json;","\t\t","\t\t\t\t\t/* Got the data - add it to the table */","\t\t\t\t\tfor ( i=0 ; i&lt;aData.length ; i++ )","\t\t\t\t\t{","\t\t\t\t\t\t_fnAddData( oSettings, aData[i] );","\t\t\t\t\t}","\t\t\t\t\t","\t\t\t\t\t/* Reset the init display for cookie saving. We've already done a filter, and","\t\t\t\t\t * therefore cleared it before. So we need to make it appear 'fresh'","\t\t\t\t\t */","\t\t\t\t\toSettings.iInitDisplayStart = iAjaxStart;","\t\t\t\t\t","\t\t\t\t\tif ( oSettings.oFeatures.bSort )","\t\t\t\t\t{","\t\t\t\t\t\t_fnSort( oSettings );","\t\t\t\t\t}","\t\t\t\t\telse","\t\t\t\t\t{","\t\t\t\t\t\toSettings.aiDisplay = oSettings.aiDisplayMaster.slice();","\t\t\t\t\t\t_fnCalculateEnd( oSettings );","\t\t\t\t\t\t_fnDraw( oSettings );","\t\t\t\t\t}","\t\t\t\t\t","\t\t\t\t\t_fnProcessingDisplay( oSettings, false );","\t\t\t\t\t_fnInitComplete( oSettings, json );","\t\t\t\t}, oSettings );","\t\t\t\treturn;","\t\t\t}","\t\t\t","\t\t\t/* Server-side processing initialisation complete is done at the end of _fnDraw */","\t\t\tif ( !oSettings.oFeatures.bServerSide )","\t\t\t{","\t\t\t\t_fnProcessingDisplay( oSettings, false );","\t\t\t\t_fnInitComplete( oSettings );","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Draw the table for the first time, adding all required features","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {object} [json] JSON from the server that completed the table, if using Ajax source","\t\t *    with client-side processing (optional)","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnInitComplete ( oSettings, json )","\t\t{","\t\t\toSettings._bInitComplete = true;","\t\t\t_fnCallbackFire( oSettings, 'aoInitComplete', 'init', [oSettings, json] );","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Language compatibility - when certain options are given, and others aren't, we","\t\t * need to duplicate the values over, in order to provide backwards compatibility","\t\t * with older language files.","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnLanguageCompat( oLanguage )","\t\t{","\t\t\tvar oDefaults = DataTable.defaults.oLanguage;","\t\t","\t\t\t/* Backwards compatibility - if there is no sEmptyTable given, then use the same as","\t\t\t * sZeroRecords - assuming that is given.","\t\t\t */","\t\t\tif ( !oLanguage.sEmptyTable &amp;&amp; oLanguage.sZeroRecords &amp;&amp;","\t\t\t\toDefaults.sEmptyTable === \"No data available in table\" )","\t\t\t{","\t\t\t\t_fnMap( oLanguage, oLanguage, 'sZeroRecords', 'sEmptyTable' );","\t\t\t}","\t\t","\t\t\t/* Likewise with loading records */","\t\t\tif ( !oLanguage.sLoadingRecords &amp;&amp; oLanguage.sZeroRecords &amp;&amp;","\t\t\t\toDefaults.sLoadingRecords === \"Loading...\" )","\t\t\t{","\t\t\t\t_fnMap( oLanguage, oLanguage, 'sZeroRecords', 'sLoadingRecords' );","\t\t\t}","\t\t}","\t\t","\t\t","\t\t","\t\t/**","\t\t * Generate the node required for user display length changing","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @returns {node} Display length feature node","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnFeatureHtmlLength ( oSettings )","\t\t{","\t\t\tif ( oSettings.oScroll.bInfinite )","\t\t\t{","\t\t\t\treturn null;","\t\t\t}","\t\t\t","\t\t\t/* This can be overruled by not using the _MENU_ var/macro in the language variable */","\t\t\tvar sName = 'name=\"'+oSettings.sTableId+'_length\"';","\t\t\tvar sStdMenu = '&lt;select size=\"1\" '+sName+'&gt;';","\t\t\tvar i, iLen;","\t\t\tvar aLengthMenu = oSettings.aLengthMenu;","\t\t\t","\t\t\tif ( aLengthMenu.length == 2 &amp;&amp; typeof aLengthMenu[0] === 'object' &amp;&amp; ","\t\t\t\t\ttypeof aLengthMenu[1] === 'object' )","\t\t\t{","\t\t\t\tfor ( i=0, iLen=aLengthMenu[0].length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\tsStdMenu += '&lt;option value=\"'+aLengthMenu[0][i]+'\"&gt;'+aLengthMenu[1][i]+'&lt;/option&gt;';","\t\t\t\t}","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\tfor ( i=0, iLen=aLengthMenu.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\tsStdMenu += '&lt;option value=\"'+aLengthMenu[i]+'\"&gt;'+aLengthMenu[i]+'&lt;/option&gt;';","\t\t\t\t}","\t\t\t}","\t\t\tsStdMenu += '&lt;/select&gt;';","\t\t\t","\t\t\tvar nLength = document.createElement( 'div' );","\t\t\tif ( !oSettings.aanFeatures.l )","\t\t\t{","\t\t\t\tnLength.id = oSettings.sTableId+'_length';","\t\t\t}","\t\t\tnLength.className = oSettings.oClasses.sLength;","\t\t\tnLength.innerHTML = '&lt;label&gt;'+oSettings.oLanguage.sLengthMenu.replace( '_MENU_', sStdMenu )+'&lt;/label&gt;';","\t\t\t","\t\t\t/*","\t\t\t * Set the length to the current display length - thanks to Andrea Pavlovic for this fix,","\t\t\t * and Stefan Skopnik for fixing the fix!","\t\t\t */","\t\t\t$('select option[value=\"'+oSettings._iDisplayLength+'\"]', nLength).attr(\"selected\", true);","\t\t\t","\t\t\t$('select', nLength).bind( 'change.DT', function(e) {","\t\t\t\tvar iVal = $(this).val();","\t\t\t\t","\t\t\t\t/* Update all other length options for the new display */","\t\t\t\tvar n = oSettings.aanFeatures.l;","\t\t\t\tfor ( i=0, iLen=n.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\tif ( n[i] != this.parentNode )","\t\t\t\t\t{","\t\t\t\t\t\t$('select', n[i]).val( iVal );","\t\t\t\t\t}","\t\t\t\t}","\t\t\t\t","\t\t\t\t/* Redraw the table */","\t\t\t\toSettings._iDisplayLength = parseInt(iVal, 10);","\t\t\t\t_fnCalculateEnd( oSettings );","\t\t\t\t","\t\t\t\t/* If we have space to show extra rows (backing up from the end point - then do so */","\t\t\t\tif ( oSettings.fnDisplayEnd() == oSettings.fnRecordsDisplay() )","\t\t\t\t{","\t\t\t\t\toSettings._iDisplayStart = oSettings.fnDisplayEnd() - oSettings._iDisplayLength;","\t\t\t\t\tif ( oSettings._iDisplayStart &lt; 0 )","\t\t\t\t\t{","\t\t\t\t\t\toSettings._iDisplayStart = 0;","\t\t\t\t\t}","\t\t\t\t}","\t\t\t\t","\t\t\t\tif ( oSettings._iDisplayLength == -1 )","\t\t\t\t{","\t\t\t\t\toSettings._iDisplayStart = 0;","\t\t\t\t}","\t\t\t\t","\t\t\t\t_fnDraw( oSettings );","\t\t\t} );","\t\t","\t\t","\t\t\t$('select', nLength).attr('aria-controls', oSettings.sTableId);","\t\t\t","\t\t\treturn nLength;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Recalculate the end point based on the start point","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnCalculateEnd( oSettings )","\t\t{","\t\t\tif ( oSettings.oFeatures.bPaginate === false )","\t\t\t{","\t\t\t\toSettings._iDisplayEnd = oSettings.aiDisplay.length;","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\t/* Set the end point of the display - based on how many elements there are","\t\t\t\t * still to display","\t\t\t\t */","\t\t\t\tif ( oSettings._iDisplayStart + oSettings._iDisplayLength &gt; oSettings.aiDisplay.length ||","\t\t\t\t\t   oSettings._iDisplayLength == -1 )","\t\t\t\t{","\t\t\t\t\toSettings._iDisplayEnd = oSettings.aiDisplay.length;","\t\t\t\t}","\t\t\t\telse","\t\t\t\t{","\t\t\t\t\toSettings._iDisplayEnd = oSettings._iDisplayStart + oSettings._iDisplayLength;","\t\t\t\t}","\t\t\t}","\t\t}","\t\t","\t\t","\t\t","\t\t/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *","\t\t * Note that most of the paging logic is done in ","\t\t * DataTable.ext.oPagination","\t\t */","\t\t","\t\t/**","\t\t * Generate the node required for default pagination","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @returns {node} Pagination feature node","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnFeatureHtmlPaginate ( oSettings )","\t\t{","\t\t\tif ( oSettings.oScroll.bInfinite )","\t\t\t{","\t\t\t\treturn null;","\t\t\t}","\t\t\t","\t\t\tvar nPaginate = document.createElement( 'div' );","\t\t\tnPaginate.className = oSettings.oClasses.sPaging+oSettings.sPaginationType;","\t\t\t","\t\t\tDataTable.ext.oPagination[ oSettings.sPaginationType ].fnInit( oSettings, nPaginate, ","\t\t\t\tfunction( oSettings ) {","\t\t\t\t\t_fnCalculateEnd( oSettings );","\t\t\t\t\t_fnDraw( oSettings );","\t\t\t\t}","\t\t\t);","\t\t\t","\t\t\t/* Add a draw callback for the pagination on first instance, to update the paging display */","\t\t\tif ( !oSettings.aanFeatures.p )","\t\t\t{","\t\t\t\toSettings.aoDrawCallback.push( {","\t\t\t\t\t\"fn\": function( oSettings ) {","\t\t\t\t\t\tDataTable.ext.oPagination[ oSettings.sPaginationType ].fnUpdate( oSettings, function( oSettings ) {","\t\t\t\t\t\t\t_fnCalculateEnd( oSettings );","\t\t\t\t\t\t\t_fnDraw( oSettings );","\t\t\t\t\t\t} );","\t\t\t\t\t},","\t\t\t\t\t\"sName\": \"pagination\"","\t\t\t\t} );","\t\t\t}","\t\t\treturn nPaginate;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Alter the display settings to change the page","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {string|int} mAction Paging action to take: \"first\", \"previous\", \"next\" or \"last\"","\t\t *    or page number to jump to (integer)","\t\t *  @returns {bool} true page has changed, false - no change (no effect) eg 'first' on page 1","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnPageChange ( oSettings, mAction )","\t\t{","\t\t\tvar iOldStart = oSettings._iDisplayStart;","\t\t\t","\t\t\tif ( typeof mAction === \"number\" )","\t\t\t{","\t\t\t\toSettings._iDisplayStart = mAction * oSettings._iDisplayLength;","\t\t\t\tif ( oSettings._iDisplayStart &gt; oSettings.fnRecordsDisplay() )","\t\t\t\t{","\t\t\t\t\toSettings._iDisplayStart = 0;","\t\t\t\t}","\t\t\t}","\t\t\telse if ( mAction == \"first\" )","\t\t\t{","\t\t\t\toSettings._iDisplayStart = 0;","\t\t\t}","\t\t\telse if ( mAction == \"previous\" )","\t\t\t{","\t\t\t\toSettings._iDisplayStart = oSettings._iDisplayLength&gt;=0 ?","\t\t\t\t\toSettings._iDisplayStart - oSettings._iDisplayLength :","\t\t\t\t\t0;","\t\t\t\t","\t\t\t\t/* Correct for under-run */","\t\t\t\tif ( oSettings._iDisplayStart &lt; 0 )","\t\t\t\t{","\t\t\t\t  oSettings._iDisplayStart = 0;","\t\t\t\t}","\t\t\t}","\t\t\telse if ( mAction == \"next\" )","\t\t\t{","\t\t\t\tif ( oSettings._iDisplayLength &gt;= 0 )","\t\t\t\t{","\t\t\t\t\t/* Make sure we are not over running the display array */","\t\t\t\t\tif ( oSettings._iDisplayStart + oSettings._iDisplayLength &lt; oSettings.fnRecordsDisplay() )","\t\t\t\t\t{","\t\t\t\t\t\toSettings._iDisplayStart += oSettings._iDisplayLength;","\t\t\t\t\t}","\t\t\t\t}","\t\t\t\telse","\t\t\t\t{","\t\t\t\t\toSettings._iDisplayStart = 0;","\t\t\t\t}","\t\t\t}","\t\t\telse if ( mAction == \"last\" )","\t\t\t{","\t\t\t\tif ( oSettings._iDisplayLength &gt;= 0 )","\t\t\t\t{","\t\t\t\t\tvar iPages = parseInt( (oSettings.fnRecordsDisplay()-1) / oSettings._iDisplayLength, 10 ) + 1;","\t\t\t\t\toSettings._iDisplayStart = (iPages-1) * oSettings._iDisplayLength;","\t\t\t\t}","\t\t\t\telse","\t\t\t\t{","\t\t\t\t\toSettings._iDisplayStart = 0;","\t\t\t\t}","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\t_fnLog( oSettings, 0, \"Unknown paging action: \"+mAction );","\t\t\t}","\t\t\t$(oSettings.oInstance).trigger('page', oSettings);","\t\t\t","\t\t\treturn iOldStart != oSettings._iDisplayStart;","\t\t}","\t\t","\t\t","\t\t","\t\t/**","\t\t * Generate the node required for the processing node","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @returns {node} Processing element","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnFeatureHtmlProcessing ( oSettings )","\t\t{","\t\t\tvar nProcessing = document.createElement( 'div' );","\t\t\t","\t\t\tif ( !oSettings.aanFeatures.r )","\t\t\t{","\t\t\t\tnProcessing.id = oSettings.sTableId+'_processing';","\t\t\t}","\t\t\tnProcessing.innerHTML = oSettings.oLanguage.sProcessing;","\t\t\tnProcessing.className = oSettings.oClasses.sProcessing;","\t\t\toSettings.nTable.parentNode.insertBefore( nProcessing, oSettings.nTable );","\t\t\t","\t\t\treturn nProcessing;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Display or hide the processing indicator","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {bool} bShow Show the processing indicator (true) or not (false)","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnProcessingDisplay ( oSettings, bShow )","\t\t{","\t\t\tif ( oSettings.oFeatures.bProcessing )","\t\t\t{","\t\t\t\tvar an = oSettings.aanFeatures.r;","\t\t\t\tfor ( var i=0, iLen=an.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\tan[i].style.visibility = bShow ? \"visible\" : \"hidden\";","\t\t\t\t}","\t\t\t}","\t\t","\t\t\t$(oSettings.oInstance).trigger('processing', [oSettings, bShow]);","\t\t}","\t\t","\t\t/**","\t\t * Add any control elements for the table - specifically scrolling","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @returns {node} Node to add to the DOM","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnFeatureHtmlTable ( oSettings )","\t\t{","\t\t\t/* Check if scrolling is enabled or not - if not then leave the DOM unaltered */","\t\t\tif ( oSettings.oScroll.sX === \"\" &amp;&amp; oSettings.oScroll.sY === \"\" )","\t\t\t{","\t\t\t\treturn oSettings.nTable;","\t\t\t}","\t\t\t","\t\t\t/*","\t\t\t * The HTML structure that we want to generate in this function is:","\t\t\t *  div - nScroller","\t\t\t *    div - nScrollHead","\t\t\t *      div - nScrollHeadInner","\t\t\t *        table - nScrollHeadTable","\t\t\t *          thead - nThead","\t\t\t *    div - nScrollBody","\t\t\t *      table - oSettings.nTable","\t\t\t *        thead - nTheadSize","\t\t\t *        tbody - nTbody","\t\t\t *    div - nScrollFoot","\t\t\t *      div - nScrollFootInner","\t\t\t *        table - nScrollFootTable","\t\t\t *          tfoot - nTfoot","\t\t\t */","\t\t\tvar","\t\t\t \tnScroller = document.createElement('div'),","\t\t\t \tnScrollHead = document.createElement('div'),","\t\t\t \tnScrollHeadInner = document.createElement('div'),","\t\t\t \tnScrollBody = document.createElement('div'),","\t\t\t \tnScrollFoot = document.createElement('div'),","\t\t\t \tnScrollFootInner = document.createElement('div'),","\t\t\t \tnScrollHeadTable = oSettings.nTable.cloneNode(false),","\t\t\t \tnScrollFootTable = oSettings.nTable.cloneNode(false),","\t\t\t\tnThead = oSettings.nTable.getElementsByTagName('thead')[0],","\t\t\t \tnTfoot = oSettings.nTable.getElementsByTagName('tfoot').length === 0 ? null : ","\t\t\t\t\toSettings.nTable.getElementsByTagName('tfoot')[0],","\t\t\t\toClasses = oSettings.oClasses;","\t\t\t","\t\t\tnScrollHead.appendChild( nScrollHeadInner );","\t\t\tnScrollFoot.appendChild( nScrollFootInner );","\t\t\tnScrollBody.appendChild( oSettings.nTable );","\t\t\tnScroller.appendChild( nScrollHead );","\t\t\tnScroller.appendChild( nScrollBody );","\t\t\tnScrollHeadInner.appendChild( nScrollHeadTable );","\t\t\tnScrollHeadTable.appendChild( nThead );","\t\t\tif ( nTfoot !== null )","\t\t\t{","\t\t\t\tnScroller.appendChild( nScrollFoot );","\t\t\t\tnScrollFootInner.appendChild( nScrollFootTable );","\t\t\t\tnScrollFootTable.appendChild( nTfoot );","\t\t\t}","\t\t\t","\t\t\tnScroller.className = oClasses.sScrollWrapper;","\t\t\tnScrollHead.className = oClasses.sScrollHead;","\t\t\tnScrollHeadInner.className = oClasses.sScrollHeadInner;","\t\t\tnScrollBody.className = oClasses.sScrollBody;","\t\t\tnScrollFoot.className = oClasses.sScrollFoot;","\t\t\tnScrollFootInner.className = oClasses.sScrollFootInner;","\t\t\t","\t\t\tif ( oSettings.oScroll.bAutoCss )","\t\t\t{","\t\t\t\tnScrollHead.style.overflow = \"hidden\";","\t\t\t\tnScrollHead.style.position = \"relative\";","\t\t\t\tnScrollFoot.style.overflow = \"hidden\";","\t\t\t\tnScrollBody.style.overflow = \"auto\";","\t\t\t}","\t\t\t","\t\t\tnScrollHead.style.border = \"0\";","\t\t\tnScrollHead.style.width = \"100%\";","\t\t\tnScrollFoot.style.border = \"0\";","\t\t\tnScrollHeadInner.style.width = oSettings.oScroll.sXInner !== \"\" ?","\t\t\t\toSettings.oScroll.sXInner : \"100%\"; /* will be overwritten */","\t\t\t","\t\t\t/* Modify attributes to respect the clones */","\t\t\tnScrollHeadTable.removeAttribute('id');","\t\t\tnScrollHeadTable.style.marginLeft = \"0\";","\t\t\toSettings.nTable.style.marginLeft = \"0\";","\t\t\tif ( nTfoot !== null )","\t\t\t{","\t\t\t\tnScrollFootTable.removeAttribute('id');","\t\t\t\tnScrollFootTable.style.marginLeft = \"0\";","\t\t\t}","\t\t\t","\t\t\t/* Move caption elements from the body to the header, footer or leave where it is","\t\t\t * depending on the configuration. Note that the DTD says there can be only one caption */","\t\t\tvar nCaption = $(oSettings.nTable).children('caption');","\t\t\tif ( nCaption.length &gt; 0 )","\t\t\t{","\t\t\t\tnCaption = nCaption[0];","\t\t\t\tif ( nCaption._captionSide === \"top\" )","\t\t\t\t{","\t\t\t\t\tnScrollHeadTable.appendChild( nCaption );","\t\t\t\t}","\t\t\t\telse if ( nCaption._captionSide === \"bottom\" &amp;&amp; nTfoot )","\t\t\t\t{","\t\t\t\t\tnScrollFootTable.appendChild( nCaption );","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\t/*","\t\t\t * Sizing","\t\t\t */","\t\t\t/* When x-scrolling add the width and a scroller to move the header with the body */","\t\t\tif ( oSettings.oScroll.sX !== \"\" )","\t\t\t{","\t\t\t\tnScrollHead.style.width = _fnStringToCss( oSettings.oScroll.sX );","\t\t\t\tnScrollBody.style.width = _fnStringToCss( oSettings.oScroll.sX );","\t\t\t\t","\t\t\t\tif ( nTfoot !== null )","\t\t\t\t{","\t\t\t\t\tnScrollFoot.style.width = _fnStringToCss( oSettings.oScroll.sX );\t","\t\t\t\t}","\t\t\t\t","\t\t\t\t/* When the body is scrolled, then we also want to scroll the headers */","\t\t\t\t$(nScrollBody).scroll( function (e) {","\t\t\t\t\tnScrollHead.scrollLeft = this.scrollLeft;","\t\t\t\t\t","\t\t\t\t\tif ( nTfoot !== null )","\t\t\t\t\t{","\t\t\t\t\t\tnScrollFoot.scrollLeft = this.scrollLeft;","\t\t\t\t\t}","\t\t\t\t} );","\t\t\t}","\t\t\t","\t\t\t/* When yscrolling, add the height */","\t\t\tif ( oSettings.oScroll.sY !== \"\" )","\t\t\t{","\t\t\t\tnScrollBody.style.height = _fnStringToCss( oSettings.oScroll.sY );","\t\t\t}","\t\t\t","\t\t\t/* Redraw - align columns across the tables */","\t\t\toSettings.aoDrawCallback.push( {","\t\t\t\t\"fn\": _fnScrollDraw,","\t\t\t\t\"sName\": \"scrolling\"","\t\t\t} );","\t\t\t","\t\t\t/* Infinite scrolling event handlers */","\t\t\tif ( oSettings.oScroll.bInfinite )","\t\t\t{","\t\t\t\t$(nScrollBody).scroll( function() {","\t\t\t\t\t/* Use a blocker to stop scrolling from loading more data while other data is still loading */","\t\t\t\t\tif ( !oSettings.bDrawing &amp;&amp; $(this).scrollTop() !== 0 )","\t\t\t\t\t{","\t\t\t\t\t\t/* Check if we should load the next data set */","\t\t\t\t\t\tif ( $(this).scrollTop() + $(this).height() &gt; ","\t\t\t\t\t\t\t$(oSettings.nTable).height() - oSettings.oScroll.iLoadGap )","\t\t\t\t\t\t{","\t\t\t\t\t\t\t/* Only do the redraw if we have to - we might be at the end of the data */","\t\t\t\t\t\t\tif ( oSettings.fnDisplayEnd() &lt; oSettings.fnRecordsDisplay() )","\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\t_fnPageChange( oSettings, 'next' );","\t\t\t\t\t\t\t\t_fnCalculateEnd( oSettings );","\t\t\t\t\t\t\t\t_fnDraw( oSettings );","\t\t\t\t\t\t\t}","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t} );","\t\t\t}","\t\t\t","\t\t\toSettings.nScrollHead = nScrollHead;","\t\t\toSettings.nScrollFoot = nScrollFoot;","\t\t\t","\t\t\treturn nScroller;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Update the various tables for resizing. It's a bit of a pig this function, but","\t\t * basically the idea to:","\t\t *   1. Re-create the table inside the scrolling div","\t\t *   2. Take live measurements from the DOM","\t\t *   3. Apply the measurements","\t\t *   4. Clean up","\t\t *  @param {object} o dataTables settings object","\t\t *  @returns {node} Node to add to the DOM","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnScrollDraw ( o )","\t\t{","\t\t\tvar","\t\t\t\tnScrollHeadInner = o.nScrollHead.getElementsByTagName('div')[0],","\t\t\t\tnScrollHeadTable = nScrollHeadInner.getElementsByTagName('table')[0],","\t\t\t\tnScrollBody = o.nTable.parentNode,","\t\t\t\ti, iLen, j, jLen, anHeadToSize, anHeadSizers, anFootSizers, anFootToSize, oStyle, iVis,","\t\t\t\tnTheadSize, nTfootSize,","\t\t\t\tiWidth, aApplied=[], aAppliedFooter=[], iSanityWidth,","\t\t\t\tnScrollFootInner = (o.nTFoot !== null) ? o.nScrollFoot.getElementsByTagName('div')[0] : null,","\t\t\t\tnScrollFootTable = (o.nTFoot !== null) ? nScrollFootInner.getElementsByTagName('table')[0] : null,","\t\t\t\tie67 = o.oBrowser.bScrollOversize,","\t\t\t\tzeroOut = function(nSizer) {","\t\t\t\t\toStyle = nSizer.style;","\t\t\t\t\toStyle.paddingTop = \"0\";","\t\t\t\t\toStyle.paddingBottom = \"0\";","\t\t\t\t\toStyle.borderTopWidth = \"0\";","\t\t\t\t\toStyle.borderBottomWidth = \"0\";","\t\t\t\t\toStyle.height = 0;","\t\t\t\t};","\t\t\t","\t\t\t/*","\t\t\t * 1. Re-create the table inside the scrolling div","\t\t\t */","\t\t\t","\t\t\t/* Remove the old minimised thead and tfoot elements in the inner table */","\t\t\t$(o.nTable).children('thead, tfoot').remove();","\t\t","\t\t\t/* Clone the current header and footer elements and then place it into the inner table */","\t\t\tnTheadSize = $(o.nTHead).clone()[0];","\t\t\to.nTable.insertBefore( nTheadSize, o.nTable.childNodes[0] );","\t\t\tanHeadToSize = o.nTHead.getElementsByTagName('tr');","\t\t\tanHeadSizers = nTheadSize.getElementsByTagName('tr');","\t\t\t","\t\t\tif ( o.nTFoot !== null )","\t\t\t{","\t\t\t\tnTfootSize = $(o.nTFoot).clone()[0];","\t\t\t\to.nTable.insertBefore( nTfootSize, o.nTable.childNodes[1] );","\t\t\t\tanFootToSize = o.nTFoot.getElementsByTagName('tr');","\t\t\t\tanFootSizers = nTfootSize.getElementsByTagName('tr');","\t\t\t}","\t\t\t","\t\t\t/*","\t\t\t * 2. Take live measurements from the DOM - do not alter the DOM itself!","\t\t\t */","\t\t\t","\t\t\t/* Remove old sizing and apply the calculated column widths","\t\t\t * Get the unique column headers in the newly created (cloned) header. We want to apply the","\t\t\t * calculated sizes to this header","\t\t\t */","\t\t\tif ( o.oScroll.sX === \"\" )","\t\t\t{","\t\t\t\tnScrollBody.style.width = '100%';","\t\t\t\tnScrollHeadInner.parentNode.style.width = '100%';","\t\t\t}","\t\t\t","\t\t\tvar nThs = _fnGetUniqueThs( o, nTheadSize );","\t\t\tfor ( i=0, iLen=nThs.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\tiVis = _fnVisibleToColumnIndex( o, i );","\t\t\t\tnThs[i].style.width = o.aoColumns[iVis].sWidth;","\t\t\t}","\t\t\t","\t\t\tif ( o.nTFoot !== null )","\t\t\t{","\t\t\t\t_fnApplyToChildren( function(n) {","\t\t\t\t\tn.style.width = \"\";","\t\t\t\t}, anFootSizers );","\t\t\t}","\t\t","\t\t\t// If scroll collapse is enabled, when we put the headers back into the body for sizing, we","\t\t\t// will end up forcing the scrollbar to appear, making our measurements wrong for when we","\t\t\t// then hide it (end of this function), so add the header height to the body scroller.","\t\t\tif ( o.oScroll.bCollapse &amp;&amp; o.oScroll.sY !== \"\" )","\t\t\t{","\t\t\t\tnScrollBody.style.height = (nScrollBody.offsetHeight + o.nTHead.offsetHeight)+\"px\";","\t\t\t}","\t\t\t","\t\t\t/* Size the table as a whole */","\t\t\tiSanityWidth = $(o.nTable).outerWidth();","\t\t\tif ( o.oScroll.sX === \"\" )","\t\t\t{","\t\t\t\t/* No x scrolling */","\t\t\t\to.nTable.style.width = \"100%\";","\t\t\t\t","\t\t\t\t/* I know this is rubbish - but IE7 will make the width of the table when 100% include","\t\t\t\t * the scrollbar - which is shouldn't. When there is a scrollbar we need to take this","\t\t\t\t * into account.","\t\t\t\t */","\t\t\t\tif ( ie67 &amp;&amp; ($('tbody', nScrollBody).height() &gt; nScrollBody.offsetHeight || ","\t\t\t\t\t$(nScrollBody).css('overflow-y') == \"scroll\")  )","\t\t\t\t{","\t\t\t\t\to.nTable.style.width = _fnStringToCss( $(o.nTable).outerWidth() - o.oScroll.iBarWidth);","\t\t\t\t}","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\tif ( o.oScroll.sXInner !== \"\" )","\t\t\t\t{","\t\t\t\t\t/* x scroll inner has been given - use it */","\t\t\t\t\to.nTable.style.width = _fnStringToCss(o.oScroll.sXInner);","\t\t\t\t}","\t\t\t\telse if ( iSanityWidth == $(nScrollBody).width() &amp;&amp;","\t\t\t\t   $(nScrollBody).height() &lt; $(o.nTable).height() )","\t\t\t\t{","\t\t\t\t\t/* There is y-scrolling - try to take account of the y scroll bar */","\t\t\t\t\to.nTable.style.width = _fnStringToCss( iSanityWidth-o.oScroll.iBarWidth );","\t\t\t\t\tif ( $(o.nTable).outerWidth() &gt; iSanityWidth-o.oScroll.iBarWidth )","\t\t\t\t\t{","\t\t\t\t\t\t/* Not possible to take account of it */","\t\t\t\t\t\to.nTable.style.width = _fnStringToCss( iSanityWidth );","\t\t\t\t\t}","\t\t\t\t}","\t\t\t\telse","\t\t\t\t{","\t\t\t\t\t/* All else fails */","\t\t\t\t\to.nTable.style.width = _fnStringToCss( iSanityWidth );","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\t/* Recalculate the sanity width - now that we've applied the required width, before it was","\t\t\t * a temporary variable. This is required because the column width calculation is done","\t\t\t * before this table DOM is created.","\t\t\t */","\t\t\tiSanityWidth = $(o.nTable).outerWidth();","\t\t\t","\t\t\t/* We want the hidden header to have zero height, so remove padding and borders. Then","\t\t\t * set the width based on the real headers","\t\t\t */","\t\t\t","\t\t\t// Apply all styles in one pass. Invalidates layout only once because we don't read any ","\t\t\t// DOM properties.","\t\t\t_fnApplyToChildren( zeroOut, anHeadSizers );","\t\t\t ","\t\t\t// Read all widths in next pass. Forces layout only once because we do not change ","\t\t\t// any DOM properties.","\t\t\t_fnApplyToChildren( function(nSizer) {","\t\t\t\taApplied.push( _fnStringToCss( $(nSizer).width() ) );","\t\t\t}, anHeadSizers );","\t\t\t ","\t\t\t// Apply all widths in final pass. Invalidates layout only once because we do not","\t\t\t// read any DOM properties.","\t\t\t_fnApplyToChildren( function(nToSize, i) {","\t\t\t\tnToSize.style.width = aApplied[i];","\t\t\t}, anHeadToSize );","\t\t","\t\t\t$(anHeadSizers).height(0);","\t\t\t","\t\t\t/* Same again with the footer if we have one */","\t\t\tif ( o.nTFoot !== null )","\t\t\t{","\t\t\t\t_fnApplyToChildren( zeroOut, anFootSizers );","\t\t\t\t ","\t\t\t\t_fnApplyToChildren( function(nSizer) {","\t\t\t\t\taAppliedFooter.push( _fnStringToCss( $(nSizer).width() ) );","\t\t\t\t}, anFootSizers );","\t\t\t\t ","\t\t\t\t_fnApplyToChildren( function(nToSize, i) {","\t\t\t\t\tnToSize.style.width = aAppliedFooter[i];","\t\t\t\t}, anFootToSize );","\t\t","\t\t\t\t$(anFootSizers).height(0);","\t\t\t}","\t\t\t","\t\t\t/*","\t\t\t * 3. Apply the measurements","\t\t\t */","\t\t\t","\t\t\t/* \"Hide\" the header and footer that we used for the sizing. We want to also fix their width","\t\t\t * to what they currently are","\t\t\t */","\t\t\t_fnApplyToChildren( function(nSizer, i) {","\t\t\t\tnSizer.innerHTML = \"\";","\t\t\t\tnSizer.style.width = aApplied[i];","\t\t\t}, anHeadSizers );","\t\t\t","\t\t\tif ( o.nTFoot !== null )","\t\t\t{","\t\t\t\t_fnApplyToChildren( function(nSizer, i) {","\t\t\t\t\tnSizer.innerHTML = \"\";","\t\t\t\t\tnSizer.style.width = aAppliedFooter[i];","\t\t\t\t}, anFootSizers );","\t\t\t}","\t\t\t","\t\t\t/* Sanity check that the table is of a sensible width. If not then we are going to get","\t\t\t * misalignment - try to prevent this by not allowing the table to shrink below its min width","\t\t\t */","\t\t\tif ( $(o.nTable).outerWidth() &lt; iSanityWidth )","\t\t\t{","\t\t\t\t/* The min width depends upon if we have a vertical scrollbar visible or not */","\t\t\t\tvar iCorrection = ((nScrollBody.scrollHeight &gt; nScrollBody.offsetHeight || ","\t\t\t\t\t$(nScrollBody).css('overflow-y') == \"scroll\")) ?","\t\t\t\t\t\tiSanityWidth+o.oScroll.iBarWidth : iSanityWidth;","\t\t\t\t","\t\t\t\t/* IE6/7 are a law unto themselves... */","\t\t\t\tif ( ie67 &amp;&amp; (nScrollBody.scrollHeight &gt; ","\t\t\t\t\tnScrollBody.offsetHeight || $(nScrollBody).css('overflow-y') == \"scroll\")  )","\t\t\t\t{","\t\t\t\t\to.nTable.style.width = _fnStringToCss( iCorrection-o.oScroll.iBarWidth );","\t\t\t\t}","\t\t\t\t","\t\t\t\t/* Apply the calculated minimum width to the table wrappers */","\t\t\t\tnScrollBody.style.width = _fnStringToCss( iCorrection );","\t\t\t\to.nScrollHead.style.width = _fnStringToCss( iCorrection );","\t\t\t\t","\t\t\t\tif ( o.nTFoot !== null )","\t\t\t\t{","\t\t\t\t\to.nScrollFoot.style.width = _fnStringToCss( iCorrection );","\t\t\t\t}","\t\t\t\t","\t\t\t\t/* And give the user a warning that we've stopped the table getting too small */","\t\t\t\tif ( o.oScroll.sX === \"\" )","\t\t\t\t{","\t\t\t\t\t_fnLog( o, 1, \"The table cannot fit into the current element which will cause column\"+","\t\t\t\t\t\t\" misalignment. The table has been drawn at its minimum possible width.\" );","\t\t\t\t}","\t\t\t\telse if ( o.oScroll.sXInner !== \"\" )","\t\t\t\t{","\t\t\t\t\t_fnLog( o, 1, \"The table cannot fit into the current element which will cause column\"+","\t\t\t\t\t\t\" misalignment. Increase the sScrollXInner value or remove it to allow automatic\"+","\t\t\t\t\t\t\" calculation\" );","\t\t\t\t}","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\tnScrollBody.style.width = _fnStringToCss( '100%' );","\t\t\t\to.nScrollHead.style.width = _fnStringToCss( '100%' );","\t\t\t\t","\t\t\t\tif ( o.nTFoot !== null )","\t\t\t\t{","\t\t\t\t\to.nScrollFoot.style.width = _fnStringToCss( '100%' );","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\t","\t\t\t/*","\t\t\t * 4. Clean up","\t\t\t */","\t\t\tif ( o.oScroll.sY === \"\" )","\t\t\t{","\t\t\t\t/* IE7&lt; puts a vertical scrollbar in place (when it shouldn't be) due to subtracting","\t\t\t\t * the scrollbar height from the visible display, rather than adding it on. We need to","\t\t\t\t * set the height in order to sort this. Don't want to do it in any other browsers.","\t\t\t\t */","\t\t\t\tif ( ie67 )","\t\t\t\t{","\t\t\t\t\tnScrollBody.style.height = _fnStringToCss( o.nTable.offsetHeight+o.oScroll.iBarWidth );","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\tif ( o.oScroll.sY !== \"\" &amp;&amp; o.oScroll.bCollapse )","\t\t\t{","\t\t\t\tnScrollBody.style.height = _fnStringToCss( o.oScroll.sY );","\t\t\t\t","\t\t\t\tvar iExtra = (o.oScroll.sX !== \"\" &amp;&amp; o.nTable.offsetWidth &gt; nScrollBody.offsetWidth) ?","\t\t\t\t \to.oScroll.iBarWidth : 0;","\t\t\t\tif ( o.nTable.offsetHeight &lt; nScrollBody.offsetHeight )","\t\t\t\t{","\t\t\t\t\tnScrollBody.style.height = _fnStringToCss( o.nTable.offsetHeight+iExtra );","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\t/* Finally set the width's of the header and footer tables */","\t\t\tvar iOuterWidth = $(o.nTable).outerWidth();","\t\t\tnScrollHeadTable.style.width = _fnStringToCss( iOuterWidth );","\t\t\tnScrollHeadInner.style.width = _fnStringToCss( iOuterWidth );","\t\t","\t\t\t// Figure out if there are scrollbar present - if so then we need a the header and footer to","\t\t\t// provide a bit more space to allow \"overflow\" scrolling (i.e. past the scrollbar)","\t\t\tvar bScrolling = $(o.nTable).height() &gt; nScrollBody.clientHeight || $(nScrollBody).css('overflow-y') == \"scroll\";","\t\t\tnScrollHeadInner.style.paddingRight = bScrolling ? o.oScroll.iBarWidth+\"px\" : \"0px\";","\t\t\t","\t\t\tif ( o.nTFoot !== null )","\t\t\t{","\t\t\t\tnScrollFootTable.style.width = _fnStringToCss( iOuterWidth );","\t\t\t\tnScrollFootInner.style.width = _fnStringToCss( iOuterWidth );","\t\t\t\tnScrollFootInner.style.paddingRight = bScrolling ? o.oScroll.iBarWidth+\"px\" : \"0px\";","\t\t\t}","\t\t","\t\t\t/* Adjust the position of the header in case we loose the y-scrollbar */","\t\t\t$(nScrollBody).scroll();","\t\t\t","\t\t\t/* If sorting or filtering has occurred, jump the scrolling back to the top */","\t\t\tif ( o.bSorted || o.bFiltered )","\t\t\t{","\t\t\t\tnScrollBody.scrollTop = 0;","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Apply a given function to the display child nodes of an element array (typically","\t\t * TD children of TR rows","\t\t *  @param {function} fn Method to apply to the objects","\t\t *  @param array {nodes} an1 List of elements to look through for display children","\t\t *  @param array {nodes} an2 Another list (identical structure to the first) - optional","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnApplyToChildren( fn, an1, an2 )","\t\t{","\t\t\tvar index=0, i=0, iLen=an1.length;","\t\t\tvar nNode1, nNode2;","\t\t","\t\t\twhile ( i &lt; iLen )","\t\t\t{","\t\t\t\tnNode1 = an1[i].firstChild;","\t\t\t\tnNode2 = an2 ? an2[i].firstChild : null;","\t\t\t\twhile ( nNode1 )","\t\t\t\t{","\t\t\t\t\tif ( nNode1.nodeType === 1 )","\t\t\t\t\t{","\t\t\t\t\t\tif ( an2 )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tfn( nNode1, nNode2, index );","\t\t\t\t\t\t}","\t\t\t\t\t\telse","\t\t\t\t\t\t{","\t\t\t\t\t\t\tfn( nNode1, index );","\t\t\t\t\t\t}","\t\t\t\t\t\tindex++;","\t\t\t\t\t}","\t\t\t\t\tnNode1 = nNode1.nextSibling;","\t\t\t\t\tnNode2 = an2 ? nNode2.nextSibling : null;","\t\t\t\t}","\t\t\t\ti++;","\t\t\t}","\t\t}","\t\t","\t\t/**","\t\t * Convert a CSS unit width to pixels (e.g. 2em)","\t\t *  @param {string} sWidth width to be converted","\t\t *  @param {node} nParent parent to get the with for (required for relative widths) - optional","\t\t *  @returns {int} iWidth width in pixels","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnConvertToWidth ( sWidth, nParent )","\t\t{","\t\t\tif ( !sWidth || sWidth === null || sWidth === '' )","\t\t\t{","\t\t\t\treturn 0;","\t\t\t}","\t\t\t","\t\t\tif ( !nParent )","\t\t\t{","\t\t\t\tnParent = document.body;","\t\t\t}","\t\t\t","\t\t\tvar iWidth;","\t\t\tvar nTmp = document.createElement( \"div\" );","\t\t\tnTmp.style.width = _fnStringToCss( sWidth );","\t\t\t","\t\t\tnParent.appendChild( nTmp );","\t\t\tiWidth = nTmp.offsetWidth;","\t\t\tnParent.removeChild( nTmp );","\t\t\t","\t\t\treturn ( iWidth );","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Calculate the width of columns for the table","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnCalculateColumnWidths ( oSettings )","\t\t{","\t\t\tvar iTableWidth = oSettings.nTable.offsetWidth;","\t\t\tvar iUserInputs = 0;","\t\t\tvar iTmpWidth;","\t\t\tvar iVisibleColumns = 0;","\t\t\tvar iColums = oSettings.aoColumns.length;","\t\t\tvar i, iIndex, iCorrector, iWidth;","\t\t\tvar oHeaders = $('th', oSettings.nTHead);","\t\t\tvar widthAttr = oSettings.nTable.getAttribute('width');","\t\t\tvar nWrapper = oSettings.nTable.parentNode;","\t\t\t","\t\t\t/* Convert any user input sizes into pixel sizes */","\t\t\tfor ( i=0 ; i&lt;iColums ; i++ )","\t\t\t{","\t\t\t\tif ( oSettings.aoColumns[i].bVisible )","\t\t\t\t{","\t\t\t\t\tiVisibleColumns++;","\t\t\t\t\t","\t\t\t\t\tif ( oSettings.aoColumns[i].sWidth !== null )","\t\t\t\t\t{","\t\t\t\t\t\tiTmpWidth = _fnConvertToWidth( oSettings.aoColumns[i].sWidthOrig, ","\t\t\t\t\t\t\tnWrapper );","\t\t\t\t\t\tif ( iTmpWidth !== null )","\t\t\t\t\t\t{","\t\t\t\t\t\t\toSettings.aoColumns[i].sWidth = _fnStringToCss( iTmpWidth );","\t\t\t\t\t\t}","\t\t\t\t\t\t\t","\t\t\t\t\t\tiUserInputs++;","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\t/* If the number of columns in the DOM equals the number that we have to process in ","\t\t\t * DataTables, then we can use the offsets that are created by the web-browser. No custom ","\t\t\t * sizes can be set in order for this to happen, nor scrolling used","\t\t\t */","\t\t\tif ( iColums == oHeaders.length &amp;&amp; iUserInputs === 0 &amp;&amp; iVisibleColumns == iColums &amp;&amp;","\t\t\t\toSettings.oScroll.sX === \"\" &amp;&amp; oSettings.oScroll.sY === \"\" )","\t\t\t{","\t\t\t\tfor ( i=0 ; i&lt;oSettings.aoColumns.length ; i++ )","\t\t\t\t{","\t\t\t\t\tiTmpWidth = $(oHeaders[i]).width();","\t\t\t\t\tif ( iTmpWidth !== null )","\t\t\t\t\t{","\t\t\t\t\t\toSettings.aoColumns[i].sWidth = _fnStringToCss( iTmpWidth );","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\t/* Otherwise we are going to have to do some calculations to get the width of each column.","\t\t\t\t * Construct a 1 row table with the widest node in the data, and any user defined widths,","\t\t\t\t * then insert it into the DOM and allow the browser to do all the hard work of","\t\t\t\t * calculating table widths.","\t\t\t\t */","\t\t\t\tvar","\t\t\t\t\tnCalcTmp = oSettings.nTable.cloneNode( false ),","\t\t\t\t\tnTheadClone = oSettings.nTHead.cloneNode(true),","\t\t\t\t\tnBody = document.createElement( 'tbody' ),","\t\t\t\t\tnTr = document.createElement( 'tr' ),","\t\t\t\t\tnDivSizing;","\t\t\t\t","\t\t\t\tnCalcTmp.removeAttribute( \"id\" );","\t\t\t\tnCalcTmp.appendChild( nTheadClone );","\t\t\t\tif ( oSettings.nTFoot !== null )","\t\t\t\t{","\t\t\t\t\tnCalcTmp.appendChild( oSettings.nTFoot.cloneNode(true) );","\t\t\t\t\t_fnApplyToChildren( function(n) {","\t\t\t\t\t\tn.style.width = \"\";","\t\t\t\t\t}, nCalcTmp.getElementsByTagName('tr') );","\t\t\t\t}","\t\t\t\t","\t\t\t\tnCalcTmp.appendChild( nBody );","\t\t\t\tnBody.appendChild( nTr );","\t\t\t\t","\t\t\t\t/* Remove any sizing that was previously applied by the styles */","\t\t\t\tvar jqColSizing = $('thead th', nCalcTmp);","\t\t\t\tif ( jqColSizing.length === 0 )","\t\t\t\t{","\t\t\t\t\tjqColSizing = $('tbody tr:eq(0)&gt;td', nCalcTmp);","\t\t\t\t}","\t\t","\t\t\t\t/* Apply custom sizing to the cloned header */","\t\t\t\tvar nThs = _fnGetUniqueThs( oSettings, nTheadClone );","\t\t\t\tiCorrector = 0;","\t\t\t\tfor ( i=0 ; i&lt;iColums ; i++ )","\t\t\t\t{","\t\t\t\t\tvar oColumn = oSettings.aoColumns[i];","\t\t\t\t\tif ( oColumn.bVisible &amp;&amp; oColumn.sWidthOrig !== null &amp;&amp; oColumn.sWidthOrig !== \"\" )","\t\t\t\t\t{","\t\t\t\t\t\tnThs[i-iCorrector].style.width = _fnStringToCss( oColumn.sWidthOrig );","\t\t\t\t\t}","\t\t\t\t\telse if ( oColumn.bVisible )","\t\t\t\t\t{","\t\t\t\t\t\tnThs[i-iCorrector].style.width = \"\";","\t\t\t\t\t}","\t\t\t\t\telse","\t\t\t\t\t{","\t\t\t\t\t\tiCorrector++;","\t\t\t\t\t}","\t\t\t\t}","\t\t","\t\t\t\t/* Find the biggest td for each column and put it into the table */","\t\t\t\tfor ( i=0 ; i&lt;iColums ; i++ )","\t\t\t\t{","\t\t\t\t\tif ( oSettings.aoColumns[i].bVisible )","\t\t\t\t\t{","\t\t\t\t\t\tvar nTd = _fnGetWidestNode( oSettings, i );","\t\t\t\t\t\tif ( nTd !== null )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tnTd = nTd.cloneNode(true);","\t\t\t\t\t\t\tif ( oSettings.aoColumns[i].sContentPadding !== \"\" )","\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\tnTd.innerHTML += oSettings.aoColumns[i].sContentPadding;","\t\t\t\t\t\t\t}","\t\t\t\t\t\t\tnTr.appendChild( nTd );","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t}","\t\t\t\t","\t\t\t\t/* Build the table and 'display' it */","\t\t\t\tnWrapper.appendChild( nCalcTmp );","\t\t\t\t","\t\t\t\t/* When scrolling (X or Y) we want to set the width of the table as appropriate. However,","\t\t\t\t * when not scrolling leave the table width as it is. This results in slightly different,","\t\t\t\t * but I think correct behaviour","\t\t\t\t */","\t\t\t\tif ( oSettings.oScroll.sX !== \"\" &amp;&amp; oSettings.oScroll.sXInner !== \"\" )","\t\t\t\t{","\t\t\t\t\tnCalcTmp.style.width = _fnStringToCss(oSettings.oScroll.sXInner);","\t\t\t\t}","\t\t\t\telse if ( oSettings.oScroll.sX !== \"\" )","\t\t\t\t{","\t\t\t\t\tnCalcTmp.style.width = \"\";","\t\t\t\t\tif ( $(nCalcTmp).width() &lt; nWrapper.offsetWidth )","\t\t\t\t\t{","\t\t\t\t\t\tnCalcTmp.style.width = _fnStringToCss( nWrapper.offsetWidth );","\t\t\t\t\t}","\t\t\t\t}","\t\t\t\telse if ( oSettings.oScroll.sY !== \"\" )","\t\t\t\t{","\t\t\t\t\tnCalcTmp.style.width = _fnStringToCss( nWrapper.offsetWidth );","\t\t\t\t}","\t\t\t\telse if ( widthAttr )","\t\t\t\t{","\t\t\t\t\tnCalcTmp.style.width = _fnStringToCss( widthAttr );","\t\t\t\t}","\t\t\t\tnCalcTmp.style.visibility = \"hidden\";","\t\t\t\t","\t\t\t\t/* Scrolling considerations */","\t\t\t\t_fnScrollingWidthAdjust( oSettings, nCalcTmp );","\t\t\t\t","\t\t\t\t/* Read the width's calculated by the browser and store them for use by the caller. We","\t\t\t\t * first of all try to use the elements in the body, but it is possible that there are","\t\t\t\t * no elements there, under which circumstances we use the header elements","\t\t\t\t */","\t\t\t\tvar oNodes = $(\"tbody tr:eq(0)\", nCalcTmp).children();","\t\t\t\tif ( oNodes.length === 0 )","\t\t\t\t{","\t\t\t\t\toNodes = _fnGetUniqueThs( oSettings, $('thead', nCalcTmp)[0] );","\t\t\t\t}","\t\t","\t\t\t\t/* Browsers need a bit of a hand when a width is assigned to any columns when ","\t\t\t\t * x-scrolling as they tend to collapse the table to the min-width, even if","\t\t\t\t * we sent the column widths. So we need to keep track of what the table width","\t\t\t\t * should be by summing the user given values, and the automatic values","\t\t\t\t */","\t\t\t\tif ( oSettings.oScroll.sX !== \"\" )","\t\t\t\t{","\t\t\t\t\tvar iTotal = 0;","\t\t\t\t\tiCorrector = 0;","\t\t\t\t\tfor ( i=0 ; i&lt;oSettings.aoColumns.length ; i++ )","\t\t\t\t\t{","\t\t\t\t\t\tif ( oSettings.aoColumns[i].bVisible )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tif ( oSettings.aoColumns[i].sWidthOrig === null )","\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\tiTotal += $(oNodes[iCorrector]).outerWidth();","\t\t\t\t\t\t\t}","\t\t\t\t\t\t\telse","\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\tiTotal += parseInt(oSettings.aoColumns[i].sWidth.replace('px',''), 10) +","\t\t\t\t\t\t\t\t\t($(oNodes[iCorrector]).outerWidth() - $(oNodes[iCorrector]).width());","\t\t\t\t\t\t\t}","\t\t\t\t\t\t\tiCorrector++;","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t\t","\t\t\t\t\tnCalcTmp.style.width = _fnStringToCss( iTotal );","\t\t\t\t\toSettings.nTable.style.width = _fnStringToCss( iTotal );","\t\t\t\t}","\t\t","\t\t\t\tiCorrector = 0;","\t\t\t\tfor ( i=0 ; i&lt;oSettings.aoColumns.length ; i++ )","\t\t\t\t{","\t\t\t\t\tif ( oSettings.aoColumns[i].bVisible )","\t\t\t\t\t{","\t\t\t\t\t\tiWidth = $(oNodes[iCorrector]).width();","\t\t\t\t\t\tif ( iWidth !== null &amp;&amp; iWidth &gt; 0 )","\t\t\t\t\t\t{","\t\t\t\t\t\t\toSettings.aoColumns[i].sWidth = _fnStringToCss( iWidth );","\t\t\t\t\t\t}","\t\t\t\t\t\tiCorrector++;","\t\t\t\t\t}","\t\t\t\t}","\t\t","\t\t\t\tvar cssWidth = $(nCalcTmp).css('width');","\t\t\t\toSettings.nTable.style.width = (cssWidth.indexOf('%') !== -1) ?","\t\t\t\t    cssWidth : _fnStringToCss( $(nCalcTmp).outerWidth() );","\t\t\t\tnCalcTmp.parentNode.removeChild( nCalcTmp );","\t\t\t}","\t\t","\t\t\tif ( widthAttr )","\t\t\t{","\t\t\t\toSettings.nTable.style.width = _fnStringToCss( widthAttr );","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Adjust a table's width to take account of scrolling","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {node} n table node","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnScrollingWidthAdjust ( oSettings, n )","\t\t{","\t\t\tif ( oSettings.oScroll.sX === \"\" &amp;&amp; oSettings.oScroll.sY !== \"\" )","\t\t\t{","\t\t\t\t/* When y-scrolling only, we want to remove the width of the scroll bar so the table","\t\t\t\t * + scroll bar will fit into the area avaialble.","\t\t\t\t */","\t\t\t\tvar iOrigWidth = $(n).width();","\t\t\t\tn.style.width = _fnStringToCss( $(n).outerWidth()-oSettings.oScroll.iBarWidth );","\t\t\t}","\t\t\telse if ( oSettings.oScroll.sX !== \"\" )","\t\t\t{","\t\t\t\t/* When x-scrolling both ways, fix the table at it's current size, without adjusting */","\t\t\t\tn.style.width = _fnStringToCss( $(n).outerWidth() );","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Get the widest node","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {int} iCol column of interest","\t\t *  @returns {node} widest table node","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnGetWidestNode( oSettings, iCol )","\t\t{","\t\t\tvar iMaxIndex = _fnGetMaxLenString( oSettings, iCol );","\t\t\tif ( iMaxIndex &lt; 0 )","\t\t\t{","\t\t\t\treturn null;","\t\t\t}","\t\t","\t\t\tif ( oSettings.aoData[iMaxIndex].nTr === null )","\t\t\t{","\t\t\t\tvar n = document.createElement('td');","\t\t\t\tn.innerHTML = _fnGetCellData( oSettings, iMaxIndex, iCol, '' );","\t\t\t\treturn n;","\t\t\t}","\t\t\treturn _fnGetTdNodes(oSettings, iMaxIndex)[iCol];","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Get the maximum strlen for each data column","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {int} iCol column of interest","\t\t *  @returns {string} max string length for each column","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnGetMaxLenString( oSettings, iCol )","\t\t{","\t\t\tvar iMax = -1;","\t\t\tvar iMaxIndex = -1;","\t\t\t","\t\t\tfor ( var i=0 ; i&lt;oSettings.aoData.length ; i++ )","\t\t\t{","\t\t\t\tvar s = _fnGetCellData( oSettings, i, iCol, 'display' )+\"\";","\t\t\t\ts = s.replace( /&lt;.*?&gt;/g, \"\" );","\t\t\t\tif ( s.length &gt; iMax )","\t\t\t\t{","\t\t\t\t\tiMax = s.length;","\t\t\t\t\tiMaxIndex = i;","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\treturn iMaxIndex;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Append a CSS unit (only if required) to a string","\t\t *  @param {array} aArray1 first array","\t\t *  @param {array} aArray2 second array","\t\t *  @returns {int} 0 if match, 1 if length is different, 2 if no match","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnStringToCss( s )","\t\t{","\t\t\tif ( s === null )","\t\t\t{","\t\t\t\treturn \"0px\";","\t\t\t}","\t\t\t","\t\t\tif ( typeof s == 'number' )","\t\t\t{","\t\t\t\tif ( s &lt; 0 )","\t\t\t\t{","\t\t\t\t\treturn \"0px\";","\t\t\t\t}","\t\t\t\treturn s+\"px\";","\t\t\t}","\t\t\t","\t\t\t/* Check if the last character is not 0-9 */","\t\t\tvar c = s.charCodeAt( s.length-1 );","\t\t\tif (c &lt; 0x30 || c &gt; 0x39)","\t\t\t{","\t\t\t\treturn s;","\t\t\t}","\t\t\treturn s+\"px\";","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Get the width of a scroll bar in this browser being used","\t\t *  @returns {int} width in pixels","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnScrollBarWidth ()","\t\t{  ","\t\t\tvar inner = document.createElement('p');","\t\t\tvar style = inner.style;","\t\t\tstyle.width = \"100%\";","\t\t\tstyle.height = \"200px\";","\t\t\tstyle.padding = \"0px\";","\t\t\t","\t\t\tvar outer = document.createElement('div');","\t\t\tstyle = outer.style;","\t\t\tstyle.position = \"absolute\";","\t\t\tstyle.top = \"0px\";","\t\t\tstyle.left = \"0px\";","\t\t\tstyle.visibility = \"hidden\";","\t\t\tstyle.width = \"200px\";","\t\t\tstyle.height = \"150px\";","\t\t\tstyle.padding = \"0px\";","\t\t\tstyle.overflow = \"hidden\";","\t\t\touter.appendChild(inner);","\t\t\t","\t\t\tdocument.body.appendChild(outer);","\t\t\tvar w1 = inner.offsetWidth;","\t\t\touter.style.overflow = 'scroll';","\t\t\tvar w2 = inner.offsetWidth;","\t\t\tif ( w1 == w2 )","\t\t\t{","\t\t\t\tw2 = outer.clientWidth;","\t\t\t}","\t\t\t","\t\t\tdocument.body.removeChild(outer);","\t\t\treturn (w1 - w2);  ","\t\t}","\t\t","\t\t/**","\t\t * Change the order of the table","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {bool} bApplyClasses optional - should we apply classes or not","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnSort ( oSettings, bApplyClasses )","\t\t{","\t\t\tvar","\t\t\t\ti, iLen, j, jLen, k, kLen,","\t\t\t\tsDataType, nTh,","\t\t\t\taaSort = [],","\t\t\t \taiOrig = [],","\t\t\t\toSort = DataTable.ext.oSort,","\t\t\t\taoData = oSettings.aoData,","\t\t\t\taoColumns = oSettings.aoColumns,","\t\t\t\toAria = oSettings.oLanguage.oAria;","\t\t\t","\t\t\t/* No sorting required if server-side or no sorting array */","\t\t\tif ( !oSettings.oFeatures.bServerSide &amp;&amp; ","\t\t\t\t(oSettings.aaSorting.length !== 0 || oSettings.aaSortingFixed !== null) )","\t\t\t{","\t\t\t\taaSort = ( oSettings.aaSortingFixed !== null ) ?","\t\t\t\t\toSettings.aaSortingFixed.concat( oSettings.aaSorting ) :","\t\t\t\t\toSettings.aaSorting.slice();","\t\t\t\t","\t\t\t\t/* If there is a sorting data type, and a function belonging to it, then we need to","\t\t\t\t * get the data from the developer's function and apply it for this column","\t\t\t\t */","\t\t\t\tfor ( i=0 ; i&lt;aaSort.length ; i++ )","\t\t\t\t{","\t\t\t\t\tvar iColumn = aaSort[i][0];","\t\t\t\t\tvar iVisColumn = _fnColumnIndexToVisible( oSettings, iColumn );","\t\t\t\t\tsDataType = oSettings.aoColumns[ iColumn ].sSortDataType;","\t\t\t\t\tif ( DataTable.ext.afnSortData[sDataType] )","\t\t\t\t\t{","\t\t\t\t\t\tvar aData = DataTable.ext.afnSortData[sDataType].call( ","\t\t\t\t\t\t\toSettings.oInstance, oSettings, iColumn, iVisColumn","\t\t\t\t\t\t);","\t\t\t\t\t\tif ( aData.length === aoData.length )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tfor ( j=0, jLen=aoData.length ; j&lt;jLen ; j++ )","\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\t_fnSetCellData( oSettings, j, iColumn, aData[j] );","\t\t\t\t\t\t\t}","\t\t\t\t\t\t}","\t\t\t\t\t\telse","\t\t\t\t\t\t{","\t\t\t\t\t\t\t_fnLog( oSettings, 0, \"Returned data sort array (col \"+iColumn+\") is the wrong length\" );","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t}","\t\t\t\t","\t\t\t\t/* Create a value - key array of the current row positions such that we can use their","\t\t\t\t * current position during the sort, if values match, in order to perform stable sorting","\t\t\t\t */","\t\t\t\tfor ( i=0, iLen=oSettings.aiDisplayMaster.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\taiOrig[ oSettings.aiDisplayMaster[i] ] = i;","\t\t\t\t}","\t\t","\t\t\t\t/* Build an internal data array which is specific to the sort, so we can get and prep","\t\t\t\t * the data to be sorted only once, rather than needing to do it every time the sorting","\t\t\t\t * function runs. This make the sorting function a very simple comparison","\t\t\t\t */","\t\t\t\tvar iSortLen = aaSort.length;","\t\t\t\tvar fnSortFormat, aDataSort;","\t\t\t\tfor ( i=0, iLen=aoData.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\tfor ( j=0 ; j&lt;iSortLen ; j++ )","\t\t\t\t\t{","\t\t\t\t\t\taDataSort = aoColumns[ aaSort[j][0] ].aDataSort;","\t\t","\t\t\t\t\t\tfor ( k=0, kLen=aDataSort.length ; k&lt;kLen ; k++ )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tsDataType = aoColumns[ aDataSort[k] ].sType;","\t\t\t\t\t\t\tfnSortFormat = oSort[ (sDataType ? sDataType : 'string')+\"-pre\" ];","\t\t\t\t\t\t\t","\t\t\t\t\t\t\taoData[i]._aSortData[ aDataSort[k] ] = fnSortFormat ?","\t\t\t\t\t\t\t\tfnSortFormat( _fnGetCellData( oSettings, i, aDataSort[k], 'sort' ) ) :","\t\t\t\t\t\t\t\t_fnGetCellData( oSettings, i, aDataSort[k], 'sort' );","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t}","\t\t\t\t","\t\t\t\t/* Do the sort - here we want multi-column sorting based on a given data source (column)","\t\t\t\t * and sorting function (from oSort) in a certain direction. It's reasonably complex to","\t\t\t\t * follow on it's own, but this is what we want (example two column sorting):","\t\t\t\t *  fnLocalSorting = function(a,b){","\t\t\t\t *  \tvar iTest;","\t\t\t\t *  \tiTest = oSort['string-asc']('data11', 'data12');","\t\t\t\t *  \tif (iTest !== 0)","\t\t\t\t *  \t\treturn iTest;","\t\t\t\t *    iTest = oSort['numeric-desc']('data21', 'data22');","\t\t\t\t *    if (iTest !== 0)","\t\t\t\t *  \t\treturn iTest;","\t\t\t\t *  \treturn oSort['numeric-asc']( aiOrig[a], aiOrig[b] );","\t\t\t\t *  }","\t\t\t\t * Basically we have a test for each sorting column, if the data in that column is equal,","\t\t\t\t * test the next column. If all columns match, then we use a numeric sort on the row ","\t\t\t\t * positions in the original data array to provide a stable sort.","\t\t\t\t */","\t\t\t\toSettings.aiDisplayMaster.sort( function ( a, b ) {","\t\t\t\t\tvar k, l, lLen, iTest, aDataSort, sDataType;","\t\t\t\t\tfor ( k=0 ; k&lt;iSortLen ; k++ )","\t\t\t\t\t{","\t\t\t\t\t\taDataSort = aoColumns[ aaSort[k][0] ].aDataSort;","\t\t","\t\t\t\t\t\tfor ( l=0, lLen=aDataSort.length ; l&lt;lLen ; l++ )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tsDataType = aoColumns[ aDataSort[l] ].sType;","\t\t\t\t\t\t\t","\t\t\t\t\t\t\tiTest = oSort[ (sDataType ? sDataType : 'string')+\"-\"+aaSort[k][1] ](","\t\t\t\t\t\t\t\taoData[a]._aSortData[ aDataSort[l] ],","\t\t\t\t\t\t\t\taoData[b]._aSortData[ aDataSort[l] ]","\t\t\t\t\t\t\t);","\t\t\t\t\t\t","\t\t\t\t\t\t\tif ( iTest !== 0 )","\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\treturn iTest;","\t\t\t\t\t\t\t}","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t\t","\t\t\t\t\treturn oSort['numeric-asc']( aiOrig[a], aiOrig[b] );","\t\t\t\t} );","\t\t\t}","\t\t\t","\t\t\t/* Alter the sorting classes to take account of the changes */","\t\t\tif ( (bApplyClasses === undefined || bApplyClasses) &amp;&amp; !oSettings.oFeatures.bDeferRender )","\t\t\t{","\t\t\t\t_fnSortingClasses( oSettings );","\t\t\t}","\t\t","\t\t\tfor ( i=0, iLen=oSettings.aoColumns.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\tvar sTitle = aoColumns[i].sTitle.replace( /&lt;.*?&gt;/g, \"\" );","\t\t\t\tnTh = aoColumns[i].nTh;","\t\t\t\tnTh.removeAttribute('aria-sort');","\t\t\t\tnTh.removeAttribute('aria-label');","\t\t\t\t","\t\t\t\t/* In ARIA only the first sorting column can be marked as sorting - no multi-sort option */","\t\t\t\tif ( aoColumns[i].bSortable )","\t\t\t\t{","\t\t\t\t\tif ( aaSort.length &gt; 0 &amp;&amp; aaSort[0][0] == i )","\t\t\t\t\t{","\t\t\t\t\t\tnTh.setAttribute('aria-sort', aaSort[0][1]==\"asc\" ? \"ascending\" : \"descending\" );","\t\t\t\t\t\t","\t\t\t\t\t\tvar nextSort = (aoColumns[i].asSorting[ aaSort[0][2]+1 ]) ? ","\t\t\t\t\t\t\taoColumns[i].asSorting[ aaSort[0][2]+1 ] : aoColumns[i].asSorting[0];","\t\t\t\t\t\tnTh.setAttribute('aria-label', sTitle+","\t\t\t\t\t\t\t(nextSort==\"asc\" ? oAria.sSortAscending : oAria.sSortDescending) );","\t\t\t\t\t}","\t\t\t\t\telse","\t\t\t\t\t{","\t\t\t\t\t\tnTh.setAttribute('aria-label', sTitle+","\t\t\t\t\t\t\t(aoColumns[i].asSorting[0]==\"asc\" ? oAria.sSortAscending : oAria.sSortDescending) );","\t\t\t\t\t}","\t\t\t\t}","\t\t\t\telse","\t\t\t\t{","\t\t\t\t\tnTh.setAttribute('aria-label', sTitle);","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\t/* Tell the draw function that we have sorted the data */","\t\t\toSettings.bSorted = true;","\t\t\t$(oSettings.oInstance).trigger('sort', oSettings);","\t\t\t","\t\t\t/* Copy the master data into the draw array and re-draw */","\t\t\tif ( oSettings.oFeatures.bFilter )","\t\t\t{","\t\t\t\t/* _fnFilter() will redraw the table for us */","\t\t\t\t_fnFilterComplete( oSettings, oSettings.oPreviousSearch, 1 );","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\toSettings.aiDisplay = oSettings.aiDisplayMaster.slice();","\t\t\t\toSettings._iDisplayStart = 0; /* reset display back to page 0 */","\t\t\t\t_fnCalculateEnd( oSettings );","\t\t\t\t_fnDraw( oSettings );","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Attach a sort handler (click) to a node","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {node} nNode node to attach the handler to","\t\t *  @param {int} iDataIndex column sorting index","\t\t *  @param {function} [fnCallback] callback function","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnSortAttachListener ( oSettings, nNode, iDataIndex, fnCallback )","\t\t{","\t\t\t_fnBindAction( nNode, {}, function (e) {","\t\t\t\t/* If the column is not sortable - don't to anything */","\t\t\t\tif ( oSettings.aoColumns[iDataIndex].bSortable === false )","\t\t\t\t{","\t\t\t\t\treturn;","\t\t\t\t}","\t\t\t\t","\t\t\t\t/*","\t\t\t\t * This is a little bit odd I admit... I declare a temporary function inside the scope of","\t\t\t\t * _fnBuildHead and the click handler in order that the code presented here can be used ","\t\t\t\t * twice - once for when bProcessing is enabled, and another time for when it is ","\t\t\t\t * disabled, as we need to perform slightly different actions.","\t\t\t\t *   Basically the issue here is that the Javascript engine in modern browsers don't ","\t\t\t\t * appear to allow the rendering engine to update the display while it is still executing","\t\t\t\t * it's thread (well - it does but only after long intervals). This means that the ","\t\t\t\t * 'processing' display doesn't appear for a table sort. To break the js thread up a bit","\t\t\t\t * I force an execution break by using setTimeout - but this breaks the expected ","\t\t\t\t * thread continuation for the end-developer's point of view (their code would execute","\t\t\t\t * too early), so we only do it when we absolutely have to.","\t\t\t\t */","\t\t\t\tvar fnInnerSorting = function () {","\t\t\t\t\tvar iColumn, iNextSort;","\t\t\t\t\t","\t\t\t\t\t/* If the shift key is pressed then we are multiple column sorting */","\t\t\t\t\tif ( e.shiftKey )","\t\t\t\t\t{","\t\t\t\t\t\t/* Are we already doing some kind of sort on this column? */","\t\t\t\t\t\tvar bFound = false;","\t\t\t\t\t\tfor ( var i=0 ; i&lt;oSettings.aaSorting.length ; i++ )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tif ( oSettings.aaSorting[i][0] == iDataIndex )","\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\tbFound = true;","\t\t\t\t\t\t\t\tiColumn = oSettings.aaSorting[i][0];","\t\t\t\t\t\t\t\tiNextSort = oSettings.aaSorting[i][2]+1;","\t\t\t\t\t\t\t\t","\t\t\t\t\t\t\t\tif ( !oSettings.aoColumns[iColumn].asSorting[iNextSort] )","\t\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\t\t/* Reached the end of the sorting options, remove from multi-col sort */","\t\t\t\t\t\t\t\t\toSettings.aaSorting.splice( i, 1 );","\t\t\t\t\t\t\t\t}","\t\t\t\t\t\t\t\telse","\t\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\t\t/* Move onto next sorting direction */","\t\t\t\t\t\t\t\t\toSettings.aaSorting[i][1] = oSettings.aoColumns[iColumn].asSorting[iNextSort];","\t\t\t\t\t\t\t\t\toSettings.aaSorting[i][2] = iNextSort;","\t\t\t\t\t\t\t\t}","\t\t\t\t\t\t\t\tbreak;","\t\t\t\t\t\t\t}","\t\t\t\t\t\t}","\t\t\t\t\t\t","\t\t\t\t\t\t/* No sort yet - add it in */","\t\t\t\t\t\tif ( bFound === false )","\t\t\t\t\t\t{","\t\t\t\t\t\t\toSettings.aaSorting.push( [ iDataIndex, ","\t\t\t\t\t\t\t\toSettings.aoColumns[iDataIndex].asSorting[0], 0 ] );","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t\telse","\t\t\t\t\t{","\t\t\t\t\t\t/* If no shift key then single column sort */","\t\t\t\t\t\tif ( oSettings.aaSorting.length == 1 &amp;&amp; oSettings.aaSorting[0][0] == iDataIndex )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tiColumn = oSettings.aaSorting[0][0];","\t\t\t\t\t\t\tiNextSort = oSettings.aaSorting[0][2]+1;","\t\t\t\t\t\t\tif ( !oSettings.aoColumns[iColumn].asSorting[iNextSort] )","\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\tiNextSort = 0;","\t\t\t\t\t\t\t}","\t\t\t\t\t\t\toSettings.aaSorting[0][1] = oSettings.aoColumns[iColumn].asSorting[iNextSort];","\t\t\t\t\t\t\toSettings.aaSorting[0][2] = iNextSort;","\t\t\t\t\t\t}","\t\t\t\t\t\telse","\t\t\t\t\t\t{","\t\t\t\t\t\t\toSettings.aaSorting.splice( 0, oSettings.aaSorting.length );","\t\t\t\t\t\t\toSettings.aaSorting.push( [ iDataIndex, ","\t\t\t\t\t\t\t\toSettings.aoColumns[iDataIndex].asSorting[0], 0 ] );","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t\t","\t\t\t\t\t/* Run the sort */","\t\t\t\t\t_fnSort( oSettings );","\t\t\t\t}; /* /fnInnerSorting */","\t\t\t\t","\t\t\t\tif ( !oSettings.oFeatures.bProcessing )","\t\t\t\t{","\t\t\t\t\tfnInnerSorting();","\t\t\t\t}","\t\t\t\telse","\t\t\t\t{","\t\t\t\t\t_fnProcessingDisplay( oSettings, true );","\t\t\t\t\tsetTimeout( function() {","\t\t\t\t\t\tfnInnerSorting();","\t\t\t\t\t\tif ( !oSettings.oFeatures.bServerSide )","\t\t\t\t\t\t{","\t\t\t\t\t\t\t_fnProcessingDisplay( oSettings, false );","\t\t\t\t\t\t}","\t\t\t\t\t}, 0 );","\t\t\t\t}","\t\t\t\t","\t\t\t\t/* Call the user specified callback function - used for async user interaction */","\t\t\t\tif ( typeof fnCallback == 'function' )","\t\t\t\t{","\t\t\t\t\tfnCallback( oSettings );","\t\t\t\t}","\t\t\t} );","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Set the sorting classes on the header, Note: it is safe to call this function ","\t\t * when bSort and bSortClasses are false","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnSortingClasses( oSettings )","\t\t{","\t\t\tvar i, iLen, j, jLen, iFound;","\t\t\tvar aaSort, sClass;","\t\t\tvar iColumns = oSettings.aoColumns.length;","\t\t\tvar oClasses = oSettings.oClasses;","\t\t\t","\t\t\tfor ( i=0 ; i&lt;iColumns ; i++ )","\t\t\t{","\t\t\t\tif ( oSettings.aoColumns[i].bSortable )","\t\t\t\t{","\t\t\t\t\t$(oSettings.aoColumns[i].nTh).removeClass( oClasses.sSortAsc +\" \"+ oClasses.sSortDesc +","\t\t\t\t\t\t\" \"+ oSettings.aoColumns[i].sSortingClass );","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\tif ( oSettings.aaSortingFixed !== null )","\t\t\t{","\t\t\t\taaSort = oSettings.aaSortingFixed.concat( oSettings.aaSorting );","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\taaSort = oSettings.aaSorting.slice();","\t\t\t}","\t\t\t","\t\t\t/* Apply the required classes to the header */","\t\t\tfor ( i=0 ; i&lt;oSettings.aoColumns.length ; i++ )","\t\t\t{","\t\t\t\tif ( oSettings.aoColumns[i].bSortable )","\t\t\t\t{","\t\t\t\t\tsClass = oSettings.aoColumns[i].sSortingClass;","\t\t\t\t\tiFound = -1;","\t\t\t\t\tfor ( j=0 ; j&lt;aaSort.length ; j++ )","\t\t\t\t\t{","\t\t\t\t\t\tif ( aaSort[j][0] == i )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tsClass = ( aaSort[j][1] == \"asc\" ) ?","\t\t\t\t\t\t\t\toClasses.sSortAsc : oClasses.sSortDesc;","\t\t\t\t\t\t\tiFound = j;","\t\t\t\t\t\t\tbreak;","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t\t$(oSettings.aoColumns[i].nTh).addClass( sClass );","\t\t\t\t\t","\t\t\t\t\tif ( oSettings.bJUI )","\t\t\t\t\t{","\t\t\t\t\t\t/* jQuery UI uses extra markup */","\t\t\t\t\t\tvar jqSpan = $(\"span.\"+oClasses.sSortIcon,  oSettings.aoColumns[i].nTh);","\t\t\t\t\t\tjqSpan.removeClass(oClasses.sSortJUIAsc +\" \"+ oClasses.sSortJUIDesc +\" \"+ ","\t\t\t\t\t\t\toClasses.sSortJUI +\" \"+ oClasses.sSortJUIAscAllowed +\" \"+ oClasses.sSortJUIDescAllowed );","\t\t\t\t\t\t","\t\t\t\t\t\tvar sSpanClass;","\t\t\t\t\t\tif ( iFound == -1 )","\t\t\t\t\t\t{","\t\t\t\t\t\t \tsSpanClass = oSettings.aoColumns[i].sSortingClassJUI;","\t\t\t\t\t\t}","\t\t\t\t\t\telse if ( aaSort[iFound][1] == \"asc\" )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tsSpanClass = oClasses.sSortJUIAsc;","\t\t\t\t\t\t}","\t\t\t\t\t\telse","\t\t\t\t\t\t{","\t\t\t\t\t\t\tsSpanClass = oClasses.sSortJUIDesc;","\t\t\t\t\t\t}","\t\t\t\t\t\t","\t\t\t\t\t\tjqSpan.addClass( sSpanClass );","\t\t\t\t\t}","\t\t\t\t}","\t\t\t\telse","\t\t\t\t{","\t\t\t\t\t/* No sorting on this column, so add the base class. This will have been assigned by","\t\t\t\t\t * _fnAddColumn","\t\t\t\t\t */","\t\t\t\t\t$(oSettings.aoColumns[i].nTh).addClass( oSettings.aoColumns[i].sSortingClass );","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\t/* ","\t\t\t * Apply the required classes to the table body","\t\t\t * Note that this is given as a feature switch since it can significantly slow down a sort","\t\t\t * on large data sets (adding and removing of classes is always slow at the best of times..)","\t\t\t * Further to this, note that this code is admittedly fairly ugly. It could be made a lot ","\t\t\t * simpler using jQuery selectors and add/removeClass, but that is significantly slower","\t\t\t * (on the order of 5 times slower) - hence the direct DOM manipulation here.","\t\t\t * Note that for deferred drawing we do use jQuery - the reason being that taking the first","\t\t\t * row found to see if the whole column needs processed can miss classes since the first","\t\t\t * column might be new.","\t\t\t */","\t\t\tsClass = oClasses.sSortColumn;","\t\t\t","\t\t\tif ( oSettings.oFeatures.bSort &amp;&amp; oSettings.oFeatures.bSortClasses )","\t\t\t{","\t\t\t\tvar nTds = _fnGetTdNodes( oSettings );","\t\t\t\t","\t\t\t\t/* Determine what the sorting class for each column should be */","\t\t\t\tvar iClass, iTargetCol;","\t\t\t\tvar asClasses = [];","\t\t\t\tfor (i = 0; i &lt; iColumns; i++)","\t\t\t\t{","\t\t\t\t\tasClasses.push(\"\");","\t\t\t\t}","\t\t\t\tfor (i = 0, iClass = 1; i &lt; aaSort.length; i++)","\t\t\t\t{","\t\t\t\t\tiTargetCol = parseInt( aaSort[i][0], 10 );","\t\t\t\t\tasClasses[iTargetCol] = sClass + iClass;","\t\t\t\t\t","\t\t\t\t\tif ( iClass &lt; 3 )","\t\t\t\t\t{","\t\t\t\t\t\tiClass++;","\t\t\t\t\t}","\t\t\t\t}","\t\t\t\t","\t\t\t\t/* Make changes to the classes for each cell as needed */","\t\t\t\tvar reClass = new RegExp(sClass + \"[123]\");","\t\t\t\tvar sTmpClass, sCurrentClass, sNewClass;","\t\t\t\tfor ( i=0, iLen=nTds.length; i&lt;iLen; i++ )","\t\t\t\t{","\t\t\t\t\t/* Determine which column we're looking at */","\t\t\t\t\tiTargetCol = i % iColumns;","\t\t\t\t\t","\t\t\t\t\t/* What is the full list of classes now */","\t\t\t\t\tsCurrentClass = nTds[i].className;","\t\t\t\t\t/* What sorting class should be applied? */","\t\t\t\t\tsNewClass = asClasses[iTargetCol];","\t\t\t\t\t/* What would the new full list be if we did a replacement? */","\t\t\t\t\tsTmpClass = sCurrentClass.replace(reClass, sNewClass);","\t\t\t\t\t","\t\t\t\t\tif ( sTmpClass != sCurrentClass )","\t\t\t\t\t{","\t\t\t\t\t\t/* We changed something */","\t\t\t\t\t\tnTds[i].className = $.trim( sTmpClass );","\t\t\t\t\t}","\t\t\t\t\telse if ( sNewClass.length &gt; 0 &amp;&amp; sCurrentClass.indexOf(sNewClass) == -1 )","\t\t\t\t\t{","\t\t\t\t\t\t/* We need to add a class */","\t\t\t\t\t\tnTds[i].className = sCurrentClass + \" \" + sNewClass;","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t}","\t\t","\t\t","\t\t","\t\t/**","\t\t * Save the state of a table in a cookie such that the page can be reloaded","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnSaveState ( oSettings )","\t\t{","\t\t\tif ( !oSettings.oFeatures.bStateSave || oSettings.bDestroying )","\t\t\t{","\t\t\t\treturn;","\t\t\t}","\t\t","\t\t\t/* Store the interesting variables */","\t\t\tvar i, iLen, bInfinite=oSettings.oScroll.bInfinite;","\t\t\tvar oState = {","\t\t\t\t\"iCreate\":      new Date().getTime(),","\t\t\t\t\"iStart\":       (bInfinite ? 0 : oSettings._iDisplayStart),","\t\t\t\t\"iEnd\":         (bInfinite ? oSettings._iDisplayLength : oSettings._iDisplayEnd),","\t\t\t\t\"iLength\":      oSettings._iDisplayLength,","\t\t\t\t\"aaSorting\":    $.extend( true, [], oSettings.aaSorting ),","\t\t\t\t\"oSearch\":      $.extend( true, {}, oSettings.oPreviousSearch ),","\t\t\t\t\"aoSearchCols\": $.extend( true, [], oSettings.aoPreSearchCols ),","\t\t\t\t\"abVisCols\":    []","\t\t\t};","\t\t","\t\t\tfor ( i=0, iLen=oSettings.aoColumns.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\toState.abVisCols.push( oSettings.aoColumns[i].bVisible );","\t\t\t}","\t\t","\t\t\t_fnCallbackFire( oSettings, \"aoStateSaveParams\", 'stateSaveParams', [oSettings, oState] );","\t\t\t","\t\t\toSettings.fnStateSave.call( oSettings.oInstance, oSettings, oState );","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Attempt to load a saved table state from a cookie","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {object} oInit DataTables init object so we can override settings","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnLoadState ( oSettings, oInit )","\t\t{","\t\t\tif ( !oSettings.oFeatures.bStateSave )","\t\t\t{","\t\t\t\treturn;","\t\t\t}","\t\t","\t\t\tvar oData = oSettings.fnStateLoad.call( oSettings.oInstance, oSettings );","\t\t\tif ( !oData )","\t\t\t{","\t\t\t\treturn;","\t\t\t}","\t\t\t","\t\t\t/* Allow custom and plug-in manipulation functions to alter the saved data set and","\t\t\t * cancelling of loading by returning false","\t\t\t */","\t\t\tvar abStateLoad = _fnCallbackFire( oSettings, 'aoStateLoadParams', 'stateLoadParams', [oSettings, oData] );","\t\t\tif ( $.inArray( false, abStateLoad ) !== -1 )","\t\t\t{","\t\t\t\treturn;","\t\t\t}","\t\t\t","\t\t\t/* Store the saved state so it might be accessed at any time */","\t\t\toSettings.oLoadedState = $.extend( true, {}, oData );","\t\t\t","\t\t\t/* Restore key features */","\t\t\toSettings._iDisplayStart    = oData.iStart;","\t\t\toSettings.iInitDisplayStart = oData.iStart;","\t\t\toSettings._iDisplayEnd      = oData.iEnd;","\t\t\toSettings._iDisplayLength   = oData.iLength;","\t\t\toSettings.aaSorting         = oData.aaSorting.slice();","\t\t\toSettings.saved_aaSorting   = oData.aaSorting.slice();","\t\t\t","\t\t\t/* Search filtering  */","\t\t\t$.extend( oSettings.oPreviousSearch, oData.oSearch );","\t\t\t$.extend( true, oSettings.aoPreSearchCols, oData.aoSearchCols );","\t\t\t","\t\t\t/* Column visibility state","\t\t\t * Pass back visibility settings to the init handler, but to do not here override","\t\t\t * the init object that the user might have passed in","\t\t\t */","\t\t\toInit.saved_aoColumns = [];","\t\t\tfor ( var i=0 ; i&lt;oData.abVisCols.length ; i++ )","\t\t\t{","\t\t\t\toInit.saved_aoColumns[i] = {};","\t\t\t\toInit.saved_aoColumns[i].bVisible = oData.abVisCols[i];","\t\t\t}","\t\t","\t\t\t_fnCallbackFire( oSettings, 'aoStateLoaded', 'stateLoaded', [oSettings, oData] );","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Create a new cookie with a value to store the state of a table","\t\t *  @param {string} sName name of the cookie to create","\t\t *  @param {string} sValue the value the cookie should take","\t\t *  @param {int} iSecs duration of the cookie","\t\t *  @param {string} sBaseName sName is made up of the base + file name - this is the base","\t\t *  @param {function} fnCallback User definable function to modify the cookie","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnCreateCookie ( sName, sValue, iSecs, sBaseName, fnCallback )","\t\t{","\t\t\tvar date = new Date();","\t\t\tdate.setTime( date.getTime()+(iSecs*1000) );","\t\t\t","\t\t\t/* ","\t\t\t * Shocking but true - it would appear IE has major issues with having the path not having","\t\t\t * a trailing slash on it. We need the cookie to be available based on the path, so we","\t\t\t * have to append the file name to the cookie name. Appalling. Thanks to vex for adding the","\t\t\t * patch to use at least some of the path","\t\t\t */","\t\t\tvar aParts = window.location.pathname.split('/');","\t\t\tvar sNameFile = sName + '_' + aParts.pop().replace(/[\\/:]/g,\"\").toLowerCase();","\t\t\tvar sFullCookie, oData;","\t\t\t","\t\t\tif ( fnCallback !== null )","\t\t\t{","\t\t\t\toData = (typeof $.parseJSON === 'function') ? ","\t\t\t\t\t$.parseJSON( sValue ) : eval( '('+sValue+')' );","\t\t\t\tsFullCookie = fnCallback( sNameFile, oData, date.toGMTString(),","\t\t\t\t\taParts.join('/')+\"/\" );","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\tsFullCookie = sNameFile + \"=\" + encodeURIComponent(sValue) +","\t\t\t\t\t\"; expires=\" + date.toGMTString() +\"; path=\" + aParts.join('/')+\"/\";","\t\t\t}","\t\t\t","\t\t\t/* Are we going to go over the cookie limit of 4KiB? If so, try to delete a cookies","\t\t\t * belonging to DataTables.","\t\t\t */","\t\t\tvar","\t\t\t\taCookies =document.cookie.split(';'),","\t\t\t\tiNewCookieLen = sFullCookie.split(';')[0].length,","\t\t\t\taOldCookies = [];","\t\t\t","\t\t\tif ( iNewCookieLen+document.cookie.length+10 &gt; 4096 ) /* Magic 10 for padding */","\t\t\t{","\t\t\t\tfor ( var i=0, iLen=aCookies.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\tif ( aCookies[i].indexOf( sBaseName ) != -1 )","\t\t\t\t\t{","\t\t\t\t\t\t/* It's a DataTables cookie, so eval it and check the time stamp */","\t\t\t\t\t\tvar aSplitCookie = aCookies[i].split('=');","\t\t\t\t\t\ttry {","\t\t\t\t\t\t\toData = eval( '('+decodeURIComponent(aSplitCookie[1])+')' );","\t\t","\t\t\t\t\t\t\tif ( oData &amp;&amp; oData.iCreate )","\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\taOldCookies.push( {","\t\t\t\t\t\t\t\t\t\"name\": aSplitCookie[0],","\t\t\t\t\t\t\t\t\t\"time\": oData.iCreate","\t\t\t\t\t\t\t\t} );","\t\t\t\t\t\t\t}","\t\t\t\t\t\t}","\t\t\t\t\t\tcatch( e ) {}","\t\t\t\t\t}","\t\t\t\t}","\t\t","\t\t\t\t// Make sure we delete the oldest ones first","\t\t\t\taOldCookies.sort( function (a, b) {","\t\t\t\t\treturn b.time - a.time;","\t\t\t\t} );","\t\t","\t\t\t\t// Eliminate as many old DataTables cookies as we need to","\t\t\t\twhile ( iNewCookieLen + document.cookie.length + 10 &gt; 4096 ) {","\t\t\t\t\tif ( aOldCookies.length === 0 ) {","\t\t\t\t\t\t// Deleted all DT cookies and still not enough space. Can't state save","\t\t\t\t\t\treturn;","\t\t\t\t\t}","\t\t\t\t\t","\t\t\t\t\tvar old = aOldCookies.pop();","\t\t\t\t\tdocument.cookie = old.name+\"=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=\"+","\t\t\t\t\t\taParts.join('/') + \"/\";","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\tdocument.cookie = sFullCookie;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Read an old cookie to get a cookie with an old table state","\t\t *  @param {string} sName name of the cookie to read","\t\t *  @returns {string} contents of the cookie - or null if no cookie with that name found","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnReadCookie ( sName )","\t\t{","\t\t\tvar","\t\t\t\taParts = window.location.pathname.split('/'),","\t\t\t\tsNameEQ = sName + '_' + aParts[aParts.length-1].replace(/[\\/:]/g,\"\").toLowerCase() + '=',","\t\t\t \tsCookieContents = document.cookie.split(';');","\t\t\t","\t\t\tfor( var i=0 ; i&lt;sCookieContents.length ; i++ )","\t\t\t{","\t\t\t\tvar c = sCookieContents[i];","\t\t\t\t","\t\t\t\twhile (c.charAt(0)==' ')","\t\t\t\t{","\t\t\t\t\tc = c.substring(1,c.length);","\t\t\t\t}","\t\t\t\t","\t\t\t\tif (c.indexOf(sNameEQ) === 0)","\t\t\t\t{","\t\t\t\t\treturn decodeURIComponent( c.substring(sNameEQ.length,c.length) );","\t\t\t\t}","\t\t\t}","\t\t\treturn null;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Return the settings object for a particular table","\t\t *  @param {node} nTable table we are using as a dataTable","\t\t *  @returns {object} Settings object - or null if not found","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnSettingsFromNode ( nTable )","\t\t{","\t\t\tfor ( var i=0 ; i&lt;DataTable.settings.length ; i++ )","\t\t\t{","\t\t\t\tif ( DataTable.settings[i].nTable === nTable )","\t\t\t\t{","\t\t\t\t\treturn DataTable.settings[i];","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\treturn null;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Return an array with the TR nodes for the table","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @returns {array} TR array","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnGetTrNodes ( oSettings )","\t\t{","\t\t\tvar aNodes = [];","\t\t\tvar aoData = oSettings.aoData;","\t\t\tfor ( var i=0, iLen=aoData.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\tif ( aoData[i].nTr !== null )","\t\t\t\t{","\t\t\t\t\taNodes.push( aoData[i].nTr );","\t\t\t\t}","\t\t\t}","\t\t\treturn aNodes;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Return an flat array with all TD nodes for the table, or row","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {int} [iIndividualRow] aoData index to get the nodes for - optional ","\t\t *    if not given then the return array will contain all nodes for the table","\t\t *  @returns {array} TD array","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnGetTdNodes ( oSettings, iIndividualRow )","\t\t{","\t\t\tvar anReturn = [];","\t\t\tvar iCorrector;","\t\t\tvar anTds, nTd;","\t\t\tvar iRow, iRows=oSettings.aoData.length,","\t\t\t\tiColumn, iColumns, oData, sNodeName, iStart=0, iEnd=iRows;","\t\t\t","\t\t\t/* Allow the collection to be limited to just one row */","\t\t\tif ( iIndividualRow !== undefined )","\t\t\t{","\t\t\t\tiStart = iIndividualRow;","\t\t\t\tiEnd = iIndividualRow+1;","\t\t\t}","\t\t","\t\t\tfor ( iRow=iStart ; iRow&lt;iEnd ; iRow++ )","\t\t\t{","\t\t\t\toData = oSettings.aoData[iRow];","\t\t\t\tif ( oData.nTr !== null )","\t\t\t\t{","\t\t\t\t\t/* get the TD child nodes - taking into account text etc nodes */","\t\t\t\t\tanTds = [];","\t\t\t\t\tnTd = oData.nTr.firstChild;","\t\t\t\t\twhile ( nTd )","\t\t\t\t\t{","\t\t\t\t\t\tsNodeName = nTd.nodeName.toLowerCase();","\t\t\t\t\t\tif ( sNodeName == 'td' || sNodeName == 'th' )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tanTds.push( nTd );","\t\t\t\t\t\t}","\t\t\t\t\t\tnTd = nTd.nextSibling;","\t\t\t\t\t}","\t\t","\t\t\t\t\tiCorrector = 0;","\t\t\t\t\tfor ( iColumn=0, iColumns=oSettings.aoColumns.length ; iColumn&lt;iColumns ; iColumn++ )","\t\t\t\t\t{","\t\t\t\t\t\tif ( oSettings.aoColumns[iColumn].bVisible )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tanReturn.push( anTds[iColumn-iCorrector] );","\t\t\t\t\t\t}","\t\t\t\t\t\telse","\t\t\t\t\t\t{","\t\t\t\t\t\t\tanReturn.push( oData._anHidden[iColumn] );","\t\t\t\t\t\t\tiCorrector++;","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t","\t\t\treturn anReturn;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Log an error message","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {int} iLevel log error messages, or display them to the user","\t\t *  @param {string} sMesg error message","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnLog( oSettings, iLevel, sMesg )","\t\t{","\t\t\tvar sAlert = (oSettings===null) ?","\t\t\t\t\"DataTables warning: \"+sMesg :","\t\t\t\t\"DataTables warning (table id = '\"+oSettings.sTableId+\"'): \"+sMesg;","\t\t\t","\t\t\tif ( iLevel === 0 )","\t\t\t{","\t\t\t\tif ( DataTable.ext.sErrMode == 'alert' )","\t\t\t\t{","\t\t\t\t\talert( sAlert );","\t\t\t\t}","\t\t\t\telse","\t\t\t\t{","\t\t\t\t\tthrow new Error(sAlert);","\t\t\t\t}","\t\t\t\treturn;","\t\t\t}","\t\t\telse if ( window.console &amp;&amp; console.log )","\t\t\t{","\t\t\t\tconsole.log( sAlert );","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * See if a property is defined on one object, if so assign it to the other object","\t\t *  @param {object} oRet target object","\t\t *  @param {object} oSrc source object","\t\t *  @param {string} sName property","\t\t *  @param {string} [sMappedName] name to map too - optional, sName used if not given","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnMap( oRet, oSrc, sName, sMappedName )","\t\t{","\t\t\tif ( sMappedName === undefined )","\t\t\t{","\t\t\t\tsMappedName = sName;","\t\t\t}","\t\t\tif ( oSrc[sName] !== undefined )","\t\t\t{","\t\t\t\toRet[sMappedName] = oSrc[sName];","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Extend objects - very similar to jQuery.extend, but deep copy objects, and shallow","\t\t * copy arrays. The reason we need to do this, is that we don't want to deep copy array","\t\t * init values (such as aaSorting) since the dev wouldn't be able to override them, but","\t\t * we do want to deep copy arrays.","\t\t *  @param {object} oOut Object to extend","\t\t *  @param {object} oExtender Object from which the properties will be applied to oOut","\t\t *  @returns {object} oOut Reference, just for convenience - oOut === the return.","\t\t *  @memberof DataTable#oApi","\t\t *  @todo This doesn't take account of arrays inside the deep copied objects.","\t\t */","\t\tfunction _fnExtend( oOut, oExtender )","\t\t{","\t\t\tvar val;","\t\t\t","\t\t\tfor ( var prop in oExtender )","\t\t\t{","\t\t\t\tif ( oExtender.hasOwnProperty(prop) )","\t\t\t\t{","\t\t\t\t\tval = oExtender[prop];","\t\t","\t\t\t\t\tif ( typeof oInit[prop] === 'object' &amp;&amp; val !== null &amp;&amp; $.isArray(val) === false )","\t\t\t\t\t{","\t\t\t\t\t\t$.extend( true, oOut[prop], val );","\t\t\t\t\t}","\t\t\t\t\telse","\t\t\t\t\t{","\t\t\t\t\t\toOut[prop] = val;","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t","\t\t\treturn oOut;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Bind an event handers to allow a click or return key to activate the callback.","\t\t * This is good for accessibility since a return on the keyboard will have the","\t\t * same effect as a click, if the element has focus.","\t\t *  @param {element} n Element to bind the action to","\t\t *  @param {object} oData Data object to pass to the triggered function","\t\t *  @param {function} fn Callback function for when the event is triggered","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnBindAction( n, oData, fn )","\t\t{","\t\t\t$(n)","\t\t\t\t.bind( 'click.DT', oData, function (e) {","\t\t\t\t\t\tn.blur(); // Remove focus outline for mouse users","\t\t\t\t\t\tfn(e);","\t\t\t\t\t} )","\t\t\t\t.bind( 'keypress.DT', oData, function (e){","\t\t\t\t\tif ( e.which === 13 ) {","\t\t\t\t\t\tfn(e);","\t\t\t\t\t} } )","\t\t\t\t.bind( 'selectstart.DT', function () {","\t\t\t\t\t/* Take the brutal approach to cancelling text selection */","\t\t\t\t\treturn false;","\t\t\t\t\t} );","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Register a callback function. Easily allows a callback function to be added to","\t\t * an array store of callback functions that can then all be called together.","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {string} sStore Name of the array storage for the callbacks in oSettings","\t\t *  @param {function} fn Function to be called back","\t\t *  @param {string} sName Identifying name for the callback (i.e. a label)","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnCallbackReg( oSettings, sStore, fn, sName )","\t\t{","\t\t\tif ( fn )","\t\t\t{","\t\t\t\toSettings[sStore].push( {","\t\t\t\t\t\"fn\": fn,","\t\t\t\t\t\"sName\": sName","\t\t\t\t} );","\t\t\t}","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Fire callback functions and trigger events. Note that the loop over the callback","\t\t * array store is done backwards! Further note that you do not want to fire off triggers","\t\t * in time sensitive applications (for example cell creation) as its slow.","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @param {string} sStore Name of the array storage for the callbacks in oSettings","\t\t *  @param {string} sTrigger Name of the jQuery custom event to trigger. If null no trigger","\t\t *    is fired","\t\t *  @param {array} aArgs Array of arguments to pass to the callback function / trigger","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnCallbackFire( oSettings, sStore, sTrigger, aArgs )","\t\t{","\t\t\tvar aoStore = oSettings[sStore];","\t\t\tvar aRet =[];","\t\t","\t\t\tfor ( var i=aoStore.length-1 ; i&gt;=0 ; i-- )","\t\t\t{","\t\t\t\taRet.push( aoStore[i].fn.apply( oSettings.oInstance, aArgs ) );","\t\t\t}","\t\t","\t\t\tif ( sTrigger !== null )","\t\t\t{","\t\t\t\t$(oSettings.oInstance).trigger(sTrigger, aArgs);","\t\t\t}","\t\t","\t\t\treturn aRet;","\t\t}","\t\t","\t\t","\t\t/**","\t\t * JSON stringify. If JSON.stringify it provided by the browser, json2.js or any other","\t\t * library, then we use that as it is fast, safe and accurate. If the function isn't ","\t\t * available then we need to built it ourselves - the inspiration for this function comes","\t\t * from Craig Buckler ( http://www.sitepoint.com/javascript-json-serialization/ ). It is","\t\t * not perfect and absolutely should not be used as a replacement to json2.js - but it does","\t\t * do what we need, without requiring a dependency for DataTables.","\t\t *  @param {object} o JSON object to be converted","\t\t *  @returns {string} JSON string","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tvar _fnJsonString = (window.JSON) ? JSON.stringify : function( o )","\t\t{","\t\t\t/* Not an object or array */","\t\t\tvar sType = typeof o;","\t\t\tif (sType !== \"object\" || o === null)","\t\t\t{","\t\t\t\t// simple data type","\t\t\t\tif (sType === \"string\")","\t\t\t\t{","\t\t\t\t\to = '\"'+o+'\"';","\t\t\t\t}","\t\t\t\treturn o+\"\";","\t\t\t}","\t\t","\t\t\t/* If object or array, need to recurse over it */","\t\t\tvar","\t\t\t\tsProp, mValue,","\t\t\t\tjson = [],","\t\t\t\tbArr = $.isArray(o);","\t\t\t","\t\t\tfor (sProp in o)","\t\t\t{","\t\t\t\tmValue = o[sProp];","\t\t\t\tsType = typeof mValue;","\t\t","\t\t\t\tif (sType === \"string\")","\t\t\t\t{","\t\t\t\t\tmValue = '\"'+mValue+'\"';","\t\t\t\t}","\t\t\t\telse if (sType === \"object\" &amp;&amp; mValue !== null)","\t\t\t\t{","\t\t\t\t\tmValue = _fnJsonString(mValue);","\t\t\t\t}","\t\t","\t\t\t\tjson.push((bArr ? \"\" : '\"'+sProp+'\":') + mValue);","\t\t\t}","\t\t","\t\t\treturn (bArr ? \"[\" : \"{\") + json + (bArr ? \"]\" : \"}\");","\t\t};","\t\t","\t\t","\t\t/**","\t\t * From some browsers (specifically IE6/7) we need special handling to work around browser","\t\t * bugs - this function is used to detect when these workarounds are needed.","\t\t *  @param {object} oSettings dataTables settings object","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnBrowserDetect( oSettings )","\t\t{","\t\t\t/* IE6/7 will oversize a width 100% element inside a scrolling element, to include the","\t\t\t * width of the scrollbar, while other browsers ensure the inner element is contained","\t\t\t * without forcing scrolling","\t\t\t */","\t\t\tvar n = $(","\t\t\t\t'&lt;div style=\"position:absolute; top:0; left:0; height:1px; width:1px; overflow:hidden\"&gt;'+","\t\t\t\t\t'&lt;div style=\"position:absolute; top:1px; left:1px; width:100px; overflow:scroll;\"&gt;'+","\t\t\t\t\t\t'&lt;div id=\"DT_BrowserTest\" style=\"width:100%; height:10px;\"&gt;&lt;/div&gt;'+","\t\t\t\t\t'&lt;/div&gt;'+","\t\t\t\t'&lt;/div&gt;')[0];","\t\t","\t\t\tdocument.body.appendChild( n );","\t\t\toSettings.oBrowser.bScrollOversize = $('#DT_BrowserTest', n)[0].offsetWidth === 100 ? true : false;","\t\t\tdocument.body.removeChild( n );","\t\t}","\t\t","","\t\t/**","\t\t * Perform a jQuery selector action on the table's TR elements (from the tbody) and","\t\t * return the resulting jQuery object.","\t\t *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on","\t\t *  @param {object} [oOpts] Optional parameters for modifying the rows to be included","\t\t *  @param {string} [oOpts.filter=none] Select TR elements that meet the current filter","\t\t *    criterion (\"applied\") or all TR elements (i.e. no filter).","\t\t *  @param {string} [oOpts.order=current] Order of the TR elements in the processed array.","\t\t *    Can be either 'current', whereby the current sorting of the table is used, or","\t\t *    'original' whereby the original order the data was read into the table is used.","\t\t *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page","\t\t *    (\"current\") or not (\"all\"). If 'current' is given, then order is assumed to be ","\t\t *    'current' and filter is 'applied', regardless of what they might be given as.","\t\t *  @returns {object} jQuery object, filtered by the given selector.","\t\t *  @dtopt API","\t\t *","\t\t *  @example","\t\t *    $(document).ready(function() {","\t\t *      var oTable = $('#example').dataTable();","\t\t *","\t\t *      // Highlight every second row","\t\t *      oTable.$('tr:odd').css('backgroundColor', 'blue');","\t\t *    } );","\t\t *","\t\t *  @example","\t\t *    $(document).ready(function() {","\t\t *      var oTable = $('#example').dataTable();","\t\t *","\t\t *      // Filter to rows with 'Webkit' in them, add a background colour and then","\t\t *      // remove the filter, thus highlighting the 'Webkit' rows only.","\t\t *      oTable.fnFilter('Webkit');","\t\t *      oTable.$('tr', {\"filter\": \"applied\"}).css('backgroundColor', 'blue');","\t\t *      oTable.fnFilter('');","\t\t *    } );","\t\t */","\t\tthis.$ = function ( sSelector, oOpts )","\t\t{","\t\t\tvar i, iLen, a = [], tr;","\t\t\tvar oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );","\t\t\tvar aoData = oSettings.aoData;","\t\t\tvar aiDisplay = oSettings.aiDisplay;","\t\t\tvar aiDisplayMaster = oSettings.aiDisplayMaster;","\t\t","\t\t\tif ( !oOpts )","\t\t\t{","\t\t\t\toOpts = {};","\t\t\t}","\t\t","\t\t\toOpts = $.extend( {}, {","\t\t\t\t\"filter\": \"none\", // applied","\t\t\t\t\"order\": \"current\", // \"original\"","\t\t\t\t\"page\": \"all\" // current","\t\t\t}, oOpts );","\t\t","\t\t\t// Current page implies that order=current and fitler=applied, since it is fairly","\t\t\t// senseless otherwise","\t\t\tif ( oOpts.page == 'current' )","\t\t\t{","\t\t\t\tfor ( i=oSettings._iDisplayStart, iLen=oSettings.fnDisplayEnd() ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\ttr = aoData[ aiDisplay[i] ].nTr;","\t\t\t\t\tif ( tr )","\t\t\t\t\t{","\t\t\t\t\t\ta.push( tr );","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t\telse if ( oOpts.order == \"current\" &amp;&amp; oOpts.filter == \"none\" )","\t\t\t{","\t\t\t\tfor ( i=0, iLen=aiDisplayMaster.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\ttr = aoData[ aiDisplayMaster[i] ].nTr;","\t\t\t\t\tif ( tr )","\t\t\t\t\t{","\t\t\t\t\t\ta.push( tr );","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t\telse if ( oOpts.order == \"current\" &amp;&amp; oOpts.filter == \"applied\" )","\t\t\t{","\t\t\t\tfor ( i=0, iLen=aiDisplay.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\ttr = aoData[ aiDisplay[i] ].nTr;","\t\t\t\t\tif ( tr )","\t\t\t\t\t{","\t\t\t\t\t\ta.push( tr );","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t\telse if ( oOpts.order == \"original\" &amp;&amp; oOpts.filter == \"none\" )","\t\t\t{","\t\t\t\tfor ( i=0, iLen=aoData.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\ttr = aoData[ i ].nTr ;","\t\t\t\t\tif ( tr )","\t\t\t\t\t{","\t\t\t\t\t\ta.push( tr );","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t\telse if ( oOpts.order == \"original\" &amp;&amp; oOpts.filter == \"applied\" )","\t\t\t{","\t\t\t\tfor ( i=0, iLen=aoData.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\ttr = aoData[ i ].nTr;","\t\t\t\t\tif ( $.inArray( i, aiDisplay ) !== -1 &amp;&amp; tr )","\t\t\t\t\t{","\t\t\t\t\t\ta.push( tr );","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\t_fnLog( oSettings, 1, \"Unknown selection options\" );","\t\t\t}","\t\t","\t\t\t/* We need to filter on the TR elements and also 'find' in their descendants","\t\t\t * to make the selector act like it would in a full table - so we need","\t\t\t * to build both results and then combine them together","\t\t\t */","\t\t\tvar jqA = $(a);","\t\t\tvar jqTRs = jqA.filter( sSelector );","\t\t\tvar jqDescendants = jqA.find( sSelector );","\t\t","\t\t\treturn $( [].concat($.makeArray(jqTRs), $.makeArray(jqDescendants)) );","\t\t};","\t\t","\t\t","\t\t/**","\t\t * Almost identical to $ in operation, but in this case returns the data for the matched","\t\t * rows - as such, the jQuery selector used should match TR row nodes or TD/TH cell nodes","\t\t * rather than any descendants, so the data can be obtained for the row/cell. If matching","\t\t * rows are found, the data returned is the original data array/object that was used to  ","\t\t * create the row (or a generated array if from a DOM source).","\t\t *","\t\t * This method is often useful in-combination with $ where both functions are given the","\t\t * same parameters and the array indexes will match identically.","\t\t *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on","\t\t *  @param {object} [oOpts] Optional parameters for modifying the rows to be included","\t\t *  @param {string} [oOpts.filter=none] Select elements that meet the current filter","\t\t *    criterion (\"applied\") or all elements (i.e. no filter).","\t\t *  @param {string} [oOpts.order=current] Order of the data in the processed array.","\t\t *    Can be either 'current', whereby the current sorting of the table is used, or","\t\t *    'original' whereby the original order the data was read into the table is used.","\t\t *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page","\t\t *    (\"current\") or not (\"all\"). If 'current' is given, then order is assumed to be ","\t\t *    'current' and filter is 'applied', regardless of what they might be given as.","\t\t *  @returns {array} Data for the matched elements. If any elements, as a result of the","\t\t *    selector, were not TR, TD or TH elements in the DataTable, they will have a null ","\t\t *    entry in the array.","\t\t *  @dtopt API","\t\t *","\t\t *  @example","\t\t *    $(document).ready(function() {","\t\t *      var oTable = $('#example').dataTable();","\t\t *","\t\t *      // Get the data from the first row in the table","\t\t *      var data = oTable._('tr:first');","\t\t *","\t\t *      // Do something useful with the data","\t\t *      alert( \"First cell is: \"+data[0] );","\t\t *    } );","\t\t *","\t\t *  @example","\t\t *    $(document).ready(function() {","\t\t *      var oTable = $('#example').dataTable();","\t\t *","\t\t *      // Filter to 'Webkit' and get all data for ","\t\t *      oTable.fnFilter('Webkit');","\t\t *      var data = oTable._('tr', {\"filter\": \"applied\"});","\t\t *      ","\t\t *      // Do something with the data","\t\t *      alert( data.length+\" rows matched the filter\" );","\t\t *    } );","\t\t */","\t\tthis._ = function ( sSelector, oOpts )","\t\t{","\t\t\tvar aOut = [];","\t\t\tvar i, iLen, iIndex;","\t\t\tvar aTrs = this.$( sSelector, oOpts );","\t\t","\t\t\tfor ( i=0, iLen=aTrs.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\taOut.push( this.fnGetData(aTrs[i]) );","\t\t\t}","\t\t","\t\t\treturn aOut;","\t\t};","\t\t","\t\t","\t\t/**","\t\t * Add a single new row or multiple rows of data to the table. Please note","\t\t * that this is suitable for client-side processing only - if you are using ","\t\t * server-side processing (i.e. \"bServerSide\": true), then to add data, you","\t\t * must add it to the data source, i.e. the server-side, through an Ajax call.","\t\t *  @param {array|object} mData The data to be added to the table. This can be:","\t\t *    &lt;ul&gt;","\t\t *      &lt;li&gt;1D array of data - add a single row with the data provided&lt;/li&gt;","\t\t *      &lt;li&gt;2D array of arrays - add multiple rows in a single call&lt;/li&gt;","\t\t *      &lt;li&gt;object - data object when using &lt;i&gt;mData&lt;/i&gt;&lt;/li&gt;","\t\t *      &lt;li&gt;array of objects - multiple data objects when using &lt;i&gt;mData&lt;/i&gt;&lt;/li&gt;","\t\t *    &lt;/ul&gt;","\t\t *  @param {bool} [bRedraw=true] redraw the table or not","\t\t *  @returns {array} An array of integers, representing the list of indexes in ","\t\t *    &lt;i&gt;aoData&lt;/i&gt; ({@link DataTable.models.oSettings}) that have been added to ","\t\t *    the table.","\t\t *  @dtopt API","\t\t *","\t\t *  @example","\t\t *    // Global var for counter","\t\t *    var giCount = 2;","\t\t *    ","\t\t *    $(document).ready(function() {","\t\t *      $('#example').dataTable();","\t\t *    } );","\t\t *    ","\t\t *    function fnClickAddRow() {","\t\t *      $('#example').dataTable().fnAddData( [","\t\t *        giCount+\".1\",","\t\t *        giCount+\".2\",","\t\t *        giCount+\".3\",","\t\t *        giCount+\".4\" ]","\t\t *      );","\t\t *        ","\t\t *      giCount++;","\t\t *    }","\t\t */","\t\tthis.fnAddData = function( mData, bRedraw )","\t\t{","\t\t\tif ( mData.length === 0 )","\t\t\t{","\t\t\t\treturn [];","\t\t\t}","\t\t\t","\t\t\tvar aiReturn = [];","\t\t\tvar iTest;","\t\t\t","\t\t\t/* Find settings from table node */","\t\t\tvar oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );","\t\t\t","\t\t\t/* Check if we want to add multiple rows or not */","\t\t\tif ( typeof mData[0] === \"object\" &amp;&amp; mData[0] !== null )","\t\t\t{","\t\t\t\tfor ( var i=0 ; i&lt;mData.length ; i++ )","\t\t\t\t{","\t\t\t\t\tiTest = _fnAddData( oSettings, mData[i] );","\t\t\t\t\tif ( iTest == -1 )","\t\t\t\t\t{","\t\t\t\t\t\treturn aiReturn;","\t\t\t\t\t}","\t\t\t\t\taiReturn.push( iTest );","\t\t\t\t}","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\tiTest = _fnAddData( oSettings, mData );","\t\t\t\tif ( iTest == -1 )","\t\t\t\t{","\t\t\t\t\treturn aiReturn;","\t\t\t\t}","\t\t\t\taiReturn.push( iTest );","\t\t\t}","\t\t\t","\t\t\toSettings.aiDisplay = oSettings.aiDisplayMaster.slice();","\t\t\t","\t\t\tif ( bRedraw === undefined || bRedraw )","\t\t\t{","\t\t\t\t_fnReDraw( oSettings );","\t\t\t}","\t\t\treturn aiReturn;","\t\t};","\t\t","\t\t","\t\t/**","\t\t * This function will make DataTables recalculate the column sizes, based on the data ","\t\t * contained in the table and the sizes applied to the columns (in the DOM, CSS or ","\t\t * through the sWidth parameter). This can be useful when the width of the table's ","\t\t * parent element changes (for example a window resize).","\t\t *  @param {boolean} [bRedraw=true] Redraw the table or not, you will typically want to","\t\t *  @dtopt API","\t\t *","\t\t *  @example","\t\t *    $(document).ready(function() {","\t\t *      var oTable = $('#example').dataTable( {","\t\t *        \"sScrollY\": \"200px\",","\t\t *        \"bPaginate\": false","\t\t *      } );","\t\t *      ","\t\t *      $(window).bind('resize', function () {","\t\t *        oTable.fnAdjustColumnSizing();","\t\t *      } );","\t\t *    } );","\t\t */","\t\tthis.fnAdjustColumnSizing = function ( bRedraw )","\t\t{","\t\t\tvar oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);","\t\t\t_fnAdjustColumnSizing( oSettings );","\t\t\t","\t\t\tif ( bRedraw === undefined || bRedraw )","\t\t\t{","\t\t\t\tthis.fnDraw( false );","\t\t\t}","\t\t\telse if ( oSettings.oScroll.sX !== \"\" || oSettings.oScroll.sY !== \"\" )","\t\t\t{","\t\t\t\t/* If not redrawing, but scrolling, we want to apply the new column sizes anyway */","\t\t\t\tthis.oApi._fnScrollDraw(oSettings);","\t\t\t}","\t\t};","\t\t","\t\t","\t\t/**","\t\t * Quickly and simply clear a table","\t\t *  @param {bool} [bRedraw=true] redraw the table or not","\t\t *  @dtopt API","\t\t *","\t\t *  @example","\t\t *    $(document).ready(function() {","\t\t *      var oTable = $('#example').dataTable();","\t\t *      ","\t\t *      // Immediately 'nuke' the current rows (perhaps waiting for an Ajax callback...)","\t\t *      oTable.fnClearTable();","\t\t *    } );","\t\t */","\t\tthis.fnClearTable = function( bRedraw )","\t\t{","\t\t\t/* Find settings from table node */","\t\t\tvar oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );","\t\t\t_fnClearTable( oSettings );","\t\t\t","\t\t\tif ( bRedraw === undefined || bRedraw )","\t\t\t{","\t\t\t\t_fnDraw( oSettings );","\t\t\t}","\t\t};","\t\t","\t\t","\t\t/**","\t\t * The exact opposite of 'opening' a row, this function will close any rows which ","\t\t * are currently 'open'.","\t\t *  @param {node} nTr the table row to 'close'","\t\t *  @returns {int} 0 on success, or 1 if failed (can't find the row)","\t\t *  @dtopt API","\t\t *","\t\t *  @example","\t\t *    $(document).ready(function() {","\t\t *      var oTable;","\t\t *      ","\t\t *      // 'open' an information row when a row is clicked on","\t\t *      $('#example tbody tr').click( function () {","\t\t *        if ( oTable.fnIsOpen(this) ) {","\t\t *          oTable.fnClose( this );","\t\t *        } else {","\t\t *          oTable.fnOpen( this, \"Temporary row opened\", \"info_row\" );","\t\t *        }","\t\t *      } );","\t\t *      ","\t\t *      oTable = $('#example').dataTable();","\t\t *    } );","\t\t */","\t\tthis.fnClose = function( nTr )","\t\t{","\t\t\t/* Find settings from table node */","\t\t\tvar oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );","\t\t\t","\t\t\tfor ( var i=0 ; i&lt;oSettings.aoOpenRows.length ; i++ )","\t\t\t{","\t\t\t\tif ( oSettings.aoOpenRows[i].nParent == nTr )","\t\t\t\t{","\t\t\t\t\tvar nTrParent = oSettings.aoOpenRows[i].nTr.parentNode;","\t\t\t\t\tif ( nTrParent )","\t\t\t\t\t{","\t\t\t\t\t\t/* Remove it if it is currently on display */","\t\t\t\t\t\tnTrParent.removeChild( oSettings.aoOpenRows[i].nTr );","\t\t\t\t\t}","\t\t\t\t\toSettings.aoOpenRows.splice( i, 1 );","\t\t\t\t\treturn 0;","\t\t\t\t}","\t\t\t}","\t\t\treturn 1;","\t\t};","\t\t","\t\t","\t\t/**","\t\t * Remove a row for the table","\t\t *  @param {mixed} mTarget The index of the row from aoData to be deleted, or","\t\t *    the TR element you want to delete","\t\t *  @param {function|null} [fnCallBack] Callback function","\t\t *  @param {bool} [bRedraw=true] Redraw the table or not","\t\t *  @returns {array} The row that was deleted","\t\t *  @dtopt API","\t\t *","\t\t *  @example","\t\t *    $(document).ready(function() {","\t\t *      var oTable = $('#example').dataTable();","\t\t *      ","\t\t *      // Immediately remove the first row","\t\t *      oTable.fnDeleteRow( 0 );","\t\t *    } );","\t\t */","\t\tthis.fnDeleteRow = function( mTarget, fnCallBack, bRedraw )","\t\t{","\t\t\t/* Find settings from table node */","\t\t\tvar oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );","\t\t\tvar i, iLen, iAODataIndex;","\t\t\t","\t\t\tiAODataIndex = (typeof mTarget === 'object') ? ","\t\t\t\t_fnNodeToDataIndex(oSettings, mTarget) : mTarget;","\t\t\t","\t\t\t/* Return the data array from this row */","\t\t\tvar oData = oSettings.aoData.splice( iAODataIndex, 1 );","\t\t","\t\t\t/* Update the _DT_RowIndex parameter */","\t\t\tfor ( i=0, iLen=oSettings.aoData.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\tif ( oSettings.aoData[i].nTr !== null )","\t\t\t\t{","\t\t\t\t\toSettings.aoData[i].nTr._DT_RowIndex = i;","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\t/* Remove the target row from the search array */","\t\t\tvar iDisplayIndex = $.inArray( iAODataIndex, oSettings.aiDisplay );","\t\t\toSettings.asDataSearch.splice( iDisplayIndex, 1 );","\t\t\t","\t\t\t/* Delete from the display arrays */","\t\t\t_fnDeleteIndex( oSettings.aiDisplayMaster, iAODataIndex );","\t\t\t_fnDeleteIndex( oSettings.aiDisplay, iAODataIndex );","\t\t\t","\t\t\t/* If there is a user callback function - call it */","\t\t\tif ( typeof fnCallBack === \"function\" )","\t\t\t{","\t\t\t\tfnCallBack.call( this, oSettings, oData );","\t\t\t}","\t\t\t","\t\t\t/* Check for an 'overflow' they case for displaying the table */","\t\t\tif ( oSettings._iDisplayStart &gt;= oSettings.fnRecordsDisplay() )","\t\t\t{","\t\t\t\toSettings._iDisplayStart -= oSettings._iDisplayLength;","\t\t\t\tif ( oSettings._iDisplayStart &lt; 0 )","\t\t\t\t{","\t\t\t\t\toSettings._iDisplayStart = 0;","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\tif ( bRedraw === undefined || bRedraw )","\t\t\t{","\t\t\t\t_fnCalculateEnd( oSettings );","\t\t\t\t_fnDraw( oSettings );","\t\t\t}","\t\t\t","\t\t\treturn oData;","\t\t};","\t\t","\t\t","\t\t/**","\t\t * Restore the table to it's original state in the DOM by removing all of DataTables ","\t\t * enhancements, alterations to the DOM structure of the table and event listeners.","\t\t *  @param {boolean} [bRemove=false] Completely remove the table from the DOM","\t\t *  @dtopt API","\t\t *","\t\t *  @example","\t\t *    $(document).ready(function() {","\t\t *      // This example is fairly pointless in reality, but shows how fnDestroy can be used","\t\t *      var oTable = $('#example').dataTable();","\t\t *      oTable.fnDestroy();","\t\t *    } );","\t\t */","\t\tthis.fnDestroy = function ( bRemove )","\t\t{","\t\t\tvar oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );","\t\t\tvar nOrig = oSettings.nTableWrapper.parentNode;","\t\t\tvar nBody = oSettings.nTBody;","\t\t\tvar i, iLen;","\t\t","\t\t\tbRemove = (bRemove===undefined) ? false : bRemove;","\t\t\t","\t\t\t/* Flag to note that the table is currently being destroyed - no action should be taken */","\t\t\toSettings.bDestroying = true;","\t\t\t","\t\t\t/* Fire off the destroy callbacks for plug-ins etc */","\t\t\t_fnCallbackFire( oSettings, \"aoDestroyCallback\", \"destroy\", [oSettings] );","\t\t","\t\t\t/* If the table is not being removed, restore the hidden columns */","\t\t\tif ( !bRemove )","\t\t\t{","\t\t\t\tfor ( i=0, iLen=oSettings.aoColumns.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\tif ( oSettings.aoColumns[i].bVisible === false )","\t\t\t\t\t{","\t\t\t\t\t\tthis.fnSetColumnVis( i, true );","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\t/* Blitz all DT events */","\t\t\t$(oSettings.nTableWrapper).find('*').andSelf().unbind('.DT');","\t\t\t","\t\t\t/* If there is an 'empty' indicator row, remove it */","\t\t\t$('tbody&gt;tr&gt;td.'+oSettings.oClasses.sRowEmpty, oSettings.nTable).parent().remove();","\t\t\t","\t\t\t/* When scrolling we had to break the table up - restore it */","\t\t\tif ( oSettings.nTable != oSettings.nTHead.parentNode )","\t\t\t{","\t\t\t\t$(oSettings.nTable).children('thead').remove();","\t\t\t\toSettings.nTable.appendChild( oSettings.nTHead );","\t\t\t}","\t\t\t","\t\t\tif ( oSettings.nTFoot &amp;&amp; oSettings.nTable != oSettings.nTFoot.parentNode )","\t\t\t{","\t\t\t\t$(oSettings.nTable).children('tfoot').remove();","\t\t\t\toSettings.nTable.appendChild( oSettings.nTFoot );","\t\t\t}","\t\t\t","\t\t\t/* Remove the DataTables generated nodes, events and classes */","\t\t\toSettings.nTable.parentNode.removeChild( oSettings.nTable );","\t\t\t$(oSettings.nTableWrapper).remove();","\t\t\t","\t\t\toSettings.aaSorting = [];","\t\t\toSettings.aaSortingFixed = [];","\t\t\t_fnSortingClasses( oSettings );","\t\t\t","\t\t\t$(_fnGetTrNodes( oSettings )).removeClass( oSettings.asStripeClasses.join(' ') );","\t\t\t","\t\t\t$('th, td', oSettings.nTHead).removeClass( [","\t\t\t\toSettings.oClasses.sSortable,","\t\t\t\toSettings.oClasses.sSortableAsc,","\t\t\t\toSettings.oClasses.sSortableDesc,","\t\t\t\toSettings.oClasses.sSortableNone ].join(' ')","\t\t\t);","\t\t\tif ( oSettings.bJUI )","\t\t\t{","\t\t\t\t$('th span.'+oSettings.oClasses.sSortIcon","\t\t\t\t\t+ ', td span.'+oSettings.oClasses.sSortIcon, oSettings.nTHead).remove();","\t\t","\t\t\t\t$('th, td', oSettings.nTHead).each( function () {","\t\t\t\t\tvar jqWrapper = $('div.'+oSettings.oClasses.sSortJUIWrapper, this);","\t\t\t\t\tvar kids = jqWrapper.contents();","\t\t\t\t\t$(this).append( kids );","\t\t\t\t\tjqWrapper.remove();","\t\t\t\t} );","\t\t\t}","\t\t\t","\t\t\t/* Add the TR elements back into the table in their original order */","\t\t\tif ( !bRemove &amp;&amp; oSettings.nTableReinsertBefore )","\t\t\t{","\t\t\t\tnOrig.insertBefore( oSettings.nTable, oSettings.nTableReinsertBefore );","\t\t\t}","\t\t\telse if ( !bRemove )","\t\t\t{","\t\t\t\tnOrig.appendChild( oSettings.nTable );","\t\t\t}","\t\t","\t\t\tfor ( i=0, iLen=oSettings.aoData.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\tif ( oSettings.aoData[i].nTr !== null )","\t\t\t\t{","\t\t\t\t\tnBody.appendChild( oSettings.aoData[i].nTr );","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\t/* Restore the width of the original table */","\t\t\tif ( oSettings.oFeatures.bAutoWidth === true )","\t\t\t{","\t\t\t  oSettings.nTable.style.width = _fnStringToCss(oSettings.sDestroyWidth);","\t\t\t}","\t\t\t","\t\t\t/* If the were originally stripe classes - then we add them back here. Note","\t\t\t * this is not fool proof (for example if not all rows had stripe classes - but","\t\t\t * it's a good effort without getting carried away","\t\t\t */","\t\t\tiLen = oSettings.asDestroyStripes.length;","\t\t\tif (iLen)","\t\t\t{","\t\t\t\tvar anRows = $(nBody).children('tr');","\t\t\t\tfor ( i=0 ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\tanRows.filter(':nth-child(' + iLen + 'n + ' + i + ')').addClass( oSettings.asDestroyStripes[i] );","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\t/* Remove the settings object from the settings array */","\t\t\tfor ( i=0, iLen=DataTable.settings.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\tif ( DataTable.settings[i] == oSettings )","\t\t\t\t{","\t\t\t\t\tDataTable.settings.splice( i, 1 );","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\t/* End it all */","\t\t\toSettings = null;","\t\t\toInit = null;","\t\t};","\t\t","\t\t","\t\t/**","\t\t * Redraw the table","\t\t *  @param {bool} [bComplete=true] Re-filter and resort (if enabled) the table before the draw.","\t\t *  @dtopt API","\t\t *","\t\t *  @example","\t\t *    $(document).ready(function() {","\t\t *      var oTable = $('#example').dataTable();","\t\t *      ","\t\t *      // Re-draw the table - you wouldn't want to do it here, but it's an example :-)","\t\t *      oTable.fnDraw();","\t\t *    } );","\t\t */","\t\tthis.fnDraw = function( bComplete )","\t\t{","\t\t\tvar oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );","\t\t\tif ( bComplete === false )","\t\t\t{","\t\t\t\t_fnCalculateEnd( oSettings );","\t\t\t\t_fnDraw( oSettings );","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\t_fnReDraw( oSettings );","\t\t\t}","\t\t};","\t\t","\t\t","\t\t/**","\t\t * Filter the input based on data","\t\t *  @param {string} sInput String to filter the table on","\t\t *  @param {int|null} [iColumn] Column to limit filtering to","\t\t *  @param {bool} [bRegex=false] Treat as regular expression or not","\t\t *  @param {bool} [bSmart=true] Perform smart filtering or not","\t\t *  @param {bool} [bShowGlobal=true] Show the input global filter in it's input box(es)","\t\t *  @param {bool} [bCaseInsensitive=true] Do case-insensitive matching (true) or not (false)","\t\t *  @dtopt API","\t\t *","\t\t *  @example","\t\t *    $(document).ready(function() {","\t\t *      var oTable = $('#example').dataTable();","\t\t *      ","\t\t *      // Sometime later - filter...","\t\t *      oTable.fnFilter( 'test string' );","\t\t *    } );","\t\t */","\t\tthis.fnFilter = function( sInput, iColumn, bRegex, bSmart, bShowGlobal, bCaseInsensitive )","\t\t{","\t\t\tvar oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );","\t\t\t","\t\t\tif ( !oSettings.oFeatures.bFilter )","\t\t\t{","\t\t\t\treturn;","\t\t\t}","\t\t\t","\t\t\tif ( bRegex === undefined || bRegex === null )","\t\t\t{","\t\t\t\tbRegex = false;","\t\t\t}","\t\t\t","\t\t\tif ( bSmart === undefined || bSmart === null )","\t\t\t{","\t\t\t\tbSmart = true;","\t\t\t}","\t\t\t","\t\t\tif ( bShowGlobal === undefined || bShowGlobal === null )","\t\t\t{","\t\t\t\tbShowGlobal = true;","\t\t\t}","\t\t\t","\t\t\tif ( bCaseInsensitive === undefined || bCaseInsensitive === null )","\t\t\t{","\t\t\t\tbCaseInsensitive = true;","\t\t\t}","\t\t\t","\t\t\tif ( iColumn === undefined || iColumn === null )","\t\t\t{","\t\t\t\t/* Global filter */","\t\t\t\t_fnFilterComplete( oSettings, {","\t\t\t\t\t\"sSearch\":sInput+\"\",","\t\t\t\t\t\"bRegex\": bRegex,","\t\t\t\t\t\"bSmart\": bSmart,","\t\t\t\t\t\"bCaseInsensitive\": bCaseInsensitive","\t\t\t\t}, 1 );","\t\t\t\t","\t\t\t\tif ( bShowGlobal &amp;&amp; oSettings.aanFeatures.f )","\t\t\t\t{","\t\t\t\t\tvar n = oSettings.aanFeatures.f;","\t\t\t\t\tfor ( var i=0, iLen=n.length ; i&lt;iLen ; i++ )","\t\t\t\t\t{","\t\t\t\t\t\t// IE9 throws an 'unknown error' if document.activeElement is used","\t\t\t\t\t\t// inside an iframe or frame...","\t\t\t\t\t\ttry {","\t\t\t\t\t\t\tif ( n[i]._DT_Input != document.activeElement )","\t\t\t\t\t\t\t{","\t\t\t\t\t\t\t\t$(n[i]._DT_Input).val( sInput );","\t\t\t\t\t\t\t}","\t\t\t\t\t\t}","\t\t\t\t\t\tcatch ( e ) {","\t\t\t\t\t\t\t$(n[i]._DT_Input).val( sInput );","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\t/* Single column filter */","\t\t\t\t$.extend( oSettings.aoPreSearchCols[ iColumn ], {","\t\t\t\t\t\"sSearch\": sInput+\"\",","\t\t\t\t\t\"bRegex\": bRegex,","\t\t\t\t\t\"bSmart\": bSmart,","\t\t\t\t\t\"bCaseInsensitive\": bCaseInsensitive","\t\t\t\t} );","\t\t\t\t_fnFilterComplete( oSettings, oSettings.oPreviousSearch, 1 );","\t\t\t}","\t\t};","\t\t","\t\t","\t\t/**","\t\t * Get the data for the whole table, an individual row or an individual cell based on the ","\t\t * provided parameters.","\t\t *  @param {int|node} [mRow] A TR row node, TD/TH cell node or an integer. If given as","\t\t *    a TR node then the data source for the whole row will be returned. If given as a","\t\t *    TD/TH cell node then iCol will be automatically calculated and the data for the","\t\t *    cell returned. If given as an integer, then this is treated as the aoData internal","\t\t *    data index for the row (see fnGetPosition) and the data for that row used.","\t\t *  @param {int} [iCol] Optional column index that you want the data of.","\t\t *  @returns {array|object|string} If mRow is undefined, then the data for all rows is","\t\t *    returned. If mRow is defined, just data for that row, and is iCol is","\t\t *    defined, only data for the designated cell is returned.","\t\t *  @dtopt API","\t\t *","\t\t *  @example","\t\t *    // Row data","\t\t *    $(document).ready(function() {","\t\t *      oTable = $('#example').dataTable();","\t\t *","\t\t *      oTable.$('tr').click( function () {","\t\t *        var data = oTable.fnGetData( this );","\t\t *        // ... do something with the array / object of data for the row","\t\t *      } );","\t\t *    } );","\t\t *","\t\t *  @example","\t\t *    // Individual cell data","\t\t *    $(document).ready(function() {","\t\t *      oTable = $('#example').dataTable();","\t\t *","\t\t *      oTable.$('td').click( function () {","\t\t *        var sData = oTable.fnGetData( this );","\t\t *        alert( 'The cell clicked on had the value of '+sData );","\t\t *      } );","\t\t *    } );","\t\t */","\t\tthis.fnGetData = function( mRow, iCol )","\t\t{","\t\t\tvar oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );","\t\t\t","\t\t\tif ( mRow !== undefined )","\t\t\t{","\t\t\t\tvar iRow = mRow;","\t\t\t\tif ( typeof mRow === 'object' )","\t\t\t\t{","\t\t\t\t\tvar sNode = mRow.nodeName.toLowerCase();","\t\t\t\t\tif (sNode === \"tr\" )","\t\t\t\t\t{","\t\t\t\t\t\tiRow = _fnNodeToDataIndex(oSettings, mRow);","\t\t\t\t\t}","\t\t\t\t\telse if ( sNode === \"td\" )","\t\t\t\t\t{","\t\t\t\t\t\tiRow = _fnNodeToDataIndex(oSettings, mRow.parentNode);","\t\t\t\t\t\tiCol = _fnNodeToColumnIndex( oSettings, iRow, mRow );","\t\t\t\t\t}","\t\t\t\t}","\t\t","\t\t\t\tif ( iCol !== undefined )","\t\t\t\t{","\t\t\t\t\treturn _fnGetCellData( oSettings, iRow, iCol, '' );","\t\t\t\t}","\t\t\t\treturn (oSettings.aoData[iRow]!==undefined) ?","\t\t\t\t\toSettings.aoData[iRow]._aData : null;","\t\t\t}","\t\t\treturn _fnGetDataMaster( oSettings );","\t\t};","\t\t","\t\t","\t\t/**","\t\t * Get an array of the TR nodes that are used in the table's body. Note that you will ","\t\t * typically want to use the '$' API method in preference to this as it is more ","\t\t * flexible.","\t\t *  @param {int} [iRow] Optional row index for the TR element you want","\t\t *  @returns {array|node} If iRow is undefined, returns an array of all TR elements","\t\t *    in the table's body, or iRow is defined, just the TR element requested.","\t\t *  @dtopt API","\t\t *","\t\t *  @example","\t\t *    $(document).ready(function() {","\t\t *      var oTable = $('#example').dataTable();","\t\t *      ","\t\t *      // Get the nodes from the table","\t\t *      var nNodes = oTable.fnGetNodes( );","\t\t *    } );","\t\t */","\t\tthis.fnGetNodes = function( iRow )","\t\t{","\t\t\tvar oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );","\t\t\t","\t\t\tif ( iRow !== undefined ) {","\t\t\t\treturn (oSettings.aoData[iRow]!==undefined) ?","\t\t\t\t\toSettings.aoData[iRow].nTr : null;","\t\t\t}","\t\t\treturn _fnGetTrNodes( oSettings );","\t\t};","\t\t","\t\t","\t\t/**","\t\t * Get the array indexes of a particular cell from it's DOM element","\t\t * and column index including hidden columns","\t\t *  @param {node} nNode this can either be a TR, TD or TH in the table's body","\t\t *  @returns {int} If nNode is given as a TR, then a single index is returned, or","\t\t *    if given as a cell, an array of [row index, column index (visible), ","\t\t *    column index (all)] is given.","\t\t *  @dtopt API","\t\t *","\t\t *  @example","\t\t *    $(document).ready(function() {","\t\t *      $('#example tbody td').click( function () {","\t\t *        // Get the position of the current data from the node","\t\t *        var aPos = oTable.fnGetPosition( this );","\t\t *        ","\t\t *        // Get the data array for this row","\t\t *        var aData = oTable.fnGetData( aPos[0] );","\t\t *        ","\t\t *        // Update the data array and return the value","\t\t *        aData[ aPos[1] ] = 'clicked';","\t\t *        this.innerHTML = 'clicked';","\t\t *      } );","\t\t *      ","\t\t *      // Init DataTables","\t\t *      oTable = $('#example').dataTable();","\t\t *    } );","\t\t */","\t\tthis.fnGetPosition = function( nNode )","\t\t{","\t\t\tvar oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );","\t\t\tvar sNodeName = nNode.nodeName.toUpperCase();","\t\t\t","\t\t\tif ( sNodeName == \"TR\" )","\t\t\t{","\t\t\t\treturn _fnNodeToDataIndex(oSettings, nNode);","\t\t\t}","\t\t\telse if ( sNodeName == \"TD\" || sNodeName == \"TH\" )","\t\t\t{","\t\t\t\tvar iDataIndex = _fnNodeToDataIndex( oSettings, nNode.parentNode );","\t\t\t\tvar iColumnIndex = _fnNodeToColumnIndex( oSettings, iDataIndex, nNode );","\t\t\t\treturn [ iDataIndex, _fnColumnIndexToVisible(oSettings, iColumnIndex ), iColumnIndex ];","\t\t\t}","\t\t\treturn null;","\t\t};","\t\t","\t\t","\t\t/**","\t\t * Check to see if a row is 'open' or not.","\t\t *  @param {node} nTr the table row to check","\t\t *  @returns {boolean} true if the row is currently open, false otherwise","\t\t *  @dtopt API","\t\t *","\t\t *  @example","\t\t *    $(document).ready(function() {","\t\t *      var oTable;","\t\t *      ","\t\t *      // 'open' an information row when a row is clicked on","\t\t *      $('#example tbody tr').click( function () {","\t\t *        if ( oTable.fnIsOpen(this) ) {","\t\t *          oTable.fnClose( this );","\t\t *        } else {","\t\t *          oTable.fnOpen( this, \"Temporary row opened\", \"info_row\" );","\t\t *        }","\t\t *      } );","\t\t *      ","\t\t *      oTable = $('#example').dataTable();","\t\t *    } );","\t\t */","\t\tthis.fnIsOpen = function( nTr )","\t\t{","\t\t\tvar oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );","\t\t\tvar aoOpenRows = oSettings.aoOpenRows;","\t\t\t","\t\t\tfor ( var i=0 ; i&lt;oSettings.aoOpenRows.length ; i++ )","\t\t\t{","\t\t\t\tif ( oSettings.aoOpenRows[i].nParent == nTr )","\t\t\t\t{","\t\t\t\t\treturn true;","\t\t\t\t}","\t\t\t}","\t\t\treturn false;","\t\t};","\t\t","\t\t","\t\t/**","\t\t * This function will place a new row directly after a row which is currently ","\t\t * on display on the page, with the HTML contents that is passed into the ","\t\t * function. This can be used, for example, to ask for confirmation that a ","\t\t * particular record should be deleted.","\t\t *  @param {node} nTr The table row to 'open'","\t\t *  @param {string|node|jQuery} mHtml The HTML to put into the row","\t\t *  @param {string} sClass Class to give the new TD cell","\t\t *  @returns {node} The row opened. Note that if the table row passed in as the","\t\t *    first parameter, is not found in the table, this method will silently","\t\t *    return.","\t\t *  @dtopt API","\t\t *","\t\t *  @example","\t\t *    $(document).ready(function() {","\t\t *      var oTable;","\t\t *      ","\t\t *      // 'open' an information row when a row is clicked on","\t\t *      $('#example tbody tr').click( function () {","\t\t *        if ( oTable.fnIsOpen(this) ) {","\t\t *          oTable.fnClose( this );","\t\t *        } else {","\t\t *          oTable.fnOpen( this, \"Temporary row opened\", \"info_row\" );","\t\t *        }","\t\t *      } );","\t\t *      ","\t\t *      oTable = $('#example').dataTable();","\t\t *    } );","\t\t */","\t\tthis.fnOpen = function( nTr, mHtml, sClass )","\t\t{","\t\t\t/* Find settings from table node */","\t\t\tvar oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );","\t\t","\t\t\t/* Check that the row given is in the table */","\t\t\tvar nTableRows = _fnGetTrNodes( oSettings );","\t\t\tif ( $.inArray(nTr, nTableRows) === -1 )","\t\t\t{","\t\t\t\treturn;","\t\t\t}","\t\t\t","\t\t\t/* the old open one if there is one */","\t\t\tthis.fnClose( nTr );","\t\t\t","\t\t\tvar nNewRow = document.createElement(\"tr\");","\t\t\tvar nNewCell = document.createElement(\"td\");","\t\t\tnNewRow.appendChild( nNewCell );","\t\t\tnNewCell.className = sClass;","\t\t\tnNewCell.colSpan = _fnVisbleColumns( oSettings );","\t\t","\t\t\tif (typeof mHtml === \"string\")","\t\t\t{","\t\t\t\tnNewCell.innerHTML = mHtml;","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\t$(nNewCell).html( mHtml );","\t\t\t}","\t\t","\t\t\t/* If the nTr isn't on the page at the moment - then we don't insert at the moment */","\t\t\tvar nTrs = $('tr', oSettings.nTBody);","\t\t\tif ( $.inArray(nTr, nTrs) != -1  )","\t\t\t{","\t\t\t\t$(nNewRow).insertAfter(nTr);","\t\t\t}","\t\t\t","\t\t\toSettings.aoOpenRows.push( {","\t\t\t\t\"nTr\": nNewRow,","\t\t\t\t\"nParent\": nTr","\t\t\t} );","\t\t\t","\t\t\treturn nNewRow;","\t\t};","\t\t","\t\t","\t\t/**","\t\t * Change the pagination - provides the internal logic for pagination in a simple API ","\t\t * function. With this function you can have a DataTables table go to the next, ","\t\t * previous, first or last pages.","\t\t *  @param {string|int} mAction Paging action to take: \"first\", \"previous\", \"next\" or \"last\"","\t\t *    or page number to jump to (integer), note that page 0 is the first page.","\t\t *  @param {bool} [bRedraw=true] Redraw the table or not","\t\t *  @dtopt API","\t\t *","\t\t *  @example","\t\t *    $(document).ready(function() {","\t\t *      var oTable = $('#example').dataTable();","\t\t *      oTable.fnPageChange( 'next' );","\t\t *    } );","\t\t */","\t\tthis.fnPageChange = function ( mAction, bRedraw )","\t\t{","\t\t\tvar oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );","\t\t\t_fnPageChange( oSettings, mAction );","\t\t\t_fnCalculateEnd( oSettings );","\t\t\t","\t\t\tif ( bRedraw === undefined || bRedraw )","\t\t\t{","\t\t\t\t_fnDraw( oSettings );","\t\t\t}","\t\t};","\t\t","\t\t","\t\t/**","\t\t * Show a particular column","\t\t *  @param {int} iCol The column whose display should be changed","\t\t *  @param {bool} bShow Show (true) or hide (false) the column","\t\t *  @param {bool} [bRedraw=true] Redraw the table or not","\t\t *  @dtopt API","\t\t *","\t\t *  @example","\t\t *    $(document).ready(function() {","\t\t *      var oTable = $('#example').dataTable();","\t\t *      ","\t\t *      // Hide the second column after initialisation","\t\t *      oTable.fnSetColumnVis( 1, false );","\t\t *    } );","\t\t */","\t\tthis.fnSetColumnVis = function ( iCol, bShow, bRedraw )","\t\t{","\t\t\tvar oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );","\t\t\tvar i, iLen;","\t\t\tvar aoColumns = oSettings.aoColumns;","\t\t\tvar aoData = oSettings.aoData;","\t\t\tvar nTd, bAppend, iBefore;","\t\t\t","\t\t\t/* No point in doing anything if we are requesting what is already true */","\t\t\tif ( aoColumns[iCol].bVisible == bShow )","\t\t\t{","\t\t\t\treturn;","\t\t\t}","\t\t\t","\t\t\t/* Show the column */","\t\t\tif ( bShow )","\t\t\t{","\t\t\t\tvar iInsert = 0;","\t\t\t\tfor ( i=0 ; i&lt;iCol ; i++ )","\t\t\t\t{","\t\t\t\t\tif ( aoColumns[i].bVisible )","\t\t\t\t\t{","\t\t\t\t\t\tiInsert++;","\t\t\t\t\t}","\t\t\t\t}","\t\t\t\t","\t\t\t\t/* Need to decide if we should use appendChild or insertBefore */","\t\t\t\tbAppend = (iInsert &gt;= _fnVisbleColumns( oSettings ));","\t\t","\t\t\t\t/* Which coloumn should we be inserting before? */","\t\t\t\tif ( !bAppend )","\t\t\t\t{","\t\t\t\t\tfor ( i=iCol ; i&lt;aoColumns.length ; i++ )","\t\t\t\t\t{","\t\t\t\t\t\tif ( aoColumns[i].bVisible )","\t\t\t\t\t\t{","\t\t\t\t\t\t\tiBefore = i;","\t\t\t\t\t\t\tbreak;","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t}","\t\t","\t\t\t\tfor ( i=0, iLen=aoData.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\tif ( aoData[i].nTr !== null )","\t\t\t\t\t{","\t\t\t\t\t\tif ( bAppend )","\t\t\t\t\t\t{","\t\t\t\t\t\t\taoData[i].nTr.appendChild( ","\t\t\t\t\t\t\t\taoData[i]._anHidden[iCol]","\t\t\t\t\t\t\t);","\t\t\t\t\t\t}","\t\t\t\t\t\telse","\t\t\t\t\t\t{","\t\t\t\t\t\t\taoData[i].nTr.insertBefore(","\t\t\t\t\t\t\t\taoData[i]._anHidden[iCol], ","\t\t\t\t\t\t\t\t_fnGetTdNodes( oSettings, i )[iBefore] );","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\t/* Remove a column from display */","\t\t\t\tfor ( i=0, iLen=aoData.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\tif ( aoData[i].nTr !== null )","\t\t\t\t\t{","\t\t\t\t\t\tnTd = _fnGetTdNodes( oSettings, i )[iCol];","\t\t\t\t\t\taoData[i]._anHidden[iCol] = nTd;","\t\t\t\t\t\tnTd.parentNode.removeChild( nTd );","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t","\t\t\t/* Clear to set the visible flag */","\t\t\taoColumns[iCol].bVisible = bShow;","\t\t","\t\t\t/* Redraw the header and footer based on the new column visibility */","\t\t\t_fnDrawHead( oSettings, oSettings.aoHeader );","\t\t\tif ( oSettings.nTFoot )","\t\t\t{","\t\t\t\t_fnDrawHead( oSettings, oSettings.aoFooter );","\t\t\t}","\t\t\t","\t\t\t/* If there are any 'open' rows, then we need to alter the colspan for this col change */","\t\t\tfor ( i=0, iLen=oSettings.aoOpenRows.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\toSettings.aoOpenRows[i].nTr.colSpan = _fnVisbleColumns( oSettings );","\t\t\t}","\t\t\t","\t\t\t/* Do a redraw incase anything depending on the table columns needs it ","\t\t\t * (built-in: scrolling) ","\t\t\t */","\t\t\tif ( bRedraw === undefined || bRedraw )","\t\t\t{","\t\t\t\t_fnAdjustColumnSizing( oSettings );","\t\t\t\t_fnDraw( oSettings );","\t\t\t}","\t\t\t","\t\t\t_fnSaveState( oSettings );","\t\t};","\t\t","\t\t","\t\t/**","\t\t * Get the settings for a particular table for external manipulation","\t\t *  @returns {object} DataTables settings object. See ","\t\t *    {@link DataTable.models.oSettings}","\t\t *  @dtopt API","\t\t *","\t\t *  @example","\t\t *    $(document).ready(function() {","\t\t *      var oTable = $('#example').dataTable();","\t\t *      var oSettings = oTable.fnSettings();","\t\t *      ","\t\t *      // Show an example parameter from the settings","\t\t *      alert( oSettings._iDisplayStart );","\t\t *    } );","\t\t */","\t\tthis.fnSettings = function()","\t\t{","\t\t\treturn _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );","\t\t};","\t\t","\t\t","\t\t/**","\t\t * Sort the table by a particular column","\t\t *  @param {int} iCol the data index to sort on. Note that this will not match the ","\t\t *    'display index' if you have hidden data entries","\t\t *  @dtopt API","\t\t *","\t\t *  @example","\t\t *    $(document).ready(function() {","\t\t *      var oTable = $('#example').dataTable();","\t\t *      ","\t\t *      // Sort immediately with columns 0 and 1","\t\t *      oTable.fnSort( [ [0,'asc'], [1,'asc'] ] );","\t\t *    } );","\t\t */","\t\tthis.fnSort = function( aaSort )","\t\t{","\t\t\tvar oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );","\t\t\toSettings.aaSorting = aaSort;","\t\t\t_fnSort( oSettings );","\t\t};","\t\t","\t\t","\t\t/**","\t\t * Attach a sort listener to an element for a given column","\t\t *  @param {node} nNode the element to attach the sort listener to","\t\t *  @param {int} iColumn the column that a click on this node will sort on","\t\t *  @param {function} [fnCallback] callback function when sort is run","\t\t *  @dtopt API","\t\t *","\t\t *  @example","\t\t *    $(document).ready(function() {","\t\t *      var oTable = $('#example').dataTable();","\t\t *      ","\t\t *      // Sort on column 1, when 'sorter' is clicked on","\t\t *      oTable.fnSortListener( document.getElementById('sorter'), 1 );","\t\t *    } );","\t\t */","\t\tthis.fnSortListener = function( nNode, iColumn, fnCallback )","\t\t{","\t\t\t_fnSortAttachListener( _fnSettingsFromNode( this[DataTable.ext.iApiIndex] ), nNode, iColumn,","\t\t\t \tfnCallback );","\t\t};","\t\t","\t\t","\t\t/**","\t\t * Update a table cell or row - this method will accept either a single value to","\t\t * update the cell with, an array of values with one element for each column or","\t\t * an object in the same format as the original data source. The function is","\t\t * self-referencing in order to make the multi column updates easier.","\t\t *  @param {object|array|string} mData Data to update the cell/row with","\t\t *  @param {node|int} mRow TR element you want to update or the aoData index","\t\t *  @param {int} [iColumn] The column to update (not used of mData is an array or object)","\t\t *  @param {bool} [bRedraw=true] Redraw the table or not","\t\t *  @param {bool} [bAction=true] Perform pre-draw actions or not","\t\t *  @returns {int} 0 on success, 1 on error","\t\t *  @dtopt API","\t\t *","\t\t *  @example","\t\t *    $(document).ready(function() {","\t\t *      var oTable = $('#example').dataTable();","\t\t *      oTable.fnUpdate( 'Example update', 0, 0 ); // Single cell","\t\t *      oTable.fnUpdate( ['a', 'b', 'c', 'd', 'e'], 1, 0 ); // Row","\t\t *    } );","\t\t */","\t\tthis.fnUpdate = function( mData, mRow, iColumn, bRedraw, bAction )","\t\t{","\t\t\tvar oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );","\t\t\tvar i, iLen, sDisplay;","\t\t\tvar iRow = (typeof mRow === 'object') ? ","\t\t\t\t_fnNodeToDataIndex(oSettings, mRow) : mRow;","\t\t\t","\t\t\tif ( $.isArray(mData) &amp;&amp; iColumn === undefined )","\t\t\t{","\t\t\t\t/* Array update - update the whole row */","\t\t\t\toSettings.aoData[iRow]._aData = mData.slice();","\t\t\t\t","\t\t\t\t/* Flag to the function that we are recursing */","\t\t\t\tfor ( i=0 ; i&lt;oSettings.aoColumns.length ; i++ )","\t\t\t\t{","\t\t\t\t\tthis.fnUpdate( _fnGetCellData( oSettings, iRow, i ), iRow, i, false, false );","\t\t\t\t}","\t\t\t}","\t\t\telse if ( $.isPlainObject(mData) &amp;&amp; iColumn === undefined )","\t\t\t{","\t\t\t\t/* Object update - update the whole row - assume the developer gets the object right */","\t\t\t\toSettings.aoData[iRow]._aData = $.extend( true, {}, mData );","\t\t","\t\t\t\tfor ( i=0 ; i&lt;oSettings.aoColumns.length ; i++ )","\t\t\t\t{","\t\t\t\t\tthis.fnUpdate( _fnGetCellData( oSettings, iRow, i ), iRow, i, false, false );","\t\t\t\t}","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\t/* Individual cell update */","\t\t\t\t_fnSetCellData( oSettings, iRow, iColumn, mData );","\t\t\t\tsDisplay = _fnGetCellData( oSettings, iRow, iColumn, 'display' );","\t\t\t\t","\t\t\t\tvar oCol = oSettings.aoColumns[iColumn];","\t\t\t\tif ( oCol.fnRender !== null )","\t\t\t\t{","\t\t\t\t\tsDisplay = _fnRender( oSettings, iRow, iColumn );","\t\t\t\t\tif ( oCol.bUseRendered )","\t\t\t\t\t{","\t\t\t\t\t\t_fnSetCellData( oSettings, iRow, iColumn, sDisplay );","\t\t\t\t\t}","\t\t\t\t}","\t\t\t\t","\t\t\t\tif ( oSettings.aoData[iRow].nTr !== null )","\t\t\t\t{","\t\t\t\t\t/* Do the actual HTML update */","\t\t\t\t\t_fnGetTdNodes( oSettings, iRow )[iColumn].innerHTML = sDisplay;","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\t/* Modify the search index for this row (strictly this is likely not needed, since fnReDraw","\t\t\t * will rebuild the search array - however, the redraw might be disabled by the user)","\t\t\t */","\t\t\tvar iDisplayIndex = $.inArray( iRow, oSettings.aiDisplay );","\t\t\toSettings.asDataSearch[iDisplayIndex] = _fnBuildSearchRow(","\t\t\t\toSettings, ","\t\t\t\t_fnGetRowData( oSettings, iRow, 'filter', _fnGetColumns( oSettings, 'bSearchable' ) )","\t\t\t);","\t\t\t","\t\t\t/* Perform pre-draw actions */","\t\t\tif ( bAction === undefined || bAction )","\t\t\t{","\t\t\t\t_fnAdjustColumnSizing( oSettings );","\t\t\t}","\t\t\t","\t\t\t/* Redraw the table */","\t\t\tif ( bRedraw === undefined || bRedraw )","\t\t\t{","\t\t\t\t_fnReDraw( oSettings );","\t\t\t}","\t\t\treturn 0;","\t\t};","\t\t","\t\t","\t\t/**","\t\t * Provide a common method for plug-ins to check the version of DataTables being used, in order","\t\t * to ensure compatibility.","\t\t *  @param {string} sVersion Version string to check for, in the format \"X.Y.Z\". Note that the","\t\t *    formats \"X\" and \"X.Y\" are also acceptable.","\t\t *  @returns {boolean} true if this version of DataTables is greater or equal to the required","\t\t *    version, or false if this version of DataTales is not suitable","\t\t *  @method","\t\t *  @dtopt API","\t\t *","\t\t *  @example","\t\t *    $(document).ready(function() {","\t\t *      var oTable = $('#example').dataTable();","\t\t *      alert( oTable.fnVersionCheck( '1.9.0' ) );","\t\t *    } );","\t\t */","\t\tthis.fnVersionCheck = DataTable.ext.fnVersionCheck;","\t\t","\t\t","\t\t/*","\t\t * This is really a good bit rubbish this method of exposing the internal methods","\t\t * publicly... - To be fixed in 2.0 using methods on the prototype","\t\t */","\t\t","\t\t","\t\t/**","\t\t * Create a wrapper function for exporting an internal functions to an external API.","\t\t *  @param {string} sFunc API function name","\t\t *  @returns {function} wrapped function","\t\t *  @memberof DataTable#oApi","\t\t */","\t\tfunction _fnExternApiFunc (sFunc)","\t\t{","\t\t\treturn function() {","\t\t\t\tvar aArgs = [_fnSettingsFromNode(this[DataTable.ext.iApiIndex])].concat( ","\t\t\t\t\tArray.prototype.slice.call(arguments) );","\t\t\t\treturn DataTable.ext.oApi[sFunc].apply( this, aArgs );","\t\t\t};","\t\t}","\t\t","\t\t","\t\t/**","\t\t * Reference to internal functions for use by plug-in developers. Note that these","\t\t * methods are references to internal functions and are considered to be private.","\t\t * If you use these methods, be aware that they are liable to change between versions","\t\t * (check the upgrade notes).","\t\t *  @namespace","\t\t */","\t\tthis.oApi = {","\t\t\t\"_fnExternApiFunc\": _fnExternApiFunc,","\t\t\t\"_fnInitialise\": _fnInitialise,","\t\t\t\"_fnInitComplete\": _fnInitComplete,","\t\t\t\"_fnLanguageCompat\": _fnLanguageCompat,","\t\t\t\"_fnAddColumn\": _fnAddColumn,","\t\t\t\"_fnColumnOptions\": _fnColumnOptions,","\t\t\t\"_fnAddData\": _fnAddData,","\t\t\t\"_fnCreateTr\": _fnCreateTr,","\t\t\t\"_fnGatherData\": _fnGatherData,","\t\t\t\"_fnBuildHead\": _fnBuildHead,","\t\t\t\"_fnDrawHead\": _fnDrawHead,","\t\t\t\"_fnDraw\": _fnDraw,","\t\t\t\"_fnReDraw\": _fnReDraw,","\t\t\t\"_fnAjaxUpdate\": _fnAjaxUpdate,","\t\t\t\"_fnAjaxParameters\": _fnAjaxParameters,","\t\t\t\"_fnAjaxUpdateDraw\": _fnAjaxUpdateDraw,","\t\t\t\"_fnServerParams\": _fnServerParams,","\t\t\t\"_fnAddOptionsHtml\": _fnAddOptionsHtml,","\t\t\t\"_fnFeatureHtmlTable\": _fnFeatureHtmlTable,","\t\t\t\"_fnScrollDraw\": _fnScrollDraw,","\t\t\t\"_fnAdjustColumnSizing\": _fnAdjustColumnSizing,","\t\t\t\"_fnFeatureHtmlFilter\": _fnFeatureHtmlFilter,","\t\t\t\"_fnFilterComplete\": _fnFilterComplete,","\t\t\t\"_fnFilterCustom\": _fnFilterCustom,","\t\t\t\"_fnFilterColumn\": _fnFilterColumn,","\t\t\t\"_fnFilter\": _fnFilter,","\t\t\t\"_fnBuildSearchArray\": _fnBuildSearchArray,","\t\t\t\"_fnBuildSearchRow\": _fnBuildSearchRow,","\t\t\t\"_fnFilterCreateSearch\": _fnFilterCreateSearch,","\t\t\t\"_fnDataToSearch\": _fnDataToSearch,","\t\t\t\"_fnSort\": _fnSort,","\t\t\t\"_fnSortAttachListener\": _fnSortAttachListener,","\t\t\t\"_fnSortingClasses\": _fnSortingClasses,","\t\t\t\"_fnFeatureHtmlPaginate\": _fnFeatureHtmlPaginate,","\t\t\t\"_fnPageChange\": _fnPageChange,","\t\t\t\"_fnFeatureHtmlInfo\": _fnFeatureHtmlInfo,","\t\t\t\"_fnUpdateInfo\": _fnUpdateInfo,","\t\t\t\"_fnFeatureHtmlLength\": _fnFeatureHtmlLength,","\t\t\t\"_fnFeatureHtmlProcessing\": _fnFeatureHtmlProcessing,","\t\t\t\"_fnProcessingDisplay\": _fnProcessingDisplay,","\t\t\t\"_fnVisibleToColumnIndex\": _fnVisibleToColumnIndex,","\t\t\t\"_fnColumnIndexToVisible\": _fnColumnIndexToVisible,","\t\t\t\"_fnNodeToDataIndex\": _fnNodeToDataIndex,","\t\t\t\"_fnVisbleColumns\": _fnVisbleColumns,","\t\t\t\"_fnCalculateEnd\": _fnCalculateEnd,","\t\t\t\"_fnConvertToWidth\": _fnConvertToWidth,","\t\t\t\"_fnCalculateColumnWidths\": _fnCalculateColumnWidths,","\t\t\t\"_fnScrollingWidthAdjust\": _fnScrollingWidthAdjust,","\t\t\t\"_fnGetWidestNode\": _fnGetWidestNode,","\t\t\t\"_fnGetMaxLenString\": _fnGetMaxLenString,","\t\t\t\"_fnStringToCss\": _fnStringToCss,","\t\t\t\"_fnDetectType\": _fnDetectType,","\t\t\t\"_fnSettingsFromNode\": _fnSettingsFromNode,","\t\t\t\"_fnGetDataMaster\": _fnGetDataMaster,","\t\t\t\"_fnGetTrNodes\": _fnGetTrNodes,","\t\t\t\"_fnGetTdNodes\": _fnGetTdNodes,","\t\t\t\"_fnEscapeRegex\": _fnEscapeRegex,","\t\t\t\"_fnDeleteIndex\": _fnDeleteIndex,","\t\t\t\"_fnReOrderIndex\": _fnReOrderIndex,","\t\t\t\"_fnColumnOrdering\": _fnColumnOrdering,","\t\t\t\"_fnLog\": _fnLog,","\t\t\t\"_fnClearTable\": _fnClearTable,","\t\t\t\"_fnSaveState\": _fnSaveState,","\t\t\t\"_fnLoadState\": _fnLoadState,","\t\t\t\"_fnCreateCookie\": _fnCreateCookie,","\t\t\t\"_fnReadCookie\": _fnReadCookie,","\t\t\t\"_fnDetectHeader\": _fnDetectHeader,","\t\t\t\"_fnGetUniqueThs\": _fnGetUniqueThs,","\t\t\t\"_fnScrollBarWidth\": _fnScrollBarWidth,","\t\t\t\"_fnApplyToChildren\": _fnApplyToChildren,","\t\t\t\"_fnMap\": _fnMap,","\t\t\t\"_fnGetRowData\": _fnGetRowData,","\t\t\t\"_fnGetCellData\": _fnGetCellData,","\t\t\t\"_fnSetCellData\": _fnSetCellData,","\t\t\t\"_fnGetObjectDataFn\": _fnGetObjectDataFn,","\t\t\t\"_fnSetObjectDataFn\": _fnSetObjectDataFn,","\t\t\t\"_fnApplyColumnDefs\": _fnApplyColumnDefs,","\t\t\t\"_fnBindAction\": _fnBindAction,","\t\t\t\"_fnExtend\": _fnExtend,","\t\t\t\"_fnCallbackReg\": _fnCallbackReg,","\t\t\t\"_fnCallbackFire\": _fnCallbackFire,","\t\t\t\"_fnJsonString\": _fnJsonString,","\t\t\t\"_fnRender\": _fnRender,","\t\t\t\"_fnNodeToColumnIndex\": _fnNodeToColumnIndex,","\t\t\t\"_fnInfoMacros\": _fnInfoMacros,","\t\t\t\"_fnBrowserDetect\": _fnBrowserDetect,","\t\t\t\"_fnGetColumns\": _fnGetColumns","\t\t};","\t\t","\t\t$.extend( DataTable.ext.oApi, this.oApi );","\t\t","\t\tfor ( var sFunc in DataTable.ext.oApi )","\t\t{","\t\t\tif ( sFunc )","\t\t\t{","\t\t\t\tthis[sFunc] = _fnExternApiFunc(sFunc);","\t\t\t}","\t\t}","\t\t","\t\t","\t\tvar _that = this;","\t\tthis.each(function() {","\t\t\tvar i=0, iLen, j, jLen, k, kLen;","\t\t\tvar sId = this.getAttribute( 'id' );","\t\t\tvar bInitHandedOff = false;","\t\t\tvar bUsePassedData = false;","\t\t\t","\t\t\t","\t\t\t/* Sanity check */","\t\t\tif ( this.nodeName.toLowerCase() != 'table' )","\t\t\t{","\t\t\t\t_fnLog( null, 0, \"Attempted to initialise DataTables on a node which is not a \"+","\t\t\t\t\t\"table: \"+this.nodeName );","\t\t\t\treturn;","\t\t\t}","\t\t\t","\t\t\t/* Check to see if we are re-initialising a table */","\t\t\tfor ( i=0, iLen=DataTable.settings.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\t/* Base check on table node */","\t\t\t\tif ( DataTable.settings[i].nTable == this )","\t\t\t\t{","\t\t\t\t\tif ( oInit === undefined || oInit.bRetrieve )","\t\t\t\t\t{","\t\t\t\t\t\treturn DataTable.settings[i].oInstance;","\t\t\t\t\t}","\t\t\t\t\telse if ( oInit.bDestroy )","\t\t\t\t\t{","\t\t\t\t\t\tDataTable.settings[i].oInstance.fnDestroy();","\t\t\t\t\t\tbreak;","\t\t\t\t\t}","\t\t\t\t\telse","\t\t\t\t\t{","\t\t\t\t\t\t_fnLog( DataTable.settings[i], 0, \"Cannot reinitialise DataTable.\\n\\n\"+","\t\t\t\t\t\t\t\"To retrieve the DataTables object for this table, pass no arguments or see \"+","\t\t\t\t\t\t\t\"the docs for bRetrieve and bDestroy\" );","\t\t\t\t\t\treturn;","\t\t\t\t\t}","\t\t\t\t}","\t\t\t\t","\t\t\t\t/* If the element we are initialising has the same ID as a table which was previously","\t\t\t\t * initialised, but the table nodes don't match (from before) then we destroy the old","\t\t\t\t * instance by simply deleting it. This is under the assumption that the table has been","\t\t\t\t * destroyed by other methods. Anyone using non-id selectors will need to do this manually","\t\t\t\t */","\t\t\t\tif ( DataTable.settings[i].sTableId == this.id )","\t\t\t\t{","\t\t\t\t\tDataTable.settings.splice( i, 1 );","\t\t\t\t\tbreak;","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\t/* Ensure the table has an ID - required for accessibility */","\t\t\tif ( sId === null || sId === \"\" )","\t\t\t{","\t\t\t\tsId = \"DataTables_Table_\"+(DataTable.ext._oExternConfig.iNextUnique++);","\t\t\t\tthis.id = sId;","\t\t\t}","\t\t\t","\t\t\t/* Create the settings object for this table and set some of the default parameters */","\t\t\tvar oSettings = $.extend( true, {}, DataTable.models.oSettings, {","\t\t\t\t\"nTable\":        this,","\t\t\t\t\"oApi\":          _that.oApi,","\t\t\t\t\"oInit\":         oInit,","\t\t\t\t\"sDestroyWidth\": $(this).width(),","\t\t\t\t\"sInstance\":     sId,","\t\t\t\t\"sTableId\":      sId","\t\t\t} );","\t\t\tDataTable.settings.push( oSettings );","\t\t\t","\t\t\t// Need to add the instance after the instance after the settings object has been added","\t\t\t// to the settings array, so we can self reference the table instance if more than one","\t\t\toSettings.oInstance = (_that.length===1) ? _that : $(this).dataTable();","\t\t\t","\t\t\t/* Setting up the initialisation object */","\t\t\tif ( !oInit )","\t\t\t{","\t\t\t\toInit = {};","\t\t\t}","\t\t\t","\t\t\t// Backwards compatibility, before we apply all the defaults","\t\t\tif ( oInit.oLanguage )","\t\t\t{","\t\t\t\t_fnLanguageCompat( oInit.oLanguage );","\t\t\t}","\t\t\t","\t\t\toInit = _fnExtend( $.extend(true, {}, DataTable.defaults), oInit );","\t\t\t","\t\t\t// Map the initialisation options onto the settings object","\t\t\t_fnMap( oSettings.oFeatures, oInit, \"bPaginate\" );","\t\t\t_fnMap( oSettings.oFeatures, oInit, \"bLengthChange\" );","\t\t\t_fnMap( oSettings.oFeatures, oInit, \"bFilter\" );","\t\t\t_fnMap( oSettings.oFeatures, oInit, \"bSort\" );","\t\t\t_fnMap( oSettings.oFeatures, oInit, \"bInfo\" );","\t\t\t_fnMap( oSettings.oFeatures, oInit, \"bProcessing\" );","\t\t\t_fnMap( oSettings.oFeatures, oInit, \"bAutoWidth\" );","\t\t\t_fnMap( oSettings.oFeatures, oInit, \"bSortClasses\" );","\t\t\t_fnMap( oSettings.oFeatures, oInit, \"bServerSide\" );","\t\t\t_fnMap( oSettings.oFeatures, oInit, \"bDeferRender\" );","\t\t\t_fnMap( oSettings.oScroll, oInit, \"sScrollX\", \"sX\" );","\t\t\t_fnMap( oSettings.oScroll, oInit, \"sScrollXInner\", \"sXInner\" );","\t\t\t_fnMap( oSettings.oScroll, oInit, \"sScrollY\", \"sY\" );","\t\t\t_fnMap( oSettings.oScroll, oInit, \"bScrollCollapse\", \"bCollapse\" );","\t\t\t_fnMap( oSettings.oScroll, oInit, \"bScrollInfinite\", \"bInfinite\" );","\t\t\t_fnMap( oSettings.oScroll, oInit, \"iScrollLoadGap\", \"iLoadGap\" );","\t\t\t_fnMap( oSettings.oScroll, oInit, \"bScrollAutoCss\", \"bAutoCss\" );","\t\t\t_fnMap( oSettings, oInit, \"asStripeClasses\" );","\t\t\t_fnMap( oSettings, oInit, \"asStripClasses\", \"asStripeClasses\" ); // legacy","\t\t\t_fnMap( oSettings, oInit, \"fnServerData\" );","\t\t\t_fnMap( oSettings, oInit, \"fnFormatNumber\" );","\t\t\t_fnMap( oSettings, oInit, \"sServerMethod\" );","\t\t\t_fnMap( oSettings, oInit, \"aaSorting\" );","\t\t\t_fnMap( oSettings, oInit, \"aaSortingFixed\" );","\t\t\t_fnMap( oSettings, oInit, \"aLengthMenu\" );","\t\t\t_fnMap( oSettings, oInit, \"sPaginationType\" );","\t\t\t_fnMap( oSettings, oInit, \"sAjaxSource\" );","\t\t\t_fnMap( oSettings, oInit, \"sAjaxDataProp\" );","\t\t\t_fnMap( oSettings, oInit, \"iCookieDuration\" );","\t\t\t_fnMap( oSettings, oInit, \"sCookiePrefix\" );","\t\t\t_fnMap( oSettings, oInit, \"sDom\" );","\t\t\t_fnMap( oSettings, oInit, \"bSortCellsTop\" );","\t\t\t_fnMap( oSettings, oInit, \"iTabIndex\" );","\t\t\t_fnMap( oSettings, oInit, \"oSearch\", \"oPreviousSearch\" );","\t\t\t_fnMap( oSettings, oInit, \"aoSearchCols\", \"aoPreSearchCols\" );","\t\t\t_fnMap( oSettings, oInit, \"iDisplayLength\", \"_iDisplayLength\" );","\t\t\t_fnMap( oSettings, oInit, \"bJQueryUI\", \"bJUI\" );","\t\t\t_fnMap( oSettings, oInit, \"fnCookieCallback\" );","\t\t\t_fnMap( oSettings, oInit, \"fnStateLoad\" );","\t\t\t_fnMap( oSettings, oInit, \"fnStateSave\" );","\t\t\t_fnMap( oSettings.oLanguage, oInit, \"fnInfoCallback\" );","\t\t\t","\t\t\t/* Callback functions which are array driven */","\t\t\t_fnCallbackReg( oSettings, 'aoDrawCallback',       oInit.fnDrawCallback,      'user' );","\t\t\t_fnCallbackReg( oSettings, 'aoServerParams',       oInit.fnServerParams,      'user' );","\t\t\t_fnCallbackReg( oSettings, 'aoStateSaveParams',    oInit.fnStateSaveParams,   'user' );","\t\t\t_fnCallbackReg( oSettings, 'aoStateLoadParams',    oInit.fnStateLoadParams,   'user' );","\t\t\t_fnCallbackReg( oSettings, 'aoStateLoaded',        oInit.fnStateLoaded,       'user' );","\t\t\t_fnCallbackReg( oSettings, 'aoRowCallback',        oInit.fnRowCallback,       'user' );","\t\t\t_fnCallbackReg( oSettings, 'aoRowCreatedCallback', oInit.fnCreatedRow,        'user' );","\t\t\t_fnCallbackReg( oSettings, 'aoHeaderCallback',     oInit.fnHeaderCallback,    'user' );","\t\t\t_fnCallbackReg( oSettings, 'aoFooterCallback',     oInit.fnFooterCallback,    'user' );","\t\t\t_fnCallbackReg( oSettings, 'aoInitComplete',       oInit.fnInitComplete,      'user' );","\t\t\t_fnCallbackReg( oSettings, 'aoPreDrawCallback',    oInit.fnPreDrawCallback,   'user' );","\t\t\t","\t\t\tif ( oSettings.oFeatures.bServerSide &amp;&amp; oSettings.oFeatures.bSort &amp;&amp;","\t\t\t\t   oSettings.oFeatures.bSortClasses )","\t\t\t{","\t\t\t\t/* Enable sort classes for server-side processing. Safe to do it here, since server-side","\t\t\t\t * processing must be enabled by the developer","\t\t\t\t */","\t\t\t\t_fnCallbackReg( oSettings, 'aoDrawCallback', _fnSortingClasses, 'server_side_sort_classes' );","\t\t\t}","\t\t\telse if ( oSettings.oFeatures.bDeferRender )","\t\t\t{","\t\t\t\t_fnCallbackReg( oSettings, 'aoDrawCallback', _fnSortingClasses, 'defer_sort_classes' );","\t\t\t}","\t\t\t","\t\t\tif ( oInit.bJQueryUI )","\t\t\t{","\t\t\t\t/* Use the JUI classes object for display. You could clone the oStdClasses object if ","\t\t\t\t * you want to have multiple tables with multiple independent classes ","\t\t\t\t */","\t\t\t\t$.extend( oSettings.oClasses, DataTable.ext.oJUIClasses );","\t\t\t\t","\t\t\t\tif ( oInit.sDom === DataTable.defaults.sDom &amp;&amp; DataTable.defaults.sDom === \"lfrtip\" )","\t\t\t\t{","\t\t\t\t\t/* Set the DOM to use a layout suitable for jQuery UI's theming */","\t\t\t\t\toSettings.sDom = '&lt;\"H\"lfr&gt;t&lt;\"F\"ip&gt;';","\t\t\t\t}","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\t$.extend( oSettings.oClasses, DataTable.ext.oStdClasses );","\t\t\t}","\t\t\t$(this).addClass( oSettings.oClasses.sTable );","\t\t\t","\t\t\t/* Calculate the scroll bar width and cache it for use later on */","\t\t\tif ( oSettings.oScroll.sX !== \"\" || oSettings.oScroll.sY !== \"\" )","\t\t\t{","\t\t\t\toSettings.oScroll.iBarWidth = _fnScrollBarWidth();","\t\t\t}","\t\t\t","\t\t\tif ( oSettings.iInitDisplayStart === undefined )","\t\t\t{","\t\t\t\t/* Display start point, taking into account the save saving */","\t\t\t\toSettings.iInitDisplayStart = oInit.iDisplayStart;","\t\t\t\toSettings._iDisplayStart = oInit.iDisplayStart;","\t\t\t}","\t\t\t","\t\t\t/* Must be done after everything which can be overridden by a cookie! */","\t\t\tif ( oInit.bStateSave )","\t\t\t{","\t\t\t\toSettings.oFeatures.bStateSave = true;","\t\t\t\t_fnLoadState( oSettings, oInit );","\t\t\t\t_fnCallbackReg( oSettings, 'aoDrawCallback', _fnSaveState, 'state_save' );","\t\t\t}","\t\t\t","\t\t\tif ( oInit.iDeferLoading !== null )","\t\t\t{","\t\t\t\toSettings.bDeferLoading = true;","\t\t\t\tvar tmp = $.isArray( oInit.iDeferLoading );","\t\t\t\toSettings._iRecordsDisplay = tmp ? oInit.iDeferLoading[0] : oInit.iDeferLoading;","\t\t\t\toSettings._iRecordsTotal = tmp ? oInit.iDeferLoading[1] : oInit.iDeferLoading;","\t\t\t}","\t\t\t","\t\t\tif ( oInit.aaData !== null )","\t\t\t{","\t\t\t\tbUsePassedData = true;","\t\t\t}","\t\t\t","\t\t\t/* Language definitions */","\t\t\tif ( oInit.oLanguage.sUrl !== \"\" )","\t\t\t{","\t\t\t\t/* Get the language definitions from a file - because this Ajax call makes the language","\t\t\t\t * get async to the remainder of this function we use bInitHandedOff to indicate that ","\t\t\t\t * _fnInitialise will be fired by the returned Ajax handler, rather than the constructor","\t\t\t\t */","\t\t\t\toSettings.oLanguage.sUrl = oInit.oLanguage.sUrl;","\t\t\t\t$.getJSON( oSettings.oLanguage.sUrl, null, function( json ) {","\t\t\t\t\t_fnLanguageCompat( json );","\t\t\t\t\t$.extend( true, oSettings.oLanguage, oInit.oLanguage, json );","\t\t\t\t\t_fnInitialise( oSettings );","\t\t\t\t} );","\t\t\t\tbInitHandedOff = true;","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\t$.extend( true, oSettings.oLanguage, oInit.oLanguage );","\t\t\t}","\t\t\t","\t\t\t","\t\t\t/*","\t\t\t * Stripes","\t\t\t */","\t\t\tif ( oInit.asStripeClasses === null )","\t\t\t{","\t\t\t\toSettings.asStripeClasses =[","\t\t\t\t\toSettings.oClasses.sStripeOdd,","\t\t\t\t\toSettings.oClasses.sStripeEven","\t\t\t\t];","\t\t\t}","\t\t\t","\t\t\t/* Remove row stripe classes if they are already on the table row */","\t\t\tiLen=oSettings.asStripeClasses.length;","\t\t\toSettings.asDestroyStripes = [];","\t\t\tif (iLen)","\t\t\t{","\t\t\t\tvar bStripeRemove = false;","\t\t\t\tvar anRows = $(this).children('tbody').children('tr:lt(' + iLen + ')');","\t\t\t\tfor ( i=0 ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\tif ( anRows.hasClass( oSettings.asStripeClasses[i] ) )","\t\t\t\t\t{","\t\t\t\t\t\tbStripeRemove = true;","\t\t\t\t\t\t","\t\t\t\t\t\t/* Store the classes which we are about to remove so they can be re-added on destroy */","\t\t\t\t\t\toSettings.asDestroyStripes.push( oSettings.asStripeClasses[i] );","\t\t\t\t\t}","\t\t\t\t}","\t\t\t\t","\t\t\t\tif ( bStripeRemove )","\t\t\t\t{","\t\t\t\t\tanRows.removeClass( oSettings.asStripeClasses.join(' ') );","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\t/*","\t\t\t * Columns","\t\t\t * See if we should load columns automatically or use defined ones","\t\t\t */","\t\t\tvar anThs = [];","\t\t\tvar aoColumnsInit;","\t\t\tvar nThead = this.getElementsByTagName('thead');","\t\t\tif ( nThead.length !== 0 )","\t\t\t{","\t\t\t\t_fnDetectHeader( oSettings.aoHeader, nThead[0] );","\t\t\t\tanThs = _fnGetUniqueThs( oSettings );","\t\t\t}","\t\t\t","\t\t\t/* If not given a column array, generate one with nulls */","\t\t\tif ( oInit.aoColumns === null )","\t\t\t{","\t\t\t\taoColumnsInit = [];","\t\t\t\tfor ( i=0, iLen=anThs.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\taoColumnsInit.push( null );","\t\t\t\t}","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\taoColumnsInit = oInit.aoColumns;","\t\t\t}","\t\t\t","\t\t\t/* Add the columns */","\t\t\tfor ( i=0, iLen=aoColumnsInit.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\t/* Short cut - use the loop to check if we have column visibility state to restore */","\t\t\t\tif ( oInit.saved_aoColumns !== undefined &amp;&amp; oInit.saved_aoColumns.length == iLen )","\t\t\t\t{","\t\t\t\t\tif ( aoColumnsInit[i] === null )","\t\t\t\t\t{","\t\t\t\t\t\taoColumnsInit[i] = {};","\t\t\t\t\t}","\t\t\t\t\taoColumnsInit[i].bVisible = oInit.saved_aoColumns[i].bVisible;","\t\t\t\t}","\t\t\t\t","\t\t\t\t_fnAddColumn( oSettings, anThs ? anThs[i] : null );","\t\t\t}","\t\t\t","\t\t\t/* Apply the column definitions */","\t\t\t_fnApplyColumnDefs( oSettings, oInit.aoColumnDefs, aoColumnsInit, function (iCol, oDef) {","\t\t\t\t_fnColumnOptions( oSettings, iCol, oDef );","\t\t\t} );","\t\t\t","\t\t\t","\t\t\t/*","\t\t\t * Sorting","\t\t\t * Check the aaSorting array","\t\t\t */","\t\t\tfor ( i=0, iLen=oSettings.aaSorting.length ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\tif ( oSettings.aaSorting[i][0] &gt;= oSettings.aoColumns.length )","\t\t\t\t{","\t\t\t\t\toSettings.aaSorting[i][0] = 0;","\t\t\t\t}","\t\t\t\tvar oColumn = oSettings.aoColumns[ oSettings.aaSorting[i][0] ];","\t\t\t\t","\t\t\t\t/* Add a default sorting index */","\t\t\t\tif ( oSettings.aaSorting[i][2] === undefined )","\t\t\t\t{","\t\t\t\t\toSettings.aaSorting[i][2] = 0;","\t\t\t\t}","\t\t\t\t","\t\t\t\t/* If aaSorting is not defined, then we use the first indicator in asSorting */","\t\t\t\tif ( oInit.aaSorting === undefined &amp;&amp; oSettings.saved_aaSorting === undefined )","\t\t\t\t{","\t\t\t\t\toSettings.aaSorting[i][1] = oColumn.asSorting[0];","\t\t\t\t}","\t\t\t\t","\t\t\t\t/* Set the current sorting index based on aoColumns.asSorting */","\t\t\t\tfor ( j=0, jLen=oColumn.asSorting.length ; j&lt;jLen ; j++ )","\t\t\t\t{","\t\t\t\t\tif ( oSettings.aaSorting[i][1] == oColumn.asSorting[j] )","\t\t\t\t\t{","\t\t\t\t\t\toSettings.aaSorting[i][2] = j;","\t\t\t\t\t\tbreak;","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t\t\t","\t\t\t/* Do a first pass on the sorting classes (allows any size changes to be taken into","\t\t\t * account, and also will apply sorting disabled classes if disabled","\t\t\t */","\t\t\t_fnSortingClasses( oSettings );","\t\t\t","\t\t\t","\t\t\t/*","\t\t\t * Final init","\t\t\t * Cache the header, body and footer as required, creating them if needed","\t\t\t */","\t\t\t","\t\t\t/* Browser support detection */","\t\t\t_fnBrowserDetect( oSettings );","\t\t\t","\t\t\t// Work around for Webkit bug 83867 - store the caption-side before removing from doc","\t\t\tvar captions = $(this).children('caption').each( function () {","\t\t\t\tthis._captionSide = $(this).css('caption-side');","\t\t\t} );","\t\t\t","\t\t\tvar thead = $(this).children('thead');","\t\t\tif ( thead.length === 0 )","\t\t\t{","\t\t\t\tthead = [ document.createElement( 'thead' ) ];","\t\t\t\tthis.appendChild( thead[0] );","\t\t\t}","\t\t\toSettings.nTHead = thead[0];","\t\t\t","\t\t\tvar tbody = $(this).children('tbody');","\t\t\tif ( tbody.length === 0 )","\t\t\t{","\t\t\t\ttbody = [ document.createElement( 'tbody' ) ];","\t\t\t\tthis.appendChild( tbody[0] );","\t\t\t}","\t\t\toSettings.nTBody = tbody[0];","\t\t\toSettings.nTBody.setAttribute( \"role\", \"alert\" );","\t\t\toSettings.nTBody.setAttribute( \"aria-live\", \"polite\" );","\t\t\toSettings.nTBody.setAttribute( \"aria-relevant\", \"all\" );","\t\t\t","\t\t\tvar tfoot = $(this).children('tfoot');","\t\t\tif ( tfoot.length === 0 &amp;&amp; captions.length &gt; 0 &amp;&amp; (oSettings.oScroll.sX !== \"\" || oSettings.oScroll.sY !== \"\") )","\t\t\t{","\t\t\t\t// If we are a scrolling table, and no footer has been given, then we need to create","\t\t\t\t// a tfoot element for the caption element to be appended to","\t\t\t\ttfoot = [ document.createElement( 'tfoot' ) ];","\t\t\t\tthis.appendChild( tfoot[0] );","\t\t\t}","\t\t\t","\t\t\tif ( tfoot.length &gt; 0 )","\t\t\t{","\t\t\t\toSettings.nTFoot = tfoot[0];","\t\t\t\t_fnDetectHeader( oSettings.aoFooter, oSettings.nTFoot );","\t\t\t}","\t\t\t","\t\t\t/* Check if there is data passing into the constructor */","\t\t\tif ( bUsePassedData )","\t\t\t{","\t\t\t\tfor ( i=0 ; i&lt;oInit.aaData.length ; i++ )","\t\t\t\t{","\t\t\t\t\t_fnAddData( oSettings, oInit.aaData[ i ] );","\t\t\t\t}","\t\t\t}","\t\t\telse","\t\t\t{","\t\t\t\t/* Grab the data from the page */","\t\t\t\t_fnGatherData( oSettings );","\t\t\t}","\t\t\t","\t\t\t/* Copy the data index array */","\t\t\toSettings.aiDisplay = oSettings.aiDisplayMaster.slice();","\t\t\t","\t\t\t/* Initialisation complete - table can be drawn */","\t\t\toSettings.bInitialised = true;","\t\t\t","\t\t\t/* Check if we need to initialise the table (it might not have been handed off to the","\t\t\t * language processor)","\t\t\t */","\t\t\tif ( bInitHandedOff === false )","\t\t\t{","\t\t\t\t_fnInitialise( oSettings );","\t\t\t}","\t\t} );","\t\t_that = null;","\t\treturn this;","\t};","","\t","\t","\t/**","\t * Provide a common method for plug-ins to check the version of DataTables being used, in order","\t * to ensure compatibility.","\t *  @param {string} sVersion Version string to check for, in the format \"X.Y.Z\". Note that the","\t *    formats \"X\" and \"X.Y\" are also acceptable.","\t *  @returns {boolean} true if this version of DataTables is greater or equal to the required","\t *    version, or false if this version of DataTales is not suitable","\t *  @static","\t *  @dtopt API-Static","\t *","\t *  @example","\t *    alert( $.fn.dataTable.fnVersionCheck( '1.9.0' ) );","\t */","\tDataTable.fnVersionCheck = function( sVersion )","\t{","\t\t/* This is cheap, but effective */","\t\tvar fnZPad = function (Zpad, count)","\t\t{","\t\t\twhile(Zpad.length &lt; count) {","\t\t\t\tZpad += '0';","\t\t\t}","\t\t\treturn Zpad;","\t\t};","\t\tvar aThis = DataTable.ext.sVersion.split('.');","\t\tvar aThat = sVersion.split('.');","\t\tvar sThis = '', sThat = '';","\t\t","\t\tfor ( var i=0, iLen=aThat.length ; i&lt;iLen ; i++ )","\t\t{","\t\t\tsThis += fnZPad( aThis[i], 3 );","\t\t\tsThat += fnZPad( aThat[i], 3 );","\t\t}","\t\t","\t\treturn parseInt(sThis, 10) &gt;= parseInt(sThat, 10);","\t};","\t","\t","\t/**","\t * Check if a TABLE node is a DataTable table already or not.","\t *  @param {node} nTable The TABLE node to check if it is a DataTable or not (note that other","\t *    node types can be passed in, but will always return false).","\t *  @returns {boolean} true the table given is a DataTable, or false otherwise","\t *  @static","\t *  @dtopt API-Static","\t *","\t *  @example","\t *    var ex = document.getElementById('example');","\t *    if ( ! $.fn.DataTable.fnIsDataTable( ex ) ) {","\t *      $(ex).dataTable();","\t *    }","\t */","\tDataTable.fnIsDataTable = function ( nTable )","\t{","\t\tvar o = DataTable.settings;","\t","\t\tfor ( var i=0 ; i&lt;o.length ; i++ )","\t\t{","\t\t\tif ( o[i].nTable === nTable || o[i].nScrollHead === nTable || o[i].nScrollFoot === nTable )","\t\t\t{","\t\t\t\treturn true;","\t\t\t}","\t\t}","\t","\t\treturn false;","\t};","\t","\t","\t/**","\t * Get all DataTable tables that have been initialised - optionally you can select to","\t * get only currently visible tables.","\t *  @param {boolean} [bVisible=false] Flag to indicate if you want all (default) or ","\t *    visible tables only.","\t *  @returns {array} Array of TABLE nodes (not DataTable instances) which are DataTables","\t *  @static","\t *  @dtopt API-Static","\t *","\t *  @example","\t *    var table = $.fn.dataTable.fnTables(true);","\t *    if ( table.length &gt; 0 ) {","\t *      $(table).dataTable().fnAdjustColumnSizing();","\t *    }","\t */","\tDataTable.fnTables = function ( bVisible )","\t{","\t\tvar out = [];","\t","\t\tjQuery.each( DataTable.settings, function (i, o) {","\t\t\tif ( !bVisible || (bVisible === true &amp;&amp; $(o.nTable).is(':visible')) )","\t\t\t{","\t\t\t\tout.push( o.nTable );","\t\t\t}","\t\t} );","\t","\t\treturn out;","\t};","\t","","\t/**","\t * Version string for plug-ins to check compatibility. Allowed format is","\t * a.b.c.d.e where: a:int, b:int, c:int, d:string(dev|beta), e:int. d and","\t * e are optional","\t *  @member","\t *  @type string","\t *  @default Version number","\t */","\tDataTable.version = \"1.9.4\";","","\t/**","\t * Private data store, containing all of the settings objects that are created for the","\t * tables on a given page.","\t * ","\t * Note that the &lt;i&gt;DataTable.settings&lt;/i&gt; object is aliased to &lt;i&gt;jQuery.fn.dataTableExt&lt;/i&gt; ","\t * through which it may be accessed and manipulated, or &lt;i&gt;jQuery.fn.dataTable.settings&lt;/i&gt;.","\t *  @member","\t *  @type array","\t *  @default []","\t *  @private","\t */","\tDataTable.settings = [];","","\t/**","\t * Object models container, for the various models that DataTables has available","\t * to it. These models define the objects that are used to hold the active state ","\t * and configuration of the table.","\t *  @namespace","\t */","\tDataTable.models = {};","\t","\t","\t/**","\t * DataTables extension options and plug-ins. This namespace acts as a collection \"area\"","\t * for plug-ins that can be used to extend the default DataTables behaviour - indeed many","\t * of the build in methods use this method to provide their own capabilities (sorting methods","\t * for example).","\t * ","\t * Note that this namespace is aliased to jQuery.fn.dataTableExt so it can be readily accessed","\t * and modified by plug-ins.","\t *  @namespace","\t */","\tDataTable.models.ext = {","\t\t/**","\t\t * Plug-in filtering functions - this method of filtering is complimentary to the default","\t\t * type based filtering, and a lot more comprehensive as it allows you complete control","\t\t * over the filtering logic. Each element in this array is a function (parameters","\t\t * described below) that is called for every row in the table, and your logic decides if","\t\t * it should be included in the filtered data set or not.","\t\t *   &lt;ul&gt;","\t\t *     &lt;li&gt;","\t\t *       Function input parameters:","\t\t *       &lt;ul&gt;","\t\t *         &lt;li&gt;{object} DataTables settings object: see {@link DataTable.models.oSettings}.&lt;/li&gt;","\t\t *         &lt;li&gt;{array|object} Data for the row to be processed (same as the original format","\t\t *           that was passed in as the data source, or an array from a DOM data source&lt;/li&gt;","\t\t *         &lt;li&gt;{int} Row index in aoData ({@link DataTable.models.oSettings.aoData}), which can","\t\t *           be useful to retrieve the TR element if you need DOM interaction.&lt;/li&gt;","\t\t *       &lt;/ul&gt;","\t\t *     &lt;/li&gt;","\t\t *     &lt;li&gt;","\t\t *       Function return:","\t\t *       &lt;ul&gt;","\t\t *         &lt;li&gt;{boolean} Include the row in the filtered result set (true) or not (false)&lt;/li&gt;","\t\t *       &lt;/ul&gt;","\t\t *     &lt;/il&gt;","\t\t *   &lt;/ul&gt;","\t\t *  @type array","\t\t *  @default []","\t\t *","\t\t *  @example","\t\t *    // The following example shows custom filtering being applied to the fourth column (i.e.","\t\t *    // the aData[3] index) based on two input values from the end-user, matching the data in ","\t\t *    // a certain range.","\t\t *    $.fn.dataTableExt.afnFiltering.push(","\t\t *      function( oSettings, aData, iDataIndex ) {","\t\t *        var iMin = document.getElementById('min').value * 1;","\t\t *        var iMax = document.getElementById('max').value * 1;","\t\t *        var iVersion = aData[3] == \"-\" ? 0 : aData[3]*1;","\t\t *        if ( iMin == \"\" &amp;&amp; iMax == \"\" ) {","\t\t *          return true;","\t\t *        }","\t\t *        else if ( iMin == \"\" &amp;&amp; iVersion &lt; iMax ) {","\t\t *          return true;","\t\t *        }","\t\t *        else if ( iMin &lt; iVersion &amp;&amp; \"\" == iMax ) {","\t\t *          return true;","\t\t *        }","\t\t *        else if ( iMin &lt; iVersion &amp;&amp; iVersion &lt; iMax ) {","\t\t *          return true;","\t\t *        }","\t\t *        return false;","\t\t *      }","\t\t *    );","\t\t */","\t\t\"afnFiltering\": [],","\t","\t","\t\t/**","\t\t * Plug-in sorting functions - this method of sorting is complimentary to the default type","\t\t * based sorting that DataTables does automatically, allowing much greater control over the","\t\t * the data that is being used to sort a column. This is useful if you want to do sorting","\t\t * based on live data (for example the contents of an 'input' element) rather than just the","\t\t * static string that DataTables knows of. The way these plug-ins work is that you create","\t\t * an array of the values you wish to be sorted for the column in question and then return","\t\t * that array. Which pre-sorting function is run here depends on the sSortDataType parameter","\t\t * that is used for the column (if any). This is the corollary of &lt;i&gt;ofnSearch&lt;/i&gt; for sort ","\t\t * data.","\t\t *   &lt;ul&gt;","\t     *     &lt;li&gt;","\t     *       Function input parameters:","\t     *       &lt;ul&gt;","\t\t *         &lt;li&gt;{object} DataTables settings object: see {@link DataTable.models.oSettings}.&lt;/li&gt;","\t     *         &lt;li&gt;{int} Target column index&lt;/li&gt;","\t     *       &lt;/ul&gt;","\t     *     &lt;/li&gt;","\t\t *     &lt;li&gt;","\t\t *       Function return:","\t\t *       &lt;ul&gt;","\t\t *         &lt;li&gt;{array} Data for the column to be sorted upon&lt;/li&gt;","\t\t *       &lt;/ul&gt;","\t\t *     &lt;/il&gt;","\t\t *   &lt;/ul&gt;","\t\t *  ","\t\t * Note that as of v1.9, it is typically preferable to use &lt;i&gt;mData&lt;/i&gt; to prepare data for","\t\t * the different uses that DataTables can put the data to. Specifically &lt;i&gt;mData&lt;/i&gt; when","\t\t * used as a function will give you a 'type' (sorting, filtering etc) that you can use to ","\t\t * prepare the data as required for the different types. As such, this method is deprecated.","\t\t *  @type array","\t\t *  @default []","\t\t *  @deprecated","\t\t *","\t\t *  @example","\t\t *    // Updating the cached sorting information with user entered values in HTML input elements","\t\t *    jQuery.fn.dataTableExt.afnSortData['dom-text'] = function ( oSettings, iColumn )","\t\t *    {","\t\t *      var aData = [];","\t\t *      $( 'td:eq('+iColumn+') input', oSettings.oApi._fnGetTrNodes(oSettings) ).each( function () {","\t\t *        aData.push( this.value );","\t\t *      } );","\t\t *      return aData;","\t\t *    }","\t\t */","\t\t\"afnSortData\": [],","\t","\t","\t\t/**","\t\t * Feature plug-ins - This is an array of objects which describe the feature plug-ins that are","\t\t * available to DataTables. These feature plug-ins are accessible through the sDom initialisation","\t\t * option. As such, each feature plug-in must describe a function that is used to initialise","\t\t * itself (fnInit), a character so the feature can be enabled by sDom (cFeature) and the name","\t\t * of the feature (sFeature). Thus the objects attached to this method must provide:","\t\t *   &lt;ul&gt;","\t\t *     &lt;li&gt;{function} fnInit Initialisation of the plug-in","\t\t *       &lt;ul&gt;","\t     *         &lt;li&gt;","\t     *           Function input parameters:","\t     *           &lt;ul&gt;","\t\t *             &lt;li&gt;{object} DataTables settings object: see {@link DataTable.models.oSettings}.&lt;/li&gt;","\t     *           &lt;/ul&gt;","\t     *         &lt;/li&gt;","\t\t *         &lt;li&gt;","\t\t *           Function return:","\t\t *           &lt;ul&gt;","\t\t *             &lt;li&gt;{node|null} The element which contains your feature. Note that the return","\t\t *                may also be void if your plug-in does not require to inject any DOM elements ","\t\t *                into DataTables control (sDom) - for example this might be useful when ","\t\t *                developing a plug-in which allows table control via keyboard entry.&lt;/li&gt;","\t\t *           &lt;/ul&gt;","\t\t *         &lt;/il&gt;","\t\t *       &lt;/ul&gt;","\t\t *     &lt;/li&gt;","\t\t *     &lt;li&gt;{character} cFeature Character that will be matched in sDom - case sensitive&lt;/li&gt;","\t\t *     &lt;li&gt;{string} sFeature Feature name&lt;/li&gt;","\t\t *   &lt;/ul&gt;","\t\t *  @type array","\t\t *  @default []","\t\t * ","\t\t *  @example","\t\t *    // How TableTools initialises itself.","\t\t *    $.fn.dataTableExt.aoFeatures.push( {","\t\t *      \"fnInit\": function( oSettings ) {","\t\t *        return new TableTools( { \"oDTSettings\": oSettings } );","\t\t *      },","\t\t *      \"cFeature\": \"T\",","\t\t *      \"sFeature\": \"TableTools\"","\t\t *    } );","\t\t */","\t\t\"aoFeatures\": [],","\t","\t","\t\t/**","\t\t * Type detection plug-in functions - DataTables utilises types to define how sorting and","\t\t * filtering behave, and types can be either  be defined by the developer (sType for the","\t\t * column) or they can be automatically detected by the methods in this array. The functions","\t\t * defined in the array are quite simple, taking a single parameter (the data to analyse) ","\t\t * and returning the type if it is a known type, or null otherwise.","\t\t *   &lt;ul&gt;","\t     *     &lt;li&gt;","\t     *       Function input parameters:","\t     *       &lt;ul&gt;","\t\t *         &lt;li&gt;{*} Data from the column cell to be analysed&lt;/li&gt;","\t     *       &lt;/ul&gt;","\t     *     &lt;/li&gt;","\t\t *     &lt;li&gt;","\t\t *       Function return:","\t\t *       &lt;ul&gt;","\t\t *         &lt;li&gt;{string|null} Data type detected, or null if unknown (and thus pass it","\t\t *           on to the other type detection functions.&lt;/li&gt;","\t\t *       &lt;/ul&gt;","\t\t *     &lt;/il&gt;","\t\t *   &lt;/ul&gt;","\t\t *  @type array","\t\t *  @default []","\t\t *  ","\t\t *  @example","\t\t *    // Currency type detection plug-in:","\t\t *    jQuery.fn.dataTableExt.aTypes.push(","\t\t *      function ( sData ) {","\t\t *        var sValidChars = \"0123456789.-\";","\t\t *        var Char;","\t\t *        ","\t\t *        // Check the numeric part","\t\t *        for ( i=1 ; i&lt;sData.length ; i++ ) {","\t\t *          Char = sData.charAt(i); ","\t\t *          if (sValidChars.indexOf(Char) == -1) {","\t\t *            return null;","\t\t *          }","\t\t *        }","\t\t *        ","\t\t *        // Check prefixed by currency","\t\t *        if ( sData.charAt(0) == '$' || sData.charAt(0) == '&amp;pound;' ) {","\t\t *          return 'currency';","\t\t *        }","\t\t *        return null;","\t\t *      }","\t\t *    );","\t\t */","\t\t\"aTypes\": [],","\t","\t","\t\t/**","\t\t * Provide a common method for plug-ins to check the version of DataTables being used, ","\t\t * in order to ensure compatibility.","\t\t *  @type function","\t\t *  @param {string} sVersion Version string to check for, in the format \"X.Y.Z\". Note ","\t\t *    that the formats \"X\" and \"X.Y\" are also acceptable.","\t\t *  @returns {boolean} true if this version of DataTables is greater or equal to the ","\t\t *    required version, or false if this version of DataTales is not suitable","\t\t *","\t\t *  @example","\t\t *    $(document).ready(function() {","\t\t *      var oTable = $('#example').dataTable();","\t\t *      alert( oTable.fnVersionCheck( '1.9.0' ) );","\t\t *    } );","\t\t */","\t\t\"fnVersionCheck\": DataTable.fnVersionCheck,","\t","\t","\t\t/**","\t\t * Index for what 'this' index API functions should use","\t\t *  @type int","\t\t *  @default 0","\t\t */","\t\t\"iApiIndex\": 0,","\t","\t","\t\t/**","\t\t * Pre-processing of filtering data plug-ins - When you assign the sType for a column","\t\t * (or have it automatically detected for you by DataTables or a type detection plug-in), ","\t\t * you will typically be using this for custom sorting, but it can also be used to provide ","\t\t * custom filtering by allowing you to pre-processing the data and returning the data in","\t\t * the format that should be filtered upon. This is done by adding functions this object ","\t\t * with a parameter name which matches the sType for that target column. This is the","\t\t * corollary of &lt;i&gt;afnSortData&lt;/i&gt; for filtering data.","\t\t *   &lt;ul&gt;","\t     *     &lt;li&gt;","\t     *       Function input parameters:","\t     *       &lt;ul&gt;","\t\t *         &lt;li&gt;{*} Data from the column cell to be prepared for filtering&lt;/li&gt;","\t     *       &lt;/ul&gt;","\t     *     &lt;/li&gt;","\t\t *     &lt;li&gt;","\t\t *       Function return:","\t\t *       &lt;ul&gt;","\t\t *         &lt;li&gt;{string|null} Formatted string that will be used for the filtering.&lt;/li&gt;","\t\t *       &lt;/ul&gt;","\t\t *     &lt;/il&gt;","\t\t *   &lt;/ul&gt;","\t\t * ","\t\t * Note that as of v1.9, it is typically preferable to use &lt;i&gt;mData&lt;/i&gt; to prepare data for","\t\t * the different uses that DataTables can put the data to. Specifically &lt;i&gt;mData&lt;/i&gt; when","\t\t * used as a function will give you a 'type' (sorting, filtering etc) that you can use to ","\t\t * prepare the data as required for the different types. As such, this method is deprecated.","\t\t *  @type object","\t\t *  @default {}","\t\t *  @deprecated","\t\t *","\t\t *  @example","\t\t *    $.fn.dataTableExt.ofnSearch['title-numeric'] = function ( sData ) {","\t\t *      return sData.replace(/\\n/g,\" \").replace( /&lt;.*?&gt;/g, \"\" );","\t\t *    }","\t\t */","\t\t\"ofnSearch\": {},","\t","\t","\t\t/**","\t\t * Container for all private functions in DataTables so they can be exposed externally","\t\t *  @type object","\t\t *  @default {}","\t\t */","\t\t\"oApi\": {},","\t","\t","\t\t/**","\t\t * Storage for the various classes that DataTables uses","\t\t *  @type object","\t\t *  @default {}","\t\t */","\t\t\"oStdClasses\": {},","\t\t","\t","\t\t/**","\t\t * Storage for the various classes that DataTables uses - jQuery UI suitable","\t\t *  @type object","\t\t *  @default {}","\t\t */","\t\t\"oJUIClasses\": {},","\t","\t","\t\t/**","\t\t * Pagination plug-in methods - The style and controls of the pagination can significantly ","\t\t * impact on how the end user interacts with the data in your table, and DataTables allows ","\t\t * the addition of pagination controls by extending this object, which can then be enabled","\t\t * through the &lt;i&gt;sPaginationType&lt;/i&gt; initialisation parameter. Each pagination type that","\t\t * is added is an object (the property name of which is what &lt;i&gt;sPaginationType&lt;/i&gt; refers","\t\t * to) that has two properties, both methods that are used by DataTables to update the","\t\t * control's state.","\t\t *   &lt;ul&gt;","\t\t *     &lt;li&gt;","\t\t *       fnInit -  Initialisation of the paging controls. Called only during initialisation ","\t\t *         of the table. It is expected that this function will add the required DOM elements ","\t\t *         to the page for the paging controls to work. The element pointer ","\t\t *         'oSettings.aanFeatures.p' array is provided by DataTables to contain the paging ","\t\t *         controls (note that this is a 2D array to allow for multiple instances of each ","\t\t *         DataTables DOM element). It is suggested that you add the controls to this element ","\t\t *         as children","\t\t *       &lt;ul&gt;","\t     *         &lt;li&gt;","\t     *           Function input parameters:","\t     *           &lt;ul&gt;","\t\t *             &lt;li&gt;{object} DataTables settings object: see {@link DataTable.models.oSettings}.&lt;/li&gt;","\t\t *             &lt;li&gt;{node} Container into which the pagination controls must be inserted&lt;/li&gt;","\t\t *             &lt;li&gt;{function} Draw callback function - whenever the controls cause a page","\t\t *               change, this method must be called to redraw the table.&lt;/li&gt;","\t     *           &lt;/ul&gt;","\t     *         &lt;/li&gt;","\t\t *         &lt;li&gt;","\t\t *           Function return:","\t\t *           &lt;ul&gt;","\t\t *             &lt;li&gt;No return required&lt;/li&gt;","\t\t *           &lt;/ul&gt;","\t\t *         &lt;/il&gt;","\t\t *       &lt;/ul&gt;","\t\t *     &lt;/il&gt;","\t\t *     &lt;li&gt;","\t\t *       fnInit -  This function is called whenever the paging status of the table changes and is","\t\t *         typically used to update classes and/or text of the paging controls to reflex the new ","\t\t *         status.","\t\t *       &lt;ul&gt;","\t     *         &lt;li&gt;","\t     *           Function input parameters:","\t     *           &lt;ul&gt;","\t\t *             &lt;li&gt;{object} DataTables settings object: see {@link DataTable.models.oSettings}.&lt;/li&gt;","\t\t *             &lt;li&gt;{function} Draw callback function - in case you need to redraw the table again","\t\t *               or attach new event listeners&lt;/li&gt;","\t     *           &lt;/ul&gt;","\t     *         &lt;/li&gt;","\t\t *         &lt;li&gt;","\t\t *           Function return:","\t\t *           &lt;ul&gt;","\t\t *             &lt;li&gt;No return required&lt;/li&gt;","\t\t *           &lt;/ul&gt;","\t\t *         &lt;/il&gt;","\t\t *       &lt;/ul&gt;","\t\t *     &lt;/il&gt;","\t\t *   &lt;/ul&gt;","\t\t *  @type object","\t\t *  @default {}","\t\t *","\t\t *  @example","\t\t *    $.fn.dataTableExt.oPagination.four_button = {","\t\t *      \"fnInit\": function ( oSettings, nPaging, fnCallbackDraw ) {","\t\t *        nFirst = document.createElement( 'span' );","\t\t *        nPrevious = document.createElement( 'span' );","\t\t *        nNext = document.createElement( 'span' );","\t\t *        nLast = document.createElement( 'span' );","\t\t *        ","\t\t *        nFirst.appendChild( document.createTextNode( oSettings.oLanguage.oPaginate.sFirst ) );","\t\t *        nPrevious.appendChild( document.createTextNode( oSettings.oLanguage.oPaginate.sPrevious ) );","\t\t *        nNext.appendChild( document.createTextNode( oSettings.oLanguage.oPaginate.sNext ) );","\t\t *        nLast.appendChild( document.createTextNode( oSettings.oLanguage.oPaginate.sLast ) );","\t\t *        ","\t\t *        nFirst.className = \"paginate_button first\";","\t\t *        nPrevious.className = \"paginate_button previous\";","\t\t *        nNext.className=\"paginate_button next\";","\t\t *        nLast.className = \"paginate_button last\";","\t\t *        ","\t\t *        nPaging.appendChild( nFirst );","\t\t *        nPaging.appendChild( nPrevious );","\t\t *        nPaging.appendChild( nNext );","\t\t *        nPaging.appendChild( nLast );","\t\t *        ","\t\t *        $(nFirst).click( function () {","\t\t *          oSettings.oApi._fnPageChange( oSettings, \"first\" );","\t\t *          fnCallbackDraw( oSettings );","\t\t *        } );","\t\t *        ","\t\t *        $(nPrevious).click( function() {","\t\t *          oSettings.oApi._fnPageChange( oSettings, \"previous\" );","\t\t *          fnCallbackDraw( oSettings );","\t\t *        } );","\t\t *        ","\t\t *        $(nNext).click( function() {","\t\t *          oSettings.oApi._fnPageChange( oSettings, \"next\" );","\t\t *          fnCallbackDraw( oSettings );","\t\t *        } );","\t\t *        ","\t\t *        $(nLast).click( function() {","\t\t *          oSettings.oApi._fnPageChange( oSettings, \"last\" );","\t\t *          fnCallbackDraw( oSettings );","\t\t *        } );","\t\t *        ","\t\t *        $(nFirst).bind( 'selectstart', function () { return false; } );","\t\t *        $(nPrevious).bind( 'selectstart', function () { return false; } );","\t\t *        $(nNext).bind( 'selectstart', function () { return false; } );","\t\t *        $(nLast).bind( 'selectstart', function () { return false; } );","\t\t *      },","\t\t *      ","\t\t *      \"fnUpdate\": function ( oSettings, fnCallbackDraw ) {","\t\t *        if ( !oSettings.aanFeatures.p ) {","\t\t *          return;","\t\t *        }","\t\t *        ","\t\t *        // Loop over each instance of the pager","\t\t *        var an = oSettings.aanFeatures.p;","\t\t *        for ( var i=0, iLen=an.length ; i&lt;iLen ; i++ ) {","\t\t *          var buttons = an[i].getElementsByTagName('span');","\t\t *          if ( oSettings._iDisplayStart === 0 ) {","\t\t *            buttons[0].className = \"paginate_disabled_previous\";","\t\t *            buttons[1].className = \"paginate_disabled_previous\";","\t\t *          }","\t\t *          else {","\t\t *            buttons[0].className = \"paginate_enabled_previous\";","\t\t *            buttons[1].className = \"paginate_enabled_previous\";","\t\t *          }","\t\t *          ","\t\t *          if ( oSettings.fnDisplayEnd() == oSettings.fnRecordsDisplay() ) {","\t\t *            buttons[2].className = \"paginate_disabled_next\";","\t\t *            buttons[3].className = \"paginate_disabled_next\";","\t\t *          }","\t\t *          else {","\t\t *            buttons[2].className = \"paginate_enabled_next\";","\t\t *            buttons[3].className = \"paginate_enabled_next\";","\t\t *          }","\t\t *        }","\t\t *      }","\t\t *    };","\t\t */","\t\t\"oPagination\": {},","\t","\t","\t\t/**","\t\t * Sorting plug-in methods - Sorting in DataTables is based on the detected type of the","\t\t * data column (you can add your own type detection functions, or override automatic ","\t\t * detection using sType). With this specific type given to the column, DataTables will ","\t\t * apply the required sort from the functions in the object. Each sort type must provide","\t\t * two mandatory methods, one each for ascending and descending sorting, and can optionally","\t\t * provide a pre-formatting method that will help speed up sorting by allowing DataTables","\t\t * to pre-format the sort data only once (rather than every time the actual sort functions","\t\t * are run). The two sorting functions are typical Javascript sort methods:","\t\t *   &lt;ul&gt;","\t     *     &lt;li&gt;","\t     *       Function input parameters:","\t     *       &lt;ul&gt;","\t\t *         &lt;li&gt;{*} Data to compare to the second parameter&lt;/li&gt;","\t\t *         &lt;li&gt;{*} Data to compare to the first parameter&lt;/li&gt;","\t     *       &lt;/ul&gt;","\t     *     &lt;/li&gt;","\t\t *     &lt;li&gt;","\t\t *       Function return:","\t\t *       &lt;ul&gt;","\t\t *         &lt;li&gt;{int} Sorting match: &lt;0 if first parameter should be sorted lower than","\t\t *           the second parameter, ===0 if the two parameters are equal and &gt;0 if","\t\t *           the first parameter should be sorted height than the second parameter.&lt;/li&gt;","\t\t *       &lt;/ul&gt;","\t\t *     &lt;/il&gt;","\t\t *   &lt;/ul&gt;","\t\t *  @type object","\t\t *  @default {}","\t\t *","\t\t *  @example","\t\t *    // Case-sensitive string sorting, with no pre-formatting method","\t\t *    $.extend( $.fn.dataTableExt.oSort, {","\t\t *      \"string-case-asc\": function(x,y) {","\t\t *        return ((x &lt; y) ? -1 : ((x &gt; y) ? 1 : 0));","\t\t *      },","\t\t *      \"string-case-desc\": function(x,y) {","\t\t *        return ((x &lt; y) ? 1 : ((x &gt; y) ? -1 : 0));","\t\t *      }","\t\t *    } );","\t\t *","\t\t *  @example","\t\t *    // Case-insensitive string sorting, with pre-formatting","\t\t *    $.extend( $.fn.dataTableExt.oSort, {","\t\t *      \"string-pre\": function(x) {","\t\t *        return x.toLowerCase();","\t\t *      },","\t\t *      \"string-asc\": function(x,y) {","\t\t *        return ((x &lt; y) ? -1 : ((x &gt; y) ? 1 : 0));","\t\t *      },","\t\t *      \"string-desc\": function(x,y) {","\t\t *        return ((x &lt; y) ? 1 : ((x &gt; y) ? -1 : 0));","\t\t *      }","\t\t *    } );","\t\t */","\t\t\"oSort\": {},","\t","\t","\t\t/**","\t\t * Version string for plug-ins to check compatibility. Allowed format is","\t\t * a.b.c.d.e where: a:int, b:int, c:int, d:string(dev|beta), e:int. d and","\t\t * e are optional","\t\t *  @type string","\t\t *  @default Version number","\t\t */","\t\t\"sVersion\": DataTable.version,","\t","\t","\t\t/**","\t\t * How should DataTables report an error. Can take the value 'alert' or 'throw'","\t\t *  @type string","\t\t *  @default alert","\t\t */","\t\t\"sErrMode\": \"alert\",","\t","\t","\t\t/**","\t\t * Store information for DataTables to access globally about other instances","\t\t *  @namespace","\t\t *  @private","\t\t */","\t\t\"_oExternConfig\": {","\t\t\t/* int:iNextUnique - next unique number for an instance */","\t\t\t\"iNextUnique\": 0","\t\t}","\t};","\t","\t","\t","\t","\t/**","\t * Template object for the way in which DataTables holds information about","\t * search information for the global filter and individual column filters.","\t *  @namespace","\t */","\tDataTable.models.oSearch = {","\t\t/**","\t\t * Flag to indicate if the filtering should be case insensitive or not","\t\t *  @type boolean","\t\t *  @default true","\t\t */","\t\t\"bCaseInsensitive\": true,","\t","\t\t/**","\t\t * Applied search term","\t\t *  @type string","\t\t *  @default &lt;i&gt;Empty string&lt;/i&gt;","\t\t */","\t\t\"sSearch\": \"\",","\t","\t\t/**","\t\t * Flag to indicate if the search term should be interpreted as a","\t\t * regular expression (true) or not (false) and therefore and special","\t\t * regex characters escaped.","\t\t *  @type boolean","\t\t *  @default false","\t\t */","\t\t\"bRegex\": false,","\t","\t\t/**","\t\t * Flag to indicate if DataTables is to use its smart filtering or not.","\t\t *  @type boolean","\t\t *  @default true","\t\t */","\t\t\"bSmart\": true","\t};","\t","\t","\t","\t","\t/**","\t * Template object for the way in which DataTables holds information about","\t * each individual row. This is the object format used for the settings ","\t * aoData array.","\t *  @namespace","\t */","\tDataTable.models.oRow = {","\t\t/**","\t\t * TR element for the row","\t\t *  @type node","\t\t *  @default null","\t\t */","\t\t\"nTr\": null,","\t","\t\t/**","\t\t * Data object from the original data source for the row. This is either","\t\t * an array if using the traditional form of DataTables, or an object if","\t\t * using mData options. The exact type will depend on the passed in","\t\t * data from the data source, or will be an array if using DOM a data ","\t\t * source.","\t\t *  @type array|object","\t\t *  @default []","\t\t */","\t\t\"_aData\": [],","\t","\t\t/**","\t\t * Sorting data cache - this array is ostensibly the same length as the","\t\t * number of columns (although each index is generated only as it is ","\t\t * needed), and holds the data that is used for sorting each column in the","\t\t * row. We do this cache generation at the start of the sort in order that","\t\t * the formatting of the sort data need be done only once for each cell","\t\t * per sort. This array should not be read from or written to by anything","\t\t * other than the master sorting methods.","\t\t *  @type array","\t\t *  @default []","\t\t *  @private","\t\t */","\t\t\"_aSortData\": [],","\t","\t\t/**","\t\t * Array of TD elements that are cached for hidden rows, so they can be","\t\t * reinserted into the table if a column is made visible again (or to act","\t\t * as a store if a column is made hidden). Only hidden columns have a ","\t\t * reference in the array. For non-hidden columns the value is either","\t\t * undefined or null.","\t\t *  @type array nodes","\t\t *  @default []","\t\t *  @private","\t\t */","\t\t\"_anHidden\": [],","\t","\t\t/**","\t\t * Cache of the class name that DataTables has applied to the row, so we","\t\t * can quickly look at this variable rather than needing to do a DOM check","\t\t * on className for the nTr property.","\t\t *  @type string","\t\t *  @default &lt;i&gt;Empty string&lt;/i&gt;","\t\t *  @private","\t\t */","\t\t\"_sRowStripe\": \"\"","\t};","\t","\t","\t","\t/**","\t * Template object for the column information object in DataTables. This object","\t * is held in the settings aoColumns array and contains all the information that","\t * DataTables needs about each individual column.","\t * ","\t * Note that this object is related to {@link DataTable.defaults.columns} ","\t * but this one is the internal data store for DataTables's cache of columns.","\t * It should NOT be manipulated outside of DataTables. Any configuration should","\t * be done through the initialisation options.","\t *  @namespace","\t */","\tDataTable.models.oColumn = {","\t\t/**","\t\t * A list of the columns that sorting should occur on when this column","\t\t * is sorted. That this property is an array allows multi-column sorting","\t\t * to be defined for a column (for example first name / last name columns","\t\t * would benefit from this). The values are integers pointing to the","\t\t * columns to be sorted on (typically it will be a single integer pointing","\t\t * at itself, but that doesn't need to be the case).","\t\t *  @type array","\t\t */","\t\t\"aDataSort\": null,","\t","\t\t/**","\t\t * Define the sorting directions that are applied to the column, in sequence","\t\t * as the column is repeatedly sorted upon - i.e. the first value is used","\t\t * as the sorting direction when the column if first sorted (clicked on).","\t\t * Sort it again (click again) and it will move on to the next index.","\t\t * Repeat until loop.","\t\t *  @type array","\t\t */","\t\t\"asSorting\": null,","\t\t","\t\t/**","\t\t * Flag to indicate if the column is searchable, and thus should be included","\t\t * in the filtering or not.","\t\t *  @type boolean","\t\t */","\t\t\"bSearchable\": null,","\t\t","\t\t/**","\t\t * Flag to indicate if the column is sortable or not.","\t\t *  @type boolean","\t\t */","\t\t\"bSortable\": null,","\t\t","\t\t/**","\t\t * &lt;code&gt;Deprecated&lt;/code&gt; When using fnRender, you have two options for what ","\t\t * to do with the data, and this property serves as the switch. Firstly, you ","\t\t * can have the sorting and filtering use the rendered value (true - default), ","\t\t * or you can have the sorting and filtering us the original value (false).","\t\t *","\t\t * Please note that this option has now been deprecated and will be removed","\t\t * in the next version of DataTables. Please use mRender / mData rather than","\t\t * fnRender.","\t\t *  @type boolean","\t\t *  @deprecated","\t\t */","\t\t\"bUseRendered\": null,","\t\t","\t\t/**","\t\t * Flag to indicate if the column is currently visible in the table or not","\t\t *  @type boolean","\t\t */","\t\t\"bVisible\": null,","\t\t","\t\t/**","\t\t * Flag to indicate to the type detection method if the automatic type","\t\t * detection should be used, or if a column type (sType) has been specified","\t\t *  @type boolean","\t\t *  @default true","\t\t *  @private","\t\t */","\t\t\"_bAutoType\": true,","\t\t","\t\t/**","\t\t * Developer definable function that is called whenever a cell is created (Ajax source,","\t\t * etc) or processed for input (DOM source). This can be used as a compliment to mRender","\t\t * allowing you to modify the DOM element (add background colour for example) when the","\t\t * element is available.","\t\t *  @type function","\t\t *  @param {element} nTd The TD node that has been created","\t\t *  @param {*} sData The Data for the cell","\t\t *  @param {array|object} oData The data for the whole row","\t\t *  @param {int} iRow The row index for the aoData data store","\t\t *  @default null","\t\t */","\t\t\"fnCreatedCell\": null,","\t\t","\t\t/**","\t\t * Function to get data from a cell in a column. You should &lt;b&gt;never&lt;/b&gt;","\t\t * access data directly through _aData internally in DataTables - always use","\t\t * the method attached to this property. It allows mData to function as","\t\t * required. This function is automatically assigned by the column ","\t\t * initialisation method","\t\t *  @type function","\t\t *  @param {array|object} oData The data array/object for the array ","\t\t *    (i.e. aoData[]._aData)","\t\t *  @param {string} sSpecific The specific data type you want to get - ","\t\t *    'display', 'type' 'filter' 'sort'","\t\t *  @returns {*} The data for the cell from the given row's data","\t\t *  @default null","\t\t */","\t\t\"fnGetData\": null,","\t\t","\t\t/**","\t\t * &lt;code&gt;Deprecated&lt;/code&gt; Custom display function that will be called for the ","\t\t * display of each cell in this column.","\t\t *","\t\t * Please note that this option has now been deprecated and will be removed","\t\t * in the next version of DataTables. Please use mRender / mData rather than","\t\t * fnRender.","\t\t *  @type function","\t\t *  @param {object} o Object with the following parameters:","\t\t *  @param {int}    o.iDataRow The row in aoData","\t\t *  @param {int}    o.iDataColumn The column in question","\t\t *  @param {array}  o.aData The data for the row in question","\t\t *  @param {object} o.oSettings The settings object for this DataTables instance","\t\t *  @returns {string} The string you which to use in the display","\t\t *  @default null","\t\t *  @deprecated","\t\t */","\t\t\"fnRender\": null,","\t\t","\t\t/**","\t\t * Function to set data for a cell in the column. You should &lt;b&gt;never&lt;/b&gt; ","\t\t * set the data directly to _aData internally in DataTables - always use","\t\t * this method. It allows mData to function as required. This function","\t\t * is automatically assigned by the column initialisation method","\t\t *  @type function","\t\t *  @param {array|object} oData The data array/object for the array ","\t\t *    (i.e. aoData[]._aData)","\t\t *  @param {*} sValue Value to set","\t\t *  @default null","\t\t */","\t\t\"fnSetData\": null,","\t\t","\t\t/**","\t\t * Property to read the value for the cells in the column from the data ","\t\t * source array / object. If null, then the default content is used, if a","\t\t * function is given then the return from the function is used.","\t\t *  @type function|int|string|null","\t\t *  @default null","\t\t */","\t\t\"mData\": null,","\t\t","\t\t/**","\t\t * Partner property to mData which is used (only when defined) to get","\t\t * the data - i.e. it is basically the same as mData, but without the","\t\t * 'set' option, and also the data fed to it is the result from mData.","\t\t * This is the rendering method to match the data method of mData.","\t\t *  @type function|int|string|null","\t\t *  @default null","\t\t */","\t\t\"mRender\": null,","\t\t","\t\t/**","\t\t * Unique header TH/TD element for this column - this is what the sorting","\t\t * listener is attached to (if sorting is enabled.)","\t\t *  @type node","\t\t *  @default null","\t\t */","\t\t\"nTh\": null,","\t\t","\t\t/**","\t\t * Unique footer TH/TD element for this column (if there is one). Not used ","\t\t * in DataTables as such, but can be used for plug-ins to reference the ","\t\t * footer for each column.","\t\t *  @type node","\t\t *  @default null","\t\t */","\t\t\"nTf\": null,","\t\t","\t\t/**","\t\t * The class to apply to all TD elements in the table's TBODY for the column","\t\t *  @type string","\t\t *  @default null","\t\t */","\t\t\"sClass\": null,","\t\t","\t\t/**","\t\t * When DataTables calculates the column widths to assign to each column,","\t\t * it finds the longest string in each column and then constructs a","\t\t * temporary table and reads the widths from that. The problem with this","\t\t * is that \"mmm\" is much wider then \"iiii\", but the latter is a longer ","\t\t * string - thus the calculation can go wrong (doing it properly and putting","\t\t * it into an DOM object and measuring that is horribly(!) slow). Thus as","\t\t * a \"work around\" we provide this option. It will append its value to the","\t\t * text that is found to be the longest string for the column - i.e. padding.","\t\t *  @type string","\t\t */","\t\t\"sContentPadding\": null,","\t\t","\t\t/**","\t\t * Allows a default value to be given for a column's data, and will be used","\t\t * whenever a null data source is encountered (this can be because mData","\t\t * is set to null, or because the data source itself is null).","\t\t *  @type string","\t\t *  @default null","\t\t */","\t\t\"sDefaultContent\": null,","\t\t","\t\t/**","\t\t * Name for the column, allowing reference to the column by name as well as","\t\t * by index (needs a lookup to work by name).","\t\t *  @type string","\t\t */","\t\t\"sName\": null,","\t\t","\t\t/**","\t\t * Custom sorting data type - defines which of the available plug-ins in","\t\t * afnSortData the custom sorting will use - if any is defined.","\t\t *  @type string","\t\t *  @default std","\t\t */","\t\t\"sSortDataType\": 'std',","\t\t","\t\t/**","\t\t * Class to be applied to the header element when sorting on this column","\t\t *  @type string","\t\t *  @default null","\t\t */","\t\t\"sSortingClass\": null,","\t\t","\t\t/**","\t\t * Class to be applied to the header element when sorting on this column -","\t\t * when jQuery UI theming is used.","\t\t *  @type string","\t\t *  @default null","\t\t */","\t\t\"sSortingClassJUI\": null,","\t\t","\t\t/**","\t\t * Title of the column - what is seen in the TH element (nTh).","\t\t *  @type string","\t\t */","\t\t\"sTitle\": null,","\t\t","\t\t/**","\t\t * Column sorting and filtering type","\t\t *  @type string","\t\t *  @default null","\t\t */","\t\t\"sType\": null,","\t\t","\t\t/**","\t\t * Width of the column","\t\t *  @type string","\t\t *  @default null","\t\t */","\t\t\"sWidth\": null,","\t\t","\t\t/**","\t\t * Width of the column when it was first \"encountered\"","\t\t *  @type string","\t\t *  @default null","\t\t */","\t\t\"sWidthOrig\": null","\t};","\t","\t","\t","\t/**","\t * Initialisation options that can be given to DataTables at initialisation ","\t * time.","\t *  @namespace","\t */","\tDataTable.defaults = {","\t\t/**","\t\t * An array of data to use for the table, passed in at initialisation which ","\t\t * will be used in preference to any data which is already in the DOM. This is","\t\t * particularly useful for constructing tables purely in Javascript, for","\t\t * example with a custom Ajax call.","\t\t *  @type array","\t\t *  @default null","\t\t *  @dtopt Option","\t\t * ","\t\t *  @example","\t\t *    // Using a 2D array data source","\t\t *    $(document).ready( function () {","\t\t *      $('#example').dataTable( {","\t\t *        \"aaData\": [","\t\t *          ['Trident', 'Internet Explorer 4.0', 'Win 95+', 4, 'X'],","\t\t *          ['Trident', 'Internet Explorer 5.0', 'Win 95+', 5, 'C'],","\t\t *        ],","\t\t *        \"aoColumns\": [","\t\t *          { \"sTitle\": \"Engine\" },","\t\t *          { \"sTitle\": \"Browser\" },","\t\t *          { \"sTitle\": \"Platform\" },","\t\t *          { \"sTitle\": \"Version\" },","\t\t *          { \"sTitle\": \"Grade\" }","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t *    ","\t\t *  @example","\t\t *    // Using an array of objects as a data source (mData)","\t\t *    $(document).ready( function () {","\t\t *      $('#example').dataTable( {","\t\t *        \"aaData\": [","\t\t *          {","\t\t *            \"engine\":   \"Trident\",","\t\t *            \"browser\":  \"Internet Explorer 4.0\",","\t\t *            \"platform\": \"Win 95+\",","\t\t *            \"version\":  4,","\t\t *            \"grade\":    \"X\"","\t\t *          },","\t\t *          {","\t\t *            \"engine\":   \"Trident\",","\t\t *            \"browser\":  \"Internet Explorer 5.0\",","\t\t *            \"platform\": \"Win 95+\",","\t\t *            \"version\":  5,","\t\t *            \"grade\":    \"C\"","\t\t *          }","\t\t *        ],","\t\t *        \"aoColumns\": [","\t\t *          { \"sTitle\": \"Engine\",   \"mData\": \"engine\" },","\t\t *          { \"sTitle\": \"Browser\",  \"mData\": \"browser\" },","\t\t *          { \"sTitle\": \"Platform\", \"mData\": \"platform\" },","\t\t *          { \"sTitle\": \"Version\",  \"mData\": \"version\" },","\t\t *          { \"sTitle\": \"Grade\",    \"mData\": \"grade\" }","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"aaData\": null,","\t","\t","\t\t/**","\t\t * If sorting is enabled, then DataTables will perform a first pass sort on ","\t\t * initialisation. You can define which column(s) the sort is performed upon, ","\t\t * and the sorting direction, with this variable. The aaSorting array should ","\t\t * contain an array for each column to be sorted initially containing the ","\t\t * column's index and a direction string ('asc' or 'desc').","\t\t *  @type array","\t\t *  @default [[0,'asc']]","\t\t *  @dtopt Option","\t\t * ","\t\t *  @example","\t\t *    // Sort by 3rd column first, and then 4th column","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aaSorting\": [[2,'asc'], [3,'desc']]","\t\t *      } );","\t\t *    } );","\t\t *    ","\t\t *    // No initial sorting","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aaSorting\": []","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"aaSorting\": [[0,'asc']],","\t","\t","\t\t/**","\t\t * This parameter is basically identical to the aaSorting parameter, but ","\t\t * cannot be overridden by user interaction with the table. What this means ","\t\t * is that you could have a column (visible or hidden) which the sorting will ","\t\t * always be forced on first - any sorting after that (from the user) will ","\t\t * then be performed as required. This can be useful for grouping rows ","\t\t * together.","\t\t *  @type array","\t\t *  @default null","\t\t *  @dtopt Option","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aaSortingFixed\": [[0,'asc']]","\t\t *      } );","\t\t *    } )","\t\t */","\t\t\"aaSortingFixed\": null,","\t","\t","\t\t/**","\t\t * This parameter allows you to readily specify the entries in the length drop","\t\t * down menu that DataTables shows when pagination is enabled. It can be ","\t\t * either a 1D array of options which will be used for both the displayed ","\t\t * option and the value, or a 2D array which will use the array in the first ","\t\t * position as the value, and the array in the second position as the ","\t\t * displayed options (useful for language strings such as 'All').","\t\t *  @type array","\t\t *  @default [ 10, 25, 50, 100 ]","\t\t *  @dtopt Option","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aLengthMenu\": [[10, 25, 50, -1], [10, 25, 50, \"All\"]]","\t\t *      } );","\t\t *    } );","\t\t *  ","\t\t *  @example","\t\t *    // Setting the default display length as well as length menu","\t\t *    // This is likely to be wanted if you remove the '10' option which","\t\t *    // is the iDisplayLength default.","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"iDisplayLength\": 25,","\t\t *        \"aLengthMenu\": [[25, 50, 100, -1], [25, 50, 100, \"All\"]]","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"aLengthMenu\": [ 10, 25, 50, 100 ],","\t","\t","\t\t/**","\t\t * The aoColumns option in the initialisation parameter allows you to define","\t\t * details about the way individual columns behave. For a full list of","\t\t * column options that can be set, please see ","\t\t * {@link DataTable.defaults.columns}. Note that if you use aoColumns to","\t\t * define your columns, you must have an entry in the array for every single","\t\t * column that you have in your table (these can be null if you don't which","\t\t * to specify any options).","\t\t *  @member","\t\t */","\t\t\"aoColumns\": null,","\t","\t\t/**","\t\t * Very similar to aoColumns, aoColumnDefs allows you to target a specific ","\t\t * column, multiple columns, or all columns, using the aTargets property of ","\t\t * each object in the array. This allows great flexibility when creating ","\t\t * tables, as the aoColumnDefs arrays can be of any length, targeting the ","\t\t * columns you specifically want. aoColumnDefs may use any of the column ","\t\t * options available: {@link DataTable.defaults.columns}, but it _must_","\t\t * have aTargets defined in each object in the array. Values in the aTargets","\t\t * array may be:","\t\t *   &lt;ul&gt;","\t\t *     &lt;li&gt;a string - class name will be matched on the TH for the column&lt;/li&gt;","\t\t *     &lt;li&gt;0 or a positive integer - column index counting from the left&lt;/li&gt;","\t\t *     &lt;li&gt;a negative integer - column index counting from the right&lt;/li&gt;","\t\t *     &lt;li&gt;the string \"_all\" - all columns (i.e. assign a default)&lt;/li&gt;","\t\t *   &lt;/ul&gt;","\t\t *  @member","\t\t */","\t\t\"aoColumnDefs\": null,","\t","\t","\t\t/**","\t\t * Basically the same as oSearch, this parameter defines the individual column","\t\t * filtering state at initialisation time. The array must be of the same size ","\t\t * as the number of columns, and each element be an object with the parameters","\t\t * \"sSearch\" and \"bEscapeRegex\" (the latter is optional). 'null' is also","\t\t * accepted and the default will be used.","\t\t *  @type array","\t\t *  @default []","\t\t *  @dtopt Option","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoSearchCols\": [","\t\t *          null,","\t\t *          { \"sSearch\": \"My filter\" },","\t\t *          null,","\t\t *          { \"sSearch\": \"^[0-9]\", \"bEscapeRegex\": false }","\t\t *        ]","\t\t *      } );","\t\t *    } )","\t\t */","\t\t\"aoSearchCols\": [],","\t","\t","\t\t/**","\t\t * An array of CSS classes that should be applied to displayed rows. This ","\t\t * array may be of any length, and DataTables will apply each class ","\t\t * sequentially, looping when required.","\t\t *  @type array","\t\t *  @default null &lt;i&gt;Will take the values determined by the oClasses.sStripe*","\t\t *    options&lt;/i&gt;","\t\t *  @dtopt Option","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"asStripeClasses\": [ 'strip1', 'strip2', 'strip3' ]","\t\t *      } );","\t\t *    } )","\t\t */","\t\t\"asStripeClasses\": null,","\t","\t","\t\t/**","\t\t * Enable or disable automatic column width calculation. This can be disabled","\t\t * as an optimisation (it takes some time to calculate the widths) if the","\t\t * tables widths are passed in using aoColumns.","\t\t *  @type boolean","\t\t *  @default true","\t\t *  @dtopt Features","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function () {","\t\t *      $('#example').dataTable( {","\t\t *        \"bAutoWidth\": false","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"bAutoWidth\": true,","\t","\t","\t\t/**","\t\t * Deferred rendering can provide DataTables with a huge speed boost when you","\t\t * are using an Ajax or JS data source for the table. This option, when set to","\t\t * true, will cause DataTables to defer the creation of the table elements for","\t\t * each row until they are needed for a draw - saving a significant amount of","\t\t * time.","\t\t *  @type boolean","\t\t *  @default false","\t\t *  @dtopt Features","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      var oTable = $('#example').dataTable( {","\t\t *        \"sAjaxSource\": \"sources/arrays.txt\",","\t\t *        \"bDeferRender\": true","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"bDeferRender\": false,","\t","\t","\t\t/**","\t\t * Replace a DataTable which matches the given selector and replace it with ","\t\t * one which has the properties of the new initialisation object passed. If no","\t\t * table matches the selector, then the new DataTable will be constructed as","\t\t * per normal.","\t\t *  @type boolean","\t\t *  @default false","\t\t *  @dtopt Options","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"sScrollY\": \"200px\",","\t\t *        \"bPaginate\": false","\t\t *      } );","\t\t *      ","\t\t *      // Some time later....","\t\t *      $('#example').dataTable( {","\t\t *        \"bFilter\": false,","\t\t *        \"bDestroy\": true","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"bDestroy\": false,","\t","\t","\t\t/**","\t\t * Enable or disable filtering of data. Filtering in DataTables is \"smart\" in","\t\t * that it allows the end user to input multiple words (space separated) and","\t\t * will match a row containing those words, even if not in the order that was","\t\t * specified (this allow matching across multiple columns). Note that if you","\t\t * wish to use filtering in DataTables this must remain 'true' - to remove the","\t\t * default filtering input box and retain filtering abilities, please use","\t\t * {@link DataTable.defaults.sDom}.","\t\t *  @type boolean","\t\t *  @default true","\t\t *  @dtopt Features","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function () {","\t\t *      $('#example').dataTable( {","\t\t *        \"bFilter\": false","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"bFilter\": true,","\t","\t","\t\t/**","\t\t * Enable or disable the table information display. This shows information ","\t\t * about the data that is currently visible on the page, including information","\t\t * about filtered data if that action is being performed.","\t\t *  @type boolean","\t\t *  @default true","\t\t *  @dtopt Features","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function () {","\t\t *      $('#example').dataTable( {","\t\t *        \"bInfo\": false","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"bInfo\": true,","\t","\t","\t\t/**","\t\t * Enable jQuery UI ThemeRoller support (required as ThemeRoller requires some","\t\t * slightly different and additional mark-up from what DataTables has","\t\t * traditionally used).","\t\t *  @type boolean","\t\t *  @default false","\t\t *  @dtopt Features","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"bJQueryUI\": true","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"bJQueryUI\": false,","\t","\t","\t\t/**","\t\t * Allows the end user to select the size of a formatted page from a select","\t\t * menu (sizes are 10, 25, 50 and 100). Requires pagination (bPaginate).","\t\t *  @type boolean","\t\t *  @default true","\t\t *  @dtopt Features","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function () {","\t\t *      $('#example').dataTable( {","\t\t *        \"bLengthChange\": false","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"bLengthChange\": true,","\t","\t","\t\t/**","\t\t * Enable or disable pagination.","\t\t *  @type boolean","\t\t *  @default true","\t\t *  @dtopt Features","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function () {","\t\t *      $('#example').dataTable( {","\t\t *        \"bPaginate\": false","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"bPaginate\": true,","\t","\t","\t\t/**","\t\t * Enable or disable the display of a 'processing' indicator when the table is","\t\t * being processed (e.g. a sort). This is particularly useful for tables with","\t\t * large amounts of data where it can take a noticeable amount of time to sort","\t\t * the entries.","\t\t *  @type boolean","\t\t *  @default false","\t\t *  @dtopt Features","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function () {","\t\t *      $('#example').dataTable( {","\t\t *        \"bProcessing\": true","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"bProcessing\": false,","\t","\t","\t\t/**","\t\t * Retrieve the DataTables object for the given selector. Note that if the","\t\t * table has already been initialised, this parameter will cause DataTables","\t\t * to simply return the object that has already been set up - it will not take","\t\t * account of any changes you might have made to the initialisation object","\t\t * passed to DataTables (setting this parameter to true is an acknowledgement","\t\t * that you understand this). bDestroy can be used to reinitialise a table if","\t\t * you need.","\t\t *  @type boolean","\t\t *  @default false","\t\t *  @dtopt Options","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      initTable();","\t\t *      tableActions();","\t\t *    } );","\t\t *    ","\t\t *    function initTable ()","\t\t *    {","\t\t *      return $('#example').dataTable( {","\t\t *        \"sScrollY\": \"200px\",","\t\t *        \"bPaginate\": false,","\t\t *        \"bRetrieve\": true","\t\t *      } );","\t\t *    }","\t\t *    ","\t\t *    function tableActions ()","\t\t *    {","\t\t *      var oTable = initTable();","\t\t *      // perform API operations with oTable ","\t\t *    }","\t\t */","\t\t\"bRetrieve\": false,","\t","\t","\t\t/**","\t\t * Indicate if DataTables should be allowed to set the padding / margin","\t\t * etc for the scrolling header elements or not. Typically you will want","\t\t * this.","\t\t *  @type boolean","\t\t *  @default true","\t\t *  @dtopt Options","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"bScrollAutoCss\": false,","\t\t *        \"sScrollY\": \"200px\"","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"bScrollAutoCss\": true,","\t","\t","\t\t/**","\t\t * When vertical (y) scrolling is enabled, DataTables will force the height of","\t\t * the table's viewport to the given height at all times (useful for layout).","\t\t * However, this can look odd when filtering data down to a small data set,","\t\t * and the footer is left \"floating\" further down. This parameter (when","\t\t * enabled) will cause DataTables to collapse the table's viewport down when","\t\t * the result set will fit within the given Y height.","\t\t *  @type boolean","\t\t *  @default false","\t\t *  @dtopt Options","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"sScrollY\": \"200\",","\t\t *        \"bScrollCollapse\": true","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"bScrollCollapse\": false,","\t","\t","\t\t/**","\t\t * Enable infinite scrolling for DataTables (to be used in combination with","\t\t * sScrollY). Infinite scrolling means that DataTables will continually load","\t\t * data as a user scrolls through a table, which is very useful for large","\t\t * dataset. This cannot be used with pagination, which is automatically","\t\t * disabled. Note - the Scroller extra for DataTables is recommended in","\t\t * in preference to this option.","\t\t *  @type boolean","\t\t *  @default false","\t\t *  @dtopt Features","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"bScrollInfinite\": true,","\t\t *        \"bScrollCollapse\": true,","\t\t *        \"sScrollY\": \"200px\"","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"bScrollInfinite\": false,","\t","\t","\t\t/**","\t\t * Configure DataTables to use server-side processing. Note that the","\t\t * sAjaxSource parameter must also be given in order to give DataTables a","\t\t * source to obtain the required data for each draw.","\t\t *  @type boolean","\t\t *  @default false","\t\t *  @dtopt Features","\t\t *  @dtopt Server-side","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function () {","\t\t *      $('#example').dataTable( {","\t\t *        \"bServerSide\": true,","\t\t *        \"sAjaxSource\": \"xhr.php\"","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"bServerSide\": false,","\t","\t","\t\t/**","\t\t * Enable or disable sorting of columns. Sorting of individual columns can be","\t\t * disabled by the \"bSortable\" option for each column.","\t\t *  @type boolean","\t\t *  @default true","\t\t *  @dtopt Features","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function () {","\t\t *      $('#example').dataTable( {","\t\t *        \"bSort\": false","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"bSort\": true,","\t","\t","\t\t/**","\t\t * Allows control over whether DataTables should use the top (true) unique","\t\t * cell that is found for a single column, or the bottom (false - default).","\t\t * This is useful when using complex headers.","\t\t *  @type boolean","\t\t *  @default false","\t\t *  @dtopt Options","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"bSortCellsTop\": true","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"bSortCellsTop\": false,","\t","\t","\t\t/**","\t\t * Enable or disable the addition of the classes 'sorting_1', 'sorting_2' and","\t\t * 'sorting_3' to the columns which are currently being sorted on. This is","\t\t * presented as a feature switch as it can increase processing time (while","\t\t * classes are removed and added) so for large data sets you might want to","\t\t * turn this off.","\t\t *  @type boolean","\t\t *  @default true","\t\t *  @dtopt Features","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function () {","\t\t *      $('#example').dataTable( {","\t\t *        \"bSortClasses\": false","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"bSortClasses\": true,","\t","\t","\t\t/**","\t\t * Enable or disable state saving. When enabled a cookie will be used to save","\t\t * table display information such as pagination information, display length,","\t\t * filtering and sorting. As such when the end user reloads the page the","\t\t * display display will match what thy had previously set up.","\t\t *  @type boolean","\t\t *  @default false","\t\t *  @dtopt Features","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function () {","\t\t *      $('#example').dataTable( {","\t\t *        \"bStateSave\": true","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"bStateSave\": false,","\t","\t","\t\t/**","\t\t * Customise the cookie and / or the parameters being stored when using","\t\t * DataTables with state saving enabled. This function is called whenever","\t\t * the cookie is modified, and it expects a fully formed cookie string to be","\t\t * returned. Note that the data object passed in is a Javascript object which","\t\t * must be converted to a string (JSON.stringify for example).","\t\t *  @type function","\t\t *  @param {string} sName Name of the cookie defined by DataTables","\t\t *  @param {object} oData Data to be stored in the cookie","\t\t *  @param {string} sExpires Cookie expires string","\t\t *  @param {string} sPath Path of the cookie to set","\t\t *  @returns {string} Cookie formatted string (which should be encoded by","\t\t *    using encodeURIComponent())","\t\t *  @dtopt Callbacks","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function () {","\t\t *      $('#example').dataTable( {","\t\t *        \"fnCookieCallback\": function (sName, oData, sExpires, sPath) {","\t\t *          // Customise oData or sName or whatever else here","\t\t *          return sName + \"=\"+JSON.stringify(oData)+\"; expires=\" + sExpires +\"; path=\" + sPath;","\t\t *        }","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"fnCookieCallback\": null,","\t","\t","\t\t/**","\t\t * This function is called when a TR element is created (and all TD child","\t\t * elements have been inserted), or registered if using a DOM source, allowing","\t\t * manipulation of the TR element (adding classes etc).","\t\t *  @type function","\t\t *  @param {node} nRow \"TR\" element for the current row","\t\t *  @param {array} aData Raw data array for this row","\t\t *  @param {int} iDataIndex The index of this row in aoData","\t\t *  @dtopt Callbacks","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"fnCreatedRow\": function( nRow, aData, iDataIndex ) {","\t\t *          // Bold the grade for all 'A' grade browsers","\t\t *          if ( aData[4] == \"A\" )","\t\t *          {","\t\t *            $('td:eq(4)', nRow).html( '&lt;b&gt;A&lt;/b&gt;' );","\t\t *          }","\t\t *        }","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"fnCreatedRow\": null,","\t","\t","\t\t/**","\t\t * This function is called on every 'draw' event, and allows you to","\t\t * dynamically modify any aspect you want about the created DOM.","\t\t *  @type function","\t\t *  @param {object} oSettings DataTables settings object","\t\t *  @dtopt Callbacks","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"fnDrawCallback\": function( oSettings ) {","\t\t *          alert( 'DataTables has redrawn the table' );","\t\t *        }","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"fnDrawCallback\": null,","\t","\t","\t\t/**","\t\t * Identical to fnHeaderCallback() but for the table footer this function","\t\t * allows you to modify the table footer on every 'draw' even.","\t\t *  @type function","\t\t *  @param {node} nFoot \"TR\" element for the footer","\t\t *  @param {array} aData Full table data (as derived from the original HTML)","\t\t *  @param {int} iStart Index for the current display starting point in the ","\t\t *    display array","\t\t *  @param {int} iEnd Index for the current display ending point in the ","\t\t *    display array","\t\t *  @param {array int} aiDisplay Index array to translate the visual position","\t\t *    to the full data array","\t\t *  @dtopt Callbacks","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"fnFooterCallback\": function( nFoot, aData, iStart, iEnd, aiDisplay ) {","\t\t *          nFoot.getElementsByTagName('th')[0].innerHTML = \"Starting index is \"+iStart;","\t\t *        }","\t\t *      } );","\t\t *    } )","\t\t */","\t\t\"fnFooterCallback\": null,","\t","\t","\t\t/**","\t\t * When rendering large numbers in the information element for the table","\t\t * (i.e. \"Showing 1 to 10 of 57 entries\") DataTables will render large numbers","\t\t * to have a comma separator for the 'thousands' units (e.g. 1 million is","\t\t * rendered as \"1,000,000\") to help readability for the end user. This","\t\t * function will override the default method DataTables uses.","\t\t *  @type function","\t\t *  @member","\t\t *  @param {int} iIn number to be formatted","\t\t *  @returns {string} formatted string for DataTables to show the number","\t\t *  @dtopt Callbacks","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"fnFormatNumber\": function ( iIn ) {","\t\t *          if ( iIn &amp;lt; 1000 ) {","\t\t *            return iIn;","\t\t *          } else {","\t\t *            var ","\t\t *              s=(iIn+\"\"), ","\t\t *              a=s.split(\"\"), out=\"\", ","\t\t *              iLen=s.length;","\t\t *            ","\t\t *            for ( var i=0 ; i&amp;lt;iLen ; i++ ) {","\t\t *              if ( i%3 === 0 &amp;amp;&amp;amp; i !== 0 ) {","\t\t *                out = \"'\"+out;","\t\t *              }","\t\t *              out = a[iLen-i-1]+out;","\t\t *            }","\t\t *          }","\t\t *          return out;","\t\t *        };","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"fnFormatNumber\": function ( iIn ) {","\t\t\tif ( iIn &lt; 1000 )","\t\t\t{","\t\t\t\t// A small optimisation for what is likely to be the majority of use cases","\t\t\t\treturn iIn;","\t\t\t}","\t","\t\t\tvar s=(iIn+\"\"), a=s.split(\"\"), out=\"\", iLen=s.length;","\t\t\t","\t\t\tfor ( var i=0 ; i&lt;iLen ; i++ )","\t\t\t{","\t\t\t\tif ( i%3 === 0 &amp;&amp; i !== 0 )","\t\t\t\t{","\t\t\t\t\tout = this.oLanguage.sInfoThousands+out;","\t\t\t\t}","\t\t\t\tout = a[iLen-i-1]+out;","\t\t\t}","\t\t\treturn out;","\t\t},","\t","\t","\t\t/**","\t\t * This function is called on every 'draw' event, and allows you to","\t\t * dynamically modify the header row. This can be used to calculate and","\t\t * display useful information about the table.","\t\t *  @type function","\t\t *  @param {node} nHead \"TR\" element for the header","\t\t *  @param {array} aData Full table data (as derived from the original HTML)","\t\t *  @param {int} iStart Index for the current display starting point in the","\t\t *    display array","\t\t *  @param {int} iEnd Index for the current display ending point in the","\t\t *    display array","\t\t *  @param {array int} aiDisplay Index array to translate the visual position","\t\t *    to the full data array","\t\t *  @dtopt Callbacks","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"fnHeaderCallback\": function( nHead, aData, iStart, iEnd, aiDisplay ) {","\t\t *          nHead.getElementsByTagName('th')[0].innerHTML = \"Displaying \"+(iEnd-iStart)+\" records\";","\t\t *        }","\t\t *      } );","\t\t *    } )","\t\t */","\t\t\"fnHeaderCallback\": null,","\t","\t","\t\t/**","\t\t * The information element can be used to convey information about the current","\t\t * state of the table. Although the internationalisation options presented by","\t\t * DataTables are quite capable of dealing with most customisations, there may","\t\t * be times where you wish to customise the string further. This callback","\t\t * allows you to do exactly that.","\t\t *  @type function","\t\t *  @param {object} oSettings DataTables settings object","\t\t *  @param {int} iStart Starting position in data for the draw","\t\t *  @param {int} iEnd End position in data for the draw","\t\t *  @param {int} iMax Total number of rows in the table (regardless of","\t\t *    filtering)","\t\t *  @param {int} iTotal Total number of rows in the data set, after filtering","\t\t *  @param {string} sPre The string that DataTables has formatted using it's","\t\t *    own rules","\t\t *  @returns {string} The string to be displayed in the information element.","\t\t *  @dtopt Callbacks","\t\t * ","\t\t *  @example","\t\t *    $('#example').dataTable( {","\t\t *      \"fnInfoCallback\": function( oSettings, iStart, iEnd, iMax, iTotal, sPre ) {","\t\t *        return iStart +\" to \"+ iEnd;","\t\t *      }","\t\t *    } );","\t\t */","\t\t\"fnInfoCallback\": null,","\t","\t","\t\t/**","\t\t * Called when the table has been initialised. Normally DataTables will","\t\t * initialise sequentially and there will be no need for this function,","\t\t * however, this does not hold true when using external language information","\t\t * since that is obtained using an async XHR call.","\t\t *  @type function","\t\t *  @param {object} oSettings DataTables settings object","\t\t *  @param {object} json The JSON object request from the server - only","\t\t *    present if client-side Ajax sourced data is used","\t\t *  @dtopt Callbacks","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"fnInitComplete\": function(oSettings, json) {","\t\t *          alert( 'DataTables has finished its initialisation.' );","\t\t *        }","\t\t *      } );","\t\t *    } )","\t\t */","\t\t\"fnInitComplete\": null,","\t","\t","\t\t/**","\t\t * Called at the very start of each table draw and can be used to cancel the","\t\t * draw by returning false, any other return (including undefined) results in","\t\t * the full draw occurring).","\t\t *  @type function","\t\t *  @param {object} oSettings DataTables settings object","\t\t *  @returns {boolean} False will cancel the draw, anything else (including no","\t\t *    return) will allow it to complete.","\t\t *  @dtopt Callbacks","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"fnPreDrawCallback\": function( oSettings ) {","\t\t *          if ( $('#test').val() == 1 ) {","\t\t *            return false;","\t\t *          }","\t\t *        }","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"fnPreDrawCallback\": null,","\t","\t","\t\t/**","\t\t * This function allows you to 'post process' each row after it have been","\t\t * generated for each table draw, but before it is rendered on screen. This","\t\t * function might be used for setting the row class name etc.","\t\t *  @type function","\t\t *  @param {node} nRow \"TR\" element for the current row","\t\t *  @param {array} aData Raw data array for this row","\t\t *  @param {int} iDisplayIndex The display index for the current table draw","\t\t *  @param {int} iDisplayIndexFull The index of the data in the full list of","\t\t *    rows (after filtering)","\t\t *  @dtopt Callbacks","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"fnRowCallback\": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {","\t\t *          // Bold the grade for all 'A' grade browsers","\t\t *          if ( aData[4] == \"A\" )","\t\t *          {","\t\t *            $('td:eq(4)', nRow).html( '&lt;b&gt;A&lt;/b&gt;' );","\t\t *          }","\t\t *        }","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"fnRowCallback\": null,","\t","\t","\t\t/**","\t\t * This parameter allows you to override the default function which obtains","\t\t * the data from the server ($.getJSON) so something more suitable for your","\t\t * application. For example you could use POST data, or pull information from","\t\t * a Gears or AIR database.","\t\t *  @type function","\t\t *  @member","\t\t *  @param {string} sSource HTTP source to obtain the data from (sAjaxSource)","\t\t *  @param {array} aoData A key/value pair object containing the data to send","\t\t *    to the server","\t\t *  @param {function} fnCallback to be called on completion of the data get","\t\t *    process that will draw the data on the page.","\t\t *  @param {object} oSettings DataTables settings object","\t\t *  @dtopt Callbacks","\t\t *  @dtopt Server-side","\t\t * ","\t\t *  @example","\t\t *    // POST data to server","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"bProcessing\": true,","\t\t *        \"bServerSide\": true,","\t\t *        \"sAjaxSource\": \"xhr.php\",","\t\t *        \"fnServerData\": function ( sSource, aoData, fnCallback, oSettings ) {","\t\t *          oSettings.jqXHR = $.ajax( {","\t\t *            \"dataType\": 'json', ","\t\t *            \"type\": \"POST\", ","\t\t *            \"url\": sSource, ","\t\t *            \"data\": aoData, ","\t\t *            \"success\": fnCallback","\t\t *          } );","\t\t *        }","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"fnServerData\": function ( sUrl, aoData, fnCallback, oSettings ) {","\t\t\toSettings.jqXHR = $.ajax( {","\t\t\t\t\"url\":  sUrl,","\t\t\t\t\"data\": aoData,","\t\t\t\t\"success\": function (json) {","\t\t\t\t\tif ( json.sError ) {","\t\t\t\t\t\toSettings.oApi._fnLog( oSettings, 0, json.sError );","\t\t\t\t\t}","\t\t\t\t\t","\t\t\t\t\t$(oSettings.oInstance).trigger('xhr', [oSettings, json]);","\t\t\t\t\tfnCallback( json );","\t\t\t\t},","\t\t\t\t\"dataType\": \"json\",","\t\t\t\t\"cache\": false,","\t\t\t\t\"type\": oSettings.sServerMethod,","\t\t\t\t\"error\": function (xhr, error, thrown) {","\t\t\t\t\tif ( error == \"parsererror\" ) {","\t\t\t\t\t\toSettings.oApi._fnLog( oSettings, 0, \"DataTables warning: JSON data from \"+","\t\t\t\t\t\t\t\"server could not be parsed. This is caused by a JSON formatting error.\" );","\t\t\t\t\t}","\t\t\t\t}","\t\t\t} );","\t\t},","\t","\t","\t\t/**","\t\t * It is often useful to send extra data to the server when making an Ajax","\t\t * request - for example custom filtering information, and this callback","\t\t * function makes it trivial to send extra information to the server. The","\t\t * passed in parameter is the data set that has been constructed by","\t\t * DataTables, and you can add to this or modify it as you require.","\t\t *  @type function","\t\t *  @param {array} aoData Data array (array of objects which are name/value","\t\t *    pairs) that has been constructed by DataTables and will be sent to the","\t\t *    server. In the case of Ajax sourced data with server-side processing","\t\t *    this will be an empty array, for server-side processing there will be a","\t\t *    significant number of parameters!","\t\t *  @returns {undefined} Ensure that you modify the aoData array passed in,","\t\t *    as this is passed by reference.","\t\t *  @dtopt Callbacks","\t\t *  @dtopt Server-side","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"bProcessing\": true,","\t\t *        \"bServerSide\": true,","\t\t *        \"sAjaxSource\": \"scripts/server_processing.php\",","\t\t *        \"fnServerParams\": function ( aoData ) {","\t\t *          aoData.push( { \"name\": \"more_data\", \"value\": \"my_value\" } );","\t\t *        }","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"fnServerParams\": null,","\t","\t","\t\t/**","\t\t * Load the table state. With this function you can define from where, and how, the","\t\t * state of a table is loaded. By default DataTables will load from its state saving","\t\t * cookie, but you might wish to use local storage (HTML5) or a server-side database.","\t\t *  @type function","\t\t *  @member","\t\t *  @param {object} oSettings DataTables settings object","\t\t *  @return {object} The DataTables state object to be loaded","\t\t *  @dtopt Callbacks","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"bStateSave\": true,","\t\t *        \"fnStateLoad\": function (oSettings) {","\t\t *          var o;","\t\t *          ","\t\t *          // Send an Ajax request to the server to get the data. Note that","\t\t *          // this is a synchronous request.","\t\t *          $.ajax( {","\t\t *            \"url\": \"/state_load\",","\t\t *            \"async\": false,","\t\t *            \"dataType\": \"json\",","\t\t *            \"success\": function (json) {","\t\t *              o = json;","\t\t *            }","\t\t *          } );","\t\t *          ","\t\t *          return o;","\t\t *        }","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"fnStateLoad\": function ( oSettings ) {","\t\t\tvar sData = this.oApi._fnReadCookie( oSettings.sCookiePrefix+oSettings.sInstance );","\t\t\tvar oData;","\t","\t\t\ttry {","\t\t\t\toData = (typeof $.parseJSON === 'function') ? ","\t\t\t\t\t$.parseJSON(sData) : eval( '('+sData+')' );","\t\t\t} catch (e) {","\t\t\t\toData = null;","\t\t\t}","\t","\t\t\treturn oData;","\t\t},","\t","\t","\t\t/**","\t\t * Callback which allows modification of the saved state prior to loading that state.","\t\t * This callback is called when the table is loading state from the stored data, but","\t\t * prior to the settings object being modified by the saved state. Note that for ","\t\t * plug-in authors, you should use the 'stateLoadParams' event to load parameters for ","\t\t * a plug-in.","\t\t *  @type function","\t\t *  @param {object} oSettings DataTables settings object","\t\t *  @param {object} oData The state object that is to be loaded","\t\t *  @dtopt Callbacks","\t\t * ","\t\t *  @example","\t\t *    // Remove a saved filter, so filtering is never loaded","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"bStateSave\": true,","\t\t *        \"fnStateLoadParams\": function (oSettings, oData) {","\t\t *          oData.oSearch.sSearch = \"\";","\t\t *        }","\t\t *      } );","\t\t *    } );","\t\t * ","\t\t *  @example","\t\t *    // Disallow state loading by returning false","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"bStateSave\": true,","\t\t *        \"fnStateLoadParams\": function (oSettings, oData) {","\t\t *          return false;","\t\t *        }","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"fnStateLoadParams\": null,","\t","\t","\t\t/**","\t\t * Callback that is called when the state has been loaded from the state saving method","\t\t * and the DataTables settings object has been modified as a result of the loaded state.","\t\t *  @type function","\t\t *  @param {object} oSettings DataTables settings object","\t\t *  @param {object} oData The state object that was loaded","\t\t *  @dtopt Callbacks","\t\t * ","\t\t *  @example","\t\t *    // Show an alert with the filtering value that was saved","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"bStateSave\": true,","\t\t *        \"fnStateLoaded\": function (oSettings, oData) {","\t\t *          alert( 'Saved filter was: '+oData.oSearch.sSearch );","\t\t *        }","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"fnStateLoaded\": null,","\t","\t","\t\t/**","\t\t * Save the table state. This function allows you to define where and how the state","\t\t * information for the table is stored - by default it will use a cookie, but you","\t\t * might want to use local storage (HTML5) or a server-side database.","\t\t *  @type function","\t\t *  @member","\t\t *  @param {object} oSettings DataTables settings object","\t\t *  @param {object} oData The state object to be saved","\t\t *  @dtopt Callbacks","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"bStateSave\": true,","\t\t *        \"fnStateSave\": function (oSettings, oData) {","\t\t *          // Send an Ajax request to the server with the state object","\t\t *          $.ajax( {","\t\t *            \"url\": \"/state_save\",","\t\t *            \"data\": oData,","\t\t *            \"dataType\": \"json\",","\t\t *            \"method\": \"POST\"","\t\t *            \"success\": function () {}","\t\t *          } );","\t\t *        }","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"fnStateSave\": function ( oSettings, oData ) {","\t\t\tthis.oApi._fnCreateCookie( ","\t\t\t\toSettings.sCookiePrefix+oSettings.sInstance, ","\t\t\t\tthis.oApi._fnJsonString(oData), ","\t\t\t\toSettings.iCookieDuration, ","\t\t\t\toSettings.sCookiePrefix, ","\t\t\t\toSettings.fnCookieCallback","\t\t\t);","\t\t},","\t","\t","\t\t/**","\t\t * Callback which allows modification of the state to be saved. Called when the table ","\t\t * has changed state a new state save is required. This method allows modification of","\t\t * the state saving object prior to actually doing the save, including addition or ","\t\t * other state properties or modification. Note that for plug-in authors, you should ","\t\t * use the 'stateSaveParams' event to save parameters for a plug-in.","\t\t *  @type function","\t\t *  @param {object} oSettings DataTables settings object","\t\t *  @param {object} oData The state object to be saved","\t\t *  @dtopt Callbacks","\t\t * ","\t\t *  @example","\t\t *    // Remove a saved filter, so filtering is never saved","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"bStateSave\": true,","\t\t *        \"fnStateSaveParams\": function (oSettings, oData) {","\t\t *          oData.oSearch.sSearch = \"\";","\t\t *        }","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"fnStateSaveParams\": null,","\t","\t","\t\t/**","\t\t * Duration of the cookie which is used for storing session information. This","\t\t * value is given in seconds.","\t\t *  @type int","\t\t *  @default 7200 &lt;i&gt;(2 hours)&lt;/i&gt;","\t\t *  @dtopt Options","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"iCookieDuration\": 60*60*24; // 1 day","\t\t *      } );","\t\t *    } )","\t\t */","\t\t\"iCookieDuration\": 7200,","\t","\t","\t\t/**","\t\t * When enabled DataTables will not make a request to the server for the first","\t\t * page draw - rather it will use the data already on the page (no sorting etc","\t\t * will be applied to it), thus saving on an XHR at load time. iDeferLoading","\t\t * is used to indicate that deferred loading is required, but it is also used","\t\t * to tell DataTables how many records there are in the full table (allowing","\t\t * the information element and pagination to be displayed correctly). In the case","\t\t * where a filtering is applied to the table on initial load, this can be","\t\t * indicated by giving the parameter as an array, where the first element is","\t\t * the number of records available after filtering and the second element is the","\t\t * number of records without filtering (allowing the table information element","\t\t * to be shown correctly).","\t\t *  @type int | array","\t\t *  @default null","\t\t *  @dtopt Options","\t\t * ","\t\t *  @example","\t\t *    // 57 records available in the table, no filtering applied","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"bServerSide\": true,","\t\t *        \"sAjaxSource\": \"scripts/server_processing.php\",","\t\t *        \"iDeferLoading\": 57","\t\t *      } );","\t\t *    } );","\t\t * ","\t\t *  @example","\t\t *    // 57 records after filtering, 100 without filtering (an initial filter applied)","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"bServerSide\": true,","\t\t *        \"sAjaxSource\": \"scripts/server_processing.php\",","\t\t *        \"iDeferLoading\": [ 57, 100 ],","\t\t *        \"oSearch\": {","\t\t *          \"sSearch\": \"my_filter\"","\t\t *        }","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"iDeferLoading\": null,","\t","\t","\t\t/**","\t\t * Number of rows to display on a single page when using pagination. If","\t\t * feature enabled (bLengthChange) then the end user will be able to override","\t\t * this to a custom setting using a pop-up menu.","\t\t *  @type int","\t\t *  @default 10","\t\t *  @dtopt Options","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"iDisplayLength\": 50","\t\t *      } );","\t\t *    } )","\t\t */","\t\t\"iDisplayLength\": 10,","\t","\t","\t\t/**","\t\t * Define the starting point for data display when using DataTables with","\t\t * pagination. Note that this parameter is the number of records, rather than","\t\t * the page number, so if you have 10 records per page and want to start on","\t\t * the third page, it should be \"20\".","\t\t *  @type int","\t\t *  @default 0","\t\t *  @dtopt Options","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"iDisplayStart\": 20","\t\t *      } );","\t\t *    } )","\t\t */","\t\t\"iDisplayStart\": 0,","\t","\t","\t\t/**","\t\t * The scroll gap is the amount of scrolling that is left to go before","\t\t * DataTables will load the next 'page' of data automatically. You typically","\t\t * want a gap which is big enough that the scrolling will be smooth for the","\t\t * user, while not so large that it will load more data than need.","\t\t *  @type int","\t\t *  @default 100","\t\t *  @dtopt Options","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"bScrollInfinite\": true,","\t\t *        \"bScrollCollapse\": true,","\t\t *        \"sScrollY\": \"200px\",","\t\t *        \"iScrollLoadGap\": 50","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"iScrollLoadGap\": 100,","\t","\t","\t\t/**","\t\t * By default DataTables allows keyboard navigation of the table (sorting, paging,","\t\t * and filtering) by adding a tabindex attribute to the required elements. This","\t\t * allows you to tab through the controls and press the enter key to activate them.","\t\t * The tabindex is default 0, meaning that the tab follows the flow of the document.","\t\t * You can overrule this using this parameter if you wish. Use a value of -1 to","\t\t * disable built-in keyboard navigation.","\t\t *  @type int","\t\t *  @default 0","\t\t *  @dtopt Options","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"iTabIndex\": 1","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"iTabIndex\": 0,","\t","\t","\t\t/**","\t\t * All strings that DataTables uses in the user interface that it creates","\t\t * are defined in this object, allowing you to modified them individually or","\t\t * completely replace them all as required.","\t\t *  @namespace","\t\t */","\t\t\"oLanguage\": {","\t\t\t/**","\t\t\t * Strings that are used for WAI-ARIA labels and controls only (these are not","\t\t\t * actually visible on the page, but will be read by screenreaders, and thus","\t\t\t * must be internationalised as well).","\t\t\t *  @namespace","\t\t\t */","\t\t\t\"oAria\": {","\t\t\t\t/**","\t\t\t\t * ARIA label that is added to the table headers when the column may be","\t\t\t\t * sorted ascending by activing the column (click or return when focused).","\t\t\t\t * Note that the column header is prefixed to this string.","\t\t\t\t *  @type string","\t\t\t\t *  @default : activate to sort column ascending","\t\t\t\t *  @dtopt Language","\t\t\t\t * ","\t\t\t\t *  @example","\t\t\t\t *    $(document).ready( function() {","\t\t\t\t *      $('#example').dataTable( {","\t\t\t\t *        \"oLanguage\": {","\t\t\t\t *          \"oAria\": {","\t\t\t\t *            \"sSortAscending\": \" - click/return to sort ascending\"","\t\t\t\t *          }","\t\t\t\t *        }","\t\t\t\t *      } );","\t\t\t\t *    } );","\t\t\t\t */","\t\t\t\t\"sSortAscending\": \": activate to sort column ascending\",","\t","\t\t\t\t/**","\t\t\t\t * ARIA label that is added to the table headers when the column may be","\t\t\t\t * sorted descending by activing the column (click or return when focused).","\t\t\t\t * Note that the column header is prefixed to this string.","\t\t\t\t *  @type string","\t\t\t\t *  @default : activate to sort column ascending","\t\t\t\t *  @dtopt Language","\t\t\t\t * ","\t\t\t\t *  @example","\t\t\t\t *    $(document).ready( function() {","\t\t\t\t *      $('#example').dataTable( {","\t\t\t\t *        \"oLanguage\": {","\t\t\t\t *          \"oAria\": {","\t\t\t\t *            \"sSortDescending\": \" - click/return to sort descending\"","\t\t\t\t *          }","\t\t\t\t *        }","\t\t\t\t *      } );","\t\t\t\t *    } );","\t\t\t\t */","\t\t\t\t\"sSortDescending\": \": activate to sort column descending\"","\t\t\t},","\t","\t\t\t/**","\t\t\t * Pagination string used by DataTables for the two built-in pagination","\t\t\t * control types (\"two_button\" and \"full_numbers\")","\t\t\t *  @namespace","\t\t\t */","\t\t\t\"oPaginate\": {","\t\t\t\t/**","\t\t\t\t * Text to use when using the 'full_numbers' type of pagination for the","\t\t\t\t * button to take the user to the first page.","\t\t\t\t *  @type string","\t\t\t\t *  @default First","\t\t\t\t *  @dtopt Language","\t\t\t\t * ","\t\t\t\t *  @example","\t\t\t\t *    $(document).ready( function() {","\t\t\t\t *      $('#example').dataTable( {","\t\t\t\t *        \"oLanguage\": {","\t\t\t\t *          \"oPaginate\": {","\t\t\t\t *            \"sFirst\": \"First page\"","\t\t\t\t *          }","\t\t\t\t *        }","\t\t\t\t *      } );","\t\t\t\t *    } );","\t\t\t\t */","\t\t\t\t\"sFirst\": \"First\",","\t\t\t","\t\t\t","\t\t\t\t/**","\t\t\t\t * Text to use when using the 'full_numbers' type of pagination for the","\t\t\t\t * button to take the user to the last page.","\t\t\t\t *  @type string","\t\t\t\t *  @default Last","\t\t\t\t *  @dtopt Language","\t\t\t\t * ","\t\t\t\t *  @example","\t\t\t\t *    $(document).ready( function() {","\t\t\t\t *      $('#example').dataTable( {","\t\t\t\t *        \"oLanguage\": {","\t\t\t\t *          \"oPaginate\": {","\t\t\t\t *            \"sLast\": \"Last page\"","\t\t\t\t *          }","\t\t\t\t *        }","\t\t\t\t *      } );","\t\t\t\t *    } );","\t\t\t\t */","\t\t\t\t\"sLast\": \"Last\",","\t\t\t","\t\t\t","\t\t\t\t/**","\t\t\t\t * Text to use for the 'next' pagination button (to take the user to the ","\t\t\t\t * next page).","\t\t\t\t *  @type string","\t\t\t\t *  @default Next","\t\t\t\t *  @dtopt Language","\t\t\t\t * ","\t\t\t\t *  @example","\t\t\t\t *    $(document).ready( function() {","\t\t\t\t *      $('#example').dataTable( {","\t\t\t\t *        \"oLanguage\": {","\t\t\t\t *          \"oPaginate\": {","\t\t\t\t *            \"sNext\": \"Next page\"","\t\t\t\t *          }","\t\t\t\t *        }","\t\t\t\t *      } );","\t\t\t\t *    } );","\t\t\t\t */","\t\t\t\t\"sNext\": \"Next\",","\t\t\t","\t\t\t","\t\t\t\t/**","\t\t\t\t * Text to use for the 'previous' pagination button (to take the user to  ","\t\t\t\t * the previous page).","\t\t\t\t *  @type string","\t\t\t\t *  @default Previous","\t\t\t\t *  @dtopt Language","\t\t\t\t * ","\t\t\t\t *  @example","\t\t\t\t *    $(document).ready( function() {","\t\t\t\t *      $('#example').dataTable( {","\t\t\t\t *        \"oLanguage\": {","\t\t\t\t *          \"oPaginate\": {","\t\t\t\t *            \"sPrevious\": \"Previous page\"","\t\t\t\t *          }","\t\t\t\t *        }","\t\t\t\t *      } );","\t\t\t\t *    } );","\t\t\t\t */","\t\t\t\t\"sPrevious\": \"Previous\"","\t\t\t},","\t\t","\t\t\t/**","\t\t\t * This string is shown in preference to sZeroRecords when the table is","\t\t\t * empty of data (regardless of filtering). Note that this is an optional","\t\t\t * parameter - if it is not given, the value of sZeroRecords will be used","\t\t\t * instead (either the default or given value).","\t\t\t *  @type string","\t\t\t *  @default No data available in table","\t\t\t *  @dtopt Language","\t\t\t * ","\t\t\t *  @example","\t\t\t *    $(document).ready( function() {","\t\t\t *      $('#example').dataTable( {","\t\t\t *        \"oLanguage\": {","\t\t\t *          \"sEmptyTable\": \"No data available in table\"","\t\t\t *        }","\t\t\t *      } );","\t\t\t *    } );","\t\t\t */","\t\t\t\"sEmptyTable\": \"No data available in table\",","\t\t","\t\t","\t\t\t/**","\t\t\t * This string gives information to the end user about the information that ","\t\t\t * is current on display on the page. The _START_, _END_ and _TOTAL_ ","\t\t\t * variables are all dynamically replaced as the table display updates, and ","\t\t\t * can be freely moved or removed as the language requirements change.","\t\t\t *  @type string","\t\t\t *  @default Showing _START_ to _END_ of _TOTAL_ entries","\t\t\t *  @dtopt Language","\t\t\t * ","\t\t\t *  @example","\t\t\t *    $(document).ready( function() {","\t\t\t *      $('#example').dataTable( {","\t\t\t *        \"oLanguage\": {","\t\t\t *          \"sInfo\": \"Got a total of _TOTAL_ entries to show (_START_ to _END_)\"","\t\t\t *        }","\t\t\t *      } );","\t\t\t *    } );","\t\t\t */","\t\t\t\"sInfo\": \"Showing _START_ to _END_ of _TOTAL_ entries\",","\t\t","\t\t","\t\t\t/**","\t\t\t * Display information string for when the table is empty. Typically the ","\t\t\t * format of this string should match sInfo.","\t\t\t *  @type string","\t\t\t *  @default Showing 0 to 0 of 0 entries","\t\t\t *  @dtopt Language","\t\t\t * ","\t\t\t *  @example","\t\t\t *    $(document).ready( function() {","\t\t\t *      $('#example').dataTable( {","\t\t\t *        \"oLanguage\": {","\t\t\t *          \"sInfoEmpty\": \"No entries to show\"","\t\t\t *        }","\t\t\t *      } );","\t\t\t *    } );","\t\t\t */","\t\t\t\"sInfoEmpty\": \"Showing 0 to 0 of 0 entries\",","\t\t","\t\t","\t\t\t/**","\t\t\t * When a user filters the information in a table, this string is appended ","\t\t\t * to the information (sInfo) to give an idea of how strong the filtering ","\t\t\t * is. The variable _MAX_ is dynamically updated.","\t\t\t *  @type string","\t\t\t *  @default (filtered from _MAX_ total entries)","\t\t\t *  @dtopt Language","\t\t\t * ","\t\t\t *  @example","\t\t\t *    $(document).ready( function() {","\t\t\t *      $('#example').dataTable( {","\t\t\t *        \"oLanguage\": {","\t\t\t *          \"sInfoFiltered\": \" - filtering from _MAX_ records\"","\t\t\t *        }","\t\t\t *      } );","\t\t\t *    } );","\t\t\t */","\t\t\t\"sInfoFiltered\": \"(filtered from _MAX_ total entries)\",","\t\t","\t\t","\t\t\t/**","\t\t\t * If can be useful to append extra information to the info string at times,","\t\t\t * and this variable does exactly that. This information will be appended to","\t\t\t * the sInfo (sInfoEmpty and sInfoFiltered in whatever combination they are","\t\t\t * being used) at all times.","\t\t\t *  @type string","\t\t\t *  @default &lt;i&gt;Empty string&lt;/i&gt;","\t\t\t *  @dtopt Language","\t\t\t * ","\t\t\t *  @example","\t\t\t *    $(document).ready( function() {","\t\t\t *      $('#example').dataTable( {","\t\t\t *        \"oLanguage\": {","\t\t\t *          \"sInfoPostFix\": \"All records shown are derived from real information.\"","\t\t\t *        }","\t\t\t *      } );","\t\t\t *    } );","\t\t\t */","\t\t\t\"sInfoPostFix\": \"\",","\t\t","\t\t","\t\t\t/**","\t\t\t * DataTables has a build in number formatter (fnFormatNumber) which is used","\t\t\t * to format large numbers that are used in the table information. By","\t\t\t * default a comma is used, but this can be trivially changed to any","\t\t\t * character you wish with this parameter.","\t\t\t *  @type string","\t\t\t *  @default ,","\t\t\t *  @dtopt Language","\t\t\t * ","\t\t\t *  @example","\t\t\t *    $(document).ready( function() {","\t\t\t *      $('#example').dataTable( {","\t\t\t *        \"oLanguage\": {","\t\t\t *          \"sInfoThousands\": \"'\"","\t\t\t *        }","\t\t\t *      } );","\t\t\t *    } );","\t\t\t */","\t\t\t\"sInfoThousands\": \",\",","\t\t","\t\t","\t\t\t/**","\t\t\t * Detail the action that will be taken when the drop down menu for the","\t\t\t * pagination length option is changed. The '_MENU_' variable is replaced","\t\t\t * with a default select list of 10, 25, 50 and 100, and can be replaced","\t\t\t * with a custom select box if required.","\t\t\t *  @type string","\t\t\t *  @default Show _MENU_ entries","\t\t\t *  @dtopt Language","\t\t\t * ","\t\t\t *  @example","\t\t\t *    // Language change only","\t\t\t *    $(document).ready( function() {","\t\t\t *      $('#example').dataTable( {","\t\t\t *        \"oLanguage\": {","\t\t\t *          \"sLengthMenu\": \"Display _MENU_ records\"","\t\t\t *        }","\t\t\t *      } );","\t\t\t *    } );","\t\t\t *    ","\t\t\t *  @example","\t\t\t *    // Language and options change","\t\t\t *    $(document).ready( function() {","\t\t\t *      $('#example').dataTable( {","\t\t\t *        \"oLanguage\": {","\t\t\t *          \"sLengthMenu\": 'Display &lt;select&gt;'+","\t\t\t *            '&lt;option value=\"10\"&gt;10&lt;/option&gt;'+","\t\t\t *            '&lt;option value=\"20\"&gt;20&lt;/option&gt;'+","\t\t\t *            '&lt;option value=\"30\"&gt;30&lt;/option&gt;'+","\t\t\t *            '&lt;option value=\"40\"&gt;40&lt;/option&gt;'+","\t\t\t *            '&lt;option value=\"50\"&gt;50&lt;/option&gt;'+","\t\t\t *            '&lt;option value=\"-1\"&gt;All&lt;/option&gt;'+","\t\t\t *            '&lt;/select&gt; records'","\t\t\t *        }","\t\t\t *      } );","\t\t\t *    } );","\t\t\t */","\t\t\t\"sLengthMenu\": \"Show _MENU_ entries\",","\t\t","\t\t","\t\t\t/**","\t\t\t * When using Ajax sourced data and during the first draw when DataTables is","\t\t\t * gathering the data, this message is shown in an empty row in the table to","\t\t\t * indicate to the end user the the data is being loaded. Note that this","\t\t\t * parameter is not used when loading data by server-side processing, just","\t\t\t * Ajax sourced data with client-side processing.","\t\t\t *  @type string","\t\t\t *  @default Loading...","\t\t\t *  @dtopt Language","\t\t\t * ","\t\t\t *  @example","\t\t\t *    $(document).ready( function() {","\t\t\t *      $('#example').dataTable( {","\t\t\t *        \"oLanguage\": {","\t\t\t *          \"sLoadingRecords\": \"Please wait - loading...\"","\t\t\t *        }","\t\t\t *      } );","\t\t\t *    } );","\t\t\t */","\t\t\t\"sLoadingRecords\": \"Loading...\",","\t\t","\t\t","\t\t\t/**","\t\t\t * Text which is displayed when the table is processing a user action","\t\t\t * (usually a sort command or similar).","\t\t\t *  @type string","\t\t\t *  @default Processing...","\t\t\t *  @dtopt Language","\t\t\t * ","\t\t\t *  @example","\t\t\t *    $(document).ready( function() {","\t\t\t *      $('#example').dataTable( {","\t\t\t *        \"oLanguage\": {","\t\t\t *          \"sProcessing\": \"DataTables is currently busy\"","\t\t\t *        }","\t\t\t *      } );","\t\t\t *    } );","\t\t\t */","\t\t\t\"sProcessing\": \"Processing...\",","\t\t","\t\t","\t\t\t/**","\t\t\t * Details the actions that will be taken when the user types into the","\t\t\t * filtering input text box. The variable \"_INPUT_\", if used in the string,","\t\t\t * is replaced with the HTML text box for the filtering input allowing","\t\t\t * control over where it appears in the string. If \"_INPUT_\" is not given","\t\t\t * then the input box is appended to the string automatically.","\t\t\t *  @type string","\t\t\t *  @default Search:","\t\t\t *  @dtopt Language","\t\t\t * ","\t\t\t *  @example","\t\t\t *    // Input text box will be appended at the end automatically","\t\t\t *    $(document).ready( function() {","\t\t\t *      $('#example').dataTable( {","\t\t\t *        \"oLanguage\": {","\t\t\t *          \"sSearch\": \"Filter records:\"","\t\t\t *        }","\t\t\t *      } );","\t\t\t *    } );","\t\t\t *    ","\t\t\t *  @example","\t\t\t *    // Specify where the filter should appear","\t\t\t *    $(document).ready( function() {","\t\t\t *      $('#example').dataTable( {","\t\t\t *        \"oLanguage\": {","\t\t\t *          \"sSearch\": \"Apply filter _INPUT_ to table\"","\t\t\t *        }","\t\t\t *      } );","\t\t\t *    } );","\t\t\t */","\t\t\t\"sSearch\": \"Search:\",","\t\t","\t\t","\t\t\t/**","\t\t\t * All of the language information can be stored in a file on the","\t\t\t * server-side, which DataTables will look up if this parameter is passed.","\t\t\t * It must store the URL of the language file, which is in a JSON format,","\t\t\t * and the object has the same properties as the oLanguage object in the","\t\t\t * initialiser object (i.e. the above parameters). Please refer to one of","\t\t\t * the example language files to see how this works in action.","\t\t\t *  @type string","\t\t\t *  @default &lt;i&gt;Empty string - i.e. disabled&lt;/i&gt;","\t\t\t *  @dtopt Language","\t\t\t * ","\t\t\t *  @example","\t\t\t *    $(document).ready( function() {","\t\t\t *      $('#example').dataTable( {","\t\t\t *        \"oLanguage\": {","\t\t\t *          \"sUrl\": \"http://www.sprymedia.co.uk/dataTables/lang.txt\"","\t\t\t *        }","\t\t\t *      } );","\t\t\t *    } );","\t\t\t */","\t\t\t\"sUrl\": \"\",","\t\t","\t\t","\t\t\t/**","\t\t\t * Text shown inside the table records when the is no information to be","\t\t\t * displayed after filtering. sEmptyTable is shown when there is simply no","\t\t\t * information in the table at all (regardless of filtering).","\t\t\t *  @type string","\t\t\t *  @default No matching records found","\t\t\t *  @dtopt Language","\t\t\t * ","\t\t\t *  @example","\t\t\t *    $(document).ready( function() {","\t\t\t *      $('#example').dataTable( {","\t\t\t *        \"oLanguage\": {","\t\t\t *          \"sZeroRecords\": \"No records to display\"","\t\t\t *        }","\t\t\t *      } );","\t\t\t *    } );","\t\t\t */","\t\t\t\"sZeroRecords\": \"No matching records found\"","\t\t},","\t","\t","\t\t/**","\t\t * This parameter allows you to have define the global filtering state at","\t\t * initialisation time. As an object the \"sSearch\" parameter must be","\t\t * defined, but all other parameters are optional. When \"bRegex\" is true,","\t\t * the search string will be treated as a regular expression, when false","\t\t * (default) it will be treated as a straight string. When \"bSmart\"","\t\t * DataTables will use it's smart filtering methods (to word match at","\t\t * any point in the data), when false this will not be done.","\t\t *  @namespace","\t\t *  @extends DataTable.models.oSearch","\t\t *  @dtopt Options","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"oSearch\": {\"sSearch\": \"Initial search\"}","\t\t *      } );","\t\t *    } )","\t\t */","\t\t\"oSearch\": $.extend( {}, DataTable.models.oSearch ),","\t","\t","\t\t/**","\t\t * By default DataTables will look for the property 'aaData' when obtaining","\t\t * data from an Ajax source or for server-side processing - this parameter","\t\t * allows that property to be changed. You can use Javascript dotted object","\t\t * notation to get a data source for multiple levels of nesting.","\t\t *  @type string","\t\t *  @default aaData","\t\t *  @dtopt Options","\t\t *  @dtopt Server-side","\t\t * ","\t\t *  @example","\t\t *    // Get data from { \"data\": [...] }","\t\t *    $(document).ready( function() {","\t\t *      var oTable = $('#example').dataTable( {","\t\t *        \"sAjaxSource\": \"sources/data.txt\",","\t\t *        \"sAjaxDataProp\": \"data\"","\t\t *      } );","\t\t *    } );","\t\t *    ","\t\t *  @example","\t\t *    // Get data from { \"data\": { \"inner\": [...] } }","\t\t *    $(document).ready( function() {","\t\t *      var oTable = $('#example').dataTable( {","\t\t *        \"sAjaxSource\": \"sources/data.txt\",","\t\t *        \"sAjaxDataProp\": \"data.inner\"","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"sAjaxDataProp\": \"aaData\",","\t","\t","\t\t/**","\t\t * You can instruct DataTables to load data from an external source using this","\t\t * parameter (use aData if you want to pass data in you already have). Simply","\t\t * provide a url a JSON object can be obtained from. This object must include","\t\t * the parameter 'aaData' which is the data source for the table.","\t\t *  @type string","\t\t *  @default null","\t\t *  @dtopt Options","\t\t *  @dtopt Server-side","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"sAjaxSource\": \"http://www.sprymedia.co.uk/dataTables/json.php\"","\t\t *      } );","\t\t *    } )","\t\t */","\t\t\"sAjaxSource\": null,","\t","\t","\t\t/**","\t\t * This parameter can be used to override the default prefix that DataTables","\t\t * assigns to a cookie when state saving is enabled.","\t\t *  @type string","\t\t *  @default SpryMedia_DataTables_","\t\t *  @dtopt Options","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"sCookiePrefix\": \"my_datatable_\",","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"sCookiePrefix\": \"SpryMedia_DataTables_\",","\t","\t","\t\t/**","\t\t * This initialisation variable allows you to specify exactly where in the","\t\t * DOM you want DataTables to inject the various controls it adds to the page","\t\t * (for example you might want the pagination controls at the top of the","\t\t * table). DIV elements (with or without a custom class) can also be added to","\t\t * aid styling. The follow syntax is used:","\t\t *   &lt;ul&gt;","\t\t *     &lt;li&gt;The following options are allowed:\t","\t\t *       &lt;ul&gt;","\t\t *         &lt;li&gt;'l' - Length changing&lt;/li","\t\t *         &lt;li&gt;'f' - Filtering input&lt;/li&gt;","\t\t *         &lt;li&gt;'t' - The table!&lt;/li&gt;","\t\t *         &lt;li&gt;'i' - Information&lt;/li&gt;","\t\t *         &lt;li&gt;'p' - Pagination&lt;/li&gt;","\t\t *         &lt;li&gt;'r' - pRocessing&lt;/li&gt;","\t\t *       &lt;/ul&gt;","\t\t *     &lt;/li&gt;","\t\t *     &lt;li&gt;The following constants are allowed:","\t\t *       &lt;ul&gt;","\t\t *         &lt;li&gt;'H' - jQueryUI theme \"header\" classes ('fg-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix')&lt;/li&gt;","\t\t *         &lt;li&gt;'F' - jQueryUI theme \"footer\" classes ('fg-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix')&lt;/li&gt;","\t\t *       &lt;/ul&gt;","\t\t *     &lt;/li&gt;","\t\t *     &lt;li&gt;The following syntax is expected:","\t\t *       &lt;ul&gt;","\t\t *         &lt;li&gt;'&amp;lt;' and '&amp;gt;' - div elements&lt;/li&gt;","\t\t *         &lt;li&gt;'&amp;lt;\"class\" and '&amp;gt;' - div with a class&lt;/li&gt;","\t\t *         &lt;li&gt;'&amp;lt;\"#id\" and '&amp;gt;' - div with an ID&lt;/li&gt;","\t\t *       &lt;/ul&gt;","\t\t *     &lt;/li&gt;","\t\t *     &lt;li&gt;Examples:","\t\t *       &lt;ul&gt;","\t\t *         &lt;li&gt;'&amp;lt;\"wrapper\"flipt&amp;gt;'&lt;/li&gt;","\t\t *         &lt;li&gt;'&amp;lt;lf&amp;lt;t&amp;gt;ip&amp;gt;'&lt;/li&gt;","\t\t *       &lt;/ul&gt;","\t\t *     &lt;/li&gt;","\t\t *   &lt;/ul&gt;","\t\t *  @type string","\t\t *  @default lfrtip &lt;i&gt;(when bJQueryUI is false)&lt;/i&gt; &lt;b&gt;or&lt;/b&gt; ","\t\t *    &lt;\"H\"lfr&gt;t&lt;\"F\"ip&gt; &lt;i&gt;(when bJQueryUI is true)&lt;/i&gt;","\t\t *  @dtopt Options","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"sDom\": '&amp;lt;\"top\"i&amp;gt;rt&amp;lt;\"bottom\"flp&amp;gt;&amp;lt;\"clear\"&amp;gt;'","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"sDom\": \"lfrtip\",","\t","\t","\t\t/**","\t\t * DataTables features two different built-in pagination interaction methods","\t\t * ('two_button' or 'full_numbers') which present different page controls to","\t\t * the end user. Further methods can be added using the API (see below).","\t\t *  @type string","\t\t *  @default two_button","\t\t *  @dtopt Options","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"sPaginationType\": \"full_numbers\"","\t\t *      } );","\t\t *    } )","\t\t */","\t\t\"sPaginationType\": \"two_button\",","\t","\t","\t\t/**","\t\t * Enable horizontal scrolling. When a table is too wide to fit into a certain","\t\t * layout, or you have a large number of columns in the table, you can enable","\t\t * x-scrolling to show the table in a viewport, which can be scrolled. This","\t\t * property can be any CSS unit, or a number (in which case it will be treated","\t\t * as a pixel measurement).","\t\t *  @type string","\t\t *  @default &lt;i&gt;blank string - i.e. disabled&lt;/i&gt;","\t\t *  @dtopt Features","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"sScrollX\": \"100%\",","\t\t *        \"bScrollCollapse\": true","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"sScrollX\": \"\",","\t","\t","\t\t/**","\t\t * This property can be used to force a DataTable to use more width than it","\t\t * might otherwise do when x-scrolling is enabled. For example if you have a","\t\t * table which requires to be well spaced, this parameter is useful for","\t\t * \"over-sizing\" the table, and thus forcing scrolling. This property can by","\t\t * any CSS unit, or a number (in which case it will be treated as a pixel","\t\t * measurement).","\t\t *  @type string","\t\t *  @default &lt;i&gt;blank string - i.e. disabled&lt;/i&gt;","\t\t *  @dtopt Options","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"sScrollX\": \"100%\",","\t\t *        \"sScrollXInner\": \"110%\"","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"sScrollXInner\": \"\",","\t","\t","\t\t/**","\t\t * Enable vertical scrolling. Vertical scrolling will constrain the DataTable","\t\t * to the given height, and enable scrolling for any data which overflows the","\t\t * current viewport. This can be used as an alternative to paging to display","\t\t * a lot of data in a small area (although paging and scrolling can both be","\t\t * enabled at the same time). This property can be any CSS unit, or a number","\t\t * (in which case it will be treated as a pixel measurement).","\t\t *  @type string","\t\t *  @default &lt;i&gt;blank string - i.e. disabled&lt;/i&gt;","\t\t *  @dtopt Features","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"sScrollY\": \"200px\",","\t\t *        \"bPaginate\": false","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"sScrollY\": \"\",","\t","\t","\t\t/**","\t\t * Set the HTTP method that is used to make the Ajax call for server-side","\t\t * processing or Ajax sourced data.","\t\t *  @type string","\t\t *  @default GET","\t\t *  @dtopt Options","\t\t *  @dtopt Server-side","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"bServerSide\": true,","\t\t *        \"sAjaxSource\": \"scripts/post.php\",","\t\t *        \"sServerMethod\": \"POST\"","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"sServerMethod\": \"GET\"","\t};","\t","\t","\t","\t/**","\t * Column options that can be given to DataTables at initialisation time.","\t *  @namespace","\t */","\tDataTable.defaults.columns = {","\t\t/**","\t\t * Allows a column's sorting to take multiple columns into account when ","\t\t * doing a sort. For example first name / last name columns make sense to ","\t\t * do a multi-column sort over the two columns.","\t\t *  @type array","\t\t *  @default null &lt;i&gt;Takes the value of the column index automatically&lt;/i&gt;","\t\t *  @dtopt Columns","\t\t * ","\t\t *  @example","\t\t *    // Using aoColumnDefs","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumnDefs\": [","\t\t *          { \"aDataSort\": [ 0, 1 ], \"aTargets\": [ 0 ] },","\t\t *          { \"aDataSort\": [ 1, 0 ], \"aTargets\": [ 1 ] },","\t\t *          { \"aDataSort\": [ 2, 3, 4 ], \"aTargets\": [ 2 ] }","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t *    ","\t\t *  @example","\t\t *    // Using aoColumns","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumns\": [","\t\t *          { \"aDataSort\": [ 0, 1 ] },","\t\t *          { \"aDataSort\": [ 1, 0 ] },","\t\t *          { \"aDataSort\": [ 2, 3, 4 ] },","\t\t *          null,","\t\t *          null","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"aDataSort\": null,","\t","\t","\t\t/**","\t\t * You can control the default sorting direction, and even alter the behaviour","\t\t * of the sort handler (i.e. only allow ascending sorting etc) using this","\t\t * parameter.","\t\t *  @type array","\t\t *  @default [ 'asc', 'desc' ]","\t\t *  @dtopt Columns","\t\t * ","\t\t *  @example","\t\t *    // Using aoColumnDefs","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumnDefs\": [","\t\t *          { \"asSorting\": [ \"asc\" ], \"aTargets\": [ 1 ] },","\t\t *          { \"asSorting\": [ \"desc\", \"asc\", \"asc\" ], \"aTargets\": [ 2 ] },","\t\t *          { \"asSorting\": [ \"desc\" ], \"aTargets\": [ 3 ] }","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t *    ","\t\t *  @example","\t\t *    // Using aoColumns","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumns\": [","\t\t *          null,","\t\t *          { \"asSorting\": [ \"asc\" ] },","\t\t *          { \"asSorting\": [ \"desc\", \"asc\", \"asc\" ] },","\t\t *          { \"asSorting\": [ \"desc\" ] },","\t\t *          null","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"asSorting\": [ 'asc', 'desc' ],","\t","\t","\t\t/**","\t\t * Enable or disable filtering on the data in this column.","\t\t *  @type boolean","\t\t *  @default true","\t\t *  @dtopt Columns","\t\t * ","\t\t *  @example","\t\t *    // Using aoColumnDefs","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumnDefs\": [ ","\t\t *          { \"bSearchable\": false, \"aTargets\": [ 0 ] }","\t\t *        ] } );","\t\t *    } );","\t\t *    ","\t\t *  @example","\t\t *    // Using aoColumns","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumns\": [ ","\t\t *          { \"bSearchable\": false },","\t\t *          null,","\t\t *          null,","\t\t *          null,","\t\t *          null","\t\t *        ] } );","\t\t *    } );","\t\t */","\t\t\"bSearchable\": true,","\t","\t","\t\t/**","\t\t * Enable or disable sorting on this column.","\t\t *  @type boolean","\t\t *  @default true","\t\t *  @dtopt Columns","\t\t * ","\t\t *  @example","\t\t *    // Using aoColumnDefs","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumnDefs\": [ ","\t\t *          { \"bSortable\": false, \"aTargets\": [ 0 ] }","\t\t *        ] } );","\t\t *    } );","\t\t *    ","\t\t *  @example","\t\t *    // Using aoColumns","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumns\": [ ","\t\t *          { \"bSortable\": false },","\t\t *          null,","\t\t *          null,","\t\t *          null,","\t\t *          null","\t\t *        ] } );","\t\t *    } );","\t\t */","\t\t\"bSortable\": true,","\t","\t","\t\t/**","\t\t * &lt;code&gt;Deprecated&lt;/code&gt; When using fnRender() for a column, you may wish ","\t\t * to use the original data (before rendering) for sorting and filtering ","\t\t * (the default is to used the rendered data that the user can see). This ","\t\t * may be useful for dates etc.","\t\t * ","\t\t * Please note that this option has now been deprecated and will be removed","\t\t * in the next version of DataTables. Please use mRender / mData rather than","\t\t * fnRender.","\t\t *  @type boolean","\t\t *  @default true","\t\t *  @dtopt Columns","\t\t *  @deprecated","\t\t */","\t\t\"bUseRendered\": true,","\t","\t","\t\t/**","\t\t * Enable or disable the display of this column.","\t\t *  @type boolean","\t\t *  @default true","\t\t *  @dtopt Columns","\t\t * ","\t\t *  @example","\t\t *    // Using aoColumnDefs","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumnDefs\": [ ","\t\t *          { \"bVisible\": false, \"aTargets\": [ 0 ] }","\t\t *        ] } );","\t\t *    } );","\t\t *    ","\t\t *  @example","\t\t *    // Using aoColumns","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumns\": [ ","\t\t *          { \"bVisible\": false },","\t\t *          null,","\t\t *          null,","\t\t *          null,","\t\t *          null","\t\t *        ] } );","\t\t *    } );","\t\t */","\t\t\"bVisible\": true,","\t\t","\t\t","\t\t/**","\t\t * Developer definable function that is called whenever a cell is created (Ajax source,","\t\t * etc) or processed for input (DOM source). This can be used as a compliment to mRender","\t\t * allowing you to modify the DOM element (add background colour for example) when the","\t\t * element is available.","\t\t *  @type function","\t\t *  @param {element} nTd The TD node that has been created","\t\t *  @param {*} sData The Data for the cell","\t\t *  @param {array|object} oData The data for the whole row","\t\t *  @param {int} iRow The row index for the aoData data store","\t\t *  @param {int} iCol The column index for aoColumns","\t\t *  @dtopt Columns","\t\t * ","\t\t *  @example","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumnDefs\": [ {","\t\t *          \"aTargets\": [3],","\t\t *          \"fnCreatedCell\": function (nTd, sData, oData, iRow, iCol) {","\t\t *            if ( sData == \"1.7\" ) {","\t\t *              $(nTd).css('color', 'blue')","\t\t *            }","\t\t *          }","\t\t *        } ]","\t\t *      });","\t\t *    } );","\t\t */","\t\t\"fnCreatedCell\": null,","\t","\t","\t\t/**","\t\t * &lt;code&gt;Deprecated&lt;/code&gt; Custom display function that will be called for the ","\t\t * display of each cell in this column.","\t\t *","\t\t * Please note that this option has now been deprecated and will be removed","\t\t * in the next version of DataTables. Please use mRender / mData rather than","\t\t * fnRender.","\t\t *  @type function","\t\t *  @param {object} o Object with the following parameters:","\t\t *  @param {int}    o.iDataRow The row in aoData","\t\t *  @param {int}    o.iDataColumn The column in question","\t\t *  @param {array}  o.aData The data for the row in question","\t\t *  @param {object} o.oSettings The settings object for this DataTables instance","\t\t *  @param {object} o.mDataProp The data property used for this column","\t\t *  @param {*}      val The current cell value","\t\t *  @returns {string} The string you which to use in the display","\t\t *  @dtopt Columns","\t\t *  @deprecated","\t\t */","\t\t\"fnRender\": null,","\t","\t","\t\t/**","\t\t * The column index (starting from 0!) that you wish a sort to be performed","\t\t * upon when this column is selected for sorting. This can be used for sorting","\t\t * on hidden columns for example.","\t\t *  @type int","\t\t *  @default -1 &lt;i&gt;Use automatically calculated column index&lt;/i&gt;","\t\t *  @dtopt Columns","\t\t * ","\t\t *  @example","\t\t *    // Using aoColumnDefs","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumnDefs\": [ ","\t\t *          { \"iDataSort\": 1, \"aTargets\": [ 0 ] }","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t *    ","\t\t *  @example","\t\t *    // Using aoColumns","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumns\": [ ","\t\t *          { \"iDataSort\": 1 },","\t\t *          null,","\t\t *          null,","\t\t *          null,","\t\t *          null","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"iDataSort\": -1,","\t","\t","\t\t/**","\t\t * This parameter has been replaced by mData in DataTables to ensure naming","\t\t * consistency. mDataProp can still be used, as there is backwards compatibility","\t\t * in DataTables for this option, but it is strongly recommended that you use","\t\t * mData in preference to mDataProp.","\t\t *  @name DataTable.defaults.columns.mDataProp","\t\t */","\t","\t","\t\t/**","\t\t * This property can be used to read data from any JSON data source property,","\t\t * including deeply nested objects / properties. mData can be given in a","\t\t * number of different ways which effect its behaviour:","\t\t *   &lt;ul&gt;","\t\t *     &lt;li&gt;integer - treated as an array index for the data source. This is the","\t\t *       default that DataTables uses (incrementally increased for each column).&lt;/li&gt;","\t\t *     &lt;li&gt;string - read an object property from the data source. Note that you can","\t\t *       use Javascript dotted notation to read deep properties / arrays from the","\t\t *       data source.&lt;/li&gt;","\t\t *     &lt;li&gt;null - the sDefaultContent option will be used for the cell (null","\t\t *       by default, so you will need to specify the default content you want -","\t\t *       typically an empty string). This can be useful on generated columns such ","\t\t *       as edit / delete action columns.&lt;/li&gt;","\t\t *     &lt;li&gt;function - the function given will be executed whenever DataTables ","\t\t *       needs to set or get the data for a cell in the column. The function ","\t\t *       takes three parameters:","\t\t *       &lt;ul&gt;","\t\t *         &lt;li&gt;{array|object} The data source for the row&lt;/li&gt;","\t\t *         &lt;li&gt;{string} The type call data requested - this will be 'set' when","\t\t *           setting data or 'filter', 'display', 'type', 'sort' or undefined when ","\t\t *           gathering data. Note that when &lt;i&gt;undefined&lt;/i&gt; is given for the type","\t\t *           DataTables expects to get the raw data for the object back&lt;/li&gt;","\t\t *         &lt;li&gt;{*} Data to set when the second parameter is 'set'.&lt;/li&gt;","\t\t *       &lt;/ul&gt;","\t\t *       The return value from the function is not required when 'set' is the type","\t\t *       of call, but otherwise the return is what will be used for the data","\t\t *       requested.&lt;/li&gt;","\t\t *    &lt;/ul&gt;","\t\t *","\t\t * Note that prior to DataTables 1.9.2 mData was called mDataProp. The name change","\t\t * reflects the flexibility of this property and is consistent with the naming of","\t\t * mRender. If 'mDataProp' is given, then it will still be used by DataTables, as","\t\t * it automatically maps the old name to the new if required.","\t\t *  @type string|int|function|null","\t\t *  @default null &lt;i&gt;Use automatically calculated column index&lt;/i&gt;","\t\t *  @dtopt Columns","\t\t * ","\t\t *  @example","\t\t *    // Read table data from objects","\t\t *    $(document).ready( function() {","\t\t *      var oTable = $('#example').dataTable( {","\t\t *        \"sAjaxSource\": \"sources/deep.txt\",","\t\t *        \"aoColumns\": [","\t\t *          { \"mData\": \"engine\" },","\t\t *          { \"mData\": \"browser\" },","\t\t *          { \"mData\": \"platform.inner\" },","\t\t *          { \"mData\": \"platform.details.0\" },","\t\t *          { \"mData\": \"platform.details.1\" }","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t * ","\t\t *  @example","\t\t *    // Using mData as a function to provide different information for","\t\t *    // sorting, filtering and display. In this case, currency (price)","\t\t *    $(document).ready( function() {","\t\t *      var oTable = $('#example').dataTable( {","\t\t *        \"aoColumnDefs\": [ {","\t\t *          \"aTargets\": [ 0 ],","\t\t *          \"mData\": function ( source, type, val ) {","\t\t *            if (type === 'set') {","\t\t *              source.price = val;","\t\t *              // Store the computed dislay and filter values for efficiency","\t\t *              source.price_display = val==\"\" ? \"\" : \"$\"+numberFormat(val);","\t\t *              source.price_filter  = val==\"\" ? \"\" : \"$\"+numberFormat(val)+\" \"+val;","\t\t *              return;","\t\t *            }","\t\t *            else if (type === 'display') {","\t\t *              return source.price_display;","\t\t *            }","\t\t *            else if (type === 'filter') {","\t\t *              return source.price_filter;","\t\t *            }","\t\t *            // 'sort', 'type' and undefined all just use the integer","\t\t *            return source.price;","\t\t *          }","\t\t *        } ]","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"mData\": null,","\t","\t","\t\t/**","\t\t * This property is the rendering partner to mData and it is suggested that","\t\t * when you want to manipulate data for display (including filtering, sorting etc)","\t\t * but not altering the underlying data for the table, use this property. mData","\t\t * can actually do everything this property can and more, but this parameter is","\t\t * easier to use since there is no 'set' option. Like mData is can be given","\t\t * in a number of different ways to effect its behaviour, with the addition of ","\t\t * supporting array syntax for easy outputting of arrays (including arrays of","\t\t * objects):","\t\t *   &lt;ul&gt;","\t\t *     &lt;li&gt;integer - treated as an array index for the data source. This is the","\t\t *       default that DataTables uses (incrementally increased for each column).&lt;/li&gt;","\t\t *     &lt;li&gt;string - read an object property from the data source. Note that you can","\t\t *       use Javascript dotted notation to read deep properties / arrays from the","\t\t *       data source and also array brackets to indicate that the data reader should","\t\t *       loop over the data source array. When characters are given between the array","\t\t *       brackets, these characters are used to join the data source array together.","\t\t *       For example: \"accounts[, ].name\" would result in a comma separated list with","\t\t *       the 'name' value from the 'accounts' array of objects.&lt;/li&gt;","\t\t *     &lt;li&gt;function - the function given will be executed whenever DataTables ","\t\t *       needs to set or get the data for a cell in the column. The function ","\t\t *       takes three parameters:","\t\t *       &lt;ul&gt;","\t\t *         &lt;li&gt;{array|object} The data source for the row (based on mData)&lt;/li&gt;","\t\t *         &lt;li&gt;{string} The type call data requested - this will be 'filter', 'display', ","\t\t *           'type' or 'sort'.&lt;/li&gt;","\t\t *         &lt;li&gt;{array|object} The full data source for the row (not based on mData)&lt;/li&gt;","\t\t *       &lt;/ul&gt;","\t\t *       The return value from the function is what will be used for the data","\t\t *       requested.&lt;/li&gt;","\t\t *    &lt;/ul&gt;","\t\t *  @type string|int|function|null","\t\t *  @default null &lt;i&gt;Use mData&lt;/i&gt;","\t\t *  @dtopt Columns","\t\t * ","\t\t *  @example","\t\t *    // Create a comma separated list from an array of objects","\t\t *    $(document).ready( function() {","\t\t *      var oTable = $('#example').dataTable( {","\t\t *        \"sAjaxSource\": \"sources/deep.txt\",","\t\t *        \"aoColumns\": [","\t\t *          { \"mData\": \"engine\" },","\t\t *          { \"mData\": \"browser\" },","\t\t *          {","\t\t *            \"mData\": \"platform\",","\t\t *            \"mRender\": \"[, ].name\"","\t\t *          }","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t * ","\t\t *  @example","\t\t *    // Use as a function to create a link from the data source","\t\t *    $(document).ready( function() {","\t\t *      var oTable = $('#example').dataTable( {","\t\t *        \"aoColumnDefs\": [","\t\t *        {","\t\t *          \"aTargets\": [ 0 ],","\t\t *          \"mData\": \"download_link\",","\t\t *          \"mRender\": function ( data, type, full ) {","\t\t *            return '&lt;a href=\"'+data+'\"&gt;Download&lt;/a&gt;';","\t\t *          }","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"mRender\": null,","\t","\t","\t\t/**","\t\t * Change the cell type created for the column - either TD cells or TH cells. This","\t\t * can be useful as TH cells have semantic meaning in the table body, allowing them","\t\t * to act as a header for a row (you may wish to add scope='row' to the TH elements).","\t\t *  @type string","\t\t *  @default td","\t\t *  @dtopt Columns","\t\t * ","\t\t *  @example","\t\t *    // Make the first column use TH cells","\t\t *    $(document).ready( function() {","\t\t *      var oTable = $('#example').dataTable( {","\t\t *        \"aoColumnDefs\": [ {","\t\t *          \"aTargets\": [ 0 ],","\t\t *          \"sCellType\": \"th\"","\t\t *        } ]","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"sCellType\": \"td\",","\t","\t","\t\t/**","\t\t * Class to give to each cell in this column.","\t\t *  @type string","\t\t *  @default &lt;i&gt;Empty string&lt;/i&gt;","\t\t *  @dtopt Columns","\t\t * ","\t\t *  @example","\t\t *    // Using aoColumnDefs","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumnDefs\": [ ","\t\t *          { \"sClass\": \"my_class\", \"aTargets\": [ 0 ] }","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t *    ","\t\t *  @example","\t\t *    // Using aoColumns","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumns\": [ ","\t\t *          { \"sClass\": \"my_class\" },","\t\t *          null,","\t\t *          null,","\t\t *          null,","\t\t *          null","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"sClass\": \"\",","\t\t","\t\t/**","\t\t * When DataTables calculates the column widths to assign to each column,","\t\t * it finds the longest string in each column and then constructs a","\t\t * temporary table and reads the widths from that. The problem with this","\t\t * is that \"mmm\" is much wider then \"iiii\", but the latter is a longer ","\t\t * string - thus the calculation can go wrong (doing it properly and putting","\t\t * it into an DOM object and measuring that is horribly(!) slow). Thus as","\t\t * a \"work around\" we provide this option. It will append its value to the","\t\t * text that is found to be the longest string for the column - i.e. padding.","\t\t * Generally you shouldn't need this, and it is not documented on the ","\t\t * general DataTables.net documentation","\t\t *  @type string","\t\t *  @default &lt;i&gt;Empty string&lt;i&gt;","\t\t *  @dtopt Columns","\t\t *    ","\t\t *  @example","\t\t *    // Using aoColumns","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumns\": [ ","\t\t *          null,","\t\t *          null,","\t\t *          null,","\t\t *          {","\t\t *            \"sContentPadding\": \"mmm\"","\t\t *          }","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"sContentPadding\": \"\",","\t","\t","\t\t/**","\t\t * Allows a default value to be given for a column's data, and will be used","\t\t * whenever a null data source is encountered (this can be because mData","\t\t * is set to null, or because the data source itself is null).","\t\t *  @type string","\t\t *  @default null","\t\t *  @dtopt Columns","\t\t * ","\t\t *  @example","\t\t *    // Using aoColumnDefs","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumnDefs\": [ ","\t\t *          {","\t\t *            \"mData\": null,","\t\t *            \"sDefaultContent\": \"Edit\",","\t\t *            \"aTargets\": [ -1 ]","\t\t *          }","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t *    ","\t\t *  @example","\t\t *    // Using aoColumns","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumns\": [ ","\t\t *          null,","\t\t *          null,","\t\t *          null,","\t\t *          {","\t\t *            \"mData\": null,","\t\t *            \"sDefaultContent\": \"Edit\"","\t\t *          }","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"sDefaultContent\": null,","\t","\t","\t\t/**","\t\t * This parameter is only used in DataTables' server-side processing. It can","\t\t * be exceptionally useful to know what columns are being displayed on the","\t\t * client side, and to map these to database fields. When defined, the names","\t\t * also allow DataTables to reorder information from the server if it comes","\t\t * back in an unexpected order (i.e. if you switch your columns around on the","\t\t * client-side, your server-side code does not also need updating).","\t\t *  @type string","\t\t *  @default &lt;i&gt;Empty string&lt;/i&gt;","\t\t *  @dtopt Columns","\t\t * ","\t\t *  @example","\t\t *    // Using aoColumnDefs","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumnDefs\": [ ","\t\t *          { \"sName\": \"engine\", \"aTargets\": [ 0 ] },","\t\t *          { \"sName\": \"browser\", \"aTargets\": [ 1 ] },","\t\t *          { \"sName\": \"platform\", \"aTargets\": [ 2 ] },","\t\t *          { \"sName\": \"version\", \"aTargets\": [ 3 ] },","\t\t *          { \"sName\": \"grade\", \"aTargets\": [ 4 ] }","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t *    ","\t\t *  @example","\t\t *    // Using aoColumns","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumns\": [ ","\t\t *          { \"sName\": \"engine\" },","\t\t *          { \"sName\": \"browser\" },","\t\t *          { \"sName\": \"platform\" },","\t\t *          { \"sName\": \"version\" },","\t\t *          { \"sName\": \"grade\" }","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"sName\": \"\",","\t","\t","\t\t/**","\t\t * Defines a data source type for the sorting which can be used to read","\t\t * real-time information from the table (updating the internally cached","\t\t * version) prior to sorting. This allows sorting to occur on user editable","\t\t * elements such as form inputs.","\t\t *  @type string","\t\t *  @default std","\t\t *  @dtopt Columns","\t\t * ","\t\t *  @example","\t\t *    // Using aoColumnDefs","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumnDefs\": [","\t\t *          { \"sSortDataType\": \"dom-text\", \"aTargets\": [ 2, 3 ] },","\t\t *          { \"sType\": \"numeric\", \"aTargets\": [ 3 ] },","\t\t *          { \"sSortDataType\": \"dom-select\", \"aTargets\": [ 4 ] },","\t\t *          { \"sSortDataType\": \"dom-checkbox\", \"aTargets\": [ 5 ] }","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t *    ","\t\t *  @example","\t\t *    // Using aoColumns","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumns\": [","\t\t *          null,","\t\t *          null,","\t\t *          { \"sSortDataType\": \"dom-text\" },","\t\t *          { \"sSortDataType\": \"dom-text\", \"sType\": \"numeric\" },","\t\t *          { \"sSortDataType\": \"dom-select\" },","\t\t *          { \"sSortDataType\": \"dom-checkbox\" }","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"sSortDataType\": \"std\",","\t","\t","\t\t/**","\t\t * The title of this column.","\t\t *  @type string","\t\t *  @default null &lt;i&gt;Derived from the 'TH' value for this column in the ","\t\t *    original HTML table.&lt;/i&gt;","\t\t *  @dtopt Columns","\t\t * ","\t\t *  @example","\t\t *    // Using aoColumnDefs","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumnDefs\": [ ","\t\t *          { \"sTitle\": \"My column title\", \"aTargets\": [ 0 ] }","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t *    ","\t\t *  @example","\t\t *    // Using aoColumns","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumns\": [ ","\t\t *          { \"sTitle\": \"My column title\" },","\t\t *          null,","\t\t *          null,","\t\t *          null,","\t\t *          null","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"sTitle\": null,","\t","\t","\t\t/**","\t\t * The type allows you to specify how the data for this column will be sorted.","\t\t * Four types (string, numeric, date and html (which will strip HTML tags","\t\t * before sorting)) are currently available. Note that only date formats","\t\t * understood by Javascript's Date() object will be accepted as type date. For","\t\t * example: \"Mar 26, 2008 5:03 PM\". May take the values: 'string', 'numeric',","\t\t * 'date' or 'html' (by default). Further types can be adding through","\t\t * plug-ins.","\t\t *  @type string","\t\t *  @default null &lt;i&gt;Auto-detected from raw data&lt;/i&gt;","\t\t *  @dtopt Columns","\t\t * ","\t\t *  @example","\t\t *    // Using aoColumnDefs","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumnDefs\": [ ","\t\t *          { \"sType\": \"html\", \"aTargets\": [ 0 ] }","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t *    ","\t\t *  @example","\t\t *    // Using aoColumns","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumns\": [ ","\t\t *          { \"sType\": \"html\" },","\t\t *          null,","\t\t *          null,","\t\t *          null,","\t\t *          null","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"sType\": null,","\t","\t","\t\t/**","\t\t * Defining the width of the column, this parameter may take any CSS value","\t\t * (3em, 20px etc). DataTables apples 'smart' widths to columns which have not","\t\t * been given a specific width through this interface ensuring that the table","\t\t * remains readable.","\t\t *  @type string","\t\t *  @default null &lt;i&gt;Automatic&lt;/i&gt;","\t\t *  @dtopt Columns","\t\t * ","\t\t *  @example","\t\t *    // Using aoColumnDefs","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumnDefs\": [ ","\t\t *          { \"sWidth\": \"20%\", \"aTargets\": [ 0 ] }","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t *    ","\t\t *  @example","\t\t *    // Using aoColumns","\t\t *    $(document).ready( function() {","\t\t *      $('#example').dataTable( {","\t\t *        \"aoColumns\": [ ","\t\t *          { \"sWidth\": \"20%\" },","\t\t *          null,","\t\t *          null,","\t\t *          null,","\t\t *          null","\t\t *        ]","\t\t *      } );","\t\t *    } );","\t\t */","\t\t\"sWidth\": null","\t};","\t","\t","\t","\t/**","\t * DataTables settings object - this holds all the information needed for a","\t * given table, including configuration, data and current application of the","\t * table options. DataTables does not have a single instance for each DataTable","\t * with the settings attached to that instance, but rather instances of the","\t * DataTable \"class\" are created on-the-fly as needed (typically by a ","\t * $().dataTable() call) and the settings object is then applied to that","\t * instance.","\t * ","\t * Note that this object is related to {@link DataTable.defaults} but this ","\t * one is the internal data store for DataTables's cache of columns. It should","\t * NOT be manipulated outside of DataTables. Any configuration should be done","\t * through the initialisation options.","\t *  @namespace","\t *  @todo Really should attach the settings object to individual instances so we","\t *    don't need to create new instances on each $().dataTable() call (if the","\t *    table already exists). It would also save passing oSettings around and","\t *    into every single function. However, this is a very significant ","\t *    architecture change for DataTables and will almost certainly break","\t *    backwards compatibility with older installations. This is something that","\t *    will be done in 2.0.","\t */","\tDataTable.models.oSettings = {","\t\t/**","\t\t * Primary features of DataTables and their enablement state.","\t\t *  @namespace","\t\t */","\t\t\"oFeatures\": {","\t\t\t","\t\t\t/**","\t\t\t * Flag to say if DataTables should automatically try to calculate the","\t\t\t * optimum table and columns widths (true) or not (false).","\t\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t\t * set a default use {@link DataTable.defaults}.","\t\t\t *  @type boolean","\t\t\t */","\t\t\t\"bAutoWidth\": null,","\t","\t\t\t/**","\t\t\t * Delay the creation of TR and TD elements until they are actually","\t\t\t * needed by a driven page draw. This can give a significant speed","\t\t\t * increase for Ajax source and Javascript source data, but makes no","\t\t\t * difference at all fro DOM and server-side processing tables.","\t\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t\t * set a default use {@link DataTable.defaults}.","\t\t\t *  @type boolean","\t\t\t */","\t\t\t\"bDeferRender\": null,","\t\t\t","\t\t\t/**","\t\t\t * Enable filtering on the table or not. Note that if this is disabled","\t\t\t * then there is no filtering at all on the table, including fnFilter.","\t\t\t * To just remove the filtering input use sDom and remove the 'f' option.","\t\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t\t * set a default use {@link DataTable.defaults}.","\t\t\t *  @type boolean","\t\t\t */","\t\t\t\"bFilter\": null,","\t\t\t","\t\t\t/**","\t\t\t * Table information element (the 'Showing x of y records' div) enable","\t\t\t * flag.","\t\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t\t * set a default use {@link DataTable.defaults}.","\t\t\t *  @type boolean","\t\t\t */","\t\t\t\"bInfo\": null,","\t\t\t","\t\t\t/**","\t\t\t * Present a user control allowing the end user to change the page size","\t\t\t * when pagination is enabled.","\t\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t\t * set a default use {@link DataTable.defaults}.","\t\t\t *  @type boolean","\t\t\t */","\t\t\t\"bLengthChange\": null,","\t","\t\t\t/**","\t\t\t * Pagination enabled or not. Note that if this is disabled then length","\t\t\t * changing must also be disabled.","\t\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t\t * set a default use {@link DataTable.defaults}.","\t\t\t *  @type boolean","\t\t\t */","\t\t\t\"bPaginate\": null,","\t\t\t","\t\t\t/**","\t\t\t * Processing indicator enable flag whenever DataTables is enacting a","\t\t\t * user request - typically an Ajax request for server-side processing.","\t\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t\t * set a default use {@link DataTable.defaults}.","\t\t\t *  @type boolean","\t\t\t */","\t\t\t\"bProcessing\": null,","\t\t\t","\t\t\t/**","\t\t\t * Server-side processing enabled flag - when enabled DataTables will","\t\t\t * get all data from the server for every draw - there is no filtering,","\t\t\t * sorting or paging done on the client-side.","\t\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t\t * set a default use {@link DataTable.defaults}.","\t\t\t *  @type boolean","\t\t\t */","\t\t\t\"bServerSide\": null,","\t\t\t","\t\t\t/**","\t\t\t * Sorting enablement flag.","\t\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t\t * set a default use {@link DataTable.defaults}.","\t\t\t *  @type boolean","\t\t\t */","\t\t\t\"bSort\": null,","\t\t\t","\t\t\t/**","\t\t\t * Apply a class to the columns which are being sorted to provide a","\t\t\t * visual highlight or not. This can slow things down when enabled since","\t\t\t * there is a lot of DOM interaction.","\t\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t\t * set a default use {@link DataTable.defaults}.","\t\t\t *  @type boolean","\t\t\t */","\t\t\t\"bSortClasses\": null,","\t\t\t","\t\t\t/**","\t\t\t * State saving enablement flag.","\t\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t\t * set a default use {@link DataTable.defaults}.","\t\t\t *  @type boolean","\t\t\t */","\t\t\t\"bStateSave\": null","\t\t},","\t\t","\t","\t\t/**","\t\t * Scrolling settings for a table.","\t\t *  @namespace","\t\t */","\t\t\"oScroll\": {","\t\t\t/**","\t\t\t * Indicate if DataTables should be allowed to set the padding / margin","\t\t\t * etc for the scrolling header elements or not. Typically you will want","\t\t\t * this.","\t\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t\t * set a default use {@link DataTable.defaults}.","\t\t\t *  @type boolean","\t\t\t */","\t\t\t\"bAutoCss\": null,","\t\t\t","\t\t\t/**","\t\t\t * When the table is shorter in height than sScrollY, collapse the","\t\t\t * table container down to the height of the table (when true).","\t\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t\t * set a default use {@link DataTable.defaults}.","\t\t\t *  @type boolean","\t\t\t */","\t\t\t\"bCollapse\": null,","\t\t\t","\t\t\t/**","\t\t\t * Infinite scrolling enablement flag. Now deprecated in favour of","\t\t\t * using the Scroller plug-in.","\t\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t\t * set a default use {@link DataTable.defaults}.","\t\t\t *  @type boolean","\t\t\t */","\t\t\t\"bInfinite\": null,","\t\t\t","\t\t\t/**","\t\t\t * Width of the scrollbar for the web-browser's platform. Calculated","\t\t\t * during table initialisation.","\t\t\t *  @type int","\t\t\t *  @default 0","\t\t\t */","\t\t\t\"iBarWidth\": 0,","\t\t\t","\t\t\t/**","\t\t\t * Space (in pixels) between the bottom of the scrolling container and ","\t\t\t * the bottom of the scrolling viewport before the next page is loaded","\t\t\t * when using infinite scrolling.","\t\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t\t * set a default use {@link DataTable.defaults}.","\t\t\t *  @type int","\t\t\t */","\t\t\t\"iLoadGap\": null,","\t\t\t","\t\t\t/**","\t\t\t * Viewport width for horizontal scrolling. Horizontal scrolling is ","\t\t\t * disabled if an empty string.","\t\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t\t * set a default use {@link DataTable.defaults}.","\t\t\t *  @type string","\t\t\t */","\t\t\t\"sX\": null,","\t\t\t","\t\t\t/**","\t\t\t * Width to expand the table to when using x-scrolling. Typically you","\t\t\t * should not need to use this.","\t\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t\t * set a default use {@link DataTable.defaults}.","\t\t\t *  @type string","\t\t\t *  @deprecated","\t\t\t */","\t\t\t\"sXInner\": null,","\t\t\t","\t\t\t/**","\t\t\t * Viewport height for vertical scrolling. Vertical scrolling is disabled","\t\t\t * if an empty string.","\t\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t\t * set a default use {@link DataTable.defaults}.","\t\t\t *  @type string","\t\t\t */","\t\t\t\"sY\": null","\t\t},","\t\t","\t\t/**","\t\t * Language information for the table.","\t\t *  @namespace","\t\t *  @extends DataTable.defaults.oLanguage","\t\t */","\t\t\"oLanguage\": {","\t\t\t/**","\t\t\t * Information callback function. See ","\t\t\t * {@link DataTable.defaults.fnInfoCallback}","\t\t\t *  @type function","\t\t\t *  @default null","\t\t\t */","\t\t\t\"fnInfoCallback\": null","\t\t},","\t\t","\t\t/**","\t\t * Browser support parameters","\t\t *  @namespace","\t\t */","\t\t\"oBrowser\": {","\t\t\t/**","\t\t\t * Indicate if the browser incorrectly calculates width:100% inside a","\t\t\t * scrolling element (IE6/7)","\t\t\t *  @type boolean","\t\t\t *  @default false","\t\t\t */","\t\t\t\"bScrollOversize\": false","\t\t},","\t\t","\t\t/**","\t\t * Array referencing the nodes which are used for the features. The ","\t\t * parameters of this object match what is allowed by sDom - i.e.","\t\t *   &lt;ul&gt;","\t\t *     &lt;li&gt;'l' - Length changing&lt;/li&gt;","\t\t *     &lt;li&gt;'f' - Filtering input&lt;/li&gt;","\t\t *     &lt;li&gt;'t' - The table!&lt;/li&gt;","\t\t *     &lt;li&gt;'i' - Information&lt;/li&gt;","\t\t *     &lt;li&gt;'p' - Pagination&lt;/li&gt;","\t\t *     &lt;li&gt;'r' - pRocessing&lt;/li&gt;","\t\t *   &lt;/ul&gt;","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"aanFeatures\": [],","\t\t","\t\t/**","\t\t * Store data information - see {@link DataTable.models.oRow} for detailed","\t\t * information.","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"aoData\": [],","\t\t","\t\t/**","\t\t * Array of indexes which are in the current display (after filtering etc)","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"aiDisplay\": [],","\t\t","\t\t/**","\t\t * Array of indexes for display - no filtering","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"aiDisplayMaster\": [],","\t\t","\t\t/**","\t\t * Store information about each column that is in use","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"aoColumns\": [],","\t\t","\t\t/**","\t\t * Store information about the table's header","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"aoHeader\": [],","\t\t","\t\t/**","\t\t * Store information about the table's footer","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"aoFooter\": [],","\t\t","\t\t/**","\t\t * Search data array for regular expression searching","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"asDataSearch\": [],","\t\t","\t\t/**","\t\t * Store the applied global search information in case we want to force a ","\t\t * research or compare the old search to a new one.","\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t * set a default use {@link DataTable.defaults}.","\t\t *  @namespace","\t\t *  @extends DataTable.models.oSearch","\t\t */","\t\t\"oPreviousSearch\": {},","\t\t","\t\t/**","\t\t * Store the applied search for each column - see ","\t\t * {@link DataTable.models.oSearch} for the format that is used for the","\t\t * filtering information for each column.","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"aoPreSearchCols\": [],","\t\t","\t\t/**","\t\t * Sorting that is applied to the table. Note that the inner arrays are","\t\t * used in the following manner:","\t\t * &lt;ul&gt;","\t\t *   &lt;li&gt;Index 0 - column number&lt;/li&gt;","\t\t *   &lt;li&gt;Index 1 - current sorting direction&lt;/li&gt;","\t\t *   &lt;li&gt;Index 2 - index of asSorting for this column&lt;/li&gt;","\t\t * &lt;/ul&gt;","\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t * set a default use {@link DataTable.defaults}.","\t\t *  @type array","\t\t *  @todo These inner arrays should really be objects","\t\t */","\t\t\"aaSorting\": null,","\t\t","\t\t/**","\t\t * Sorting that is always applied to the table (i.e. prefixed in front of","\t\t * aaSorting).","\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t * set a default use {@link DataTable.defaults}.","\t\t *  @type array|null","\t\t *  @default null","\t\t */","\t\t\"aaSortingFixed\": null,","\t\t","\t\t/**","\t\t * Classes to use for the striping of a table.","\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t * set a default use {@link DataTable.defaults}.","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"asStripeClasses\": null,","\t\t","\t\t/**","\t\t * If restoring a table - we should restore its striping classes as well","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"asDestroyStripes\": [],","\t\t","\t\t/**","\t\t * If restoring a table - we should restore its width ","\t\t *  @type int","\t\t *  @default 0","\t\t */","\t\t\"sDestroyWidth\": 0,","\t\t","\t\t/**","\t\t * Callback functions array for every time a row is inserted (i.e. on a draw).","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"aoRowCallback\": [],","\t\t","\t\t/**","\t\t * Callback functions for the header on each draw.","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"aoHeaderCallback\": [],","\t\t","\t\t/**","\t\t * Callback function for the footer on each draw.","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"aoFooterCallback\": [],","\t\t","\t\t/**","\t\t * Array of callback functions for draw callback functions","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"aoDrawCallback\": [],","\t\t","\t\t/**","\t\t * Array of callback functions for row created function","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"aoRowCreatedCallback\": [],","\t\t","\t\t/**","\t\t * Callback functions for just before the table is redrawn. A return of ","\t\t * false will be used to cancel the draw.","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"aoPreDrawCallback\": [],","\t\t","\t\t/**","\t\t * Callback functions for when the table has been initialised.","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"aoInitComplete\": [],","\t","\t\t","\t\t/**","\t\t * Callbacks for modifying the settings to be stored for state saving, prior to","\t\t * saving state.","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"aoStateSaveParams\": [],","\t\t","\t\t/**","\t\t * Callbacks for modifying the settings that have been stored for state saving","\t\t * prior to using the stored values to restore the state.","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"aoStateLoadParams\": [],","\t\t","\t\t/**","\t\t * Callbacks for operating on the settings object once the saved state has been","\t\t * loaded","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"aoStateLoaded\": [],","\t\t","\t\t/**","\t\t * Cache the table ID for quick access","\t\t *  @type string","\t\t *  @default &lt;i&gt;Empty string&lt;/i&gt;","\t\t */","\t\t\"sTableId\": \"\",","\t\t","\t\t/**","\t\t * The TABLE node for the main table","\t\t *  @type node","\t\t *  @default null","\t\t */","\t\t\"nTable\": null,","\t\t","\t\t/**","\t\t * Permanent ref to the thead element","\t\t *  @type node","\t\t *  @default null","\t\t */","\t\t\"nTHead\": null,","\t\t","\t\t/**","\t\t * Permanent ref to the tfoot element - if it exists","\t\t *  @type node","\t\t *  @default null","\t\t */","\t\t\"nTFoot\": null,","\t\t","\t\t/**","\t\t * Permanent ref to the tbody element","\t\t *  @type node","\t\t *  @default null","\t\t */","\t\t\"nTBody\": null,","\t\t","\t\t/**","\t\t * Cache the wrapper node (contains all DataTables controlled elements)","\t\t *  @type node","\t\t *  @default null","\t\t */","\t\t\"nTableWrapper\": null,","\t\t","\t\t/**","\t\t * Indicate if when using server-side processing the loading of data ","\t\t * should be deferred until the second draw.","\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t * set a default use {@link DataTable.defaults}.","\t\t *  @type boolean","\t\t *  @default false","\t\t */","\t\t\"bDeferLoading\": false,","\t\t","\t\t/**","\t\t * Indicate if all required information has been read in","\t\t *  @type boolean","\t\t *  @default false","\t\t */","\t\t\"bInitialised\": false,","\t\t","\t\t/**","\t\t * Information about open rows. Each object in the array has the parameters","\t\t * 'nTr' and 'nParent'","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"aoOpenRows\": [],","\t\t","\t\t/**","\t\t * Dictate the positioning of DataTables' control elements - see","\t\t * {@link DataTable.model.oInit.sDom}.","\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t * set a default use {@link DataTable.defaults}.","\t\t *  @type string","\t\t *  @default null","\t\t */","\t\t\"sDom\": null,","\t\t","\t\t/**","\t\t * Which type of pagination should be used.","\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t * set a default use {@link DataTable.defaults}.","\t\t *  @type string ","\t\t *  @default two_button","\t\t */","\t\t\"sPaginationType\": \"two_button\",","\t\t","\t\t/**","\t\t * The cookie duration (for bStateSave) in seconds.","\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t * set a default use {@link DataTable.defaults}.","\t\t *  @type int","\t\t *  @default 0","\t\t */","\t\t\"iCookieDuration\": 0,","\t\t","\t\t/**","\t\t * The cookie name prefix.","\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t * set a default use {@link DataTable.defaults}.","\t\t *  @type string","\t\t *  @default &lt;i&gt;Empty string&lt;/i&gt;","\t\t */","\t\t\"sCookiePrefix\": \"\",","\t\t","\t\t/**","\t\t * Callback function for cookie creation.","\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t * set a default use {@link DataTable.defaults}.","\t\t *  @type function","\t\t *  @default null","\t\t */","\t\t\"fnCookieCallback\": null,","\t\t","\t\t/**","\t\t * Array of callback functions for state saving. Each array element is an ","\t\t * object with the following parameters:","\t\t *   &lt;ul&gt;","\t\t *     &lt;li&gt;function:fn - function to call. Takes two parameters, oSettings","\t\t *       and the JSON string to save that has been thus far created. Returns","\t\t *       a JSON string to be inserted into a json object ","\t\t *       (i.e. '\"param\": [ 0, 1, 2]')&lt;/li&gt;","\t\t *     &lt;li&gt;string:sName - name of callback&lt;/li&gt;","\t\t *   &lt;/ul&gt;","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"aoStateSave\": [],","\t\t","\t\t/**","\t\t * Array of callback functions for state loading. Each array element is an ","\t\t * object with the following parameters:","\t\t *   &lt;ul&gt;","\t\t *     &lt;li&gt;function:fn - function to call. Takes two parameters, oSettings ","\t\t *       and the object stored. May return false to cancel state loading&lt;/li&gt;","\t\t *     &lt;li&gt;string:sName - name of callback&lt;/li&gt;","\t\t *   &lt;/ul&gt;","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"aoStateLoad\": [],","\t\t","\t\t/**","\t\t * State that was loaded from the cookie. Useful for back reference","\t\t *  @type object","\t\t *  @default null","\t\t */","\t\t\"oLoadedState\": null,","\t\t","\t\t/**","\t\t * Source url for AJAX data for the table.","\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t * set a default use {@link DataTable.defaults}.","\t\t *  @type string","\t\t *  @default null","\t\t */","\t\t\"sAjaxSource\": null,","\t\t","\t\t/**","\t\t * Property from a given object from which to read the table data from. This","\t\t * can be an empty string (when not server-side processing), in which case ","\t\t * it is  assumed an an array is given directly.","\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t * set a default use {@link DataTable.defaults}.","\t\t *  @type string","\t\t */","\t\t\"sAjaxDataProp\": null,","\t\t","\t\t/**","\t\t * Note if draw should be blocked while getting data","\t\t *  @type boolean","\t\t *  @default true","\t\t */","\t\t\"bAjaxDataGet\": true,","\t\t","\t\t/**","\t\t * The last jQuery XHR object that was used for server-side data gathering. ","\t\t * This can be used for working with the XHR information in one of the ","\t\t * callbacks","\t\t *  @type object","\t\t *  @default null","\t\t */","\t\t\"jqXHR\": null,","\t\t","\t\t/**","\t\t * Function to get the server-side data.","\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t * set a default use {@link DataTable.defaults}.","\t\t *  @type function","\t\t */","\t\t\"fnServerData\": null,","\t\t","\t\t/**","\t\t * Functions which are called prior to sending an Ajax request so extra ","\t\t * parameters can easily be sent to the server","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"aoServerParams\": [],","\t\t","\t\t/**","\t\t * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if ","\t\t * required).","\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t * set a default use {@link DataTable.defaults}.","\t\t *  @type string","\t\t */","\t\t\"sServerMethod\": null,","\t\t","\t\t/**","\t\t * Format numbers for display.","\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t * set a default use {@link DataTable.defaults}.","\t\t *  @type function","\t\t */","\t\t\"fnFormatNumber\": null,","\t\t","\t\t/**","\t\t * List of options that can be used for the user selectable length menu.","\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t * set a default use {@link DataTable.defaults}.","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"aLengthMenu\": null,","\t\t","\t\t/**","\t\t * Counter for the draws that the table does. Also used as a tracker for","\t\t * server-side processing","\t\t *  @type int","\t\t *  @default 0","\t\t */","\t\t\"iDraw\": 0,","\t\t","\t\t/**","\t\t * Indicate if a redraw is being done - useful for Ajax","\t\t *  @type boolean","\t\t *  @default false","\t\t */","\t\t\"bDrawing\": false,","\t\t","\t\t/**","\t\t * Draw index (iDraw) of the last error when parsing the returned data","\t\t *  @type int","\t\t *  @default -1","\t\t */","\t\t\"iDrawError\": -1,","\t\t","\t\t/**","\t\t * Paging display length","\t\t *  @type int","\t\t *  @default 10","\t\t */","\t\t\"_iDisplayLength\": 10,","\t","\t\t/**","\t\t * Paging start point - aiDisplay index","\t\t *  @type int","\t\t *  @default 0","\t\t */","\t\t\"_iDisplayStart\": 0,","\t","\t\t/**","\t\t * Paging end point - aiDisplay index. Use fnDisplayEnd rather than","\t\t * this property to get the end point","\t\t *  @type int","\t\t *  @default 10","\t\t *  @private","\t\t */","\t\t\"_iDisplayEnd\": 10,","\t\t","\t\t/**","\t\t * Server-side processing - number of records in the result set","\t\t * (i.e. before filtering), Use fnRecordsTotal rather than","\t\t * this property to get the value of the number of records, regardless of","\t\t * the server-side processing setting.","\t\t *  @type int","\t\t *  @default 0","\t\t *  @private","\t\t */","\t\t\"_iRecordsTotal\": 0,","\t","\t\t/**","\t\t * Server-side processing - number of records in the current display set","\t\t * (i.e. after filtering). Use fnRecordsDisplay rather than","\t\t * this property to get the value of the number of records, regardless of","\t\t * the server-side processing setting.","\t\t *  @type boolean","\t\t *  @default 0","\t\t *  @private","\t\t */","\t\t\"_iRecordsDisplay\": 0,","\t\t","\t\t/**","\t\t * Flag to indicate if jQuery UI marking and classes should be used.","\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t * set a default use {@link DataTable.defaults}.","\t\t *  @type boolean","\t\t */","\t\t\"bJUI\": null,","\t\t","\t\t/**","\t\t * The classes to use for the table","\t\t *  @type object","\t\t *  @default {}","\t\t */","\t\t\"oClasses\": {},","\t\t","\t\t/**","\t\t * Flag attached to the settings object so you can check in the draw ","\t\t * callback if filtering has been done in the draw. Deprecated in favour of","\t\t * events.","\t\t *  @type boolean","\t\t *  @default false","\t\t *  @deprecated","\t\t */","\t\t\"bFiltered\": false,","\t\t","\t\t/**","\t\t * Flag attached to the settings object so you can check in the draw ","\t\t * callback if sorting has been done in the draw. Deprecated in favour of","\t\t * events.","\t\t *  @type boolean","\t\t *  @default false","\t\t *  @deprecated","\t\t */","\t\t\"bSorted\": false,","\t\t","\t\t/**","\t\t * Indicate that if multiple rows are in the header and there is more than ","\t\t * one unique cell per column, if the top one (true) or bottom one (false) ","\t\t * should be used for sorting / title by DataTables.","\t\t * Note that this parameter will be set by the initialisation routine. To","\t\t * set a default use {@link DataTable.defaults}.","\t\t *  @type boolean","\t\t */","\t\t\"bSortCellsTop\": null,","\t\t","\t\t/**","\t\t * Initialisation object that is used for the table","\t\t *  @type object","\t\t *  @default null","\t\t */","\t\t\"oInit\": null,","\t\t","\t\t/**","\t\t * Destroy callback functions - for plug-ins to attach themselves to the","\t\t * destroy so they can clean up markup and events.","\t\t *  @type array","\t\t *  @default []","\t\t */","\t\t\"aoDestroyCallback\": [],","\t","\t\t","\t\t/**","\t\t * Get the number of records in the current record set, before filtering","\t\t *  @type function","\t\t */","\t\t\"fnRecordsTotal\": function ()","\t\t{","\t\t\tif ( this.oFeatures.bServerSide ) {","\t\t\t\treturn parseInt(this._iRecordsTotal, 10);","\t\t\t} else {","\t\t\t\treturn this.aiDisplayMaster.length;","\t\t\t}","\t\t},","\t\t","\t\t/**","\t\t * Get the number of records in the current record set, after filtering","\t\t *  @type function","\t\t */","\t\t\"fnRecordsDisplay\": function ()","\t\t{","\t\t\tif ( this.oFeatures.bServerSide ) {","\t\t\t\treturn parseInt(this._iRecordsDisplay, 10);","\t\t\t} else {","\t\t\t\treturn this.aiDisplay.length;","\t\t\t}","\t\t},","\t\t","\t\t/**","\t\t * Set the display end point - aiDisplay index","\t\t *  @type function","\t\t *  @todo Should do away with _iDisplayEnd and calculate it on-the-fly here","\t\t */","\t\t\"fnDisplayEnd\": function ()","\t\t{","\t\t\tif ( this.oFeatures.bServerSide ) {","\t\t\t\tif ( this.oFeatures.bPaginate === false || this._iDisplayLength == -1 ) {","\t\t\t\t\treturn this._iDisplayStart+this.aiDisplay.length;","\t\t\t\t} else {","\t\t\t\t\treturn Math.min( this._iDisplayStart+this._iDisplayLength, ","\t\t\t\t\t\tthis._iRecordsDisplay );","\t\t\t\t}","\t\t\t} else {","\t\t\t\treturn this._iDisplayEnd;","\t\t\t}","\t\t},","\t\t","\t\t/**","\t\t * The DataTables object for this table","\t\t *  @type object","\t\t *  @default null","\t\t */","\t\t\"oInstance\": null,","\t\t","\t\t/**","\t\t * Unique identifier for each instance of the DataTables object. If there","\t\t * is an ID on the table node, then it takes that value, otherwise an","\t\t * incrementing internal counter is used.","\t\t *  @type string","\t\t *  @default null","\t\t */","\t\t\"sInstance\": null,","\t","\t\t/**","\t\t * tabindex attribute value that is added to DataTables control elements, allowing","\t\t * keyboard navigation of the table and its controls.","\t\t */","\t\t\"iTabIndex\": 0,","\t","\t\t/**","\t\t * DIV container for the footer scrolling table if scrolling","\t\t */","\t\t\"nScrollHead\": null,","\t","\t\t/**","\t\t * DIV container for the footer scrolling table if scrolling","\t\t */","\t\t\"nScrollFoot\": null","\t};","","\t/**","\t * Extension object for DataTables that is used to provide all extension options.","\t * ","\t * Note that the &lt;i&gt;DataTable.ext&lt;/i&gt; object is available through","\t * &lt;i&gt;jQuery.fn.dataTable.ext&lt;/i&gt; where it may be accessed and manipulated. It is","\t * also aliased to &lt;i&gt;jQuery.fn.dataTableExt&lt;/i&gt; for historic reasons.","\t *  @namespace","\t *  @extends DataTable.models.ext","\t */","\tDataTable.ext = $.extend( true, {}, DataTable.models.ext );","\t","\t$.extend( DataTable.ext.oStdClasses, {","\t\t\"sTable\": \"dataTable\",","\t","\t\t/* Two buttons buttons */","\t\t\"sPagePrevEnabled\": \"paginate_enabled_previous\",","\t\t\"sPagePrevDisabled\": \"paginate_disabled_previous\",","\t\t\"sPageNextEnabled\": \"paginate_enabled_next\",","\t\t\"sPageNextDisabled\": \"paginate_disabled_next\",","\t\t\"sPageJUINext\": \"\",","\t\t\"sPageJUIPrev\": \"\",","\t\t","\t\t/* Full numbers paging buttons */","\t\t\"sPageButton\": \"paginate_button\",","\t\t\"sPageButtonActive\": \"paginate_active\",","\t\t\"sPageButtonStaticDisabled\": \"paginate_button paginate_button_disabled\",","\t\t\"sPageFirst\": \"first\",","\t\t\"sPagePrevious\": \"previous\",","\t\t\"sPageNext\": \"next\",","\t\t\"sPageLast\": \"last\",","\t\t","\t\t/* Striping classes */","\t\t\"sStripeOdd\": \"odd\",","\t\t\"sStripeEven\": \"even\",","\t\t","\t\t/* Empty row */","\t\t\"sRowEmpty\": \"dataTables_empty\",","\t\t","\t\t/* Features */","\t\t\"sWrapper\": \"dataTables_wrapper\",","\t\t\"sFilter\": \"dataTables_filter\",","\t\t\"sInfo\": \"dataTables_info\",","\t\t\"sPaging\": \"dataTables_paginate paging_\", /* Note that the type is postfixed */","\t\t\"sLength\": \"dataTables_length\",","\t\t\"sProcessing\": \"dataTables_processing\",","\t\t","\t\t/* Sorting */","\t\t\"sSortAsc\": \"sorting_asc\",","\t\t\"sSortDesc\": \"sorting_desc\",","\t\t\"sSortable\": \"sorting\", /* Sortable in both directions */","\t\t\"sSortableAsc\": \"sorting_asc_disabled\",","\t\t\"sSortableDesc\": \"sorting_desc_disabled\",","\t\t\"sSortableNone\": \"sorting_disabled\",","\t\t\"sSortColumn\": \"sorting_\", /* Note that an int is postfixed for the sorting order */","\t\t\"sSortJUIAsc\": \"\",","\t\t\"sSortJUIDesc\": \"\",","\t\t\"sSortJUI\": \"\",","\t\t\"sSortJUIAscAllowed\": \"\",","\t\t\"sSortJUIDescAllowed\": \"\",","\t\t\"sSortJUIWrapper\": \"\",","\t\t\"sSortIcon\": \"\",","\t\t","\t\t/* Scrolling */","\t\t\"sScrollWrapper\": \"dataTables_scroll\",","\t\t\"sScrollHead\": \"dataTables_scrollHead\",","\t\t\"sScrollHeadInner\": \"dataTables_scrollHeadInner\",","\t\t\"sScrollBody\": \"dataTables_scrollBody\",","\t\t\"sScrollFoot\": \"dataTables_scrollFoot\",","\t\t\"sScrollFootInner\": \"dataTables_scrollFootInner\",","\t\t","\t\t/* Misc */","\t\t\"sFooterTH\": \"\",","\t\t\"sJUIHeader\": \"\",","\t\t\"sJUIFooter\": \"\"","\t} );","\t","\t","\t$.extend( DataTable.ext.oJUIClasses, DataTable.ext.oStdClasses, {","\t\t/* Two buttons buttons */","\t\t\"sPagePrevEnabled\": \"fg-button ui-button ui-state-default ui-corner-left\",","\t\t\"sPagePrevDisabled\": \"fg-button ui-button ui-state-default ui-corner-left ui-state-disabled\",","\t\t\"sPageNextEnabled\": \"fg-button ui-button ui-state-default ui-corner-right\",","\t\t\"sPageNextDisabled\": \"fg-button ui-button ui-state-default ui-corner-right ui-state-disabled\",","\t\t\"sPageJUINext\": \"ui-icon ui-icon-circle-arrow-e\",","\t\t\"sPageJUIPrev\": \"ui-icon ui-icon-circle-arrow-w\",","\t\t","\t\t/* Full numbers paging buttons */","\t\t\"sPageButton\": \"fg-button ui-button ui-state-default\",","\t\t\"sPageButtonActive\": \"fg-button ui-button ui-state-default ui-state-disabled\",","\t\t\"sPageButtonStaticDisabled\": \"fg-button ui-button ui-state-default ui-state-disabled\",","\t\t\"sPageFirst\": \"first ui-corner-tl ui-corner-bl\",","\t\t\"sPageLast\": \"last ui-corner-tr ui-corner-br\",","\t\t","\t\t/* Features */","\t\t\"sPaging\": \"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi \"+","\t\t\t\"ui-buttonset-multi paging_\", /* Note that the type is postfixed */","\t\t","\t\t/* Sorting */","\t\t\"sSortAsc\": \"ui-state-default\",","\t\t\"sSortDesc\": \"ui-state-default\",","\t\t\"sSortable\": \"ui-state-default\",","\t\t\"sSortableAsc\": \"ui-state-default\",","\t\t\"sSortableDesc\": \"ui-state-default\",","\t\t\"sSortableNone\": \"ui-state-default\",","\t\t\"sSortJUIAsc\": \"css_right ui-icon ui-icon-triangle-1-n\",","\t\t\"sSortJUIDesc\": \"css_right ui-icon ui-icon-triangle-1-s\",","\t\t\"sSortJUI\": \"css_right ui-icon ui-icon-carat-2-n-s\",","\t\t\"sSortJUIAscAllowed\": \"css_right ui-icon ui-icon-carat-1-n\",","\t\t\"sSortJUIDescAllowed\": \"css_right ui-icon ui-icon-carat-1-s\",","\t\t\"sSortJUIWrapper\": \"DataTables_sort_wrapper\",","\t\t\"sSortIcon\": \"DataTables_sort_icon\",","\t\t","\t\t/* Scrolling */","\t\t\"sScrollHead\": \"dataTables_scrollHead ui-state-default\",","\t\t\"sScrollFoot\": \"dataTables_scrollFoot ui-state-default\",","\t\t","\t\t/* Misc */","\t\t\"sFooterTH\": \"ui-state-default\",","\t\t\"sJUIHeader\": \"fg-toolbar ui-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix\",","\t\t\"sJUIFooter\": \"fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix\"","\t} );","\t","\t/*","\t * Variable: oPagination","\t * Purpose:  ","\t * Scope:    jQuery.fn.dataTableExt","\t */","\t$.extend( DataTable.ext.oPagination, {","\t\t/*","\t\t * Variable: two_button","\t\t * Purpose:  Standard two button (forward/back) pagination","\t\t * Scope:    jQuery.fn.dataTableExt.oPagination","\t\t */","\t\t\"two_button\": {","\t\t\t/*","\t\t\t * Function: oPagination.two_button.fnInit","\t\t\t * Purpose:  Initialise dom elements required for pagination with forward/back buttons only","\t\t\t * Returns:  -","\t\t\t * Inputs:   object:oSettings - dataTables settings object","\t\t\t *           node:nPaging - the DIV which contains this pagination control","\t\t\t *           function:fnCallbackDraw - draw function which must be called on update","\t\t\t */","\t\t\t\"fnInit\": function ( oSettings, nPaging, fnCallbackDraw )","\t\t\t{","\t\t\t\tvar oLang = oSettings.oLanguage.oPaginate;","\t\t\t\tvar oClasses = oSettings.oClasses;","\t\t\t\tvar fnClickHandler = function ( e ) {","\t\t\t\t\tif ( oSettings.oApi._fnPageChange( oSettings, e.data.action ) )","\t\t\t\t\t{","\t\t\t\t\t\tfnCallbackDraw( oSettings );","\t\t\t\t\t}","\t\t\t\t};","\t","\t\t\t\tvar sAppend = (!oSettings.bJUI) ?","\t\t\t\t\t'&lt;a class=\"'+oSettings.oClasses.sPagePrevDisabled+'\" tabindex=\"'+oSettings.iTabIndex+'\" role=\"button\"&gt;'+oLang.sPrevious+'&lt;/a&gt;'+","\t\t\t\t\t'&lt;a class=\"'+oSettings.oClasses.sPageNextDisabled+'\" tabindex=\"'+oSettings.iTabIndex+'\" role=\"button\"&gt;'+oLang.sNext+'&lt;/a&gt;'","\t\t\t\t\t:","\t\t\t\t\t'&lt;a class=\"'+oSettings.oClasses.sPagePrevDisabled+'\" tabindex=\"'+oSettings.iTabIndex+'\" role=\"button\"&gt;&lt;span class=\"'+oSettings.oClasses.sPageJUIPrev+'\"&gt;&lt;/span&gt;&lt;/a&gt;'+","\t\t\t\t\t'&lt;a class=\"'+oSettings.oClasses.sPageNextDisabled+'\" tabindex=\"'+oSettings.iTabIndex+'\" role=\"button\"&gt;&lt;span class=\"'+oSettings.oClasses.sPageJUINext+'\"&gt;&lt;/span&gt;&lt;/a&gt;';","\t\t\t\t$(nPaging).append( sAppend );","\t\t\t\t","\t\t\t\tvar els = $('a', nPaging);","\t\t\t\tvar nPrevious = els[0],","\t\t\t\t\tnNext = els[1];","\t\t\t\t","\t\t\t\toSettings.oApi._fnBindAction( nPrevious, {action: \"previous\"}, fnClickHandler );","\t\t\t\toSettings.oApi._fnBindAction( nNext,     {action: \"next\"},     fnClickHandler );","\t\t\t\t","\t\t\t\t/* ID the first elements only */","\t\t\t\tif ( !oSettings.aanFeatures.p )","\t\t\t\t{","\t\t\t\t\tnPaging.id = oSettings.sTableId+'_paginate';","\t\t\t\t\tnPrevious.id = oSettings.sTableId+'_previous';","\t\t\t\t\tnNext.id = oSettings.sTableId+'_next';","\t","\t\t\t\t\tnPrevious.setAttribute('aria-controls', oSettings.sTableId);","\t\t\t\t\tnNext.setAttribute('aria-controls', oSettings.sTableId);","\t\t\t\t}","\t\t\t},","\t\t\t","\t\t\t/*","\t\t\t * Function: oPagination.two_button.fnUpdate","\t\t\t * Purpose:  Update the two button pagination at the end of the draw","\t\t\t * Returns:  -","\t\t\t * Inputs:   object:oSettings - dataTables settings object","\t\t\t *           function:fnCallbackDraw - draw function to call on page change","\t\t\t */","\t\t\t\"fnUpdate\": function ( oSettings, fnCallbackDraw )","\t\t\t{","\t\t\t\tif ( !oSettings.aanFeatures.p )","\t\t\t\t{","\t\t\t\t\treturn;","\t\t\t\t}","\t\t\t\t","\t\t\t\tvar oClasses = oSettings.oClasses;","\t\t\t\tvar an = oSettings.aanFeatures.p;","\t\t\t\tvar nNode;","\t","\t\t\t\t/* Loop over each instance of the pager */","\t\t\t\tfor ( var i=0, iLen=an.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\tnNode = an[i].firstChild;","\t\t\t\t\tif ( nNode )","\t\t\t\t\t{","\t\t\t\t\t\t/* Previous page */","\t\t\t\t\t\tnNode.className = ( oSettings._iDisplayStart === 0 ) ?","\t\t\t\t\t\t    oClasses.sPagePrevDisabled : oClasses.sPagePrevEnabled;","\t\t\t\t\t\t    ","\t\t\t\t\t\t/* Next page */","\t\t\t\t\t\tnNode = nNode.nextSibling;","\t\t\t\t\t\tnNode.className = ( oSettings.fnDisplayEnd() == oSettings.fnRecordsDisplay() ) ?","\t\t\t\t\t\t    oClasses.sPageNextDisabled : oClasses.sPageNextEnabled;","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t},","\t\t","\t\t","\t\t/*","\t\t * Variable: iFullNumbersShowPages","\t\t * Purpose:  Change the number of pages which can be seen","\t\t * Scope:    jQuery.fn.dataTableExt.oPagination","\t\t */","\t\t\"iFullNumbersShowPages\": 5,","\t\t","\t\t/*","\t\t * Variable: full_numbers","\t\t * Purpose:  Full numbers pagination","\t\t * Scope:    jQuery.fn.dataTableExt.oPagination","\t\t */","\t\t\"full_numbers\": {","\t\t\t/*","\t\t\t * Function: oPagination.full_numbers.fnInit","\t\t\t * Purpose:  Initialise dom elements required for pagination with a list of the pages","\t\t\t * Returns:  -","\t\t\t * Inputs:   object:oSettings - dataTables settings object","\t\t\t *           node:nPaging - the DIV which contains this pagination control","\t\t\t *           function:fnCallbackDraw - draw function which must be called on update","\t\t\t */","\t\t\t\"fnInit\": function ( oSettings, nPaging, fnCallbackDraw )","\t\t\t{","\t\t\t\tvar oLang = oSettings.oLanguage.oPaginate;","\t\t\t\tvar oClasses = oSettings.oClasses;","\t\t\t\tvar fnClickHandler = function ( e ) {","\t\t\t\t\tif ( oSettings.oApi._fnPageChange( oSettings, e.data.action ) )","\t\t\t\t\t{","\t\t\t\t\t\tfnCallbackDraw( oSettings );","\t\t\t\t\t}","\t\t\t\t};","\t","\t\t\t\t$(nPaging).append(","\t\t\t\t\t'&lt;a  tabindex=\"'+oSettings.iTabIndex+'\" class=\"'+oClasses.sPageButton+\" \"+oClasses.sPageFirst+'\"&gt;'+oLang.sFirst+'&lt;/a&gt;'+","\t\t\t\t\t'&lt;a  tabindex=\"'+oSettings.iTabIndex+'\" class=\"'+oClasses.sPageButton+\" \"+oClasses.sPagePrevious+'\"&gt;'+oLang.sPrevious+'&lt;/a&gt;'+","\t\t\t\t\t'&lt;span&gt;&lt;/span&gt;'+","\t\t\t\t\t'&lt;a tabindex=\"'+oSettings.iTabIndex+'\" class=\"'+oClasses.sPageButton+\" \"+oClasses.sPageNext+'\"&gt;'+oLang.sNext+'&lt;/a&gt;'+","\t\t\t\t\t'&lt;a tabindex=\"'+oSettings.iTabIndex+'\" class=\"'+oClasses.sPageButton+\" \"+oClasses.sPageLast+'\"&gt;'+oLang.sLast+'&lt;/a&gt;'","\t\t\t\t);","\t\t\t\tvar els = $('a', nPaging);","\t\t\t\tvar nFirst = els[0],","\t\t\t\t\tnPrev = els[1],","\t\t\t\t\tnNext = els[2],","\t\t\t\t\tnLast = els[3];","\t\t\t\t","\t\t\t\toSettings.oApi._fnBindAction( nFirst, {action: \"first\"},    fnClickHandler );","\t\t\t\toSettings.oApi._fnBindAction( nPrev,  {action: \"previous\"}, fnClickHandler );","\t\t\t\toSettings.oApi._fnBindAction( nNext,  {action: \"next\"},     fnClickHandler );","\t\t\t\toSettings.oApi._fnBindAction( nLast,  {action: \"last\"},     fnClickHandler );","\t\t\t\t","\t\t\t\t/* ID the first elements only */","\t\t\t\tif ( !oSettings.aanFeatures.p )","\t\t\t\t{","\t\t\t\t\tnPaging.id = oSettings.sTableId+'_paginate';","\t\t\t\t\tnFirst.id =oSettings.sTableId+'_first';","\t\t\t\t\tnPrev.id =oSettings.sTableId+'_previous';","\t\t\t\t\tnNext.id =oSettings.sTableId+'_next';","\t\t\t\t\tnLast.id =oSettings.sTableId+'_last';","\t\t\t\t}","\t\t\t},","\t\t\t","\t\t\t/*","\t\t\t * Function: oPagination.full_numbers.fnUpdate","\t\t\t * Purpose:  Update the list of page buttons shows","\t\t\t * Returns:  -","\t\t\t * Inputs:   object:oSettings - dataTables settings object","\t\t\t *           function:fnCallbackDraw - draw function to call on page change","\t\t\t */","\t\t\t\"fnUpdate\": function ( oSettings, fnCallbackDraw )","\t\t\t{","\t\t\t\tif ( !oSettings.aanFeatures.p )","\t\t\t\t{","\t\t\t\t\treturn;","\t\t\t\t}","\t\t\t\t","\t\t\t\tvar iPageCount = DataTable.ext.oPagination.iFullNumbersShowPages;","\t\t\t\tvar iPageCountHalf = Math.floor(iPageCount / 2);","\t\t\t\tvar iPages = Math.ceil((oSettings.fnRecordsDisplay()) / oSettings._iDisplayLength);","\t\t\t\tvar iCurrentPage = Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength) + 1;","\t\t\t\tvar sList = \"\";","\t\t\t\tvar iStartButton, iEndButton, i, iLen;","\t\t\t\tvar oClasses = oSettings.oClasses;","\t\t\t\tvar anButtons, anStatic, nPaginateList, nNode;","\t\t\t\tvar an = oSettings.aanFeatures.p;","\t\t\t\tvar fnBind = function (j) {","\t\t\t\t\toSettings.oApi._fnBindAction( this, {\"page\": j+iStartButton-1}, function(e) {","\t\t\t\t\t\t/* Use the information in the element to jump to the required page */","\t\t\t\t\t\toSettings.oApi._fnPageChange( oSettings, e.data.page );","\t\t\t\t\t\tfnCallbackDraw( oSettings );","\t\t\t\t\t\te.preventDefault();","\t\t\t\t\t} );","\t\t\t\t};","\t\t\t\t","\t\t\t\t/* Pages calculation */","\t\t\t\tif ( oSettings._iDisplayLength === -1 )","\t\t\t\t{","\t\t\t\t\tiStartButton = 1;","\t\t\t\t\tiEndButton = 1;","\t\t\t\t\tiCurrentPage = 1;","\t\t\t\t}","\t\t\t\telse if (iPages &lt; iPageCount)","\t\t\t\t{","\t\t\t\t\tiStartButton = 1;","\t\t\t\t\tiEndButton = iPages;","\t\t\t\t}","\t\t\t\telse if (iCurrentPage &lt;= iPageCountHalf)","\t\t\t\t{","\t\t\t\t\tiStartButton = 1;","\t\t\t\t\tiEndButton = iPageCount;","\t\t\t\t}","\t\t\t\telse if (iCurrentPage &gt;= (iPages - iPageCountHalf))","\t\t\t\t{","\t\t\t\t\tiStartButton = iPages - iPageCount + 1;","\t\t\t\t\tiEndButton = iPages;","\t\t\t\t}","\t\t\t\telse","\t\t\t\t{","\t\t\t\t\tiStartButton = iCurrentPage - Math.ceil(iPageCount / 2) + 1;","\t\t\t\t\tiEndButton = iStartButton + iPageCount - 1;","\t\t\t\t}","\t","\t\t\t\t","\t\t\t\t/* Build the dynamic list */","\t\t\t\tfor ( i=iStartButton ; i&lt;=iEndButton ; i++ )","\t\t\t\t{","\t\t\t\t\tsList += (iCurrentPage !== i) ?","\t\t\t\t\t\t'&lt;a tabindex=\"'+oSettings.iTabIndex+'\" class=\"'+oClasses.sPageButton+'\"&gt;'+oSettings.fnFormatNumber(i)+'&lt;/a&gt;' :","\t\t\t\t\t\t'&lt;a tabindex=\"'+oSettings.iTabIndex+'\" class=\"'+oClasses.sPageButtonActive+'\"&gt;'+oSettings.fnFormatNumber(i)+'&lt;/a&gt;';","\t\t\t\t}","\t\t\t\t","\t\t\t\t/* Loop over each instance of the pager */","\t\t\t\tfor ( i=0, iLen=an.length ; i&lt;iLen ; i++ )","\t\t\t\t{","\t\t\t\t\tnNode = an[i];","\t\t\t\t\tif ( !nNode.hasChildNodes() )","\t\t\t\t\t{","\t\t\t\t\t\tcontinue;","\t\t\t\t\t}","\t\t\t\t\t","\t\t\t\t\t/* Build up the dynamic list first - html and listeners */","\t\t\t\t\t$('span:eq(0)', nNode)","\t\t\t\t\t\t.html( sList )","\t\t\t\t\t\t.children('a').each( fnBind );","\t\t\t\t\t","\t\t\t\t\t/* Update the permanent button's classes */","\t\t\t\t\tanButtons = nNode.getElementsByTagName('a');","\t\t\t\t\tanStatic = [","\t\t\t\t\t\tanButtons[0], anButtons[1], ","\t\t\t\t\t\tanButtons[anButtons.length-2], anButtons[anButtons.length-1]","\t\t\t\t\t];","\t","\t\t\t\t\t$(anStatic).removeClass( oClasses.sPageButton+\" \"+oClasses.sPageButtonActive+\" \"+oClasses.sPageButtonStaticDisabled );","\t\t\t\t\t$([anStatic[0], anStatic[1]]).addClass( ","\t\t\t\t\t\t(iCurrentPage==1) ?","\t\t\t\t\t\t\toClasses.sPageButtonStaticDisabled :","\t\t\t\t\t\t\toClasses.sPageButton","\t\t\t\t\t);","\t\t\t\t\t$([anStatic[2], anStatic[3]]).addClass(","\t\t\t\t\t\t(iPages===0 || iCurrentPage===iPages || oSettings._iDisplayLength===-1) ?","\t\t\t\t\t\t\toClasses.sPageButtonStaticDisabled :","\t\t\t\t\t\t\toClasses.sPageButton","\t\t\t\t\t);","\t\t\t\t}","\t\t\t}","\t\t}","\t} );","\t","\t$.extend( DataTable.ext.oSort, {","\t\t/*","\t\t * text sorting","\t\t */","\t\t\"string-pre\": function ( a )","\t\t{","\t\t\tif ( typeof a != 'string' ) {","\t\t\t\ta = (a !== null &amp;&amp; a.toString) ? a.toString() : '';","\t\t\t}","\t\t\treturn a.toLowerCase();","\t\t},","\t","\t\t\"string-asc\": function ( x, y )","\t\t{","\t\t\treturn ((x &lt; y) ? -1 : ((x &gt; y) ? 1 : 0));","\t\t},","\t\t","\t\t\"string-desc\": function ( x, y )","\t\t{","\t\t\treturn ((x &lt; y) ? 1 : ((x &gt; y) ? -1 : 0));","\t\t},","\t\t","\t\t","\t\t/*","\t\t * html sorting (ignore html tags)","\t\t */","\t\t\"html-pre\": function ( a )","\t\t{","\t\t\treturn a.replace( /&lt;.*?&gt;/g, \"\" ).toLowerCase();","\t\t},","\t\t","\t\t\"html-asc\": function ( x, y )","\t\t{","\t\t\treturn ((x &lt; y) ? -1 : ((x &gt; y) ? 1 : 0));","\t\t},","\t\t","\t\t\"html-desc\": function ( x, y )","\t\t{","\t\t\treturn ((x &lt; y) ? 1 : ((x &gt; y) ? -1 : 0));","\t\t},","\t\t","\t\t","\t\t/*","\t\t * date sorting","\t\t */","\t\t\"date-pre\": function ( a )","\t\t{","\t\t\tvar x = Date.parse( a );","\t\t\t","\t\t\tif ( isNaN(x) || x===\"\" )","\t\t\t{","\t\t\t\tx = Date.parse( \"01/01/1970 00:00:00\" );","\t\t\t}","\t\t\treturn x;","\t\t},","\t","\t\t\"date-asc\": function ( x, y )","\t\t{","\t\t\treturn x - y;","\t\t},","\t\t","\t\t\"date-desc\": function ( x, y )","\t\t{","\t\t\treturn y - x;","\t\t},","\t\t","\t\t","\t\t/*","\t\t * numerical sorting","\t\t */","\t\t\"numeric-pre\": function ( a )","\t\t{","\t\t\treturn (a==\"-\" || a===\"\") ? 0 : a*1;","\t\t},","\t","\t\t\"numeric-asc\": function ( x, y )","\t\t{","\t\t\treturn x - y;","\t\t},","\t\t","\t\t\"numeric-desc\": function ( x, y )","\t\t{","\t\t\treturn y - x;","\t\t}","\t} );","\t","\t","\t$.extend( DataTable.ext.aTypes, [","\t\t/*","\t\t * Function: -","\t\t * Purpose:  Check to see if a string is numeric","\t\t * Returns:  string:'numeric' or null","\t\t * Inputs:   mixed:sText - string to check","\t\t */","\t\tfunction ( sData )","\t\t{","\t\t\t/* Allow zero length strings as a number */","\t\t\tif ( typeof sData === 'number' )","\t\t\t{","\t\t\t\treturn 'numeric';","\t\t\t}","\t\t\telse if ( typeof sData !== 'string' )","\t\t\t{","\t\t\t\treturn null;","\t\t\t}","\t\t\t","\t\t\tvar sValidFirstChars = \"0123456789-\";","\t\t\tvar sValidChars = \"0123456789.\";","\t\t\tvar Char;","\t\t\tvar bDecimal = false;","\t\t\t","\t\t\t/* Check for a valid first char (no period and allow negatives) */","\t\t\tChar = sData.charAt(0); ","\t\t\tif (sValidFirstChars.indexOf(Char) == -1) ","\t\t\t{","\t\t\t\treturn null;","\t\t\t}","\t\t\t","\t\t\t/* Check all the other characters are valid */","\t\t\tfor ( var i=1 ; i&lt;sData.length ; i++ ) ","\t\t\t{","\t\t\t\tChar = sData.charAt(i); ","\t\t\t\tif (sValidChars.indexOf(Char) == -1) ","\t\t\t\t{","\t\t\t\t\treturn null;","\t\t\t\t}","\t\t\t\t","\t\t\t\t/* Only allowed one decimal place... */","\t\t\t\tif ( Char == \".\" )","\t\t\t\t{","\t\t\t\t\tif ( bDecimal )","\t\t\t\t\t{","\t\t\t\t\t\treturn null;","\t\t\t\t\t}","\t\t\t\t\tbDecimal = true;","\t\t\t\t}","\t\t\t}","\t\t\t","\t\t\treturn 'numeric';","\t\t},","\t\t","\t\t/*","\t\t * Function: -","\t\t * Purpose:  Check to see if a string is actually a formatted date","\t\t * Returns:  string:'date' or null","\t\t * Inputs:   string:sText - string to check","\t\t */","\t\tfunction ( sData )","\t\t{","\t\t\tvar iParse = Date.parse(sData);","\t\t\tif ( (iParse !== null &amp;&amp; !isNaN(iParse)) || (typeof sData === 'string' &amp;&amp; sData.length === 0) )","\t\t\t{","\t\t\t\treturn 'date';","\t\t\t}","\t\t\treturn null;","\t\t},","\t\t","\t\t/*","\t\t * Function: -","\t\t * Purpose:  Check to see if a string should be treated as an HTML string","\t\t * Returns:  string:'html' or null","\t\t * Inputs:   string:sText - string to check","\t\t */","\t\tfunction ( sData )","\t\t{","\t\t\tif ( typeof sData === 'string' &amp;&amp; sData.indexOf('&lt;') != -1 &amp;&amp; sData.indexOf('&gt;') != -1 )","\t\t\t{","\t\t\t\treturn 'html';","\t\t\t}","\t\t\treturn null;","\t\t}","\t] );","\t","","\t// jQuery aliases","\t$.fn.DataTable = DataTable;","\t$.fn.dataTable = DataTable;","\t$.fn.dataTableSettings = DataTable.settings;","\t$.fn.dataTableExt = DataTable.ext;","","","\t// Information about events fired by DataTables - for documentation.","\t/**","\t * Draw event, fired whenever the table is redrawn on the page, at the same point as","\t * fnDrawCallback. This may be useful for binding events or performing calculations when","\t * the table is altered at all.","\t *  @name DataTable#draw","\t *  @event","\t *  @param {event} e jQuery event object","\t *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}","\t */","","\t/**","\t * Filter event, fired when the filtering applied to the table (using the build in global","\t * global filter, or column filters) is altered.","\t *  @name DataTable#filter","\t *  @event","\t *  @param {event} e jQuery event object","\t *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}","\t */","","\t/**","\t * Page change event, fired when the paging of the table is altered.","\t *  @name DataTable#page","\t *  @event","\t *  @param {event} e jQuery event object","\t *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}","\t */","","\t/**","\t * Sort event, fired when the sorting applied to the table is altered.","\t *  @name DataTable#sort","\t *  @event","\t *  @param {event} e jQuery event object","\t *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}","\t */","","\t/**","\t * DataTables initialisation complete event, fired when the table is fully drawn,","\t * including Ajax data loaded, if Ajax data is required.","\t *  @name DataTable#init","\t *  @event","\t *  @param {event} e jQuery event object","\t *  @param {object} oSettings DataTables settings object","\t *  @param {object} json The JSON object request from the server - only","\t *    present if client-side Ajax sourced data is used&lt;/li&gt;&lt;/ol&gt;","\t */","","\t/**","\t * State save event, fired when the table has changed state a new state save is required.","\t * This method allows modification of the state saving object prior to actually doing the","\t * save, including addition or other state properties (for plug-ins) or modification","\t * of a DataTables core property.","\t *  @name DataTable#stateSaveParams","\t *  @event","\t *  @param {event} e jQuery event object","\t *  @param {object} oSettings DataTables settings object","\t *  @param {object} json The state information to be saved","\t */","","\t/**","\t * State load event, fired when the table is loading state from the stored data, but","\t * prior to the settings object being modified by the saved state - allowing modification","\t * of the saved state is required or loading of state for a plug-in.","\t *  @name DataTable#stateLoadParams","\t *  @event","\t *  @param {event} e jQuery event object","\t *  @param {object} oSettings DataTables settings object","\t *  @param {object} json The saved state information","\t */","","\t/**","\t * State loaded event, fired when state has been loaded from stored data and the settings","\t * object has been modified by the loaded data.","\t *  @name DataTable#stateLoaded","\t *  @event","\t *  @param {event} e jQuery event object","\t *  @param {object} oSettings DataTables settings object","\t *  @param {object} json The saved state information","\t */","","\t/**","\t * Processing event, fired when DataTables is doing some kind of processing (be it,","\t * sort, filter or anything else). Can be used to indicate to the end user that","\t * there is something happening, or that something has finished.","\t *  @name DataTable#processing","\t *  @event","\t *  @param {event} e jQuery event object","\t *  @param {object} oSettings DataTables settings object","\t *  @param {boolean} bShow Flag for if DataTables is doing processing or not","\t */","","\t/**","\t * Ajax (XHR) event, fired whenever an Ajax request is completed from a request to ","\t * made to the server for new data (note that this trigger is called in fnServerData,","\t * if you override fnServerData and which to use this event, you need to trigger it in","\t * you success function).","\t *  @name DataTable#xhr","\t *  @event","\t *  @param {event} e jQuery event object","\t *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}","\t *  @param {object} json JSON returned from the server","\t */","","\t/**","\t * Destroy event, fired when the DataTable is destroyed by calling fnDestroy or passing","\t * the bDestroy:true parameter in the initialisation object. This can be used to remove","\t * bound events, added DOM nodes, etc.","\t *  @name DataTable#destroy","\t *  @event","\t *  @param {event} e jQuery event object","\t *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}","\t */","}));","","}(window, document));",""];
_$jscoverage['datatable/js/jquery.dataTables.js'][26]++;
(function(window, document, undefined) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][28]++;
  (function(factory) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][29]++;
  "use strict";
  _$jscoverage['datatable/js/jquery.dataTables.js'][32]++;
  if (typeof define === 'function' && define.amd) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][34]++;
    define(['jquery'], factory);
  } else {
    _$jscoverage['datatable/js/jquery.dataTables.js'][39]++;
    if (jQuery && !jQuery.fn.dataTable) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][41]++;
      factory(jQuery);
    }
  }
}(function($) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][45]++;
  "use strict";
  _$jscoverage['datatable/js/jquery.dataTables.js'][78]++;
  var DataTable = function(oInit) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][88]++;
  function _fnAddColumn(oSettings, nTh) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][90]++;
    var oDefaults = DataTable.defaults.columns;
    _$jscoverage['datatable/js/jquery.dataTables.js'][91]++;
    var iCol = oSettings.aoColumns.length;
    _$jscoverage['datatable/js/jquery.dataTables.js'][92]++;
    var oCol = $.extend({}, DataTable.models.oColumn, oDefaults, {
  "sSortingClass": oSettings.oClasses.sSortable, 
  "sSortingClassJUI": oSettings.oClasses.sSortJUI, 
  "nTh": nTh ? nTh : document.createElement('th'), 
  "sTitle": oDefaults.sTitle ? oDefaults.sTitle : nTh ? nTh.innerHTML : '', 
  "aDataSort": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol], 
  "mData": oDefaults.mData ? oDefaults.oDefaults : iCol});
    _$jscoverage['datatable/js/jquery.dataTables.js'][100]++;
    oSettings.aoColumns.push(oCol);
    _$jscoverage['datatable/js/jquery.dataTables.js'][103]++;
    if (oSettings.aoPreSearchCols[iCol] === undefined || oSettings.aoPreSearchCols[iCol] === null) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][105]++;
      oSettings.aoPreSearchCols[iCol] = $.extend({}, DataTable.models.oSearch);
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][109]++;
      var oPre = oSettings.aoPreSearchCols[iCol];
      _$jscoverage['datatable/js/jquery.dataTables.js'][112]++;
      if (oPre.bRegex === undefined) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][114]++;
        oPre.bRegex = true;
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][117]++;
      if (oPre.bSmart === undefined) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][119]++;
        oPre.bSmart = true;
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][122]++;
      if (oPre.bCaseInsensitive === undefined) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][124]++;
        oPre.bCaseInsensitive = true;
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][129]++;
    _fnColumnOptions(oSettings, iCol, null);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][140]++;
  function _fnColumnOptions(oSettings, iCol, oOptions) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][142]++;
    var oCol = oSettings.aoColumns[iCol];
    _$jscoverage['datatable/js/jquery.dataTables.js'][145]++;
    if (oOptions !== undefined && oOptions !== null) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][148]++;
      if (oOptions.mDataProp && !oOptions.mData) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][150]++;
        oOptions.mData = oOptions.mDataProp;
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][153]++;
      if (oOptions.sType !== undefined) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][155]++;
        oCol.sType = oOptions.sType;
        _$jscoverage['datatable/js/jquery.dataTables.js'][156]++;
        oCol._bAutoType = false;
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][159]++;
      $.extend(oCol, oOptions);
      _$jscoverage['datatable/js/jquery.dataTables.js'][160]++;
      _fnMap(oCol, oOptions, "sWidth", "sWidthOrig");
      _$jscoverage['datatable/js/jquery.dataTables.js'][165]++;
      if (oOptions.iDataSort !== undefined) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][167]++;
        oCol.aDataSort = [oOptions.iDataSort];
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][169]++;
      _fnMap(oCol, oOptions, "aDataSort");
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][173]++;
    var mRender = oCol.mRender ? _fnGetObjectDataFn(oCol.mRender) : null;
    _$jscoverage['datatable/js/jquery.dataTables.js'][174]++;
    var mData = _fnGetObjectDataFn(oCol.mData);
    _$jscoverage['datatable/js/jquery.dataTables.js'][176]++;
    oCol.fnGetData = function(oData, sSpecific) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][177]++;
  var innerData = mData(oData, sSpecific);
  _$jscoverage['datatable/js/jquery.dataTables.js'][179]++;
  if (oCol.mRender && (sSpecific && sSpecific !== '')) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][181]++;
    return mRender(innerData, sSpecific, oData);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][183]++;
  return innerData;
};
    _$jscoverage['datatable/js/jquery.dataTables.js'][185]++;
    oCol.fnSetData = _fnSetObjectDataFn(oCol.mData);
    _$jscoverage['datatable/js/jquery.dataTables.js'][188]++;
    if (!oSettings.oFeatures.bSort) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][190]++;
      oCol.bSortable = false;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][194]++;
    if (!oCol.bSortable || ($.inArray('asc', oCol.asSorting) == -1 && $.inArray('desc', oCol.asSorting) == -1)) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][197]++;
      oCol.sSortingClass = oSettings.oClasses.sSortableNone;
      _$jscoverage['datatable/js/jquery.dataTables.js'][198]++;
      oCol.sSortingClassJUI = "";
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][200]++;
      if ($.inArray('asc', oCol.asSorting) == -1 && $.inArray('desc', oCol.asSorting) == -1) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][202]++;
        oCol.sSortingClass = oSettings.oClasses.sSortable;
        _$jscoverage['datatable/js/jquery.dataTables.js'][203]++;
        oCol.sSortingClassJUI = oSettings.oClasses.sSortJUI;
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][205]++;
        if ($.inArray('asc', oCol.asSorting) != -1 && $.inArray('desc', oCol.asSorting) == -1) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][207]++;
          oCol.sSortingClass = oSettings.oClasses.sSortableAsc;
          _$jscoverage['datatable/js/jquery.dataTables.js'][208]++;
          oCol.sSortingClassJUI = oSettings.oClasses.sSortJUIAscAllowed;
        } else {
          _$jscoverage['datatable/js/jquery.dataTables.js'][210]++;
          if ($.inArray('asc', oCol.asSorting) == -1 && $.inArray('desc', oCol.asSorting) != -1) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][212]++;
            oCol.sSortingClass = oSettings.oClasses.sSortableDesc;
            _$jscoverage['datatable/js/jquery.dataTables.js'][213]++;
            oCol.sSortingClassJUI = oSettings.oClasses.sSortJUIDescAllowed;
          }
        }
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][224]++;
  function _fnAdjustColumnSizing(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][227]++;
    if (oSettings.oFeatures.bAutoWidth === false) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][229]++;
      return false;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][232]++;
    _fnCalculateColumnWidths(oSettings);
    _$jscoverage['datatable/js/jquery.dataTables.js'][233]++;
    for (var i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][235]++;
      oSettings.aoColumns[i].nTh.style.width = oSettings.aoColumns[i].sWidth;
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][248]++;
  function _fnVisibleToColumnIndex(oSettings, iMatch) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][250]++;
    var aiVis = _fnGetColumns(oSettings, 'bVisible');
    _$jscoverage['datatable/js/jquery.dataTables.js'][252]++;
    return typeof aiVis[iMatch] === 'number' ? aiVis[iMatch] : null;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][266]++;
  function _fnColumnIndexToVisible(oSettings, iMatch) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][268]++;
    var aiVis = _fnGetColumns(oSettings, 'bVisible');
    _$jscoverage['datatable/js/jquery.dataTables.js'][269]++;
    var iPos = $.inArray(iMatch, aiVis);
    _$jscoverage['datatable/js/jquery.dataTables.js'][271]++;
    return iPos !== -1 ? iPos : null;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][281]++;
  function _fnVisbleColumns(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][283]++;
    return _fnGetColumns(oSettings, 'bVisible').length;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][295]++;
  function _fnGetColumns(oSettings, sParam) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][297]++;
    var a = [];
    _$jscoverage['datatable/js/jquery.dataTables.js'][299]++;
    $.map(oSettings.aoColumns, function(val, i) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][300]++;
  if (val[sParam]) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][301]++;
    a.push(i);
  }
});
    _$jscoverage['datatable/js/jquery.dataTables.js'][305]++;
    return a;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][315]++;
  function _fnDetectType(sData) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][317]++;
    var aTypes = DataTable.ext.aTypes;
    _$jscoverage['datatable/js/jquery.dataTables.js'][318]++;
    var iLen = aTypes.length;
    _$jscoverage['datatable/js/jquery.dataTables.js'][320]++;
    for (var i = 0; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][322]++;
      var sType = aTypes[i](sData);
      _$jscoverage['datatable/js/jquery.dataTables.js'][323]++;
      if (sType !== null) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][325]++;
        return sType;
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][329]++;
    return 'string';
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][339]++;
  function _fnReOrderIndex(oSettings, sColumns) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][341]++;
    var aColumns = sColumns.split(',');
    _$jscoverage['datatable/js/jquery.dataTables.js'][342]++;
    var aiReturn = [];
    _$jscoverage['datatable/js/jquery.dataTables.js'][344]++;
    for (var i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][346]++;
      for (var j = 0; j < iLen; j++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][348]++;
        if (oSettings.aoColumns[i].sName == aColumns[j]) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][350]++;
          aiReturn.push(j);
          _$jscoverage['datatable/js/jquery.dataTables.js'][351]++;
          break;
        }
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][356]++;
    return aiReturn;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][366]++;
  function _fnColumnOrdering(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][368]++;
    var sNames = '';
    _$jscoverage['datatable/js/jquery.dataTables.js'][369]++;
    for (var i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][371]++;
      sNames += oSettings.aoColumns[i].sName + ',';
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][373]++;
    if (sNames.length == iLen) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][375]++;
      return "";
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][377]++;
    return sNames.slice(0, -1);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][392]++;
  function _fnApplyColumnDefs(oSettings, aoColDefs, aoCols, fn) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][394]++;
    var i, iLen, j, jLen, k, kLen;
    _$jscoverage['datatable/js/jquery.dataTables.js'][397]++;
    if (aoColDefs) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][400]++;
      for (i = aoColDefs.length - 1; i >= 0; i--) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][403]++;
        var aTargets = aoColDefs[i].aTargets;
        _$jscoverage['datatable/js/jquery.dataTables.js'][404]++;
        if (!$.isArray(aTargets)) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][406]++;
          _fnLog(oSettings, 1, 'aTargets must be an array of targets, not a ' + (typeof aTargets));
        }
        _$jscoverage['datatable/js/jquery.dataTables.js'][409]++;
        for (j = 0 , jLen = aTargets.length; j < jLen; j++) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][411]++;
          if (typeof aTargets[j] === 'number' && aTargets[j] >= 0) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][414]++;
            while (oSettings.aoColumns.length <= aTargets[j]) {
              _$jscoverage['datatable/js/jquery.dataTables.js'][416]++;
              _fnAddColumn(oSettings);
            }
            _$jscoverage['datatable/js/jquery.dataTables.js'][420]++;
            fn(aTargets[j], aoColDefs[i]);
          } else {
            _$jscoverage['datatable/js/jquery.dataTables.js'][422]++;
            if (typeof aTargets[j] === 'number' && aTargets[j] < 0) {
              _$jscoverage['datatable/js/jquery.dataTables.js'][425]++;
              fn(oSettings.aoColumns.length + aTargets[j], aoColDefs[i]);
            } else {
              _$jscoverage['datatable/js/jquery.dataTables.js'][427]++;
              if (typeof aTargets[j] === 'string') {
                _$jscoverage['datatable/js/jquery.dataTables.js'][430]++;
                for (k = 0 , kLen = oSettings.aoColumns.length; k < kLen; k++) {
                  _$jscoverage['datatable/js/jquery.dataTables.js'][432]++;
                  if (aTargets[j] == "_all" || $(oSettings.aoColumns[k].nTh).hasClass(aTargets[j])) {
                    _$jscoverage['datatable/js/jquery.dataTables.js'][435]++;
                    fn(k, aoColDefs[i]);
                  }
                }
              }
            }
          }
        }
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][444]++;
    if (aoCols) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][446]++;
      for (i = 0 , iLen = aoCols.length; i < iLen; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][448]++;
        fn(i, aoCols[i]);
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][462]++;
  function _fnAddData(oSettings, aDataSupplied) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][464]++;
    var oCol;
    _$jscoverage['datatable/js/jquery.dataTables.js'][467]++;
    var aDataIn = ($.isArray(aDataSupplied)) ? aDataSupplied.slice() : $.extend(true, {}, aDataSupplied);
    _$jscoverage['datatable/js/jquery.dataTables.js'][472]++;
    var iRow = oSettings.aoData.length;
    _$jscoverage['datatable/js/jquery.dataTables.js'][473]++;
    var oData = $.extend(true, {}, DataTable.models.oRow);
    _$jscoverage['datatable/js/jquery.dataTables.js'][474]++;
    oData._aData = aDataIn;
    _$jscoverage['datatable/js/jquery.dataTables.js'][475]++;
    oSettings.aoData.push(oData);
    _$jscoverage['datatable/js/jquery.dataTables.js'][478]++;
    var nTd, sThisType;
    _$jscoverage['datatable/js/jquery.dataTables.js'][479]++;
    for (var i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][481]++;
      oCol = oSettings.aoColumns[i];
      _$jscoverage['datatable/js/jquery.dataTables.js'][484]++;
      if (typeof oCol.fnRender === 'function' && oCol.bUseRendered && oCol.mData !== null) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][486]++;
        _fnSetCellData(oSettings, iRow, i, _fnRender(oSettings, iRow, i));
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][490]++;
        _fnSetCellData(oSettings, iRow, i, _fnGetCellData(oSettings, iRow, i));
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][494]++;
      if (oCol._bAutoType && oCol.sType != 'string') {
        _$jscoverage['datatable/js/jquery.dataTables.js'][497]++;
        var sVarType = _fnGetCellData(oSettings, iRow, i, 'type');
        _$jscoverage['datatable/js/jquery.dataTables.js'][498]++;
        if (sVarType !== null && sVarType !== '') {
          _$jscoverage['datatable/js/jquery.dataTables.js'][500]++;
          sThisType = _fnDetectType(sVarType);
          _$jscoverage['datatable/js/jquery.dataTables.js'][501]++;
          if (oCol.sType === null) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][503]++;
            oCol.sType = sThisType;
          } else {
            _$jscoverage['datatable/js/jquery.dataTables.js'][505]++;
            if (oCol.sType != sThisType && oCol.sType != "html") {
              _$jscoverage['datatable/js/jquery.dataTables.js'][508]++;
              oCol.sType = 'string';
            }
          }
        }
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][515]++;
    oSettings.aiDisplayMaster.push(iRow);
    _$jscoverage['datatable/js/jquery.dataTables.js'][518]++;
    if (!oSettings.oFeatures.bDeferRender) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][520]++;
      _fnCreateTr(oSettings, iRow);
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][523]++;
    return iRow;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][532]++;
  function _fnGatherData(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][534]++;
    var iLoop, i, iLen, j, jLen, jInner, nTds, nTrs, nTd, nTr, aLocalData, iThisIndex, iRow, iRows, iColumn, iColumns, sNodeName, oCol, oData;
    _$jscoverage['datatable/js/jquery.dataTables.js'][544]++;
    if (oSettings.bDeferLoading || oSettings.sAjaxSource === null) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][546]++;
      nTr = oSettings.nTBody.firstChild;
      _$jscoverage['datatable/js/jquery.dataTables.js'][547]++;
      while (nTr) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][549]++;
        if (nTr.nodeName.toUpperCase() == "TR") {
          _$jscoverage['datatable/js/jquery.dataTables.js'][551]++;
          iThisIndex = oSettings.aoData.length;
          _$jscoverage['datatable/js/jquery.dataTables.js'][552]++;
          nTr._DT_RowIndex = iThisIndex;
          _$jscoverage['datatable/js/jquery.dataTables.js'][553]++;
          oSettings.aoData.push($.extend(true, {}, DataTable.models.oRow, {
  "nTr": nTr}));
          _$jscoverage['datatable/js/jquery.dataTables.js'][557]++;
          oSettings.aiDisplayMaster.push(iThisIndex);
          _$jscoverage['datatable/js/jquery.dataTables.js'][558]++;
          nTd = nTr.firstChild;
          _$jscoverage['datatable/js/jquery.dataTables.js'][559]++;
          jInner = 0;
          _$jscoverage['datatable/js/jquery.dataTables.js'][560]++;
          while (nTd) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][562]++;
            sNodeName = nTd.nodeName.toUpperCase();
            _$jscoverage['datatable/js/jquery.dataTables.js'][563]++;
            if (sNodeName == "TD" || sNodeName == "TH") {
              _$jscoverage['datatable/js/jquery.dataTables.js'][565]++;
              _fnSetCellData(oSettings, iThisIndex, jInner, $.trim(nTd.innerHTML));
              _$jscoverage['datatable/js/jquery.dataTables.js'][566]++;
              jInner++;
            }
            _$jscoverage['datatable/js/jquery.dataTables.js'][568]++;
            nTd = nTd.nextSibling;
          }
        }
        _$jscoverage['datatable/js/jquery.dataTables.js'][571]++;
        nTr = nTr.nextSibling;
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][579]++;
    nTrs = _fnGetTrNodes(oSettings);
    _$jscoverage['datatable/js/jquery.dataTables.js'][580]++;
    nTds = [];
    _$jscoverage['datatable/js/jquery.dataTables.js'][581]++;
    for (i = 0 , iLen = nTrs.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][583]++;
      nTd = nTrs[i].firstChild;
      _$jscoverage['datatable/js/jquery.dataTables.js'][584]++;
      while (nTd) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][586]++;
        sNodeName = nTd.nodeName.toUpperCase();
        _$jscoverage['datatable/js/jquery.dataTables.js'][587]++;
        if (sNodeName == "TD" || sNodeName == "TH") {
          _$jscoverage['datatable/js/jquery.dataTables.js'][589]++;
          nTds.push(nTd);
        }
        _$jscoverage['datatable/js/jquery.dataTables.js'][591]++;
        nTd = nTd.nextSibling;
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][596]++;
    for (iColumn = 0 , iColumns = oSettings.aoColumns.length; iColumn < iColumns; iColumn++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][598]++;
      oCol = oSettings.aoColumns[iColumn];
      _$jscoverage['datatable/js/jquery.dataTables.js'][601]++;
      if (oCol.sTitle === null) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][603]++;
        oCol.sTitle = oCol.nTh.innerHTML;
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][606]++;
      var bAutoType = oCol._bAutoType, bRender = typeof oCol.fnRender === 'function', bClass = oCol.sClass !== null, bVisible = oCol.bVisible, nCell, sThisType, sRendered, sValType;
      _$jscoverage['datatable/js/jquery.dataTables.js'][614]++;
      if (bAutoType || bRender || bClass || !bVisible) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][616]++;
        for (iRow = 0 , iRows = oSettings.aoData.length; iRow < iRows; iRow++) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][618]++;
          oData = oSettings.aoData[iRow];
          _$jscoverage['datatable/js/jquery.dataTables.js'][619]++;
          nCell = nTds[(iRow * iColumns) + iColumn];
          _$jscoverage['datatable/js/jquery.dataTables.js'][622]++;
          if (bAutoType && oCol.sType != 'string') {
            _$jscoverage['datatable/js/jquery.dataTables.js'][624]++;
            sValType = _fnGetCellData(oSettings, iRow, iColumn, 'type');
            _$jscoverage['datatable/js/jquery.dataTables.js'][625]++;
            if (sValType !== '') {
              _$jscoverage['datatable/js/jquery.dataTables.js'][627]++;
              sThisType = _fnDetectType(sValType);
              _$jscoverage['datatable/js/jquery.dataTables.js'][628]++;
              if (oCol.sType === null) {
                _$jscoverage['datatable/js/jquery.dataTables.js'][630]++;
                oCol.sType = sThisType;
              } else {
                _$jscoverage['datatable/js/jquery.dataTables.js'][632]++;
                if (oCol.sType != sThisType && oCol.sType != "html") {
                  _$jscoverage['datatable/js/jquery.dataTables.js'][636]++;
                  oCol.sType = 'string';
                }
              }
            }
          }
          _$jscoverage['datatable/js/jquery.dataTables.js'][641]++;
          if (oCol.mRender) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][644]++;
            nCell.innerHTML = _fnGetCellData(oSettings, iRow, iColumn, 'display');
          } else {
            _$jscoverage['datatable/js/jquery.dataTables.js'][646]++;
            if (oCol.mData !== iColumn) {
              _$jscoverage['datatable/js/jquery.dataTables.js'][651]++;
              nCell.innerHTML = _fnGetCellData(oSettings, iRow, iColumn, 'display');
            }
          }
          _$jscoverage['datatable/js/jquery.dataTables.js'][655]++;
          if (bRender) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][657]++;
            sRendered = _fnRender(oSettings, iRow, iColumn);
            _$jscoverage['datatable/js/jquery.dataTables.js'][658]++;
            nCell.innerHTML = sRendered;
            _$jscoverage['datatable/js/jquery.dataTables.js'][659]++;
            if (oCol.bUseRendered) {
              _$jscoverage['datatable/js/jquery.dataTables.js'][662]++;
              _fnSetCellData(oSettings, iRow, iColumn, sRendered);
            }
          }
          _$jscoverage['datatable/js/jquery.dataTables.js'][667]++;
          if (bClass) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][669]++;
            nCell.className += ' ' + oCol.sClass;
          }
          _$jscoverage['datatable/js/jquery.dataTables.js'][673]++;
          if (!bVisible) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][675]++;
            oData._anHidden[iColumn] = nCell;
            _$jscoverage['datatable/js/jquery.dataTables.js'][676]++;
            nCell.parentNode.removeChild(nCell);
          } else {
            _$jscoverage['datatable/js/jquery.dataTables.js'][680]++;
            oData._anHidden[iColumn] = null;
          }
          _$jscoverage['datatable/js/jquery.dataTables.js'][683]++;
          if (oCol.fnCreatedCell) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][685]++;
            oCol.fnCreatedCell.call(oSettings.oInstance, nCell, _fnGetCellData(oSettings, iRow, iColumn, 'display'), oData._aData, iRow, iColumn);
          }
        }
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][694]++;
    if (oSettings.aoRowCreatedCallback.length !== 0) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][696]++;
      for (i = 0 , iLen = oSettings.aoData.length; i < iLen; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][698]++;
        oData = oSettings.aoData[i];
        _$jscoverage['datatable/js/jquery.dataTables.js'][699]++;
        _fnCallbackFire(oSettings, 'aoRowCreatedCallback', null, [oData.nTr, oData._aData, i]);
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][712]++;
  function _fnNodeToDataIndex(oSettings, n) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][714]++;
    return (n._DT_RowIndex !== undefined) ? n._DT_RowIndex : null;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][726]++;
  function _fnNodeToColumnIndex(oSettings, iRow, n) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][728]++;
    var anCells = _fnGetTdNodes(oSettings, iRow);
    _$jscoverage['datatable/js/jquery.dataTables.js'][730]++;
    for (var i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][732]++;
      if (anCells[i] === n) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][734]++;
        return i;
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][737]++;
    return -1;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][750]++;
  function _fnGetRowData(oSettings, iRow, sSpecific, aiColumns) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][752]++;
    var out = [];
    _$jscoverage['datatable/js/jquery.dataTables.js'][753]++;
    for (var i = 0, iLen = aiColumns.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][755]++;
      out.push(_fnGetCellData(oSettings, iRow, aiColumns[i], sSpecific));
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][757]++;
    return out;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][770]++;
  function _fnGetCellData(oSettings, iRow, iCol, sSpecific) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][772]++;
    var sData;
    _$jscoverage['datatable/js/jquery.dataTables.js'][773]++;
    var oCol = oSettings.aoColumns[iCol];
    _$jscoverage['datatable/js/jquery.dataTables.js'][774]++;
    var oData = oSettings.aoData[iRow]._aData;
    _$jscoverage['datatable/js/jquery.dataTables.js'][776]++;
    if ((sData = oCol.fnGetData(oData, sSpecific)) === undefined) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][778]++;
      if (oSettings.iDrawError != oSettings.iDraw && oCol.sDefaultContent === null) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][780]++;
        _fnLog(oSettings, 0, "Requested unknown parameter " + (typeof oCol.mData == 'function' ? '{mData function}' : "'" + oCol.mData + "'") + " from the data source for row " + iRow);
        _$jscoverage['datatable/js/jquery.dataTables.js'][783]++;
        oSettings.iDrawError = oSettings.iDraw;
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][785]++;
      return oCol.sDefaultContent;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][789]++;
    if (sData === null && oCol.sDefaultContent !== null) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][791]++;
      sData = oCol.sDefaultContent;
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][793]++;
      if (typeof sData === 'function') {
        _$jscoverage['datatable/js/jquery.dataTables.js'][796]++;
        return sData();
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][799]++;
    if (sSpecific == 'display' && sData === null) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][801]++;
      return '';
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][803]++;
    return sData;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][815]++;
  function _fnSetCellData(oSettings, iRow, iCol, val) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][817]++;
    var oCol = oSettings.aoColumns[iCol];
    _$jscoverage['datatable/js/jquery.dataTables.js'][818]++;
    var oData = oSettings.aoData[iRow]._aData;
    _$jscoverage['datatable/js/jquery.dataTables.js'][820]++;
    oCol.fnSetData(oData, val);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][825]++;
  var __reArray = /\[.*?\]$/;
  _$jscoverage['datatable/js/jquery.dataTables.js'][834]++;
  function _fnGetObjectDataFn(mSource) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][836]++;
    if (mSource === null) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][839]++;
      return function(data, type) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][840]++;
  return null;
};
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][843]++;
      if (typeof mSource === 'function') {
        _$jscoverage['datatable/js/jquery.dataTables.js'][845]++;
        return function(data, type, extra) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][846]++;
  return mSource(data, type, extra);
};
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][849]++;
        if (typeof mSource === 'string' && (mSource.indexOf('.') !== -1 || mSource.indexOf('[') !== -1)) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][857]++;
          var fetchData = function(data, type, src) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][858]++;
  var a = src.split('.');
  _$jscoverage['datatable/js/jquery.dataTables.js'][859]++;
  var arrayNotation, out, innerSrc;
  _$jscoverage['datatable/js/jquery.dataTables.js'][861]++;
  if (src !== "") {
    _$jscoverage['datatable/js/jquery.dataTables.js'][863]++;
    for (var i = 0, iLen = a.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][866]++;
      arrayNotation = a[i].match(__reArray);
      _$jscoverage['datatable/js/jquery.dataTables.js'][868]++;
      if (arrayNotation) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][869]++;
        a[i] = a[i].replace(__reArray, '');
        _$jscoverage['datatable/js/jquery.dataTables.js'][872]++;
        if (a[i] !== "") {
          _$jscoverage['datatable/js/jquery.dataTables.js'][873]++;
          data = data[a[i]];
        }
        _$jscoverage['datatable/js/jquery.dataTables.js'][875]++;
        out = [];
        _$jscoverage['datatable/js/jquery.dataTables.js'][878]++;
        a.splice(0, i + 1);
        _$jscoverage['datatable/js/jquery.dataTables.js'][879]++;
        innerSrc = a.join('.');
        _$jscoverage['datatable/js/jquery.dataTables.js'][882]++;
        for (var j = 0, jLen = data.length; j < jLen; j++) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][883]++;
          out.push(fetchData(data[j], type, innerSrc));
        }
        _$jscoverage['datatable/js/jquery.dataTables.js'][888]++;
        var join = arrayNotation[0].substring(1, arrayNotation[0].length - 1);
        _$jscoverage['datatable/js/jquery.dataTables.js'][889]++;
        data = (join === "") ? out : out.join(join);
        _$jscoverage['datatable/js/jquery.dataTables.js'][893]++;
        break;
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][896]++;
      if (data === null || data[a[i]] === undefined) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][898]++;
        return undefined;
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][900]++;
      data = data[a[i]];
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][904]++;
  return data;
};
          _$jscoverage['datatable/js/jquery.dataTables.js'][907]++;
          return function(data, type) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][908]++;
  return fetchData(data, type, mSource);
};
        } else {
          _$jscoverage['datatable/js/jquery.dataTables.js'][914]++;
          return function(data, type) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][915]++;
  return data[mSource];
};
        }
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][928]++;
  function _fnSetObjectDataFn(mSource) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][930]++;
    if (mSource === null) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][933]++;
      return function(data, val) {
};
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][935]++;
      if (typeof mSource === 'function') {
        _$jscoverage['datatable/js/jquery.dataTables.js'][937]++;
        return function(data, val) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][938]++;
  mSource(data, 'set', val);
};
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][941]++;
        if (typeof mSource === 'string' && (mSource.indexOf('.') !== -1 || mSource.indexOf('[') !== -1)) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][944]++;
          var setData = function(data, val, src) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][945]++;
  var a = src.split('.'), b;
  _$jscoverage['datatable/js/jquery.dataTables.js'][946]++;
  var arrayNotation, o, innerSrc;
  _$jscoverage['datatable/js/jquery.dataTables.js'][948]++;
  for (var i = 0, iLen = a.length - 1; i < iLen; i++) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][951]++;
    arrayNotation = a[i].match(__reArray);
    _$jscoverage['datatable/js/jquery.dataTables.js'][953]++;
    if (arrayNotation) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][955]++;
      a[i] = a[i].replace(__reArray, '');
      _$jscoverage['datatable/js/jquery.dataTables.js'][956]++;
      data[a[i]] = [];
      _$jscoverage['datatable/js/jquery.dataTables.js'][959]++;
      b = a.slice();
      _$jscoverage['datatable/js/jquery.dataTables.js'][960]++;
      b.splice(0, i + 1);
      _$jscoverage['datatable/js/jquery.dataTables.js'][961]++;
      innerSrc = b.join('.');
      _$jscoverage['datatable/js/jquery.dataTables.js'][964]++;
      for (var j = 0, jLen = val.length; j < jLen; j++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][966]++;
        o = {};
        _$jscoverage['datatable/js/jquery.dataTables.js'][967]++;
        setData(o, val[j], innerSrc);
        _$jscoverage['datatable/js/jquery.dataTables.js'][968]++;
        data[a[i]].push(o);
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][973]++;
      return;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][978]++;
    if (data[a[i]] === null || data[a[i]] === undefined) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][980]++;
      data[a[i]] = {};
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][982]++;
    data = data[a[i]];
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][987]++;
  data[a[a.length - 1].replace(__reArray, '')] = val;
};
          _$jscoverage['datatable/js/jquery.dataTables.js'][990]++;
          return function(data, val) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][991]++;
  return setData(data, val, mSource);
};
        } else {
          _$jscoverage['datatable/js/jquery.dataTables.js'][997]++;
          return function(data, val) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][998]++;
  data[mSource] = val;
};
        }
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][1010]++;
  function _fnGetDataMaster(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][1012]++;
    var aData = [];
    _$jscoverage['datatable/js/jquery.dataTables.js'][1013]++;
    var iLen = oSettings.aoData.length;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1014]++;
    for (var i = 0; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1016]++;
      aData.push(oSettings.aoData[i]._aData);
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][1018]++;
    return aData;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][1027]++;
  function _fnClearTable(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][1029]++;
    oSettings.aoData.splice(0, oSettings.aoData.length);
    _$jscoverage['datatable/js/jquery.dataTables.js'][1030]++;
    oSettings.aiDisplayMaster.splice(0, oSettings.aiDisplayMaster.length);
    _$jscoverage['datatable/js/jquery.dataTables.js'][1031]++;
    oSettings.aiDisplay.splice(0, oSettings.aiDisplay.length);
    _$jscoverage['datatable/js/jquery.dataTables.js'][1032]++;
    _fnCalculateEnd(oSettings);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][1043]++;
  function _fnDeleteIndex(a, iTarget) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][1045]++;
    var iTargetIndex = -1;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1047]++;
    for (var i = 0, iLen = a.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1049]++;
      if (a[i] == iTarget) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1051]++;
        iTargetIndex = i;
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1053]++;
        if (a[i] > iTarget) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1055]++;
          a[i]--;
        }
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][1059]++;
    if (iTargetIndex != -1) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1061]++;
      a.splice(iTargetIndex, 1);
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][1075]++;
  function _fnRender(oSettings, iRow, iCol) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][1077]++;
    var oCol = oSettings.aoColumns[iCol];
    _$jscoverage['datatable/js/jquery.dataTables.js'][1079]++;
    return oCol.fnRender({
  "iDataRow": iRow, 
  "iDataColumn": iCol, 
  "oSettings": oSettings, 
  "aData": oSettings.aoData[iRow]._aData, 
  "mDataProp": oCol.mData}, _fnGetCellData(oSettings, iRow, iCol, 'display'));
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][1093]++;
  function _fnCreateTr(oSettings, iRow) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][1095]++;
    var oData = oSettings.aoData[iRow];
    _$jscoverage['datatable/js/jquery.dataTables.js'][1096]++;
    var nTd;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1098]++;
    if (oData.nTr === null) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1100]++;
      oData.nTr = document.createElement('tr');
      _$jscoverage['datatable/js/jquery.dataTables.js'][1105]++;
      oData.nTr._DT_RowIndex = iRow;
      _$jscoverage['datatable/js/jquery.dataTables.js'][1108]++;
      if (oData._aData.DT_RowId) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1110]++;
        oData.nTr.id = oData._aData.DT_RowId;
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][1113]++;
      if (oData._aData.DT_RowClass) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1115]++;
        oData.nTr.className = oData._aData.DT_RowClass;
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][1119]++;
      for (var i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1121]++;
        var oCol = oSettings.aoColumns[i];
        _$jscoverage['datatable/js/jquery.dataTables.js'][1122]++;
        nTd = document.createElement(oCol.sCellType);
        _$jscoverage['datatable/js/jquery.dataTables.js'][1127]++;
        nTd.innerHTML = (typeof oCol.fnRender === 'function' && (!oCol.bUseRendered || oCol.mData === null)) ? _fnRender(oSettings, iRow, i) : _fnGetCellData(oSettings, iRow, i, 'display');
        _$jscoverage['datatable/js/jquery.dataTables.js'][1132]++;
        if (oCol.sClass !== null) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1134]++;
          nTd.className = oCol.sClass;
        }
        _$jscoverage['datatable/js/jquery.dataTables.js'][1137]++;
        if (oCol.bVisible) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1139]++;
          oData.nTr.appendChild(nTd);
          _$jscoverage['datatable/js/jquery.dataTables.js'][1140]++;
          oData._anHidden[i] = null;
        } else {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1144]++;
          oData._anHidden[i] = nTd;
        }
        _$jscoverage['datatable/js/jquery.dataTables.js'][1147]++;
        if (oCol.fnCreatedCell) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1149]++;
          oCol.fnCreatedCell.call(oSettings.oInstance, nTd, _fnGetCellData(oSettings, iRow, i, 'display'), oData._aData, iRow, i);
        }
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][1155]++;
      _fnCallbackFire(oSettings, 'aoRowCreatedCallback', null, [oData.nTr, oData._aData, iRow]);
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][1165]++;
  function _fnBuildHead(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][1167]++;
    var i, nTh, iLen, j, jLen;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1168]++;
    var iThs = $('th, td', oSettings.nTHead).length;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1169]++;
    var iCorrector = 0;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1170]++;
    var jqChildren;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1173]++;
    if (iThs !== 0) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1176]++;
      for (i = 0 , iLen = oSettings.aoColumns.length; i < iLen; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1178]++;
        nTh = oSettings.aoColumns[i].nTh;
        _$jscoverage['datatable/js/jquery.dataTables.js'][1179]++;
        nTh.setAttribute('role', 'columnheader');
        _$jscoverage['datatable/js/jquery.dataTables.js'][1180]++;
        if (oSettings.aoColumns[i].bSortable) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1182]++;
          nTh.setAttribute('tabindex', oSettings.iTabIndex);
          _$jscoverage['datatable/js/jquery.dataTables.js'][1183]++;
          nTh.setAttribute('aria-controls', oSettings.sTableId);
        }
        _$jscoverage['datatable/js/jquery.dataTables.js'][1186]++;
        if (oSettings.aoColumns[i].sClass !== null) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1188]++;
          $(nTh).addClass(oSettings.aoColumns[i].sClass);
        }
        _$jscoverage['datatable/js/jquery.dataTables.js'][1192]++;
        if (oSettings.aoColumns[i].sTitle != nTh.innerHTML) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1194]++;
          nTh.innerHTML = oSettings.aoColumns[i].sTitle;
        }
      }
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1201]++;
      var nTr = document.createElement("tr");
      _$jscoverage['datatable/js/jquery.dataTables.js'][1203]++;
      for (i = 0 , iLen = oSettings.aoColumns.length; i < iLen; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1205]++;
        nTh = oSettings.aoColumns[i].nTh;
        _$jscoverage['datatable/js/jquery.dataTables.js'][1206]++;
        nTh.innerHTML = oSettings.aoColumns[i].sTitle;
        _$jscoverage['datatable/js/jquery.dataTables.js'][1207]++;
        nTh.setAttribute('tabindex', '0');
        _$jscoverage['datatable/js/jquery.dataTables.js'][1209]++;
        if (oSettings.aoColumns[i].sClass !== null) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1211]++;
          $(nTh).addClass(oSettings.aoColumns[i].sClass);
        }
        _$jscoverage['datatable/js/jquery.dataTables.js'][1214]++;
        nTr.appendChild(nTh);
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][1216]++;
      $(oSettings.nTHead).html('')[0].appendChild(nTr);
      _$jscoverage['datatable/js/jquery.dataTables.js'][1217]++;
      _fnDetectHeader(oSettings.aoHeader, oSettings.nTHead);
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][1221]++;
    $(oSettings.nTHead).children('tr').attr('role', 'row');
    _$jscoverage['datatable/js/jquery.dataTables.js'][1224]++;
    if (oSettings.bJUI) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1226]++;
      for (i = 0 , iLen = oSettings.aoColumns.length; i < iLen; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1228]++;
        nTh = oSettings.aoColumns[i].nTh;
        _$jscoverage['datatable/js/jquery.dataTables.js'][1230]++;
        var nDiv = document.createElement('div');
        _$jscoverage['datatable/js/jquery.dataTables.js'][1231]++;
        nDiv.className = oSettings.oClasses.sSortJUIWrapper;
        _$jscoverage['datatable/js/jquery.dataTables.js'][1232]++;
        $(nTh).contents().appendTo(nDiv);
        _$jscoverage['datatable/js/jquery.dataTables.js'][1234]++;
        var nSpan = document.createElement('span');
        _$jscoverage['datatable/js/jquery.dataTables.js'][1235]++;
        nSpan.className = oSettings.oClasses.sSortIcon;
        _$jscoverage['datatable/js/jquery.dataTables.js'][1236]++;
        nDiv.appendChild(nSpan);
        _$jscoverage['datatable/js/jquery.dataTables.js'][1237]++;
        nTh.appendChild(nDiv);
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][1241]++;
    if (oSettings.oFeatures.bSort) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1243]++;
      for (i = 0; i < oSettings.aoColumns.length; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1245]++;
        if (oSettings.aoColumns[i].bSortable !== false) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1247]++;
          _fnSortAttachListener(oSettings, oSettings.aoColumns[i].nTh, i);
        } else {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1251]++;
          $(oSettings.aoColumns[i].nTh).addClass(oSettings.oClasses.sSortableNone);
        }
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][1257]++;
    if (oSettings.oClasses.sFooterTH !== "") {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1259]++;
      $(oSettings.nTFoot).children('tr').children('th').addClass(oSettings.oClasses.sFooterTH);
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][1263]++;
    if (oSettings.nTFoot !== null) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1265]++;
      var anCells = _fnGetUniqueThs(oSettings, null, oSettings.aoFooter);
      _$jscoverage['datatable/js/jquery.dataTables.js'][1266]++;
      for (i = 0 , iLen = oSettings.aoColumns.length; i < iLen; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1268]++;
        if (anCells[i]) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1270]++;
          oSettings.aoColumns[i].nTf = anCells[i];
          _$jscoverage['datatable/js/jquery.dataTables.js'][1271]++;
          if (oSettings.aoColumns[i].sClass) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][1273]++;
            $(anCells[i]).addClass(oSettings.aoColumns[i].sClass);
          }
        }
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][1294]++;
  function _fnDrawHead(oSettings, aoSource, bIncludeHidden) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][1296]++;
    var i, iLen, j, jLen, k, kLen, n, nLocalTr;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1297]++;
    var aoLocal = [];
    _$jscoverage['datatable/js/jquery.dataTables.js'][1298]++;
    var aApplied = [];
    _$jscoverage['datatable/js/jquery.dataTables.js'][1299]++;
    var iColumns = oSettings.aoColumns.length;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1300]++;
    var iRowspan, iColspan;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1302]++;
    if (bIncludeHidden === undefined) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1304]++;
      bIncludeHidden = false;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][1308]++;
    for (i = 0 , iLen = aoSource.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1310]++;
      aoLocal[i] = aoSource[i].slice();
      _$jscoverage['datatable/js/jquery.dataTables.js'][1311]++;
      aoLocal[i].nTr = aoSource[i].nTr;
      _$jscoverage['datatable/js/jquery.dataTables.js'][1314]++;
      for (j = iColumns - 1; j >= 0; j--) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1316]++;
        if (!oSettings.aoColumns[j].bVisible && !bIncludeHidden) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1318]++;
          aoLocal[i].splice(j, 1);
        }
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][1323]++;
      aApplied.push([]);
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][1326]++;
    for (i = 0 , iLen = aoLocal.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1328]++;
      nLocalTr = aoLocal[i].nTr;
      _$jscoverage['datatable/js/jquery.dataTables.js'][1331]++;
      if (nLocalTr) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1333]++;
        while ((n = nLocalTr.firstChild)) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1335]++;
          nLocalTr.removeChild(n);
        }
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][1339]++;
      for (j = 0 , jLen = aoLocal[i].length; j < jLen; j++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1341]++;
        iRowspan = 1;
        _$jscoverage['datatable/js/jquery.dataTables.js'][1342]++;
        iColspan = 1;
        _$jscoverage['datatable/js/jquery.dataTables.js'][1347]++;
        if (aApplied[i][j] === undefined) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1349]++;
          nLocalTr.appendChild(aoLocal[i][j].cell);
          _$jscoverage['datatable/js/jquery.dataTables.js'][1350]++;
          aApplied[i][j] = 1;
          _$jscoverage['datatable/js/jquery.dataTables.js'][1353]++;
          while (aoLocal[i + iRowspan] !== undefined && aoLocal[i][j].cell == aoLocal[i + iRowspan][j].cell) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][1356]++;
            aApplied[i + iRowspan][j] = 1;
            _$jscoverage['datatable/js/jquery.dataTables.js'][1357]++;
            iRowspan++;
          }
          _$jscoverage['datatable/js/jquery.dataTables.js'][1361]++;
          while (aoLocal[i][j + iColspan] !== undefined && aoLocal[i][j].cell == aoLocal[i][j + iColspan].cell) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][1365]++;
            for (k = 0; k < iRowspan; k++) {
              _$jscoverage['datatable/js/jquery.dataTables.js'][1367]++;
              aApplied[i + k][j + iColspan] = 1;
            }
            _$jscoverage['datatable/js/jquery.dataTables.js'][1369]++;
            iColspan++;
          }
          _$jscoverage['datatable/js/jquery.dataTables.js'][1373]++;
          aoLocal[i][j].cell.rowSpan = iRowspan;
          _$jscoverage['datatable/js/jquery.dataTables.js'][1374]++;
          aoLocal[i][j].cell.colSpan = iColspan;
        }
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][1386]++;
  function _fnDraw(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][1389]++;
    var aPreDraw = _fnCallbackFire(oSettings, 'aoPreDrawCallback', 'preDraw', [oSettings]);
    _$jscoverage['datatable/js/jquery.dataTables.js'][1390]++;
    if ($.inArray(false, aPreDraw) !== -1) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1392]++;
      _fnProcessingDisplay(oSettings, false);
      _$jscoverage['datatable/js/jquery.dataTables.js'][1393]++;
      return;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][1396]++;
    var i, iLen, n;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1397]++;
    var anRows = [];
    _$jscoverage['datatable/js/jquery.dataTables.js'][1398]++;
    var iRowCount = 0;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1399]++;
    var iStripes = oSettings.asStripeClasses.length;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1400]++;
    var iOpenRows = oSettings.aoOpenRows.length;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1402]++;
    oSettings.bDrawing = true;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1405]++;
    if (oSettings.iInitDisplayStart !== undefined && oSettings.iInitDisplayStart != -1) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1407]++;
      if (oSettings.oFeatures.bServerSide) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1409]++;
        oSettings._iDisplayStart = oSettings.iInitDisplayStart;
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1413]++;
        oSettings._iDisplayStart = (oSettings.iInitDisplayStart >= oSettings.fnRecordsDisplay()) ? 0 : oSettings.iInitDisplayStart;
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][1416]++;
      oSettings.iInitDisplayStart = -1;
      _$jscoverage['datatable/js/jquery.dataTables.js'][1417]++;
      _fnCalculateEnd(oSettings);
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][1421]++;
    if (oSettings.bDeferLoading) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1423]++;
      oSettings.bDeferLoading = false;
      _$jscoverage['datatable/js/jquery.dataTables.js'][1424]++;
      oSettings.iDraw++;
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1426]++;
      if (!oSettings.oFeatures.bServerSide) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1428]++;
        oSettings.iDraw++;
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1430]++;
        if (!oSettings.bDestroying && !_fnAjaxUpdate(oSettings)) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1432]++;
          return;
        }
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][1435]++;
    if (oSettings.aiDisplay.length !== 0) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1437]++;
      var iStart = oSettings._iDisplayStart;
      _$jscoverage['datatable/js/jquery.dataTables.js'][1438]++;
      var iEnd = oSettings._iDisplayEnd;
      _$jscoverage['datatable/js/jquery.dataTables.js'][1440]++;
      if (oSettings.oFeatures.bServerSide) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1442]++;
        iStart = 0;
        _$jscoverage['datatable/js/jquery.dataTables.js'][1443]++;
        iEnd = oSettings.aoData.length;
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][1446]++;
      for (var j = iStart; j < iEnd; j++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1448]++;
        var aoData = oSettings.aoData[oSettings.aiDisplay[j]];
        _$jscoverage['datatable/js/jquery.dataTables.js'][1449]++;
        if (aoData.nTr === null) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1451]++;
          _fnCreateTr(oSettings, oSettings.aiDisplay[j]);
        }
        _$jscoverage['datatable/js/jquery.dataTables.js'][1454]++;
        var nRow = aoData.nTr;
        _$jscoverage['datatable/js/jquery.dataTables.js'][1457]++;
        if (iStripes !== 0) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1459]++;
          var sStripe = oSettings.asStripeClasses[iRowCount % iStripes];
          _$jscoverage['datatable/js/jquery.dataTables.js'][1460]++;
          if (aoData._sRowStripe != sStripe) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][1462]++;
            $(nRow).removeClass(aoData._sRowStripe).addClass(sStripe);
            _$jscoverage['datatable/js/jquery.dataTables.js'][1463]++;
            aoData._sRowStripe = sStripe;
          }
        }
        _$jscoverage['datatable/js/jquery.dataTables.js'][1468]++;
        _fnCallbackFire(oSettings, 'aoRowCallback', null, [nRow, oSettings.aoData[oSettings.aiDisplay[j]]._aData, iRowCount, j]);
        _$jscoverage['datatable/js/jquery.dataTables.js'][1471]++;
        anRows.push(nRow);
        _$jscoverage['datatable/js/jquery.dataTables.js'][1472]++;
        iRowCount++;
        _$jscoverage['datatable/js/jquery.dataTables.js'][1475]++;
        if (iOpenRows !== 0) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1477]++;
          for (var k = 0; k < iOpenRows; k++) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][1479]++;
            if (nRow == oSettings.aoOpenRows[k].nParent) {
              _$jscoverage['datatable/js/jquery.dataTables.js'][1481]++;
              anRows.push(oSettings.aoOpenRows[k].nTr);
              _$jscoverage['datatable/js/jquery.dataTables.js'][1482]++;
              break;
            }
          }
        }
      }
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1491]++;
      anRows[0] = document.createElement('tr');
      _$jscoverage['datatable/js/jquery.dataTables.js'][1493]++;
      if (oSettings.asStripeClasses[0]) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1495]++;
        anRows[0].className = oSettings.asStripeClasses[0];
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][1498]++;
      var oLang = oSettings.oLanguage;
      _$jscoverage['datatable/js/jquery.dataTables.js'][1499]++;
      var sZero = oLang.sZeroRecords;
      _$jscoverage['datatable/js/jquery.dataTables.js'][1500]++;
      if (oSettings.iDraw == 1 && oSettings.sAjaxSource !== null && !oSettings.oFeatures.bServerSide) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1502]++;
        sZero = oLang.sLoadingRecords;
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1504]++;
        if (oLang.sEmptyTable && oSettings.fnRecordsTotal() === 0) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1506]++;
          sZero = oLang.sEmptyTable;
        }
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][1509]++;
      var nTd = document.createElement('td');
      _$jscoverage['datatable/js/jquery.dataTables.js'][1510]++;
      nTd.setAttribute('valign', "top");
      _$jscoverage['datatable/js/jquery.dataTables.js'][1511]++;
      nTd.colSpan = _fnVisbleColumns(oSettings);
      _$jscoverage['datatable/js/jquery.dataTables.js'][1512]++;
      nTd.className = oSettings.oClasses.sRowEmpty;
      _$jscoverage['datatable/js/jquery.dataTables.js'][1513]++;
      nTd.innerHTML = _fnInfoMacros(oSettings, sZero);
      _$jscoverage['datatable/js/jquery.dataTables.js'][1515]++;
      anRows[iRowCount].appendChild(nTd);
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][1519]++;
    _fnCallbackFire(oSettings, 'aoHeaderCallback', 'header', [$(oSettings.nTHead).children('tr')[0], _fnGetDataMaster(oSettings), oSettings._iDisplayStart, oSettings.fnDisplayEnd(), oSettings.aiDisplay]);
    _$jscoverage['datatable/js/jquery.dataTables.js'][1522]++;
    _fnCallbackFire(oSettings, 'aoFooterCallback', 'footer', [$(oSettings.nTFoot).children('tr')[0], _fnGetDataMaster(oSettings), oSettings._iDisplayStart, oSettings.fnDisplayEnd(), oSettings.aiDisplay]);
    _$jscoverage['datatable/js/jquery.dataTables.js'][1530]++;
    var nAddFrag = document.createDocumentFragment(), nRemoveFrag = document.createDocumentFragment(), nBodyPar, nTrs;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1535]++;
    if (oSettings.nTBody) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1537]++;
      nBodyPar = oSettings.nTBody.parentNode;
      _$jscoverage['datatable/js/jquery.dataTables.js'][1538]++;
      nRemoveFrag.appendChild(oSettings.nTBody);
      _$jscoverage['datatable/js/jquery.dataTables.js'][1543]++;
      if (!oSettings.oScroll.bInfinite || !oSettings._bInitComplete || oSettings.bSorted || oSettings.bFiltered) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1546]++;
        while ((n = oSettings.nTBody.firstChild)) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1548]++;
          oSettings.nTBody.removeChild(n);
        }
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][1553]++;
      for (i = 0 , iLen = anRows.length; i < iLen; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1555]++;
        nAddFrag.appendChild(anRows[i]);
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][1558]++;
      oSettings.nTBody.appendChild(nAddFrag);
      _$jscoverage['datatable/js/jquery.dataTables.js'][1559]++;
      if (nBodyPar !== null) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1561]++;
        nBodyPar.appendChild(oSettings.nTBody);
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][1566]++;
    _fnCallbackFire(oSettings, 'aoDrawCallback', 'draw', [oSettings]);
    _$jscoverage['datatable/js/jquery.dataTables.js'][1569]++;
    oSettings.bSorted = false;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1570]++;
    oSettings.bFiltered = false;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1571]++;
    oSettings.bDrawing = false;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1573]++;
    if (oSettings.oFeatures.bServerSide) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1575]++;
      _fnProcessingDisplay(oSettings, false);
      _$jscoverage['datatable/js/jquery.dataTables.js'][1576]++;
      if (!oSettings._bInitComplete) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1578]++;
        _fnInitComplete(oSettings);
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][1589]++;
  function _fnReDraw(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][1591]++;
    if (oSettings.oFeatures.bSort) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1594]++;
      _fnSort(oSettings, oSettings.oPreviousSearch);
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1596]++;
      if (oSettings.oFeatures.bFilter) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1599]++;
        _fnFilterComplete(oSettings, oSettings.oPreviousSearch);
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1603]++;
        _fnCalculateEnd(oSettings);
        _$jscoverage['datatable/js/jquery.dataTables.js'][1604]++;
        _fnDraw(oSettings);
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][1614]++;
  function _fnAddOptionsHtml(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][1620]++;
    var nHolding = $('<div></div>')[0];
    _$jscoverage['datatable/js/jquery.dataTables.js'][1621]++;
    oSettings.nTable.parentNode.insertBefore(nHolding, oSettings.nTable);
    _$jscoverage['datatable/js/jquery.dataTables.js'][1626]++;
    oSettings.nTableWrapper = $('<div id="' + oSettings.sTableId + '_wrapper" class="' + oSettings.oClasses.sWrapper + '" role="grid"></div>')[0];
    _$jscoverage['datatable/js/jquery.dataTables.js'][1627]++;
    oSettings.nTableReinsertBefore = oSettings.nTable.nextSibling;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1630]++;
    var nInsertNode = oSettings.nTableWrapper;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1633]++;
    var aDom = oSettings.sDom.split('');
    _$jscoverage['datatable/js/jquery.dataTables.js'][1634]++;
    var nTmp, iPushFeature, cOption, nNewNode, cNext, sAttr, j;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1635]++;
    for (var i = 0; i < aDom.length; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1637]++;
      iPushFeature = 0;
      _$jscoverage['datatable/js/jquery.dataTables.js'][1638]++;
      cOption = aDom[i];
      _$jscoverage['datatable/js/jquery.dataTables.js'][1640]++;
      if (cOption == '<') {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1643]++;
        nNewNode = $('<div></div>')[0];
        _$jscoverage['datatable/js/jquery.dataTables.js'][1646]++;
        cNext = aDom[i + 1];
        _$jscoverage['datatable/js/jquery.dataTables.js'][1647]++;
        if (cNext == "'" || cNext == '"') {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1649]++;
          sAttr = "";
          _$jscoverage['datatable/js/jquery.dataTables.js'][1650]++;
          j = 2;
          _$jscoverage['datatable/js/jquery.dataTables.js'][1651]++;
          while (aDom[i + j] != cNext) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][1653]++;
            sAttr += aDom[i + j];
            _$jscoverage['datatable/js/jquery.dataTables.js'][1654]++;
            j++;
          }
          _$jscoverage['datatable/js/jquery.dataTables.js'][1658]++;
          if (sAttr == "H") {
            _$jscoverage['datatable/js/jquery.dataTables.js'][1660]++;
            sAttr = oSettings.oClasses.sJUIHeader;
          } else {
            _$jscoverage['datatable/js/jquery.dataTables.js'][1662]++;
            if (sAttr == "F") {
              _$jscoverage['datatable/js/jquery.dataTables.js'][1664]++;
              sAttr = oSettings.oClasses.sJUIFooter;
            }
          }
          _$jscoverage['datatable/js/jquery.dataTables.js'][1670]++;
          if (sAttr.indexOf('.') != -1) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][1672]++;
            var aSplit = sAttr.split('.');
            _$jscoverage['datatable/js/jquery.dataTables.js'][1673]++;
            nNewNode.id = aSplit[0].substr(1, aSplit[0].length - 1);
            _$jscoverage['datatable/js/jquery.dataTables.js'][1674]++;
            nNewNode.className = aSplit[1];
          } else {
            _$jscoverage['datatable/js/jquery.dataTables.js'][1676]++;
            if (sAttr.charAt(0) == "#") {
              _$jscoverage['datatable/js/jquery.dataTables.js'][1678]++;
              nNewNode.id = sAttr.substr(1, sAttr.length - 1);
            } else {
              _$jscoverage['datatable/js/jquery.dataTables.js'][1682]++;
              nNewNode.className = sAttr;
            }
          }
          _$jscoverage['datatable/js/jquery.dataTables.js'][1685]++;
          i += j;
        }
        _$jscoverage['datatable/js/jquery.dataTables.js'][1688]++;
        nInsertNode.appendChild(nNewNode);
        _$jscoverage['datatable/js/jquery.dataTables.js'][1689]++;
        nInsertNode = nNewNode;
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1691]++;
        if (cOption == '>') {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1694]++;
          nInsertNode = nInsertNode.parentNode;
        } else {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1696]++;
          if (cOption == 'l' && oSettings.oFeatures.bPaginate && oSettings.oFeatures.bLengthChange) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][1699]++;
            nTmp = _fnFeatureHtmlLength(oSettings);
            _$jscoverage['datatable/js/jquery.dataTables.js'][1700]++;
            iPushFeature = 1;
          } else {
            _$jscoverage['datatable/js/jquery.dataTables.js'][1702]++;
            if (cOption == 'f' && oSettings.oFeatures.bFilter) {
              _$jscoverage['datatable/js/jquery.dataTables.js'][1705]++;
              nTmp = _fnFeatureHtmlFilter(oSettings);
              _$jscoverage['datatable/js/jquery.dataTables.js'][1706]++;
              iPushFeature = 1;
            } else {
              _$jscoverage['datatable/js/jquery.dataTables.js'][1708]++;
              if (cOption == 'r' && oSettings.oFeatures.bProcessing) {
                _$jscoverage['datatable/js/jquery.dataTables.js'][1711]++;
                nTmp = _fnFeatureHtmlProcessing(oSettings);
                _$jscoverage['datatable/js/jquery.dataTables.js'][1712]++;
                iPushFeature = 1;
              } else {
                _$jscoverage['datatable/js/jquery.dataTables.js'][1714]++;
                if (cOption == 't') {
                  _$jscoverage['datatable/js/jquery.dataTables.js'][1717]++;
                  nTmp = _fnFeatureHtmlTable(oSettings);
                  _$jscoverage['datatable/js/jquery.dataTables.js'][1718]++;
                  iPushFeature = 1;
                } else {
                  _$jscoverage['datatable/js/jquery.dataTables.js'][1720]++;
                  if (cOption == 'i' && oSettings.oFeatures.bInfo) {
                    _$jscoverage['datatable/js/jquery.dataTables.js'][1723]++;
                    nTmp = _fnFeatureHtmlInfo(oSettings);
                    _$jscoverage['datatable/js/jquery.dataTables.js'][1724]++;
                    iPushFeature = 1;
                  } else {
                    _$jscoverage['datatable/js/jquery.dataTables.js'][1726]++;
                    if (cOption == 'p' && oSettings.oFeatures.bPaginate) {
                      _$jscoverage['datatable/js/jquery.dataTables.js'][1729]++;
                      nTmp = _fnFeatureHtmlPaginate(oSettings);
                      _$jscoverage['datatable/js/jquery.dataTables.js'][1730]++;
                      iPushFeature = 1;
                    } else {
                      _$jscoverage['datatable/js/jquery.dataTables.js'][1732]++;
                      if (DataTable.ext.aoFeatures.length !== 0) {
                        _$jscoverage['datatable/js/jquery.dataTables.js'][1735]++;
                        var aoFeatures = DataTable.ext.aoFeatures;
                        _$jscoverage['datatable/js/jquery.dataTables.js'][1736]++;
                        for (var k = 0, kLen = aoFeatures.length; k < kLen; k++) {
                          _$jscoverage['datatable/js/jquery.dataTables.js'][1738]++;
                          if (cOption == aoFeatures[k].cFeature) {
                            _$jscoverage['datatable/js/jquery.dataTables.js'][1740]++;
                            nTmp = aoFeatures[k].fnInit(oSettings);
                            _$jscoverage['datatable/js/jquery.dataTables.js'][1741]++;
                            if (nTmp) {
                              _$jscoverage['datatable/js/jquery.dataTables.js'][1743]++;
                              iPushFeature = 1;
                            }
                            _$jscoverage['datatable/js/jquery.dataTables.js'][1745]++;
                            break;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][1751]++;
      if (iPushFeature == 1 && nTmp !== null) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1753]++;
        if (typeof oSettings.aanFeatures[cOption] !== 'object') {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1755]++;
          oSettings.aanFeatures[cOption] = [];
        }
        _$jscoverage['datatable/js/jquery.dataTables.js'][1757]++;
        oSettings.aanFeatures[cOption].push(nTmp);
        _$jscoverage['datatable/js/jquery.dataTables.js'][1758]++;
        nInsertNode.appendChild(nTmp);
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][1763]++;
    nHolding.parentNode.replaceChild(oSettings.nTableWrapper, nHolding);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][1776]++;
  function _fnDetectHeader(aLayout, nThead) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][1778]++;
    var nTrs = $(nThead).children('tr');
    _$jscoverage['datatable/js/jquery.dataTables.js'][1779]++;
    var nTr, nCell;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1780]++;
    var i, k, l, iLen, jLen, iColShifted, iColumn, iColspan, iRowspan;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1781]++;
    var bUnique;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1782]++;
    var fnShiftCol = function(a, i, j) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][1783]++;
  var k = a[i];
  _$jscoverage['datatable/js/jquery.dataTables.js'][1784]++;
  while (k[j]) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][1785]++;
    j++;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][1787]++;
  return j;
};
    _$jscoverage['datatable/js/jquery.dataTables.js'][1790]++;
    aLayout.splice(0, aLayout.length);
    _$jscoverage['datatable/js/jquery.dataTables.js'][1793]++;
    for (i = 0 , iLen = nTrs.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1795]++;
      aLayout.push([]);
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][1799]++;
    for (i = 0 , iLen = nTrs.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1801]++;
      nTr = nTrs[i];
      _$jscoverage['datatable/js/jquery.dataTables.js'][1802]++;
      iColumn = 0;
      _$jscoverage['datatable/js/jquery.dataTables.js'][1805]++;
      nCell = nTr.firstChild;
      _$jscoverage['datatable/js/jquery.dataTables.js'][1806]++;
      while (nCell) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1807]++;
        if (nCell.nodeName.toUpperCase() == "TD" || nCell.nodeName.toUpperCase() == "TH") {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1811]++;
          iColspan = nCell.getAttribute('colspan') * 1;
          _$jscoverage['datatable/js/jquery.dataTables.js'][1812]++;
          iRowspan = nCell.getAttribute('rowspan') * 1;
          _$jscoverage['datatable/js/jquery.dataTables.js'][1813]++;
          iColspan = (!iColspan || iColspan === 0 || iColspan === 1) ? 1 : iColspan;
          _$jscoverage['datatable/js/jquery.dataTables.js'][1814]++;
          iRowspan = (!iRowspan || iRowspan === 0 || iRowspan === 1) ? 1 : iRowspan;
          _$jscoverage['datatable/js/jquery.dataTables.js'][1819]++;
          iColShifted = fnShiftCol(aLayout, i, iColumn);
          _$jscoverage['datatable/js/jquery.dataTables.js'][1822]++;
          bUnique = iColspan === 1 ? true : false;
          _$jscoverage['datatable/js/jquery.dataTables.js'][1825]++;
          for (l = 0; l < iColspan; l++) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][1827]++;
            for (k = 0; k < iRowspan; k++) {
              _$jscoverage['datatable/js/jquery.dataTables.js'][1829]++;
              aLayout[i + k][iColShifted + l] = {
  "cell": nCell, 
  "unique": bUnique};
              _$jscoverage['datatable/js/jquery.dataTables.js'][1833]++;
              aLayout[i + k].nTr = nTr;
            }
          }
        }
        _$jscoverage['datatable/js/jquery.dataTables.js'][1837]++;
        nCell = nCell.nextSibling;
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][1851]++;
  function _fnGetUniqueThs(oSettings, nHeader, aLayout) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][1853]++;
    var aReturn = [];
    _$jscoverage['datatable/js/jquery.dataTables.js'][1854]++;
    if (!aLayout) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1856]++;
      aLayout = oSettings.aoHeader;
      _$jscoverage['datatable/js/jquery.dataTables.js'][1857]++;
      if (nHeader) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1859]++;
        aLayout = [];
        _$jscoverage['datatable/js/jquery.dataTables.js'][1860]++;
        _fnDetectHeader(aLayout, nHeader);
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][1864]++;
    for (var i = 0, iLen = aLayout.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1866]++;
      for (var j = 0, jLen = aLayout[i].length; j < jLen; j++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1868]++;
        if (aLayout[i][j].unique && (!aReturn[j] || !oSettings.bSortCellsTop)) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1871]++;
          aReturn[j] = aLayout[i][j].cell;
        }
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][1876]++;
    return aReturn;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][1887]++;
  function _fnAjaxUpdate(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][1889]++;
    if (oSettings.bAjaxDataGet) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1891]++;
      oSettings.iDraw++;
      _$jscoverage['datatable/js/jquery.dataTables.js'][1892]++;
      _fnProcessingDisplay(oSettings, true);
      _$jscoverage['datatable/js/jquery.dataTables.js'][1893]++;
      var iColumns = oSettings.aoColumns.length;
      _$jscoverage['datatable/js/jquery.dataTables.js'][1894]++;
      var aoData = _fnAjaxParameters(oSettings);
      _$jscoverage['datatable/js/jquery.dataTables.js'][1895]++;
      _fnServerParams(oSettings, aoData);
      _$jscoverage['datatable/js/jquery.dataTables.js'][1897]++;
      oSettings.fnServerData.call(oSettings.oInstance, oSettings.sAjaxSource, aoData, function(json) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][1899]++;
  _fnAjaxUpdateDraw(oSettings, json);
}, oSettings);
      _$jscoverage['datatable/js/jquery.dataTables.js'][1901]++;
      return false;
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1905]++;
      return true;
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][1916]++;
  function _fnAjaxParameters(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][1918]++;
    var iColumns = oSettings.aoColumns.length;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1919]++;
    var aoData = [], mDataProp, aaSort, aDataSort;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1920]++;
    var i, j;
    _$jscoverage['datatable/js/jquery.dataTables.js'][1922]++;
    aoData.push({
  "name": "sEcho", 
  "value": oSettings.iDraw});
    _$jscoverage['datatable/js/jquery.dataTables.js'][1923]++;
    aoData.push({
  "name": "iColumns", 
  "value": iColumns});
    _$jscoverage['datatable/js/jquery.dataTables.js'][1924]++;
    aoData.push({
  "name": "sColumns", 
  "value": _fnColumnOrdering(oSettings)});
    _$jscoverage['datatable/js/jquery.dataTables.js'][1925]++;
    aoData.push({
  "name": "iDisplayStart", 
  "value": oSettings._iDisplayStart});
    _$jscoverage['datatable/js/jquery.dataTables.js'][1926]++;
    aoData.push({
  "name": "iDisplayLength", 
  "value": oSettings.oFeatures.bPaginate !== false ? oSettings._iDisplayLength : -1});
    _$jscoverage['datatable/js/jquery.dataTables.js'][1929]++;
    for (i = 0; i < iColumns; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1931]++;
      mDataProp = oSettings.aoColumns[i].mData;
      _$jscoverage['datatable/js/jquery.dataTables.js'][1932]++;
      aoData.push({
  "name": "mDataProp_" + i, 
  "value": typeof (mDataProp) === "function" ? 'function' : mDataProp});
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][1936]++;
    if (oSettings.oFeatures.bFilter !== false) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1938]++;
      aoData.push({
  "name": "sSearch", 
  "value": oSettings.oPreviousSearch.sSearch});
      _$jscoverage['datatable/js/jquery.dataTables.js'][1939]++;
      aoData.push({
  "name": "bRegex", 
  "value": oSettings.oPreviousSearch.bRegex});
      _$jscoverage['datatable/js/jquery.dataTables.js'][1940]++;
      for (i = 0; i < iColumns; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1942]++;
        aoData.push({
  "name": "sSearch_" + i, 
  "value": oSettings.aoPreSearchCols[i].sSearch});
        _$jscoverage['datatable/js/jquery.dataTables.js'][1943]++;
        aoData.push({
  "name": "bRegex_" + i, 
  "value": oSettings.aoPreSearchCols[i].bRegex});
        _$jscoverage['datatable/js/jquery.dataTables.js'][1944]++;
        aoData.push({
  "name": "bSearchable_" + i, 
  "value": oSettings.aoColumns[i].bSearchable});
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][1949]++;
    if (oSettings.oFeatures.bSort !== false) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][1951]++;
      var iCounter = 0;
      _$jscoverage['datatable/js/jquery.dataTables.js'][1953]++;
      aaSort = (oSettings.aaSortingFixed !== null) ? oSettings.aaSortingFixed.concat(oSettings.aaSorting) : oSettings.aaSorting.slice();
      _$jscoverage['datatable/js/jquery.dataTables.js'][1957]++;
      for (i = 0; i < aaSort.length; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1959]++;
        aDataSort = oSettings.aoColumns[aaSort[i][0]].aDataSort;
        _$jscoverage['datatable/js/jquery.dataTables.js'][1961]++;
        for (j = 0; j < aDataSort.length; j++) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][1963]++;
          aoData.push({
  "name": "iSortCol_" + iCounter, 
  "value": aDataSort[j]});
          _$jscoverage['datatable/js/jquery.dataTables.js'][1964]++;
          aoData.push({
  "name": "sSortDir_" + iCounter, 
  "value": aaSort[i][1]});
          _$jscoverage['datatable/js/jquery.dataTables.js'][1965]++;
          iCounter++;
        }
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][1968]++;
      aoData.push({
  "name": "iSortingCols", 
  "value": iCounter});
      _$jscoverage['datatable/js/jquery.dataTables.js'][1970]++;
      for (i = 0; i < iColumns; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][1972]++;
        aoData.push({
  "name": "bSortable_" + i, 
  "value": oSettings.aoColumns[i].bSortable});
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][1976]++;
    return aoData;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][1986]++;
  function _fnServerParams(oSettings, aoData) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][1988]++;
    _fnCallbackFire(oSettings, 'aoServerParams', 'serverParams', [aoData]);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2003]++;
  function _fnAjaxUpdateDraw(oSettings, json) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2005]++;
    if (json.sEcho !== undefined) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2010]++;
      if (json.sEcho * 1 < oSettings.iDraw) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][2012]++;
        return;
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][2016]++;
        oSettings.iDraw = json.sEcho * 1;
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2020]++;
    if (!oSettings.oScroll.bInfinite || (oSettings.oScroll.bInfinite && (oSettings.bSorted || oSettings.bFiltered))) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2023]++;
      _fnClearTable(oSettings);
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2025]++;
    oSettings._iRecordsTotal = parseInt(json.iTotalRecords, 10);
    _$jscoverage['datatable/js/jquery.dataTables.js'][2026]++;
    oSettings._iRecordsDisplay = parseInt(json.iTotalDisplayRecords, 10);
    _$jscoverage['datatable/js/jquery.dataTables.js'][2029]++;
    var sOrdering = _fnColumnOrdering(oSettings);
    _$jscoverage['datatable/js/jquery.dataTables.js'][2030]++;
    var bReOrder = (json.sColumns !== undefined && sOrdering !== "" && json.sColumns != sOrdering);
    _$jscoverage['datatable/js/jquery.dataTables.js'][2031]++;
    var aiIndex;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2032]++;
    if (bReOrder) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2034]++;
      aiIndex = _fnReOrderIndex(oSettings, json.sColumns);
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2037]++;
    var aData = _fnGetObjectDataFn(oSettings.sAjaxDataProp)(json);
    _$jscoverage['datatable/js/jquery.dataTables.js'][2038]++;
    for (var i = 0, iLen = aData.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2040]++;
      if (bReOrder) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][2043]++;
        var aDataSorted = [];
        _$jscoverage['datatable/js/jquery.dataTables.js'][2044]++;
        for (var j = 0, jLen = oSettings.aoColumns.length; j < jLen; j++) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][2046]++;
          aDataSorted.push(aData[i][aiIndex[j]]);
        }
        _$jscoverage['datatable/js/jquery.dataTables.js'][2048]++;
        _fnAddData(oSettings, aDataSorted);
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][2053]++;
        _fnAddData(oSettings, aData[i]);
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2056]++;
    oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
    _$jscoverage['datatable/js/jquery.dataTables.js'][2058]++;
    oSettings.bAjaxDataGet = false;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2059]++;
    _fnDraw(oSettings);
    _$jscoverage['datatable/js/jquery.dataTables.js'][2060]++;
    oSettings.bAjaxDataGet = true;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2061]++;
    _fnProcessingDisplay(oSettings, false);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2072]++;
  function _fnFeatureHtmlFilter(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2074]++;
    var oPreviousSearch = oSettings.oPreviousSearch;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2076]++;
    var sSearchStr = oSettings.oLanguage.sSearch;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2077]++;
    sSearchStr = (sSearchStr.indexOf('_INPUT_') !== -1) ? sSearchStr.replace('_INPUT_', '<input type="text" />') : sSearchStr === "" ? '<input type="text" />' : sSearchStr + ' <input type="text" />';
    _$jscoverage['datatable/js/jquery.dataTables.js'][2081]++;
    var nFilter = document.createElement('div');
    _$jscoverage['datatable/js/jquery.dataTables.js'][2082]++;
    nFilter.className = oSettings.oClasses.sFilter;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2083]++;
    nFilter.innerHTML = '<label>' + sSearchStr + '</label>';
    _$jscoverage['datatable/js/jquery.dataTables.js'][2084]++;
    if (!oSettings.aanFeatures.f) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2086]++;
      nFilter.id = oSettings.sTableId + '_filter';
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2089]++;
    var jqFilter = $('input[type="text"]', nFilter);
    _$jscoverage['datatable/js/jquery.dataTables.js'][2093]++;
    nFilter._DT_Input = jqFilter[0];
    _$jscoverage['datatable/js/jquery.dataTables.js'][2095]++;
    jqFilter.val(oPreviousSearch.sSearch.replace('"', '&quot;'));
    _$jscoverage['datatable/js/jquery.dataTables.js'][2096]++;
    jqFilter.bind('keyup.DT', function(e) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][2098]++;
  var n = oSettings.aanFeatures.f;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2099]++;
  var val = this.value === "" ? "" : this.value;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2101]++;
  for (var i = 0, iLen = n.length; i < iLen; i++) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2103]++;
    if (n[i] != $(this).parents('div.dataTables_filter')[0]) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2105]++;
      $(n[i]._DT_Input).val(val);
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2110]++;
  if (val != oPreviousSearch.sSearch) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2112]++;
    _fnFilterComplete(oSettings, {
  "sSearch": val, 
  "bRegex": oPreviousSearch.bRegex, 
  "bSmart": oPreviousSearch.bSmart, 
  "bCaseInsensitive": oPreviousSearch.bCaseInsensitive});
  }
});
    _$jscoverage['datatable/js/jquery.dataTables.js'][2123]++;
    jqFilter.attr('aria-controls', oSettings.sTableId).bind('keypress.DT', function(e) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][2125]++;
  if (e.keyCode == 13) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2127]++;
    return false;
  }
});
    _$jscoverage['datatable/js/jquery.dataTables.js'][2132]++;
    return nFilter;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2143]++;
  function _fnFilterComplete(oSettings, oInput, iForce) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2145]++;
    var oPrevSearch = oSettings.oPreviousSearch;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2146]++;
    var aoPrevSearch = oSettings.aoPreSearchCols;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2147]++;
    var fnSaveFilter = function(oFilter) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][2149]++;
  oPrevSearch.sSearch = oFilter.sSearch;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2150]++;
  oPrevSearch.bRegex = oFilter.bRegex;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2151]++;
  oPrevSearch.bSmart = oFilter.bSmart;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2152]++;
  oPrevSearch.bCaseInsensitive = oFilter.bCaseInsensitive;
};
    _$jscoverage['datatable/js/jquery.dataTables.js'][2156]++;
    if (!oSettings.oFeatures.bServerSide) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2159]++;
      _fnFilter(oSettings, oInput.sSearch, iForce, oInput.bRegex, oInput.bSmart, oInput.bCaseInsensitive);
      _$jscoverage['datatable/js/jquery.dataTables.js'][2160]++;
      fnSaveFilter(oInput);
      _$jscoverage['datatable/js/jquery.dataTables.js'][2163]++;
      for (var i = 0; i < oSettings.aoPreSearchCols.length; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][2165]++;
        _fnFilterColumn(oSettings, aoPrevSearch[i].sSearch, i, aoPrevSearch[i].bRegex, aoPrevSearch[i].bSmart, aoPrevSearch[i].bCaseInsensitive);
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][2170]++;
      _fnFilterCustom(oSettings);
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2174]++;
      fnSaveFilter(oInput);
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2178]++;
    oSettings.bFiltered = true;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2179]++;
    $(oSettings.oInstance).trigger('filter', oSettings);
    _$jscoverage['datatable/js/jquery.dataTables.js'][2182]++;
    oSettings._iDisplayStart = 0;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2183]++;
    _fnCalculateEnd(oSettings);
    _$jscoverage['datatable/js/jquery.dataTables.js'][2184]++;
    _fnDraw(oSettings);
    _$jscoverage['datatable/js/jquery.dataTables.js'][2187]++;
    _fnBuildSearchArray(oSettings, 0);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2196]++;
  function _fnFilterCustom(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2198]++;
    var afnFilters = DataTable.ext.afnFiltering;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2199]++;
    var aiFilterColumns = _fnGetColumns(oSettings, 'bSearchable');
    _$jscoverage['datatable/js/jquery.dataTables.js'][2201]++;
    for (var i = 0, iLen = afnFilters.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2203]++;
      var iCorrector = 0;
      _$jscoverage['datatable/js/jquery.dataTables.js'][2204]++;
      for (var j = 0, jLen = oSettings.aiDisplay.length; j < jLen; j++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][2206]++;
        var iDisIndex = oSettings.aiDisplay[j - iCorrector];
        _$jscoverage['datatable/js/jquery.dataTables.js'][2207]++;
        var bTest = afnFilters[i](oSettings, _fnGetRowData(oSettings, iDisIndex, 'filter', aiFilterColumns), iDisIndex);
        _$jscoverage['datatable/js/jquery.dataTables.js'][2214]++;
        if (!bTest) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][2216]++;
          oSettings.aiDisplay.splice(j - iCorrector, 1);
          _$jscoverage['datatable/js/jquery.dataTables.js'][2217]++;
          iCorrector++;
        }
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2234]++;
  function _fnFilterColumn(oSettings, sInput, iColumn, bRegex, bSmart, bCaseInsensitive) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2236]++;
    if (sInput === "") {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2238]++;
      return;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2241]++;
    var iIndexCorrector = 0;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2242]++;
    var rpSearch = _fnFilterCreateSearch(sInput, bRegex, bSmart, bCaseInsensitive);
    _$jscoverage['datatable/js/jquery.dataTables.js'][2244]++;
    for (var i = oSettings.aiDisplay.length - 1; i >= 0; i--) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2246]++;
      var sData = _fnDataToSearch(_fnGetCellData(oSettings, oSettings.aiDisplay[i], iColumn, 'filter'), oSettings.aoColumns[iColumn].sType);
      _$jscoverage['datatable/js/jquery.dataTables.js'][2248]++;
      if (!rpSearch.test(sData)) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][2250]++;
        oSettings.aiDisplay.splice(i, 1);
        _$jscoverage['datatable/js/jquery.dataTables.js'][2251]++;
        iIndexCorrector++;
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2267]++;
  function _fnFilter(oSettings, sInput, iForce, bRegex, bSmart, bCaseInsensitive) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2269]++;
    var i;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2270]++;
    var rpSearch = _fnFilterCreateSearch(sInput, bRegex, bSmart, bCaseInsensitive);
    _$jscoverage['datatable/js/jquery.dataTables.js'][2271]++;
    var oPrevSearch = oSettings.oPreviousSearch;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2274]++;
    if (!iForce) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2276]++;
      iForce = 0;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2280]++;
    if (DataTable.ext.afnFiltering.length !== 0) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2282]++;
      iForce = 1;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2288]++;
    if (sInput.length <= 0) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2290]++;
      oSettings.aiDisplay.splice(0, oSettings.aiDisplay.length);
      _$jscoverage['datatable/js/jquery.dataTables.js'][2291]++;
      oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2299]++;
      if (oSettings.aiDisplay.length == oSettings.aiDisplayMaster.length || oPrevSearch.sSearch.length > sInput.length || iForce == 1 || sInput.indexOf(oPrevSearch.sSearch) !== 0) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][2304]++;
        oSettings.aiDisplay.splice(0, oSettings.aiDisplay.length);
        _$jscoverage['datatable/js/jquery.dataTables.js'][2307]++;
        _fnBuildSearchArray(oSettings, 1);
        _$jscoverage['datatable/js/jquery.dataTables.js'][2313]++;
        for (i = 0; i < oSettings.aiDisplayMaster.length; i++) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][2315]++;
          if (rpSearch.test(oSettings.asDataSearch[i])) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][2317]++;
            oSettings.aiDisplay.push(oSettings.aiDisplayMaster[i]);
          }
        }
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][2326]++;
        var iIndexCorrector = 0;
        _$jscoverage['datatable/js/jquery.dataTables.js'][2329]++;
        for (i = 0; i < oSettings.asDataSearch.length; i++) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][2331]++;
          if (!rpSearch.test(oSettings.asDataSearch[i])) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][2333]++;
            oSettings.aiDisplay.splice(i - iIndexCorrector, 1);
            _$jscoverage['datatable/js/jquery.dataTables.js'][2334]++;
            iIndexCorrector++;
          }
        }
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2348]++;
  function _fnBuildSearchArray(oSettings, iMaster) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2350]++;
    if (!oSettings.oFeatures.bServerSide) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2353]++;
      oSettings.asDataSearch = [];
      _$jscoverage['datatable/js/jquery.dataTables.js'][2355]++;
      var aiFilterColumns = _fnGetColumns(oSettings, 'bSearchable');
      _$jscoverage['datatable/js/jquery.dataTables.js'][2356]++;
      var aiIndex = (iMaster === 1) ? oSettings.aiDisplayMaster : oSettings.aiDisplay;
      _$jscoverage['datatable/js/jquery.dataTables.js'][2360]++;
      for (var i = 0, iLen = aiIndex.length; i < iLen; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][2362]++;
        oSettings.asDataSearch[i] = _fnBuildSearchRow(oSettings, _fnGetRowData(oSettings, aiIndex[i], 'filter', aiFilterColumns));
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2377]++;
  function _fnBuildSearchRow(oSettings, aData) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2379]++;
    var sSearch = aData.join('  ');
    _$jscoverage['datatable/js/jquery.dataTables.js'][2382]++;
    if (sSearch.indexOf('&') !== -1) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2384]++;
      sSearch = $('<div>').html(sSearch).text();
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2388]++;
    return sSearch.replace(/[\n\r]/g, " ");
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2400]++;
  function _fnFilterCreateSearch(sSearch, bRegex, bSmart, bCaseInsensitive) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2402]++;
    var asSearch, sRegExpString;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2404]++;
    if (bSmart) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2409]++;
      asSearch = bRegex ? sSearch.split(' ') : _fnEscapeRegex(sSearch).split(' ');
      _$jscoverage['datatable/js/jquery.dataTables.js'][2410]++;
      sRegExpString = '^(?=.*?' + asSearch.join(')(?=.*?') + ').*$';
      _$jscoverage['datatable/js/jquery.dataTables.js'][2411]++;
      return new RegExp(sRegExpString, bCaseInsensitive ? "i" : "");
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2415]++;
      sSearch = bRegex ? sSearch : _fnEscapeRegex(sSearch);
      _$jscoverage['datatable/js/jquery.dataTables.js'][2416]++;
      return new RegExp(sSearch, bCaseInsensitive ? "i" : "");
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2428]++;
  function _fnDataToSearch(sData, sType) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2430]++;
    if (typeof DataTable.ext.ofnSearch[sType] === "function") {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2432]++;
      return DataTable.ext.ofnSearch[sType](sData);
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2434]++;
      if (sData === null) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][2436]++;
        return '';
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][2438]++;
        if (sType == "html") {
          _$jscoverage['datatable/js/jquery.dataTables.js'][2440]++;
          return sData.replace(/[\r\n]/g, " ").replace(/<.*?>/g, "");
        } else {
          _$jscoverage['datatable/js/jquery.dataTables.js'][2442]++;
          if (typeof sData === "string") {
            _$jscoverage['datatable/js/jquery.dataTables.js'][2444]++;
            return sData.replace(/[\r\n]/g, " ");
          }
        }
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2446]++;
    return sData;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2456]++;
  function _fnEscapeRegex(sVal) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2458]++;
    var acEscape = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\', '$', '^', '-'];
    _$jscoverage['datatable/js/jquery.dataTables.js'][2459]++;
    var reReplace = new RegExp('(\\' + acEscape.join('|\\') + ')', 'g');
    _$jscoverage['datatable/js/jquery.dataTables.js'][2460]++;
    return sVal.replace(reReplace, '\\$1');
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2470]++;
  function _fnFeatureHtmlInfo(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2472]++;
    var nInfo = document.createElement('div');
    _$jscoverage['datatable/js/jquery.dataTables.js'][2473]++;
    nInfo.className = oSettings.oClasses.sInfo;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2476]++;
    if (!oSettings.aanFeatures.i) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2479]++;
      oSettings.aoDrawCallback.push({
  "fn": _fnUpdateInfo, 
  "sName": "information"});
      _$jscoverage['datatable/js/jquery.dataTables.js'][2485]++;
      nInfo.id = oSettings.sTableId + '_info';
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2487]++;
    oSettings.nTable.setAttribute('aria-describedby', oSettings.sTableId + '_info');
    _$jscoverage['datatable/js/jquery.dataTables.js'][2489]++;
    return nInfo;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2498]++;
  function _fnUpdateInfo(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2501]++;
    if (!oSettings.oFeatures.bInfo || oSettings.aanFeatures.i.length === 0) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2503]++;
      return;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2506]++;
    var oLang = oSettings.oLanguage, iStart = oSettings._iDisplayStart + 1, iEnd = oSettings.fnDisplayEnd(), iMax = oSettings.fnRecordsTotal(), iTotal = oSettings.fnRecordsDisplay(), sOut;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2514]++;
    if (iTotal === 0) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2517]++;
      sOut = oLang.sInfoEmpty;
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2521]++;
      sOut = oLang.sInfo;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2524]++;
    if (iTotal != iMax) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2527]++;
      sOut += ' ' + oLang.sInfoFiltered;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2531]++;
    sOut += oLang.sInfoPostFix;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2532]++;
    sOut = _fnInfoMacros(oSettings, sOut);
    _$jscoverage['datatable/js/jquery.dataTables.js'][2534]++;
    if (oLang.fnInfoCallback !== null) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2536]++;
      sOut = oLang.fnInfoCallback.call(oSettings.oInstance, oSettings, iStart, iEnd, iMax, iTotal, sOut);
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2540]++;
    var n = oSettings.aanFeatures.i;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2541]++;
    for (var i = 0, iLen = n.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2543]++;
      $(n[i]).html(sOut);
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2548]++;
  function _fnInfoMacros(oSettings, str) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2550]++;
    var iStart = oSettings._iDisplayStart + 1, sStart = oSettings.fnFormatNumber(iStart), iEnd = oSettings.fnDisplayEnd(), sEnd = oSettings.fnFormatNumber(iEnd), iTotal = oSettings.fnRecordsDisplay(), sTotal = oSettings.fnFormatNumber(iTotal), iMax = oSettings.fnRecordsTotal(), sMax = oSettings.fnFormatNumber(iMax);
    _$jscoverage['datatable/js/jquery.dataTables.js'][2562]++;
    if (oSettings.oScroll.bInfinite) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2564]++;
      sStart = oSettings.fnFormatNumber(1);
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2567]++;
    return str.replace(/_START_/g, sStart).replace(/_END_/g, sEnd).replace(/_TOTAL_/g, sTotal).replace(/_MAX_/g, sMax);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2581]++;
  function _fnInitialise(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2583]++;
    var i, iLen, iAjaxStart = oSettings.iInitDisplayStart;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2586]++;
    if (oSettings.bInitialised === false) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2588]++;
      setTimeout(function() {
  _fnInitialise(oSettings);
}, 200);
      _$jscoverage['datatable/js/jquery.dataTables.js'][2589]++;
      return;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2593]++;
    _fnAddOptionsHtml(oSettings);
    _$jscoverage['datatable/js/jquery.dataTables.js'][2596]++;
    _fnBuildHead(oSettings);
    _$jscoverage['datatable/js/jquery.dataTables.js'][2597]++;
    _fnDrawHead(oSettings, oSettings.aoHeader);
    _$jscoverage['datatable/js/jquery.dataTables.js'][2598]++;
    if (oSettings.nTFoot) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2600]++;
      _fnDrawHead(oSettings, oSettings.aoFooter);
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2604]++;
    _fnProcessingDisplay(oSettings, true);
    _$jscoverage['datatable/js/jquery.dataTables.js'][2607]++;
    if (oSettings.oFeatures.bAutoWidth) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2609]++;
      _fnCalculateColumnWidths(oSettings);
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2612]++;
    for (i = 0 , iLen = oSettings.aoColumns.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2614]++;
      if (oSettings.aoColumns[i].sWidth !== null) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][2616]++;
        oSettings.aoColumns[i].nTh.style.width = _fnStringToCss(oSettings.aoColumns[i].sWidth);
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2624]++;
    if (oSettings.oFeatures.bSort) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2626]++;
      _fnSort(oSettings);
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2628]++;
      if (oSettings.oFeatures.bFilter) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][2630]++;
        _fnFilterComplete(oSettings, oSettings.oPreviousSearch);
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][2634]++;
        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
        _$jscoverage['datatable/js/jquery.dataTables.js'][2635]++;
        _fnCalculateEnd(oSettings);
        _$jscoverage['datatable/js/jquery.dataTables.js'][2636]++;
        _fnDraw(oSettings);
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2640]++;
    if (oSettings.sAjaxSource !== null && !oSettings.oFeatures.bServerSide) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2642]++;
      var aoData = [];
      _$jscoverage['datatable/js/jquery.dataTables.js'][2643]++;
      _fnServerParams(oSettings, aoData);
      _$jscoverage['datatable/js/jquery.dataTables.js'][2644]++;
      oSettings.fnServerData.call(oSettings.oInstance, oSettings.sAjaxSource, aoData, function(json) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][2645]++;
  var aData = (oSettings.sAjaxDataProp !== "") ? _fnGetObjectDataFn(oSettings.sAjaxDataProp)(json) : json;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2649]++;
  for (i = 0; i < aData.length; i++) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2651]++;
    _fnAddData(oSettings, aData[i]);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2657]++;
  oSettings.iInitDisplayStart = iAjaxStart;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2659]++;
  if (oSettings.oFeatures.bSort) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2661]++;
    _fnSort(oSettings);
  } else {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2665]++;
    oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
    _$jscoverage['datatable/js/jquery.dataTables.js'][2666]++;
    _fnCalculateEnd(oSettings);
    _$jscoverage['datatable/js/jquery.dataTables.js'][2667]++;
    _fnDraw(oSettings);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2670]++;
  _fnProcessingDisplay(oSettings, false);
  _$jscoverage['datatable/js/jquery.dataTables.js'][2671]++;
  _fnInitComplete(oSettings, json);
}, oSettings);
      _$jscoverage['datatable/js/jquery.dataTables.js'][2673]++;
      return;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2677]++;
    if (!oSettings.oFeatures.bServerSide) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2679]++;
      _fnProcessingDisplay(oSettings, false);
      _$jscoverage['datatable/js/jquery.dataTables.js'][2680]++;
      _fnInitComplete(oSettings);
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2692]++;
  function _fnInitComplete(oSettings, json) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2694]++;
    oSettings._bInitComplete = true;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2695]++;
    _fnCallbackFire(oSettings, 'aoInitComplete', 'init', [oSettings, json]);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2706]++;
  function _fnLanguageCompat(oLanguage) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2708]++;
    var oDefaults = DataTable.defaults.oLanguage;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2713]++;
    if (!oLanguage.sEmptyTable && oLanguage.sZeroRecords && oDefaults.sEmptyTable === "No data available in table") {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2716]++;
      _fnMap(oLanguage, oLanguage, 'sZeroRecords', 'sEmptyTable');
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2720]++;
    if (!oLanguage.sLoadingRecords && oLanguage.sZeroRecords && oDefaults.sLoadingRecords === "Loading...") {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2723]++;
      _fnMap(oLanguage, oLanguage, 'sZeroRecords', 'sLoadingRecords');
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2735]++;
  function _fnFeatureHtmlLength(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2737]++;
    if (oSettings.oScroll.bInfinite) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2739]++;
      return null;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2743]++;
    var sName = 'name="' + oSettings.sTableId + '_length"';
    _$jscoverage['datatable/js/jquery.dataTables.js'][2744]++;
    var sStdMenu = '<select size="1" ' + sName + '>';
    _$jscoverage['datatable/js/jquery.dataTables.js'][2745]++;
    var i, iLen;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2746]++;
    var aLengthMenu = oSettings.aLengthMenu;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2748]++;
    if (aLengthMenu.length == 2 && typeof aLengthMenu[0] === 'object' && typeof aLengthMenu[1] === 'object') {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2751]++;
      for (i = 0 , iLen = aLengthMenu[0].length; i < iLen; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][2753]++;
        sStdMenu += '<option value="' + aLengthMenu[0][i] + '">' + aLengthMenu[1][i] + '</option>';
      }
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2758]++;
      for (i = 0 , iLen = aLengthMenu.length; i < iLen; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][2760]++;
        sStdMenu += '<option value="' + aLengthMenu[i] + '">' + aLengthMenu[i] + '</option>';
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2763]++;
    sStdMenu += '</select>';
    _$jscoverage['datatable/js/jquery.dataTables.js'][2765]++;
    var nLength = document.createElement('div');
    _$jscoverage['datatable/js/jquery.dataTables.js'][2766]++;
    if (!oSettings.aanFeatures.l) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2768]++;
      nLength.id = oSettings.sTableId + '_length';
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2770]++;
    nLength.className = oSettings.oClasses.sLength;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2771]++;
    nLength.innerHTML = '<label>' + oSettings.oLanguage.sLengthMenu.replace('_MENU_', sStdMenu) + '</label>';
    _$jscoverage['datatable/js/jquery.dataTables.js'][2777]++;
    $('select option[value="' + oSettings._iDisplayLength + '"]', nLength).attr("selected", true);
    _$jscoverage['datatable/js/jquery.dataTables.js'][2779]++;
    $('select', nLength).bind('change.DT', function(e) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][2780]++;
  var iVal = $(this).val();
  _$jscoverage['datatable/js/jquery.dataTables.js'][2783]++;
  var n = oSettings.aanFeatures.l;
  _$jscoverage['datatable/js/jquery.dataTables.js'][2784]++;
  for (i = 0 , iLen = n.length; i < iLen; i++) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2786]++;
    if (n[i] != this.parentNode) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2788]++;
      $('select', n[i]).val(iVal);
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2793]++;
  oSettings._iDisplayLength = parseInt(iVal, 10);
  _$jscoverage['datatable/js/jquery.dataTables.js'][2794]++;
  _fnCalculateEnd(oSettings);
  _$jscoverage['datatable/js/jquery.dataTables.js'][2797]++;
  if (oSettings.fnDisplayEnd() == oSettings.fnRecordsDisplay()) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2799]++;
    oSettings._iDisplayStart = oSettings.fnDisplayEnd() - oSettings._iDisplayLength;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2800]++;
    if (oSettings._iDisplayStart < 0) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2802]++;
      oSettings._iDisplayStart = 0;
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2806]++;
  if (oSettings._iDisplayLength == -1) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2808]++;
    oSettings._iDisplayStart = 0;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2811]++;
  _fnDraw(oSettings);
});
    _$jscoverage['datatable/js/jquery.dataTables.js'][2815]++;
    $('select', nLength).attr('aria-controls', oSettings.sTableId);
    _$jscoverage['datatable/js/jquery.dataTables.js'][2817]++;
    return nLength;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2826]++;
  function _fnCalculateEnd(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2828]++;
    if (oSettings.oFeatures.bPaginate === false) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2830]++;
      oSettings._iDisplayEnd = oSettings.aiDisplay.length;
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2837]++;
      if (oSettings._iDisplayStart + oSettings._iDisplayLength > oSettings.aiDisplay.length || oSettings._iDisplayLength == -1) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][2840]++;
        oSettings._iDisplayEnd = oSettings.aiDisplay.length;
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][2844]++;
        oSettings._iDisplayEnd = oSettings._iDisplayStart + oSettings._iDisplayLength;
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2862]++;
  function _fnFeatureHtmlPaginate(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2864]++;
    if (oSettings.oScroll.bInfinite) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2866]++;
      return null;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2869]++;
    var nPaginate = document.createElement('div');
    _$jscoverage['datatable/js/jquery.dataTables.js'][2870]++;
    nPaginate.className = oSettings.oClasses.sPaging + oSettings.sPaginationType;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2872]++;
    DataTable.ext.oPagination[oSettings.sPaginationType].fnInit(oSettings, nPaginate, function(oSettings) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][2874]++;
  _fnCalculateEnd(oSettings);
  _$jscoverage['datatable/js/jquery.dataTables.js'][2875]++;
  _fnDraw(oSettings);
});
    _$jscoverage['datatable/js/jquery.dataTables.js'][2880]++;
    if (!oSettings.aanFeatures.p) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2882]++;
      oSettings.aoDrawCallback.push({
  "fn": function(oSettings) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][2884]++;
  DataTable.ext.oPagination[oSettings.sPaginationType].fnUpdate(oSettings, function(oSettings) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][2885]++;
  _fnCalculateEnd(oSettings);
  _$jscoverage['datatable/js/jquery.dataTables.js'][2886]++;
  _fnDraw(oSettings);
});
}, 
  "sName": "pagination"});
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2892]++;
    return nPaginate;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2904]++;
  function _fnPageChange(oSettings, mAction) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2906]++;
    var iOldStart = oSettings._iDisplayStart;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2908]++;
    if (typeof mAction === "number") {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2910]++;
      oSettings._iDisplayStart = mAction * oSettings._iDisplayLength;
      _$jscoverage['datatable/js/jquery.dataTables.js'][2911]++;
      if (oSettings._iDisplayStart > oSettings.fnRecordsDisplay()) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][2913]++;
        oSettings._iDisplayStart = 0;
      }
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2916]++;
      if (mAction == "first") {
        _$jscoverage['datatable/js/jquery.dataTables.js'][2918]++;
        oSettings._iDisplayStart = 0;
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][2920]++;
        if (mAction == "previous") {
          _$jscoverage['datatable/js/jquery.dataTables.js'][2922]++;
          oSettings._iDisplayStart = oSettings._iDisplayLength >= 0 ? oSettings._iDisplayStart - oSettings._iDisplayLength : 0;
          _$jscoverage['datatable/js/jquery.dataTables.js'][2927]++;
          if (oSettings._iDisplayStart < 0) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][2929]++;
            oSettings._iDisplayStart = 0;
          }
        } else {
          _$jscoverage['datatable/js/jquery.dataTables.js'][2932]++;
          if (mAction == "next") {
            _$jscoverage['datatable/js/jquery.dataTables.js'][2934]++;
            if (oSettings._iDisplayLength >= 0) {
              _$jscoverage['datatable/js/jquery.dataTables.js'][2937]++;
              if (oSettings._iDisplayStart + oSettings._iDisplayLength < oSettings.fnRecordsDisplay()) {
                _$jscoverage['datatable/js/jquery.dataTables.js'][2939]++;
                oSettings._iDisplayStart += oSettings._iDisplayLength;
              }
            } else {
              _$jscoverage['datatable/js/jquery.dataTables.js'][2944]++;
              oSettings._iDisplayStart = 0;
            }
          } else {
            _$jscoverage['datatable/js/jquery.dataTables.js'][2947]++;
            if (mAction == "last") {
              _$jscoverage['datatable/js/jquery.dataTables.js'][2949]++;
              if (oSettings._iDisplayLength >= 0) {
                _$jscoverage['datatable/js/jquery.dataTables.js'][2951]++;
                var iPages = parseInt((oSettings.fnRecordsDisplay() - 1) / oSettings._iDisplayLength, 10) + 1;
                _$jscoverage['datatable/js/jquery.dataTables.js'][2952]++;
                oSettings._iDisplayStart = (iPages - 1) * oSettings._iDisplayLength;
              } else {
                _$jscoverage['datatable/js/jquery.dataTables.js'][2956]++;
                oSettings._iDisplayStart = 0;
              }
            } else {
              _$jscoverage['datatable/js/jquery.dataTables.js'][2961]++;
              _fnLog(oSettings, 0, "Unknown paging action: " + mAction);
            }
          }
        }
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2963]++;
    $(oSettings.oInstance).trigger('page', oSettings);
    _$jscoverage['datatable/js/jquery.dataTables.js'][2965]++;
    return iOldStart != oSettings._iDisplayStart;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2976]++;
  function _fnFeatureHtmlProcessing(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][2978]++;
    var nProcessing = document.createElement('div');
    _$jscoverage['datatable/js/jquery.dataTables.js'][2980]++;
    if (!oSettings.aanFeatures.r) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][2982]++;
      nProcessing.id = oSettings.sTableId + '_processing';
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][2984]++;
    nProcessing.innerHTML = oSettings.oLanguage.sProcessing;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2985]++;
    nProcessing.className = oSettings.oClasses.sProcessing;
    _$jscoverage['datatable/js/jquery.dataTables.js'][2986]++;
    oSettings.nTable.parentNode.insertBefore(nProcessing, oSettings.nTable);
    _$jscoverage['datatable/js/jquery.dataTables.js'][2988]++;
    return nProcessing;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][2998]++;
  function _fnProcessingDisplay(oSettings, bShow) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][3000]++;
    if (oSettings.oFeatures.bProcessing) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3002]++;
      var an = oSettings.aanFeatures.r;
      _$jscoverage['datatable/js/jquery.dataTables.js'][3003]++;
      for (var i = 0, iLen = an.length; i < iLen; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3005]++;
        an[i].style.visibility = bShow ? "visible" : "hidden";
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3009]++;
    $(oSettings.oInstance).trigger('processing', [oSettings, bShow]);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][3018]++;
  function _fnFeatureHtmlTable(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][3021]++;
    if (oSettings.oScroll.sX === "" && oSettings.oScroll.sY === "") {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3023]++;
      return oSettings.nTable;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3042]++;
    var nScroller = document.createElement('div'), nScrollHead = document.createElement('div'), nScrollHeadInner = document.createElement('div'), nScrollBody = document.createElement('div'), nScrollFoot = document.createElement('div'), nScrollFootInner = document.createElement('div'), nScrollHeadTable = oSettings.nTable.cloneNode(false), nScrollFootTable = oSettings.nTable.cloneNode(false), nThead = oSettings.nTable.getElementsByTagName('thead')[0], nTfoot = oSettings.nTable.getElementsByTagName('tfoot').length === 0 ? null : oSettings.nTable.getElementsByTagName('tfoot')[0], oClasses = oSettings.oClasses;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3056]++;
    nScrollHead.appendChild(nScrollHeadInner);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3057]++;
    nScrollFoot.appendChild(nScrollFootInner);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3058]++;
    nScrollBody.appendChild(oSettings.nTable);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3059]++;
    nScroller.appendChild(nScrollHead);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3060]++;
    nScroller.appendChild(nScrollBody);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3061]++;
    nScrollHeadInner.appendChild(nScrollHeadTable);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3062]++;
    nScrollHeadTable.appendChild(nThead);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3063]++;
    if (nTfoot !== null) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3065]++;
      nScroller.appendChild(nScrollFoot);
      _$jscoverage['datatable/js/jquery.dataTables.js'][3066]++;
      nScrollFootInner.appendChild(nScrollFootTable);
      _$jscoverage['datatable/js/jquery.dataTables.js'][3067]++;
      nScrollFootTable.appendChild(nTfoot);
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3070]++;
    nScroller.className = oClasses.sScrollWrapper;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3071]++;
    nScrollHead.className = oClasses.sScrollHead;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3072]++;
    nScrollHeadInner.className = oClasses.sScrollHeadInner;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3073]++;
    nScrollBody.className = oClasses.sScrollBody;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3074]++;
    nScrollFoot.className = oClasses.sScrollFoot;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3075]++;
    nScrollFootInner.className = oClasses.sScrollFootInner;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3077]++;
    if (oSettings.oScroll.bAutoCss) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3079]++;
      nScrollHead.style.overflow = "hidden";
      _$jscoverage['datatable/js/jquery.dataTables.js'][3080]++;
      nScrollHead.style.position = "relative";
      _$jscoverage['datatable/js/jquery.dataTables.js'][3081]++;
      nScrollFoot.style.overflow = "hidden";
      _$jscoverage['datatable/js/jquery.dataTables.js'][3082]++;
      nScrollBody.style.overflow = "auto";
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3085]++;
    nScrollHead.style.border = "0";
    _$jscoverage['datatable/js/jquery.dataTables.js'][3086]++;
    nScrollHead.style.width = "100%";
    _$jscoverage['datatable/js/jquery.dataTables.js'][3087]++;
    nScrollFoot.style.border = "0";
    _$jscoverage['datatable/js/jquery.dataTables.js'][3088]++;
    nScrollHeadInner.style.width = oSettings.oScroll.sXInner !== "" ? oSettings.oScroll.sXInner : "100%";
    _$jscoverage['datatable/js/jquery.dataTables.js'][3092]++;
    nScrollHeadTable.removeAttribute('id');
    _$jscoverage['datatable/js/jquery.dataTables.js'][3093]++;
    nScrollHeadTable.style.marginLeft = "0";
    _$jscoverage['datatable/js/jquery.dataTables.js'][3094]++;
    oSettings.nTable.style.marginLeft = "0";
    _$jscoverage['datatable/js/jquery.dataTables.js'][3095]++;
    if (nTfoot !== null) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3097]++;
      nScrollFootTable.removeAttribute('id');
      _$jscoverage['datatable/js/jquery.dataTables.js'][3098]++;
      nScrollFootTable.style.marginLeft = "0";
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3103]++;
    var nCaption = $(oSettings.nTable).children('caption');
    _$jscoverage['datatable/js/jquery.dataTables.js'][3104]++;
    if (nCaption.length > 0) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3106]++;
      nCaption = nCaption[0];
      _$jscoverage['datatable/js/jquery.dataTables.js'][3107]++;
      if (nCaption._captionSide === "top") {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3109]++;
        nScrollHeadTable.appendChild(nCaption);
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3111]++;
        if (nCaption._captionSide === "bottom" && nTfoot) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][3113]++;
          nScrollFootTable.appendChild(nCaption);
        }
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3121]++;
    if (oSettings.oScroll.sX !== "") {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3123]++;
      nScrollHead.style.width = _fnStringToCss(oSettings.oScroll.sX);
      _$jscoverage['datatable/js/jquery.dataTables.js'][3124]++;
      nScrollBody.style.width = _fnStringToCss(oSettings.oScroll.sX);
      _$jscoverage['datatable/js/jquery.dataTables.js'][3126]++;
      if (nTfoot !== null) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3128]++;
        nScrollFoot.style.width = _fnStringToCss(oSettings.oScroll.sX);
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][3132]++;
      $(nScrollBody).scroll(function(e) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][3133]++;
  nScrollHead.scrollLeft = this.scrollLeft;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3135]++;
  if (nTfoot !== null) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][3137]++;
    nScrollFoot.scrollLeft = this.scrollLeft;
  }
});
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3143]++;
    if (oSettings.oScroll.sY !== "") {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3145]++;
      nScrollBody.style.height = _fnStringToCss(oSettings.oScroll.sY);
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3149]++;
    oSettings.aoDrawCallback.push({
  "fn": _fnScrollDraw, 
  "sName": "scrolling"});
    _$jscoverage['datatable/js/jquery.dataTables.js'][3155]++;
    if (oSettings.oScroll.bInfinite) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3157]++;
      $(nScrollBody).scroll(function() {
  _$jscoverage['datatable/js/jquery.dataTables.js'][3159]++;
  if (!oSettings.bDrawing && $(this).scrollTop() !== 0) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][3162]++;
    if ($(this).scrollTop() + $(this).height() > $(oSettings.nTable).height() - oSettings.oScroll.iLoadGap) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3166]++;
      if (oSettings.fnDisplayEnd() < oSettings.fnRecordsDisplay()) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3168]++;
        _fnPageChange(oSettings, 'next');
        _$jscoverage['datatable/js/jquery.dataTables.js'][3169]++;
        _fnCalculateEnd(oSettings);
        _$jscoverage['datatable/js/jquery.dataTables.js'][3170]++;
        _fnDraw(oSettings);
      }
    }
  }
});
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3177]++;
    oSettings.nScrollHead = nScrollHead;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3178]++;
    oSettings.nScrollFoot = nScrollFoot;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3180]++;
    return nScroller;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][3195]++;
  function _fnScrollDraw(o) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][3197]++;
    var nScrollHeadInner = o.nScrollHead.getElementsByTagName('div')[0], nScrollHeadTable = nScrollHeadInner.getElementsByTagName('table')[0], nScrollBody = o.nTable.parentNode, i, iLen, j, jLen, anHeadToSize, anHeadSizers, anFootSizers, anFootToSize, oStyle, iVis, nTheadSize, nTfootSize, iWidth, aApplied = [], aAppliedFooter = [], iSanityWidth, nScrollFootInner = (o.nTFoot !== null) ? o.nScrollFoot.getElementsByTagName('div')[0] : null, nScrollFootTable = (o.nTFoot !== null) ? nScrollFootInner.getElementsByTagName('table')[0] : null, ie67 = o.oBrowser.bScrollOversize, zeroOut = function(nSizer) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][3208]++;
  oStyle = nSizer.style;
  _$jscoverage['datatable/js/jquery.dataTables.js'][3209]++;
  oStyle.paddingTop = "0";
  _$jscoverage['datatable/js/jquery.dataTables.js'][3210]++;
  oStyle.paddingBottom = "0";
  _$jscoverage['datatable/js/jquery.dataTables.js'][3211]++;
  oStyle.borderTopWidth = "0";
  _$jscoverage['datatable/js/jquery.dataTables.js'][3212]++;
  oStyle.borderBottomWidth = "0";
  _$jscoverage['datatable/js/jquery.dataTables.js'][3213]++;
  oStyle.height = 0;
};
    _$jscoverage['datatable/js/jquery.dataTables.js'][3221]++;
    $(o.nTable).children('thead, tfoot').remove();
    _$jscoverage['datatable/js/jquery.dataTables.js'][3224]++;
    nTheadSize = $(o.nTHead).clone()[0];
    _$jscoverage['datatable/js/jquery.dataTables.js'][3225]++;
    o.nTable.insertBefore(nTheadSize, o.nTable.childNodes[0]);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3226]++;
    anHeadToSize = o.nTHead.getElementsByTagName('tr');
    _$jscoverage['datatable/js/jquery.dataTables.js'][3227]++;
    anHeadSizers = nTheadSize.getElementsByTagName('tr');
    _$jscoverage['datatable/js/jquery.dataTables.js'][3229]++;
    if (o.nTFoot !== null) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3231]++;
      nTfootSize = $(o.nTFoot).clone()[0];
      _$jscoverage['datatable/js/jquery.dataTables.js'][3232]++;
      o.nTable.insertBefore(nTfootSize, o.nTable.childNodes[1]);
      _$jscoverage['datatable/js/jquery.dataTables.js'][3233]++;
      anFootToSize = o.nTFoot.getElementsByTagName('tr');
      _$jscoverage['datatable/js/jquery.dataTables.js'][3234]++;
      anFootSizers = nTfootSize.getElementsByTagName('tr');
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3245]++;
    if (o.oScroll.sX === "") {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3247]++;
      nScrollBody.style.width = '100%';
      _$jscoverage['datatable/js/jquery.dataTables.js'][3248]++;
      nScrollHeadInner.parentNode.style.width = '100%';
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3251]++;
    var nThs = _fnGetUniqueThs(o, nTheadSize);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3252]++;
    for (i = 0 , iLen = nThs.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3254]++;
      iVis = _fnVisibleToColumnIndex(o, i);
      _$jscoverage['datatable/js/jquery.dataTables.js'][3255]++;
      nThs[i].style.width = o.aoColumns[iVis].sWidth;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3258]++;
    if (o.nTFoot !== null) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3260]++;
      _fnApplyToChildren(function(n) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][3261]++;
  n.style.width = "";
}, anFootSizers);
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3268]++;
    if (o.oScroll.bCollapse && o.oScroll.sY !== "") {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3270]++;
      nScrollBody.style.height = (nScrollBody.offsetHeight + o.nTHead.offsetHeight) + "px";
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3274]++;
    iSanityWidth = $(o.nTable).outerWidth();
    _$jscoverage['datatable/js/jquery.dataTables.js'][3275]++;
    if (o.oScroll.sX === "") {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3278]++;
      o.nTable.style.width = "100%";
      _$jscoverage['datatable/js/jquery.dataTables.js'][3284]++;
      if (ie67 && ($('tbody', nScrollBody).height() > nScrollBody.offsetHeight || $(nScrollBody).css('overflow-y') == "scroll")) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3287]++;
        o.nTable.style.width = _fnStringToCss($(o.nTable).outerWidth() - o.oScroll.iBarWidth);
      }
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3292]++;
      if (o.oScroll.sXInner !== "") {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3295]++;
        o.nTable.style.width = _fnStringToCss(o.oScroll.sXInner);
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3297]++;
        if (iSanityWidth == $(nScrollBody).width() && $(nScrollBody).height() < $(o.nTable).height()) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][3301]++;
          o.nTable.style.width = _fnStringToCss(iSanityWidth - o.oScroll.iBarWidth);
          _$jscoverage['datatable/js/jquery.dataTables.js'][3302]++;
          if ($(o.nTable).outerWidth() > iSanityWidth - o.oScroll.iBarWidth) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][3305]++;
            o.nTable.style.width = _fnStringToCss(iSanityWidth);
          }
        } else {
          _$jscoverage['datatable/js/jquery.dataTables.js'][3311]++;
          o.nTable.style.width = _fnStringToCss(iSanityWidth);
        }
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3319]++;
    iSanityWidth = $(o.nTable).outerWidth();
    _$jscoverage['datatable/js/jquery.dataTables.js'][3327]++;
    _fnApplyToChildren(zeroOut, anHeadSizers);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3331]++;
    _fnApplyToChildren(function(nSizer) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][3332]++;
  aApplied.push(_fnStringToCss($(nSizer).width()));
}, anHeadSizers);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3337]++;
    _fnApplyToChildren(function(nToSize, i) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][3338]++;
  nToSize.style.width = aApplied[i];
}, anHeadToSize);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3341]++;
    $(anHeadSizers).height(0);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3344]++;
    if (o.nTFoot !== null) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3346]++;
      _fnApplyToChildren(zeroOut, anFootSizers);
      _$jscoverage['datatable/js/jquery.dataTables.js'][3348]++;
      _fnApplyToChildren(function(nSizer) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][3349]++;
  aAppliedFooter.push(_fnStringToCss($(nSizer).width()));
}, anFootSizers);
      _$jscoverage['datatable/js/jquery.dataTables.js'][3352]++;
      _fnApplyToChildren(function(nToSize, i) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][3353]++;
  nToSize.style.width = aAppliedFooter[i];
}, anFootToSize);
      _$jscoverage['datatable/js/jquery.dataTables.js'][3356]++;
      $(anFootSizers).height(0);
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3366]++;
    _fnApplyToChildren(function(nSizer, i) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][3367]++;
  nSizer.innerHTML = "";
  _$jscoverage['datatable/js/jquery.dataTables.js'][3368]++;
  nSizer.style.width = aApplied[i];
}, anHeadSizers);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3371]++;
    if (o.nTFoot !== null) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3373]++;
      _fnApplyToChildren(function(nSizer, i) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][3374]++;
  nSizer.innerHTML = "";
  _$jscoverage['datatable/js/jquery.dataTables.js'][3375]++;
  nSizer.style.width = aAppliedFooter[i];
}, anFootSizers);
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3382]++;
    if ($(o.nTable).outerWidth() < iSanityWidth) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3385]++;
      var iCorrection = ((nScrollBody.scrollHeight > nScrollBody.offsetHeight || $(nScrollBody).css('overflow-y') == "scroll")) ? iSanityWidth + o.oScroll.iBarWidth : iSanityWidth;
      _$jscoverage['datatable/js/jquery.dataTables.js'][3390]++;
      if (ie67 && (nScrollBody.scrollHeight > nScrollBody.offsetHeight || $(nScrollBody).css('overflow-y') == "scroll")) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3393]++;
        o.nTable.style.width = _fnStringToCss(iCorrection - o.oScroll.iBarWidth);
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][3397]++;
      nScrollBody.style.width = _fnStringToCss(iCorrection);
      _$jscoverage['datatable/js/jquery.dataTables.js'][3398]++;
      o.nScrollHead.style.width = _fnStringToCss(iCorrection);
      _$jscoverage['datatable/js/jquery.dataTables.js'][3400]++;
      if (o.nTFoot !== null) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3402]++;
        o.nScrollFoot.style.width = _fnStringToCss(iCorrection);
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][3406]++;
      if (o.oScroll.sX === "") {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3408]++;
        _fnLog(o, 1, "The table cannot fit into the current element which will cause column" + " misalignment. The table has been drawn at its minimum possible width.");
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3411]++;
        if (o.oScroll.sXInner !== "") {
          _$jscoverage['datatable/js/jquery.dataTables.js'][3413]++;
          _fnLog(o, 1, "The table cannot fit into the current element which will cause column" + " misalignment. Increase the sScrollXInner value or remove it to allow automatic" + " calculation");
        }
      }
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3420]++;
      nScrollBody.style.width = _fnStringToCss('100%');
      _$jscoverage['datatable/js/jquery.dataTables.js'][3421]++;
      o.nScrollHead.style.width = _fnStringToCss('100%');
      _$jscoverage['datatable/js/jquery.dataTables.js'][3423]++;
      if (o.nTFoot !== null) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3425]++;
        o.nScrollFoot.style.width = _fnStringToCss('100%');
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3433]++;
    if (o.oScroll.sY === "") {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3439]++;
      if (ie67) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3441]++;
        nScrollBody.style.height = _fnStringToCss(o.nTable.offsetHeight + o.oScroll.iBarWidth);
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3445]++;
    if (o.oScroll.sY !== "" && o.oScroll.bCollapse) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3447]++;
      nScrollBody.style.height = _fnStringToCss(o.oScroll.sY);
      _$jscoverage['datatable/js/jquery.dataTables.js'][3449]++;
      var iExtra = (o.oScroll.sX !== "" && o.nTable.offsetWidth > nScrollBody.offsetWidth) ? o.oScroll.iBarWidth : 0;
      _$jscoverage['datatable/js/jquery.dataTables.js'][3451]++;
      if (o.nTable.offsetHeight < nScrollBody.offsetHeight) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3453]++;
        nScrollBody.style.height = _fnStringToCss(o.nTable.offsetHeight + iExtra);
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3458]++;
    var iOuterWidth = $(o.nTable).outerWidth();
    _$jscoverage['datatable/js/jquery.dataTables.js'][3459]++;
    nScrollHeadTable.style.width = _fnStringToCss(iOuterWidth);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3460]++;
    nScrollHeadInner.style.width = _fnStringToCss(iOuterWidth);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3464]++;
    var bScrolling = $(o.nTable).height() > nScrollBody.clientHeight || $(nScrollBody).css('overflow-y') == "scroll";
    _$jscoverage['datatable/js/jquery.dataTables.js'][3465]++;
    nScrollHeadInner.style.paddingRight = bScrolling ? o.oScroll.iBarWidth + "px" : "0px";
    _$jscoverage['datatable/js/jquery.dataTables.js'][3467]++;
    if (o.nTFoot !== null) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3469]++;
      nScrollFootTable.style.width = _fnStringToCss(iOuterWidth);
      _$jscoverage['datatable/js/jquery.dataTables.js'][3470]++;
      nScrollFootInner.style.width = _fnStringToCss(iOuterWidth);
      _$jscoverage['datatable/js/jquery.dataTables.js'][3471]++;
      nScrollFootInner.style.paddingRight = bScrolling ? o.oScroll.iBarWidth + "px" : "0px";
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3475]++;
    $(nScrollBody).scroll();
    _$jscoverage['datatable/js/jquery.dataTables.js'][3478]++;
    if (o.bSorted || o.bFiltered) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3480]++;
      nScrollBody.scrollTop = 0;
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][3493]++;
  function _fnApplyToChildren(fn, an1, an2) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][3495]++;
    var index = 0, i = 0, iLen = an1.length;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3496]++;
    var nNode1, nNode2;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3498]++;
    while (i < iLen) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3500]++;
      nNode1 = an1[i].firstChild;
      _$jscoverage['datatable/js/jquery.dataTables.js'][3501]++;
      nNode2 = an2 ? an2[i].firstChild : null;
      _$jscoverage['datatable/js/jquery.dataTables.js'][3502]++;
      while (nNode1) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3504]++;
        if (nNode1.nodeType === 1) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][3506]++;
          if (an2) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][3508]++;
            fn(nNode1, nNode2, index);
          } else {
            _$jscoverage['datatable/js/jquery.dataTables.js'][3512]++;
            fn(nNode1, index);
          }
          _$jscoverage['datatable/js/jquery.dataTables.js'][3514]++;
          index++;
        }
        _$jscoverage['datatable/js/jquery.dataTables.js'][3516]++;
        nNode1 = nNode1.nextSibling;
        _$jscoverage['datatable/js/jquery.dataTables.js'][3517]++;
        nNode2 = an2 ? nNode2.nextSibling : null;
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][3519]++;
      i++;
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][3530]++;
  function _fnConvertToWidth(sWidth, nParent) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][3532]++;
    if (!sWidth || sWidth === null || sWidth === '') {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3534]++;
      return 0;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3537]++;
    if (!nParent) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3539]++;
      nParent = document.body;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3542]++;
    var iWidth;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3543]++;
    var nTmp = document.createElement("div");
    _$jscoverage['datatable/js/jquery.dataTables.js'][3544]++;
    nTmp.style.width = _fnStringToCss(sWidth);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3546]++;
    nParent.appendChild(nTmp);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3547]++;
    iWidth = nTmp.offsetWidth;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3548]++;
    nParent.removeChild(nTmp);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3550]++;
    return (iWidth);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][3559]++;
  function _fnCalculateColumnWidths(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][3561]++;
    var iTableWidth = oSettings.nTable.offsetWidth;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3562]++;
    var iUserInputs = 0;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3563]++;
    var iTmpWidth;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3564]++;
    var iVisibleColumns = 0;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3565]++;
    var iColums = oSettings.aoColumns.length;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3566]++;
    var i, iIndex, iCorrector, iWidth;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3567]++;
    var oHeaders = $('th', oSettings.nTHead);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3568]++;
    var widthAttr = oSettings.nTable.getAttribute('width');
    _$jscoverage['datatable/js/jquery.dataTables.js'][3569]++;
    var nWrapper = oSettings.nTable.parentNode;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3572]++;
    for (i = 0; i < iColums; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3574]++;
      if (oSettings.aoColumns[i].bVisible) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3576]++;
        iVisibleColumns++;
        _$jscoverage['datatable/js/jquery.dataTables.js'][3578]++;
        if (oSettings.aoColumns[i].sWidth !== null) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][3580]++;
          iTmpWidth = _fnConvertToWidth(oSettings.aoColumns[i].sWidthOrig, nWrapper);
          _$jscoverage['datatable/js/jquery.dataTables.js'][3582]++;
          if (iTmpWidth !== null) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][3584]++;
            oSettings.aoColumns[i].sWidth = _fnStringToCss(iTmpWidth);
          }
          _$jscoverage['datatable/js/jquery.dataTables.js'][3587]++;
          iUserInputs++;
        }
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3596]++;
    if (iColums == oHeaders.length && iUserInputs === 0 && iVisibleColumns == iColums && oSettings.oScroll.sX === "" && oSettings.oScroll.sY === "") {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3599]++;
      for (i = 0; i < oSettings.aoColumns.length; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3601]++;
        iTmpWidth = $(oHeaders[i]).width();
        _$jscoverage['datatable/js/jquery.dataTables.js'][3602]++;
        if (iTmpWidth !== null) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][3604]++;
          oSettings.aoColumns[i].sWidth = _fnStringToCss(iTmpWidth);
        }
      }
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3615]++;
      var nCalcTmp = oSettings.nTable.cloneNode(false), nTheadClone = oSettings.nTHead.cloneNode(true), nBody = document.createElement('tbody'), nTr = document.createElement('tr'), nDivSizing;
      _$jscoverage['datatable/js/jquery.dataTables.js'][3622]++;
      nCalcTmp.removeAttribute("id");
      _$jscoverage['datatable/js/jquery.dataTables.js'][3623]++;
      nCalcTmp.appendChild(nTheadClone);
      _$jscoverage['datatable/js/jquery.dataTables.js'][3624]++;
      if (oSettings.nTFoot !== null) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3626]++;
        nCalcTmp.appendChild(oSettings.nTFoot.cloneNode(true));
        _$jscoverage['datatable/js/jquery.dataTables.js'][3627]++;
        _fnApplyToChildren(function(n) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][3628]++;
  n.style.width = "";
}, nCalcTmp.getElementsByTagName('tr'));
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][3632]++;
      nCalcTmp.appendChild(nBody);
      _$jscoverage['datatable/js/jquery.dataTables.js'][3633]++;
      nBody.appendChild(nTr);
      _$jscoverage['datatable/js/jquery.dataTables.js'][3636]++;
      var jqColSizing = $('thead th', nCalcTmp);
      _$jscoverage['datatable/js/jquery.dataTables.js'][3637]++;
      if (jqColSizing.length === 0) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3639]++;
        jqColSizing = $('tbody tr:eq(0)>td', nCalcTmp);
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][3643]++;
      var nThs = _fnGetUniqueThs(oSettings, nTheadClone);
      _$jscoverage['datatable/js/jquery.dataTables.js'][3644]++;
      iCorrector = 0;
      _$jscoverage['datatable/js/jquery.dataTables.js'][3645]++;
      for (i = 0; i < iColums; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3647]++;
        var oColumn = oSettings.aoColumns[i];
        _$jscoverage['datatable/js/jquery.dataTables.js'][3648]++;
        if (oColumn.bVisible && oColumn.sWidthOrig !== null && oColumn.sWidthOrig !== "") {
          _$jscoverage['datatable/js/jquery.dataTables.js'][3650]++;
          nThs[i - iCorrector].style.width = _fnStringToCss(oColumn.sWidthOrig);
        } else {
          _$jscoverage['datatable/js/jquery.dataTables.js'][3652]++;
          if (oColumn.bVisible) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][3654]++;
            nThs[i - iCorrector].style.width = "";
          } else {
            _$jscoverage['datatable/js/jquery.dataTables.js'][3658]++;
            iCorrector++;
          }
        }
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][3663]++;
      for (i = 0; i < iColums; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3665]++;
        if (oSettings.aoColumns[i].bVisible) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][3667]++;
          var nTd = _fnGetWidestNode(oSettings, i);
          _$jscoverage['datatable/js/jquery.dataTables.js'][3668]++;
          if (nTd !== null) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][3670]++;
            nTd = nTd.cloneNode(true);
            _$jscoverage['datatable/js/jquery.dataTables.js'][3671]++;
            if (oSettings.aoColumns[i].sContentPadding !== "") {
              _$jscoverage['datatable/js/jquery.dataTables.js'][3673]++;
              nTd.innerHTML += oSettings.aoColumns[i].sContentPadding;
            }
            _$jscoverage['datatable/js/jquery.dataTables.js'][3675]++;
            nTr.appendChild(nTd);
          }
        }
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][3681]++;
      nWrapper.appendChild(nCalcTmp);
      _$jscoverage['datatable/js/jquery.dataTables.js'][3687]++;
      if (oSettings.oScroll.sX !== "" && oSettings.oScroll.sXInner !== "") {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3689]++;
        nCalcTmp.style.width = _fnStringToCss(oSettings.oScroll.sXInner);
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3691]++;
        if (oSettings.oScroll.sX !== "") {
          _$jscoverage['datatable/js/jquery.dataTables.js'][3693]++;
          nCalcTmp.style.width = "";
          _$jscoverage['datatable/js/jquery.dataTables.js'][3694]++;
          if ($(nCalcTmp).width() < nWrapper.offsetWidth) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][3696]++;
            nCalcTmp.style.width = _fnStringToCss(nWrapper.offsetWidth);
          }
        } else {
          _$jscoverage['datatable/js/jquery.dataTables.js'][3699]++;
          if (oSettings.oScroll.sY !== "") {
            _$jscoverage['datatable/js/jquery.dataTables.js'][3701]++;
            nCalcTmp.style.width = _fnStringToCss(nWrapper.offsetWidth);
          } else {
            _$jscoverage['datatable/js/jquery.dataTables.js'][3703]++;
            if (widthAttr) {
              _$jscoverage['datatable/js/jquery.dataTables.js'][3705]++;
              nCalcTmp.style.width = _fnStringToCss(widthAttr);
            }
          }
        }
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][3707]++;
      nCalcTmp.style.visibility = "hidden";
      _$jscoverage['datatable/js/jquery.dataTables.js'][3710]++;
      _fnScrollingWidthAdjust(oSettings, nCalcTmp);
      _$jscoverage['datatable/js/jquery.dataTables.js'][3716]++;
      var oNodes = $("tbody tr:eq(0)", nCalcTmp).children();
      _$jscoverage['datatable/js/jquery.dataTables.js'][3717]++;
      if (oNodes.length === 0) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3719]++;
        oNodes = _fnGetUniqueThs(oSettings, $('thead', nCalcTmp)[0]);
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][3727]++;
      if (oSettings.oScroll.sX !== "") {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3729]++;
        var iTotal = 0;
        _$jscoverage['datatable/js/jquery.dataTables.js'][3730]++;
        iCorrector = 0;
        _$jscoverage['datatable/js/jquery.dataTables.js'][3731]++;
        for (i = 0; i < oSettings.aoColumns.length; i++) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][3733]++;
          if (oSettings.aoColumns[i].bVisible) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][3735]++;
            if (oSettings.aoColumns[i].sWidthOrig === null) {
              _$jscoverage['datatable/js/jquery.dataTables.js'][3737]++;
              iTotal += $(oNodes[iCorrector]).outerWidth();
            } else {
              _$jscoverage['datatable/js/jquery.dataTables.js'][3741]++;
              iTotal += parseInt(oSettings.aoColumns[i].sWidth.replace('px', ''), 10) + ($(oNodes[iCorrector]).outerWidth() - $(oNodes[iCorrector]).width());
            }
            _$jscoverage['datatable/js/jquery.dataTables.js'][3744]++;
            iCorrector++;
          }
        }
        _$jscoverage['datatable/js/jquery.dataTables.js'][3748]++;
        nCalcTmp.style.width = _fnStringToCss(iTotal);
        _$jscoverage['datatable/js/jquery.dataTables.js'][3749]++;
        oSettings.nTable.style.width = _fnStringToCss(iTotal);
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][3752]++;
      iCorrector = 0;
      _$jscoverage['datatable/js/jquery.dataTables.js'][3753]++;
      for (i = 0; i < oSettings.aoColumns.length; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3755]++;
        if (oSettings.aoColumns[i].bVisible) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][3757]++;
          iWidth = $(oNodes[iCorrector]).width();
          _$jscoverage['datatable/js/jquery.dataTables.js'][3758]++;
          if (iWidth !== null && iWidth > 0) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][3760]++;
            oSettings.aoColumns[i].sWidth = _fnStringToCss(iWidth);
          }
          _$jscoverage['datatable/js/jquery.dataTables.js'][3762]++;
          iCorrector++;
        }
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][3766]++;
      var cssWidth = $(nCalcTmp).css('width');
      _$jscoverage['datatable/js/jquery.dataTables.js'][3767]++;
      oSettings.nTable.style.width = (cssWidth.indexOf('%') !== -1) ? cssWidth : _fnStringToCss($(nCalcTmp).outerWidth());
      _$jscoverage['datatable/js/jquery.dataTables.js'][3769]++;
      nCalcTmp.parentNode.removeChild(nCalcTmp);
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3772]++;
    if (widthAttr) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3774]++;
      oSettings.nTable.style.width = _fnStringToCss(widthAttr);
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][3785]++;
  function _fnScrollingWidthAdjust(oSettings, n) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][3787]++;
    if (oSettings.oScroll.sX === "" && oSettings.oScroll.sY !== "") {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3792]++;
      var iOrigWidth = $(n).width();
      _$jscoverage['datatable/js/jquery.dataTables.js'][3793]++;
      n.style.width = _fnStringToCss($(n).outerWidth() - oSettings.oScroll.iBarWidth);
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3795]++;
      if (oSettings.oScroll.sX !== "") {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3798]++;
        n.style.width = _fnStringToCss($(n).outerWidth());
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][3810]++;
  function _fnGetWidestNode(oSettings, iCol) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][3812]++;
    var iMaxIndex = _fnGetMaxLenString(oSettings, iCol);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3813]++;
    if (iMaxIndex < 0) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3815]++;
      return null;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3818]++;
    if (oSettings.aoData[iMaxIndex].nTr === null) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3820]++;
      var n = document.createElement('td');
      _$jscoverage['datatable/js/jquery.dataTables.js'][3821]++;
      n.innerHTML = _fnGetCellData(oSettings, iMaxIndex, iCol, '');
      _$jscoverage['datatable/js/jquery.dataTables.js'][3822]++;
      return n;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3824]++;
    return _fnGetTdNodes(oSettings, iMaxIndex)[iCol];
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][3835]++;
  function _fnGetMaxLenString(oSettings, iCol) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][3837]++;
    var iMax = -1;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3838]++;
    var iMaxIndex = -1;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3840]++;
    for (var i = 0; i < oSettings.aoData.length; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3842]++;
      var s = _fnGetCellData(oSettings, i, iCol, 'display') + "";
      _$jscoverage['datatable/js/jquery.dataTables.js'][3843]++;
      s = s.replace(/<.*?>/g, "");
      _$jscoverage['datatable/js/jquery.dataTables.js'][3844]++;
      if (s.length > iMax) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3846]++;
        iMax = s.length;
        _$jscoverage['datatable/js/jquery.dataTables.js'][3847]++;
        iMaxIndex = i;
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3851]++;
    return iMaxIndex;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][3862]++;
  function _fnStringToCss(s) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][3864]++;
    if (s === null) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3866]++;
      return "0px";
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3869]++;
    if (typeof s == 'number') {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3871]++;
      if (s < 0) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3873]++;
        return "0px";
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][3875]++;
      return s + "px";
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3879]++;
    var c = s.charCodeAt(s.length - 1);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3880]++;
    if (c < 0x30 || c > 0x39) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3882]++;
      return s;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3884]++;
    return s + "px";
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][3893]++;
  function _fnScrollBarWidth() {
    _$jscoverage['datatable/js/jquery.dataTables.js'][3895]++;
    var inner = document.createElement('p');
    _$jscoverage['datatable/js/jquery.dataTables.js'][3896]++;
    var style = inner.style;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3897]++;
    style.width = "100%";
    _$jscoverage['datatable/js/jquery.dataTables.js'][3898]++;
    style.height = "200px";
    _$jscoverage['datatable/js/jquery.dataTables.js'][3899]++;
    style.padding = "0px";
    _$jscoverage['datatable/js/jquery.dataTables.js'][3901]++;
    var outer = document.createElement('div');
    _$jscoverage['datatable/js/jquery.dataTables.js'][3902]++;
    style = outer.style;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3903]++;
    style.position = "absolute";
    _$jscoverage['datatable/js/jquery.dataTables.js'][3904]++;
    style.top = "0px";
    _$jscoverage['datatable/js/jquery.dataTables.js'][3905]++;
    style.left = "0px";
    _$jscoverage['datatable/js/jquery.dataTables.js'][3906]++;
    style.visibility = "hidden";
    _$jscoverage['datatable/js/jquery.dataTables.js'][3907]++;
    style.width = "200px";
    _$jscoverage['datatable/js/jquery.dataTables.js'][3908]++;
    style.height = "150px";
    _$jscoverage['datatable/js/jquery.dataTables.js'][3909]++;
    style.padding = "0px";
    _$jscoverage['datatable/js/jquery.dataTables.js'][3910]++;
    style.overflow = "hidden";
    _$jscoverage['datatable/js/jquery.dataTables.js'][3911]++;
    outer.appendChild(inner);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3913]++;
    document.body.appendChild(outer);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3914]++;
    var w1 = inner.offsetWidth;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3915]++;
    outer.style.overflow = 'scroll';
    _$jscoverage['datatable/js/jquery.dataTables.js'][3916]++;
    var w2 = inner.offsetWidth;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3917]++;
    if (w1 == w2) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3919]++;
      w2 = outer.clientWidth;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][3922]++;
    document.body.removeChild(outer);
    _$jscoverage['datatable/js/jquery.dataTables.js'][3923]++;
    return (w1 - w2);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][3932]++;
  function _fnSort(oSettings, bApplyClasses) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][3934]++;
    var i, iLen, j, jLen, k, kLen, sDataType, nTh, aaSort = [], aiOrig = [], oSort = DataTable.ext.oSort, aoData = oSettings.aoData, aoColumns = oSettings.aoColumns, oAria = oSettings.oLanguage.oAria;
    _$jscoverage['datatable/js/jquery.dataTables.js'][3945]++;
    if (!oSettings.oFeatures.bServerSide && (oSettings.aaSorting.length !== 0 || oSettings.aaSortingFixed !== null)) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][3948]++;
      aaSort = (oSettings.aaSortingFixed !== null) ? oSettings.aaSortingFixed.concat(oSettings.aaSorting) : oSettings.aaSorting.slice();
      _$jscoverage['datatable/js/jquery.dataTables.js'][3955]++;
      for (i = 0; i < aaSort.length; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3957]++;
        var iColumn = aaSort[i][0];
        _$jscoverage['datatable/js/jquery.dataTables.js'][3958]++;
        var iVisColumn = _fnColumnIndexToVisible(oSettings, iColumn);
        _$jscoverage['datatable/js/jquery.dataTables.js'][3959]++;
        sDataType = oSettings.aoColumns[iColumn].sSortDataType;
        _$jscoverage['datatable/js/jquery.dataTables.js'][3960]++;
        if (DataTable.ext.afnSortData[sDataType]) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][3962]++;
          var aData = DataTable.ext.afnSortData[sDataType].call(oSettings.oInstance, oSettings, iColumn, iVisColumn);
          _$jscoverage['datatable/js/jquery.dataTables.js'][3965]++;
          if (aData.length === aoData.length) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][3967]++;
            for (j = 0 , jLen = aoData.length; j < jLen; j++) {
              _$jscoverage['datatable/js/jquery.dataTables.js'][3969]++;
              _fnSetCellData(oSettings, j, iColumn, aData[j]);
            }
          } else {
            _$jscoverage['datatable/js/jquery.dataTables.js'][3974]++;
            _fnLog(oSettings, 0, "Returned data sort array (col " + iColumn + ") is the wrong length");
          }
        }
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][3982]++;
      for (i = 0 , iLen = oSettings.aiDisplayMaster.length; i < iLen; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3984]++;
        aiOrig[oSettings.aiDisplayMaster[i]] = i;
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][3991]++;
      var iSortLen = aaSort.length;
      _$jscoverage['datatable/js/jquery.dataTables.js'][3992]++;
      var fnSortFormat, aDataSort;
      _$jscoverage['datatable/js/jquery.dataTables.js'][3993]++;
      for (i = 0 , iLen = aoData.length; i < iLen; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][3995]++;
        for (j = 0; j < iSortLen; j++) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][3997]++;
          aDataSort = aoColumns[aaSort[j][0]].aDataSort;
          _$jscoverage['datatable/js/jquery.dataTables.js'][3999]++;
          for (k = 0 , kLen = aDataSort.length; k < kLen; k++) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][4001]++;
            sDataType = aoColumns[aDataSort[k]].sType;
            _$jscoverage['datatable/js/jquery.dataTables.js'][4002]++;
            fnSortFormat = oSort[(sDataType ? sDataType : 'string') + "-pre"];
            _$jscoverage['datatable/js/jquery.dataTables.js'][4004]++;
            aoData[i]._aSortData[aDataSort[k]] = fnSortFormat ? fnSortFormat(_fnGetCellData(oSettings, i, aDataSort[k], 'sort')) : _fnGetCellData(oSettings, i, aDataSort[k], 'sort');
          }
        }
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][4028]++;
      oSettings.aiDisplayMaster.sort(function(a, b) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][4029]++;
  var k, l, lLen, iTest, aDataSort, sDataType;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4030]++;
  for (k = 0; k < iSortLen; k++) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4032]++;
    aDataSort = aoColumns[aaSort[k][0]].aDataSort;
    _$jscoverage['datatable/js/jquery.dataTables.js'][4034]++;
    for (l = 0 , lLen = aDataSort.length; l < lLen; l++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4036]++;
      sDataType = aoColumns[aDataSort[l]].sType;
      _$jscoverage['datatable/js/jquery.dataTables.js'][4038]++;
      iTest = oSort[(sDataType ? sDataType : 'string') + "-" + aaSort[k][1]](aoData[a]._aSortData[aDataSort[l]], aoData[b]._aSortData[aDataSort[l]]);
      _$jscoverage['datatable/js/jquery.dataTables.js'][4043]++;
      if (iTest !== 0) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][4045]++;
        return iTest;
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][4050]++;
  return oSort['numeric-asc'](aiOrig[a], aiOrig[b]);
});
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4055]++;
    if ((bApplyClasses === undefined || bApplyClasses) && !oSettings.oFeatures.bDeferRender) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4057]++;
      _fnSortingClasses(oSettings);
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4060]++;
    for (i = 0 , iLen = oSettings.aoColumns.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4062]++;
      var sTitle = aoColumns[i].sTitle.replace(/<.*?>/g, "");
      _$jscoverage['datatable/js/jquery.dataTables.js'][4063]++;
      nTh = aoColumns[i].nTh;
      _$jscoverage['datatable/js/jquery.dataTables.js'][4064]++;
      nTh.removeAttribute('aria-sort');
      _$jscoverage['datatable/js/jquery.dataTables.js'][4065]++;
      nTh.removeAttribute('aria-label');
      _$jscoverage['datatable/js/jquery.dataTables.js'][4068]++;
      if (aoColumns[i].bSortable) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][4070]++;
        if (aaSort.length > 0 && aaSort[0][0] == i) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][4072]++;
          nTh.setAttribute('aria-sort', aaSort[0][1] == "asc" ? "ascending" : "descending");
          _$jscoverage['datatable/js/jquery.dataTables.js'][4074]++;
          var nextSort = (aoColumns[i].asSorting[aaSort[0][2] + 1]) ? aoColumns[i].asSorting[aaSort[0][2] + 1] : aoColumns[i].asSorting[0];
          _$jscoverage['datatable/js/jquery.dataTables.js'][4076]++;
          nTh.setAttribute('aria-label', sTitle + (nextSort == "asc" ? oAria.sSortAscending : oAria.sSortDescending));
        } else {
          _$jscoverage['datatable/js/jquery.dataTables.js'][4081]++;
          nTh.setAttribute('aria-label', sTitle + (aoColumns[i].asSorting[0] == "asc" ? oAria.sSortAscending : oAria.sSortDescending));
        }
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][4087]++;
        nTh.setAttribute('aria-label', sTitle);
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4092]++;
    oSettings.bSorted = true;
    _$jscoverage['datatable/js/jquery.dataTables.js'][4093]++;
    $(oSettings.oInstance).trigger('sort', oSettings);
    _$jscoverage['datatable/js/jquery.dataTables.js'][4096]++;
    if (oSettings.oFeatures.bFilter) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4099]++;
      _fnFilterComplete(oSettings, oSettings.oPreviousSearch, 1);
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4103]++;
      oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
      _$jscoverage['datatable/js/jquery.dataTables.js'][4104]++;
      oSettings._iDisplayStart = 0;
      _$jscoverage['datatable/js/jquery.dataTables.js'][4105]++;
      _fnCalculateEnd(oSettings);
      _$jscoverage['datatable/js/jquery.dataTables.js'][4106]++;
      _fnDraw(oSettings);
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][4119]++;
  function _fnSortAttachListener(oSettings, nNode, iDataIndex, fnCallback) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4121]++;
    _fnBindAction(nNode, {}, function(e) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][4123]++;
  if (oSettings.aoColumns[iDataIndex].bSortable === false) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4125]++;
    return;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][4141]++;
  var fnInnerSorting = function() {
  _$jscoverage['datatable/js/jquery.dataTables.js'][4142]++;
  var iColumn, iNextSort;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4145]++;
  if (e.shiftKey) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4148]++;
    var bFound = false;
    _$jscoverage['datatable/js/jquery.dataTables.js'][4149]++;
    for (var i = 0; i < oSettings.aaSorting.length; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4151]++;
      if (oSettings.aaSorting[i][0] == iDataIndex) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][4153]++;
        bFound = true;
        _$jscoverage['datatable/js/jquery.dataTables.js'][4154]++;
        iColumn = oSettings.aaSorting[i][0];
        _$jscoverage['datatable/js/jquery.dataTables.js'][4155]++;
        iNextSort = oSettings.aaSorting[i][2] + 1;
        _$jscoverage['datatable/js/jquery.dataTables.js'][4157]++;
        if (!oSettings.aoColumns[iColumn].asSorting[iNextSort]) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][4160]++;
          oSettings.aaSorting.splice(i, 1);
        } else {
          _$jscoverage['datatable/js/jquery.dataTables.js'][4165]++;
          oSettings.aaSorting[i][1] = oSettings.aoColumns[iColumn].asSorting[iNextSort];
          _$jscoverage['datatable/js/jquery.dataTables.js'][4166]++;
          oSettings.aaSorting[i][2] = iNextSort;
        }
        _$jscoverage['datatable/js/jquery.dataTables.js'][4168]++;
        break;
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4173]++;
    if (bFound === false) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4175]++;
      oSettings.aaSorting.push([iDataIndex, oSettings.aoColumns[iDataIndex].asSorting[0], 0]);
    }
  } else {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4182]++;
    if (oSettings.aaSorting.length == 1 && oSettings.aaSorting[0][0] == iDataIndex) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4184]++;
      iColumn = oSettings.aaSorting[0][0];
      _$jscoverage['datatable/js/jquery.dataTables.js'][4185]++;
      iNextSort = oSettings.aaSorting[0][2] + 1;
      _$jscoverage['datatable/js/jquery.dataTables.js'][4186]++;
      if (!oSettings.aoColumns[iColumn].asSorting[iNextSort]) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][4188]++;
        iNextSort = 0;
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][4190]++;
      oSettings.aaSorting[0][1] = oSettings.aoColumns[iColumn].asSorting[iNextSort];
      _$jscoverage['datatable/js/jquery.dataTables.js'][4191]++;
      oSettings.aaSorting[0][2] = iNextSort;
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4195]++;
      oSettings.aaSorting.splice(0, oSettings.aaSorting.length);
      _$jscoverage['datatable/js/jquery.dataTables.js'][4196]++;
      oSettings.aaSorting.push([iDataIndex, oSettings.aoColumns[iDataIndex].asSorting[0], 0]);
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][4202]++;
  _fnSort(oSettings);
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][4205]++;
  if (!oSettings.oFeatures.bProcessing) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4207]++;
    fnInnerSorting();
  } else {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4211]++;
    _fnProcessingDisplay(oSettings, true);
    _$jscoverage['datatable/js/jquery.dataTables.js'][4212]++;
    setTimeout(function() {
  _$jscoverage['datatable/js/jquery.dataTables.js'][4213]++;
  fnInnerSorting();
  _$jscoverage['datatable/js/jquery.dataTables.js'][4214]++;
  if (!oSettings.oFeatures.bServerSide) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4216]++;
    _fnProcessingDisplay(oSettings, false);
  }
}, 0);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][4222]++;
  if (typeof fnCallback == 'function') {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4224]++;
    fnCallback(oSettings);
  }
});
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][4236]++;
  function _fnSortingClasses(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4238]++;
    var i, iLen, j, jLen, iFound;
    _$jscoverage['datatable/js/jquery.dataTables.js'][4239]++;
    var aaSort, sClass;
    _$jscoverage['datatable/js/jquery.dataTables.js'][4240]++;
    var iColumns = oSettings.aoColumns.length;
    _$jscoverage['datatable/js/jquery.dataTables.js'][4241]++;
    var oClasses = oSettings.oClasses;
    _$jscoverage['datatable/js/jquery.dataTables.js'][4243]++;
    for (i = 0; i < iColumns; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4245]++;
      if (oSettings.aoColumns[i].bSortable) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][4247]++;
        $(oSettings.aoColumns[i].nTh).removeClass(oClasses.sSortAsc + " " + oClasses.sSortDesc + " " + oSettings.aoColumns[i].sSortingClass);
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4252]++;
    if (oSettings.aaSortingFixed !== null) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4254]++;
      aaSort = oSettings.aaSortingFixed.concat(oSettings.aaSorting);
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4258]++;
      aaSort = oSettings.aaSorting.slice();
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4262]++;
    for (i = 0; i < oSettings.aoColumns.length; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4264]++;
      if (oSettings.aoColumns[i].bSortable) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][4266]++;
        sClass = oSettings.aoColumns[i].sSortingClass;
        _$jscoverage['datatable/js/jquery.dataTables.js'][4267]++;
        iFound = -1;
        _$jscoverage['datatable/js/jquery.dataTables.js'][4268]++;
        for (j = 0; j < aaSort.length; j++) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][4270]++;
          if (aaSort[j][0] == i) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][4272]++;
            sClass = (aaSort[j][1] == "asc") ? oClasses.sSortAsc : oClasses.sSortDesc;
            _$jscoverage['datatable/js/jquery.dataTables.js'][4274]++;
            iFound = j;
            _$jscoverage['datatable/js/jquery.dataTables.js'][4275]++;
            break;
          }
        }
        _$jscoverage['datatable/js/jquery.dataTables.js'][4278]++;
        $(oSettings.aoColumns[i].nTh).addClass(sClass);
        _$jscoverage['datatable/js/jquery.dataTables.js'][4280]++;
        if (oSettings.bJUI) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][4283]++;
          var jqSpan = $("span." + oClasses.sSortIcon, oSettings.aoColumns[i].nTh);
          _$jscoverage['datatable/js/jquery.dataTables.js'][4284]++;
          jqSpan.removeClass(oClasses.sSortJUIAsc + " " + oClasses.sSortJUIDesc + " " + oClasses.sSortJUI + " " + oClasses.sSortJUIAscAllowed + " " + oClasses.sSortJUIDescAllowed);
          _$jscoverage['datatable/js/jquery.dataTables.js'][4287]++;
          var sSpanClass;
          _$jscoverage['datatable/js/jquery.dataTables.js'][4288]++;
          if (iFound == -1) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][4290]++;
            sSpanClass = oSettings.aoColumns[i].sSortingClassJUI;
          } else {
            _$jscoverage['datatable/js/jquery.dataTables.js'][4292]++;
            if (aaSort[iFound][1] == "asc") {
              _$jscoverage['datatable/js/jquery.dataTables.js'][4294]++;
              sSpanClass = oClasses.sSortJUIAsc;
            } else {
              _$jscoverage['datatable/js/jquery.dataTables.js'][4298]++;
              sSpanClass = oClasses.sSortJUIDesc;
            }
          }
          _$jscoverage['datatable/js/jquery.dataTables.js'][4301]++;
          jqSpan.addClass(sSpanClass);
        }
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][4309]++;
        $(oSettings.aoColumns[i].nTh).addClass(oSettings.aoColumns[i].sSortingClass);
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4324]++;
    sClass = oClasses.sSortColumn;
    _$jscoverage['datatable/js/jquery.dataTables.js'][4326]++;
    if (oSettings.oFeatures.bSort && oSettings.oFeatures.bSortClasses) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4328]++;
      var nTds = _fnGetTdNodes(oSettings);
      _$jscoverage['datatable/js/jquery.dataTables.js'][4331]++;
      var iClass, iTargetCol;
      _$jscoverage['datatable/js/jquery.dataTables.js'][4332]++;
      var asClasses = [];
      _$jscoverage['datatable/js/jquery.dataTables.js'][4333]++;
      for (i = 0; i < iColumns; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][4335]++;
        asClasses.push("");
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][4337]++;
      for (i = 0 , iClass = 1; i < aaSort.length; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][4339]++;
        iTargetCol = parseInt(aaSort[i][0], 10);
        _$jscoverage['datatable/js/jquery.dataTables.js'][4340]++;
        asClasses[iTargetCol] = sClass + iClass;
        _$jscoverage['datatable/js/jquery.dataTables.js'][4342]++;
        if (iClass < 3) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][4344]++;
          iClass++;
        }
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][4349]++;
      var reClass = new RegExp(sClass + "[123]");
      _$jscoverage['datatable/js/jquery.dataTables.js'][4350]++;
      var sTmpClass, sCurrentClass, sNewClass;
      _$jscoverage['datatable/js/jquery.dataTables.js'][4351]++;
      for (i = 0 , iLen = nTds.length; i < iLen; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][4354]++;
        iTargetCol = i % iColumns;
        _$jscoverage['datatable/js/jquery.dataTables.js'][4357]++;
        sCurrentClass = nTds[i].className;
        _$jscoverage['datatable/js/jquery.dataTables.js'][4359]++;
        sNewClass = asClasses[iTargetCol];
        _$jscoverage['datatable/js/jquery.dataTables.js'][4361]++;
        sTmpClass = sCurrentClass.replace(reClass, sNewClass);
        _$jscoverage['datatable/js/jquery.dataTables.js'][4363]++;
        if (sTmpClass != sCurrentClass) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][4366]++;
          nTds[i].className = $.trim(sTmpClass);
        } else {
          _$jscoverage['datatable/js/jquery.dataTables.js'][4368]++;
          if (sNewClass.length > 0 && sCurrentClass.indexOf(sNewClass) == -1) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][4371]++;
            nTds[i].className = sCurrentClass + " " + sNewClass;
          }
        }
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][4384]++;
  function _fnSaveState(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4386]++;
    if (!oSettings.oFeatures.bStateSave || oSettings.bDestroying) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4388]++;
      return;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4392]++;
    var i, iLen, bInfinite = oSettings.oScroll.bInfinite;
    _$jscoverage['datatable/js/jquery.dataTables.js'][4393]++;
    var oState = {
  "iCreate": new Date().getTime(), 
  "iStart": (bInfinite ? 0 : oSettings._iDisplayStart), 
  "iEnd": (bInfinite ? oSettings._iDisplayLength : oSettings._iDisplayEnd), 
  "iLength": oSettings._iDisplayLength, 
  "aaSorting": $.extend(true, [], oSettings.aaSorting), 
  "oSearch": $.extend(true, {}, oSettings.oPreviousSearch), 
  "aoSearchCols": $.extend(true, [], oSettings.aoPreSearchCols), 
  "abVisCols": []};
    _$jscoverage['datatable/js/jquery.dataTables.js'][4404]++;
    for (i = 0 , iLen = oSettings.aoColumns.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4406]++;
      oState.abVisCols.push(oSettings.aoColumns[i].bVisible);
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4409]++;
    _fnCallbackFire(oSettings, "aoStateSaveParams", 'stateSaveParams', [oSettings, oState]);
    _$jscoverage['datatable/js/jquery.dataTables.js'][4411]++;
    oSettings.fnStateSave.call(oSettings.oInstance, oSettings, oState);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][4421]++;
  function _fnLoadState(oSettings, oInit) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4423]++;
    if (!oSettings.oFeatures.bStateSave) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4425]++;
      return;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4428]++;
    var oData = oSettings.fnStateLoad.call(oSettings.oInstance, oSettings);
    _$jscoverage['datatable/js/jquery.dataTables.js'][4429]++;
    if (!oData) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4431]++;
      return;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4437]++;
    var abStateLoad = _fnCallbackFire(oSettings, 'aoStateLoadParams', 'stateLoadParams', [oSettings, oData]);
    _$jscoverage['datatable/js/jquery.dataTables.js'][4438]++;
    if ($.inArray(false, abStateLoad) !== -1) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4440]++;
      return;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4444]++;
    oSettings.oLoadedState = $.extend(true, {}, oData);
    _$jscoverage['datatable/js/jquery.dataTables.js'][4447]++;
    oSettings._iDisplayStart = oData.iStart;
    _$jscoverage['datatable/js/jquery.dataTables.js'][4448]++;
    oSettings.iInitDisplayStart = oData.iStart;
    _$jscoverage['datatable/js/jquery.dataTables.js'][4449]++;
    oSettings._iDisplayEnd = oData.iEnd;
    _$jscoverage['datatable/js/jquery.dataTables.js'][4450]++;
    oSettings._iDisplayLength = oData.iLength;
    _$jscoverage['datatable/js/jquery.dataTables.js'][4451]++;
    oSettings.aaSorting = oData.aaSorting.slice();
    _$jscoverage['datatable/js/jquery.dataTables.js'][4452]++;
    oSettings.saved_aaSorting = oData.aaSorting.slice();
    _$jscoverage['datatable/js/jquery.dataTables.js'][4455]++;
    $.extend(oSettings.oPreviousSearch, oData.oSearch);
    _$jscoverage['datatable/js/jquery.dataTables.js'][4456]++;
    $.extend(true, oSettings.aoPreSearchCols, oData.aoSearchCols);
    _$jscoverage['datatable/js/jquery.dataTables.js'][4462]++;
    oInit.saved_aoColumns = [];
    _$jscoverage['datatable/js/jquery.dataTables.js'][4463]++;
    for (var i = 0; i < oData.abVisCols.length; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4465]++;
      oInit.saved_aoColumns[i] = {};
      _$jscoverage['datatable/js/jquery.dataTables.js'][4466]++;
      oInit.saved_aoColumns[i].bVisible = oData.abVisCols[i];
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4469]++;
    _fnCallbackFire(oSettings, 'aoStateLoaded', 'stateLoaded', [oSettings, oData]);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][4482]++;
  function _fnCreateCookie(sName, sValue, iSecs, sBaseName, fnCallback) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4484]++;
    var date = new Date();
    _$jscoverage['datatable/js/jquery.dataTables.js'][4485]++;
    date.setTime(date.getTime() + (iSecs * 1000));
    _$jscoverage['datatable/js/jquery.dataTables.js'][4493]++;
    var aParts = window.location.pathname.split('/');
    _$jscoverage['datatable/js/jquery.dataTables.js'][4494]++;
    var sNameFile = sName + '_' + aParts.pop().replace(/[\/:]/g, "").toLowerCase();
    _$jscoverage['datatable/js/jquery.dataTables.js'][4495]++;
    var sFullCookie, oData;
    _$jscoverage['datatable/js/jquery.dataTables.js'][4497]++;
    if (fnCallback !== null) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4499]++;
      oData = (typeof $.parseJSON === 'function') ? $.parseJSON(sValue) : eval('(' + sValue + ')');
      _$jscoverage['datatable/js/jquery.dataTables.js'][4501]++;
      sFullCookie = fnCallback(sNameFile, oData, date.toGMTString(), aParts.join('/') + "/");
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4506]++;
      sFullCookie = sNameFile + "=" + encodeURIComponent(sValue) + "; expires=" + date.toGMTString() + "; path=" + aParts.join('/') + "/";
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4513]++;
    var aCookies = document.cookie.split(';'), iNewCookieLen = sFullCookie.split(';')[0].length, aOldCookies = [];
    _$jscoverage['datatable/js/jquery.dataTables.js'][4518]++;
    if (iNewCookieLen + document.cookie.length + 10 > 4096) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4520]++;
      for (var i = 0, iLen = aCookies.length; i < iLen; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][4522]++;
        if (aCookies[i].indexOf(sBaseName) != -1) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][4525]++;
          var aSplitCookie = aCookies[i].split('=');
          _$jscoverage['datatable/js/jquery.dataTables.js'][4526]++;
          try {
            _$jscoverage['datatable/js/jquery.dataTables.js'][4527]++;
            oData = eval('(' + decodeURIComponent(aSplitCookie[1]) + ')');
            _$jscoverage['datatable/js/jquery.dataTables.js'][4529]++;
            if (oData && oData.iCreate) {
              _$jscoverage['datatable/js/jquery.dataTables.js'][4531]++;
              aOldCookies.push({
  "name": aSplitCookie[0], 
  "time": oData.iCreate});
            }
          }          catch (e) {
}
        }
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][4542]++;
      aOldCookies.sort(function(a, b) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][4543]++;
  return b.time - a.time;
});
      _$jscoverage['datatable/js/jquery.dataTables.js'][4547]++;
      while (iNewCookieLen + document.cookie.length + 10 > 4096) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][4548]++;
        if (aOldCookies.length === 0) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][4550]++;
          return;
        }
        _$jscoverage['datatable/js/jquery.dataTables.js'][4553]++;
        var old = aOldCookies.pop();
        _$jscoverage['datatable/js/jquery.dataTables.js'][4554]++;
        document.cookie = old.name + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=" + aParts.join('/') + "/";
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4559]++;
    document.cookie = sFullCookie;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][4569]++;
  function _fnReadCookie(sName) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4571]++;
    var aParts = window.location.pathname.split('/'), sNameEQ = sName + '_' + aParts[aParts.length - 1].replace(/[\/:]/g, "").toLowerCase() + '=', sCookieContents = document.cookie.split(';');
    _$jscoverage['datatable/js/jquery.dataTables.js'][4576]++;
    for (var i = 0; i < sCookieContents.length; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4578]++;
      var c = sCookieContents[i];
      _$jscoverage['datatable/js/jquery.dataTables.js'][4580]++;
      while (c.charAt(0) == ' ') {
        _$jscoverage['datatable/js/jquery.dataTables.js'][4582]++;
        c = c.substring(1, c.length);
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][4585]++;
      if (c.indexOf(sNameEQ) === 0) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][4587]++;
        return decodeURIComponent(c.substring(sNameEQ.length, c.length));
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4590]++;
    return null;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][4600]++;
  function _fnSettingsFromNode(nTable) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4602]++;
    for (var i = 0; i < DataTable.settings.length; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4604]++;
      if (DataTable.settings[i].nTable === nTable) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][4606]++;
        return DataTable.settings[i];
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4610]++;
    return null;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][4620]++;
  function _fnGetTrNodes(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4622]++;
    var aNodes = [];
    _$jscoverage['datatable/js/jquery.dataTables.js'][4623]++;
    var aoData = oSettings.aoData;
    _$jscoverage['datatable/js/jquery.dataTables.js'][4624]++;
    for (var i = 0, iLen = aoData.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4626]++;
      if (aoData[i].nTr !== null) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][4628]++;
        aNodes.push(aoData[i].nTr);
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4631]++;
    return aNodes;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][4643]++;
  function _fnGetTdNodes(oSettings, iIndividualRow) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4645]++;
    var anReturn = [];
    _$jscoverage['datatable/js/jquery.dataTables.js'][4646]++;
    var iCorrector;
    _$jscoverage['datatable/js/jquery.dataTables.js'][4647]++;
    var anTds, nTd;
    _$jscoverage['datatable/js/jquery.dataTables.js'][4648]++;
    var iRow, iRows = oSettings.aoData.length, iColumn, iColumns, oData, sNodeName, iStart = 0, iEnd = iRows;
    _$jscoverage['datatable/js/jquery.dataTables.js'][4652]++;
    if (iIndividualRow !== undefined) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4654]++;
      iStart = iIndividualRow;
      _$jscoverage['datatable/js/jquery.dataTables.js'][4655]++;
      iEnd = iIndividualRow + 1;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4658]++;
    for (iRow = iStart; iRow < iEnd; iRow++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4660]++;
      oData = oSettings.aoData[iRow];
      _$jscoverage['datatable/js/jquery.dataTables.js'][4661]++;
      if (oData.nTr !== null) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][4664]++;
        anTds = [];
        _$jscoverage['datatable/js/jquery.dataTables.js'][4665]++;
        nTd = oData.nTr.firstChild;
        _$jscoverage['datatable/js/jquery.dataTables.js'][4666]++;
        while (nTd) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][4668]++;
          sNodeName = nTd.nodeName.toLowerCase();
          _$jscoverage['datatable/js/jquery.dataTables.js'][4669]++;
          if (sNodeName == 'td' || sNodeName == 'th') {
            _$jscoverage['datatable/js/jquery.dataTables.js'][4671]++;
            anTds.push(nTd);
          }
          _$jscoverage['datatable/js/jquery.dataTables.js'][4673]++;
          nTd = nTd.nextSibling;
        }
        _$jscoverage['datatable/js/jquery.dataTables.js'][4676]++;
        iCorrector = 0;
        _$jscoverage['datatable/js/jquery.dataTables.js'][4677]++;
        for (iColumn = 0 , iColumns = oSettings.aoColumns.length; iColumn < iColumns; iColumn++) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][4679]++;
          if (oSettings.aoColumns[iColumn].bVisible) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][4681]++;
            anReturn.push(anTds[iColumn - iCorrector]);
          } else {
            _$jscoverage['datatable/js/jquery.dataTables.js'][4685]++;
            anReturn.push(oData._anHidden[iColumn]);
            _$jscoverage['datatable/js/jquery.dataTables.js'][4686]++;
            iCorrector++;
          }
        }
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4692]++;
    return anReturn;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][4703]++;
  function _fnLog(oSettings, iLevel, sMesg) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4705]++;
    var sAlert = (oSettings === null) ? "DataTables warning: " + sMesg : "DataTables warning (table id = '" + oSettings.sTableId + "'): " + sMesg;
    _$jscoverage['datatable/js/jquery.dataTables.js'][4709]++;
    if (iLevel === 0) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4711]++;
      if (DataTable.ext.sErrMode == 'alert') {
        _$jscoverage['datatable/js/jquery.dataTables.js'][4713]++;
        alert(sAlert);
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][4717]++;
        throw new Error(sAlert);
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][4719]++;
      return;
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4721]++;
      if (window.console && console.log) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][4723]++;
        console.log(sAlert);
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][4736]++;
  function _fnMap(oRet, oSrc, sName, sMappedName) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4738]++;
    if (sMappedName === undefined) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4740]++;
      sMappedName = sName;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4742]++;
    if (oSrc[sName] !== undefined) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4744]++;
      oRet[sMappedName] = oSrc[sName];
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][4760]++;
  function _fnExtend(oOut, oExtender) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4762]++;
    var val;
    _$jscoverage['datatable/js/jquery.dataTables.js'][4764]++;
    for (var prop in oExtender) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4766]++;
      if (oExtender.hasOwnProperty(prop)) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][4768]++;
        val = oExtender[prop];
        _$jscoverage['datatable/js/jquery.dataTables.js'][4770]++;
        if (typeof oInit[prop] === 'object' && val !== null && $.isArray(val) === false) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][4772]++;
          $.extend(true, oOut[prop], val);
        } else {
          _$jscoverage['datatable/js/jquery.dataTables.js'][4776]++;
          oOut[prop] = val;
        }
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4781]++;
    return oOut;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][4794]++;
  function _fnBindAction(n, oData, fn) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4805]++;
    $(n).bind('click.DT', oData, function(e) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][4798]++;
  n.blur();
  _$jscoverage['datatable/js/jquery.dataTables.js'][4799]++;
  fn(e);
}).bind('keypress.DT', oData, function(e) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][4802]++;
  if (e.which === 13) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4803]++;
    fn(e);
  }
}).bind('selectstart.DT', function() {
  _$jscoverage['datatable/js/jquery.dataTables.js'][4807]++;
  return false;
});
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][4821]++;
  function _fnCallbackReg(oSettings, sStore, fn, sName) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4823]++;
    if (fn) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4825]++;
      oSettings[sStore].push({
  "fn": fn, 
  "sName": sName});
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][4844]++;
  function _fnCallbackFire(oSettings, sStore, sTrigger, aArgs) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4846]++;
    var aoStore = oSettings[sStore];
    _$jscoverage['datatable/js/jquery.dataTables.js'][4847]++;
    var aRet = [];
    _$jscoverage['datatable/js/jquery.dataTables.js'][4849]++;
    for (var i = aoStore.length - 1; i >= 0; i--) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4851]++;
      aRet.push(aoStore[i].fn.apply(oSettings.oInstance, aArgs));
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4854]++;
    if (sTrigger !== null) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4856]++;
      $(oSettings.oInstance).trigger(sTrigger, aArgs);
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4859]++;
    return aRet;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][4874]++;
  var _fnJsonString = (window.JSON) ? JSON.stringify : function(o) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][4877]++;
  var sType = typeof o;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4878]++;
  if (sType !== "object" || o === null) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4881]++;
    if (sType === "string") {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4883]++;
      o = '"' + o + '"';
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4885]++;
    return o + "";
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][4889]++;
  var sProp, mValue, json = [], bArr = $.isArray(o);
  _$jscoverage['datatable/js/jquery.dataTables.js'][4894]++;
  for (sProp in o) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4896]++;
    mValue = o[sProp];
    _$jscoverage['datatable/js/jquery.dataTables.js'][4897]++;
    sType = typeof mValue;
    _$jscoverage['datatable/js/jquery.dataTables.js'][4899]++;
    if (sType === "string") {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4901]++;
      mValue = '"' + mValue + '"';
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][4903]++;
      if (sType === "object" && mValue !== null) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][4905]++;
        mValue = _fnJsonString(mValue);
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][4908]++;
    json.push((bArr ? "" : '"' + sProp + '":') + mValue);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][4911]++;
  return (bArr ? "[" : "{") + json + (bArr ? "]" : "}");
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][4921]++;
  function _fnBrowserDetect(oSettings) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4927]++;
    var n = $('<div style="position:absolute; top:0; left:0; height:1px; width:1px; overflow:hidden">' + '<div style="position:absolute; top:1px; left:1px; width:100px; overflow:scroll;">' + '<div id="DT_BrowserTest" style="width:100%; height:10px;"></div>' + '</div>' + '</div>')[0];
    _$jscoverage['datatable/js/jquery.dataTables.js'][4934]++;
    document.body.appendChild(n);
    _$jscoverage['datatable/js/jquery.dataTables.js'][4935]++;
    oSettings.oBrowser.bScrollOversize = $('#DT_BrowserTest', n)[0].offsetWidth === 100 ? true : false;
    _$jscoverage['datatable/js/jquery.dataTables.js'][4936]++;
    document.body.removeChild(n);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][4975]++;
  this.$ = function(sSelector, oOpts) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][4977]++;
  var i, iLen, a = [], tr;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4978]++;
  var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
  _$jscoverage['datatable/js/jquery.dataTables.js'][4979]++;
  var aoData = oSettings.aoData;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4980]++;
  var aiDisplay = oSettings.aiDisplay;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4981]++;
  var aiDisplayMaster = oSettings.aiDisplayMaster;
  _$jscoverage['datatable/js/jquery.dataTables.js'][4983]++;
  if (!oOpts) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4985]++;
    oOpts = {};
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][4988]++;
  oOpts = $.extend({}, {
  "filter": "none", 
  "order": "current", 
  "page": "all"}, oOpts);
  _$jscoverage['datatable/js/jquery.dataTables.js'][4996]++;
  if (oOpts.page == 'current') {
    _$jscoverage['datatable/js/jquery.dataTables.js'][4998]++;
    for (i = oSettings._iDisplayStart , iLen = oSettings.fnDisplayEnd(); i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][5000]++;
      tr = aoData[aiDisplay[i]].nTr;
      _$jscoverage['datatable/js/jquery.dataTables.js'][5001]++;
      if (tr) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][5003]++;
        a.push(tr);
      }
    }
  } else {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5007]++;
    if (oOpts.order == "current" && oOpts.filter == "none") {
      _$jscoverage['datatable/js/jquery.dataTables.js'][5009]++;
      for (i = 0 , iLen = aiDisplayMaster.length; i < iLen; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][5011]++;
        tr = aoData[aiDisplayMaster[i]].nTr;
        _$jscoverage['datatable/js/jquery.dataTables.js'][5012]++;
        if (tr) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][5014]++;
          a.push(tr);
        }
      }
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][5018]++;
      if (oOpts.order == "current" && oOpts.filter == "applied") {
        _$jscoverage['datatable/js/jquery.dataTables.js'][5020]++;
        for (i = 0 , iLen = aiDisplay.length; i < iLen; i++) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][5022]++;
          tr = aoData[aiDisplay[i]].nTr;
          _$jscoverage['datatable/js/jquery.dataTables.js'][5023]++;
          if (tr) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][5025]++;
            a.push(tr);
          }
        }
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][5029]++;
        if (oOpts.order == "original" && oOpts.filter == "none") {
          _$jscoverage['datatable/js/jquery.dataTables.js'][5031]++;
          for (i = 0 , iLen = aoData.length; i < iLen; i++) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][5033]++;
            tr = aoData[i].nTr;
            _$jscoverage['datatable/js/jquery.dataTables.js'][5034]++;
            if (tr) {
              _$jscoverage['datatable/js/jquery.dataTables.js'][5036]++;
              a.push(tr);
            }
          }
        } else {
          _$jscoverage['datatable/js/jquery.dataTables.js'][5040]++;
          if (oOpts.order == "original" && oOpts.filter == "applied") {
            _$jscoverage['datatable/js/jquery.dataTables.js'][5042]++;
            for (i = 0 , iLen = aoData.length; i < iLen; i++) {
              _$jscoverage['datatable/js/jquery.dataTables.js'][5044]++;
              tr = aoData[i].nTr;
              _$jscoverage['datatable/js/jquery.dataTables.js'][5045]++;
              if ($.inArray(i, aiDisplay) !== -1 && tr) {
                _$jscoverage['datatable/js/jquery.dataTables.js'][5047]++;
                a.push(tr);
              }
            }
          } else {
            _$jscoverage['datatable/js/jquery.dataTables.js'][5053]++;
            _fnLog(oSettings, 1, "Unknown selection options");
          }
        }
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5060]++;
  var jqA = $(a);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5061]++;
  var jqTRs = jqA.filter(sSelector);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5062]++;
  var jqDescendants = jqA.find(sSelector);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5064]++;
  return $([].concat($.makeArray(jqTRs), $.makeArray(jqDescendants)));
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][5115]++;
  this._ = function(sSelector, oOpts) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][5117]++;
  var aOut = [];
  _$jscoverage['datatable/js/jquery.dataTables.js'][5118]++;
  var i, iLen, iIndex;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5119]++;
  var aTrs = this.$(sSelector, oOpts);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5121]++;
  for (i = 0 , iLen = aTrs.length; i < iLen; i++) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5123]++;
    aOut.push(this.fnGetData(aTrs[i]));
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5126]++;
  return aOut;
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][5167]++;
  this.fnAddData = function(mData, bRedraw) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][5169]++;
  if (mData.length === 0) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5171]++;
    return [];
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5174]++;
  var aiReturn = [];
  _$jscoverage['datatable/js/jquery.dataTables.js'][5175]++;
  var iTest;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5178]++;
  var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5181]++;
  if (typeof mData[0] === "object" && mData[0] !== null) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5183]++;
    for (var i = 0; i < mData.length; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][5185]++;
      iTest = _fnAddData(oSettings, mData[i]);
      _$jscoverage['datatable/js/jquery.dataTables.js'][5186]++;
      if (iTest == -1) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][5188]++;
        return aiReturn;
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][5190]++;
      aiReturn.push(iTest);
    }
  } else {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5195]++;
    iTest = _fnAddData(oSettings, mData);
    _$jscoverage['datatable/js/jquery.dataTables.js'][5196]++;
    if (iTest == -1) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][5198]++;
      return aiReturn;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][5200]++;
    aiReturn.push(iTest);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5203]++;
  oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
  _$jscoverage['datatable/js/jquery.dataTables.js'][5205]++;
  if (bRedraw === undefined || bRedraw) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5207]++;
    _fnReDraw(oSettings);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5209]++;
  return aiReturn;
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][5233]++;
  this.fnAdjustColumnSizing = function(bRedraw) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][5235]++;
  var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5236]++;
  _fnAdjustColumnSizing(oSettings);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5238]++;
  if (bRedraw === undefined || bRedraw) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5240]++;
    this.fnDraw(false);
  } else {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5242]++;
    if (oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "") {
      _$jscoverage['datatable/js/jquery.dataTables.js'][5245]++;
      this.oApi._fnScrollDraw(oSettings);
    }
  }
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][5263]++;
  this.fnClearTable = function(bRedraw) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][5266]++;
  var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5267]++;
  _fnClearTable(oSettings);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5269]++;
  if (bRedraw === undefined || bRedraw) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5271]++;
    _fnDraw(oSettings);
  }
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][5299]++;
  this.fnClose = function(nTr) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][5302]++;
  var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5304]++;
  for (var i = 0; i < oSettings.aoOpenRows.length; i++) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5306]++;
    if (oSettings.aoOpenRows[i].nParent == nTr) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][5308]++;
      var nTrParent = oSettings.aoOpenRows[i].nTr.parentNode;
      _$jscoverage['datatable/js/jquery.dataTables.js'][5309]++;
      if (nTrParent) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][5312]++;
        nTrParent.removeChild(oSettings.aoOpenRows[i].nTr);
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][5314]++;
      oSettings.aoOpenRows.splice(i, 1);
      _$jscoverage['datatable/js/jquery.dataTables.js'][5315]++;
      return 0;
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5318]++;
  return 1;
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][5339]++;
  this.fnDeleteRow = function(mTarget, fnCallBack, bRedraw) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][5342]++;
  var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5343]++;
  var i, iLen, iAODataIndex;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5345]++;
  iAODataIndex = (typeof mTarget === 'object') ? _fnNodeToDataIndex(oSettings, mTarget) : mTarget;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5349]++;
  var oData = oSettings.aoData.splice(iAODataIndex, 1);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5352]++;
  for (i = 0 , iLen = oSettings.aoData.length; i < iLen; i++) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5354]++;
    if (oSettings.aoData[i].nTr !== null) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][5356]++;
      oSettings.aoData[i].nTr._DT_RowIndex = i;
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5361]++;
  var iDisplayIndex = $.inArray(iAODataIndex, oSettings.aiDisplay);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5362]++;
  oSettings.asDataSearch.splice(iDisplayIndex, 1);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5365]++;
  _fnDeleteIndex(oSettings.aiDisplayMaster, iAODataIndex);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5366]++;
  _fnDeleteIndex(oSettings.aiDisplay, iAODataIndex);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5369]++;
  if (typeof fnCallBack === "function") {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5371]++;
    fnCallBack.call(this, oSettings, oData);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5375]++;
  if (oSettings._iDisplayStart >= oSettings.fnRecordsDisplay()) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5377]++;
    oSettings._iDisplayStart -= oSettings._iDisplayLength;
    _$jscoverage['datatable/js/jquery.dataTables.js'][5378]++;
    if (oSettings._iDisplayStart < 0) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][5380]++;
      oSettings._iDisplayStart = 0;
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5384]++;
  if (bRedraw === undefined || bRedraw) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5386]++;
    _fnCalculateEnd(oSettings);
    _$jscoverage['datatable/js/jquery.dataTables.js'][5387]++;
    _fnDraw(oSettings);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5390]++;
  return oData;
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][5407]++;
  this.fnDestroy = function(bRemove) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][5409]++;
  var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5410]++;
  var nOrig = oSettings.nTableWrapper.parentNode;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5411]++;
  var nBody = oSettings.nTBody;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5412]++;
  var i, iLen;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5414]++;
  bRemove = (bRemove === undefined) ? false : bRemove;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5417]++;
  oSettings.bDestroying = true;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5420]++;
  _fnCallbackFire(oSettings, "aoDestroyCallback", "destroy", [oSettings]);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5423]++;
  if (!bRemove) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5425]++;
    for (i = 0 , iLen = oSettings.aoColumns.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][5427]++;
      if (oSettings.aoColumns[i].bVisible === false) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][5429]++;
        this.fnSetColumnVis(i, true);
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5435]++;
  $(oSettings.nTableWrapper).find('*').andSelf().unbind('.DT');
  _$jscoverage['datatable/js/jquery.dataTables.js'][5438]++;
  $('tbody>tr>td.' + oSettings.oClasses.sRowEmpty, oSettings.nTable).parent().remove();
  _$jscoverage['datatable/js/jquery.dataTables.js'][5441]++;
  if (oSettings.nTable != oSettings.nTHead.parentNode) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5443]++;
    $(oSettings.nTable).children('thead').remove();
    _$jscoverage['datatable/js/jquery.dataTables.js'][5444]++;
    oSettings.nTable.appendChild(oSettings.nTHead);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5447]++;
  if (oSettings.nTFoot && oSettings.nTable != oSettings.nTFoot.parentNode) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5449]++;
    $(oSettings.nTable).children('tfoot').remove();
    _$jscoverage['datatable/js/jquery.dataTables.js'][5450]++;
    oSettings.nTable.appendChild(oSettings.nTFoot);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5454]++;
  oSettings.nTable.parentNode.removeChild(oSettings.nTable);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5455]++;
  $(oSettings.nTableWrapper).remove();
  _$jscoverage['datatable/js/jquery.dataTables.js'][5457]++;
  oSettings.aaSorting = [];
  _$jscoverage['datatable/js/jquery.dataTables.js'][5458]++;
  oSettings.aaSortingFixed = [];
  _$jscoverage['datatable/js/jquery.dataTables.js'][5459]++;
  _fnSortingClasses(oSettings);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5461]++;
  $(_fnGetTrNodes(oSettings)).removeClass(oSettings.asStripeClasses.join(' '));
  _$jscoverage['datatable/js/jquery.dataTables.js'][5463]++;
  $('th, td', oSettings.nTHead).removeClass([oSettings.oClasses.sSortable, oSettings.oClasses.sSortableAsc, oSettings.oClasses.sSortableDesc, oSettings.oClasses.sSortableNone].join(' '));
  _$jscoverage['datatable/js/jquery.dataTables.js'][5469]++;
  if (oSettings.bJUI) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5472]++;
    $('th span.' + oSettings.oClasses.sSortIcon + ', td span.' + oSettings.oClasses.sSortIcon, oSettings.nTHead).remove();
    _$jscoverage['datatable/js/jquery.dataTables.js'][5474]++;
    $('th, td', oSettings.nTHead).each(function() {
  _$jscoverage['datatable/js/jquery.dataTables.js'][5475]++;
  var jqWrapper = $('div.' + oSettings.oClasses.sSortJUIWrapper, this);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5476]++;
  var kids = jqWrapper.contents();
  _$jscoverage['datatable/js/jquery.dataTables.js'][5477]++;
  $(this).append(kids);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5478]++;
  jqWrapper.remove();
});
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5483]++;
  if (!bRemove && oSettings.nTableReinsertBefore) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5485]++;
    nOrig.insertBefore(oSettings.nTable, oSettings.nTableReinsertBefore);
  } else {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5487]++;
    if (!bRemove) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][5489]++;
      nOrig.appendChild(oSettings.nTable);
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5492]++;
  for (i = 0 , iLen = oSettings.aoData.length; i < iLen; i++) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5494]++;
    if (oSettings.aoData[i].nTr !== null) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][5496]++;
      nBody.appendChild(oSettings.aoData[i].nTr);
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5501]++;
  if (oSettings.oFeatures.bAutoWidth === true) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5503]++;
    oSettings.nTable.style.width = _fnStringToCss(oSettings.sDestroyWidth);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5510]++;
  iLen = oSettings.asDestroyStripes.length;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5511]++;
  if (iLen) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5513]++;
    var anRows = $(nBody).children('tr');
    _$jscoverage['datatable/js/jquery.dataTables.js'][5514]++;
    for (i = 0; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][5516]++;
      anRows.filter(':nth-child(' + iLen + 'n + ' + i + ')').addClass(oSettings.asDestroyStripes[i]);
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5521]++;
  for (i = 0 , iLen = DataTable.settings.length; i < iLen; i++) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5523]++;
    if (DataTable.settings[i] == oSettings) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][5525]++;
      DataTable.settings.splice(i, 1);
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5530]++;
  oSettings = null;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5531]++;
  oInit = null;
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][5548]++;
  this.fnDraw = function(bComplete) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][5550]++;
  var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5551]++;
  if (bComplete === false) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5553]++;
    _fnCalculateEnd(oSettings);
    _$jscoverage['datatable/js/jquery.dataTables.js'][5554]++;
    _fnDraw(oSettings);
  } else {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5558]++;
    _fnReDraw(oSettings);
  }
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][5581]++;
  this.fnFilter = function(sInput, iColumn, bRegex, bSmart, bShowGlobal, bCaseInsensitive) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][5583]++;
  var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5585]++;
  if (!oSettings.oFeatures.bFilter) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5587]++;
    return;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5590]++;
  if (bRegex === undefined || bRegex === null) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5592]++;
    bRegex = false;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5595]++;
  if (bSmart === undefined || bSmart === null) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5597]++;
    bSmart = true;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5600]++;
  if (bShowGlobal === undefined || bShowGlobal === null) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5602]++;
    bShowGlobal = true;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5605]++;
  if (bCaseInsensitive === undefined || bCaseInsensitive === null) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5607]++;
    bCaseInsensitive = true;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5610]++;
  if (iColumn === undefined || iColumn === null) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5613]++;
    _fnFilterComplete(oSettings, {
  "sSearch": sInput + "", 
  "bRegex": bRegex, 
  "bSmart": bSmart, 
  "bCaseInsensitive": bCaseInsensitive}, 1);
    _$jscoverage['datatable/js/jquery.dataTables.js'][5620]++;
    if (bShowGlobal && oSettings.aanFeatures.f) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][5622]++;
      var n = oSettings.aanFeatures.f;
      _$jscoverage['datatable/js/jquery.dataTables.js'][5623]++;
      for (var i = 0, iLen = n.length; i < iLen; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][5627]++;
        try {
          _$jscoverage['datatable/js/jquery.dataTables.js'][5628]++;
          if (n[i]._DT_Input != document.activeElement) {
            _$jscoverage['datatable/js/jquery.dataTables.js'][5630]++;
            $(n[i]._DT_Input).val(sInput);
          }
        }        catch (e) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][5634]++;
  $(n[i]._DT_Input).val(sInput);
}
      }
    }
  } else {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5642]++;
    $.extend(oSettings.aoPreSearchCols[iColumn], {
  "sSearch": sInput + "", 
  "bRegex": bRegex, 
  "bSmart": bSmart, 
  "bCaseInsensitive": bCaseInsensitive});
    _$jscoverage['datatable/js/jquery.dataTables.js'][5648]++;
    _fnFilterComplete(oSettings, oSettings.oPreviousSearch, 1);
  }
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][5689]++;
  this.fnGetData = function(mRow, iCol) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][5691]++;
  var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5693]++;
  if (mRow !== undefined) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5695]++;
    var iRow = mRow;
    _$jscoverage['datatable/js/jquery.dataTables.js'][5696]++;
    if (typeof mRow === 'object') {
      _$jscoverage['datatable/js/jquery.dataTables.js'][5698]++;
      var sNode = mRow.nodeName.toLowerCase();
      _$jscoverage['datatable/js/jquery.dataTables.js'][5699]++;
      if (sNode === "tr") {
        _$jscoverage['datatable/js/jquery.dataTables.js'][5701]++;
        iRow = _fnNodeToDataIndex(oSettings, mRow);
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][5703]++;
        if (sNode === "td") {
          _$jscoverage['datatable/js/jquery.dataTables.js'][5705]++;
          iRow = _fnNodeToDataIndex(oSettings, mRow.parentNode);
          _$jscoverage['datatable/js/jquery.dataTables.js'][5706]++;
          iCol = _fnNodeToColumnIndex(oSettings, iRow, mRow);
        }
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][5710]++;
    if (iCol !== undefined) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][5712]++;
      return _fnGetCellData(oSettings, iRow, iCol, '');
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][5714]++;
    return (oSettings.aoData[iRow] !== undefined) ? oSettings.aoData[iRow]._aData : null;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5717]++;
  return _fnGetDataMaster(oSettings);
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][5738]++;
  this.fnGetNodes = function(iRow) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][5740]++;
  var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5742]++;
  if (iRow !== undefined) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5743]++;
    return (oSettings.aoData[iRow] !== undefined) ? oSettings.aoData[iRow].nTr : null;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5746]++;
  return _fnGetTrNodes(oSettings);
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][5777]++;
  this.fnGetPosition = function(nNode) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][5779]++;
  var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5780]++;
  var sNodeName = nNode.nodeName.toUpperCase();
  _$jscoverage['datatable/js/jquery.dataTables.js'][5782]++;
  if (sNodeName == "TR") {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5784]++;
    return _fnNodeToDataIndex(oSettings, nNode);
  } else {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5786]++;
    if (sNodeName == "TD" || sNodeName == "TH") {
      _$jscoverage['datatable/js/jquery.dataTables.js'][5788]++;
      var iDataIndex = _fnNodeToDataIndex(oSettings, nNode.parentNode);
      _$jscoverage['datatable/js/jquery.dataTables.js'][5789]++;
      var iColumnIndex = _fnNodeToColumnIndex(oSettings, iDataIndex, nNode);
      _$jscoverage['datatable/js/jquery.dataTables.js'][5790]++;
      return [iDataIndex, _fnColumnIndexToVisible(oSettings, iColumnIndex), iColumnIndex];
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5792]++;
  return null;
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][5818]++;
  this.fnIsOpen = function(nTr) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][5820]++;
  var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5821]++;
  var aoOpenRows = oSettings.aoOpenRows;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5823]++;
  for (var i = 0; i < oSettings.aoOpenRows.length; i++) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5825]++;
    if (oSettings.aoOpenRows[i].nParent == nTr) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][5827]++;
      return true;
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5830]++;
  return false;
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][5863]++;
  this.fnOpen = function(nTr, mHtml, sClass) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][5866]++;
  var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5869]++;
  var nTableRows = _fnGetTrNodes(oSettings);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5870]++;
  if ($.inArray(nTr, nTableRows) === -1) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5872]++;
    return;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5876]++;
  this.fnClose(nTr);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5878]++;
  var nNewRow = document.createElement("tr");
  _$jscoverage['datatable/js/jquery.dataTables.js'][5879]++;
  var nNewCell = document.createElement("td");
  _$jscoverage['datatable/js/jquery.dataTables.js'][5880]++;
  nNewRow.appendChild(nNewCell);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5881]++;
  nNewCell.className = sClass;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5882]++;
  nNewCell.colSpan = _fnVisbleColumns(oSettings);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5884]++;
  if (typeof mHtml === "string") {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5886]++;
    nNewCell.innerHTML = mHtml;
  } else {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5890]++;
    $(nNewCell).html(mHtml);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5894]++;
  var nTrs = $('tr', oSettings.nTBody);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5895]++;
  if ($.inArray(nTr, nTrs) != -1) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5897]++;
    $(nNewRow).insertAfter(nTr);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5900]++;
  oSettings.aoOpenRows.push({
  "nTr": nNewRow, 
  "nParent": nTr});
  _$jscoverage['datatable/js/jquery.dataTables.js'][5905]++;
  return nNewRow;
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][5924]++;
  this.fnPageChange = function(mAction, bRedraw) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][5926]++;
  var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5927]++;
  _fnPageChange(oSettings, mAction);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5928]++;
  _fnCalculateEnd(oSettings);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5930]++;
  if (bRedraw === undefined || bRedraw) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5932]++;
    _fnDraw(oSettings);
  }
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][5952]++;
  this.fnSetColumnVis = function(iCol, bShow, bRedraw) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][5954]++;
  var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
  _$jscoverage['datatable/js/jquery.dataTables.js'][5955]++;
  var i, iLen;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5956]++;
  var aoColumns = oSettings.aoColumns;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5957]++;
  var aoData = oSettings.aoData;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5958]++;
  var nTd, bAppend, iBefore;
  _$jscoverage['datatable/js/jquery.dataTables.js'][5961]++;
  if (aoColumns[iCol].bVisible == bShow) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5963]++;
    return;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][5967]++;
  if (bShow) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][5969]++;
    var iInsert = 0;
    _$jscoverage['datatable/js/jquery.dataTables.js'][5970]++;
    for (i = 0; i < iCol; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][5972]++;
      if (aoColumns[i].bVisible) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][5974]++;
        iInsert++;
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][5979]++;
    bAppend = (iInsert >= _fnVisbleColumns(oSettings));
    _$jscoverage['datatable/js/jquery.dataTables.js'][5982]++;
    if (!bAppend) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][5984]++;
      for (i = iCol; i < aoColumns.length; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][5986]++;
        if (aoColumns[i].bVisible) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][5988]++;
          iBefore = i;
          _$jscoverage['datatable/js/jquery.dataTables.js'][5989]++;
          break;
        }
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][5994]++;
    for (i = 0 , iLen = aoData.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][5996]++;
      if (aoData[i].nTr !== null) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][5998]++;
        if (bAppend) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][6000]++;
          aoData[i].nTr.appendChild(aoData[i]._anHidden[iCol]);
        } else {
          _$jscoverage['datatable/js/jquery.dataTables.js'][6006]++;
          aoData[i].nTr.insertBefore(aoData[i]._anHidden[iCol], _fnGetTdNodes(oSettings, i)[iBefore]);
        }
      }
    }
  } else {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6016]++;
    for (i = 0 , iLen = aoData.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][6018]++;
      if (aoData[i].nTr !== null) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][6020]++;
        nTd = _fnGetTdNodes(oSettings, i)[iCol];
        _$jscoverage['datatable/js/jquery.dataTables.js'][6021]++;
        aoData[i]._anHidden[iCol] = nTd;
        _$jscoverage['datatable/js/jquery.dataTables.js'][6022]++;
        nTd.parentNode.removeChild(nTd);
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6028]++;
  aoColumns[iCol].bVisible = bShow;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6031]++;
  _fnDrawHead(oSettings, oSettings.aoHeader);
  _$jscoverage['datatable/js/jquery.dataTables.js'][6032]++;
  if (oSettings.nTFoot) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6034]++;
    _fnDrawHead(oSettings, oSettings.aoFooter);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6038]++;
  for (i = 0 , iLen = oSettings.aoOpenRows.length; i < iLen; i++) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6040]++;
    oSettings.aoOpenRows[i].nTr.colSpan = _fnVisbleColumns(oSettings);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6046]++;
  if (bRedraw === undefined || bRedraw) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6048]++;
    _fnAdjustColumnSizing(oSettings);
    _$jscoverage['datatable/js/jquery.dataTables.js'][6049]++;
    _fnDraw(oSettings);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6052]++;
  _fnSaveState(oSettings);
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][6071]++;
  this.fnSettings = function() {
  _$jscoverage['datatable/js/jquery.dataTables.js'][6073]++;
  return _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][6091]++;
  this.fnSort = function(aaSort) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][6093]++;
  var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
  _$jscoverage['datatable/js/jquery.dataTables.js'][6094]++;
  oSettings.aaSorting = aaSort;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6095]++;
  _fnSort(oSettings);
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][6114]++;
  this.fnSortListener = function(nNode, iColumn, fnCallback) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][6116]++;
  _fnSortAttachListener(_fnSettingsFromNode(this[DataTable.ext.iApiIndex]), nNode, iColumn, fnCallback);
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][6141]++;
  this.fnUpdate = function(mData, mRow, iColumn, bRedraw, bAction) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][6143]++;
  var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
  _$jscoverage['datatable/js/jquery.dataTables.js'][6144]++;
  var i, iLen, sDisplay;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6145]++;
  var iRow = (typeof mRow === 'object') ? _fnNodeToDataIndex(oSettings, mRow) : mRow;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6148]++;
  if ($.isArray(mData) && iColumn === undefined) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6151]++;
    oSettings.aoData[iRow]._aData = mData.slice();
    _$jscoverage['datatable/js/jquery.dataTables.js'][6154]++;
    for (i = 0; i < oSettings.aoColumns.length; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][6156]++;
      this.fnUpdate(_fnGetCellData(oSettings, iRow, i), iRow, i, false, false);
    }
  } else {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6159]++;
    if ($.isPlainObject(mData) && iColumn === undefined) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][6162]++;
      oSettings.aoData[iRow]._aData = $.extend(true, {}, mData);
      _$jscoverage['datatable/js/jquery.dataTables.js'][6164]++;
      for (i = 0; i < oSettings.aoColumns.length; i++) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][6166]++;
        this.fnUpdate(_fnGetCellData(oSettings, iRow, i), iRow, i, false, false);
      }
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][6172]++;
      _fnSetCellData(oSettings, iRow, iColumn, mData);
      _$jscoverage['datatable/js/jquery.dataTables.js'][6173]++;
      sDisplay = _fnGetCellData(oSettings, iRow, iColumn, 'display');
      _$jscoverage['datatable/js/jquery.dataTables.js'][6175]++;
      var oCol = oSettings.aoColumns[iColumn];
      _$jscoverage['datatable/js/jquery.dataTables.js'][6176]++;
      if (oCol.fnRender !== null) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][6178]++;
        sDisplay = _fnRender(oSettings, iRow, iColumn);
        _$jscoverage['datatable/js/jquery.dataTables.js'][6179]++;
        if (oCol.bUseRendered) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][6181]++;
          _fnSetCellData(oSettings, iRow, iColumn, sDisplay);
        }
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][6185]++;
      if (oSettings.aoData[iRow].nTr !== null) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][6188]++;
        _fnGetTdNodes(oSettings, iRow)[iColumn].innerHTML = sDisplay;
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6195]++;
  var iDisplayIndex = $.inArray(iRow, oSettings.aiDisplay);
  _$jscoverage['datatable/js/jquery.dataTables.js'][6196]++;
  oSettings.asDataSearch[iDisplayIndex] = _fnBuildSearchRow(oSettings, _fnGetRowData(oSettings, iRow, 'filter', _fnGetColumns(oSettings, 'bSearchable')));
  _$jscoverage['datatable/js/jquery.dataTables.js'][6202]++;
  if (bAction === undefined || bAction) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6204]++;
    _fnAdjustColumnSizing(oSettings);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6208]++;
  if (bRedraw === undefined || bRedraw) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6210]++;
    _fnReDraw(oSettings);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6212]++;
  return 0;
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][6232]++;
  this.fnVersionCheck = DataTable.ext.fnVersionCheck;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6247]++;
  function _fnExternApiFunc(sFunc) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6249]++;
    return function() {
  _$jscoverage['datatable/js/jquery.dataTables.js'][6250]++;
  var aArgs = [_fnSettingsFromNode(this[DataTable.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
  _$jscoverage['datatable/js/jquery.dataTables.js'][6252]++;
  return DataTable.ext.oApi[sFunc].apply(this, aArgs);
};
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6264]++;
  this.oApi = {
  "_fnExternApiFunc": _fnExternApiFunc, 
  "_fnInitialise": _fnInitialise, 
  "_fnInitComplete": _fnInitComplete, 
  "_fnLanguageCompat": _fnLanguageCompat, 
  "_fnAddColumn": _fnAddColumn, 
  "_fnColumnOptions": _fnColumnOptions, 
  "_fnAddData": _fnAddData, 
  "_fnCreateTr": _fnCreateTr, 
  "_fnGatherData": _fnGatherData, 
  "_fnBuildHead": _fnBuildHead, 
  "_fnDrawHead": _fnDrawHead, 
  "_fnDraw": _fnDraw, 
  "_fnReDraw": _fnReDraw, 
  "_fnAjaxUpdate": _fnAjaxUpdate, 
  "_fnAjaxParameters": _fnAjaxParameters, 
  "_fnAjaxUpdateDraw": _fnAjaxUpdateDraw, 
  "_fnServerParams": _fnServerParams, 
  "_fnAddOptionsHtml": _fnAddOptionsHtml, 
  "_fnFeatureHtmlTable": _fnFeatureHtmlTable, 
  "_fnScrollDraw": _fnScrollDraw, 
  "_fnAdjustColumnSizing": _fnAdjustColumnSizing, 
  "_fnFeatureHtmlFilter": _fnFeatureHtmlFilter, 
  "_fnFilterComplete": _fnFilterComplete, 
  "_fnFilterCustom": _fnFilterCustom, 
  "_fnFilterColumn": _fnFilterColumn, 
  "_fnFilter": _fnFilter, 
  "_fnBuildSearchArray": _fnBuildSearchArray, 
  "_fnBuildSearchRow": _fnBuildSearchRow, 
  "_fnFilterCreateSearch": _fnFilterCreateSearch, 
  "_fnDataToSearch": _fnDataToSearch, 
  "_fnSort": _fnSort, 
  "_fnSortAttachListener": _fnSortAttachListener, 
  "_fnSortingClasses": _fnSortingClasses, 
  "_fnFeatureHtmlPaginate": _fnFeatureHtmlPaginate, 
  "_fnPageChange": _fnPageChange, 
  "_fnFeatureHtmlInfo": _fnFeatureHtmlInfo, 
  "_fnUpdateInfo": _fnUpdateInfo, 
  "_fnFeatureHtmlLength": _fnFeatureHtmlLength, 
  "_fnFeatureHtmlProcessing": _fnFeatureHtmlProcessing, 
  "_fnProcessingDisplay": _fnProcessingDisplay, 
  "_fnVisibleToColumnIndex": _fnVisibleToColumnIndex, 
  "_fnColumnIndexToVisible": _fnColumnIndexToVisible, 
  "_fnNodeToDataIndex": _fnNodeToDataIndex, 
  "_fnVisbleColumns": _fnVisbleColumns, 
  "_fnCalculateEnd": _fnCalculateEnd, 
  "_fnConvertToWidth": _fnConvertToWidth, 
  "_fnCalculateColumnWidths": _fnCalculateColumnWidths, 
  "_fnScrollingWidthAdjust": _fnScrollingWidthAdjust, 
  "_fnGetWidestNode": _fnGetWidestNode, 
  "_fnGetMaxLenString": _fnGetMaxLenString, 
  "_fnStringToCss": _fnStringToCss, 
  "_fnDetectType": _fnDetectType, 
  "_fnSettingsFromNode": _fnSettingsFromNode, 
  "_fnGetDataMaster": _fnGetDataMaster, 
  "_fnGetTrNodes": _fnGetTrNodes, 
  "_fnGetTdNodes": _fnGetTdNodes, 
  "_fnEscapeRegex": _fnEscapeRegex, 
  "_fnDeleteIndex": _fnDeleteIndex, 
  "_fnReOrderIndex": _fnReOrderIndex, 
  "_fnColumnOrdering": _fnColumnOrdering, 
  "_fnLog": _fnLog, 
  "_fnClearTable": _fnClearTable, 
  "_fnSaveState": _fnSaveState, 
  "_fnLoadState": _fnLoadState, 
  "_fnCreateCookie": _fnCreateCookie, 
  "_fnReadCookie": _fnReadCookie, 
  "_fnDetectHeader": _fnDetectHeader, 
  "_fnGetUniqueThs": _fnGetUniqueThs, 
  "_fnScrollBarWidth": _fnScrollBarWidth, 
  "_fnApplyToChildren": _fnApplyToChildren, 
  "_fnMap": _fnMap, 
  "_fnGetRowData": _fnGetRowData, 
  "_fnGetCellData": _fnGetCellData, 
  "_fnSetCellData": _fnSetCellData, 
  "_fnGetObjectDataFn": _fnGetObjectDataFn, 
  "_fnSetObjectDataFn": _fnSetObjectDataFn, 
  "_fnApplyColumnDefs": _fnApplyColumnDefs, 
  "_fnBindAction": _fnBindAction, 
  "_fnExtend": _fnExtend, 
  "_fnCallbackReg": _fnCallbackReg, 
  "_fnCallbackFire": _fnCallbackFire, 
  "_fnJsonString": _fnJsonString, 
  "_fnRender": _fnRender, 
  "_fnNodeToColumnIndex": _fnNodeToColumnIndex, 
  "_fnInfoMacros": _fnInfoMacros, 
  "_fnBrowserDetect": _fnBrowserDetect, 
  "_fnGetColumns": _fnGetColumns};
  _$jscoverage['datatable/js/jquery.dataTables.js'][6354]++;
  $.extend(DataTable.ext.oApi, this.oApi);
  _$jscoverage['datatable/js/jquery.dataTables.js'][6356]++;
  for (var sFunc in DataTable.ext.oApi) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6358]++;
    if (sFunc) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][6360]++;
      this[sFunc] = _fnExternApiFunc(sFunc);
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6365]++;
  var _that = this;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6366]++;
  this.each(function() {
  _$jscoverage['datatable/js/jquery.dataTables.js'][6367]++;
  var i = 0, iLen, j, jLen, k, kLen;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6368]++;
  var sId = this.getAttribute('id');
  _$jscoverage['datatable/js/jquery.dataTables.js'][6369]++;
  var bInitHandedOff = false;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6370]++;
  var bUsePassedData = false;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6374]++;
  if (this.nodeName.toLowerCase() != 'table') {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6376]++;
    _fnLog(null, 0, "Attempted to initialise DataTables on a node which is not a " + "table: " + this.nodeName);
    _$jscoverage['datatable/js/jquery.dataTables.js'][6378]++;
    return;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6382]++;
  for (i = 0 , iLen = DataTable.settings.length; i < iLen; i++) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6385]++;
    if (DataTable.settings[i].nTable == this) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][6387]++;
      if (oInit === undefined || oInit.bRetrieve) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][6389]++;
        return DataTable.settings[i].oInstance;
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][6391]++;
        if (oInit.bDestroy) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][6393]++;
          DataTable.settings[i].oInstance.fnDestroy();
          _$jscoverage['datatable/js/jquery.dataTables.js'][6394]++;
          break;
        } else {
          _$jscoverage['datatable/js/jquery.dataTables.js'][6398]++;
          _fnLog(DataTable.settings[i], 0, "Cannot reinitialise DataTable.\n\n" + "To retrieve the DataTables object for this table, pass no arguments or see " + "the docs for bRetrieve and bDestroy");
          _$jscoverage['datatable/js/jquery.dataTables.js'][6401]++;
          return;
        }
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][6410]++;
    if (DataTable.settings[i].sTableId == this.id) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][6412]++;
      DataTable.settings.splice(i, 1);
      _$jscoverage['datatable/js/jquery.dataTables.js'][6413]++;
      break;
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6418]++;
  if (sId === null || sId === "") {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6420]++;
    sId = "DataTables_Table_" + (DataTable.ext._oExternConfig.iNextUnique++);
    _$jscoverage['datatable/js/jquery.dataTables.js'][6421]++;
    this.id = sId;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6425]++;
  var oSettings = $.extend(true, {}, DataTable.models.oSettings, {
  "nTable": this, 
  "oApi": _that.oApi, 
  "oInit": oInit, 
  "sDestroyWidth": $(this).width(), 
  "sInstance": sId, 
  "sTableId": sId});
  _$jscoverage['datatable/js/jquery.dataTables.js'][6433]++;
  DataTable.settings.push(oSettings);
  _$jscoverage['datatable/js/jquery.dataTables.js'][6437]++;
  oSettings.oInstance = (_that.length === 1) ? _that : $(this).dataTable();
  _$jscoverage['datatable/js/jquery.dataTables.js'][6440]++;
  if (!oInit) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6442]++;
    oInit = {};
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6446]++;
  if (oInit.oLanguage) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6448]++;
    _fnLanguageCompat(oInit.oLanguage);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6451]++;
  oInit = _fnExtend($.extend(true, {}, DataTable.defaults), oInit);
  _$jscoverage['datatable/js/jquery.dataTables.js'][6454]++;
  _fnMap(oSettings.oFeatures, oInit, "bPaginate");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6455]++;
  _fnMap(oSettings.oFeatures, oInit, "bLengthChange");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6456]++;
  _fnMap(oSettings.oFeatures, oInit, "bFilter");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6457]++;
  _fnMap(oSettings.oFeatures, oInit, "bSort");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6458]++;
  _fnMap(oSettings.oFeatures, oInit, "bInfo");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6459]++;
  _fnMap(oSettings.oFeatures, oInit, "bProcessing");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6460]++;
  _fnMap(oSettings.oFeatures, oInit, "bAutoWidth");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6461]++;
  _fnMap(oSettings.oFeatures, oInit, "bSortClasses");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6462]++;
  _fnMap(oSettings.oFeatures, oInit, "bServerSide");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6463]++;
  _fnMap(oSettings.oFeatures, oInit, "bDeferRender");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6464]++;
  _fnMap(oSettings.oScroll, oInit, "sScrollX", "sX");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6465]++;
  _fnMap(oSettings.oScroll, oInit, "sScrollXInner", "sXInner");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6466]++;
  _fnMap(oSettings.oScroll, oInit, "sScrollY", "sY");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6467]++;
  _fnMap(oSettings.oScroll, oInit, "bScrollCollapse", "bCollapse");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6468]++;
  _fnMap(oSettings.oScroll, oInit, "bScrollInfinite", "bInfinite");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6469]++;
  _fnMap(oSettings.oScroll, oInit, "iScrollLoadGap", "iLoadGap");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6470]++;
  _fnMap(oSettings.oScroll, oInit, "bScrollAutoCss", "bAutoCss");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6471]++;
  _fnMap(oSettings, oInit, "asStripeClasses");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6472]++;
  _fnMap(oSettings, oInit, "asStripClasses", "asStripeClasses");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6473]++;
  _fnMap(oSettings, oInit, "fnServerData");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6474]++;
  _fnMap(oSettings, oInit, "fnFormatNumber");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6475]++;
  _fnMap(oSettings, oInit, "sServerMethod");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6476]++;
  _fnMap(oSettings, oInit, "aaSorting");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6477]++;
  _fnMap(oSettings, oInit, "aaSortingFixed");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6478]++;
  _fnMap(oSettings, oInit, "aLengthMenu");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6479]++;
  _fnMap(oSettings, oInit, "sPaginationType");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6480]++;
  _fnMap(oSettings, oInit, "sAjaxSource");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6481]++;
  _fnMap(oSettings, oInit, "sAjaxDataProp");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6482]++;
  _fnMap(oSettings, oInit, "iCookieDuration");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6483]++;
  _fnMap(oSettings, oInit, "sCookiePrefix");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6484]++;
  _fnMap(oSettings, oInit, "sDom");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6485]++;
  _fnMap(oSettings, oInit, "bSortCellsTop");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6486]++;
  _fnMap(oSettings, oInit, "iTabIndex");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6487]++;
  _fnMap(oSettings, oInit, "oSearch", "oPreviousSearch");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6488]++;
  _fnMap(oSettings, oInit, "aoSearchCols", "aoPreSearchCols");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6489]++;
  _fnMap(oSettings, oInit, "iDisplayLength", "_iDisplayLength");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6490]++;
  _fnMap(oSettings, oInit, "bJQueryUI", "bJUI");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6491]++;
  _fnMap(oSettings, oInit, "fnCookieCallback");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6492]++;
  _fnMap(oSettings, oInit, "fnStateLoad");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6493]++;
  _fnMap(oSettings, oInit, "fnStateSave");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6494]++;
  _fnMap(oSettings.oLanguage, oInit, "fnInfoCallback");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6497]++;
  _fnCallbackReg(oSettings, 'aoDrawCallback', oInit.fnDrawCallback, 'user');
  _$jscoverage['datatable/js/jquery.dataTables.js'][6498]++;
  _fnCallbackReg(oSettings, 'aoServerParams', oInit.fnServerParams, 'user');
  _$jscoverage['datatable/js/jquery.dataTables.js'][6499]++;
  _fnCallbackReg(oSettings, 'aoStateSaveParams', oInit.fnStateSaveParams, 'user');
  _$jscoverage['datatable/js/jquery.dataTables.js'][6500]++;
  _fnCallbackReg(oSettings, 'aoStateLoadParams', oInit.fnStateLoadParams, 'user');
  _$jscoverage['datatable/js/jquery.dataTables.js'][6501]++;
  _fnCallbackReg(oSettings, 'aoStateLoaded', oInit.fnStateLoaded, 'user');
  _$jscoverage['datatable/js/jquery.dataTables.js'][6502]++;
  _fnCallbackReg(oSettings, 'aoRowCallback', oInit.fnRowCallback, 'user');
  _$jscoverage['datatable/js/jquery.dataTables.js'][6503]++;
  _fnCallbackReg(oSettings, 'aoRowCreatedCallback', oInit.fnCreatedRow, 'user');
  _$jscoverage['datatable/js/jquery.dataTables.js'][6504]++;
  _fnCallbackReg(oSettings, 'aoHeaderCallback', oInit.fnHeaderCallback, 'user');
  _$jscoverage['datatable/js/jquery.dataTables.js'][6505]++;
  _fnCallbackReg(oSettings, 'aoFooterCallback', oInit.fnFooterCallback, 'user');
  _$jscoverage['datatable/js/jquery.dataTables.js'][6506]++;
  _fnCallbackReg(oSettings, 'aoInitComplete', oInit.fnInitComplete, 'user');
  _$jscoverage['datatable/js/jquery.dataTables.js'][6507]++;
  _fnCallbackReg(oSettings, 'aoPreDrawCallback', oInit.fnPreDrawCallback, 'user');
  _$jscoverage['datatable/js/jquery.dataTables.js'][6509]++;
  if (oSettings.oFeatures.bServerSide && oSettings.oFeatures.bSort && oSettings.oFeatures.bSortClasses) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6515]++;
    _fnCallbackReg(oSettings, 'aoDrawCallback', _fnSortingClasses, 'server_side_sort_classes');
  } else {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6517]++;
    if (oSettings.oFeatures.bDeferRender) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][6519]++;
      _fnCallbackReg(oSettings, 'aoDrawCallback', _fnSortingClasses, 'defer_sort_classes');
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6522]++;
  if (oInit.bJQueryUI) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6527]++;
    $.extend(oSettings.oClasses, DataTable.ext.oJUIClasses);
    _$jscoverage['datatable/js/jquery.dataTables.js'][6529]++;
    if (oInit.sDom === DataTable.defaults.sDom && DataTable.defaults.sDom === "lfrtip") {
      _$jscoverage['datatable/js/jquery.dataTables.js'][6532]++;
      oSettings.sDom = '<"H"lfr>t<"F"ip>';
    }
  } else {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6537]++;
    $.extend(oSettings.oClasses, DataTable.ext.oStdClasses);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6539]++;
  $(this).addClass(oSettings.oClasses.sTable);
  _$jscoverage['datatable/js/jquery.dataTables.js'][6542]++;
  if (oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "") {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6544]++;
    oSettings.oScroll.iBarWidth = _fnScrollBarWidth();
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6547]++;
  if (oSettings.iInitDisplayStart === undefined) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6550]++;
    oSettings.iInitDisplayStart = oInit.iDisplayStart;
    _$jscoverage['datatable/js/jquery.dataTables.js'][6551]++;
    oSettings._iDisplayStart = oInit.iDisplayStart;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6555]++;
  if (oInit.bStateSave) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6557]++;
    oSettings.oFeatures.bStateSave = true;
    _$jscoverage['datatable/js/jquery.dataTables.js'][6558]++;
    _fnLoadState(oSettings, oInit);
    _$jscoverage['datatable/js/jquery.dataTables.js'][6559]++;
    _fnCallbackReg(oSettings, 'aoDrawCallback', _fnSaveState, 'state_save');
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6562]++;
  if (oInit.iDeferLoading !== null) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6564]++;
    oSettings.bDeferLoading = true;
    _$jscoverage['datatable/js/jquery.dataTables.js'][6565]++;
    var tmp = $.isArray(oInit.iDeferLoading);
    _$jscoverage['datatable/js/jquery.dataTables.js'][6566]++;
    oSettings._iRecordsDisplay = tmp ? oInit.iDeferLoading[0] : oInit.iDeferLoading;
    _$jscoverage['datatable/js/jquery.dataTables.js'][6567]++;
    oSettings._iRecordsTotal = tmp ? oInit.iDeferLoading[1] : oInit.iDeferLoading;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6570]++;
  if (oInit.aaData !== null) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6572]++;
    bUsePassedData = true;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6576]++;
  if (oInit.oLanguage.sUrl !== "") {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6582]++;
    oSettings.oLanguage.sUrl = oInit.oLanguage.sUrl;
    _$jscoverage['datatable/js/jquery.dataTables.js'][6583]++;
    $.getJSON(oSettings.oLanguage.sUrl, null, function(json) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][6584]++;
  _fnLanguageCompat(json);
  _$jscoverage['datatable/js/jquery.dataTables.js'][6585]++;
  $.extend(true, oSettings.oLanguage, oInit.oLanguage, json);
  _$jscoverage['datatable/js/jquery.dataTables.js'][6586]++;
  _fnInitialise(oSettings);
});
    _$jscoverage['datatable/js/jquery.dataTables.js'][6588]++;
    bInitHandedOff = true;
  } else {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6592]++;
    $.extend(true, oSettings.oLanguage, oInit.oLanguage);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6599]++;
  if (oInit.asStripeClasses === null) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6601]++;
    oSettings.asStripeClasses = [oSettings.oClasses.sStripeOdd, oSettings.oClasses.sStripeEven];
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6608]++;
  iLen = oSettings.asStripeClasses.length;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6609]++;
  oSettings.asDestroyStripes = [];
  _$jscoverage['datatable/js/jquery.dataTables.js'][6610]++;
  if (iLen) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6612]++;
    var bStripeRemove = false;
    _$jscoverage['datatable/js/jquery.dataTables.js'][6613]++;
    var anRows = $(this).children('tbody').children('tr:lt(' + iLen + ')');
    _$jscoverage['datatable/js/jquery.dataTables.js'][6614]++;
    for (i = 0; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][6616]++;
      if (anRows.hasClass(oSettings.asStripeClasses[i])) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][6618]++;
        bStripeRemove = true;
        _$jscoverage['datatable/js/jquery.dataTables.js'][6621]++;
        oSettings.asDestroyStripes.push(oSettings.asStripeClasses[i]);
      }
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][6625]++;
    if (bStripeRemove) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][6627]++;
      anRows.removeClass(oSettings.asStripeClasses.join(' '));
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6635]++;
  var anThs = [];
  _$jscoverage['datatable/js/jquery.dataTables.js'][6636]++;
  var aoColumnsInit;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6637]++;
  var nThead = this.getElementsByTagName('thead');
  _$jscoverage['datatable/js/jquery.dataTables.js'][6638]++;
  if (nThead.length !== 0) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6640]++;
    _fnDetectHeader(oSettings.aoHeader, nThead[0]);
    _$jscoverage['datatable/js/jquery.dataTables.js'][6641]++;
    anThs = _fnGetUniqueThs(oSettings);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6645]++;
  if (oInit.aoColumns === null) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6647]++;
    aoColumnsInit = [];
    _$jscoverage['datatable/js/jquery.dataTables.js'][6648]++;
    for (i = 0 , iLen = anThs.length; i < iLen; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][6650]++;
      aoColumnsInit.push(null);
    }
  } else {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6655]++;
    aoColumnsInit = oInit.aoColumns;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6659]++;
  for (i = 0 , iLen = aoColumnsInit.length; i < iLen; i++) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6662]++;
    if (oInit.saved_aoColumns !== undefined && oInit.saved_aoColumns.length == iLen) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][6664]++;
      if (aoColumnsInit[i] === null) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][6666]++;
        aoColumnsInit[i] = {};
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][6668]++;
      aoColumnsInit[i].bVisible = oInit.saved_aoColumns[i].bVisible;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][6671]++;
    _fnAddColumn(oSettings, anThs ? anThs[i] : null);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6675]++;
  _fnApplyColumnDefs(oSettings, oInit.aoColumnDefs, aoColumnsInit, function(iCol, oDef) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][6676]++;
  _fnColumnOptions(oSettings, iCol, oDef);
});
  _$jscoverage['datatable/js/jquery.dataTables.js'][6684]++;
  for (i = 0 , iLen = oSettings.aaSorting.length; i < iLen; i++) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6686]++;
    if (oSettings.aaSorting[i][0] >= oSettings.aoColumns.length) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][6688]++;
      oSettings.aaSorting[i][0] = 0;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][6690]++;
    var oColumn = oSettings.aoColumns[oSettings.aaSorting[i][0]];
    _$jscoverage['datatable/js/jquery.dataTables.js'][6693]++;
    if (oSettings.aaSorting[i][2] === undefined) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][6695]++;
      oSettings.aaSorting[i][2] = 0;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][6699]++;
    if (oInit.aaSorting === undefined && oSettings.saved_aaSorting === undefined) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][6701]++;
      oSettings.aaSorting[i][1] = oColumn.asSorting[0];
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][6705]++;
    for (j = 0 , jLen = oColumn.asSorting.length; j < jLen; j++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][6707]++;
      if (oSettings.aaSorting[i][1] == oColumn.asSorting[j]) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][6709]++;
        oSettings.aaSorting[i][2] = j;
        _$jscoverage['datatable/js/jquery.dataTables.js'][6710]++;
        break;
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6718]++;
  _fnSortingClasses(oSettings);
  _$jscoverage['datatable/js/jquery.dataTables.js'][6727]++;
  _fnBrowserDetect(oSettings);
  _$jscoverage['datatable/js/jquery.dataTables.js'][6730]++;
  var captions = $(this).children('caption').each(function() {
  _$jscoverage['datatable/js/jquery.dataTables.js'][6731]++;
  this._captionSide = $(this).css('caption-side');
});
  _$jscoverage['datatable/js/jquery.dataTables.js'][6734]++;
  var thead = $(this).children('thead');
  _$jscoverage['datatable/js/jquery.dataTables.js'][6735]++;
  if (thead.length === 0) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6737]++;
    thead = [document.createElement('thead')];
    _$jscoverage['datatable/js/jquery.dataTables.js'][6738]++;
    this.appendChild(thead[0]);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6740]++;
  oSettings.nTHead = thead[0];
  _$jscoverage['datatable/js/jquery.dataTables.js'][6742]++;
  var tbody = $(this).children('tbody');
  _$jscoverage['datatable/js/jquery.dataTables.js'][6743]++;
  if (tbody.length === 0) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6745]++;
    tbody = [document.createElement('tbody')];
    _$jscoverage['datatable/js/jquery.dataTables.js'][6746]++;
    this.appendChild(tbody[0]);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6748]++;
  oSettings.nTBody = tbody[0];
  _$jscoverage['datatable/js/jquery.dataTables.js'][6749]++;
  oSettings.nTBody.setAttribute("role", "alert");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6750]++;
  oSettings.nTBody.setAttribute("aria-live", "polite");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6751]++;
  oSettings.nTBody.setAttribute("aria-relevant", "all");
  _$jscoverage['datatable/js/jquery.dataTables.js'][6753]++;
  var tfoot = $(this).children('tfoot');
  _$jscoverage['datatable/js/jquery.dataTables.js'][6754]++;
  if (tfoot.length === 0 && captions.length > 0 && (oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "")) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6758]++;
    tfoot = [document.createElement('tfoot')];
    _$jscoverage['datatable/js/jquery.dataTables.js'][6759]++;
    this.appendChild(tfoot[0]);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6762]++;
  if (tfoot.length > 0) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6764]++;
    oSettings.nTFoot = tfoot[0];
    _$jscoverage['datatable/js/jquery.dataTables.js'][6765]++;
    _fnDetectHeader(oSettings.aoFooter, oSettings.nTFoot);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6769]++;
  if (bUsePassedData) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6771]++;
    for (i = 0; i < oInit.aaData.length; i++) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][6773]++;
      _fnAddData(oSettings, oInit.aaData[i]);
    }
  } else {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6779]++;
    _fnGatherData(oSettings);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6783]++;
  oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
  _$jscoverage['datatable/js/jquery.dataTables.js'][6786]++;
  oSettings.bInitialised = true;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6791]++;
  if (bInitHandedOff === false) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6793]++;
    _fnInitialise(oSettings);
  }
});
  _$jscoverage['datatable/js/jquery.dataTables.js'][6796]++;
  _that = null;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6797]++;
  return this;
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][6815]++;
  DataTable.fnVersionCheck = function(sVersion) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][6818]++;
  var fnZPad = function(Zpad, count) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][6820]++;
  while (Zpad.length < count) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6821]++;
    Zpad += '0';
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6823]++;
  return Zpad;
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][6825]++;
  var aThis = DataTable.ext.sVersion.split('.');
  _$jscoverage['datatable/js/jquery.dataTables.js'][6826]++;
  var aThat = sVersion.split('.');
  _$jscoverage['datatable/js/jquery.dataTables.js'][6827]++;
  var sThis = '', sThat = '';
  _$jscoverage['datatable/js/jquery.dataTables.js'][6829]++;
  for (var i = 0, iLen = aThat.length; i < iLen; i++) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6831]++;
    sThis += fnZPad(aThis[i], 3);
    _$jscoverage['datatable/js/jquery.dataTables.js'][6832]++;
    sThat += fnZPad(aThat[i], 3);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6835]++;
  return parseInt(sThis, 10) >= parseInt(sThat, 10);
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][6853]++;
  DataTable.fnIsDataTable = function(nTable) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][6855]++;
  var o = DataTable.settings;
  _$jscoverage['datatable/js/jquery.dataTables.js'][6857]++;
  for (var i = 0; i < o.length; i++) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6859]++;
    if (o[i].nTable === nTable || o[i].nScrollHead === nTable || o[i].nScrollFoot === nTable) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][6861]++;
      return true;
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][6865]++;
  return false;
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][6884]++;
  DataTable.fnTables = function(bVisible) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][6886]++;
  var out = [];
  _$jscoverage['datatable/js/jquery.dataTables.js'][6888]++;
  jQuery.each(DataTable.settings, function(i, o) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][6889]++;
  if (!bVisible || (bVisible === true && $(o.nTable).is(':visible'))) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][6891]++;
    out.push(o.nTable);
  }
});
  _$jscoverage['datatable/js/jquery.dataTables.js'][6895]++;
  return out;
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][6907]++;
  DataTable.version = "1.9.4";
  _$jscoverage['datatable/js/jquery.dataTables.js'][6920]++;
  DataTable.settings = [];
  _$jscoverage['datatable/js/jquery.dataTables.js'][6928]++;
  DataTable.models = {};
  _$jscoverage['datatable/js/jquery.dataTables.js'][6941]++;
  DataTable.models.ext = {
  "afnFiltering": [], 
  "afnSortData": [], 
  "aoFeatures": [], 
  "aTypes": [], 
  "fnVersionCheck": DataTable.fnVersionCheck, 
  "iApiIndex": 0, 
  "ofnSearch": {}, 
  "oApi": {}, 
  "oStdClasses": {}, 
  "oJUIClasses": {}, 
  "oPagination": {}, 
  "oSort": {}, 
  "sVersion": DataTable.version, 
  "sErrMode": "alert", 
  "_oExternConfig": {
  "iNextUnique": 0}};
  _$jscoverage['datatable/js/jquery.dataTables.js'][7465]++;
  DataTable.models.oSearch = {
  "bCaseInsensitive": true, 
  "sSearch": "", 
  "bRegex": false, 
  "bSmart": true};
  _$jscoverage['datatable/js/jquery.dataTables.js'][7506]++;
  DataTable.models.oRow = {
  "nTr": null, 
  "_aData": [], 
  "_aSortData": [], 
  "_anHidden": [], 
  "_sRowStripe": ""};
  _$jscoverage['datatable/js/jquery.dataTables.js'][7575]++;
  DataTable.models.oColumn = {
  "aDataSort": null, 
  "asSorting": null, 
  "bSearchable": null, 
  "bSortable": null, 
  "bUseRendered": null, 
  "bVisible": null, 
  "_bAutoType": true, 
  "fnCreatedCell": null, 
  "fnGetData": null, 
  "fnRender": null, 
  "fnSetData": null, 
  "mData": null, 
  "mRender": null, 
  "nTh": null, 
  "nTf": null, 
  "sClass": null, 
  "sContentPadding": null, 
  "sDefaultContent": null, 
  "sName": null, 
  "sSortDataType": 'std', 
  "sSortingClass": null, 
  "sSortingClassJUI": null, 
  "sTitle": null, 
  "sType": null, 
  "sWidth": null, 
  "sWidthOrig": null};
  _$jscoverage['datatable/js/jquery.dataTables.js'][7831]++;
  DataTable.defaults = {
  "aaData": null, 
  "aaSorting": [[0, 'asc']], 
  "aaSortingFixed": null, 
  "aLengthMenu": [10, 25, 50, 100], 
  "aoColumns": null, 
  "aoColumnDefs": null, 
  "aoSearchCols": [], 
  "asStripeClasses": null, 
  "bAutoWidth": true, 
  "bDeferRender": false, 
  "bDestroy": false, 
  "bFilter": true, 
  "bInfo": true, 
  "bJQueryUI": false, 
  "bLengthChange": true, 
  "bPaginate": true, 
  "bProcessing": false, 
  "bRetrieve": false, 
  "bScrollAutoCss": true, 
  "bScrollCollapse": false, 
  "bScrollInfinite": false, 
  "bServerSide": false, 
  "bSort": true, 
  "bSortCellsTop": false, 
  "bSortClasses": true, 
  "bStateSave": false, 
  "fnCookieCallback": null, 
  "fnCreatedRow": null, 
  "fnDrawCallback": null, 
  "fnFooterCallback": null, 
  "fnFormatNumber": function(iIn) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][8554]++;
  if (iIn < 1000) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][8557]++;
    return iIn;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][8560]++;
  var s = (iIn + ""), a = s.split(""), out = "", iLen = s.length;
  _$jscoverage['datatable/js/jquery.dataTables.js'][8562]++;
  for (var i = 0; i < iLen; i++) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][8564]++;
    if (i % 3 === 0 && i !== 0) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][8566]++;
      out = this.oLanguage.sInfoThousands + out;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][8568]++;
    out = a[iLen - i - 1] + out;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][8570]++;
  return out;
}, 
  "fnHeaderCallback": null, 
  "fnInfoCallback": null, 
  "fnInitComplete": null, 
  "fnPreDrawCallback": null, 
  "fnRowCallback": null, 
  "fnServerData": function(sUrl, aoData, fnCallback, oSettings) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][8740]++;
  oSettings.jqXHR = $.ajax({
  "url": sUrl, 
  "data": aoData, 
  "success": function(json) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][8744]++;
  if (json.sError) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][8745]++;
    oSettings.oApi._fnLog(oSettings, 0, json.sError);
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][8748]++;
  $(oSettings.oInstance).trigger('xhr', [oSettings, json]);
  _$jscoverage['datatable/js/jquery.dataTables.js'][8749]++;
  fnCallback(json);
}, 
  "dataType": "json", 
  "cache": false, 
  "type": oSettings.sServerMethod, 
  "error": function(xhr, error, thrown) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][8755]++;
  if (error == "parsererror") {
    _$jscoverage['datatable/js/jquery.dataTables.js'][8756]++;
    oSettings.oApi._fnLog(oSettings, 0, "DataTables warning: JSON data from " + "server could not be parsed. This is caused by a JSON formatting error.");
  }
}});
}, 
  "fnServerParams": null, 
  "fnStateLoad": function(oSettings) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][8830]++;
  var sData = this.oApi._fnReadCookie(oSettings.sCookiePrefix + oSettings.sInstance);
  _$jscoverage['datatable/js/jquery.dataTables.js'][8831]++;
  var oData;
  _$jscoverage['datatable/js/jquery.dataTables.js'][8833]++;
  try {
    _$jscoverage['datatable/js/jquery.dataTables.js'][8834]++;
    oData = (typeof $.parseJSON === 'function') ? $.parseJSON(sData) : eval('(' + sData + ')');
  }  catch (e) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][8837]++;
  oData = null;
}
  _$jscoverage['datatable/js/jquery.dataTables.js'][8840]++;
  return oData;
}, 
  "fnStateLoadParams": null, 
  "fnStateLoaded": null, 
  "fnStateSave": function(oSettings, oData) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][8930]++;
  this.oApi._fnCreateCookie(oSettings.sCookiePrefix + oSettings.sInstance, this.oApi._fnJsonString(oData), oSettings.iCookieDuration, oSettings.sCookiePrefix, oSettings.fnCookieCallback);
}, 
  "fnStateSaveParams": null, 
  "iCookieDuration": 7200, 
  "iDeferLoading": null, 
  "iDisplayLength": 10, 
  "iDisplayStart": 0, 
  "iScrollLoadGap": 100, 
  "iTabIndex": 0, 
  "oLanguage": {
  "oAria": {
  "sSortAscending": ": activate to sort column ascending", 
  "sSortDescending": ": activate to sort column descending"}, 
  "oPaginate": {
  "sFirst": "First", 
  "sLast": "Last", 
  "sNext": "Next", 
  "sPrevious": "Previous"}, 
  "sEmptyTable": "No data available in table", 
  "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries", 
  "sInfoEmpty": "Showing 0 to 0 of 0 entries", 
  "sInfoFiltered": "(filtered from _MAX_ total entries)", 
  "sInfoPostFix": "", 
  "sInfoThousands": ",", 
  "sLengthMenu": "Show _MENU_ entries", 
  "sLoadingRecords": "Loading...", 
  "sProcessing": "Processing...", 
  "sSearch": "Search:", 
  "sUrl": "", 
  "sZeroRecords": "No matching records found"}, 
  "oSearch": $.extend({}, DataTable.models.oSearch), 
  "sAjaxDataProp": "aaData", 
  "sAjaxSource": null, 
  "sCookiePrefix": "SpryMedia_DataTables_", 
  "sDom": "lfrtip", 
  "sPaginationType": "two_button", 
  "sScrollX": "", 
  "sScrollXInner": "", 
  "sScrollY": "", 
  "sServerMethod": "GET"};
  _$jscoverage['datatable/js/jquery.dataTables.js'][9782]++;
  DataTable.defaults.columns = {
  "aDataSort": null, 
  "asSorting": ['asc', 'desc'], 
  "bSearchable": true, 
  "bSortable": true, 
  "bUseRendered": true, 
  "bVisible": true, 
  "fnCreatedCell": null, 
  "fnRender": null, 
  "iDataSort": -1, 
  "mData": null, 
  "mRender": null, 
  "sCellType": "td", 
  "sClass": "", 
  "sContentPadding": "", 
  "sDefaultContent": null, 
  "sName": "", 
  "sSortDataType": "std", 
  "sTitle": null, 
  "sType": null, 
  "sWidth": null};
  _$jscoverage['datatable/js/jquery.dataTables.js'][10559]++;
  DataTable.models.oSettings = {
  "oFeatures": {
  "bAutoWidth": null, 
  "bDeferRender": null, 
  "bFilter": null, 
  "bInfo": null, 
  "bLengthChange": null, 
  "bPaginate": null, 
  "bProcessing": null, 
  "bServerSide": null, 
  "bSort": null, 
  "bSortClasses": null, 
  "bStateSave": null}, 
  "oScroll": {
  "bAutoCss": null, 
  "bCollapse": null, 
  "bInfinite": null, 
  "iBarWidth": 0, 
  "iLoadGap": null, 
  "sX": null, 
  "sXInner": null, 
  "sY": null}, 
  "oLanguage": {
  "fnInfoCallback": null}, 
  "oBrowser": {
  "bScrollOversize": false}, 
  "aanFeatures": [], 
  "aoData": [], 
  "aiDisplay": [], 
  "aiDisplayMaster": [], 
  "aoColumns": [], 
  "aoHeader": [], 
  "aoFooter": [], 
  "asDataSearch": [], 
  "oPreviousSearch": {}, 
  "aoPreSearchCols": [], 
  "aaSorting": null, 
  "aaSortingFixed": null, 
  "asStripeClasses": null, 
  "asDestroyStripes": [], 
  "sDestroyWidth": 0, 
  "aoRowCallback": [], 
  "aoHeaderCallback": [], 
  "aoFooterCallback": [], 
  "aoDrawCallback": [], 
  "aoRowCreatedCallback": [], 
  "aoPreDrawCallback": [], 
  "aoInitComplete": [], 
  "aoStateSaveParams": [], 
  "aoStateLoadParams": [], 
  "aoStateLoaded": [], 
  "sTableId": "", 
  "nTable": null, 
  "nTHead": null, 
  "nTFoot": null, 
  "nTBody": null, 
  "nTableWrapper": null, 
  "bDeferLoading": false, 
  "bInitialised": false, 
  "aoOpenRows": [], 
  "sDom": null, 
  "sPaginationType": "two_button", 
  "iCookieDuration": 0, 
  "sCookiePrefix": "", 
  "fnCookieCallback": null, 
  "aoStateSave": [], 
  "aoStateLoad": [], 
  "oLoadedState": null, 
  "sAjaxSource": null, 
  "sAjaxDataProp": null, 
  "bAjaxDataGet": true, 
  "jqXHR": null, 
  "fnServerData": null, 
  "aoServerParams": [], 
  "sServerMethod": null, 
  "fnFormatNumber": null, 
  "aLengthMenu": null, 
  "iDraw": 0, 
  "bDrawing": false, 
  "iDrawError": -1, 
  "_iDisplayLength": 10, 
  "_iDisplayStart": 0, 
  "_iDisplayEnd": 10, 
  "_iRecordsTotal": 0, 
  "_iRecordsDisplay": 0, 
  "bJUI": null, 
  "oClasses": {}, 
  "bFiltered": false, 
  "bSorted": false, 
  "bSortCellsTop": null, 
  "oInit": null, 
  "aoDestroyCallback": [], 
  "fnRecordsTotal": function() {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11346]++;
  if (this.oFeatures.bServerSide) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11347]++;
    return parseInt(this._iRecordsTotal, 10);
  } else {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11349]++;
    return this.aiDisplayMaster.length;
  }
}, 
  "fnRecordsDisplay": function() {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11359]++;
  if (this.oFeatures.bServerSide) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11360]++;
    return parseInt(this._iRecordsDisplay, 10);
  } else {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11362]++;
    return this.aiDisplay.length;
  }
}, 
  "fnDisplayEnd": function() {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11373]++;
  if (this.oFeatures.bServerSide) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11374]++;
    if (this.oFeatures.bPaginate === false || this._iDisplayLength == -1) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][11375]++;
      return this._iDisplayStart + this.aiDisplay.length;
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][11377]++;
      return Math.min(this._iDisplayStart + this._iDisplayLength, this._iRecordsDisplay);
    }
  } else {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11381]++;
    return this._iDisplayEnd;
  }
}, 
  "oInstance": null, 
  "sInstance": null, 
  "iTabIndex": 0, 
  "nScrollHead": null, 
  "nScrollFoot": null};
  _$jscoverage['datatable/js/jquery.dataTables.js'][11427]++;
  DataTable.ext = $.extend(true, {}, DataTable.models.ext);
  _$jscoverage['datatable/js/jquery.dataTables.js'][11429]++;
  $.extend(DataTable.ext.oStdClasses, {
  "sTable": "dataTable", 
  "sPagePrevEnabled": "paginate_enabled_previous", 
  "sPagePrevDisabled": "paginate_disabled_previous", 
  "sPageNextEnabled": "paginate_enabled_next", 
  "sPageNextDisabled": "paginate_disabled_next", 
  "sPageJUINext": "", 
  "sPageJUIPrev": "", 
  "sPageButton": "paginate_button", 
  "sPageButtonActive": "paginate_active", 
  "sPageButtonStaticDisabled": "paginate_button paginate_button_disabled", 
  "sPageFirst": "first", 
  "sPagePrevious": "previous", 
  "sPageNext": "next", 
  "sPageLast": "last", 
  "sStripeOdd": "odd", 
  "sStripeEven": "even", 
  "sRowEmpty": "dataTables_empty", 
  "sWrapper": "dataTables_wrapper", 
  "sFilter": "dataTables_filter", 
  "sInfo": "dataTables_info", 
  "sPaging": "dataTables_paginate paging_", 
  "sLength": "dataTables_length", 
  "sProcessing": "dataTables_processing", 
  "sSortAsc": "sorting_asc", 
  "sSortDesc": "sorting_desc", 
  "sSortable": "sorting", 
  "sSortableAsc": "sorting_asc_disabled", 
  "sSortableDesc": "sorting_desc_disabled", 
  "sSortableNone": "sorting_disabled", 
  "sSortColumn": "sorting_", 
  "sSortJUIAsc": "", 
  "sSortJUIDesc": "", 
  "sSortJUI": "", 
  "sSortJUIAscAllowed": "", 
  "sSortJUIDescAllowed": "", 
  "sSortJUIWrapper": "", 
  "sSortIcon": "", 
  "sScrollWrapper": "dataTables_scroll", 
  "sScrollHead": "dataTables_scrollHead", 
  "sScrollHeadInner": "dataTables_scrollHeadInner", 
  "sScrollBody": "dataTables_scrollBody", 
  "sScrollFoot": "dataTables_scrollFoot", 
  "sScrollFootInner": "dataTables_scrollFootInner", 
  "sFooterTH": "", 
  "sJUIHeader": "", 
  "sJUIFooter": ""});
  _$jscoverage['datatable/js/jquery.dataTables.js'][11495]++;
  $.extend(DataTable.ext.oJUIClasses, DataTable.ext.oStdClasses, {
  "sPagePrevEnabled": "fg-button ui-button ui-state-default ui-corner-left", 
  "sPagePrevDisabled": "fg-button ui-button ui-state-default ui-corner-left ui-state-disabled", 
  "sPageNextEnabled": "fg-button ui-button ui-state-default ui-corner-right", 
  "sPageNextDisabled": "fg-button ui-button ui-state-default ui-corner-right ui-state-disabled", 
  "sPageJUINext": "ui-icon ui-icon-circle-arrow-e", 
  "sPageJUIPrev": "ui-icon ui-icon-circle-arrow-w", 
  "sPageButton": "fg-button ui-button ui-state-default", 
  "sPageButtonActive": "fg-button ui-button ui-state-default ui-state-disabled", 
  "sPageButtonStaticDisabled": "fg-button ui-button ui-state-default ui-state-disabled", 
  "sPageFirst": "first ui-corner-tl ui-corner-bl", 
  "sPageLast": "last ui-corner-tr ui-corner-br", 
  "sPaging": "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi " + "ui-buttonset-multi paging_", 
  "sSortAsc": "ui-state-default", 
  "sSortDesc": "ui-state-default", 
  "sSortable": "ui-state-default", 
  "sSortableAsc": "ui-state-default", 
  "sSortableDesc": "ui-state-default", 
  "sSortableNone": "ui-state-default", 
  "sSortJUIAsc": "css_right ui-icon ui-icon-triangle-1-n", 
  "sSortJUIDesc": "css_right ui-icon ui-icon-triangle-1-s", 
  "sSortJUI": "css_right ui-icon ui-icon-carat-2-n-s", 
  "sSortJUIAscAllowed": "css_right ui-icon ui-icon-carat-1-n", 
  "sSortJUIDescAllowed": "css_right ui-icon ui-icon-carat-1-s", 
  "sSortJUIWrapper": "DataTables_sort_wrapper", 
  "sSortIcon": "DataTables_sort_icon", 
  "sScrollHead": "dataTables_scrollHead ui-state-default", 
  "sScrollFoot": "dataTables_scrollFoot ui-state-default", 
  "sFooterTH": "ui-state-default", 
  "sJUIHeader": "fg-toolbar ui-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix", 
  "sJUIFooter": "fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix"});
  _$jscoverage['datatable/js/jquery.dataTables.js'][11545]++;
  $.extend(DataTable.ext.oPagination, {
  "two_button": {
  "fnInit": function(oSettings, nPaging, fnCallbackDraw) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11562]++;
  var oLang = oSettings.oLanguage.oPaginate;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11563]++;
  var oClasses = oSettings.oClasses;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11564]++;
  var fnClickHandler = function(e) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11565]++;
  if (oSettings.oApi._fnPageChange(oSettings, e.data.action)) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11567]++;
    fnCallbackDraw(oSettings);
  }
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][11571]++;
  var sAppend = (!oSettings.bJUI) ? '<a class="' + oSettings.oClasses.sPagePrevDisabled + '" tabindex="' + oSettings.iTabIndex + '" role="button">' + oLang.sPrevious + '</a>' + '<a class="' + oSettings.oClasses.sPageNextDisabled + '" tabindex="' + oSettings.iTabIndex + '" role="button">' + oLang.sNext + '</a>' : '<a class="' + oSettings.oClasses.sPagePrevDisabled + '" tabindex="' + oSettings.iTabIndex + '" role="button"><span class="' + oSettings.oClasses.sPageJUIPrev + '"></span></a>' + '<a class="' + oSettings.oClasses.sPageNextDisabled + '" tabindex="' + oSettings.iTabIndex + '" role="button"><span class="' + oSettings.oClasses.sPageJUINext + '"></span></a>';
  _$jscoverage['datatable/js/jquery.dataTables.js'][11577]++;
  $(nPaging).append(sAppend);
  _$jscoverage['datatable/js/jquery.dataTables.js'][11579]++;
  var els = $('a', nPaging);
  _$jscoverage['datatable/js/jquery.dataTables.js'][11580]++;
  var nPrevious = els[0], nNext = els[1];
  _$jscoverage['datatable/js/jquery.dataTables.js'][11583]++;
  oSettings.oApi._fnBindAction(nPrevious, {
  action: "previous"}, fnClickHandler);
  _$jscoverage['datatable/js/jquery.dataTables.js'][11584]++;
  oSettings.oApi._fnBindAction(nNext, {
  action: "next"}, fnClickHandler);
  _$jscoverage['datatable/js/jquery.dataTables.js'][11587]++;
  if (!oSettings.aanFeatures.p) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11589]++;
    nPaging.id = oSettings.sTableId + '_paginate';
    _$jscoverage['datatable/js/jquery.dataTables.js'][11590]++;
    nPrevious.id = oSettings.sTableId + '_previous';
    _$jscoverage['datatable/js/jquery.dataTables.js'][11591]++;
    nNext.id = oSettings.sTableId + '_next';
    _$jscoverage['datatable/js/jquery.dataTables.js'][11593]++;
    nPrevious.setAttribute('aria-controls', oSettings.sTableId);
    _$jscoverage['datatable/js/jquery.dataTables.js'][11594]++;
    nNext.setAttribute('aria-controls', oSettings.sTableId);
  }
}, 
  "fnUpdate": function(oSettings, fnCallbackDraw) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11607]++;
  if (!oSettings.aanFeatures.p) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11609]++;
    return;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][11612]++;
  var oClasses = oSettings.oClasses;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11613]++;
  var an = oSettings.aanFeatures.p;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11614]++;
  var nNode;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11617]++;
  for (var i = 0, iLen = an.length; i < iLen; i++) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11619]++;
    nNode = an[i].firstChild;
    _$jscoverage['datatable/js/jquery.dataTables.js'][11620]++;
    if (nNode) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][11623]++;
      nNode.className = (oSettings._iDisplayStart === 0) ? oClasses.sPagePrevDisabled : oClasses.sPagePrevEnabled;
      _$jscoverage['datatable/js/jquery.dataTables.js'][11627]++;
      nNode = nNode.nextSibling;
      _$jscoverage['datatable/js/jquery.dataTables.js'][11628]++;
      nNode.className = (oSettings.fnDisplayEnd() == oSettings.fnRecordsDisplay()) ? oClasses.sPageNextDisabled : oClasses.sPageNextEnabled;
    }
  }
}}, 
  "iFullNumbersShowPages": 5, 
  "full_numbers": {
  "fnInit": function(oSettings, nPaging, fnCallbackDraw) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11659]++;
  var oLang = oSettings.oLanguage.oPaginate;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11660]++;
  var oClasses = oSettings.oClasses;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11661]++;
  var fnClickHandler = function(e) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11662]++;
  if (oSettings.oApi._fnPageChange(oSettings, e.data.action)) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11664]++;
    fnCallbackDraw(oSettings);
  }
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][11668]++;
  $(nPaging).append('<a  tabindex="' + oSettings.iTabIndex + '" class="' + oClasses.sPageButton + " " + oClasses.sPageFirst + '">' + oLang.sFirst + '</a>' + '<a  tabindex="' + oSettings.iTabIndex + '" class="' + oClasses.sPageButton + " " + oClasses.sPagePrevious + '">' + oLang.sPrevious + '</a>' + '<span></span>' + '<a tabindex="' + oSettings.iTabIndex + '" class="' + oClasses.sPageButton + " " + oClasses.sPageNext + '">' + oLang.sNext + '</a>' + '<a tabindex="' + oSettings.iTabIndex + '" class="' + oClasses.sPageButton + " " + oClasses.sPageLast + '">' + oLang.sLast + '</a>');
  _$jscoverage['datatable/js/jquery.dataTables.js'][11675]++;
  var els = $('a', nPaging);
  _$jscoverage['datatable/js/jquery.dataTables.js'][11676]++;
  var nFirst = els[0], nPrev = els[1], nNext = els[2], nLast = els[3];
  _$jscoverage['datatable/js/jquery.dataTables.js'][11681]++;
  oSettings.oApi._fnBindAction(nFirst, {
  action: "first"}, fnClickHandler);
  _$jscoverage['datatable/js/jquery.dataTables.js'][11682]++;
  oSettings.oApi._fnBindAction(nPrev, {
  action: "previous"}, fnClickHandler);
  _$jscoverage['datatable/js/jquery.dataTables.js'][11683]++;
  oSettings.oApi._fnBindAction(nNext, {
  action: "next"}, fnClickHandler);
  _$jscoverage['datatable/js/jquery.dataTables.js'][11684]++;
  oSettings.oApi._fnBindAction(nLast, {
  action: "last"}, fnClickHandler);
  _$jscoverage['datatable/js/jquery.dataTables.js'][11687]++;
  if (!oSettings.aanFeatures.p) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11689]++;
    nPaging.id = oSettings.sTableId + '_paginate';
    _$jscoverage['datatable/js/jquery.dataTables.js'][11690]++;
    nFirst.id = oSettings.sTableId + '_first';
    _$jscoverage['datatable/js/jquery.dataTables.js'][11691]++;
    nPrev.id = oSettings.sTableId + '_previous';
    _$jscoverage['datatable/js/jquery.dataTables.js'][11692]++;
    nNext.id = oSettings.sTableId + '_next';
    _$jscoverage['datatable/js/jquery.dataTables.js'][11693]++;
    nLast.id = oSettings.sTableId + '_last';
  }
}, 
  "fnUpdate": function(oSettings, fnCallbackDraw) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11706]++;
  if (!oSettings.aanFeatures.p) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11708]++;
    return;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][11711]++;
  var iPageCount = DataTable.ext.oPagination.iFullNumbersShowPages;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11712]++;
  var iPageCountHalf = Math.floor(iPageCount / 2);
  _$jscoverage['datatable/js/jquery.dataTables.js'][11713]++;
  var iPages = Math.ceil((oSettings.fnRecordsDisplay()) / oSettings._iDisplayLength);
  _$jscoverage['datatable/js/jquery.dataTables.js'][11714]++;
  var iCurrentPage = Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength) + 1;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11715]++;
  var sList = "";
  _$jscoverage['datatable/js/jquery.dataTables.js'][11716]++;
  var iStartButton, iEndButton, i, iLen;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11717]++;
  var oClasses = oSettings.oClasses;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11718]++;
  var anButtons, anStatic, nPaginateList, nNode;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11719]++;
  var an = oSettings.aanFeatures.p;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11720]++;
  var fnBind = function(j) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11721]++;
  oSettings.oApi._fnBindAction(this, {
  "page": j + iStartButton - 1}, function(e) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11723]++;
  oSettings.oApi._fnPageChange(oSettings, e.data.page);
  _$jscoverage['datatable/js/jquery.dataTables.js'][11724]++;
  fnCallbackDraw(oSettings);
  _$jscoverage['datatable/js/jquery.dataTables.js'][11725]++;
  e.preventDefault();
});
};
  _$jscoverage['datatable/js/jquery.dataTables.js'][11730]++;
  if (oSettings._iDisplayLength === -1) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11732]++;
    iStartButton = 1;
    _$jscoverage['datatable/js/jquery.dataTables.js'][11733]++;
    iEndButton = 1;
    _$jscoverage['datatable/js/jquery.dataTables.js'][11734]++;
    iCurrentPage = 1;
  } else {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11736]++;
    if (iPages < iPageCount) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][11738]++;
      iStartButton = 1;
      _$jscoverage['datatable/js/jquery.dataTables.js'][11739]++;
      iEndButton = iPages;
    } else {
      _$jscoverage['datatable/js/jquery.dataTables.js'][11741]++;
      if (iCurrentPage <= iPageCountHalf) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][11743]++;
        iStartButton = 1;
        _$jscoverage['datatable/js/jquery.dataTables.js'][11744]++;
        iEndButton = iPageCount;
      } else {
        _$jscoverage['datatable/js/jquery.dataTables.js'][11746]++;
        if (iCurrentPage >= (iPages - iPageCountHalf)) {
          _$jscoverage['datatable/js/jquery.dataTables.js'][11748]++;
          iStartButton = iPages - iPageCount + 1;
          _$jscoverage['datatable/js/jquery.dataTables.js'][11749]++;
          iEndButton = iPages;
        } else {
          _$jscoverage['datatable/js/jquery.dataTables.js'][11753]++;
          iStartButton = iCurrentPage - Math.ceil(iPageCount / 2) + 1;
          _$jscoverage['datatable/js/jquery.dataTables.js'][11754]++;
          iEndButton = iStartButton + iPageCount - 1;
        }
      }
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][11759]++;
  for (i = iStartButton; i <= iEndButton; i++) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11761]++;
    sList += (iCurrentPage !== i) ? '<a tabindex="' + oSettings.iTabIndex + '" class="' + oClasses.sPageButton + '">' + oSettings.fnFormatNumber(i) + '</a>' : '<a tabindex="' + oSettings.iTabIndex + '" class="' + oClasses.sPageButtonActive + '">' + oSettings.fnFormatNumber(i) + '</a>';
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][11767]++;
  for (i = 0 , iLen = an.length; i < iLen; i++) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11769]++;
    nNode = an[i];
    _$jscoverage['datatable/js/jquery.dataTables.js'][11770]++;
    if (!nNode.hasChildNodes()) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][11772]++;
      continue;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][11778]++;
    $('span:eq(0)', nNode).html(sList).children('a').each(fnBind);
    _$jscoverage['datatable/js/jquery.dataTables.js'][11781]++;
    anButtons = nNode.getElementsByTagName('a');
    _$jscoverage['datatable/js/jquery.dataTables.js'][11782]++;
    anStatic = [anButtons[0], anButtons[1], anButtons[anButtons.length - 2], anButtons[anButtons.length - 1]];
    _$jscoverage['datatable/js/jquery.dataTables.js'][11787]++;
    $(anStatic).removeClass(oClasses.sPageButton + " " + oClasses.sPageButtonActive + " " + oClasses.sPageButtonStaticDisabled);
    _$jscoverage['datatable/js/jquery.dataTables.js'][11788]++;
    $([anStatic[0], anStatic[1]]).addClass((iCurrentPage == 1) ? oClasses.sPageButtonStaticDisabled : oClasses.sPageButton);
    _$jscoverage['datatable/js/jquery.dataTables.js'][11793]++;
    $([anStatic[2], anStatic[3]]).addClass((iPages === 0 || iCurrentPage === iPages || oSettings._iDisplayLength === -1) ? oClasses.sPageButtonStaticDisabled : oClasses.sPageButton);
  }
}}});
  _$jscoverage['datatable/js/jquery.dataTables.js'][11803]++;
  $.extend(DataTable.ext.oSort, {
  "string-pre": function(a) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11809]++;
  if (typeof a != 'string') {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11810]++;
    a = (a !== null && a.toString) ? a.toString() : '';
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][11812]++;
  return a.toLowerCase();
}, 
  "string-asc": function(x, y) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11817]++;
  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
}, 
  "string-desc": function(x, y) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11822]++;
  return ((x < y) ? 1 : ((x > y) ? -1 : 0));
}, 
  "html-pre": function(a) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11831]++;
  return a.replace(/<.*?>/g, "").toLowerCase();
}, 
  "html-asc": function(x, y) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11836]++;
  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
}, 
  "html-desc": function(x, y) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11841]++;
  return ((x < y) ? 1 : ((x > y) ? -1 : 0));
}, 
  "date-pre": function(a) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11850]++;
  var x = Date.parse(a);
  _$jscoverage['datatable/js/jquery.dataTables.js'][11852]++;
  if (isNaN(x) || x === "") {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11854]++;
    x = Date.parse("01/01/1970 00:00:00");
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][11856]++;
  return x;
}, 
  "date-asc": function(x, y) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11861]++;
  return x - y;
}, 
  "date-desc": function(x, y) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11866]++;
  return y - x;
}, 
  "numeric-pre": function(a) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11875]++;
  return (a == "-" || a === "") ? 0 : a * 1;
}, 
  "numeric-asc": function(x, y) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11880]++;
  return x - y;
}, 
  "numeric-desc": function(x, y) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11885]++;
  return y - x;
}});
  _$jscoverage['datatable/js/jquery.dataTables.js'][11890]++;
  $.extend(DataTable.ext.aTypes, [function(sData) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11900]++;
  if (typeof sData === 'number') {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11902]++;
    return 'numeric';
  } else {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11904]++;
    if (typeof sData !== 'string') {
      _$jscoverage['datatable/js/jquery.dataTables.js'][11906]++;
      return null;
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][11909]++;
  var sValidFirstChars = "0123456789-";
  _$jscoverage['datatable/js/jquery.dataTables.js'][11910]++;
  var sValidChars = "0123456789.";
  _$jscoverage['datatable/js/jquery.dataTables.js'][11911]++;
  var Char;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11912]++;
  var bDecimal = false;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11915]++;
  Char = sData.charAt(0);
  _$jscoverage['datatable/js/jquery.dataTables.js'][11916]++;
  if (sValidFirstChars.indexOf(Char) == -1) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11918]++;
    return null;
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][11922]++;
  for (var i = 1; i < sData.length; i++) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11924]++;
    Char = sData.charAt(i);
    _$jscoverage['datatable/js/jquery.dataTables.js'][11925]++;
    if (sValidChars.indexOf(Char) == -1) {
      _$jscoverage['datatable/js/jquery.dataTables.js'][11927]++;
      return null;
    }
    _$jscoverage['datatable/js/jquery.dataTables.js'][11931]++;
    if (Char == ".") {
      _$jscoverage['datatable/js/jquery.dataTables.js'][11933]++;
      if (bDecimal) {
        _$jscoverage['datatable/js/jquery.dataTables.js'][11935]++;
        return null;
      }
      _$jscoverage['datatable/js/jquery.dataTables.js'][11937]++;
      bDecimal = true;
    }
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][11941]++;
  return 'numeric';
}, function(sData) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11952]++;
  var iParse = Date.parse(sData);
  _$jscoverage['datatable/js/jquery.dataTables.js'][11953]++;
  if ((iParse !== null && !isNaN(iParse)) || (typeof sData === 'string' && sData.length === 0)) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11955]++;
    return 'date';
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][11957]++;
  return null;
}, function(sData) {
  _$jscoverage['datatable/js/jquery.dataTables.js'][11968]++;
  if (typeof sData === 'string' && sData.indexOf('<') != -1 && sData.indexOf('>') != -1) {
    _$jscoverage['datatable/js/jquery.dataTables.js'][11970]++;
    return 'html';
  }
  _$jscoverage['datatable/js/jquery.dataTables.js'][11972]++;
  return null;
}]);
  _$jscoverage['datatable/js/jquery.dataTables.js'][11978]++;
  $.fn.DataTable = DataTable;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11979]++;
  $.fn.dataTable = DataTable;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11980]++;
  $.fn.dataTableSettings = DataTable.settings;
  _$jscoverage['datatable/js/jquery.dataTables.js'][11981]++;
  $.fn.dataTableExt = DataTable.ext;
}));
}(window, document));
