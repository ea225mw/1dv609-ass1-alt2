import {Banker} from '../src/Banker.js'

test('should create a new Banker object', () => {
  const banker = new Banker('Banker')
  expect(banker.getName()).toBe('Banker')
})
