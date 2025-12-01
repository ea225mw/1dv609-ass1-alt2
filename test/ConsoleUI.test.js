import {beforeEach, jest, test} from '@jest/globals'
import {ConsoleUI} from '../src/ConsoleUI.js'

test('printStartMenu() should return 1', async () => {
  const rlMock = {
    question: jest.fn().mockResolvedValue('1'),
  }
  const consoleUI = new ConsoleUI(rlMock)
  const result = await consoleUI.printStartMenu()

  expect(result).toBe('1')
})

test('promptForNumberOfPlayers should return 3', async () => {
  const rlMock = {
    question: jest.fn().mockResolvedValue('3'),
  }
  const consoleUI = new ConsoleUI(rlMock)
  const result = await consoleUI.promptForNumberOfPlayers()

  expect(result).toBe('3')
})

test('promptForPlayerNames() should return two names', async () => {
  const rlMock = {
    question: jest.fn().mockResolvedValueOnce('John').mockResolvedValueOnce('Lisa'),
  }

  const consoleUI = new ConsoleUI(rlMock)
  const result = await consoleUI.promptForPlayerNames(2)

  expect(result).toEqual(['John', 'Lisa'])
  expect(rlMock.question).toHaveBeenCalledTimes(2)
})

test('promptForBet() should return 20', async () => {
  const playerMock = {
    getName: jest.fn().mockResolvedValue('John'),
    getFunds: jest.fn().mockReturnValue(200),
  }
  const rlMock = {
    question: jest.fn().mockResolvedValueOnce('20'),
  }

  const consoleUI = new ConsoleUI(rlMock)
  const result = await consoleUI.promptForBet(playerMock)

  expect(result).toBe('20')
})

test('closeInterface() should be called', () => {
  const rlMock = {
    close: jest.fn(),
  }
  const consoleUI = new ConsoleUI(rlMock)
  consoleUI.closeInterface()
  expect(rlMock.close).toHaveBeenCalled()
})
