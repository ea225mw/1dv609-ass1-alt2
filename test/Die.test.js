import {Die} from '../src/Die.js'

const die = new Die()

test('should return a number equal to or greater than 1', () => {
  const value = die.roll()
  expect(value).toBeGreaterThanOrEqual(1)
})

test('should return a number equal to or less than 6', () => {
  const value = die.roll()
  expect(value).toBeLessThanOrEqual(6)
})
