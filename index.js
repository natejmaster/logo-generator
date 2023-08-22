const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Circle, Triangle, Square } = require('./lib/shapes');

// Function to validate color input (either color name or hex code)
function validateColor(input) {
    // Regular expression to validate hex color code (#RRGGBB or #RGB) THIS REGULAR EXPRESSION WAS GENERATED USING REGEXR.COM
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

    // Check if the input is either a valid color name or a valid hex color code. THIS REGULAR EXPRESSION WAS GENERATED USING REGEXR.COM
    if (!input || !(/^[a-zA-Z]+$/.test(input) || hexColorRegex.test(input))) {
        return "Please enter a valid color name or hex color code.";
    }
    return true;
}

//Questions for inquirer to ask
const questions = [
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
        validate: validateColor,
    },
    {
        type: 'input',
        name: 'logoText',
        message: 'List up to three characters to be used as text in your logo (if you dont require characters, leave this blank)',
        validate: function (input) {
            if (input.length > 3) {
                return "Please enter up to three characters only.";
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want your TEXT to be? (you may input a color keyword(ex-red, cyan, etc.) or a hexidecimal number (ex- #4CBB17)).',
        when: function (answers) {
            return answers.logoText !== '';
        },
        validate: validateColor,
    }
];

//Init function calls inquirer, displays the prompt questions in the terminal, and renders a logo with the data collected.
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            let shape;
            if (data.shape === 'circle') {
                shape = new Circle(data.shapeColor);
            } else if (data.shape === 'triangle') {
                shape = new Triangle(data.shapeColor);
            } else if (data.shape === 'square') {
                shape = new Square(data.shapeColor);
            }
            shape.setColor(data.shapeColor);

            let textY;
            if (data.shape === 'triangle') {
                textY = '160';
            } else {
                textY = '120';
            }

            const svgContent = `<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
                ${shape.render()}
                <text x='150' y='${textY}' text-anchor='middle' font-size='60' fill='${data.textColor}'>
                        ${data.logoText}
                    </text>
                </svg>`;
            //This is where I will put the information on how to use the data to create the svg file
            const outputPath = path.join(__dirname, 'logo.svg');
            fs.writeFileSync(outputPath, svgContent);
            console.log('Generated logo.svg')
        });
}

//Function call to initialize the app
init();