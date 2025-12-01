import readline from 'node:readline/promises'
import {stdin as input, stdout as output} from 'node:process'

import {ConsoleUI} from './ConsoleUI.js'
import {GameController} from './GameController.js'
import {PlayerFactory} from './PlayerFactory.js'

const rl = readline.createInterface({input, output})
const playerFactory = new PlayerFactory()

const consoleUI = new ConsoleUI(rl)
const gameController = new GameController(consoleUI, playerFactory)

gameController.run()
