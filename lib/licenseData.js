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
    getLicenseQuestions: function() {
      // compare the object name but also the properties within it

        return Object.keys(this).map(key => {
          if (typeof this[key] === 'function') return null; // each method(as of right now) starts with a keyword 'get'
          return { 
            name: this[key].name || 'NONE', 
            value: key 
          };
        }).filter(item => item !== null); 
      },
      getLicenseBadge: function(license) {
        return this[license].name ? `![${this[license]}](https://img.shields.io/badge/${this[license].licenseBadge}-yellow.svg)` : ''
      },
      getLicenseLink: function(license) {
        return this[license].name ? '- [License](#license)' : ''
      },
      getLicenseSection: function(license) {
        return this[license].name ? `This project is licensed under the ${this[license].name}` : ''
      }
  };

module.exports = licenseData;