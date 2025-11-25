import {MenuHandler} from '../src/MenuHandler.js'

test('should return "startGame" on input 1', () => {
  const menuHandler = new MenuHandler()
  expect(menuHandler.handleMenuChoice('1')).toBe('startGame')
})

test('should return "quitGame" on input 9', () => {
  const menuHandler = new MenuHandler()
  expect(menuHandler.handleMenuChoice('9')).toBe('quitGame')
})
