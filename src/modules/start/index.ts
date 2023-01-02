import { Context } from 'telegraf'

export const name = 'start'
export const handler = (ctx: Context) => {
  ctx.replyWithMarkdownV2(
    "Olá, seja bem vindo ao RibbieBOT, escolha uma opção",
    {
      reply_markup: {
        inline_keyboard: [[{
          text: "Categorias",
          callback_data: 'categories'
        },
        {
          text: "Github",
          callback_data: "link"
        }
      ]]
      }
    }
  )
}