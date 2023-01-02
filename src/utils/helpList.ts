import * as fs from 'fs'
import { join } from "path"
const commands = fs.readdirSync(join(__dirname, 'modules'))
export const help = (): string => {
  let helpString = ''
  for(const command of commands)
  {
    const module = require(join(__dirname, 'modules', command))
    helpString += module.name + '\n'
  }

  return helpString
}   