import {Player} from '../src/Player.js'

test("should return player's name", () => {
  const player = new Player('Joe')
  const name = player.getName()
  expect(name).toBe('Joe')
})

test("should return a player's initial total funds on creation", () => {
  const player = new Player('Joe')
  expect(player.getFunds()).toBe(500)
})
