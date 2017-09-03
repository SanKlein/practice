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

function binaryTreeToHeap(root) {
  if (!root) return root;
  return createArrayFromTree(root).sort(compareNodes(a, b)).buildHeap(arr);
}

function createArrayFromTree(root) {
  if (!root) return [];

  return root.concat(createArrayFromTree(root.left), createArrayFromTree(root.right));
}

function compareNodes(node1, node2) {
  return node1.value - node2.value;
}

function buildHeap(arr) {
  var root = arr.shift();
  var nodes = [root];

  while (arr.length) {
    var node = nodes.shift();
    var node1 = arr.shift();
    var node2 = arr.shift();
    node.left = node1;
    node.right = node2;
    nodes.push(node1, node2);
  }

  return root;
}

function rotateRight(root) {
  var newRoot = root.left;
  root.left = newRoot.right;
  newRoot.right = root;
  return newRoot;
}

function setBaconNumbers(kevin) {
  kevin.baconNumber = 0;
  var queue = [kevin];

  while (queue.length) {
    var current = queue.shift();
    current.linkedActors.forEach(actor => {
      if (actor.baconNumber !== -1) {
        actor.baconNumber = current.baconNumber + 1;
        q.push(actor);
      }
    });
  }
}
