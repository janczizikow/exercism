export function reverseString(string) {
  const lastIndex = string.length - 1;

  if (lastIndex <= 0) {
    return string;
  }

  return string[lastIndex] + reverseString(string.slice(0, lastIndex));
}
