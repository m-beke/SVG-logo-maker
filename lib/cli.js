const inquirer = require('inquirer');


class CLI {
    constructor() {

    }
    run() {
        return inquirer
            .prompt([
                {
                    type: '',
                    name: '',
                    message: 'Enter up to three characters to be displayed in the image:',
                },
                {
                    type: '',
                    name: '',
                    message: 'What color would you like the text to be?',
                },
                {
                    type: '',
                    name: '',
                    message: 'What shape would you like the image to be?',
                },
                {
                    type: '',
                    name: '',
                    message: 'What color would you like the image to be?',
                },
            ])
    }
}