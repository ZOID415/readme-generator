// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
if (license !== "None") {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
return "";


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license !== "None") {
  return `\n* [License](#license)\n`;
}
return "";

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return "";

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}

* [Questions](#questions)

* [Tests](#tests)

* [Contributing](#contributing)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Questions

If you have any questions about this project or repositorie you may contact me at ${
    data.email
  }. If you are interested you may visit my other work at [${
    data.github
  }](https://github.com/${data.github}/).

## Demo

[Demo](INSERT URL HERE)

## Tests

${data.tests}

## Contributing 

${data.contributing}

`;
}

module.exports = generateMarkdown;
