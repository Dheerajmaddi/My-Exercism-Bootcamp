// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let minutes;
  switch(name) {
    case 'Pure Strawberry Joy':
      minutes = 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      minutes = 1.5;
      break;
    case 'Tropical Island':
      minutes = 3;
      break;
    case 'All or Nothing':
      minutes = 5;
      break;
    default:
      minutes = 2.5;
  }
  return minutes;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let count = 0;
  let requiredWedges = 0;
  let wedgesInALime = 0;
  while(requiredWedges < wedgesNeeded && limes.length != 0){
    switch(limes.shift()) {
      case 'small':
        wedgesInALime = 6;
        break;
      case 'medium':
        wedgesInALime = 8;
        break;
      case 'large':
        wedgesInALime = 10;
        break;
      // default:
      //   wedgesInALime = 0;
    }

    requiredWedges += wedgesInALime;
    count++;
  }
  return count;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let timeToPrepareJuice;
  
  while(timeLeft > 0){
    timeToPrepareJuice = timeToMixJuice(orders.shift());
    timeLeft -= timeToPrepareJuice;
  }
  return orders;
}
