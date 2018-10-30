/* eslint-disable */

const colors = require('colors/safe');
const { exec } = require('child_process');

// Color Functions
const color = {
  bold: value => colors.bold(value),
  dim: value => colors.gray(value),
  warn: value => colors.yellow(value),
  underline: value => colors.underline(value),
  error: value => colors.red(value),
  highlight: value => colors.blue(value),
};

const checks = {
  isNo: value => value === 'n' || value === 'no',
  isYes: value => value === 'y' || value === 'ye' || value === 'yes',
};

// Exporting
module.exports = {
  ...color,
  ...checks,
};
