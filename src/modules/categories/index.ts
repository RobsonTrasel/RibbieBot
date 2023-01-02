import { Context } from "telegraf";

export const name = "categorias"
export const handler = (ctx: Context) => {
  ctx.answerCbQuery("Aqui estão as categorias disponiveis")
}
