const prompt = require('prompt');

const { isYes, isNo } = require('./utils');

// The Questions
const schema = {
  name: {
    properties: {
      name: {
        message: 'Name must be only letters and dashes',
        pattern: /^[a-zA-Z-]+$/,
        required: true,
      },
    },
  },
  packages: {
    properties: {
      package: {
        message: 'You must select a package by entering it\'s number [0-9]',
        pattern: /[0-9]/,
        required: true,
      },
    },
  },
  git: {
    properties: {
      removeLocal: {
        description: 'Do you want to remove the boilerplate git repository? [y/n]',
        message: 'Answer with either yes, y, no or no.',
        pattern: /^(yes|y|no|n)/,
        required: true,
      },
      addOwnRepo: {
        description: 'Awesome! Would you like to add your own empty git repo? [y/n]',
        message: 'Answer with either yes, y, no or no.',
        pattern: /^(yes|y|no|n)/,
        ask: () => prompt.history('removeLocal') && isYes(prompt.history('removeLocal').value),
      },
      ownRepo: {
        description: 'Alright, what\'s the SSH url for your git repo? [git@github.com:user/repo.git]',
        pattern: /^(https|git)(:\/\/|@)([^\/:]+)[\/:]([^\/:]+)\/(.+).git$/,
        message: 'You need to enter a valid git repository URL. like [git@github.com:user/repo.git]',
        ask: () => console.log(prompt.history('addOwnRepo') && isYes(prompt.history('addOwnRepo').value)) || prompt.history('addOwnRepo') && isYes(prompt.history('addOwnRepo').value),
      },
    },
  },
};

module.exports = {
  schema,
};