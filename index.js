const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Project Title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Table of Contents?',
        name: 'toc',
    },
    {
        type: 'input',
        message: 'Installation?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'License?',
        name: 'license',
        choices: ["MIT", "GPL", "GNU", "BSD", "APL"]
    },
    {
        type: 'input',
        message: 'Contributing Guidelines?',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'Test Instructions?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Questions?',
        name: 'questions',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
        questions
    )
        .then((answers) => {
            // Use user feedback for... whatever!!
            writeToFile("README.md", answers)
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init();

