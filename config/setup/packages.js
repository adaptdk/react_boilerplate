// Utilities
const {
  underline,
} = require('./utils');

// Read more about the different packages here: https://github.com/adaptdk/react_boilerplate
// The different packages
const packages = [
  {
    id: '1',
    title: 'Base (TypeScript)',
    branch: 'typescript/base',
  },
  {
    id: '2',
    title: 'Complex (TypeScript)',
    branch: 'typescript/complex',
  },
  {
    id: '3',
    title: 'Base',
    branch: 'regular/base',
  },
  {
    id: '4',
    title: 'Complex',
    branch: 'regular/complex',
  },
  // {
  //   id: '2',
  //   title: 'Complex',
  //   branch: 'complex',
  //   features: [
  //     'redux',
  //   ],
  // },
];

// Features that have multiple structures
// This will not be used, if none of the packages includes one of it's features.
const features = {
  redux: {
    predescription: `Read more about code structure here ${underline(
      'https://redux.js.org/faq/codestructure#code-structure')}`,
    description: 'Which code structure of Redux do you want?',
    pattern: /[0-9]/,
    message: 'The key you\'ve entered doesn\'t exists',
    variants: [
      {
        id: '1',
        title: 'Ducks',
        name: 'ducks',
      },
      {
        id: '2',
        title: 'Function',
        name: 'function',
      },
    ],
  },
};

module.exports = {
  packages,
  features,
};
