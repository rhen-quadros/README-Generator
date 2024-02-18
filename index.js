const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "Project Title",
      name: "title",
    },
    {
      type: "input",
      message: "Project Description",
      name: "description",
    },
    {
      type: "input",
      message: "Installation",
      name: "installation",
    },
    {
      type: "input",
      message: "Usage",
      name: "usage",
    },
    {
      type: "list",
      message: "License?",
      name: "license",
      choices: ["MIT", "OTHER"],
    },
    {
      type: "input",
      message: "Contributing",
      name: "contributing",
    },
    {
      type: "input",
      message: "Tests",
      name: "tests",
    },
    {
      type: "input",
      message: "Username",
      name: "questions",
    },
  ])
  .then((answers) => {
    answers.confirm;
  });
