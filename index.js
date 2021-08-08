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

const questionprompt = () =>
return inquirer.prompt([
    {
        type: "input",
        message:"Please enter your manager's name/",
        name:"managerName"

},
{
        type: "input",
        message:"Please enter your manager's office ID",
        name: "managerofficeID"
},
{
        type: "input",
        message:"Please enter your manager's email address",
        name: "manageremailaddress"
}
{
        type:"input"
        messageL: "Please enter your manager's office number",
        name: "managerofficer"
}
//Luke remember to use this code from your last HW and modify!!!!!!
{
        type: "list",
        message: "Select and then Enter the Open-Source license variant for your project.",
        name: "License",
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'Mozilla Public License2.0', 'N/A'],
    },
])
// Luke remember to re-route this from last HW
//fs.writeFile(fileName, data, (error) => {
       // return error ? console.error(error) : console.log("ReadMe Succesfully Generated!");
      // });
      // }
       