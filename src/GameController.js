export class GameController {
  #consoleUI

  constructor(consoleUI) {
    this.#consoleUI = consoleUI
  }

  async run() {
    this.#consoleUI.printGameBanner()
    const choice = await this.#consoleUI.printStartMenu()
    const action = this.handleMenuChoice(choice)
    if (action === 'startGame') {
      //implement later
    }
    if (action === 'quitGame') {
      this.quitGame()
    }
  }

  handleMenuChoice(choice) {
    switch (choice) {
      case '1':
        return 'startGame'
      case '9':
        return 'quitGame'
    }
  }

  quitGame() {}
}
