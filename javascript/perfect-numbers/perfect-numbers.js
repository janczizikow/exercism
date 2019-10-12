export const classify = number => {
  if (number < 1) {
    throw new Error("Classification is only possible for natural numbers.");
  }

  let aliquotSum = 1;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      aliquotSum += i;
    }
  }

  if (aliquotSum === number) {
    return "perfect";
  } else if (aliquotSum > number) {
    return "abundant";
  } else {
    return "deficient";
  }
};
