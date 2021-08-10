// Intern NEEDS - school, Job
const Employee = require('./employee');

class Intern extends Employee {
    contructor(name, id, school, email) {
        super(name,id, email);
        this.school = school;

    }
getSchool () {
    return this.id;
}

getId () {
    return this.id;
}

getEmail () {
    return this.email;
}

getJob () {
    return "Intern";
}
}
module.exports = Intern;

