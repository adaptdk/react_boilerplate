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

/**
 * Executes an Find/Replace
 * You can both add two strings to match/replace or an array with matching indexes.
 * As an example match: [0: 'b', 1: 'a'] replace: [0: 'c', 1: 'd'] => match: ['b', 'a']
 * @param {string|array} match      What you want to match.
 * @param {string|array} replace    What you want the matched to be replaced with
 * @param {string} filePath         The file that you want to run find/replace ons path relatively to the root
 * @returns {null}
 */
const fileReadWriteAsync = (match, replace, filePath) => {
  try {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) throw err;
      let find,
        newValue;

      // if the match is an array, then we'll have to do multiple find replace.
      if (Array.isArray(match)) {
        if (!Array.isArray(replace)) {
          throw 'Both your match and values have to be an Array in order for multiple replace to work.';
        }

        if (match.length !== replace.length) {
          const matchIsLonger = match.length > replace.length ? 'matches > values' : 'matches < values';
          throw `
        When replacing multiple, you'll need the same amount of find/replace values.
        Your current situation: ${matchIsLonger}
        `;
        }
        find = [];
        newValue = data;
        match.forEach((matching, matchIndex) => {
          replace.forEach((replacing, replaceIndex) => (
            matchIndex === replaceIndex && find.push({ matching, replacing })
          ));
        });
        find.forEach(matched => {
          newValue = newValue.replace(matched.matching, matched.replacing);
        });
      } else {
        find = new RegExp(match, 'gm');
        newValue = data.replace(find, replace);
      }

      fs.writeFile(filePath, newValue, 'utf-8', (err) => {
        if (err) throw err;
      });
    });
  } catch (err) {
    throw err;
  }
};

/**
 * Executes the fileReadWriteAsync function on an array of items
 * @param {array} array     The array that should executed on
 * @returns {null}
 */
const filesReadWriteAsync = array => {
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
