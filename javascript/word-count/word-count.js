export class Words {
  count(phrase) {
    return phrase
      .trim()
      .replace(/\s+/g, " ")
      .split(" ")
      .map(word => word.toString().toLowerCase())
      .reduce(
        (acc, curr) =>
          acc.hasOwnProperty(curr)
            ? Object.assign(acc, { [curr]: acc[curr] + 1 })
            : Object.assign(acc, { [curr]: 1 }),
        {}
      );
  }
}
