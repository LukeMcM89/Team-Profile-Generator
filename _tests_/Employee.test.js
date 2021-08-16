const Employee = require("../lib/employee");

//Test employees classes/methods props
describe('Employee Class', () => {
  it('test should return a name for employee', () => {
    expect(new Employee("John Doe", "5", "michaelscott@gmail.com").getName()).toBe("John Doe");
  });
  
});