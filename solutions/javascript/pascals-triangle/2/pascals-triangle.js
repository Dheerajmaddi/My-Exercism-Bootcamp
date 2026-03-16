//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (rowCount) => {
  let triangle = [];

  for (let row = 0; row < rowCount; row++) {
   let currentRowNumbers = [1];
   let value = 1;
    
    for(let number = 0; number < row; number++){
      value = (value * (row - number)) / (number + 1);
      currentRowNumbers.push(value);
    }
    triangle.push(currentRowNumbers);
  }
  return triangle;
};
