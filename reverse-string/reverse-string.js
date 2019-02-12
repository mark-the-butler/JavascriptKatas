const reverseString = (string) => {
  if (!string) {
    return '';
  }

  let stringReversed = '';

  for (let i = string.length - 1; i >= 0; i -= 1) {
    stringReversed += string[i];
  }

  return stringReversed;
};

module.exports = { reverseString };
