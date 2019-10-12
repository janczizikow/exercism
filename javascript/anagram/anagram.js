export class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }

  matches(candidates) {
    return candidates.filter(candidate => {
      const normailzed = candidate.toLowerCase();
      if (normailzed.length !== this.word.length || normailzed === this.word) {
        return false;
      }

      return this.alphabetize(this.word) === this.alphabetize(normailzed);
    });
  }

  alphabetize(str) {
    return str
      .split("")
      .sort()
      .join("");
  }
}
