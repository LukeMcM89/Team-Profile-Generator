const Engineer = require('../lib/engineer');

//Use this from the activity module and modify!
describe('fizzBuzz', () => {
    it('should return the number if not a multiple of three or five', () => {
      expect(fizzBuzz([1])).toBe('1');
      expect(fizzBuzz([1, 2])).toBe('1, 2');
    });
})