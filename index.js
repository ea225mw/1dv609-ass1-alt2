import readline from 'node:readline/promises'
import {stdin as input, stdout as output} from 'node:process'

import {ConsoleUI} from './src/ConsoleUI.js'
import {GameController} from './src/GameController.js'
import {PlayerFactory} from './src/PlayerFactory.js'
import {Die} from './src/Die.js'
import {Banker} from './src/Banker.js'

const rl = readline.createInterface({input, output})
const playerFactory = new PlayerFactory()
const bankersDie = new Die()
const banker = new Banker(bankersDie)

const consoleUI = new ConsoleUI(rl)
const gameController = new GameController(consoleUI, playerFactory, banker)

gameController.run()
