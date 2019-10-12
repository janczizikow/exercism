export const solve = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") return null;
  const RADIUS = 10;

  if (Math.abs(x) > RADIUS || Math.abs(y) > RADIUS) {
    return 0;
  }
};
