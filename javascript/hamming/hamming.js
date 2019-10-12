export function compute(strand1, strand2) {
  if (strand1.length !== strand2.length) {
    if (!strand1.length) {
      throw new Error("left strand must not be empty");
    } else if (!strand2.length) {
      throw new Error("right strand must not be empty");
    } else {
      throw new Error("left and right strands must be of equal length");
    }
  }

  return strand1
    .split("")
    .reduce((acc, cur, i) => (cur !== strand2[i] ? acc + 1 : acc), 0);
}
