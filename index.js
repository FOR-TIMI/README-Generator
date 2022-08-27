const inquirer = require('inquirer');
const fs = require('fs');
let readmeText;







// function to initialize app
function init() {


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
For additional questions contact me via email on [${data.Email}](mailto:${data.Email}) or [view some other projects](https://github.com/${data.Username}/).`
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
