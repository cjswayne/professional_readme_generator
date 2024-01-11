
const licenseData = require('./licenseData');

function multilineValidator(input) {
    // Checking to see if user wants to end the input
    if(input.endsWith('/end')){
        return true
    }
}

function oneLineValidator(input){

}


const questions = [
    {
        type:'input',
        name:'projTitle',
        message:'Project Title',
        default:'<Your-Project-Title>',
        validate:oneLineValidator(input)
    },
    {
        type:'input',
        name:'description',
        message:'Description',
        default:"Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide: \n - What was your motivation? \n - Why did you build this project? (Note: the answer is not 'Because it was a homework assignment.') \n - What problem does it solve? \n - What did you learn?",  
        validate: multilineValidator(input)
    },
    {
        type:'input',
        name:'instalInstruct',
        message:'Install Instructions',  
        validate: multilineValidator(input)
    },
    {
        type:'input',
        name:'usageInfo',
        message:'Usage Information',  
        validate: multilineValidator(input)
    },
    {
        type:'input',
        name:'contGuidelines',
        message:'Contribution Guidelines',  
        validate: multilineValidator(input)
    },
    {
        type:'input',
        name:'testInstruct',
        message:'Test Instructions',  
        validate: multilineValidator(input)
    },
    {
        type:'input',
        name:'credits',
        message:'Credits',  
        validate: multilineValidator(input)
    },
    {
        type:'input',
        name:'features',
        message:'Features',  
        validate: multilineValidator(input)
    },
    {
        type:'list',
        name:'license',
        message:'Select License',
        choices: licenseData.getLicenseQuestions()
    },
    {
        type:'input',
        name:'github',
        message:'Github Username',  
        validate: oneLineValidator(input)
    },
    {
        type:'input',
        name:'email',
        message:'Email Address',  
        validate: oneLineValidator(input)
    }
];

module.exports = questions;