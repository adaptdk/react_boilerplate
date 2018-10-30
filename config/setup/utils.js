/* eslint-disable */

const colors = require('colors/safe');
const { exec } = require('child_process');

const syncFunc = func => {
  func = function(cmd, callback) {
    exec(cmd, (error, stdout, stderr) => {
      if (error) throw error;
      callback(stdout);
    });
  }
};

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
  syncFunc,
};
