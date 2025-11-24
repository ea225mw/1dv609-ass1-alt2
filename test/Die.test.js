import {Die} from '../src/Die.js'

const die = new Die()

function rollAndGetValue() {
  die.roll()
  return die.getFaceValue()
}

test('should return a number equal to or greater than 1', () => {
  const value = rollAndGetValue()
  expect(value).toBeGreaterThanOrEqual(1)
})

test('should return a number equal to or less than 6', () => {
  const value = rollAndGetValue()
  expect(value).toBeLessThanOrEqual(6)
})
