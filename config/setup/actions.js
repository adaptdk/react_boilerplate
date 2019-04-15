/* eslint-disable */

const prompt = require('prompt');
const { exec } = require('child_process');

// Constants
const { packages, features } = require('./packages');
const { schema } = require('./schema');

// Utilities
const {
  filesReadWriteAsync,
  bold,
  dim,
  error,
  highlight,
  underline,
  warn,
} = require('./utils');

/**
 * Get Project Name
 * @param {object} project      The project data
 * @param {function} func       The function you want to be executed if successful.
 * @returns {function}
 */
const getProjectName = (project, func) => {
  console.log(bold('What\'s the name of your project?'));

  prompt.get(schema.name, (err, result) => {
    if (result) {

      if (result.machine) {
        // Save the machine name in the Project object
        project.machine = result.machine;
      }

      if (result.title) {
        // Save the project title in the Project object
        project.title = result.title;
      }

      // Save the name as a variable
      console.log(`

  🙌  Great! We'll call your project ${highlight(result.machine)}.`);
      if (!!func) return func();
    } else {
      exited();
    }
  });
};

/**
 * Get Packages
 * @param {object} [project]    The project data
 * @param {function} func       The function you want to be executed if successful.
 * @returns {function}
 */
const getPackages = (project, func) => {
  console.log(`
Now, this is the available packages:
${dim(`Read more about the different packages at ${underline('https://github.com/adaptdk/react_boilerplate#-packages')}`)}
`);

  // Output Each Package
  packages.forEach(variant => {
    console.log(`${variant.id} ${variant.title}`);
  });

  console.log(`
${bold('Which package do you want to install?')}
${dim('Select it by writing it\'s key [0-9]')}`);

  prompt.get(schema.packages, (err, result) => {
    if (result && result.package) {
      const selectedPackage = packages.find(variant => variant.id === result.package);
      if (!!selectedPackage && !!func) {

        // Checkout the selected branch
        exec(`git checkout ${selectedPackage.branch}`);

        console.log(`
📦  Amazing! You've select the ${highlight(selectedPackage.title)} package.`);

        if (selectedPackage.hasOwnProperty('features')) {
          getFeatures(project, selectedPackage.features, func);
        } else {
          if (!!func) return func();
        }
      } else {
        // If the key you've entered doesn't exist. Try again.
        console.log(error('The key you\'ve entered doesn\'t exists'));
        getPackages(project, func);
      }
    } else {
      exited();
    }
  });
};

/**
 * Get Packages
 * @param {object} project            The project data
 * @param {array} selectedFeatures    The features of the selected package
 * @param {function} func             The function you want to be executed if successful.
 * @returns {function}
 */
const getFeatures = (project, selectedFeatures, func) => {
  selectedFeatures.forEach((question, index) => {

    const filteredFeature = Object.entries(features)
      .find(feature => feature[0] === question)[1];

    // Then output each variant
    console.log(`
${bold('This is the features available variants')}
${dim(filteredFeature.predescription)}
`);

    filteredFeature.variants.forEach(variant => {
      console.log(`${variant.id} ${variant.title}`);
    });
    console.log('');

    prompt.get(filteredFeature, (err, result) => {
      if (result) {
        if (result.question) {
          // Save the selected variant to the global project object so we can handle on it later in the finish func.
          project.features[question] = filteredFeature.variants.find(variant => variant.id === result.question);

          if (selectedFeatures.length === index + 1 && !!func) {
            return func();
          }
        }
      }
    });

    if (selectedFeatures.length !== index + 1 && !!func) {
      // If this is not the last feature then add an empty line
      console.log('');
    }
  });
};

/**
 * Setup the git configuration
 * @param {object} [project]    The project data
 * @param {function} func       The function you want to be executed if successful.
 * @returns {function}
 */
const setupGit = (project, func) => {
  console.log(`
${bold('📄  Awesome! Let\'s setup git, shall we?')}`);

  console.log(`
${dim('Please enter the SSH url for your empty git repository to finish up the setup? [git@github.com:user/repo.git]')}`)

  prompt.get(schema.git, (err, result) => {
    if (result) {
      if (result.ownRepo.length > 0) {
        project.ownRepo = result.ownRepo;
        console.log(`
Alright, we'll delete the boilerplate repository, setup with your repository and start setting up
`);
        return func();
      }
    } else {
      exited();
    }
  });
};

/**
 * The finalizing step, when you finish up the setup
 * @param {object} project      The project data
 * @param {object} [variants]   The different variants based on what you've selected, or preconfigured
 * @returns {function}
 */
const finishSetup = (project, variants) => {
  const executeConfig = {
    git: variants && variants.git || false,
    install: variants && variants.install || true,
    preserveFolder: variants && variants.preserveFolder || false,
    removeSetup: variants && variants.removeSetup || true,
  };
  // Adding Timeout for comments, for a smoother experience while installing
  let delay = 0;
  const increment = 750;
  // If they don't want to add Git, but want to remove it.
  if (!executeConfig.git) {
    delay += increment;
    setTimeout(() => {
      console.log(`
☑️  Removing the boilerplate git...`);
    }, delay);
    exec('rm -rf .git');
  }
  // If they want to add git, then clone it down and replace the Boilerplates git.
  if (executeConfig.git && project && project.ownRepo) {
    delay += increment;
    setTimeout(() => {
      console.log(`
☑️  Removing the boilerplate git and cloning down your repository...`);
    }, delay);
    exec(`rm -rf .git &&
    git clone --no-checkout ${project.ownRepo} .gitTemp &&
    mv ./.gitTemp/.git ./.git &&
    rm -rf .gitTemp`);
  }
  // Strings to replace in the project. like Project Title and Machine name in Like package.json / index.html
  filesReadWriteAsync([
    // Renames Titles in Index.html
    {
      match: '%project_title%',
      replace: project.title,
      file: 'public/index-full.html',
    },
    // Renames Titles and setup script from package.json
    {
      match: ['project_title', `
    "presetup": "yarn install",
    "setup": "node config/setup/setup.js",`],
      replace: [project.machine, ''],
      file: 'package.json',
    },
  ]);

  function promiseFromChildProcess(child) {
    return new Promise(function (resolve, reject) {
      child.addListener("error", reject);
      child.addListener("exit", resolve);
    });
  }
  // Remove setup folders
  if (executeConfig.removeSetup) {
    delay += increment;
    setTimeout(() => {
      console.log(`
☑️  Finally, removing the setup files...`);
    }, delay);
    exec('rm -rf ./config/setup');
  }
  // If the selected package have specific modules, make sure we'll install those
  if (executeConfig.install) {
    delay += increment;
    setTimeout(() => {
      console.log(`
☑️  Install the modules needed for the selected package...`);
    }, delay);
    exec('yarn install');
  }

  setTimeout(() => {
    console.log(`
❤️   We'll start setting up your project.
Thank you for using the boilerplate for your React project.

${bold('Here\'s some quick commands to get you started.')}
${underline('Development')}
yarn start 

${underline('Production Build')}
yarn build

Loading...
`);
  }, delay + increment);
};

// When you've exit the setup
const exited = () => {
  console.log(warn(`


🚧   Exited without doing anything
${dim('If you\'re having issues, do not hesitate to contact one of the maintainers.')}

`));
};

// Exporting
module.exports = {
  finishSetup,
  getPackages,
  getProjectName,
  setupGit,
};
