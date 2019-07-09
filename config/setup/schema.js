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
        description: "Project title [letters and spaces]",
        message: "Name must be only letters and spaces, and no foreign characters",
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
  features: {
    properties: {
      features: {
        message: "Do you want customize the package?",
        description: "yes|y or no|n",
        pattern: /(y|yes|n|no)/,
        default: "no",
        required: true,
      },
    },
  },
  git: {
    properties: {
      ownRepo: {
        message:
          "Keep empty to get an empty repo or enter a valid git repository SSH URL. like [git@github.com:user/repo.git]",
        description: "SSH Url",
        default: "no",
        pattern: /^(no|(https|git)(:\/\/|@)([^\/:]+)[\/:]([^\/:]+)\/(.+).git)$/,
      },
    },
  },
};

module.exports = {
  schema,
};
