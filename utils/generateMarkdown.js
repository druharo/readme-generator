// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license) { return `## LICENSE` }
  return ""
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## ${data.description}

## TABLE OF CONTENTS
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing Guidelines](#contributing-guidelines)
5. [Test Instructions](#test-instructions)
6. [Questions](#questions)

## INSTALLATION
${data.installation}

## USAGE
${data.usage}

${renderLicenseSection(data.license)}

## CONTRIBUTING GUIDELINES
${data.contributions}

## TEST INSTRUCTIONS
${data.tests}

## QUESTIONS
1. [My GitHubProfile?](https://github.com/${data.githubusername}/)
2. [My email?](mailto://${data.emailaddress})
`;
}

module.exports = generateMarkdown;

