/** Class representing a Stack. */

class Stack {

    constructor() {
      this._storage = {};
      this._length = 0
    }
    /*
    * Adds a new value at the end of the stack
    * @param {*} value the value to push
    */
    push(value) {
      this._storage[this._length] = value
      this._length++;
    }
  
    /*
    * Removes the value at the end of the stack and returns it
    * @return {*} the last and newest value in the stack
    */
    pop() {
      if (this._length) {
        const lastValue = this._storage[this._length - 1];
        this._storage[this._length - 1] = undefined;
        this._length--;
        return lastValue;
      }
    }
    /*
    * Returns the value at the end of the stack without removing it
    * @return {*} the last and newest value in the stack
    */
    peek() {
    if (this._length) {
        return this._storage[this._length - 1];
      }
    }
    showAll() {
      if(this._length){
        return JSON.stringify(this._storage)
      }
    }
  }
  
  const myStack = new Stack();
  myStack.push('zero')
  myStack.push('one')
  console.log('before pop ' + myStack.peek())
  console.log('show all '+ myStack.showAll())
  // myStack.pop()
  // console.log('after pop' + myStack.peek())