/* eslint-disable */

const prompt = require("prompt");
const { Spinner } = require("cli-spinner");

const { packages, features } = require("./packages");
const { schema } = require("./schema");
const { print, bold, dim, highlight, underline, actions, runActions, isYes, printFeatureConf } = require("./utilities");

const spinner = new Spinner("%s Installing the new modules...").setSpinnerString(18);

/**
 * Introduction
 * @param {object} project      The project data
 * @returns {Promise}
 */
const startPrompt = project =>
  new Promise((res, rej) => {
    print(
      `${bold("Thanks for using React Boilerplate. ❤️")}
If you run into trouble, don't hesitate to write an issue or contact one of the maintainers.

Make sure you don't have any uncommited changes before running, as it will stage any changes.

${dim(`${bold("Github Link")}
${underline("https://github.com/adaptdk/react_boilerplate/issues")}

${bold("Maintainers")}
[mads-thines] Mads Thines - mads.thines@adaptagency.com
[ChrEsb] Christian Esbensen - ces@adaptagency.com`)}`,
      null,
      [2, 0]
    );
    // Resolve the promise
    res(project);
  });

/**
 * Get Project Name
 * @param {object} project      The project data
 * @returns {Promise}
 */
const getProjectName = project =>
  new Promise((res, rej) => {
    print("✏️   What should we call the project?", "bold", [2, 0]);

    try {
      prompt.get(schema.name, (err, result) => {
        if (result) {
          // Save the machine name in the Project object
          if (result.machine) project.machine = result.machine;

          // Save the project title in the Project object
          if (result.title) project.title = result.title;

          // Save the name as a variable
          print(`We'll call your project ${highlight(result.machine)}.`, "bold", [2, 0]);

          // Resolve the promise
          res(project);
        } else {
          rej(err);
        }
      });
    } catch (err) {
      rej(err);
    }
  });

/**
 * Get Packages
 * @param {object} [project]    The project data
 * @returns {Promise}
 */
const getPackages = project =>
  new Promise((res, rej) => {
    print("------", "dim", [2, 0]);
    print(`Available packages:`, "bold", [2, 0]);
    print(
      `Read more about the different packages at ${underline(
        "https://github.com/adaptdk/react_boilerplate#-packages"
      )}`,
      "dim",
      [0, 1]
    );

    // Output Each Package
    packages.forEach(variant => {
      switch (variant.type) {
        case "break":
          print(variant.title, "bold", [1, 0]);
          break;
        default:
          print(`  ${variant.id} ${variant.title}`);
          break;
      }
    });

    print(`${bold("📦   Which package do you want to install?")}`, null, [2, 0]);

    try {
      prompt.get(schema.packages, (err, result) => {
        if (result && result.package) {
          const selectedPackage = packages.find(variant => variant.id === result.package);
          project.package = selectedPackage;

          // Checkout the selected branch and install any new modules
          if (!project.debug) actions.setupPackage(selectedPackage, project, spinner);

          if (!!selectedPackage) {
            print(`You've selected ${highlight(selectedPackage.title)}.`, null, [2, 0]);

            if (selectedPackage.hasOwnProperty("features")) {
              project.features = selectedPackage.features;
            }

            res(project);
          } else {
            // If the key you've entered doesn't exist. Try again.
            print("🚫   The key you've entered doesn't exists", "error");
            res(getPackages(project));
          }
        } else {
          rej(err);
        }
      });
    } catch (err) {
      rej(err);
    }
  });

/**
 * Get Packages
 * @param {object} project            The project data
 * @returns {Promise}
 */
const getFeatures = project =>
  new Promise((res, rej) => {
    print("------", "dim", [2, 0]);
    print(`💎   Do you want to customize your packages feature?`, null, [2, 0]);
    print(`The package you've selected have features with options.`, "dim");

    try {
      prompt.get(schema.features, (err, result) => {
        if (result) {
          if (isYes(result.features)) {
            // If they want to customize and change the options
            project.customizeFeature = true;
            const { features: selectedFeatures } = project;
            selectedFeatures.forEach(async (selectedFeature, featuresIndex) => {
              let activeFeatureIndex;
              const activeFeature = features.find((feature, featureIndex) => {
                activeFeatureIndex = featureIndex;
                return feature.name === selectedFeature.name;
              });

              if (activeFeature && activeFeature.hasOwnProperty("schema")) {
                print(activeFeature.title, "bold", [2, 0]);
                print(activeFeature.description);

                prompt.get(activeFeature.schema, (err, result) => {
                  // Save the feature options
                  project.features[activeFeatureIndex] = {
                    ...project.features[activeFeatureIndex],
                    ...result,
                  };

                  // If it's the last feature, then continue
                  if (featuresIndex === selectedFeatures.length - 1) {
                    print(`You're finished with features `, null, [2, 0]);
                    res(project);
                  }
                });
              }
            });
          } else {
            res(project);
          }
        } else {
          rej(err);
        }
      });
    } catch (err) {
      rej(err);
    }
  });

/**
 * Setup the git configuration
 * @param {object} [project]    The project data
 * @param {function} func       The function you want to be executed if successful.
 * @returns {Promise}
 */
const setupGit = project =>
  new Promise((res, rej) => {
    print("------", "dim", [2, 0]);
    print(`🌲   Lets setup git, shall we?`, null, [2, 0]);
    print("Keep empty to get an empty repo or enter a valid git repository SSH URL", "dim");

    try {
      prompt.get(schema.git, (err, result) => {
        if (result && result.ownRepo.length > 0) {
          project.ownRepo = result.ownRepo;

          // If empty, then delete repository and don't add custom Git
          if (result.ownRepo === "no") {
            project.deleteRepo = true;
            return res(project);
          }

          print(
            `Alright, we'll delete the boilerplate repository, setup with your repository and start setting up`,
            null,
            [1, 1]
          );

          res(project);
        } else {
          rej(err);
        }
      });
    } catch (err) {
      rej(err);
    }
  });

/**
 * The finalizing step, when you finish up the setup
 * @param {object} project      The project data
 * @param {object} [variants]   The different variants based on what you've selected, or preconfigured
 * @returnss {function}
 */
const finishSetup = project => {
  print("------", "dim", [2, 1]);
  const { debug, deleteRepo, features: selectedFeatures } = project;

  const setupConf = {
    hasRepo: project.ownRepo.length > 0 && project.ownRepo !== "no",
    hasFeatures: selectedFeatures.length > 0,
  };

  runActions([
    setupConf.hasFeatures
      ? () => {
          print(`☑️  Configuring settings from features...`, null, [1, 1]);
          !debug && actions.setupFeatures(project);
        }
      : null,
    deleteRepo
      ? () => {
          // If they don't want to add Git, but want to remove it.
          print(`☑️  Removing the boilerplate git...`, null, [1, 1]);
          !debug && actions.removeGit();
        }
      : () => {
          // If they want to add git, then clone it down and replace the Boilerplates git.
          print(`☑️  Removing the boilerplate git and cloning down your repository...`, null, [1, 1]);
          !debug && actions.setupGit(project.ownRepo);
        },
    () => {
      // Rename the project
      print(`☑️  Renaming the project ...`, null, [1, 1]);
      !debug && actions.renameWithTitle(project);
    },
    () => {
      // Remve the setup files
      print(`☑️  Finally, removing the setup files...`, null, [1, 1]);
      !debug && actions.removeSetup();
    },
    () => {
      print("------", "dim", [2, 2]);
      print(`❤️   Your project is ready.
Thank you for using the boilerplate for your React project. 💪`);

      print(
        `
  ${bold("Project overview:")}
  ${bold("✏️  Machine name:")}    ${project.machine}
  ${bold("✏️  Title:")}           ${project.title}
  ${bold("📦  Package:")}         ${project.package.branch}`,
        null,
        [1, 0]
      );
      if (setupConf.hasRepo) {
        print(`  ${bold("🌲  Repo Url:")}        ${project.ownRepo}`);
      }
      if (setupConf.hasFeatures && project.customizeFeature) {
        print("  💎  Features:", "bold", [0, 1]);
        printFeatureConf(project.features);
      }

      print(
        `${bold("Here's some quick commands to get you started.")}
${underline("Development")}
yarn start 

${underline("Production Build")}
yarn build`,
        null,
        [2, 2]
      );

      !debug && !project.finished && spinner.start();
    },
  ]);
};

// When you've exit the setup
const exited = err => {
  print(
    `🚧   Exited without doing anything 

${err}

${dim("If you're having issues, do not hesitate to contact one of the maintainers.")}`,
    "warn",
    [2, 1]
  );
};

// Exporting
module.exports = {
  exited,
  finishSetup,
  getFeatures,
  getPackages,
  getProjectName,
  setupGit,
  startPrompt,
};
