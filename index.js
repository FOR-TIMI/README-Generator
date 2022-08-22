const inquirer = require('inquirer');
const fs = require('fs');
let readmeText;



// function to initialize app
function init() {
    // Object of licenses and their corresponding links
const licenseBadge = {

    'Apache license' : `[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)`,  

    'Boost Software License 1.0': `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)` ,
                
    'Eclipse Public License 1.0': `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0) ` ,
            
    'Creative Commons Attribution 4.0' : `[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/) `, 
            
    'GNU General Public License v2.0': `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) `,
            
    'IBM Public License Version 1.0' : `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0) `, 
            
    'MIT': `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ` ,
            
    'Mozilla Public License 2.0': `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`, 
            
    'BSD 3-Clause License' : `[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)`  

}

// Array of questions for user input
const questions = [
{
    type : 'input',
    name : 'Title',
    message: 'What\'s the title of your project'
},
{
    type : 'input',
    name : 'Description',
    message: 'Enter a Description'

},
{
    type : 'input',
    name : 'Installation',
    message: 'What are the Installation Instructions'

},
{
    type : 'input',
    name : 'Usage',
    message: 'Enter some usage information'

},
{
    type : 'input',
    name : 'Contributions',
    message: 'What are some contribution guidelines'

},
{
    type : 'input',
    name : 'Tests',
    message: 'What are the Test Instructions'

},
{
    type : 'list',
    name : 'Licenses',
    message : 'What License would you like?',
    choices : [
               'Apache license', 
               'Boost Software License 1.0',
               'Eclipse Public License 1.0',
               'Creative Commons Attribution 4.0',
               'GNU General Public License v2.0',
               'IBM Public License Version 1.0',
               'MIT',
               'Mozilla Public License 2.0',
               'BSD 3-Clause License',
            ],
    default : 'MIT'
},
{
    type : 'input',
    name : 'Username',
    message: 'What\'s your Github username?'

},
{
    type : 'input',
    name : 'Email',
    message: 'What\'s your Email address?'

}]

//To create the readmeFile
function createReadMeFile(){
fs.writeFile('README.md', readmeText, err => {
    if(err) throw err;
    console.log('Read me file generated Sucessfully!')
})
}

//To set readme Text
function setReadMeData(data){
return `# ${data.Title}  ${licenseBadge[data.Licenses]}

## Description
${data.Description}

## Table of Content
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contribution)
- [Tests](#tests)
- [Licenses](#licenses)
- [Questions](#questions)

    
## Installation
${data.Installation}

## Usage
${data.Usage}

## Contribution
${data.Contributions}

## Tests
${data.Tests}

## Licenses
### ${data.Licenses}
${licenseBadge[data.Licenses]}

## questions
For additional questions contact me via email on [${data.Email}](${data.Email}) or [view some other projects](https://github.com/${data.Username}/).`
}

    inquirer
    .prompt(questions)
    .then((answers) => {
      readmeText = setReadMeData(answers)
      createReadMeFile();
    })


}


// Function call to initialize app
init();
