/* eslint-disable */

const colors = require('colors/safe');
const fs = require('fs');

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


const fileReadWriteAsync = (match, value, filePath) => {
  // The file path is relative to the root
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) throw err;
    const find = new RegExp(match, 'gm');
    const newValue = data.replace(find, value);
    fs.writeFile(filePath, newValue, 'utf-8', (err) => {
      if (err) throw err;
    });
  })
};

filesReadWriteAsync = array => {
  try {
    array.forEach(item => fileReadWriteAsync(item.match, item.replace, item.file));
  } catch (err) {
    throw err;
  }
};

// Exporting
module.exports = {
  ...color,
  ...checks,
  filesReadWriteAsync,
};
