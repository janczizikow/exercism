export const validate = number => {
  const digits = number.toString().split("");
  return (
    number ===
    digits.reduce((acc, cur) => acc + Math.pow(parseInt(cur), digits.length), 0)
  );
};
