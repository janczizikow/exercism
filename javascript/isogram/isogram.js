export const isIsogram = str => {
  const letters = str.replace(/[^a-z]/i, "");
  return new Set(letters.toLowerCase()).size === letters.length;
};
