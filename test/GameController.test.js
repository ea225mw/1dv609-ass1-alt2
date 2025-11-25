import {beforeEach, describe, expect, jest} from '@jest/globals'
import {GameController} from '../src/GameController.js'
/*import {Player} from '../src/Player.js'
import {ConsoleUI} from '../temp/ConsoleUI.js'
import {MenuHandler} from '../src/MenuHandler.js'*/

/* 
1. Visa startmenyn
2. Välja starta spelet
3. Ange antal spelare
4. Skriva in alla spelares namn och skapa upp spelarobjekt med tillhörande tärningar.
5. Spelarna ska läggas till i arrayen PLAYERS
*/

describe('tests with start menu choice 1 (start game)', () => {
  let consoleUIMock
  let gameController

  beforeEach(() => {
    consoleUIMock = {
      printGameBanner: jest.fn(),
      printStartMenu: jest.fn().mockResolvedValue('1'),
      promptForNumberOfPlayers: jest.fn().mockResolvedValue('2'),
    }
    gameController = new GameController(consoleUIMock)
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

  test('should call createPlayers()', async () => {
    const spy = jest.spyOn(GameController.prototype, 'createPlayers')
    await gameController.run()
    expect(spy).toHaveBeenCalledTimes(2)
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
    }
    gameController = new GameController(consoleUIMock)
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
