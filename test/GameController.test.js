import {jest} from '@jest/globals'
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
