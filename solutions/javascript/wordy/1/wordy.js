//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Math operations
const OPERATORS = {
  'plus': (a, b) => a + b,
  'minus': (a, b) => a - b,
  'multiplied': (a, b) => a * b,
  'divided': (a, b) => a / b,
};

export const answer = (question) => {
  const match = question.match(/^What is\s*(.*)\?$/);
  if (!match) throw new Error('Unknown operation');

  const expression = match[1].replace(/ by/g, '').trim();
  if (expression === '') throw new Error('Syntax error');

  const tokens = expression.split(' ');

  let result = Number(tokens[0]);
  if (isNaN(result)) {
    if (OPERATORS[tokens[0]]) throw new Error('Syntax error');
    throw new Error('Unknown operation');
  }

  for (let i = 1; i < tokens.length; i += 2) {
    const opName = tokens[i];
    const nextValStr = tokens[i + 1];

    if (!isNaN(Number(opName))) throw new Error('Syntax error');

    const operation = OPERATORS[opName];
    if (!operation) throw new Error('Unknown operation');

    if (nextValStr === undefined) throw new Error('Syntax error');
    
    const nextVal = Number(nextValStr);
    if (isNaN(nextVal)) throw new Error('Syntax error');

    result = operation(result, nextVal);
  }

  return result;
};