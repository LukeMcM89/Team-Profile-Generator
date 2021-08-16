const Manager = require('../lib/Manager');

//Use this from the activity module and modify!
describe('Manager', () => {
  it('should return the name for an employee', () => {
    expect(new Manager("Michael Scott", "2", "scantonrocks@gmail.com").getName()).toBe("Michael Scott");
  });
})