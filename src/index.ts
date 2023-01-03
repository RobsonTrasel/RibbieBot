import dotenv from 'dotenv'
dotenv.config()
import { Telegraf } from 'telegraf'
import { registerCommands } from './utils/command-handler'
import { join } from 'path'

const token: string = process.env.TOKEN || ""
const bot = new Telegraf(token)

registerCommands(bot, join(__dirname, 'modules'))


bot.launch()
