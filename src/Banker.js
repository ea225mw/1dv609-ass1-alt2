export class Banker {
  #name = 'Banker'
  #die

  constructor(die) {
    this.#die = die
  }

  getName() {
    return this.#name
  }

  rollDie() {
    return this.#die.roll()
  }
}
