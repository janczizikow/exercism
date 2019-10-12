//
// This is only a SKELETON file for the 'Beer Song' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BeerSong {
  static verse(n) {
    const isPlural = n - 1 > 1;

    if (n === 0) {
      return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`;
    } else if (n === 1) {
      return `${n} bottle of beer on the wall, ${n} bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.
`;
    } else {
      return `${n} bottles of beer on the wall, ${n} bottles of beer.
Take one down and pass it around, ${n - 1} bottle${
        isPlural ? "s" : ""
      } of beer on the wall.
`;
    }
  }

  static sing(start = 99, end = 0) {
    if (start <= end) {
      return this.verse(end);
    }

    return this.verse(start) + "\n" + this.sing(start - 1, end);
  }
}
