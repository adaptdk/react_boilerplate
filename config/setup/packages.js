/* eslint-disable */

// Utilities
const { dim } = require("./utilities");

const urlRegExp = /htt(ps|p).*(:|.)/;

// Read more about the different packages here: https://github.com/adaptdk/react_boilerplate
const packages = [
  {
    id: "1",
    title: "Base (TypeScript)",
    branch: "typescript/base",
    features: [{ name: "proxy" }],
  },
  {
    id: "2",
    title: "Complex (TypeScript)",
    branch: "typescript/complex",
    features: [{ name: "proxy" }],
  },
  {
    id: "3",
    title: "Base",
    branch: "regular/base",
    features: [{ name: "proxy" }],
  },
  {
    id: "4",
    title: "Complex",
    branch: "regular/complex",
    features: [{ name: "proxy" }],
  },
];

// Features that have multiple structures
// This will not be used, if none of the packages includes one of it's features.
const features = [
  {
    name: "proxy",
    title: "Proxy another site?",
    description: `Do you want to proxy the site onto another local environment? ${dim(
      "You can always enable later in config/config-overrides.js"
    )}`,
    schema: {
      properties: {
        proxy: {
          message: `Add URL or keep empty to continue without proxying. ${dim(
            "You can always enable later in config/config-overrides.js"
          )}`,
          description: "Local Env. URL",
          pattern: urlRegExp,
          default: "no",
          required: true,
        },
      },
    },
  },
];

module.exports = {
  packages,
  features,
};
