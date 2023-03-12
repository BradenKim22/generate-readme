// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const markDownGen = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of your Project? (What, Why, and How)',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Write Instruction for Installation.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'The Usage for your project?',
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Who Contributed to your Project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a License for your project.',
        choices: ['MIT','','','','Other'],
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide written tests and examples of running them application.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Add your Email so people can reach you with further Questions.',
    },
];

// TODO: Create a function to write README file
function writeFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();