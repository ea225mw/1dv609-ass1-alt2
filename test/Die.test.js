import {Die} from '../src/Die.js'

test('should return a number equal to or greater than 1', () => {
  const die = new Die()
  const value = die.roll()
  expect(value).toBeGreaterThanOrEqual(1)
})

test('should return a number equal to or less than 6', () => {
  const die = new Die()
  const value = die.roll()
  expect(value).toBeLessThanOrEqual(6)
})
