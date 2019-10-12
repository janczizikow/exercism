export class RotationalCipher {
  static rotate(str, amount) {
    return str
      .split("")
      .map(char => {
        const isLetter = /[a-z]/i.test(char);
        const charCode = char.charCodeAt(0);
        const code = char.match(/[A-Z]/)
          ? ((charCode - 65 + amount) % 26) + 65
          : ((charCode - 97 + amount) % 26) + 97;
        return isLetter ? String.fromCharCode(code) : char;
      })
      .join("");
  }
}
