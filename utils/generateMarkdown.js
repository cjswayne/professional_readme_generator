const licenses = {
  MIT: {
    name: 'MIT License',
    licenseBadge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    licenseLink: ''
  },
  GPL: {
    name: 'GNU General Public License (GPL)',
    licenseBadge: 'https://img.shields.io/badge/License-GPL-yellow.svg',
    licenseLink: ''
  },
  Apache_2_0: {
    name: 'Apache License 2.0',
    licenseBadge: 'https://img.shields.io/badge/License-Apache_2.0-yellow.svg',
    licenseLink: ''
  },
  BSD_2_Clause: {
    name: 'BSD License 2-clause',
    licenseBadge: 'https://img.shields.io/badge/License-BSD_2-Clause-yellow.svg',
    licenseLink: ''
  },
  BSD_3_Clause: {
    name: 'BSD License 3-clause',
    licenseBadge: 'https://img.shields.io/badge/License-BSD_3-Clause-yellow.svg',
    licenseLink: ''
  },
  LGPL: {
    name: 'GNU Lesser General Public License (LGPL)',
    licenseBadge: 'https://img.shields.io/badge/License-LGPL-yellow.svg',
    licenseLink: ''
  },
  MPL_2_0: {
    name: 'Mozilla Public License 2.0',
    licenseBadge: 'https://img.shields.io/badge/License-MPL_2.0-yellow.svg',
    licenseLink: ''
  },
  CC0_1_0: {
    name: 'Creative Commons Zero v1.0 Universal',
    licenseBadge: 'https://img.shields.io/badge/License-CC0_1.0-yellow.svg',
    licenseLink: ''
  },
  EPL_1_0: {
    name: 'Eclipse Public License 1.0',
    licenseBadge: 'https://img.shields.io/badge/License-EPL_1.0-yellow.svg',
    licenseLink: ''
  },
  MS_PL: {
    name: 'Microsoft Public License',
    licenseBadge: 'https://img.shields.io/badge/License-MS_PL-yellow.svg',
    licenseLink: ''
  },
  BSL_1_0: {
    name: 'Boost Software License 1.0',
    licenseBadge: 'https://img.shields.io/badge/License-BSL_1.0-yellow.svg',
    licenseLink: ''
  },
  none:{
    name: '',
    licenseBadge: '',
    licenseLink: ''
  }
};



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  
  if(license){

  } else {
    return 
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license){

  } else {
    return 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){

  } else {
    return 
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({projTitle, description, instalInstruct, usageInfo, contGuidelines, testInstruct, credits, features,  license, github, email}) {
  // return data
  return `# ${projTitle}

  ![${licenses[license].name}](${licenses[license].licenseBadge})

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
  
  ![${licenses[license].name}](${licenses[license].licenseBadge})
  
  Badges arent necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what youre doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  ## Features
  
  ${features}
  
  ## How to Contribute
  
  ${contGuidelines}
  
  ## Tests
  
  ${testInstruct}

  `;
}

module.exports = generateMarkdown;
