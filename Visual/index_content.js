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
if (! _$jscoverage['index_content.js']) {
  _$jscoverage['index_content.js'] = [];
  _$jscoverage['index_content.js'][1] = 0;
  _$jscoverage['index_content.js'][2] = 0;
  _$jscoverage['index_content.js'][7] = 0;
  _$jscoverage['index_content.js'][9] = 0;
  _$jscoverage['index_content.js'][10] = 0;
  _$jscoverage['index_content.js'][11] = 0;
  _$jscoverage['index_content.js'][12] = 0;
  _$jscoverage['index_content.js'][13] = 0;
  _$jscoverage['index_content.js'][30] = 0;
  _$jscoverage['index_content.js'][31] = 0;
  _$jscoverage['index_content.js'][36] = 0;
  _$jscoverage['index_content.js'][40] = 0;
  _$jscoverage['index_content.js'][41] = 0;
  _$jscoverage['index_content.js'][42] = 0;
  _$jscoverage['index_content.js'][45] = 0;
  _$jscoverage['index_content.js'][46] = 0;
  _$jscoverage['index_content.js'][47] = 0;
  _$jscoverage['index_content.js'][50] = 0;
  _$jscoverage['index_content.js'][51] = 0;
  _$jscoverage['index_content.js'][52] = 0;
  _$jscoverage['index_content.js'][55] = 0;
  _$jscoverage['index_content.js'][56] = 0;
  _$jscoverage['index_content.js'][57] = 0;
  _$jscoverage['index_content.js'][61] = 0;
  _$jscoverage['index_content.js'][79] = 0;
  _$jscoverage['index_content.js'][80] = 0;
  _$jscoverage['index_content.js'][81] = 0;
  _$jscoverage['index_content.js'][89] = 0;
  _$jscoverage['index_content.js'][90] = 0;
  _$jscoverage['index_content.js'][91] = 0;
  _$jscoverage['index_content.js'][92] = 0;
  _$jscoverage['index_content.js'][93] = 0;
  _$jscoverage['index_content.js'][94] = 0;
  _$jscoverage['index_content.js'][97] = 0;
  _$jscoverage['index_content.js'][99] = 0;
  _$jscoverage['index_content.js'][100] = 0;
  _$jscoverage['index_content.js'][101] = 0;
  _$jscoverage['index_content.js'][102] = 0;
  _$jscoverage['index_content.js'][104] = 0;
  _$jscoverage['index_content.js'][105] = 0;
  _$jscoverage['index_content.js'][106] = 0;
  _$jscoverage['index_content.js'][107] = 0;
  _$jscoverage['index_content.js'][108] = 0;
  _$jscoverage['index_content.js'][111] = 0;
  _$jscoverage['index_content.js'][117] = 0;
  _$jscoverage['index_content.js'][121] = 0;
  _$jscoverage['index_content.js'][122] = 0;
  _$jscoverage['index_content.js'][123] = 0;
  _$jscoverage['index_content.js'][124] = 0;
  _$jscoverage['index_content.js'][125] = 0;
  _$jscoverage['index_content.js'][126] = 0;
  _$jscoverage['index_content.js'][127] = 0;
  _$jscoverage['index_content.js'][129] = 0;
  _$jscoverage['index_content.js'][130] = 0;
  _$jscoverage['index_content.js'][131] = 0;
  _$jscoverage['index_content.js'][135] = 0;
  _$jscoverage['index_content.js'][137] = 0;
  _$jscoverage['index_content.js'][140] = 0;
  _$jscoverage['index_content.js'][141] = 0;
  _$jscoverage['index_content.js'][142] = 0;
  _$jscoverage['index_content.js'][143] = 0;
  _$jscoverage['index_content.js'][144] = 0;
  _$jscoverage['index_content.js'][147] = 0;
  _$jscoverage['index_content.js'][150] = 0;
  _$jscoverage['index_content.js'][151] = 0;
  _$jscoverage['index_content.js'][152] = 0;
  _$jscoverage['index_content.js'][153] = 0;
  _$jscoverage['index_content.js'][154] = 0;
  _$jscoverage['index_content.js'][156] = 0;
  _$jscoverage['index_content.js'][158] = 0;
  _$jscoverage['index_content.js'][159] = 0;
  _$jscoverage['index_content.js'][160] = 0;
  _$jscoverage['index_content.js'][161] = 0;
  _$jscoverage['index_content.js'][162] = 0;
  _$jscoverage['index_content.js'][164] = 0;
  _$jscoverage['index_content.js'][166] = 0;
  _$jscoverage['index_content.js'][169] = 0;
  _$jscoverage['index_content.js'][170] = 0;
  _$jscoverage['index_content.js'][171] = 0;
  _$jscoverage['index_content.js'][172] = 0;
  _$jscoverage['index_content.js'][174] = 0;
  _$jscoverage['index_content.js'][177] = 0;
  _$jscoverage['index_content.js'][178] = 0;
  _$jscoverage['index_content.js'][179] = 0;
  _$jscoverage['index_content.js'][180] = 0;
  _$jscoverage['index_content.js'][182] = 0;
  _$jscoverage['index_content.js'][185] = 0;
  _$jscoverage['index_content.js'][186] = 0;
  _$jscoverage['index_content.js'][187] = 0;
  _$jscoverage['index_content.js'][188] = 0;
  _$jscoverage['index_content.js'][189] = 0;
  _$jscoverage['index_content.js'][190] = 0;
  _$jscoverage['index_content.js'][191] = 0;
  _$jscoverage['index_content.js'][192] = 0;
  _$jscoverage['index_content.js'][193] = 0;
  _$jscoverage['index_content.js'][194] = 0;
  _$jscoverage['index_content.js'][195] = 0;
  _$jscoverage['index_content.js'][198] = 0;
  _$jscoverage['index_content.js'][199] = 0;
  _$jscoverage['index_content.js'][200] = 0;
  _$jscoverage['index_content.js'][202] = 0;
  _$jscoverage['index_content.js'][203] = 0;
  _$jscoverage['index_content.js'][204] = 0;
  _$jscoverage['index_content.js'][207] = 0;
  _$jscoverage['index_content.js'][208] = 0;
  _$jscoverage['index_content.js'][209] = 0;
  _$jscoverage['index_content.js'][210] = 0;
  _$jscoverage['index_content.js'][211] = 0;
  _$jscoverage['index_content.js'][212] = 0;
  _$jscoverage['index_content.js'][215] = 0;
  _$jscoverage['index_content.js'][216] = 0;
  _$jscoverage['index_content.js'][217] = 0;
  _$jscoverage['index_content.js'][219] = 0;
  _$jscoverage['index_content.js'][220] = 0;
  _$jscoverage['index_content.js'][221] = 0;
  _$jscoverage['index_content.js'][223] = 0;
  _$jscoverage['index_content.js'][225] = 0;
  _$jscoverage['index_content.js'][228] = 0;
  _$jscoverage['index_content.js'][229] = 0;
  _$jscoverage['index_content.js'][230] = 0;
  _$jscoverage['index_content.js'][231] = 0;
  _$jscoverage['index_content.js'][232] = 0;
  _$jscoverage['index_content.js'][233] = 0;
  _$jscoverage['index_content.js'][234] = 0;
  _$jscoverage['index_content.js'][235] = 0;
  _$jscoverage['index_content.js'][237] = 0;
  _$jscoverage['index_content.js'][240] = 0;
  _$jscoverage['index_content.js'][241] = 0;
  _$jscoverage['index_content.js'][242] = 0;
  _$jscoverage['index_content.js'][244] = 0;
  _$jscoverage['index_content.js'][245] = 0;
  _$jscoverage['index_content.js'][246] = 0;
  _$jscoverage['index_content.js'][248] = 0;
  _$jscoverage['index_content.js'][249] = 0;
  _$jscoverage['index_content.js'][250] = 0;
  _$jscoverage['index_content.js'][251] = 0;
  _$jscoverage['index_content.js'][254] = 0;
  _$jscoverage['index_content.js'][257] = 0;
  _$jscoverage['index_content.js'][258] = 0;
  _$jscoverage['index_content.js'][259] = 0;
  _$jscoverage['index_content.js'][262] = 0;
  _$jscoverage['index_content.js'][263] = 0;
  _$jscoverage['index_content.js'][264] = 0;
  _$jscoverage['index_content.js'][265] = 0;
  _$jscoverage['index_content.js'][266] = 0;
  _$jscoverage['index_content.js'][267] = 0;
  _$jscoverage['index_content.js'][271] = 0;
  _$jscoverage['index_content.js'][274] = 0;
  _$jscoverage['index_content.js'][278] = 0;
  _$jscoverage['index_content.js'][279] = 0;
  _$jscoverage['index_content.js'][280] = 0;
  _$jscoverage['index_content.js'][282] = 0;
  _$jscoverage['index_content.js'][283] = 0;
  _$jscoverage['index_content.js'][285] = 0;
  _$jscoverage['index_content.js'][286] = 0;
  _$jscoverage['index_content.js'][289] = 0;
  _$jscoverage['index_content.js'][291] = 0;
  _$jscoverage['index_content.js'][294] = 0;
  _$jscoverage['index_content.js'][297] = 0;
  _$jscoverage['index_content.js'][298] = 0;
  _$jscoverage['index_content.js'][299] = 0;
  _$jscoverage['index_content.js'][305] = 0;
  _$jscoverage['index_content.js'][306] = 0;
  _$jscoverage['index_content.js'][310] = 0;
  _$jscoverage['index_content.js'][312] = 0;
  _$jscoverage['index_content.js'][314] = 0;
  _$jscoverage['index_content.js'][315] = 0;
  _$jscoverage['index_content.js'][316] = 0;
  _$jscoverage['index_content.js'][319] = 0;
  _$jscoverage['index_content.js'][320] = 0;
  _$jscoverage['index_content.js'][321] = 0;
  _$jscoverage['index_content.js'][327] = 0;
  _$jscoverage['index_content.js'][328] = 0;
  _$jscoverage['index_content.js'][331] = 0;
  _$jscoverage['index_content.js'][334] = 0;
  _$jscoverage['index_content.js'][335] = 0;
}
_$jscoverage['index_content.js'].source = ["function index_main() {","  chart = d3.chart.treeview()","                .height(1280)","                .width(1200)","                .margins({top:42, left:180, right:0, bottom:0})","                .textwidth(220);","  $(\"#accordion\").accordion({heightStyle: 'content', collapsible: true}).hide();","","  package_link_url = \"http://code.osehra.org/dox/\";","  toolTip = d3.select(document.getElementById(\"toolTip\"));","  header = d3.select(document.getElementById(\"header1\"));","  selectedIndex = 0;","  distProp = [ // constants to store property of each distribution","    { name: \"All\", color: \"black\", distribution: 'All', doxlink: package_link_url},","    { name: \"OSEHRA\", color: \"#FF0000\", distribution: 'OSEHRA VistA', doxlink: \"http://code.osehra.org/OSEHRA_dox/\"},","    { name: \"VA\", color: \"#3300CC\", distribution: 'VA FOIA VistA' ,doxlink: package_link_url},","    { name: \"DSS\", color: \"#080\", distribution: 'DSS vxVistA' , doxlink: \"http://code.osehra.org/dox_alpha/vxvista/\"}","    /**","    ,{","      name: \"Medsphere\",","      color: \"#FF00FF\"","    },","    {","      name: \"Oroville\",","      color: \"#660000\"","    } **/","  ];","","","  d3.json(\"packages.json\", function(json) {","    resetAllNode(json);","    chart.on(\"node\", \"event\",\"click\", pkgLinkClicked)","       .on(\"node\", \"event\", \"mouseover\", node_onMouseOver)","       .on(\"node\", \"event\",\"mouseout\", node_onMouseOut)","       .on(\"text\", \"attr\", \"cursor\", function(d) {","          return d.hasLink !== undefined &amp;&amp; d.hasLink ? \"pointer\" : \"hand\";","        })","       .on(\"text\", \"attr\", \"fill\", change_node_color)","       .on(\"circle\", \"style\", \"fill\", change_circle_color)","       .on(\"circle\", \"attr\", \"r\", function(d) { return 7 - d.depth; });","    d3.select(\"#treeview_placeholder\").datum(json).call(chart);","    createLegend();","  });","}","function _expandAllNode() {","  expandAllNode(chart.nodes());","  chart.update(chart.nodes());","}","","function _collapseAllNode() {","  collapseAllNode(chart.nodes());","  chart.update(chart.nodes());","}","","function _resetAllNode() {","  resetAllNode(chart.nodes());","  chart.update(chart.nodes());","}","","","var sddesc = \"&lt;p&gt;The VistA Scheduling package allows a user to Schedule appointments for\" +","\" the following types of appointments:\" +","\"&lt;ul&gt;&lt;li&gt;Scheduled&lt;/li&gt;\" +","\"&lt;li&gt;C and P&lt;/li&gt;\" +","\"&lt;li&gt;Collateral&lt;/li&gt;&lt;/ul&gt;\" +","\" It also allows entry of an unscheduled appointment at any time during a day\" +","\" on which the clinic being scheduled into meets.  From these appointments,\" +","\" various output reports are produced such as, but not limited to, file room\" +","\" list, appointment list, routing slips, letters for cancellations, no-shows,\" +","\" and pre-appointment.  There is an additional capability where additional\" +","\" clinic stop credits can be directly entered and associated with a particular\" +","\" patient and date.  AMIS reporting is handled via a set of extract routines\" +","\" that summarize the data found by reading through the appointments and\" +","\" additional clinic stops and the 10/10 and unscheduled visits (outpatient\" +","\" credit given to Admitting/Screening) and storing the information by patient\" +","\" and visit date in the OCP File.  The AMIS 223 report and the OPC\" +","\" file to be sent to the Austin DPC are generated using this file.&lt;/p&gt;\";","","function pkgLinkClicked(d) {","  if (d.hasLink) {","    var overlayDialogObj = {","      autoOpen: true,","      height: 'auto',","      width: 700,","      modal: true,","      position: [\"center\",\"center-50\"],","      title: \"Package: \" + d.name,","      open: function(){","          htmlLnk = getInterfaceHtml(d);","          $('#interface').html(htmlLnk);","          $('#namespaces').html(getNamespaceHtml(d))","          $('#namespaces').show();","          if (d.name === 'Scheduling'){","            $('#description').html(sddesc);","          }","          else{","            $('#description').html(d.name);","          }","          depLink = getDependencyContentHtml(d.name, d)","          var depLink_html = \"\";","          for(var i = 0; i &lt; depLink.length;i++) {","            depLink_html += depLink[i] + \" \";","          }","          $('#dependencies').html(depLink_html);","          $('#dependencies').show();","          $('#accordion').accordion(\"option\", \"active\", 0);","          $('#accordion').accordion(\"refresh\");","          $('#accordion').accordion({heightStyle: 'content'}).show();","      },","   };","   $('#dialog-modal').dialog(overlayDialogObj).show();","    // var pkgUrl = package_link_url + d.name.replace(/ /g, '_') + \".html\";","    // var win = window.open(pkgUrl, '_black');","    // win.focus();","  }","  else{","    chart.onNodeClick(d);","  }","}","","function getPackageDoxLink(pkgName, node) {","  var doxUrl = [];","  var doxLinkName = pkgName.replace(/ /g, '_').replace(/-/g, '_')","  var category = distProp[selectedIndex];","  var index = node.distribution.indexOf(category.name);","  if (index &gt;= 0) {","    doxUrl.push(category.doxlink + \"Package_\" + doxLinkName + \".html\");","  }","  else if (index == -1) {","    for(var i = 1; i &lt; distProp.length;i++) {","      doxUrl.push(distProp[i].doxlink + \"Package_\" + doxLinkName + \".html\");","    }","  }","  else {","    doxUrl.push(getDistributionPropByName(node.distribution[0]).doxlink);","  }","  return doxUrl;  // + \"Package_\" + doxLinkName + \".html\";","}","","function getDistributionPropByName(distName){","  var index = 0;","  for (index = 0; index &lt; distProp.length; index++) {","    if (distProp[index].name === distName) {","      return distProp[index];","    }","  }","  return null;","}","","function getNamespaceHtml(pkg) {","  var i=0, len=pkg.Posprefixes.length;","  var htmlLnk = \"&lt;h4&gt;Namespaces: &lt;/h4&gt;Includes:\";","  for (; i&lt;len-1; i++) {","    htmlLnk += \"&amp;nbsp;\" + pkg.Posprefixes[i] + \",&amp;nbsp;\";","  }","  htmlLnk += \"&amp;nbsp;\" + pkg.Posprefixes[i];","","  var i=0, len=pkg.Negprefixes.length;","  htmlLnk += \"&lt;/br&gt;Excludes:\"","  if(len &gt; 0) {","    for (; i&lt;len-1; i++) {","      htmlLnk += \"&amp;nbsp;\" + pkg.Negprefixes[i] + \",&amp;nbsp;\";","    }","    htmlLnk += \"&amp;nbsp;\" + pkg.Negprefixes[i];","  }","  return htmlLnk;","}","","function getRPCLinkByPackageName(pkgName, linkUrl) {","  var defLnk = \"files\";","  if (linkUrl){","    defLnk = linkUrl + '/' + defLnk;","  }","  return \"&lt;a href=\\\"\" + defLnk + \"/\" + pkgName + \"-RPC.html\\\" target=\\\"_blank\\\"&gt;Remote Procedure Call&lt;/a&gt;\";","}","","function getHL7LinkByPackageName(pkgName, linkUrl) {","  var defLnk = \"files\";","  if (linkUrl){","    defLnk = linkUrl + '/' + defLnk;","  }","  return \"&lt;a href=\\\"\" + defLnk + \"/\" + pkgName + \"-HL7.html\\\" target=\\\"_blank\\\"&gt;HL7&lt;/a&gt;\";","}","","function getInterfaceHtml(node) {","  pkgName = node.name","  var htmlLnk = \"&lt;ul&gt;\";","  var rpcLink = \"\";","  var hl7Link = \"\";","  var extraLink = \"\";","  if (node.interfaces !== undefined){","    if (selectedIndex === 3) {","      category = distProp[selectedIndex].name;","      if (node.distribution &amp;&amp; node.distribution.indexOf(category) &gt;=0) {","        extraLink = \"vxvista\";","      }","    }","    var index = node.interfaces.indexOf(\"RPC\");","    if (index &gt;= 0){","      rpcLink = getRPCLinkByPackageName(pkgName, extraLink);","    }","    index = node.interfaces.indexOf(\"HL7\");","    if (index &gt;= 0){","      hl7Link = getHL7LinkByPackageName(pkgName, extraLink);","    }","  }","  if (pkgName === 'Order Entry Results Reporting'){","    htmlLnk += \"&lt;li&gt;&lt;a href=\\\"http://www.osehra.org/content/vista-api?quicktabs_vista_api=0#quicktabs-vista_api\\\" target=\\\"_blank\\\"&gt;M API&lt;/a&gt;&lt;/li&gt;\";","    htmlLnk += \"&lt;li&gt;\" + rpcLink + \"&lt;/li&gt;\";","    htmlLnk += \"&lt;li&gt;&lt;a href=\\\"http://www.osehra.org/content/vista-api?quicktabs_vista_api=2#quicktabs-vista_api\\\" target=\\\"_blank\\\"&gt;Web Service API&lt;/a&gt;&lt;/li&gt;\";","    htmlLnk += \"&lt;li&gt;\" + hl7Link + \"&lt;/li&gt;\";","    htmlLnk += \"&lt;/ul&gt;\";","  }","  else{","    htmlLnk += \"&lt;li&gt;M API&lt;/li&gt;\";","    if (rpcLink.length &gt; 0) {","      htmlLnk += \"&lt;li&gt;\" + rpcLink + \"&lt;/li&gt;\";","    }","    htmlLnk += \"&lt;li&gt;Web Service API&lt;/li&gt;\";","    if (hl7Link.length &gt; 0){","      htmlLnk += \"&lt;li&gt;\" + hl7Link + \"&lt;/li&gt;\";","    }","    htmlLnk += \"&lt;/ul&gt;\";","  }","  return htmlLnk;","}","","function getDependencyContentHtml(pkgName, node) {","  var pkgUrl = getPackageDoxLink(pkgName, node)","  var depLink = []","  for(var i = 0; i &lt; pkgUrl.length;i++) {","    depLink_str = \"&lt;h4&gt;&lt;a href=\\\"\" + pkgUrl[i] + \"\\\" target=\\\"_blank\\\"&gt;\";","    if( selectedIndex==0 ) {depLink_str += distProp[i+1].name +\" Dependencies &amp; Code View\" + \"&lt;/a&gt;&lt;/h4&gt;\";}","    else {depLink_str += distProp[selectedIndex].name +\" Dependencies &amp; Code View\" + \"&lt;/a&gt;&lt;/h4&gt;\";}","    depLink.push(depLink_str);","  }","  return depLink;","}","","function change_node_color(node) {","  if (distProp.length === 0) {","    return \"black\";","  }","  var category = distProp[selectedIndex];","  if (category.name === \"All\" || node.hasLink === undefined) {","    return \"black\";","  }","  if (node.distribution) {","    var index = node.distribution.indexOf(category.name);","    if (index &gt;= 0) {","      return category.color;","    }","  }","  return \"#E0E0E0\";","}","","function change_circle_color(d){","  if (d._children){","    return \"lightsteelblue\";","  }","  else {","    if (d.hasLink !== undefined &amp;&amp; selectedIndex &gt; 0){","      var category = distProp[selectedIndex];","      if (d.distribution !== undefined){","        var index = d.distribution.indexOf(category.name);","        if (index &gt;= 0) {","          return category.color;","        }","      }","      else { ","        return category.color;","      }","    }","    return \"#fff\";","  }","}","","function node_onMouseOver(d) {","  if (d.hasLink === undefined || !d.hasLink) {","    return;","  }","  if (d.Posprefixes !== undefined){","    tooltipString = \"Namespace: Includes: \" + d.Posprefixes + \".\\r\\n\";","  }","  if (d.Negprefixes !== undefined){","    tooltipString += \"Excludes: \" + d.Negprefixes;","  }","  else{","    return;","  }","  header.text(tooltipString)","  toolTip.style(\"left\", (d3.event.pageX + 20) + \"px\")","         .style(\"top\", (d3.event.pageY + 5) + \"px\")","         .style(\"opacity\", \".9\");","}","","function node_onMouseOut(d) {","  header.text(\"\");","  toolTip.style(\"opacity\", \"0\");","}","","","// var categories = [\"All\", \"OSEHRA\", \"VA\", \"DSS\", \"Medsphere\", \"Oroville\"];","// Legend.","function createLegend() {","  var legend = chart.svg().selectAll(\"g.legend\")","      .data(distProp)","    .enter().append(\"svg:g\")","      .attr(\"class\", \"legend\")","      .attr(\"transform\", function(d, i) { return \"translate(-100,\" + (i * 30 + 80) + \")\"; })","      .on(\"click\", function(d) {","        selectedIndex = distProp.indexOf(d);","        d3.selectAll(\"text\")","          .filter(function (d) { return d.hasLink != undefined;})","          .attr(\"fill\", function (node) {","            return change_node_color(node);","          });","        d3.selectAll(\"circle\")","          .filter(function (d) { return d.hasLink != undefined;})","          .style(\"fill\", function (d) {","            return change_circle_color(d);","          });","","      });","","  legend.append(\"svg:circle\")","      .attr(\"class\", function(d) {return d.name;})","      .attr(\"r\", 3);","","  legend.append(\"svg:text\")","      .attr(\"class\", function(d) {return d.name;})","      .attr(\"x\", 13)","      .attr(\"dy\", \".31em\")","      .text(function(d) {","        return  d.distribution; ","      });","}"];
_$jscoverage['index_content.js'][1]++;
function index_main() {
  _$jscoverage['index_content.js'][2]++;
  chart = d3.chart.treeview().height(1280).width(1200).margins({
  top: 42, 
  left: 180, 
  right: 0, 
  bottom: 0}).textwidth(220);
  _$jscoverage['index_content.js'][7]++;
  $("#accordion").accordion({
  heightStyle: 'content', 
  collapsible: true}).hide();
  _$jscoverage['index_content.js'][9]++;
  package_link_url = "http://code.osehra.org/dox/";
  _$jscoverage['index_content.js'][10]++;
  toolTip = d3.select(document.getElementById("toolTip"));
  _$jscoverage['index_content.js'][11]++;
  header = d3.select(document.getElementById("header1"));
  _$jscoverage['index_content.js'][12]++;
  selectedIndex = 0;
  _$jscoverage['index_content.js'][13]++;
  distProp = [{
  name: "All", 
  color: "black", 
  distribution: 'All', 
  doxlink: package_link_url}, {
  name: "OSEHRA", 
  color: "#FF0000", 
  distribution: 'OSEHRA VistA', 
  doxlink: "http://code.osehra.org/OSEHRA_dox/"}, {
  name: "VA", 
  color: "#3300CC", 
  distribution: 'VA FOIA VistA', 
  doxlink: package_link_url}, {
  name: "DSS", 
  color: "#080", 
  distribution: 'DSS vxVistA', 
  doxlink: "http://code.osehra.org/dox_alpha/vxvista/"}];
  _$jscoverage['index_content.js'][30]++;
  d3.json("packages.json", function(json) {
  _$jscoverage['index_content.js'][31]++;
  resetAllNode(json);
  _$jscoverage['index_content.js'][40]++;
  chart.on("node", "event", "click", pkgLinkClicked).on("node", "event", "mouseover", node_onMouseOver).on("node", "event", "mouseout", node_onMouseOut).on("text", "attr", "cursor", function(d) {
  _$jscoverage['index_content.js'][36]++;
  return d.hasLink !== undefined && d.hasLink ? "pointer" : "hand";
}).on("text", "attr", "fill", change_node_color).on("circle", "style", "fill", change_circle_color).on("circle", "attr", "r", function(d) {
  return 7 - d.depth;
});
  _$jscoverage['index_content.js'][41]++;
  d3.select("#treeview_placeholder").datum(json).call(chart);
  _$jscoverage['index_content.js'][42]++;
  createLegend();
});
}
_$jscoverage['index_content.js'][45]++;
function _expandAllNode() {
  _$jscoverage['index_content.js'][46]++;
  expandAllNode(chart.nodes());
  _$jscoverage['index_content.js'][47]++;
  chart.update(chart.nodes());
}
_$jscoverage['index_content.js'][50]++;
function _collapseAllNode() {
  _$jscoverage['index_content.js'][51]++;
  collapseAllNode(chart.nodes());
  _$jscoverage['index_content.js'][52]++;
  chart.update(chart.nodes());
}
_$jscoverage['index_content.js'][55]++;
function _resetAllNode() {
  _$jscoverage['index_content.js'][56]++;
  resetAllNode(chart.nodes());
  _$jscoverage['index_content.js'][57]++;
  chart.update(chart.nodes());
}
_$jscoverage['index_content.js'][61]++;
var sddesc = "<p>The VistA Scheduling package allows a user to Schedule appointments for" + " the following types of appointments:" + "<ul><li>Scheduled</li>" + "<li>C and P</li>" + "<li>Collateral</li></ul>" + " It also allows entry of an unscheduled appointment at any time during a day" + " on which the clinic being scheduled into meets.  From these appointments," + " various output reports are produced such as, but not limited to, file room" + " list, appointment list, routing slips, letters for cancellations, no-shows," + " and pre-appointment.  There is an additional capability where additional" + " clinic stop credits can be directly entered and associated with a particular" + " patient and date.  AMIS reporting is handled via a set of extract routines" + " that summarize the data found by reading through the appointments and" + " additional clinic stops and the 10/10 and unscheduled visits (outpatient" + " credit given to Admitting/Screening) and storing the information by patient" + " and visit date in the OCP File.  The AMIS 223 report and the OPC" + " file to be sent to the Austin DPC are generated using this file.</p>";
_$jscoverage['index_content.js'][79]++;
function pkgLinkClicked(d) {
  _$jscoverage['index_content.js'][80]++;
  if (d.hasLink) {
    _$jscoverage['index_content.js'][81]++;
    var overlayDialogObj = {
  autoOpen: true, 
  height: 'auto', 
  width: 700, 
  modal: true, 
  position: ["center", "center-50"], 
  title: "Package: " + d.name, 
  open: function() {
  _$jscoverage['index_content.js'][89]++;
  htmlLnk = getInterfaceHtml(d);
  _$jscoverage['index_content.js'][90]++;
  $('#interface').html(htmlLnk);
  _$jscoverage['index_content.js'][91]++;
  $('#namespaces').html(getNamespaceHtml(d));
  _$jscoverage['index_content.js'][92]++;
  $('#namespaces').show();
  _$jscoverage['index_content.js'][93]++;
  if (d.name === 'Scheduling') {
    _$jscoverage['index_content.js'][94]++;
    $('#description').html(sddesc);
  } else {
    _$jscoverage['index_content.js'][97]++;
    $('#description').html(d.name);
  }
  _$jscoverage['index_content.js'][99]++;
  depLink = getDependencyContentHtml(d.name, d);
  _$jscoverage['index_content.js'][100]++;
  var depLink_html = "";
  _$jscoverage['index_content.js'][101]++;
  for (var i = 0; i < depLink.length; i++) {
    _$jscoverage['index_content.js'][102]++;
    depLink_html += depLink[i] + " ";
  }
  _$jscoverage['index_content.js'][104]++;
  $('#dependencies').html(depLink_html);
  _$jscoverage['index_content.js'][105]++;
  $('#dependencies').show();
  _$jscoverage['index_content.js'][106]++;
  $('#accordion').accordion("option", "active", 0);
  _$jscoverage['index_content.js'][107]++;
  $('#accordion').accordion("refresh");
  _$jscoverage['index_content.js'][108]++;
  $('#accordion').accordion({
  heightStyle: 'content'}).show();
}};
    _$jscoverage['index_content.js'][111]++;
    $('#dialog-modal').dialog(overlayDialogObj).show();
  } else {
    _$jscoverage['index_content.js'][117]++;
    chart.onNodeClick(d);
  }
}
_$jscoverage['index_content.js'][121]++;
function getPackageDoxLink(pkgName, node) {
  _$jscoverage['index_content.js'][122]++;
  var doxUrl = [];
  _$jscoverage['index_content.js'][123]++;
  var doxLinkName = pkgName.replace(/ /g, '_').replace(/-/g, '_');
  _$jscoverage['index_content.js'][124]++;
  var category = distProp[selectedIndex];
  _$jscoverage['index_content.js'][125]++;
  var index = node.distribution.indexOf(category.name);
  _$jscoverage['index_content.js'][126]++;
  if (index >= 0) {
    _$jscoverage['index_content.js'][127]++;
    doxUrl.push(category.doxlink + "Package_" + doxLinkName + ".html");
  } else {
    _$jscoverage['index_content.js'][129]++;
    if (index == -1) {
      _$jscoverage['index_content.js'][130]++;
      for (var i = 1; i < distProp.length; i++) {
        _$jscoverage['index_content.js'][131]++;
        doxUrl.push(distProp[i].doxlink + "Package_" + doxLinkName + ".html");
      }
    } else {
      _$jscoverage['index_content.js'][135]++;
      doxUrl.push(getDistributionPropByName(node.distribution[0]).doxlink);
    }
  }
  _$jscoverage['index_content.js'][137]++;
  return doxUrl;
}
_$jscoverage['index_content.js'][140]++;
function getDistributionPropByName(distName) {
  _$jscoverage['index_content.js'][141]++;
  var index = 0;
  _$jscoverage['index_content.js'][142]++;
  for (index = 0; index < distProp.length; index++) {
    _$jscoverage['index_content.js'][143]++;
    if (distProp[index].name === distName) {
      _$jscoverage['index_content.js'][144]++;
      return distProp[index];
    }
  }
  _$jscoverage['index_content.js'][147]++;
  return null;
}
_$jscoverage['index_content.js'][150]++;
function getNamespaceHtml(pkg) {
  _$jscoverage['index_content.js'][151]++;
  var i = 0, len = pkg.Posprefixes.length;
  _$jscoverage['index_content.js'][152]++;
  var htmlLnk = "<h4>Namespaces: </h4>Includes:";
  _$jscoverage['index_content.js'][153]++;
  for (; i < len - 1; i++) {
    _$jscoverage['index_content.js'][154]++;
    htmlLnk += "&nbsp;" + pkg.Posprefixes[i] + ",&nbsp;";
  }
  _$jscoverage['index_content.js'][156]++;
  htmlLnk += "&nbsp;" + pkg.Posprefixes[i];
  _$jscoverage['index_content.js'][158]++;
  var i = 0, len = pkg.Negprefixes.length;
  _$jscoverage['index_content.js'][159]++;
  htmlLnk += "</br>Excludes:";
  _$jscoverage['index_content.js'][160]++;
  if (len > 0) {
    _$jscoverage['index_content.js'][161]++;
    for (; i < len - 1; i++) {
      _$jscoverage['index_content.js'][162]++;
      htmlLnk += "&nbsp;" + pkg.Negprefixes[i] + ",&nbsp;";
    }
    _$jscoverage['index_content.js'][164]++;
    htmlLnk += "&nbsp;" + pkg.Negprefixes[i];
  }
  _$jscoverage['index_content.js'][166]++;
  return htmlLnk;
}
_$jscoverage['index_content.js'][169]++;
function getRPCLinkByPackageName(pkgName, linkUrl) {
  _$jscoverage['index_content.js'][170]++;
  var defLnk = "files";
  _$jscoverage['index_content.js'][171]++;
  if (linkUrl) {
    _$jscoverage['index_content.js'][172]++;
    defLnk = linkUrl + '/' + defLnk;
  }
  _$jscoverage['index_content.js'][174]++;
  return "<a href=\"" + defLnk + "/" + pkgName + "-RPC.html\" target=\"_blank\">Remote Procedure Call</a>";
}
_$jscoverage['index_content.js'][177]++;
function getHL7LinkByPackageName(pkgName, linkUrl) {
  _$jscoverage['index_content.js'][178]++;
  var defLnk = "files";
  _$jscoverage['index_content.js'][179]++;
  if (linkUrl) {
    _$jscoverage['index_content.js'][180]++;
    defLnk = linkUrl + '/' + defLnk;
  }
  _$jscoverage['index_content.js'][182]++;
  return "<a href=\"" + defLnk + "/" + pkgName + "-HL7.html\" target=\"_blank\">HL7</a>";
}
_$jscoverage['index_content.js'][185]++;
function getInterfaceHtml(node) {
  _$jscoverage['index_content.js'][186]++;
  pkgName = node.name;
  _$jscoverage['index_content.js'][187]++;
  var htmlLnk = "<ul>";
  _$jscoverage['index_content.js'][188]++;
  var rpcLink = "";
  _$jscoverage['index_content.js'][189]++;
  var hl7Link = "";
  _$jscoverage['index_content.js'][190]++;
  var extraLink = "";
  _$jscoverage['index_content.js'][191]++;
  if (node.interfaces !== undefined) {
    _$jscoverage['index_content.js'][192]++;
    if (selectedIndex === 3) {
      _$jscoverage['index_content.js'][193]++;
      category = distProp[selectedIndex].name;
      _$jscoverage['index_content.js'][194]++;
      if (node.distribution && node.distribution.indexOf(category) >= 0) {
        _$jscoverage['index_content.js'][195]++;
        extraLink = "vxvista";
      }
    }
    _$jscoverage['index_content.js'][198]++;
    var index = node.interfaces.indexOf("RPC");
    _$jscoverage['index_content.js'][199]++;
    if (index >= 0) {
      _$jscoverage['index_content.js'][200]++;
      rpcLink = getRPCLinkByPackageName(pkgName, extraLink);
    }
    _$jscoverage['index_content.js'][202]++;
    index = node.interfaces.indexOf("HL7");
    _$jscoverage['index_content.js'][203]++;
    if (index >= 0) {
      _$jscoverage['index_content.js'][204]++;
      hl7Link = getHL7LinkByPackageName(pkgName, extraLink);
    }
  }
  _$jscoverage['index_content.js'][207]++;
  if (pkgName === 'Order Entry Results Reporting') {
    _$jscoverage['index_content.js'][208]++;
    htmlLnk += "<li><a href=\"http://www.osehra.org/content/vista-api?quicktabs_vista_api=0#quicktabs-vista_api\" target=\"_blank\">M API</a></li>";
    _$jscoverage['index_content.js'][209]++;
    htmlLnk += "<li>" + rpcLink + "</li>";
    _$jscoverage['index_content.js'][210]++;
    htmlLnk += "<li><a href=\"http://www.osehra.org/content/vista-api?quicktabs_vista_api=2#quicktabs-vista_api\" target=\"_blank\">Web Service API</a></li>";
    _$jscoverage['index_content.js'][211]++;
    htmlLnk += "<li>" + hl7Link + "</li>";
    _$jscoverage['index_content.js'][212]++;
    htmlLnk += "</ul>";
  } else {
    _$jscoverage['index_content.js'][215]++;
    htmlLnk += "<li>M API</li>";
    _$jscoverage['index_content.js'][216]++;
    if (rpcLink.length > 0) {
      _$jscoverage['index_content.js'][217]++;
      htmlLnk += "<li>" + rpcLink + "</li>";
    }
    _$jscoverage['index_content.js'][219]++;
    htmlLnk += "<li>Web Service API</li>";
    _$jscoverage['index_content.js'][220]++;
    if (hl7Link.length > 0) {
      _$jscoverage['index_content.js'][221]++;
      htmlLnk += "<li>" + hl7Link + "</li>";
    }
    _$jscoverage['index_content.js'][223]++;
    htmlLnk += "</ul>";
  }
  _$jscoverage['index_content.js'][225]++;
  return htmlLnk;
}
_$jscoverage['index_content.js'][228]++;
function getDependencyContentHtml(pkgName, node) {
  _$jscoverage['index_content.js'][229]++;
  var pkgUrl = getPackageDoxLink(pkgName, node);
  _$jscoverage['index_content.js'][230]++;
  var depLink = [];
  _$jscoverage['index_content.js'][231]++;
  for (var i = 0; i < pkgUrl.length; i++) {
    _$jscoverage['index_content.js'][232]++;
    depLink_str = "<h4><a href=\"" + pkgUrl[i] + "\" target=\"_blank\">";
    _$jscoverage['index_content.js'][233]++;
    if (selectedIndex == 0) {
      depLink_str += distProp[i + 1].name + " Dependencies & Code View" + "</a></h4>";
    } else {
      _$jscoverage['index_content.js'][234]++;
      depLink_str += distProp[selectedIndex].name + " Dependencies & Code View" + "</a></h4>";
    }
    _$jscoverage['index_content.js'][235]++;
    depLink.push(depLink_str);
  }
  _$jscoverage['index_content.js'][237]++;
  return depLink;
}
_$jscoverage['index_content.js'][240]++;
function change_node_color(node) {
  _$jscoverage['index_content.js'][241]++;
  if (distProp.length === 0) {
    _$jscoverage['index_content.js'][242]++;
    return "black";
  }
  _$jscoverage['index_content.js'][244]++;
  var category = distProp[selectedIndex];
  _$jscoverage['index_content.js'][245]++;
  if (category.name === "All" || node.hasLink === undefined) {
    _$jscoverage['index_content.js'][246]++;
    return "black";
  }
  _$jscoverage['index_content.js'][248]++;
  if (node.distribution) {
    _$jscoverage['index_content.js'][249]++;
    var index = node.distribution.indexOf(category.name);
    _$jscoverage['index_content.js'][250]++;
    if (index >= 0) {
      _$jscoverage['index_content.js'][251]++;
      return category.color;
    }
  }
  _$jscoverage['index_content.js'][254]++;
  return "#E0E0E0";
}
_$jscoverage['index_content.js'][257]++;
function change_circle_color(d) {
  _$jscoverage['index_content.js'][258]++;
  if (d._children) {
    _$jscoverage['index_content.js'][259]++;
    return "lightsteelblue";
  } else {
    _$jscoverage['index_content.js'][262]++;
    if (d.hasLink !== undefined && selectedIndex > 0) {
      _$jscoverage['index_content.js'][263]++;
      var category = distProp[selectedIndex];
      _$jscoverage['index_content.js'][264]++;
      if (d.distribution !== undefined) {
        _$jscoverage['index_content.js'][265]++;
        var index = d.distribution.indexOf(category.name);
        _$jscoverage['index_content.js'][266]++;
        if (index >= 0) {
          _$jscoverage['index_content.js'][267]++;
          return category.color;
        }
      } else {
        _$jscoverage['index_content.js'][271]++;
        return category.color;
      }
    }
    _$jscoverage['index_content.js'][274]++;
    return "#fff";
  }
}
_$jscoverage['index_content.js'][278]++;
function node_onMouseOver(d) {
  _$jscoverage['index_content.js'][279]++;
  if (d.hasLink === undefined || !d.hasLink) {
    _$jscoverage['index_content.js'][280]++;
    return;
  }
  _$jscoverage['index_content.js'][282]++;
  if (d.Posprefixes !== undefined) {
    _$jscoverage['index_content.js'][283]++;
    tooltipString = "Namespace: Includes: " + d.Posprefixes + ".\r\n";
  }
  _$jscoverage['index_content.js'][285]++;
  if (d.Negprefixes !== undefined) {
    _$jscoverage['index_content.js'][286]++;
    tooltipString += "Excludes: " + d.Negprefixes;
  } else {
    _$jscoverage['index_content.js'][289]++;
    return;
  }
  _$jscoverage['index_content.js'][291]++;
  header.text(tooltipString);
  _$jscoverage['index_content.js'][294]++;
  toolTip.style("left", (d3.event.pageX + 20) + "px").style("top", (d3.event.pageY + 5) + "px").style("opacity", ".9");
}
_$jscoverage['index_content.js'][297]++;
function node_onMouseOut(d) {
  _$jscoverage['index_content.js'][298]++;
  header.text("");
  _$jscoverage['index_content.js'][299]++;
  toolTip.style("opacity", "0");
}
_$jscoverage['index_content.js'][305]++;
function createLegend() {
  _$jscoverage['index_content.js'][306]++;
  var legend = chart.svg().selectAll("g.legend").data(distProp).enter().append("svg:g").attr("class", "legend").attr("transform", function(d, i) {
  _$jscoverage['index_content.js'][310]++;
  return "translate(-100," + (i * 30 + 80) + ")";
}).on("click", function(d) {
  _$jscoverage['index_content.js'][312]++;
  selectedIndex = distProp.indexOf(d);
  _$jscoverage['index_content.js'][315]++;
  d3.selectAll("text").filter(function(d) {
  _$jscoverage['index_content.js'][314]++;
  return d.hasLink != undefined;
}).attr("fill", function(node) {
  _$jscoverage['index_content.js'][316]++;
  return change_node_color(node);
});
  _$jscoverage['index_content.js'][320]++;
  d3.selectAll("circle").filter(function(d) {
  _$jscoverage['index_content.js'][319]++;
  return d.hasLink != undefined;
}).style("fill", function(d) {
  _$jscoverage['index_content.js'][321]++;
  return change_circle_color(d);
});
});
  _$jscoverage['index_content.js'][328]++;
  legend.append("svg:circle").attr("class", function(d) {
  _$jscoverage['index_content.js'][327]++;
  return d.name;
}).attr("r", 3);
  _$jscoverage['index_content.js'][334]++;
  legend.append("svg:text").attr("class", function(d) {
  _$jscoverage['index_content.js'][331]++;
  return d.name;
}).attr("x", 13).attr("dy", ".31em").text(function(d) {
  _$jscoverage['index_content.js'][335]++;
  return d.distribution;
});
}
