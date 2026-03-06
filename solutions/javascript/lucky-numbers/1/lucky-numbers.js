// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return Number(array1.join('')) + Number(array2.join(''));
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let number = String(value);
  let start = 0;
  let last = number.length - 1;
   
  while(start <= last) {
     if(number[start] !== number[last]){
       return false;
     }
    start++;
    last--;
   }
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  let message;
  if (!input) {
    message = 'Required field';
  } else {
    let conversion = Number(input);
    if(conversion === 0 || String(conversion) === 'NaN'){
      message = 'Must be a number besides 0';
    } else {
      message = '';
    }
  }
  return message;
}
