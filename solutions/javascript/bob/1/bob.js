//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const questionRegex = /\?\s*$/;
  const allCapitalsRegex = /^(?=.*[A-Z])[^a-z]+$/;
  const silenceRegex = /^\s*$/;
  
  if (questionRegex.test(message) && allCapitalsRegex.test(message)) return `Calm down, I know what I'm doing!`;
  else if (questionRegex.test(message)) return 'Sure.';
  else if(allCapitalsRegex.test(message)) return 'Whoa, chill out!';
  else if (silenceRegex.test(message)) return 'Fine. Be that way!'
  else return 'Whatever.';
};
