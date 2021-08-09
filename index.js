const inquirer = require('inquirer');
const fs = require('fs');
const htmlgenerated = ('./dist/TeamRoster');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

//WHEN I start the application
//THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
//WHEN I enter the team manager’s name, employee ID, email address, and office number
//THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
//WHEN I select the engineer option
//THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
//WHEN I select the intern option
//THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
//WHEN I decide to finish building my team
//THEN I exit the application, and the HTML is generated

const team = [];
const employeeQuestions = [
        {message: "What is the employee's name?" name: "Name"},
        {message: "What is the employee's email?" name: "Email"},
        {message: "What is the employee's ID?" name: "id"}
];

const managerQuestion =
const engineerQuestion =
const internQuestion =


init ();

function init() {
        console.log("Welcome! Build your Software Engineer Team Roster.");
        mainMenu();
}

function mainMenu(){
        inquieer.prompt(){
                message:
                name:
                type:
                choices: 
        }
}



                function addEmployee() {

                        const internprompt = () => {
                                return inquirer.prompt([
                                        {
                                                type: "input",
                                                message: "Please enter your Intern's name.",
                                                name: "internName"

                                        },
                                        {
                                                type: "input",
                                                message: "Please enter your Intern's office ID.",
                                                name: "internId"
                                        },
                                        {
                                                type: "input",
                                                message: "Please enter your Intern's email address.",
                                                name: "internEmail"
                                        },
                                        {
                                                type: "input",
                                                message: "Please enter the school that your Intern attends.",
                                                name: "internSchool"
                                        },
                                        {
                                                type: "list",
                                                message: "Please select a team member to add to your roster.",
                                                name: "addRoster",
                                                choices: ['Employee', 'Engineer', 'Intern', 'Finish Roster Additions'],
                                        },

                                ])

                        }

                        function init() {
                                managerprompt, engineerprompt, internprompt();
                        };


                        init();
