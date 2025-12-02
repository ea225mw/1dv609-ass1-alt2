import {Player} from './Player.js'

export class PlayerFactory {
  create(name, die) {
    return new Player(name, die)
  }
}
