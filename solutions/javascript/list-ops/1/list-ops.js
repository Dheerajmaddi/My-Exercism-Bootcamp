//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values = []) {
    this.values = values;
  }
  
  append(otherList) {
    const result = [...this.values];
    for (const item of otherList.values) {
      result[result.length] = item;
    }
    return new List(result);
  }

  concat(otherLists) {
    let result = new List(this.values);
    for (const list of otherLists.values) {
      result = result.append(list);
    }
    return result;
  }

  filter(predicate) {
    const result = [];
    for (let item of this.values) {
      if (predicate(item)) result[result.length] = item;  
    }
    return new List(result);
  }

  map(mapFunction) {
    const result = [];
    for (const item of this.values) {
      result[result.length] = mapFunction(item);
    }
    return new List(result);
  }

  length() {
    let count = 0;
    for (const _ of this.values) {
      count++;
    }
    return count;
  }

  foldl(reduceFn, accumulator) {
    for (let item of this.values) {
      accumulator = reduceFn(accumulator, item);
    }
    return accumulator;
  }

  foldr(reduceFn, accumulator) {
    for (let index = this.values.length - 1; index >= 0; index--) {
      accumulator = reduceFn(accumulator, this.values[index]); 
    }
    return accumulator;
  }

  reverse() {
    const result = [];
    for (let index = 0; index < this.values.length; index++) {
      result[index] = this.values[this.values.length - index - 1];
    }
    return new List(result);
  }
}
