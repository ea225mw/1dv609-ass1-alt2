import {Player} from './Player.js'

export class PlayerFactory {
  create(name) {
    return new Player(name)
  }
}
