import {beforeEach, describe, expect, jest} from '@jest/globals'
import {GameController} from '../src/GameController.js'

let bankerMock = {rollDie: jest.fn().mockReturnValue(3)}
let dieFactory = {create: jest.fn().mockReturnValue({dieMock: true})}

describe('tests for the startup of the game', () => {
  let consoleUIMock
  let gameController
  let factoryMock

  beforeEach(() => {
    consoleUIMock = {
      printGameBanner: jest.fn(),
      printStartMenu: jest.fn().mockResolvedValue('1'),
      printQuittingMessage: jest.fn(),
      promptForNumberOfPlayers: jest.fn().mockResolvedValue('2'),
      promptForPlayerNames: jest.fn().mockResolvedValue(['John', 'Lisa']),
      promptForBet: jest.fn().mockReturnValue('20'),
      closeInterface: jest.fn(),
      printBankersDieFaceValue: jest.fn(),
      promptPlayerToRollDie: jest.fn(),
    }
    factoryMock = {
      create: jest.fn().mockReturnValue({mockPlayer: true}),
    }
    gameController = new GameController(consoleUIMock, factoryMock, bankerMock, dieFactory)
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

  beforeEach(() => {
    consoleUIMock = {
      printGameBanner: jest.fn(),
      printStartMenu: jest.fn().mockResolvedValue('1'),
      printQuittingMessage: jest.fn(),
      promptForNumberOfPlayers: jest.fn().mockResolvedValue('2'),
      promptForPlayerNames: jest.fn().mockResolvedValue(['John', 'Lisa']),
      promptForBet: jest.fn().mockReturnValue('20'),
      closeInterface: jest.fn(),
      printBankersDieFaceValue: jest.fn(),
      promptPlayerToRollDie: jest.fn(),
    }
    factoryMock = {
      create: jest.fn().mockReturnValue({mockPlayer: true}),
    }
    playerMock = {
      currentBet: 0,
    }
    gameController = new GameController(consoleUIMock, factoryMock, bankerMock, dieFactory)
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

  test('should call printBankersDieFaceValue() with 3', async () => {
    const spy = jest.spyOn(GameController.prototype, 'printBankersDieFaceValue')
    await gameController.run()
    expect(spy).toHaveBeenCalledWith(3)
  })

  test('should call printBankersDieFaceValue() in ConsoleUI', async () => {
    await gameController.run()
    expect(consoleUIMock.printBankersDieFaceValue).toHaveBeenCalledWith(3)
  })

  test('letPlayerRollDie() should be called', async () => {
    const spy = jest.spyOn(GameController.prototype, 'letPlayersRollDie')
    await gameController.run()
    expect(spy).toHaveBeenCalled()
  })

  test('ConsolUI.promptPlayerToRollDie() should have been called', async () => {
    await gameController.run()
    expect(consoleUIMock.promptPlayerToRollDie).toHaveBeenCalledTimes(2)
  })
})

// ---------- TEST QUITTING GAME ------------------------------------------

describe('tests with start menu choice 9 (quit)', () => {
  let consoleUIMock
  let gameController

  beforeEach(() => {
    consoleUIMock = {
      printGameBanner: jest.fn(),
      printStartMenu: jest.fn().mockResolvedValue('9'),
      printQuittingMessage: jest.fn(),
      closeInterface: jest.fn(),
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
