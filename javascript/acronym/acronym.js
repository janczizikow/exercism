export const parse = phrase => {
  return phrase
    .replace("'", "")
    .split(/\W+/)
    .map(word => {
      const firstLetter = word.match(/[a-z]/i)[0];
      return firstLetter ? firstLetter.toUpperCase() : "";
    })
    .join("");
};
