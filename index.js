// variables for inquirer, file system and to generate Markdown
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const { clear } = require("console");


//  Array of questions for user input in Node
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
        message: 'GitHub Username?',
        name: 'githubusername',  
    },
    {
        type: 'input',
        message: 'E-Mail Address?',
        name: 'emailaddress', 
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    let md = generateMarkdown(data);
    fs.writeFile(fileName, md, (err) => {
        if (err) throw err;
      });
}
// Function to initialize app
function init() {
    inquirer.prompt(
        questions
    )
        .then((answers) => {
            writeToFile("README.md", answers)
        })
        .catch((error) => {
            if (error.isTtyError) {
            } else {
                
            }
        });
}

// Function call to initialize app
init();

