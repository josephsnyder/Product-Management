function toggleAll(d) {
  if (d.children) {
    d.children.forEach(toggleAll);
    toggle(d);
  }
}

function expandAllNode(root) {
  //root.children.forEach(toggleAll);
  expand(root)
  root.children.forEach(expandAll);
  if(root.hasSubpackage) {
    root.subpackage.forEach(expandAll);
  }
}

function collapseAllNode(root) {
  root.children.forEach(collapseAll);
  collapse(root)
}

function expandAll(d) {
  expand(d);
  if (d.children) {
    d.children.forEach(expandAll);
  }
}

function resetAllNode(root) {
  expand(root);
  if (root.children !== undefined && root.children)
  {
    root.children.forEach(collapseAll);
    // Initialize the display to show a few nodes.
    expandAll(root.children[0]);
  }
  //root.children[0].forEach(toggleAll);
  //toggle(root.children[0]);
  //toggle(root.children[0].children[2]);
  //toggle(root.children[0].children[3]);
  //toggle(root.children[1]);
  //toggle(root.children[1].children[0]);
  //toggle(root.children[1].children[4]);
  //toggle(root.children[4]);
  //toggle(root.children[4].children[0]);
  //update(root);
}

function collapseAll(d) {
  if (d.children) {
    d.children.forEach(collapseAll);
    collapse(d);
  }
}

// Collapse Node.
function collapse(d) {
  if(d.hasSubpackage ) {
    if (d.children) {
        d.subpackage = d.children;
        d.children = null;
    }
  }
  if (d.children) {
    d._children = d.children;
    d.children = null;
  }

}

// Expand children.
function expand(d) {
  if(d.hasSubpackage ) {
    if (d.subpackage){
      d.children = d.subpackage;
      d.subpackage = null;
    }
  }
  if (d._children) {
    d.children = d._children;
    d._children = null;
  }
}

