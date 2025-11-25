export class GameController {
  #consoleUI
  #playerFactory
  #players = []
  #isGameRunning = true

  constructor(consoleUI, playerFactory) {
    this.#consoleUI = consoleUI
    this.#playerFactory = playerFactory
  }

  async run() {
    this.#consoleUI.printGameBanner()
    while (this.#isGameRunning) {
      const choice = await this.#consoleUI.printStartMenu()
      const action = this.handleMenuChoice(choice)
      if (action === 'startGame') {
        const numberOfPlayers = await this.#consoleUI.promptForNumberOfPlayers()
        const arrayWithNames = this.#consoleUI.promptForPlayerNames(numberOfPlayers)
        this.createPlayers(arrayWithNames)

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

  createPlayers(arrayWithNames) {
    for (let i = 0; i < arrayWithNames.length; i++) {
      const player = this.#playerFactory.create(arrayWithNames[i])
      this.#players.push(player)
    }
  }

  quitGame() {
    this.#isGameRunning = false
  }
}
