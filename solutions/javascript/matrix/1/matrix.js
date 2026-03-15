//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  get rows() {
    const transformRow = (row) => row.map(num => Number(num));
    
    return this.matrix.split('\n').map(row => transformRow(row.split(' ')) );
  }

  get columns() {
    let allRows = this.rows;
    let allColumns = [];
    const colLength = Array.isArray(allRows[0]) ? allRows[0].length : allRows.length;
      
    for (let index = 0; index < colLength; index++) {
      let column = allRows.map(row => row.shift());
      
      allColumns.push(column);
    }

    return allColumns;
    
  }
}
