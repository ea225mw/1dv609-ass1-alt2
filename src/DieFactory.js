import {Die} from './Die.js'

export class DieFactory {
  create() {
    return new Die()
  }
}
