const inquirer = require('inquirer');
const fs = require('fs');
const htmlgenerated = ('./dist/TeamRoster');
const Employee = require('./lib/employee');
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

const managerprompt = () => {
return inquirer.prompt([
        {
                type: "input",
                message: "Please enter your manager's name.",
                name: "managerName"

        },
        {
                type: "input",
                message: "Please enter your manager's office ID",
                name: "managerofficeID"
        },
        {
                type: "input",
                message: "Please enter your manager's email address",
                name: "manageremailaddress"
        },
        {
                type: "input",
                message: "Please enter your manager's office number",
                name: "manageroffice"
        },
        {
                type: "list",
                message: "Please select a team member to add to your roster",
                name: "addtoroster",
                choices: ['Employee', 'Engineer', 'Intern', 'Finish Roster Additions'],
        },
])

.then(answers => {
fs.writeFileSync(htmlgenerated,"");
}
);

function addEmployee() {

const engineerprompt = () => {
return inquirer.prompt([
        {
                type: "input",
                message: "Please enter your engineer's name.",
                name: "engineerName"

        },
        {
                type: "input",
                message: "Please enter your engineers office ID",
                name: "engineerofficeID"
        },
                type: "input",
                message: "PleSe enter your engineer's email address";
                name: "engineeremailaddress"
}
{
                type: "input"
                meessage: "please enter your engineer's github username",
                name:"engineergithub"
},

}




