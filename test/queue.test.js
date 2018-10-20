const { assert } = require("chai");

const Queue = require("../geeksDataStructures/Queue");

describe("queue", () => {
  it("Should enqueue items to top of queue", () => {
    var queue = new Queue(2, 4);
    assert.equal(queue.enqueue(1));
    assert.equal(queue.enqueue(2));
    assert.deepEqual(queue.items[1], 4);
  });
  it("Should dequeue items from bottom of queue", () => {
    var queue = new Queue(2, 4, 6, 8);
    assert.equal(queue.dequeue(), 2);
    assert.deepEqual(queue.items[0], 4);
  });
  it("Should front item from begingin of queue", () => {
    var queue = new Queue(2, 4, 6, 8);
    assert.equal(queue.front(), 2);
    assert.deepEqual(queue.items[0], 2);
  });
});
