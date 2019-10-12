export const hey = message => {
  const msg = message.trim();
  const isYelling =
    msg.match(/[A-Z]/g) &&
    msg.match(/[A-Z]/g).length ===
      msg.split("").filter(char => /[A-Z]/i.test(char)).length;

  if (isYelling && msg.endsWith("?")) {
    return "Calm down, I know what I'm doing!";
  } else if (isYelling) {
    return "Whoa, chill out!";
  } else if (msg.endsWith("?")) {
    return "Sure.";
  } else if (!msg.match(/\w+/g)) {
    return "Fine. Be that way!";
  } else {
    return "Whatever.";
  }
};
