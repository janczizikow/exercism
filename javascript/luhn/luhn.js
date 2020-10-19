export const valid = (creditCard) => {
  if (/[^0123456789 ]/g.test(creditCard)) {
    return false;
  }

  const digits = creditCard.match(/\d/g).map(Number);

  if (digits.length < 2) {
    return false;
  }

  let sum = 0;
  let isEven = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (isEven) {
      const multiplied = digits[i] * 2;
      sum += multiplied > 9 ? multiplied - 9 : multiplied;
    } else {
      sum += digits[i];
    }
    isEven = !isEven;
  }

  return sum % 10 === 0;
};
