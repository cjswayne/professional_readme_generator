// licenses you can select for readme

const licenseData = {
    MIT: {
      name: 'MIT License',
      licenseBadge: 'License-MIT',
      licenseLink: ''
    },
    GPL: {
      name: 'GNU General Public License (GPL)',
      licenseBadge: 'License-GPL',
      licenseLink: ''
    },
    Apache_2_0: {
      name: 'Apache License 2.0',
      licenseBadge: 'License-Apache_2.0',
      licenseLink: ''
    },
    BSD_2_Clause: {
      name: 'BSD License 2-clause',
      licenseBadge: 'License-BSD_2-Clause',
      licenseLink: ''
    },
    BSD_3_Clause: {
      name: 'BSD License 3-clause',
      licenseBadge: 'License-BSD_3-Clause',
      licenseLink: ''
    },
    LGPL: {
      name: 'GNU Lesser General Public License (LGPL)',
      licenseBadge: 'License-LGPL',
      licenseLink: ''
    },
    MPL_2_0: {
      name: 'Mozilla Public License 2.0',
      licenseBadge: 'License-MPL_2.0',
      licenseLink: ''
    },
    CC0_1_0: {
      name: 'Creative Commons Zero v1.0 Universal',
      licenseBadge: 'License-CC0_1.0',
      licenseLink: ''
    },
    EPL_1_0: {
      name: 'Eclipse Public License 1.0',
      licenseBadge: 'License-EPL_1.0',
      licenseLink: ''
    },
    MS_PL: {
      name: 'Microsoft Public License',
      licenseBadge: 'License-MS_PL',
      licenseLink: ''
    },
    BSL_1_0: {
      name: 'Boost Software License 1.0',
      licenseBadge: 'License-BSL_1.0',
      licenseLink: ''
    },
    none:{
      name: '',
      licenseBadge: '',
      licenseLink: ''
    },
    // fxn that generates list of licenses for the inquirer question
    getLicenseQuestions: function() {
        return Object.keys(this).map(key => {
          if (typeof this[key] === 'function') return null; // if it isnt a fxn, then its not a question and shouldnt be included
          return { 
            name: this[key].name || 'NONE', 
            value: key 
          };
        }).filter(item => item !== null); 
      },
      // function that returns a license badge based on which license is passed in
      getLicenseBadge: function(license) {
        return this[license].name ? `![${this[license].name}](https://img.shields.io/badge/${this[license].licenseBadge}-yellow.svg)` : ''
      },
      // function that returns the license link
      getLicenseLink: function(license) {
        return this[license].name ? '- [License](#license)' : ''
      },
      // function that returns the license section of README
      getLicenseSection: function(license) {
        return this[license].name ? `This project is licensed under the ${this[license].name}` : ''
      }
  };

module.exports = licenseData;