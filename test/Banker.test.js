import {jest, test} from '@jest/globals'
import {Banker} from '../src/Banker.js'
import {Die} from '../src/Die.js'

test('should create a new Banker object with a name property', () => {
  const banker = new Banker()
  expect(banker.getName()).toBe('Banker')
})

test('should return die face value when rollDie() is called', () => {
  const dieMock = {
    roll: jest.fn().mockReturnValue(3),
  }
  const banker = new Banker(dieMock)
  expect(banker.rollDie()).toBe(3)
})
