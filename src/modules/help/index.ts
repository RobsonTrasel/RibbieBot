import { Context } from "telegraf";
import { getCommands } from "../../utils/command-handler";

export const name = "help"
export const desc = "Mostra os comandos disponiveis"
export const handler = (ctx: Context) => {
    const commands = getCommands()
    let message = "Os comandos abaixos são disponiveis: "
    for(const command of commands) {
        message += "/${command.name}: ${command.desc}\n"
    }
    ctx.reply(message)
}