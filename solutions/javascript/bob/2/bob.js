//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const isAllCapitals = (message) => /[A-Z]/.test(message) && message === message.toUpperCase();
  message = message.trim();
  
  if(message.length === 0) return 'Fine. Be that way!';
  if(message.endsWith('?')) return isAllCapitals(message) ? `Calm down, I know what I'm doing!` : 'Sure.';
  if (isAllCapitals(message)) return 'Whoa, chill out!'
  
  return 'Whatever.';

};
