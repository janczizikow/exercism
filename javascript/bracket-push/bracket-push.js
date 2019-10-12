export function bracketPush(str) {
  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  const stack = [];
  for (let char of str) {
    if (brackets[char]) {
      stack.push(char);
      continue;
    }
    const top = stack.pop();
    if (brackets[top] !== char) return false;
  }

  return stack.length === 0;
}
