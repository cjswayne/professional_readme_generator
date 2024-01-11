// getting required packages
const licenseData = require('./licenseData');

// array of questions for user input

const questions = [
    {
        type:'input',
        name:'projTitle',
        message:'Project Title',
        validate:function(input){
            if(input){
                return true
            }
            return 'Cannot be blank'
        },
        default:'Your-Project-Title'
    },
    {
        type:'input',
        name:'description',
        message:'Description',
        validate:function(input){
            if(input){
                return true
            }
            return 'Cannot be blank'
        },
        default:"Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide: \n - What was your motivation? \n - Why did you build this project? (Note: the answer is not 'Because it was a homework assignment.') \n - What problem does it solve? \n - What did you learn?"
    },
    {
        type:'input',
        name:'instalInstruct',
        message:'Install Instructions',  
        validate:function(input){
            if(input){
                return true
            }
            return 'Cannot be blank'
        },
        default:'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type:'input',
        name:'usageInfo',
        message:'Usage Information',  
        validate:function(input){
            if(input){
                return true
            }
            return 'Cannot be blank'
        },
        default:'Provide instructions and examples for use. Include screenshots as needed.'
        
    },
    {
        type:'input',
        name:'contGuidelines',
        message:'Contribution Guidelines',  
        validate:function(input){
            if(input){
                return true
            }
            return 'Cannot be blank'
        },
        default:"If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer."
    },
    {
        type:'input',
        name:'testInstruct',
        message:'Test Instructions',  
        validate:function(input){
            if(input){
                return true
            }
            return 'Cannot be blank'
        },
        default:'Go the extra mile and write tests for your application. Then provide examples on how to run them here.'
    },
    {
        type:'input',
        name:'credits',
        message:'Credits',  
        validate:function(input){
            if(input){
                return true
            }
            return 'Cannot be blank'
        },
        default:'Rutgers University, Chatgpt-4'
    },
    {
        type:'input',
        name:'features',
        message:'Features',  
        validate:function(input){
            if(input){
                return true
            }
            return 'Cannot be blank'
        },
        default:'If your project has a lot of features, list them here.'
    },
    {
        type:'list',
        name:'license',
        message:'Select License',
        validate:function(input){
            if(input){
                return true
            }
            return 'Cannot be blank'
        },
        choices: licenseData.getLicenseQuestions()
    },
    {
        type:'input',
        name:'github',
        message:'Github Username',  
        validate:function(input){
            if(input){
                return true
            }
            return 'Cannot be blank'
        },
        default:'cjswayne42'
    },
    {
        type:'input',
        name:'email',
        message:'Email Address',  
        validate:function(input){
            if(input){
                return true
            }
            return 'Cannot be blank'
        },
        default:'cjswayne42@gmail.com'
    }
];

module.exports = questions;