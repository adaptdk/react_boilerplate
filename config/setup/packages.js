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
    feature: [
      'redux',
    ]
  },
  {
    id: '3',
    title: 'Complex',
    branch: 'complex',
    feature: [
      'redux',
    ]
  },
];

// Features that have multiple structures
const features = {
  redux: [
    {
      id: '1',
      title: 'Function',
      name: 'function',
    },
    {
      id: '2',
      title: 'Ducks',
      name: 'ducks',
    },
  ]
};

module.exports = {
  packages,
  features,
};
