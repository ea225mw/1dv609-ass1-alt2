import {Player} from '../src/Player.js'

/*
1. Return players name
2. Amount of funds
3. Bets?
4. Constructor
  - Create funds
  - Set name

*/

test("should return player's name", () => {
  const player = new Player('Joe')
  const name = player.getName()
  expect(name).toBe('Joe')
})

test("should return a player's initial total funds on creation", () => {
  const player = new Player('Joe')
  expect(player.getFunds()).toBe(500)
})
