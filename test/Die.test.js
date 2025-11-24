import {Die} from '../src/Die.js'

const die = new Die()

test('should return a number equal to or greater than 1', () => {
  die.roll()
  const value = die.getFaceValue()
  expect(value).toBeGreaterThanOrEqual(1)
})

test('should return a number equal to or less than 6', () => {
  die.roll()
  const value = die.getFaceValue()
  expect(value).toBeLessThanOrEqual(6)
})
