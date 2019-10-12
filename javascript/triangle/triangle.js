export class Triangle {
  constructor(...sides) {
    const isValid = this.isValid(sides);

    if (!isValid) {
      throw new Error("Invalid triangle sides");
    }

    this.uniqueSides = new Set(sides);
  }

  isValid(sides) {
    return (
      sides.length === 3 &&
      !sides.includes(el => el < 0) &&
      sides.reduce((acc, cur) => acc + cur, 0) > 0 &&
      sides[0] + sides[1] > sides[2] &&
      sides[2] + sides[0] > sides[1] &&
      sides[1] + sides[2] > sides[0]
    );
  }

  kind() {
    switch (this.uniqueSides.size) {
      case 1:
        return "equilateral";
      case 2:
        return "isosceles";
      default:
        return "scalene";
    }
  }
}
