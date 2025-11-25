export class GameController {
  #consoleUI
  #isGameActive = true

  constructor(consoleUI) {
    this.#consoleUI = consoleUI
  }

  async run() {
    this.#consoleUI.printGameBanner()
    while (this.#isGameActive) {
      const choice = await this.#consoleUI.printStartMenu()
      const action = this.handleMenuChoice(choice)
      if (action === 'startGame') {
        //implement later, for now let's quit:
        this.quitGame()
      }
      if (action === 'quitGame') {
        this.quitGame()
      }
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

  quitGame() {
    this.#isGameActive = false
  }
}
