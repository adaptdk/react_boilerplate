const colors = require("colors/safe");

// Color Functions
const color = {
  bold: value => colors.bold(value),
  dim: value => colors.gray(value),
  warn: value => colors.yellow(value),
  underline: value => colors.underline(value),
  error: value => colors.red(value),
  highlight: value => colors.blue(value),
};

const spacer = amount => (amount > 0 ? new Array(amount).fill("").forEach(() => print(``)) : null);

const print = (string, variant, space = [0, 0]) => {
  // Pre String Space
  spacer(space[0]);

  switch (variant) {
  case "bold":
    console.log(color.bold(string));
    break;
  case "dim":
    console.log(color.dim(string));
    break;
  case "error":
    console.log(color.error(string));
    break;
  case "warn":
    console.log(color.warn(string));
    break;
  case "underline":
    console.log(color.underline(string));
    break;
  default:
    console.log(string);
    break;
  }

  // Post String Space
  spacer(space[1]);
};

module.exports = {
  ...color,
  spacer,
  print,
};
