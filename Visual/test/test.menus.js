var test  = {
  version: "1.0.0"
}

describe('test_index', function(){
  describe('modal_test', function(){
    it("menu_test", function() {
      $(".legend")[0].textContent.should.equal("All Types");
      $(".legend").length.should.equal(10);
      $(".legend").each( function(i,d) {
        d.textContent.should.equal(menuType[i]["dName"]);
      });
    });

    it("resetmenu_test", function() {
      chart.nodes().name.should.equal(json["name"]);
    });
  })
})