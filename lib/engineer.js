const Employee = require('./employee');

class Engineer extends Employee {
    contructor(name, id, github, email) {
        super(name,id, email);
        this.github = github;
    }

getGithub () {
    return this.github;
}

getEmail () {
    return this.email;
}

getJob () {
    return "Engineer";
}
}
module.exports = Engineer;