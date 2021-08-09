const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const htmlGenerator = require('./lib/htmlrender')

//Output File
const path = "'./dist/TeamRoster'"

//Data
const team = [];
const employeeQuestions = [
        {message: "What is the employee's name?", name: "name"},
        {message: "What is the employee's email?", name: "email"},
        {message: "What is the employee's ID?", name: "id"}
];

const managerQuestion = [...employeeQuestions, {message: "What is the employee's office number?", name: "officenumber"}];
const engineerQuestion = [...employeeQuestions, {message: "What is the employee's GitHub username?", name: "github"}];
const internQuestion = [...employeeQuestions, {message: "Where does the intern's attend school?", name: "school"}];


init ();

//Welcome the User
function init() {
        console.log("Welcome! Build your Software Engineer Team Roster.");
        mainMenu();
}
//Offer Main Menu
function mainMenu(){
        inquirer.prompt({
                message: "What would you like to do?",
                name: "action",
                type: "list",
                choices: ["Add Manager", "Add Engineer", "Add Intern", "Finish Building Roster"]
        }).then(response => {
                if (response.action === "Add Manager") return addManager();
                if (response.action === "Add Engineer") return addEngineer();
                if (response.action === "Add Intern") return addIntern();
                if (response.action === "Finish Building Roster") return finishBuildingRoster();
        });
}

function addManager(){
        inquirer.prompt(managerQuestions)
        .then(response => {
                const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
                team.push(manager);
                mainMenu();
        });
}
function addEngineer(){
        inquirer.prompt(managerQuestions)
        then(response => {
                const engineer = new Engineer(response.name, response.id, response.email, response.github);
                team.push(engineer);
                mainMenu();
        });
}
function addIntern(){
        inquirer.prompt(managerQuestions)
        .then(response => {
                const intern = new Intern(response.name, response.id, response.email, response.school);
                team.push(intern);
                mainMenu();
        })
}

function finishBuildingRoster() {
        const html = htmlGenerator(team);
        fs.writeFileSync(path, html);
        console.log("The Roster has been executed and generated! It is located in the dist folder. Thank you!")
}
                        