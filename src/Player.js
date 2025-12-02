export class Player {
  #name
  #funds
  #die
  currentBet

  constructor(name, die) {
    this.#name = name
    this.#funds = 500
    this.#die = die
  }

  getName() {
    return this.#name
  }

  getFunds() {
    return this.#funds
  }

  roll() {
    return this.#die.roll()
  }
}
