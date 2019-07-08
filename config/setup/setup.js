/* eslint-disable */
const prompt = require("prompt");

// Actions
const { startPrompt, finishSetup, getPackages, getFeatures, getProjectName, setupGit, exited } = require("./actions");

const project = {
  debug: true,
  branch: null,
  deleteRepo: false,
  features: [],
  machine: null,
  ownRepo: null,
  package: null,
  title: null,
};

// Initialize the Install process
prompt.start();

// Start the Prompt
startPrompt(project)
  // // Get Project Name
  .then(getProjectName)
  // Then Get Packages
  .then(getPackages)
  // If there's features in the selected package, load them
  .then(() => project.features.length > 0 && getFeatures(project))
  // Configure Git - Removing / Adding
  .then(setupGit)
  // Then finish up the setup
  .then(finishSetup)
  // If something goes wrong, do a smooth exit ❤️
  .catch(exited);
