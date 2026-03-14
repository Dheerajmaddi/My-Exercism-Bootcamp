//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (inputColors) => {
  // console.log(inputColors);
  return inputColors.slice(0, 2).reduce((finalNumber, color) => finalNumber * 10 + COLORS.indexOf(color), 0);
};
const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];