export class Squares {
  constructor(limit) {
    this.limit = limit;
  }

  get squareOfSum() {
    return Math.pow((this.limit * (this.limit + 1)) / 2, 2);
  }

  get sumOfSquares() {
    return (this.limit * (this.limit + 1) * (2 * this.limit + 1)) / 6;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
