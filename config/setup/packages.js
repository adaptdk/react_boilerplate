/* eslint-disable */

// Utilities
const { dim } = require("./utilities");

// Read more about the different packages here: https://github.com/adaptdk/react_boilerplate
const packages = [
  {
    type: "break",
    title: "Typescript",
  },
  {
    id: "1",
    title: "Base",
    branch: "typescript/base",
    features: [{ name: "proxy" }],
  },
  {
    id: "2",
    title: "Complex",
    branch: "typescript/complex",
    features: [{ name: "proxy" }],
  },
  {
    id: "3",
    title: "Widgets",
    branch: "typescript/widgets",
    features: [{ name: "proxy" }],
  },
  {
    type: "break",
    title: "Regular",
  },
  {
    id: "4",
    title: "Base",
    branch: "regular/base",
    features: [{ name: "proxy" }],
  },
  {
    id: "5",
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
          pattern: /(no|^htt(ps|p).*(:|.))/,
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
