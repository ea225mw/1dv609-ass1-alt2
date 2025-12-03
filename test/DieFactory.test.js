import {DieFactory} from '../src/DieFactory.js'

test('should return a die object that returns a number between 1-6', () => {
  const dieFactory = new DieFactory()
  const die = dieFactory.create()
  expect(die.roll()).toBeGreaterThanOrEqual(1)
  expect(die.roll()).toBeLessThanOrEqual(6)
})
