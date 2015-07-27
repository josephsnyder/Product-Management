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
if (! _$jscoverage['vista_pkg_dep_content.js']) {
  _$jscoverage['vista_pkg_dep_content.js'] = [];
  _$jscoverage['vista_pkg_dep_content.js'][1] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][3] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][4] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][5] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][6] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][7] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][8] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][9] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][12] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][13] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][14] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][15] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][16] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][17] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][18] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][22] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][23] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][26] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][27] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][28] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][29] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][30] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][33] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][34] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][37] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][38] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][39] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][40] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][41] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][42] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][43] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][47] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][50] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][51] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][52] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][53] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][54] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][57] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][61] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][62] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][63] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][64] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][65] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][66] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][68] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][69] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][70] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][74] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][77] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][78] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][79] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][80] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][81] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][84] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][89] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][90] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][91] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][92] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][93] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][94] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][95] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][97] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][100] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][101] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][105] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][116] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][117] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][118] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][119] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][145] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][146] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][147] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][149] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][167] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][168] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][171] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][172] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][175] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][176] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][179] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][180] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][183] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][184] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][187] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][188] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][189] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][191] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][192] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][194] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][197] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][198] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][199] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][200] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][203] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][206] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][207] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][209] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][212] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][213] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][214] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][215] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][216] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][217] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][218] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][221] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][225] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][228] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][231] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][232] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][233] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][234] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][235] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][236] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][239] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][242] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][243] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][246] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][248] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][249] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][252] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][253] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][254] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][255] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][256] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][257] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][258] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][262] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][263] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][264] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][265] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][267] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][268] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][270] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][271] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][273] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][274] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][276] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][277] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][279] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][280] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][282] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][283] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][285] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][286] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][287] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][288] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][289] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][290] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][291] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][292] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][293] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][296] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][297] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][298] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][299] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][300] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][301] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][302] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][303] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][304] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][306] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][308] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][310] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][311] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][313] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][314] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][317] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][318] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][319] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][320] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][321] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][322] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][323] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][324] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][325] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][328] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][329] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][330] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][331] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][335] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][336] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][337] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][338] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][339] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][340] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][342] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][343] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][344] = 0;
  _$jscoverage['vista_pkg_dep_content.js'][349] = 0;
}
_$jscoverage['vista_pkg_dep_content.js'].source = ["function pkg_dep_main() {","","    var jsonData = [];","    d3.json(\"PackageCategories.json\", function(error, data) {","      var categories = data;","      function getPackageDoxLink(node) {","        var package_link_url = \"http://code.osehra.org/dox/Package_\";","        var doxLinkName = node.name.replace(/ /g, '_').replace(/-/g, '_')","        return package_link_url + doxLinkName + \".html\";","      }","","      function packageHierarchyByGroups(classes) {","        var map = {};","        map[categories.name] = {name: name, children: []};","        function setdata(name, data) {","          var node = map[name];","          if (!node) {","            node = map[name] = data || {name: name, children: []};","          }","        }","","        classes.forEach(function(d) {","          setdata(d.name, d);","        });","","        function setCategory(data) {","          var child_node;","          var name = data.name;","          var node = map[name];","          if (!node) {","            // ignore package that are in categorized but","            // not in the data","            if (data.children !== undefined) {","              node = map[name] = {name: name, children: []};","            }","          }","          if (data.children !== undefined &amp;&amp; data.children) {","            var length = data.children.length;","            for (var i=0; i&lt;length; i++) {","              child_node = setCategory(data.children[i]);","              if (child_node) {","                child_node.parent = node;","                node.children.push(child_node);","              }","            }","          }","          return node;","        }","","        setCategory(categories);","        for (var node_name in map) {","          if (map[node_name].parent === undefined &amp;&amp; node_name !== categories.name) {","            map[node_name].parent = map[categories.name];","            map[categories.name].children.push(map[node_name]);","          }","        }","        return map[categories.name];","      }","","","      function mouseOvered(d) {","        var header1Text = \"Name: \" + d.name + \"&lt;/br&gt; Group: \" + d.parent.name + \"&lt;/br&gt;\";","        $('#header1').html(header1Text);","        if (d.depends) {","          var depends = \"Depends: \" + d.depends.length;","          $('#dependency').html(depends);","        }","        if (d.dependents) {","          var dependents = \"Dependents: \" + d.dependents.length;","          $('#dependents').html(dependents);","        }","        d3.select(\"#toolTip\").style(\"left\", (d3.event.pageX + 40) + \"px\")","                .style(\"top\", (d3.event.pageY + 5) + \"px\")","                .style(\"opacity\", \".9\");","      }","","      function mouseOuted(d) {","        $('#header1').text(\"\");","        $('#dependents').text(\"\");","        $('#dependency').text(\"\");","        d3.select(\"#toolTip\").style(\"opacity\", \"0\");","      }","","      var chart = d3.chart.dependencyedgebundling()","               .packageHierarchy(packageHierarchyByGroups)","               .mouseOvered(mouseOvered)","               .mouseOuted(mouseOuted)","               .nodeTextHyperLink(getPackageDoxLink);","      var localpath = \"pkgdep.json\";","      d3.json(localpath, function(error, classes) {","        jsonData = classes;","        if (error){","          errormsg = \"json error \" + error + \" data: \" + classes;","          document.write(errormsg);","          return;","        }","        classes.sort();","        d3.select('#chart_placeholder')","          .datum(classes)","          .call(chart);","        setupBarChart();","      });","    });","","      var options = {","          chart: {","              type: 'bar'","          },","          title: {","              text: 'VistA Packages Dependencies Chart'","          },","          xAxis: {","            categories: [],","            labels: {","              formatter: function (){","                var package_link_url = \"http://code.osehra.org/dox/\";","                var doxLinkName = this.value.replace(/ /g, '_').replace(/-/g, '_')","                var lnkUrl = package_link_url + \"Package_\" + doxLinkName + \".html\";","                return \"&lt;a href=\\\"\" + lnkUrl + \"\\\"\" + \" target=\\\"_blank\\\"\" + \"&gt;\" + this.value + \"&lt;/a&gt;\";","              },","              useHTML: true,","              enabled: true","            },","          },","          yAxis: {","              min: 0,","              title: {","                  //text: 'Total Number Of Dependencies'","                  text: null","              },","          },","          legend: {","              align: 'right',","              x: -70,","              verticalAlign: 'top',","              y: 20,","              floating: true,","              backgroundColor: (Highcharts.theme &amp;&amp; Highcharts.theme.background2) || 'white',","              borderColor: '#CCC',","              borderWidth: 1,","              shadow: false","          },","          tooltip: {","              formatter: function () {","                  var ttp = '&lt;b&gt;' + this.x + '&lt;/b&gt;&lt;br/&gt;';","                  $.each(this.points, function(){","                    ttp += this.series.name + ': ' + this.y + '&lt;br/&gt;' + '';","                  });","                  return ttp;","              },","              shared: true","          },","          plotOptions: {","              bar: {","                  //stacking: 'normal',","                  dataLabels: {","                      enabled: true","                  }","              }","          },","          credits: {","            enabled: false","          },","          series: []","      };","","      function sortByNoRoutines(one, two) {","        return sortByProp(one, two, \"routines\");","      }","","      function sortByNoFiles(one, two) {","        return sortByProp(one, two, \"files\");","      }","","      function sortByNoFileFields(one, two) {","        return sortByProp(one, two, \"fields\");","      }","","      function sortByNoDepends(one, two) {","        return sortByProp(one, two, \"depends\");","      }","","      function sortByNoDependents(one, two) {","        return sortByProp(one, two, \"dependents\");","      }","","      function sortByName(one, two) {","        if (one.name &gt; two.name) {","          return 1;","        }","        if (one.name &lt; two.name) {","          return -1;","        }","        return 0;","      }","","      function sortByProp(one, two, property) {","        if (property in one &amp;&amp; property in two) {","          if (two[property] instanceof Array) {","            return two[property].length - one[property].length;","          }","          else {","            return two[property] - one[property];","          }","        }","        if (property in one) {","          return -1;","        }","        return 1;","      }","","      function getSeriesByJson(data, property) {","        var totLen = data.length;","        var outSeries = {\"data\":[], \"name\": property};","        for (var idx = 0; idx &lt; totLen; idx++) {","          if (property in data[idx]) {","            if (data[idx][property] instanceof Array) {","              outSeries.data.push(data[idx][property].length);","            }","            else {","              outSeries.data.push(data[idx][property]);","            }","          }","          else {","            outSeries.data.push(0);","          }","        }","        return outSeries;","      }","","      function getJsonCategoriesArray(data) {","        var totLen = data.length;","        var categories = [];","        for (var idx = 0; idx &lt; totLen; idx++) {","          if (data[idx].name &amp;&amp; data[idx].name !== undefined) {","            categories.push(data[idx].name);","          }","        }","        return categories;","      }","","      function setCategoriesByJson(data) {","        options.xAxis.categories = getJsonCategoriesArray(data);","      }","","      function setupBarChart() {","      // read the chart data from json file","        jsonData.sort(sortByNoDepends);","        setCategoriesByJson(jsonData);","        //setSeriesByJson(jsonData, \"routines\");","        //setSeriesByJson(jsonData, \"files\");","        var depData = getSeriesByJson(jsonData,\"depends\");","        depData.color = \"#d62728\";","        options.series.push(depData);","        depData = getSeriesByJson(jsonData,\"dependents\");","        depData.color = \"#2ca02c\";","        options.series.push(depData);","        $('#container').highcharts(options);","      }","","      // utility function for resetting chart data","      function resetChartData(val) {","        var chart = $(\"#container\").highcharts();","        while( chart.series.length &gt; 0 ) {","         chart.series[0].remove( false );","        }","        if (val == 0 || val == 3) {","          jsonData.sort(sortByName);","        }","        else if (val == 1) {","          jsonData.sort(sortByNoDepends);","        }","        else if (val == 2){","          jsonData.sort(sortByNoDependents);","        }","        else if (val == 4){","          jsonData.sort(sortByNoRoutines);","        }","        else if (val == 5){","          jsonData.sort(sortByNoFiles);","        }","        else if (val == 6){","          jsonData.sort(sortByNoFileFields);","        }","        chart.xAxis[0].setCategories(getJsonCategoriesArray(jsonData), false);","        var depData;","        if (val &lt; 3) {","          depData = getSeriesByJson(jsonData,\"depends\");","          depData.color = \"#d62728\";","          chart.addSeries(depData);","          depData = getSeriesByJson(jsonData,\"dependents\");","          depData.color = \"#2ca02c\";","          chart.addSeries(depData);","        }","        else {","          depData = getSeriesByJson(jsonData,\"routines\");","          depData.color = \"#d62728\";","          chart.addSeries(depData);","          depData = getSeriesByJson(jsonData,\"files\");","          depData.color = \"#2ca02c\";","          chart.addSeries(depData);","          depData = getSeriesByJson(jsonData,\"fields\");","          depData.color = \"#3399FF\";","          chart.addSeries(depData);","        }","        chart.redraw();","      }","  $(function () {","","      $(' #list-dep').change(function(e) {","        resetChartData($(this).val());","      });","      $(' #list-stats').change(function(e) {","        resetChartData($(this).val());","      });","","      $(\"input:radio[name='chart-option']\").change(function() {","          var chart = $(\"#container\").highcharts();","          var value = $(this).val();","          console.log(value);","          if (value == 1) {","            $('#frm-dep').hide();","            $('#frm-stats').show();","            chart.setTitle({text: \"VistA Package Statistics\"});","            resetChartData($(\"#list-stats\").val());","          }","          else {","            chart.setTitle({text: \"VistA Package Dependencies\"});","            $('#frm-stats').hide();","            $('#frm-dep').show();","            resetChartData($(\"#list-dep\").val());","          }","      });","","      $(\"input:radio[name='options']\").change(function() {","          var value = $(this).val();","          console.log(value);","          if (value == 1) {","            $('#circular-chart').hide();","            $('#bar-chart').show();","          }","          else if (value == 0) {","            $('#bar-chart').hide();","            $('#circular-chart').show();","          }","      });","","  });","};"];
_$jscoverage['vista_pkg_dep_content.js'][1]++;
function pkg_dep_main() {
  _$jscoverage['vista_pkg_dep_content.js'][3]++;
  var jsonData = [];
  _$jscoverage['vista_pkg_dep_content.js'][4]++;
  d3.json("PackageCategories.json", function(error, data) {
  _$jscoverage['vista_pkg_dep_content.js'][5]++;
  var categories = data;
  _$jscoverage['vista_pkg_dep_content.js'][6]++;
  function getPackageDoxLink(node) {
    _$jscoverage['vista_pkg_dep_content.js'][7]++;
    var package_link_url = "http://code.osehra.org/dox/Package_";
    _$jscoverage['vista_pkg_dep_content.js'][8]++;
    var doxLinkName = node.name.replace(/ /g, '_').replace(/-/g, '_');
    _$jscoverage['vista_pkg_dep_content.js'][9]++;
    return package_link_url + doxLinkName + ".html";
  }
  _$jscoverage['vista_pkg_dep_content.js'][12]++;
  function packageHierarchyByGroups(classes) {
    _$jscoverage['vista_pkg_dep_content.js'][13]++;
    var map = {};
    _$jscoverage['vista_pkg_dep_content.js'][14]++;
    map[categories.name] = {
  name: name, 
  children: []};
    _$jscoverage['vista_pkg_dep_content.js'][15]++;
    function setdata(name, data) {
      _$jscoverage['vista_pkg_dep_content.js'][16]++;
      var node = map[name];
      _$jscoverage['vista_pkg_dep_content.js'][17]++;
      if (!node) {
        _$jscoverage['vista_pkg_dep_content.js'][18]++;
        node = map[name] = data || {
  name: name, 
  children: []};
      }
    }
    _$jscoverage['vista_pkg_dep_content.js'][22]++;
    classes.forEach(function(d) {
  _$jscoverage['vista_pkg_dep_content.js'][23]++;
  setdata(d.name, d);
});
    _$jscoverage['vista_pkg_dep_content.js'][26]++;
    function setCategory(data) {
      _$jscoverage['vista_pkg_dep_content.js'][27]++;
      var child_node;
      _$jscoverage['vista_pkg_dep_content.js'][28]++;
      var name = data.name;
      _$jscoverage['vista_pkg_dep_content.js'][29]++;
      var node = map[name];
      _$jscoverage['vista_pkg_dep_content.js'][30]++;
      if (!node) {
        _$jscoverage['vista_pkg_dep_content.js'][33]++;
        if (data.children !== undefined) {
          _$jscoverage['vista_pkg_dep_content.js'][34]++;
          node = map[name] = {
  name: name, 
  children: []};
        }
      }
      _$jscoverage['vista_pkg_dep_content.js'][37]++;
      if (data.children !== undefined && data.children) {
        _$jscoverage['vista_pkg_dep_content.js'][38]++;
        var length = data.children.length;
        _$jscoverage['vista_pkg_dep_content.js'][39]++;
        for (var i = 0; i < length; i++) {
          _$jscoverage['vista_pkg_dep_content.js'][40]++;
          child_node = setCategory(data.children[i]);
          _$jscoverage['vista_pkg_dep_content.js'][41]++;
          if (child_node) {
            _$jscoverage['vista_pkg_dep_content.js'][42]++;
            child_node.parent = node;
            _$jscoverage['vista_pkg_dep_content.js'][43]++;
            node.children.push(child_node);
          }
        }
      }
      _$jscoverage['vista_pkg_dep_content.js'][47]++;
      return node;
    }
    _$jscoverage['vista_pkg_dep_content.js'][50]++;
    setCategory(categories);
    _$jscoverage['vista_pkg_dep_content.js'][51]++;
    for (var node_name in map) {
      _$jscoverage['vista_pkg_dep_content.js'][52]++;
      if (map[node_name].parent === undefined && node_name !== categories.name) {
        _$jscoverage['vista_pkg_dep_content.js'][53]++;
        map[node_name].parent = map[categories.name];
        _$jscoverage['vista_pkg_dep_content.js'][54]++;
        map[categories.name].children.push(map[node_name]);
      }
    }
    _$jscoverage['vista_pkg_dep_content.js'][57]++;
    return map[categories.name];
  }
  _$jscoverage['vista_pkg_dep_content.js'][61]++;
  function mouseOvered(d) {
    _$jscoverage['vista_pkg_dep_content.js'][62]++;
    var header1Text = "Name: " + d.name + "</br> Group: " + d.parent.name + "</br>";
    _$jscoverage['vista_pkg_dep_content.js'][63]++;
    $('#header1').html(header1Text);
    _$jscoverage['vista_pkg_dep_content.js'][64]++;
    if (d.depends) {
      _$jscoverage['vista_pkg_dep_content.js'][65]++;
      var depends = "Depends: " + d.depends.length;
      _$jscoverage['vista_pkg_dep_content.js'][66]++;
      $('#dependency').html(depends);
    }
    _$jscoverage['vista_pkg_dep_content.js'][68]++;
    if (d.dependents) {
      _$jscoverage['vista_pkg_dep_content.js'][69]++;
      var dependents = "Dependents: " + d.dependents.length;
      _$jscoverage['vista_pkg_dep_content.js'][70]++;
      $('#dependents').html(dependents);
    }
    _$jscoverage['vista_pkg_dep_content.js'][74]++;
    d3.select("#toolTip").style("left", (d3.event.pageX + 40) + "px").style("top", (d3.event.pageY + 5) + "px").style("opacity", ".9");
  }
  _$jscoverage['vista_pkg_dep_content.js'][77]++;
  function mouseOuted(d) {
    _$jscoverage['vista_pkg_dep_content.js'][78]++;
    $('#header1').text("");
    _$jscoverage['vista_pkg_dep_content.js'][79]++;
    $('#dependents').text("");
    _$jscoverage['vista_pkg_dep_content.js'][80]++;
    $('#dependency').text("");
    _$jscoverage['vista_pkg_dep_content.js'][81]++;
    d3.select("#toolTip").style("opacity", "0");
  }
  _$jscoverage['vista_pkg_dep_content.js'][84]++;
  var chart = d3.chart.dependencyedgebundling().packageHierarchy(packageHierarchyByGroups).mouseOvered(mouseOvered).mouseOuted(mouseOuted).nodeTextHyperLink(getPackageDoxLink);
  _$jscoverage['vista_pkg_dep_content.js'][89]++;
  var localpath = "pkgdep.json";
  _$jscoverage['vista_pkg_dep_content.js'][90]++;
  d3.json(localpath, function(error, classes) {
  _$jscoverage['vista_pkg_dep_content.js'][91]++;
  jsonData = classes;
  _$jscoverage['vista_pkg_dep_content.js'][92]++;
  if (error) {
    _$jscoverage['vista_pkg_dep_content.js'][93]++;
    errormsg = "json error " + error + " data: " + classes;
    _$jscoverage['vista_pkg_dep_content.js'][94]++;
    document.write(errormsg);
    _$jscoverage['vista_pkg_dep_content.js'][95]++;
    return;
  }
  _$jscoverage['vista_pkg_dep_content.js'][97]++;
  classes.sort();
  _$jscoverage['vista_pkg_dep_content.js'][100]++;
  d3.select('#chart_placeholder').datum(classes).call(chart);
  _$jscoverage['vista_pkg_dep_content.js'][101]++;
  setupBarChart();
});
});
  _$jscoverage['vista_pkg_dep_content.js'][105]++;
  var options = {
  chart: {
  type: 'bar'}, 
  title: {
  text: 'VistA Packages Dependencies Chart'}, 
  xAxis: {
  categories: [], 
  labels: {
  formatter: function() {
  _$jscoverage['vista_pkg_dep_content.js'][116]++;
  var package_link_url = "http://code.osehra.org/dox/";
  _$jscoverage['vista_pkg_dep_content.js'][117]++;
  var doxLinkName = this.value.replace(/ /g, '_').replace(/-/g, '_');
  _$jscoverage['vista_pkg_dep_content.js'][118]++;
  var lnkUrl = package_link_url + "Package_" + doxLinkName + ".html";
  _$jscoverage['vista_pkg_dep_content.js'][119]++;
  return "<a href=\"" + lnkUrl + "\"" + " target=\"_blank\"" + ">" + this.value + "</a>";
}, 
  useHTML: true, 
  enabled: true}}, 
  yAxis: {
  min: 0, 
  title: {
  text: null}}, 
  legend: {
  align: 'right', 
  x: -70, 
  verticalAlign: 'top', 
  y: 20, 
  floating: true, 
  backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white', 
  borderColor: '#CCC', 
  borderWidth: 1, 
  shadow: false}, 
  tooltip: {
  formatter: function() {
  _$jscoverage['vista_pkg_dep_content.js'][145]++;
  var ttp = '<b>' + this.x + '</b><br/>';
  _$jscoverage['vista_pkg_dep_content.js'][146]++;
  $.each(this.points, function() {
  _$jscoverage['vista_pkg_dep_content.js'][147]++;
  ttp += this.series.name + ': ' + this.y + '<br/>' + '';
});
  _$jscoverage['vista_pkg_dep_content.js'][149]++;
  return ttp;
}, 
  shared: true}, 
  plotOptions: {
  bar: {
  dataLabels: {
  enabled: true}}}, 
  credits: {
  enabled: false}, 
  series: []};
  _$jscoverage['vista_pkg_dep_content.js'][167]++;
  function sortByNoRoutines(one, two) {
    _$jscoverage['vista_pkg_dep_content.js'][168]++;
    return sortByProp(one, two, "routines");
  }
  _$jscoverage['vista_pkg_dep_content.js'][171]++;
  function sortByNoFiles(one, two) {
    _$jscoverage['vista_pkg_dep_content.js'][172]++;
    return sortByProp(one, two, "files");
  }
  _$jscoverage['vista_pkg_dep_content.js'][175]++;
  function sortByNoFileFields(one, two) {
    _$jscoverage['vista_pkg_dep_content.js'][176]++;
    return sortByProp(one, two, "fields");
  }
  _$jscoverage['vista_pkg_dep_content.js'][179]++;
  function sortByNoDepends(one, two) {
    _$jscoverage['vista_pkg_dep_content.js'][180]++;
    return sortByProp(one, two, "depends");
  }
  _$jscoverage['vista_pkg_dep_content.js'][183]++;
  function sortByNoDependents(one, two) {
    _$jscoverage['vista_pkg_dep_content.js'][184]++;
    return sortByProp(one, two, "dependents");
  }
  _$jscoverage['vista_pkg_dep_content.js'][187]++;
  function sortByName(one, two) {
    _$jscoverage['vista_pkg_dep_content.js'][188]++;
    if (one.name > two.name) {
      _$jscoverage['vista_pkg_dep_content.js'][189]++;
      return 1;
    }
    _$jscoverage['vista_pkg_dep_content.js'][191]++;
    if (one.name < two.name) {
      _$jscoverage['vista_pkg_dep_content.js'][192]++;
      return -1;
    }
    _$jscoverage['vista_pkg_dep_content.js'][194]++;
    return 0;
  }
  _$jscoverage['vista_pkg_dep_content.js'][197]++;
  function sortByProp(one, two, property) {
    _$jscoverage['vista_pkg_dep_content.js'][198]++;
    if (property in one && property in two) {
      _$jscoverage['vista_pkg_dep_content.js'][199]++;
      if (two[property] instanceof Array) {
        _$jscoverage['vista_pkg_dep_content.js'][200]++;
        return two[property].length - one[property].length;
      } else {
        _$jscoverage['vista_pkg_dep_content.js'][203]++;
        return two[property] - one[property];
      }
    }
    _$jscoverage['vista_pkg_dep_content.js'][206]++;
    if (property in one) {
      _$jscoverage['vista_pkg_dep_content.js'][207]++;
      return -1;
    }
    _$jscoverage['vista_pkg_dep_content.js'][209]++;
    return 1;
  }
  _$jscoverage['vista_pkg_dep_content.js'][212]++;
  function getSeriesByJson(data, property) {
    _$jscoverage['vista_pkg_dep_content.js'][213]++;
    var totLen = data.length;
    _$jscoverage['vista_pkg_dep_content.js'][214]++;
    var outSeries = {
  "data": [], 
  "name": property};
    _$jscoverage['vista_pkg_dep_content.js'][215]++;
    for (var idx = 0; idx < totLen; idx++) {
      _$jscoverage['vista_pkg_dep_content.js'][216]++;
      if (property in data[idx]) {
        _$jscoverage['vista_pkg_dep_content.js'][217]++;
        if (data[idx][property] instanceof Array) {
          _$jscoverage['vista_pkg_dep_content.js'][218]++;
          outSeries.data.push(data[idx][property].length);
        } else {
          _$jscoverage['vista_pkg_dep_content.js'][221]++;
          outSeries.data.push(data[idx][property]);
        }
      } else {
        _$jscoverage['vista_pkg_dep_content.js'][225]++;
        outSeries.data.push(0);
      }
    }
    _$jscoverage['vista_pkg_dep_content.js'][228]++;
    return outSeries;
  }
  _$jscoverage['vista_pkg_dep_content.js'][231]++;
  function getJsonCategoriesArray(data) {
    _$jscoverage['vista_pkg_dep_content.js'][232]++;
    var totLen = data.length;
    _$jscoverage['vista_pkg_dep_content.js'][233]++;
    var categories = [];
    _$jscoverage['vista_pkg_dep_content.js'][234]++;
    for (var idx = 0; idx < totLen; idx++) {
      _$jscoverage['vista_pkg_dep_content.js'][235]++;
      if (data[idx].name && data[idx].name !== undefined) {
        _$jscoverage['vista_pkg_dep_content.js'][236]++;
        categories.push(data[idx].name);
      }
    }
    _$jscoverage['vista_pkg_dep_content.js'][239]++;
    return categories;
  }
  _$jscoverage['vista_pkg_dep_content.js'][242]++;
  function setCategoriesByJson(data) {
    _$jscoverage['vista_pkg_dep_content.js'][243]++;
    options.xAxis.categories = getJsonCategoriesArray(data);
  }
  _$jscoverage['vista_pkg_dep_content.js'][246]++;
  function setupBarChart() {
    _$jscoverage['vista_pkg_dep_content.js'][248]++;
    jsonData.sort(sortByNoDepends);
    _$jscoverage['vista_pkg_dep_content.js'][249]++;
    setCategoriesByJson(jsonData);
    _$jscoverage['vista_pkg_dep_content.js'][252]++;
    var depData = getSeriesByJson(jsonData, "depends");
    _$jscoverage['vista_pkg_dep_content.js'][253]++;
    depData.color = "#d62728";
    _$jscoverage['vista_pkg_dep_content.js'][254]++;
    options.series.push(depData);
    _$jscoverage['vista_pkg_dep_content.js'][255]++;
    depData = getSeriesByJson(jsonData, "dependents");
    _$jscoverage['vista_pkg_dep_content.js'][256]++;
    depData.color = "#2ca02c";
    _$jscoverage['vista_pkg_dep_content.js'][257]++;
    options.series.push(depData);
    _$jscoverage['vista_pkg_dep_content.js'][258]++;
    $('#container').highcharts(options);
  }
  _$jscoverage['vista_pkg_dep_content.js'][262]++;
  function resetChartData(val) {
    _$jscoverage['vista_pkg_dep_content.js'][263]++;
    var chart = $("#container").highcharts();
    _$jscoverage['vista_pkg_dep_content.js'][264]++;
    while (chart.series.length > 0) {
      _$jscoverage['vista_pkg_dep_content.js'][265]++;
      chart.series[0].remove(false);
    }
    _$jscoverage['vista_pkg_dep_content.js'][267]++;
    if (val == 0 || val == 3) {
      _$jscoverage['vista_pkg_dep_content.js'][268]++;
      jsonData.sort(sortByName);
    } else {
      _$jscoverage['vista_pkg_dep_content.js'][270]++;
      if (val == 1) {
        _$jscoverage['vista_pkg_dep_content.js'][271]++;
        jsonData.sort(sortByNoDepends);
      } else {
        _$jscoverage['vista_pkg_dep_content.js'][273]++;
        if (val == 2) {
          _$jscoverage['vista_pkg_dep_content.js'][274]++;
          jsonData.sort(sortByNoDependents);
        } else {
          _$jscoverage['vista_pkg_dep_content.js'][276]++;
          if (val == 4) {
            _$jscoverage['vista_pkg_dep_content.js'][277]++;
            jsonData.sort(sortByNoRoutines);
          } else {
            _$jscoverage['vista_pkg_dep_content.js'][279]++;
            if (val == 5) {
              _$jscoverage['vista_pkg_dep_content.js'][280]++;
              jsonData.sort(sortByNoFiles);
            } else {
              _$jscoverage['vista_pkg_dep_content.js'][282]++;
              if (val == 6) {
                _$jscoverage['vista_pkg_dep_content.js'][283]++;
                jsonData.sort(sortByNoFileFields);
              }
            }
          }
        }
      }
    }
    _$jscoverage['vista_pkg_dep_content.js'][285]++;
    chart.xAxis[0].setCategories(getJsonCategoriesArray(jsonData), false);
    _$jscoverage['vista_pkg_dep_content.js'][286]++;
    var depData;
    _$jscoverage['vista_pkg_dep_content.js'][287]++;
    if (val < 3) {
      _$jscoverage['vista_pkg_dep_content.js'][288]++;
      depData = getSeriesByJson(jsonData, "depends");
      _$jscoverage['vista_pkg_dep_content.js'][289]++;
      depData.color = "#d62728";
      _$jscoverage['vista_pkg_dep_content.js'][290]++;
      chart.addSeries(depData);
      _$jscoverage['vista_pkg_dep_content.js'][291]++;
      depData = getSeriesByJson(jsonData, "dependents");
      _$jscoverage['vista_pkg_dep_content.js'][292]++;
      depData.color = "#2ca02c";
      _$jscoverage['vista_pkg_dep_content.js'][293]++;
      chart.addSeries(depData);
    } else {
      _$jscoverage['vista_pkg_dep_content.js'][296]++;
      depData = getSeriesByJson(jsonData, "routines");
      _$jscoverage['vista_pkg_dep_content.js'][297]++;
      depData.color = "#d62728";
      _$jscoverage['vista_pkg_dep_content.js'][298]++;
      chart.addSeries(depData);
      _$jscoverage['vista_pkg_dep_content.js'][299]++;
      depData = getSeriesByJson(jsonData, "files");
      _$jscoverage['vista_pkg_dep_content.js'][300]++;
      depData.color = "#2ca02c";
      _$jscoverage['vista_pkg_dep_content.js'][301]++;
      chart.addSeries(depData);
      _$jscoverage['vista_pkg_dep_content.js'][302]++;
      depData = getSeriesByJson(jsonData, "fields");
      _$jscoverage['vista_pkg_dep_content.js'][303]++;
      depData.color = "#3399FF";
      _$jscoverage['vista_pkg_dep_content.js'][304]++;
      chart.addSeries(depData);
    }
    _$jscoverage['vista_pkg_dep_content.js'][306]++;
    chart.redraw();
  }
  _$jscoverage['vista_pkg_dep_content.js'][308]++;
  $(function() {
  _$jscoverage['vista_pkg_dep_content.js'][310]++;
  $(' #list-dep').change(function(e) {
  _$jscoverage['vista_pkg_dep_content.js'][311]++;
  resetChartData($(this).val());
});
  _$jscoverage['vista_pkg_dep_content.js'][313]++;
  $(' #list-stats').change(function(e) {
  _$jscoverage['vista_pkg_dep_content.js'][314]++;
  resetChartData($(this).val());
});
  _$jscoverage['vista_pkg_dep_content.js'][317]++;
  $("input:radio[name='chart-option']").change(function() {
  _$jscoverage['vista_pkg_dep_content.js'][318]++;
  var chart = $("#container").highcharts();
  _$jscoverage['vista_pkg_dep_content.js'][319]++;
  var value = $(this).val();
  _$jscoverage['vista_pkg_dep_content.js'][320]++;
  console.log(value);
  _$jscoverage['vista_pkg_dep_content.js'][321]++;
  if (value == 1) {
    _$jscoverage['vista_pkg_dep_content.js'][322]++;
    $('#frm-dep').hide();
    _$jscoverage['vista_pkg_dep_content.js'][323]++;
    $('#frm-stats').show();
    _$jscoverage['vista_pkg_dep_content.js'][324]++;
    chart.setTitle({
  text: "VistA Package Statistics"});
    _$jscoverage['vista_pkg_dep_content.js'][325]++;
    resetChartData($("#list-stats").val());
  } else {
    _$jscoverage['vista_pkg_dep_content.js'][328]++;
    chart.setTitle({
  text: "VistA Package Dependencies"});
    _$jscoverage['vista_pkg_dep_content.js'][329]++;
    $('#frm-stats').hide();
    _$jscoverage['vista_pkg_dep_content.js'][330]++;
    $('#frm-dep').show();
    _$jscoverage['vista_pkg_dep_content.js'][331]++;
    resetChartData($("#list-dep").val());
  }
});
  _$jscoverage['vista_pkg_dep_content.js'][335]++;
  $("input:radio[name='options']").change(function() {
  _$jscoverage['vista_pkg_dep_content.js'][336]++;
  var value = $(this).val();
  _$jscoverage['vista_pkg_dep_content.js'][337]++;
  console.log(value);
  _$jscoverage['vista_pkg_dep_content.js'][338]++;
  if (value == 1) {
    _$jscoverage['vista_pkg_dep_content.js'][339]++;
    $('#circular-chart').hide();
    _$jscoverage['vista_pkg_dep_content.js'][340]++;
    $('#bar-chart').show();
  } else {
    _$jscoverage['vista_pkg_dep_content.js'][342]++;
    if (value == 0) {
      _$jscoverage['vista_pkg_dep_content.js'][343]++;
      $('#bar-chart').hide();
      _$jscoverage['vista_pkg_dep_content.js'][344]++;
      $('#circular-chart').show();
    }
  }
});
});
}
_$jscoverage['vista_pkg_dep_content.js'][349]++;
;
