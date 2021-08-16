const Intern = require('../lib/Intern');

//Intern Test
describe('Intern class', () => {
  it('should return the name for an employee', () => {
    expect(new Intern("Toby").getName()).toBe("Toby");
  });
})