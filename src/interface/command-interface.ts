import { Context } from "telegraf"

export interface Command {
    name: string
    desc: string
    handler: (ctx: Context) => void
}