const Engineer = require('../lib/engineer');

//Use this from the activity module and modify!
describe('Engineer', () => {
    it('should return the name for an employee', () => {
      expect(new Engineer("Dwight Schrute", "4", "dwightschrute@gmail.com").getName()).toBe("Dwight Schrute");
    });
})

