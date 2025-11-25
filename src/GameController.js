export class GameController {
  #consoleUI

  constructor(consoleUI) {
    this.#consoleUI = consoleUI
  }

  run() {
    this.#consoleUI.printGameBanner()
    const choice = this.#consoleUI.printStartMenu()
  }
}
