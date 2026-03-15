//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(inputStringMatrix) {
    this.matrix = inputStringMatrix.split('\n')
      .map(rowString => rowString.split(' '));
  }

  get rows() {
    return this.matrix.map(row => row.map(number => +number));
  }

  get columns() {
    let allRows = this.rows;

    return allRows[0].map((_, index) => allRows.map(row => row[index]));
    
  }
}
