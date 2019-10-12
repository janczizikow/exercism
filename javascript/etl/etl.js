export const transform = oldScore => {
  let newScore = {};
  Object.entries(oldScore).forEach(([score, letters]) => {
    letters
      .map(letter => letter.toLowerCase())
      .forEach(letter => {
        newScore[letter]
          ? (newScore[letter] += parseInt(score, 10))
          : (newScore[letter] = parseInt(score, 10));
      });
  });
  return newScore;
};
