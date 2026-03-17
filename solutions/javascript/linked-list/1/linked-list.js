//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  constructor(){
    this.doublyLinkedList = [];
  }
  push(number) {
    this.doublyLinkedList.push(number);
  }

  pop() {
    return this.doublyLinkedList.pop();
  }

  shift() {
    return this.doublyLinkedList.shift();
  }

  unshift(number) {
    this.doublyLinkedList.unshift(number);
  }

  delete(number) {
    let itemIndex = this.doublyLinkedList.indexOf(number);
    if(itemIndex !== -1) this.doublyLinkedList.splice(itemIndex, 1);
  }

  count() {
    return this.doublyLinkedList.length;
  }
}
