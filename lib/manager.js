const Employee = require('./employee');

class Manager extends Employee {
    contructor(name, id, officenumber, email) {
        super(name,id, email);
        this.officenumber = officenumber;

    }

getId () {
    return this.id;
}

getOfficeNumber () {
    return this.officenumber;
}

getEmail () {
    return this.email;
}

getJob () {
    return "Manager";
}
}
module.exports = Manager;

