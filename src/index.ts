import dotenv from 'dotenv'
dotenv.config()
import { Telegraf } from 'telegraf'
import * as fs from 'fs'
import { join } from 'path'

const token: string = process.env.TOKEN || ""
const bot = new Telegraf(token)


const modules = fs.readdirSync(join(__dirname, 'modules'))
for(const module of modules)
{
  const command = require(join(__dirname, 'modules', module))
  bot.command(command.name, command.handler)
}

bot.launch()
