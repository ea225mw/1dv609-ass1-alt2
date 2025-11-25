import {describe, expect, jest} from '@jest/globals'
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
  const consoleUIMock = {
    printGameBanner: jest.fn(),
    printStartMenu: jest.fn().mockResolvedValue('1'),
  }

  const gameController = new GameController(consoleUIMock)

  test('should print game name banner on startup', () => {
    gameController.run()
    expect(consoleUIMock.printGameBanner).toHaveBeenCalled()
  })

  test('should print start menu on startup', () => {
    gameController.run()
    expect(consoleUIMock.printStartMenu).toHaveBeenCalled()
  })

  test('handleMenuChoice() should be called with "1" on menu choice 1', async () => {
    const handleMenuChoiceSpy = jest.spyOn(GameController.prototype, 'handleMenuChoice')
    await gameController.run()
    expect(handleMenuChoiceSpy).toHaveBeenCalledWith('1')
  })
})

describe('tests with start menu choice 9 (quit)', () => {
  const consoleUIMock = {
    printGameBanner: jest.fn(),
    printStartMenu: jest.fn().mockResolvedValue('9'),
  }

  const gameController = new GameController(consoleUIMock)

  test('handleMenuChoice() should be called with "9" on menu choice 9', async () => {
    const handleMenuChoiceSpy = jest.spyOn(GameController.prototype, 'handleMenuChoice')
    await gameController.run()
    expect(handleMenuChoiceSpy).toHaveBeenCalledWith('9')
  })
})
