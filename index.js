const inquirer = require('inquirer');

//Questions for inquirer to ask
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'descriptionWhat',
        message: 'What does your project do, or in other words, what problem does your project solve?',
    },
];

//Init function calls inquirer, displays the prompt questions in the terminal, and renders a logo with the data collected.
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            //This is where I will put the information on how to use the data to create the svg file
        });
}

//Function call to initialize the app
init();