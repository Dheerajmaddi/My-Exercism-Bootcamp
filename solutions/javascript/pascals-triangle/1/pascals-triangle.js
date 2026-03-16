//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (rowCount) => {
  let triangle = [];

  for (let row = 0; row < rowCount; row++) {
   let currentRowNumbers = [];
    for(let number = 0; number <= row; number++){
      if(number === 0 || number === row) {
        currentRowNumbers.push(1);
        continue;
      }

      let left = triangle[row - 1][number - 1];
      let right = triangle[row - 1][number];

      currentRowNumbers.push(left + right);
    }
    triangle.push(currentRowNumbers);
  }
  return triangle;
};
