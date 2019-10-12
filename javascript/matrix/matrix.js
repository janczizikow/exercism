export class Matrix {
  constructor(matrixString) {
    this.rows = matrixString
      .split("\n")
      .map(char => char.split(" ").map(c => parseInt(c, 10)));
    this.columns = this.rows.map((_, i) => this.rows.map(r => r[i]));
  }
}
