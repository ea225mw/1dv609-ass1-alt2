import {PlayerFactory} from '../src/PlayerFactory.js'

test('should return a player object', () => {
  const factory = new PlayerFactory()
  const player = factory.create('John')

  expect(player.getName()).toBe('John')
})
