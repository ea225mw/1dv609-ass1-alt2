import {jest} from '@jest/globals'
import {GameController} from '../src/GameController.js'

test('should create players using the factory', () => {
  const factoryMock = {
    create: jest.fn().mockReturnValue({mockPlayer: true}),
  }
  const gameController = new GameController({}, factoryMock)
  gameController.createPlayers(['John', 'Lisa'])
  expect(factoryMock.create).toHaveBeenCalledTimes(2)
})
