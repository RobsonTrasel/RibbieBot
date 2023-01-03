import { Context } from 'telegraf'

export const name = 'start'
export const desc = "Exibe a mensagem de boas-vindas do bot"
export const handler = (ctx: Context) => {
  ctx.reply('Olá! Eu sou o RibbiePDFBot, um bot que auxilia na busca por PDFs. Digite /help parar os comandos disponiveis.')
}

