const Employee = require('./employee');

class Engineer extends Employee {
    contructor(github, email) {
        this.github = github;
        this.email = email;
    }

getGithub () {
    return this.github;
}

getEmail () {
    return this.email;
}

getJob () {
    return Engineer;
}
}