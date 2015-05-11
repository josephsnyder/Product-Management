var test  = {
  version: "1.0.0"
}

describe('test_index', function(){
    it("test non-package node", function () {
      test_nodes = chart.nodes()
      test_node = test_nodes.children[0].children[0]
      pkgLinkClicked(test_node)
    })
    
    it("test button functions  ", function () {
      _expandAllNode()
      _collapseAllNode()
      _resetAllNode()
    })
    
    it("test change color", function() {
      test_nodes = chart.nodes()
      test_node = test_nodes.children[0].children[0].children[3]
      change_node_color(test_node)
      change_circle_color(test_node)
      selectedIndex=1
      change_node_color(test_node)
      change_circle_color(test_node)
      selectedIndex=2
      change_node_color(test_node)
      change_circle_color(test_node)
    })
    
    it("test node_mouse actions", function () {
      test_nodes = chart.nodes()
      test_node = test_nodes.children[0].children[0].children[3]  
      node_onMouseOut(test_node)
    
    })
    it("modal_test", function() {
      test_nodes = chart.nodes()
      test_node = test_nodes.children[0].children[0].children[3]
      pkgLinkClicked(test_node)
      $('#ui-accordion-accordion-header-0')[0].innerText.should.equal("Namespaces");
      ($("#namespaces")[0].innerHTML.search("Includes:.+Excludes") != -1).should.be.ok;
      $('#ui-accordion-accordion-header-1')[0].innerText.should.equal("Dependencies");
      (/href/.test($("#dependencies")[0].innerHTML)).should.be.ok; 
      $('#ui-accordion-accordion-header-2')[0].innerText.should.equal("Interfaces");
      ($("#interface")[0].innerHTML.search("M API.+Web Service API.+HL7") != -1).should.be.ok;
      $('#ui-accordion-accordion-header-3')[0].innerText.should.equal("Description");
      ($("#description")[0].innerHTML.search("[A-Za-z]+") != -1).should.be.ok;
    })      
    
    it("test main", function () {
      createLegend()
    })
})