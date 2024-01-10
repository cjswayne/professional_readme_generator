// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const licenses = [
    { name: 'MIT License', value: 'MIT' },
    { name: 'GNU General Public License (GPL)', value: 'GPL' },
    { name: 'Apache License 2.0', value: 'Apache-2.0' },
    { name: 'BSD License 2-clause', value: 'BSD-2-Clause' },
    { name: 'BSD License 3-clause', value: 'BSD-3-Clause' },
    { name: 'GNU Lesser General Public License (LGPL)', value: 'LGPL' },
    { name: 'Mozilla Public License 2.0', value: 'MPL-2.0' },
    { name: 'Creative Commons Zero v1.0 Universal', value: 'CC0-1.0' },
    { name: 'Eclipse Public License 1.0', value: 'EPL-1.0' },
    { name: 'Microsoft Public License', value: 'MS-PL' },
    { name: 'Boost Software License 1.0', value: 'BSL-1.0' }
  ];

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);
}

// Function call to initialize app
init();
