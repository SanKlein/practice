class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length-1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  print() {
    console.log(this.items.toString());
  }
}

let stack = new Stack();
// console.log(stack.isEmpty()); //outputs true

stack.push(5);
stack.push(8);

// console.log(stack.peek()); // outputs 8

stack.push(11);
// console.log(stack.size()); // outputs 3
// console.log(stack.isEmpty()); //outputs false

stack.push(15);

stack.pop();
stack.pop();
// console.log(stack.size()); // outputs 2
stack.print(); // outputs [5, 8]

function divideBy2(decNumber){
  var remStack = new Stack(),
      rem,
      binaryString = '';

  while (decNumber > 0){
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }

  while (!remStack.isEmpty()){
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

console.log(divideBy2(45));
