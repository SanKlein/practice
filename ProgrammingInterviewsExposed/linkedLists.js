// singly linked list
function LinkedList() {
  this.head = null;
}

LinkedList.prototype.insertInFront = function(val) {
  var newElement = new ListElement(val);
  newElement.setNext(this.head);
  this.head = newElement;
};

LinkedList.prototype.toString = function() {
  if (this.head === null) {
    console.log('empty list');
    return;
  }
  var elem = this.head;
  do {
    console.log(elem.value());
    elem = elem.next;
  } while (elem);
};

LinkedList.prototype.find = function(val) {
  if (this.isEmpty()) {
    console.log('empty list');
    return;
  }
  var elem = this.head;
  while (elem !== null && elem.value() !== val) {
    elem = elem.getNext();
  }
  if (elem === null) {
    console.log('value not in list');
  } else {
    console.log(elem);
  }
  return elem;
};

LinkedList.prototype.delete = function(val) {
  if (this.isEmpty()) {
    return false;
  }

  var elem = this.head;
  if (elem.value() === val) {
    this.head = elem.getNext();
    return true;
  }

  while (elem) {
    if (elem.getNext().value() === val) {
      elem.next = elem.getNext().getNext();
      return true;
    }
    elem = elem.getNext();
  }

  return false;
};

LinkedList.prototype.insertAfter = function(afterVal, val) {
  var newElem = new ListElement(val);

  if (afterVal === null) {
    newElem.setNext(this.head);
    this.head = newElem;
    return true;
  }

  var elem = this.head;
  while (elem) {
    if (elem.value() === afterVal) {
      newElem.setNext(elem.getNext());
      elem.setNext(newElem);
      return true;
    }
    elem = elem.getNext();
  }

  console.log('element value not found');
  return false;
};

LinkedList.prototype.removeHead = function() {
  if (!this.head || !this.head.getNext()) {
    return false;
  }

  this.head = this.head.getNext();
  return true;
};

LinkedList.prototype.findMthToLastElement = function(m) {
  var elem = this.head;

  for (var i = 0; i < m; i++) {
    if (!elem) {
      console.log('not enough elements');
      return false;
    }

    elem = elem.getNext();
  }

  var mthElem = this.head;
  while (elem.getNext()) {
    elem = elem.getNext();
    mthElem = mthElem.getNext();
  }

  console.log(mthElem);
  return mthElem;
};

LinkedList.prototype.isEmpty = function() {
  return this.head === null;
};

function ListElement(val) {
  this.val = val;
  this.next = null;
}

ListElement.prototype.getNext = function() {
  return this.next;
};

ListElement.prototype.value = function() {
  return this.val;
};

ListElement.prototype.setNext = function(elem) {
  this.next = elem;
};

ListElement.prototype.setValue = function(val) {
  this.val = val;
};

var list = new LinkedList();
list.toString();
list.insertInFront(3);
list.insertInFront(2);
list.insertInFront(1);
list.toString();
list.find(2);
list.find(5);
list.delete(2);
list.toString();
list.findMthToLastElement(0);
list.findMthToLastElement(1);
list.findMthToLastElement(5);

// stack implemented as a linked list
function LinkedListStack() {
  this.head = null;
}

LinkedListStack.prototype.push = function(val) {
  var elem = new ListElement(val);
  elem.setNext(this.head);
  this.head = elem;
};

LinkedListStack.prototype.pop = function() {
  if (this.head === null) {
    console.log('stack is empty');
    return;
  }
  var elem = this.head;
  this.head = elem.getNext();
  elem.setNext(null);
  return elem;
};

function LayeredListNode(val) {
  this.next = null;
  this.prev = null;
  this.child = null;
  this.val = val;
}

function LayeredList() {
  this.head = null;
  this.tail = null;
}

function displayFlatten(elem) {
  if (!elem) {
    return;
  }

  while (elem) {
    console.log(elem.val);
    displayFlatten(elem.child);
    elem = elem.next;
  }

  return;
}

function flattenList(head) {
  if (!head) {
    return;
  }
  var currElem = head;
  while (currElem) {
    if (currElem.child) {
      var { childHead, childTail } = flatten(currElem.child);
      childTail.next = currElem.next;
      currElem.next = childHead;
    }
    currElem = childTail.next;
  }

  return head;
}

function flatten(elem) {
  var head = tail = elem;
  while (elem) {
    if (elem.child) {
      var { childHead, childTail } = flatten(elem.child);
      childTail.next = elem.next;
      elem.next = childHead;
    }
    if (elem === tail) {
      tail = childTail;
      break;
    }
    elem = childTail.next;
  }
  return { head, tail };
}
