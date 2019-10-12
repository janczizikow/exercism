export class Series {
  constructor(str) {
    this.digits = str.split("").map(el => parseInt(el));
  }

  slices(num) {
    if (num > this.digits.length) {
      throw new Error("Slice size is too big.");
    }

    return this.digits.reduce(
      (acc, cur, i, self) =>
        i + num <= self.length ? acc.concat([self.slice(i, i + num)]) : acc,
      []
    );
  }
}
