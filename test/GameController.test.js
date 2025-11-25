import {jest} from '@jest/globals'
import {GameController} from '../src/GameController.js'
import {Player} from '../src/Player.js'
import {MyConsole} from '../temp/MyConsole.js'
import {MenuHandler} from '../src/MenuHandler.js'
/* 
1. Visa startmenyn
2. Välja starta spelet
3. Ange antal spelare
4. Skriva in alla spelares namn och skapa upp spelarobjekt med tillhörande tärningar.
5. Spelarna ska läggas till i arrayen PLAYERS

*/

const mockConsole = {
  printWelcome: jest.fn(),
  printStartMenu: jest.fn().mockResolvedValue('1'),
}

test('should print game name banner on startup', () => {
  const gameController = new GameController(mockConsole)
  gameController.run()
  expect(mockConsole.printGameBanner).toHaveBeenCalled()
})

/*

test('should print game banner on startup', async () => {
    const mockConsole = {
    printWelcome: jest.fn(),
    printStartMenu: jest.fn().mockResolvedValue('1')
  }
  const menuHandler = new MenuHandler()
  const myConsole = new MyConsole(menuHandler)
  const gameController = new GameController(myConsole)
  gameController.run()
})*/
