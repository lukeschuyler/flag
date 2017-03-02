#!/usr/bin/env/ node

const chalk = require('chalk')

const { bgWhite } = chalk.styles
const { bgRed } = chalk.styles

console.log(chalk.white.bgBlue('* * * * * * *') + bgRed.open + `                                     ` + bgRed.close)
console.log(chalk.white.bgBlue(' * * * * * * ') + bgWhite.open + `                                     ` + bgWhite.close)
console.log(chalk.white.bgBlue('* * * * * * *') + bgRed.open + `                                     ` + bgRed.close)
console.log(chalk.white.bgBlue(' * * * * * * ') + bgWhite.open + `                                     ` + bgWhite.close)
console.log(chalk.white.bgBlue('* * * * * * *') + bgRed.open + `                                     ` + bgRed.close)
console.log(chalk.white.bgBlue(' * * * * * * ') + bgWhite.open + `                                     ` + bgWhite.close)
console.log(chalk.white.bgBlue('* * * * * * *') + bgRed.open + `                                     ` + bgRed.close)
console.log(bgWhite.open + `                                                  ` + bgWhite.close)
console.log(bgRed.open + `                                                  ` + bgRed.close)
console.log(bgWhite.open + `                                                  ` + bgWhite.close)
console.log(bgRed.open + `                                                  ` + bgRed.close)
console.log(bgWhite.open + `                                                  ` + bgWhite.close)
console.log(bgRed.open + `                                                  ` + bgRed.close)
