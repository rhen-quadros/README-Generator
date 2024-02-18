const inquirer = require("inquirer");
const fs = require("fs");

//Prompt instructions
inquirer
  .prompt([
    {
      type: "input",
      message: "Enter the project title:",
      name: "title",
    },
    {
      type: "input",
      message: "Enter a project description:",
      name: "description",
    },
    {
      type: "input",
      message: "Enter installation instructions:",
      name: "installation",
    },
    {
      type: "input",
      message: "Enter usage information:",
      name: "usage",
    },
    {
      type: "list",
      message: "Provide license option from list:",
      name: "license",
      choices: ["MIT", "Apache 2.0", "GPL 3.0", "None"],
    },
    {
      type: "input",
      message: "Enter contributing guidelines:",
      name: "contributing",
    },
    {
      type: "input",
      message: "Enter testing approach:",
      name: "tests",
    },
    {
      type: "input",
      message: "Enter email address:",
      name: "questions",
    },
  ])
  .then((answers) => {
    const badge = generateLicenseBadge(answers.license);

    //README Content
    const readmeContent = `
# ${answers.title}

${badge}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is covered under the ${answers.license} License

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
Reach out for additional questions at: ${answers.questions}`;

    // Write  README file
    fs.writeFileSync("README.md", readmeContent);

    console.log("README.md successfully generated!");
  });

// Generate license badge
function generateLicenseBadge(license) {
  if (license === "None") {
    return "";
  }
  return `![${license} License](https://img.shields.io/badge/license-${encodeURIComponent(
    license
  )}-brightgreen)`;
}
