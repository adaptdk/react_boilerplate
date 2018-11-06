// Utilities
const {
  underline,
} = require('./utils');

// Read more about the different packages here: https://github.com/adaptdk/react_boilerplate
// The different packages
const packages = [
  {
    id: '1',
    title: 'Base',
    branch: 'base',
  },
  {
    id: '2',
    title: 'Simple',
    branch: 'simple',
  },
  {
    id: '3',
    title: 'Complex',
    branch: 'complex',
    // If you want to ask extra questions based on features, you can add them like this, and then in the getFeatures().
    // If the features key match one of the props in the features object below, then it'll ask an extra questions, selecting one of the variants
    // features: [
    //   'redux',
    // ],
  },
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
