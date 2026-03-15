//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ONE_BOOK_PRICE = 8 * 100;
const DISCOUNTS_PER_QUANTITY = {
  0: 0,
  1: ONE_BOOK_PRICE,
  2: 2 * ONE_BOOK_PRICE * 0.95,
  3: 3 * ONE_BOOK_PRICE * 0.90,
  4: 4 * ONE_BOOK_PRICE * 0.80,
  5: 5 * ONE_BOOK_PRICE * 0.75
}

export const cost = (books) => {
  const counts = [0,0,0,0,0];
  books.forEach(book => counts[book - 1]++);

  const previousSetCalculations = {};

  const calculateMin = currentCounts => {
    currentCounts.sort((a, b) => b - a);
    const state = currentCounts.join(',');

    if(state === '0,0,0,0,0') return 0;
    if(previousSetCalculations[state]) return previousSetCalculations[state];

    let minPrice = Infinity;
    const uniqueBooks = currentCounts.filter(c => c > 0).length;

    for (let size = 1; size <= uniqueBooks; size++) {
      const nextCounts = currentCounts.map((count, index) => index < size ? count - 1 : count);
      const price = DISCOUNTS_PER_QUANTITY[size] + calculateMin(nextCounts);

      minPrice = Math.min(minPrice, price);
    }

    previousSetCalculations[state] = minPrice;
    return minPrice;
  }
  return calculateMin(counts);
  
};
