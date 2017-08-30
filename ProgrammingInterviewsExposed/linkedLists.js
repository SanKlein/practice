// singly linked list
function ListElement(val, next) {
  this.val = val;
  this.next = next || null;
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
