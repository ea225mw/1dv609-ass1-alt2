export class GameController {
  #myConsole

  constructor(myConsole) {
    this.#myConsole = myConsole
  }

  run() {
    this.#myConsole.printGameBanner()
  }
}
