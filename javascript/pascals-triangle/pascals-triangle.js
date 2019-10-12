const range = max => Array.from({ length: max }).map((_, i) => i + 1);
const factorial = n => {
  if (n === 0) {
    return 1;
  }
  return range(n).reduce((acc, cur) => acc * cur, 1);
};

export class Triangle {
  static getRowValue(rowIndex, colIndex) {
    return (
      factorial(rowIndex) /
      (factorial(colIndex) * factorial(rowIndex - colIndex))
    );
  }

  constructor(numRows) {
    this.rows = range(numRows).map(row =>
      range(row).map(col => Triangle.getRowValue(row - 1, col - 1))
    );
    this.lastRow = this.rows[this.rows.length - 1];
  }
}
