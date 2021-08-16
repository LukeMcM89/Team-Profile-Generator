const Intern = require('../lib/Intern');

//Use this from the activity module and modify!
describe('Intern', () => {
  it('should return the name for an employee', () => {
    expect(new Intern("Toby", "3", "toby@gmail.com").getName()).toBe("Toby");
  });
})