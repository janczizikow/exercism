export const encode = (message) => {
  const seq = [];
  let lastChar = null;

  for (let i = 0; i < message.length; i++) {
    if (message[i] === lastChar) {
      seq[seq.length - 1].push(message[i]);
    } else {
      seq.push([message[i]]);
    }

    lastChar = message[i];
  }

  return seq.reduce(
    (acc, cur) => (acc += cur.length > 1 ? `${cur.length}${cur[0]}` : cur[0]),
    ""
  );
};

export const decode = (message, output = "") => {
  if (!message.length) return output;

  const num = message.match(/^\d+/);
  const character = message.match(/[^\d]/);
  const res = output + character[0].repeat(num ? num[0] : 1);

  return decode(message.substring(character.index + 1), res);
};
