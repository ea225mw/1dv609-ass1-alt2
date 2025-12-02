import {beforeEach, describe, expect, jest} from '@jest/globals'
import {GameController} from '../src/GameController.js'

describe('tests for the startup of the game', () => {
  let consoleUIMock
  let gameController
  let factoryMock
  let bankerMock

  beforeEach(() => {
    consoleUIMock = {
      printGameBanner: jest.fn(),
      printStartMenu: jest.fn().mockResolvedValue('1'),
      printQuittingMessage: jest.fn(),
      promptForNumberOfPlayers: jest.fn().mockResolvedValue('2'),
      promptForPlayerNames: jest.fn().mockResolvedValue(['John', 'Lisa']),
      promptForBet: jest.fn().mockReturnValue('20'),
      closeInterface: jest.fn(),
    }
    factoryMock = {
      create: jest.fn().mockReturnValue({mockPlayer: true}),
    }
    bankerMock = {
      rollDie: jest.fn().mockReturnValue(3),
    }
    gameController = new GameController(consoleUIMock, factoryMock, bankerMock)
  })

  test('should print game name banner on startup', async () => {
    await gameController.run()
    expect(consoleUIMock.printGameBanner).toHaveBeenCalled()
  })

  test('should print start menu on startup', async () => {
    await gameController.run()
    expect(consoleUIMock.printStartMenu).toHaveBeenCalled()
  })

  test('should call handleMenuChoice() with "1" on menu choice 1', async () => {
    const handleMenuChoiceSpy = jest.spyOn(GameController.prototype, 'handleMenuChoice')
    await gameController.run()
    expect(handleMenuChoiceSpy).toHaveBeenCalledWith('1')
  })

  test('should call promptForNumberOfPlayers', async () => {
    await gameController.run()
    expect(consoleUIMock.promptForNumberOfPlayers).toHaveBeenCalled()
  })

  test('should call promptForPlayerNames()', async () => {
    await gameController.run()
    expect(consoleUIMock.promptForPlayerNames).toHaveBeenCalled()
  })

  test('should create players using the factory', () => {
    gameController.createPlayers(['John', 'Lisa'])
    expect(factoryMock.create).toHaveBeenCalledTimes(2)
  })
})

// --------------------------------
describe('tests game rounds', () => {
  let consoleUIMock
  let gameController
  let factoryMock
  let playerMock
  let bankerMock

  beforeEach(() => {
    consoleUIMock = {
      printGameBanner: jest.fn(),
      printStartMenu: jest.fn().mockResolvedValue('1'),
      printQuittingMessage: jest.fn(),
      promptForNumberOfPlayers: jest.fn().mockResolvedValue('2'),
      promptForPlayerNames: jest.fn().mockResolvedValue(['John', 'Lisa']),
      promptForBet: jest.fn().mockReturnValue('20'),
      closeInterface: jest.fn(),
    }
    factoryMock = {
      create: jest.fn().mockReturnValue({mockPlayer: true}),
    }
    playerMock = {
      currentBet: 0,
    }
    bankerMock = {
      rollDie: jest.fn().mockReturnValue(3),
    }
    gameController = new GameController(consoleUIMock, factoryMock, bankerMock)
  })

  test('startGameRound should be called', async () => {
    const spy = jest.spyOn(GameController.prototype, 'handleGameRound')
    await gameController.run()
    expect(spy).toHaveBeenCalled()
  })

  test('letPlayerPlaceBet() should be called 2 times', async () => {
    const spy = jest.spyOn(GameController.prototype, 'letPlayerPlaceBet')
    await gameController.run()
    expect(spy).toHaveBeenCalledTimes(2)
  })

  test('should return 20 when a player placing a bet of 20', async () => {
    await gameController.letPlayerPlaceBet(playerMock)
    expect(playerMock.currentBet).toBe('20')
  })

  test('should call letBankerRollDie()', async () => {
    const spy = jest.spyOn(GameController.prototype, 'letBankerRollDie')
    await gameController.run()
    expect(spy).toHaveBeenCalled()
  })

  test('should call printBankersDieFaceValue() in ConsoleUI', async () => {
    const spy = jest.spyOn(GameController.prototype, 'printBankersDieFaceValue')
    await gameController.run()
    expect(spy).toHaveBeenCalled()
  })
})

// ---------- TEST QUITTING GAME ------------------------------------------

describe('tests with start menu choice 9 (quit)', () => {
  let consoleUIMock
  let gameController
  let bankerMock

  beforeEach(() => {
    consoleUIMock = {
      printGameBanner: jest.fn(),
      printStartMenu: jest.fn().mockResolvedValue('9'),
      printQuittingMessage: jest.fn(),
      promptForNumberOfPlayers: jest.fn().mockResolvedValue('2'),
      promptForPlayerNames: jest.fn().mockResolvedValue(['John', 'Lisa']),
      promptForBet: jest.fn().mockReturnValue('20'),
      closeInterface: jest.fn(),
    }
    bankerMock = {
      rollDie: jest.fn().mockReturnValue(3),
    }
    gameController = new GameController(consoleUIMock, {}, bankerMock)
  })

  test('should call handleMenuChoice() with "9" on menu choice 9', async () => {
    const handleMenuChoiceSpy = jest.spyOn(GameController.prototype, 'handleMenuChoice')
    await gameController.run()
    expect(handleMenuChoiceSpy).toHaveBeenCalledWith('9')
  })

  test('should call quitGame() when user chooses to quit game', async () => {
    const quitGameSpy = jest.spyOn(GameController.prototype, 'quitGame')
    await gameController.run()
    expect(quitGameSpy).toHaveBeenCalled()
  })
})
