class Node {
  //constructor
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //   add element ad the end of list
  add(element) {
    //creates new node
    var node = new Node(element);
    //to store current node
    var current;
    if (this.head === null) {
      this.head = node;
      console.log("head null " + JSON.stringify(this.head));
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      //    add node
      current.next = node;
    }
    console.log("adding the size = " + this.size);
    this.size++;
  }
  // insert element at the position index
  // of the list
  insertAt(element, index) {
    if (index > 0 && index > this.size) return false;
    else {
      // creates a new node
      var node = new Node(element);
      var curr, prev;

      curr = this.head;

      // add the element to the
      // first index
      if (index == 0) {
        node.next = head;
        this.head = node;
      } else {
        curr = this.head;
        var it = 0;

        // iterate over the list to find
        // the position to insert
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // adding an element
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }
}

module.exports = LinkedList;

var ll = new LinkedList();

ll.add(10);
ll.add(20);
