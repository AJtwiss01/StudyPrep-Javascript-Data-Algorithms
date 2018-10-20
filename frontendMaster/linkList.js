/** Class representing a Linked List. */

class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
  }
  /*
    * Inserts a new value to the end of the linked list
    * @param {*} value - the value to insert
    */
  insert(value) {
    //update tail
    const node = { value, next: null };
    this.tail.next = node;
    this.tail = node;
  }
  /*
    * Removes the value at the end of the linked list
    * @return {*} - the removed value
    */

  // head{ value: 1, next: { value: 2, next: { value: 3, next: null } } }
  //taile { value: 3, next: null }

  removeTail() {
    // loop and find node before tail
    //node next = this.tail
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
      console.log("current node loop" + JSON.stringify(currentNode));
    }
    currentNode.next = null;
    console.log("what is it " + JSON.stringify(currentNode));
    this.tail = currentNode;
  }
  /*
    * Searches the linked list and returns true if it contains the value passed
    * @param {*} value - the value to search for
    * @return {boolean} - true if value is found, otherwise false
    */
  contains(value) {
    let currentNode = this.head;
    while (currentNode.value !== value) {
      currentNode = currentNode.next;
      if (!value) {
        return currentNode.value === value;
      }
    }

    return currentNode.value === value;
  }
  /*
    * Checks if a node is the head of the linked list 
    * @param {{prev:Object|null, next:Object|null}} node - the node to check
    * @return {boolean} - true if node is the head, otherwise false
    */
  isHead(node) {
    console.log(node);
    return node === this.head.value;
  }
  /*
    * Checks if a node is the tail of the linked list 
    * @param {{prev:Object|null, next:Object|null}} node - the node to check
    * @return {boolean} - true if node is the tail, otherwise false
    */
  isTail(node) {
    console.log(node);
    return node === this.tail.value;
  }
}

const myList = new LinkedList(1);
myList.insert(2);
myList.insert(3);
myList.insert("four");
myList.insert(9);

console.log(myList.head);
myList.removeTail();
myList.removeTail();
console.log(myList.contains(2));

console.log(myList.contains(0));
