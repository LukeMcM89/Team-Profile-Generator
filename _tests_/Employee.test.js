const Employee = require("../lib/employee");

//Test employees classes/methods props
describe('Employee class', () => {
  it('test should return a name for employee', () => {
    expect(new Employee("John Doe").getName()).toBe("John Doe");
  });
});