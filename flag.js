#!/usr/bin/env node

const chalk = require('chalk')

const { bgWhite } = chalk.styles
const { bgRed } = chalk.styles

const shortWhite = () => { console.log(chalk.white.bgBlue(' ✮ ✮ ✮ ✮ ✮ ✮ ✮ ') + bgWhite.open + `                                     ` + bgWhite.close) }
const shortRed = () => { console.log(chalk.white.bgBlue('  ✮ ✮ ✮ ✮ ✮ ✮  ') + bgRed.open + `                                     ` + bgRed.close) }
const longWhite = () => { console.log(bgWhite.open + `                                                    ` + bgWhite.close) }
const longRed = () => { console.log(bgRed.open + `                                                    ` + bgRed.close) }

function writeFlag() {
	for (var i = 0; i < 13; i++) {
		if (i < 7) {
			(i % 2 === 0) ? shortWhite() : shortRed()
		} else {
			(i % 2 === 0) ? longWhite() : longRed()
		}
	}
}

writeFlag()
