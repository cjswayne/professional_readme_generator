const licenses = require('../lib/licenseData');

// TODO: Create a function that returns a license badge based on which license is passed in
// TODO: Create a function that returns the license link
// TODO: Create a function that returns the license section of README
// These fxns are found within LicenseData.js


// TODO: Create a function to generate markdown for README
function generateMarkdown({projTitle, description, instalInstruct, usageInfo, contGuidelines, testInstruct, credits, features,  license, github, email}) {
  // return data
  return `# ${projTitle}

  ${licenses.getLicenseBadge(license)}

  ## Description
  
  ${description}
  
  ## Table of Contents 
    
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${instalInstruct}

  ## Usage
  
  ${usageInfo}  
  
  ## Credits
  
  ${credits}
  
  ## License
  
  This project is licensed under ${licenses[license].name}.  
  
  ## Badges
  
  ${licenses.getLicenseBadge(license)}
    
  ## Features
  
  ${features}
  
  ## How to Contribute
  
  ${contGuidelines}
  
  ## Tests
  
  ${testInstruct}

  `;
}

module.exports = generateMarkdown;
