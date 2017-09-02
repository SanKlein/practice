class Node {
  constructor(val) {
    this.value = val;
    this.children = [];
  }
  printValue() {
    console.log(this.value);
  }
}

class BinaryNode {
  constructor(val, left, right) {
    this.value = val;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(root) {
    this.root = root;
  }
  getHeight() {
    return treeHeight(this.root);
  }
  preorder() {
    preorderTraversal(this.root);
  }
}

// find node is a binary search tree (BST)
function findNode(root, val) {
  var currVal;

  while (root !== null) {
    currVal = root.value;
    if (currVal === val) {
      break;
    } else if (currVal > val) {
      root = root.left;
    } else { // currVal < val
      root = root.right;
    }
  }

  return root;
}

function recursiveFindNode(root, val) {
  if (!root) return null;

  var currVal = root.value
  if (currVal === val) return root;
  if (currVal < root) {
    return recursiveFindNode(root.right);
  } else {
    return recursiveFindNode(root.left);
  }
}

function treeHeight(root) {
  if (!root) return 0;

  return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
}

function preorderTraversal(root) {
  if (!root) return;

  root.printValue();
  preorderTraversal(root.left);
  preorderTraversal(root.right);
}

function preorderTraversalWithoutRecursion(root) {
  if (!root) return;

  while (root) {
    root.printValue();

    var rights = [];

    if (root.right) {
      rights.push(root.right);
    }

    if (root.left) {
      root = root.left;
    } else if (rights.length) {
      root = rights.pop();
    }

    return;
  }
}

function preorderTraversalWithoutRecursionV2(root) {
  var nodes = [];
  nodes.push(root);

  while (nodes.length) {
    var node = nodes.pop();
    node.printValue();

    if (node.right) nodes.push(node.right);
    if (node.left) nodes.push(node.left);
  }
}

function lowestCommonAncestor(root, val1, val2) {
  if (!root) return;

  [val1, val2] = val1 > val2 ? [val2, val1] : [val1, val2];

  while (root) {
    let rootVal = root.value;
    if (rootVal > val1 && rootVal > val2) root = root.left;
    if (rootVal < val1 && rootVal < val2) root = root.right;
    return root;
  }

  return;
}
