//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  let ordinal = 'th'
  
  let lastDigit = number % 10;
  let lastTwoDigits = number % 100;
  if (lastDigit === 1 && lastTwoDigits != 11) {
    ordinal = 'st';
  } else if (lastDigit === 2 && lastTwoDigits != 12) {
    ordinal = 'nd';
  } else if (lastDigit === 3 && lastTwoDigits != 13) {
    ordinal = 'rd';
  }
  
  let formattedString = name + ', you are the ' + number + ordinal + ' customer we serve today. Thank you!';
  return formattedString;
};
