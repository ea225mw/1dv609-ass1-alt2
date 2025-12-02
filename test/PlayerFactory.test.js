import {jest, test} from '@jest/globals'
import {PlayerFactory} from '../src/PlayerFactory.js'

test('should return a player object', () => {
  const factory = new PlayerFactory()
  const player = factory.create('John')

  expect(player.getName()).toBe('John')
})

test('should make player roll the die, returning 4', () => {
  const die = {
    roll: jest.fn().mockReturnValue(4),
  }
  const factory = new PlayerFactory()
  const player = factory.create('John', die)

  expect(player.roll()).toBe(4)
})
