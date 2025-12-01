export class Player {
  #name
  #funds
  currentBet

  constructor(name) {
    this.#name = name
    this.#funds = 500
  }

  getName() {
    return this.#name
  }

  getFunds() {
    return this.#funds
  }
}
