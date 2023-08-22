const inquirer = require('inquirer');

//Questions for inquirer to ask
const questions = [
    {
        type: 'input',
        name: 'logoText',
        message: 'List up to three characters to be used as text in your logo (if you dont require characters, leave this blank)',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want your TEXT to be? (you may input a color keyword(ex-red, cyan, etc.) or a hexidecimal number (ex- #4CBB17))',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo:',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want your SHAPE to be? (you may input a color keyword(ex-red, cyan, etc.) or a hexidecimal number (ex- #4CBB17))',
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