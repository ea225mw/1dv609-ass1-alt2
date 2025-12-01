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
        const arrayWithNames = await this.#consoleUI.promptForPlayerNames(numberOfPlayers)
        this.createPlayers(arrayWithNames)
        await this.handleGameRound()

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

  async handleGameRound() {
    /*
    1. Every player places a bet (#players.forEach((letPlayerPlaceBet())))
    2. Banker rolls die
    3. Evaluate results
    4. Funds are reglated
     */
    for (const player of this.#players) {
      await this.letPlayerPlaceBet(player)
    }
  }

  async letPlayerPlaceBet(player) {
    const bet = await this.#consoleUI.promptForBet(player)
    player.currentBet = bet
  }

  quitGame() {
    this.#consoleUI.printQuittingMessage()
    this.#isGameRunning = false
    this.#consoleUI.closeInterface()
  }
}
