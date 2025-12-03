import {jest} from '@jest/globals'
import {DieFactory} from '../src/DieFactory.js'

test('should return a die object that has a roll method to be called', () => {
  const dieFactory = new DieFactory()
  const die = dieFactory.create()
  expect(die.roll()).toHaveBeenCalled()
})
