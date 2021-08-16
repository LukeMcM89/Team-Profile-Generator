const Engineer = require('../lib/engineer');

//Engineer Test
describe('Engineer class', () => {
    it('should return the name for an employee', () => {
      expect(new Engineer("Dwight Schrute").getName()).toBe("Dwight Schrute");
    });
})

