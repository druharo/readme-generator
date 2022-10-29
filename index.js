const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");


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
function writeToFile(fileName, data) {
    console.log ("calling generatemd")
    let md = generateMarkdown(data);
console.log ("calling FS WTF");
    fs.writeFile(fileName, md, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
        questions
    )
        .then((answers) => {
            console.log("calling writeToFile")
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

