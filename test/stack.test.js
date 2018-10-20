const { assert } = require("chai");

const Stack = require("../geeksDataStructures/Stack");

describe("Stack", () => {
  it("Should push items to top of stack", () => {
    var stack = new Stack(2, 4);
    assert.equal(stack.push(1));
    assert.equal(stack.push(2));
    assert.deepEqual(stack.items[2], 1);
  });
  it("Should pop item from top of stack", () => {
    const stack = new Stack(1, 2, 3);
    assert.equal(stack.pop(), 3);
  });
  it("Should peek what is at top of stack", () => {
    const stack = new Stack(1, 2, 4);
    assert.equal(stack.peek(), 4);
  });
  it("Should return true since stack is empty"), () =>{
    const stack = new Stack(1)
    assert.equal(stack.isEmpty(), 'it is not empty')
  }
});
