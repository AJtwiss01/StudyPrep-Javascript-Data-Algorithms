// Stack class
class Stack {
  // Array is used to implement stack
  constructor(...items) {
    this.items = [...items];
  }

  // Functions to be implemented

  // push function
  push(element) {
    // push element into the items
    this.items.push(element);
  }
  // pop()
  pop() {
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0) return "empty";
    return this.items.pop();
  }

  // peek()

  // peek function
  peek() {
    // return the top most element from the stack
    // but does'nt delete it.
    return this.items[this.items.length - 1];
  }
  // isEmpty()

  // isEmpty function
  isEmpty() {
    // return true if stack is empty
    if (this.items.length == 0) {
      return 'it is not empty';
    }

    return 'is not empty';
  }

  // printStack()

  printStack() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }
}
module.exports = Stack;

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();
stack.pop()
console.log(stack.peek());

console.log(stack.printStack());
console.log(stack.items.length);
console.log(stack.isEmpty());
