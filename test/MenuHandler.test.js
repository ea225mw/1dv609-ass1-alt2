import {MenuHandler} from '../src/MenuHandler.js'

const menuHandler = new MenuHandler()

test('should return "startGame" on input 1', () => {
  expect(menuHandler.handleMenuChoice('1')).toBe('startGame')
})

test('should return "quitGame" on input 9', () => {
  expect(menuHandler.handleMenuChoice('9')).toBe('quitGame')
})
