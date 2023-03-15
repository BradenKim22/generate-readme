// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    Apache: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    BSD: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    IBM: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
    Eclipse: "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  }
  return badge[license]
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const link = {
    MIT: "[MIT](https://opensource.org/licenses/MIT)",
    Apache: "[Apache](https://opensource.org/licenses/Apache-2.0)",
    BSD: "[BSD](https://opensource.org/licenses/BSD-3-Clause)",
    IBM: "[IBM](https://opensource.org/licenses/IPL-1.0)",
    Eclipse: "[Eclipse](https://opensource.org/licenses/EPL-1.0)"
  }
  return link[license]
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `Refer to ${renderLicenseLink(license)} License.`
};

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, credit, license, test, github, email}) {
return`# ${title}
${renderLicenseBadge(license)}

## Table of Contents
- [About the Project](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [License](#License)
- [Test](#Test)
- [Questions](#Questions)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contributing
${credit}

## License
${renderLicenseSection(license)}

## Test
${test}

## Questions
Reach me at my GitHub account [${github}](https://github.com/${github}).
If you have any other additional questions email me at ${email} with '${title}' in the subject line.`
}
  

module.exports = {
  generateMarkdown
};