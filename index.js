// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const licenses = [
    { name: 'MIT License', value: 'MIT' },
    { name: 'GNU General Public License (GPL)', value: 'GPL' },
    { name: 'Apache License 2.0', value: 'Apache_2_0' },
    { name: 'BSD License 2-clause', value: 'BSD_2_Clause' },
    { name: 'BSD License 3-clause', value: 'BSD_3_Clause' },
    { name: 'GNU Lesser General Public License (LGPL)', value: 'LGPL' },
    { name: 'Mozilla Public License 2.0', value: 'MPL_2_0' },
    { name: 'Creative Commons Zero v1.0 Universal', value: 'CC0_1_0' },
    { name: 'Eclipse Public License 1.0', value: 'EPL_1_0' },
    { name: 'Microsoft Public License', value: 'MS_PL' },
    { name: 'Boost Software License 1.0', value: 'BSL_1_0' },
    { name: 'NONE', value: 'none' }
  ];

const questions = [
    {
        type:'input',
        name:'projTitle',
        message:'Project Title'
    },
    {
        type:'input',
        name:'description',
        message:'Description'
    },
    {
        type:'input',
        name:'instalInstruct',
        message:'Install Instructions'
    },
    {
        type:'input',
        name:'usageInfo',
        message:'Usage Information'
    },
    {
        type:'input',
        name:'contGuidelines',
        message:'Contribution Guidelines'
    },
    {
        type:'input',
        name:'testInstruct',
        message:'Test Instructions'
    },
    {
        type:'input',
        name:'credits',
        message:'Credits'
    },
    {
        type:'input',
        name:'features',
        message:'Features'
    },
    {
        type:'list',
        name:'license',
        message:'Select License',
        choices: licenses
    },
    {
        type:'input',
        name:'github',
        message:'Github Username'
    },
    {
        type:'input',
        name:'email',
        message:'Email Address'
    }
];
// To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile(fileName, data, (err) => {
        if(err){
            return console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    // writeToFile(fileName, data)
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile('./README.md', genMarkdown(answers));
    });
}

// Function call to initialize app
init();
