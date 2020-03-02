onst fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

    inquirer.prompt([
    {
    type: "input",
    name: "project",
    message: "What is your project name?",
    },
    {
    type:"input",
    name: "userName",
    message: "What is your Github name?",  
    },
    {
    type: "input",
    name: "email",
    message: "Enter your email address",
    },
    {
    type: "input",
    name: "description",
    message: "Describe your project",
    },
    {
    type: "list",
    name: "role",
    message:"What was your role with this project?",
    choices: ["Contributor", "Developer", "Observor", "Leech"],
    },
    {
    type: "input",
    name: "usage",
    message: "what is the purpose of your project?",
    },
    {
    type: "list",
    name: "license",
    message: "What licenses does your project use?",
    choices: ["MIT", "GPL", "Apache", "Not Applicable"],
    },
    {
    type: "input",
    name: "guidelines",
    message: "What were the contribution guidelines?",
    },
    {
    type: "input",
    name: "test",
    message:"What are the requirements to test your program?",
    },
])

.then (function(answers) {
    const queryUrl = `https://api.github.com/users/${answers.userName}`
    axios.get(queryUrl).then(function(res){

    const readMe =`[![forthebadge](https://forthebadge.com/images/badges/built-with-resentment.svg)](https://forthebadge.com)
                    [![forthebadge](https://forthebadge.com/images/badges/contains-cat-gifs.svg)](https://forthebadge.com)
                    [![forthebadge](https://forthebadge.com/images/badges/thats-how-they-get-you.svg)](https://forthebadge.com)


## Profile
# ${answers.project}.
### ${answers.userName}
### ${answers.email}
  
## Describe the project
### ${answers.description}

## Role
### ${answers.role}

## Usage
### ${answers.usage}

## License
### ${answers.license}

## Table Of Contents
### Grab a list of values here
  
## Contributing Guidelines
### ${answers.guidelines}
  
## Tests
### ${answers.test}
  
## Questions
### ![${res.data.html_url}](${res.data.avatar_url}&s=50)
  
## Email 
### email: ${res.data.email}

            `
    fs.writeFile("ReadMe.md", readMe, function(){
    });
    console.log("You successfully generated a README.md file!");
    })
});
