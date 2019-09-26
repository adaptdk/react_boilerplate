const actions = require("./actions");
const file = require("./file");
const logger = require("./logger");
const schema = require("./schema");

module.exports = {
  ...actions,
  ...file,
  ...logger,
  ...schema,
};
