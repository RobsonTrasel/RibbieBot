import dotenv from 'dotenv'
dotenv.config()
import { Telegraf } from 'telegraf'
import * as fs from 'fs'
import { join } from 'path'

const token: string = process.env.TOKEN || ""
const bot = new Telegraf(token)


const modules = fs.readdirSync(join(__dirname, 'modules'))
const actions = fs.readdirSync(join(__dirname, 'actions'))
for(const module of modules)
{
  const command = require(join(__dirname, 'modules', module))
  bot.command(command.name, ctx => {
    ctx.state.command = command
    ctx.state.actions = command.actions
    ctx.reply(command.desc)
  })
}

for(const action of actions)
{
  const actionFile = require(join(__dirname, 'actions', action))
  bot.action(actionFile.name, actionFile.handler)
}

bot.launch()
