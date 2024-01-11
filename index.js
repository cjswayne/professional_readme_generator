// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = require('./lib/questions');
// To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err){
            return console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile('./README.md', genMarkdown(answers));
    });
}

// Function call to initialize app
init();
