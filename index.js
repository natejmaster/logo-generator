const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Circle, Triangle, Square } = require('./lib/shapes');

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
            let shape;
            if (data.shape === 'circle') {
                shape = new Circle(data.radius, data.shapeColor);
            } else if (data.shape === 'triangle') {
                shape = new Triangle(data.points, data.shapeColor);
            } else if (data.shape === 'square') {
                shape = new Square(data.sideLength, data.shapeColor);
            }
            shape.setColor(data.shapeColor);
            const svgContent = `<svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
                ${shape.render()}
                </svg>`;
            //This is where I will put the information on how to use the data to create the svg file
            const outputPath = path.join(__dirname, 'logo.svg');
            fs.writeFileSync(outputPath, svgContent);
            console.log('Generated logo.svg')
        });
}

//Function call to initialize the app
init();