export class ConsoleUI {
  rl

  constructor(rl) {
    this.rl = rl
  }

  printGameBanner() {
    console.log("\n=== Banker's Dice Game ===")
  }

  printQuittingMessage() {
    console.log('\nQuitting game.\n')
  }

  async printStartMenu() {
    console.log('1) Start game')
    console.log('9) Exit')

    const answer = await this.rl.question(
      'Choose an alternative from the menu. Type the corresponding number and press Enter. '
    )
    return answer
  }

  async promptForNumberOfPlayers() {
    const numberOfPlayers = await this.rl.question('How many players? ')
    return numberOfPlayers
  }

  async promptForPlayerNames(numberOfPlayers) {
    let arrayWithNames = []
    let index = 1
    while (index <= numberOfPlayers) {
      const name = await this.rl.question(`Enter the name of player ${index}: `)
      arrayWithNames.push(name)
      index++
    }
    return arrayWithNames
  }

  async promptForBet(player) {
    console.log(`\n${player.getName()}, your funds are ${player.getFunds()}.`)
    const bet = await this.rl.question('Place your bet:\n')
    return bet
  }

  printBankersDieFaceValue(faceValue) {
    console.log(`\nBanker rolls the die... ...and the value is: ${faceValue}\n`)
  }

  closeInterface() {
    this.rl.close()
  }
}
