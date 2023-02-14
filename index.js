// TODO:  Make sure you add your dependencies here
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const createMD = require("./utils/generateMarkdown");

// const generateMarkdown = ({ description, location, linkedin, github }) =>
//   // TODO:  Destructure the the object you pass to this function, which you will have to add inside the parentheses so you can reference the values in this template literal
//   `# <Your-Project-Title>

// ## Description

// Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

// - What was your motivation?
// - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
// - What problem does it solve?
// - What did you learn?

// ## Table of Contents (Optional)

// If your README is long, add a table of contents to make it easy for users to find what they need.

// - [Installation](#installation)
// - [Usage](#usage)
// - [Credits](#credits)
// - [License](#license)

// ## Installation

// What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

// ## Usage

// Provide instructions and examples for use. Include screenshots as needed.

// To add a screenshot, create an \`assets/images\` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    

// ## Credits

// List your collaborators, if any, with links to their GitHub profiles.

// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

// If you followed tutorials, include links to those here as well.

// ## License

// The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

// ---

// 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

// ## Badges

// ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

// Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

// ## Features

// If your project has a lot of features, list them here.

// ## How to Contribute

// If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

// ## Tests`;

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your title?",
    },
    {
      type: "input",
      name: "description",
      message: "Give a brief description of your project",
    },
    {
      type: "input",
      name: "github",
      message: "What is your github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "list",
      name: "license",
      message: "Choose one of the licenses",
      choices: ["MIT", "APACHE_2.0", "AFL-3.0", "APL-1.0", "None"],
    },
    {
      type: "input",
      name: "usage",
      message: "How to use this project?",
    },
    {
      type: "input",
      name: "installation",
      message: "How to install this project?",
    },
    {
      type: "input",
      name: "test",
      message: "How to test this project?",
    },
    {
      type: "input",
      name: "contributing",
      message: "How can others contribute to this project?",
    },
  ])

  // TODO: Create a .then() with a call back function that takes the user's responses, generates HTML, and writes the file as "index.html" to the disk.
  .then((answers) => {
    console.log("answers= ", answers);
    const readMeContent = createMD(answers);

    fs.writeFile("MyREADME.md", readMeContent, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
