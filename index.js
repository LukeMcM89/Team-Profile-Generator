const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const { createPromptModule } = require('inquirer');

//Output File
const path = './dist/TeamRoster.html'

//Data
const team = [];
const employeeQuestions = [
        {message: "What is the employee's name?", name: "name"},
        {message: "What is the employee's email?", name: "email"},
        {message: "What is the employee's ID?", name: "id"}
];

const managerQuestion = [...employeeQuestions, {message: "What is the employee's office number?", name: "officeNumber"}];
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
        inquirer.prompt(managerQuestion)
        .then(response => {
                const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
                team.push(manager);
                mainMenu();
        });
}
function addEngineer(){
        inquirer.prompt(engineerQuestion)
        .then(response => {
                const engineer = new Engineer(response.name, response.id, response.email, response.github);
                team.push(engineer);
                mainMenu();
        });
}
function addIntern(){
        inquirer.prompt(internQuestion)
        .then(response => {
                const intern = new Intern(response.name, response.id, response.email, response.school);
                team.push(intern);
                mainMenu();
        });
}

function finishBuildingRoster() {
        const html = htmlGenerator(team);
        fs.writeFileSync(path, html);
        console.log("The Roster has been executed and generated! It is located in the dist folder. Thank you!");
}

//Creates the individualized cards
function createCard (employee) {
        let exclusive = "";
        //console.log (employee.getRole());
        if (employee.getRole() === "Manager") {
                //console.log ("test2");
                exclusive = "Office_Number:"+employee.getOfficeNumber();
        }   
        else if (employee.getRole() === "Engineer") {
                //console.log ("test3");
                exclusive = "GitHub:"+employee.getGithub();
        }  
        else if (employee.getRole() === "Intern") {
                //console.log ("test4");
                exclusive = "School:"+employee.getSchool();
        } 

        //Generates the Card format to be replicated 
        const card = `<div class="columns mt-5 is-8 is-variable is-centered">
        <div class="column is-4-tablet is-3-desktop">
            <div class="card">
                <div class="card-content">
                    <p class="title is-size-5">Manager</p>
                    <div class="content">
                        <ol type="1">
                            <li>Name:${employee.getName()}</li>
                            <li>ID:${employee.getId()}</li>
                            <li>Email:${employee.getEmail()}</li>
                            <li>${exclusive}</li>
                        </ol>
                    </div>
                </div>
                </div>
            </div>
        </div>`
            return card;
}
//Generates the general HTML template
function htmlGenerator (team) {
        const cards = team.map(employee => createCard(employee)).join('');

        const code = `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" />
        
            <link rel="stylesheet" href="./style.css">
        
            <title>Software Engineer Team Profile Generator</title>
        
        </head>
        
        <section class="section is-hidden-mobile">
            <div class="container">
                <h3 class="title has-text-centered is-size-4">Software Engineer Team Roster</h3>
                    ${cards}         
                </div>         
        </section>
        
        </body>
        
        </html>`
        return code;
        
}
                        