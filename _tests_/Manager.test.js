const Manager = require('../lib/Manager');

//Use this from the activity module and modify!
describe('Manager class', () => {
  it('should return the name for an employee', () => {
    expect(new Manager("Michael Scott").getName()).toBe("Michael Scott");
  });
})