/** Class representing a Hash Table */

class HashTable {
  constructor(val) {
    this._storage = [];
    this._tableSize = val;
  }
  /*
    * Inserts a new key-value pair
    * @param {string} key - the key associated with the value
    * @param {*} value - the value to insert
    */
  insert(key, value) {
    const index = this._hash(key, this._tableSize);
    if (!this._storage[index]) {
      this._storage[index] = [];
      // intalize storage if array empty lie [ 0,0,0, []]
    }
    this._storage[index].push([key, value]);
    // [0,0,0, [ 'a', 1]]
  }
  /*
    * Deletes a key-value pair
    * @param {string} key - the key associated with the value
    * @return {*} value - the deleted value
    */
  remove() {}
  /*
    * Returns the value associated with a key
    * @param {string} key - the key to search for
    * @return {*} - the value associated with the key
    */
  retrieve(key) {
    const index = this._hash(key, this._tableSize);
    console.log("index " + index);
    const arrayAtIndex = this._storage[index];
    console.log("my storage of key value pair " + arrayAtIndex);
    if (arrayAtIndex) {
      for (let i = 0; i < arrayAtIndex.length; i++) {
        console.log(arrayAtIndex[i]);
        const keyValueArray = arrayAtIndex[i];
        if (keyValueArray[0] === key) {
          return keyValueArray[1];
        }
      }
    }
  }
  /*
    * Hashes string value into an integer that can be mapped to an array index
    * @param {string} str - the string to be hashed
    * @param {number} n - the size of the storage array
    * @return {number} - an integer between 0 and n
    */
  _hash(str, n) {
    console.info(str + " && " + n);
    let sum = 0;
    for (let i = 0; i < str.length; i++) sum += str.charCodeAt(i) * 3;

    console.log(sum % 25);
    return sum % n;
  }
}

const myHash = new HashTable(5);

myHash.insert("a", 1);
myHash.insert("a", 2);
myHash.insert("b", 2);
myHash.insert("c", 1);


console.log('my retrieve ' + myHash.retrieve("b"));
