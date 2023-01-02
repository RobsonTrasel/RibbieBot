import { Context } from "telegraf"
import { help } from '../../utils/helpList';
export const name = 'help'
export const desc = "Lista todos os comandos disponiveis"
export const handler = (ctx: Context) => {
  ctx.reply(help())
}