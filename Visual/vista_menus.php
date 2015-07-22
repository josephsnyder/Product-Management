<!DOCTYPE html>
<html>
  <head>
    <?php
      include_once "vivian_common_header.php";
      include_once "vivian_tree_layout.css";
    ?>
    <!-- JQuery Buttons -->
    <script>
      $(function() {
        $( "button" ).button().click(function(event){
          event.preventDefault();
        });

        $('#demoexamples li').each(function (i) {
          if (i === 1) {
            $(this).removeClass().addClass("active");
          }
          else {
            $(this).removeClass();
          }
        });
        d3.json('menu_autocomplete.json', function(json) {
          var sortedjson = json.sort(function(a,b) { return a.label.localeCompare(b.label); });
          $("#autocomplete").autocomplete({
            source: sortedjson,
            select: autoCompleteChanged
            //change: autoCompleteChanged
          }).val('EVE: System Manager Menu').data('autocomplete')._trigger('select');
        });
      });
    </script>
    <?php include_once "vivian_google_analytics.php" ?>
    <style>
      .ui-autocomplete {
          max-height: 400px;
          font-size: 0.9em;
          overflow-y: auto;   /* prevent horizontal scrollbar */
          overflow-x: hidden; /* add padding to account for vertical scrollbar */
          z-index:1000 !important;
      }
    </style>
  </head>

<body >
  <div>
    <?php include_once "vivian_osehra_image.php" ?>
    <!-- <select id="category"></select> -->
  </div>
    <!-- Tooltip -->
  <div id="toolTip" class="tooltip" style="opacity:0;">
      <div id="head" class="header"></div>
      <div  class="tooltipTail"></div>
  </div>

  <div style="position:absolute; left:20px; top:100px;">
    <label for="autocomplete">Select a top level menu: </label>
  </div>
  <div style="position:absolute; left:20px; top:120px;">
    <input id="autocomplete" size="40">
  </div>
  <div style="font-size:10px; position:absolute; left:220px; top:240px;">
    <button onclick="_collapseAllNode()">Collapse All</button>
    <button onclick="_resetAllNode()">Reset</button>
  </div>
  <div class='hint' style="position:absolute; top:160px; left:20px; font-size:0.9em; width:350px;">
  <p>
This tree visualization represents the menu hierarchy of VistA. Mouse over any of the entries in the tree to see the menu option name and the security key (if any). Click on an item to see the menu option details.
  </p>
  </div>
  <div id="treeview_placeholder"/>
  <script src="vivian_tree_layout_common.js"></script>
  <script type="text/javascript" src="menus_content.js"></script>
    <script>
      menus_main()
    </script>
  </body>
</html>

