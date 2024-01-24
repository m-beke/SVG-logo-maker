const inquirer = require('inquirer');
const createImage = require('./svg.js');

class CLI {
    constructor() {
        this.characters = '';
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
                    type: 'input',
                    name: 'textColor',
                    message: 'What color would you like the text to be?',
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'What shape would you like the image to be?',
                    choices: ['square', 'circle', 'triangle'],
                },
                {
                    type: '',
                    name: 'shapeColor',
                    message: 'What color would you like the image to be?',
                },
            ])
            .then(() => {
                createImage(this.characters);
                this.characters.push({text});
            })
            .catch((err) => {
                console.log(err);
                console.log("ERROR: Something went wrong.");
            });
    }
}

module.exports = CLI;