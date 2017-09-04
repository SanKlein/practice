function BinarySearchTree() {

  var Node = function(key){
    this.key = key;
    this.left = null;
    this.right = null;
  };

  var root = null;

  var insertNode = function(node, newNode){
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null){
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };

  this.insert = function(key){

    var newNode = new Node(key);

    if (root === null){
      root = newNode;
    } else {
      insertNode(root,newNode);
    }
  };

  var inOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };

  this.inOrderTraverse = function(callback){
    inOrderTraverseNode(root, callback);
  };

  var preOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };

  this.preOrderTraverse = function(callback){
    preOrderTraverseNode(root, callback);
  };

  var postOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  };

  this.postOrderTraverse = function(callback){
    postOrderTraverseNode(root, callback);
  };

  var minNode = function (node) {
    if (node){
      while (node && node.left !== null) {
        node = node.left;
      }

      return node.key;
    }
    return null;
  };

  this.min = function() {
    return minNode(root);
  };

  this.max = function() {
    return maxNode(root);
  };

  var maxNode = function (node) {
    if (node){
      while (node && node.right !== null) {
        node = node.right;
      }

      return node.key;
    }
    return null;
  };

  this.search = function(key){
    return searchNode(root, key);
  };

  var searchNode = function(node, key){

    if (node === null){
      return false;
    }
    if (key < node.key){
      return searchNode(node.left, key);

    } else if (key > node.key){
      return searchNode(node.right, key);

    } else {
      return true;
    }
  };

  var removeNode = function(node, key){

    if (node === null){ //{2}
      return null;
    }
    if (key < node.key){ //{3}
      node.left = removeNode(node.left, key); //{4}
      return node; //{5}

    } else if (key > node.key){ //{6}
      node.right = removeNode(node.right, key); //{7}
      return node; //{8}

    } else { // key is equal to node.key

      //case 1 - a leaf node
      if (node.left === null && node.right === null){ //{9}
        node = null; //{10}
        return node; //{11}
      }

      //case 2 - a node with only 1 child
      if (node.left === null){ //{12}
        node = node.right; //{13}
        return node; //{14}

      } else if (node.right === null){ //{15}
        node = node.left; //{16}
        return node; //{17}
      }

      //case 3 - a node with 2 children
      var aux = findMinNode(node.right); //{18}
      node.key = aux.key; //{19}
      node.right = removeNode(node.right, aux.key); //{20}
      return node; //{21}
    }
  };

  var findMinNode = function(node){
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  };

  var heightNode = function(node) {
    if (node === null) {
      return -1;
    } else {
      return Math.max(heightNode(node.left),
      heightNode(node.right)) + 1;
    }
  };

  var rotationRR = function(node) {
    var tmp = node.right;  
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  };

  var rotationLL = function(node) {
    var tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  };

  var rotationLR = function(node) {
    node.left = rotationRR(node.left);
    return rotationLL(node);
  };

  var rotationRL = function(node) {
    node.right = rotationLL(node.right);
    return rotationRR(node);
  };
}

var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

function printNode(value){
  console.log(value);
}
tree.inOrderTraverse(printNode);
