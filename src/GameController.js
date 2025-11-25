export class GameController {
  #consoleUI

  constructor(consoleUI) {
    this.#consoleUI = consoleUI
  }

  async run() {
    this.#consoleUI.printGameBanner()
    const choice = await this.#consoleUI.printStartMenu()
    this.handleMenuChoice(choice)
  }

  handleMenuChoice(choice) {
    switch (choice) {
      case '1':
        return 'startGame'
      case '9':
        return 'quitGame'
    }
  }
}
