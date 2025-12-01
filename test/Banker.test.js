import {Banker} from '../src/Banker.js'
import {Die} from '../src/Die.js'

const bankerDie = new Die()

test('should create a new Banker object with a name property', () => {
  const banker = new Banker(bankerDie)
  expect(banker.getName()).toBe('Banker')
})
