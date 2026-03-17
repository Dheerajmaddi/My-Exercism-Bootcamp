//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Station {
  constructor(prev = null, next = null, name = null){
    this.prev = prev;
    this.next = next;
    this.name = name;
  }
}

export class LinkedList {
  constructor() {
    this.last = new Station();
    this.first = new Station(null, this.last);
    this.last.prev = this.first;
  }

  push(name) {
    let newStation = new Station(this.last.prev, this.last, name);
    this.last.prev.next = newStation;
    this.last.prev = newStation;
  }

  pop() {
    const name = this.last.prev.name;
    this.last.prev.prev.next = this.last;
    this.last.prev = this.last.prev.prev;
    return name;
  }

  unshift(name){
    let newStation = new Station(this.first, this.first.next, name);
    this.first.next.prev = newStation;
    this.first.next = newStation;
  }

  shift() {
    const name = this.first.next.name;
    this.first.next.next.prev = this.first;
    this.first.next = this.first.next.next;
    return name;
  }

  delete(name) {
    let station = this.first;
    
    while (station.next !== null) {
      if (station.name === name){
        station.next.prev = station.prev;
        station.prev.next = station.next
        break;
      }
      station = station.next;
    }
  }

  count() {
    let station = this.first;
    let size = 0;
    while(station.next !== this.last){
      size++;
      station = station.next;
    }
    return size;
  }
}