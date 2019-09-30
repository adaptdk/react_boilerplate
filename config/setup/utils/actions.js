/* eslint-disable */

const util = require("util");
const { exec } = require("child_process");
const { print, underline } = require("./logger");

// Asynchronous Node Execution
const asyncExec = util.promisify(require("child_process").exec);

const { filesReadWriteAsync } = require("./file");

const actions = {
  removeGit: () => exec("rm -rf .git"),
  setupGit: ownRepo => {
    exec(`rm -rf .git &&
    git clone --no-checkout ${ownRepo} .gitTemp &&
    mv ./.gitTemp/.git ./.git &&
    rm -rf .gitTemp`);
  },
  setupPackage: async (selectedPackage, project, spinner) => {
    await asyncExec(`git stash && git checkout ${selectedPackage.branch}`);
    await asyncExec("yarn install");
    project.finished = true;
    spinner.stop(false);
  },
  setupFeatures: async project => {
    project.features.forEach(feature => {
      switch (feature.name) {
        case "proxy":
          print(
            `ℹ️   Remember to change the querySelector inside of the ${underline(
              "index.tsx"
            )} file, so it finds an element that exists on your site 😇`,
            "bold",
            [1, 1]
          );
          filesReadWriteAsync([
            {
              match: ['PROXY_URL="http://yourLocal.env"', "PROXY=false"],
              replace: [`PROXY_URL="${feature.proxy}"`, "PROXY=true"],
              file: ".env",
            },
          ]);
          break;
        default:
          break;
      }
    });
  },
  renameWithTitle: project => {
    // Strings to replace in the project. like Project Title and Machine name in Like package.json / index.html
    filesReadWriteAsync([
      // Renames Titles in Index.html
      {
        match: "%project_title%",
        replace: project.title,
        file: "public/index.html",
      },
      // Renames Titles and setup script from package.json
      {
        match: [
          "project_title",
          `
    "presetup": "npm install cli-spinner prompt colors --no-optional && cp .env.sample .env",
    "setup": "node config/setup/setup.js",`,
        ],
        replace: [project.machine, ""],
        file: "package.json",
      },
    ]);
  },
  removeSetup: () => exec("rm -rf ./config/setup"),
};

/**
 * Execute each action synchronous
 * @param {array} actions - Each action you want to execute
 * @return {void}
 */
const runActions = (actions, increment = 750, delay = 0) => {
  actions
    .filter(i => !!i)
    .forEach(async action => {
      delay += increment;
      await setTimeout(action, delay);
    });
};

module.exports = {
  actions,
  runActions,
};
