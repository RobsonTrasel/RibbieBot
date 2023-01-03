import { join } from "path";
import { Command } from "../interface/command-interface";
import * as fs from 'fs'

const commands: Command[] = []

export const registerCommands = (bot: any, commandPath: string) => {
    const modules = fs.readdirSync(commandPath)
    for(const module of modules) {
        const command: Command = require(join(commandPath, module))
        commands.push(command)
        bot.command(command.name, command.handler)
    }
}

export const getCommands = () => commands
