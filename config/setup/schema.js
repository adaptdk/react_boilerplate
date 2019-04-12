const prompt = require("prompt");

const { isYes } = require("./utils");

// The Questions
const schema = {
  name: {
    properties: {
      machine: {
        description: "Machine name [only lowercase]",
        message: "Name must be only be lowercase letters",
        pattern: /^[a-z]+$/,
        required: true,
      },
      title: {
        description: "Project title [only letters]",
        message: "Name must be only letters",
        pattern: /^[a-zA-Z-\s]+$/,
        required: true,
      },
    },
  },
  packages: {
    properties: {
      package: {
        message: "You must select a package by entering it's number [0-9]",
        description: "Which package do you want to setup? [1 is default]",
        pattern: /[0-9]/,
        default: "1",
        required: true,
      },
    },
  },
  git: {
    properties: {
      ownRepo: {
        description:
          "SSH Url",
        pattern: /^(https|git)(:\/\/|@)([^\/:]+)[\/:]([^\/:]+)\/(.+).git$/,
        message:
          "You need to enter a valid git repository URL. like [git@github.com:user/repo.git]",
      },
    },
  },
};

module.exports = {
  schema,
};
