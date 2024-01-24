const inquirer = require('inquirer');
const createImage = require('./svg.js');

class CLI {
    constructor() {

    }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter up to three characters to be displayed in the image:',
                },
                {
                    type: '',
                    name: 'textColor',
                    message: 'What color would you like the text to be?',
                },
                {
                    type: '',
                    name: 'shape',
                    message: 'What shape would you like the image to be?',
                },
                {
                    type: '',
                    name: 'shapeColor',
                    message: 'What color would you like the image to be?',
                },
            ])
            .then(() => {
                createImage();
            })
            .catch((err) => {
                console.log(err);
                console.log("ERROR: Something went wrong.");
            });
    }
}

module.exports = CLI;