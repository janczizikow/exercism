const genKey = (length = 100) => {
  let key = "";
  const MIN = 97; // charCode for "a"
  const MAX = 122; // charCode for "z"
  for (let i = 0; i < length; i++) {
    key += String.fromCharCode(
      Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
    );
  }
  return key;
};

export class Cipher {
  constructor(key) {
    this.key = key || genKey();
    this.lookup = {};
  }

  getLookupKeyByValue(value) {
    return Object.keys(this.lookup).find(key => this.lookup[key] === value);
  }

  encode(message) {
    message.split("").forEach((char, i) => (this.lookup[char] = this.key[i]));
    return this.key.substring(0, message.length);
  }

  decode(message) {
    return message
      .split("")
      .map(char => this.getLookupKeyByValue(char))
      .join("");
  }
}
