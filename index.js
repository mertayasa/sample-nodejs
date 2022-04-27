// const module1 = require('./module1')
import chalk from 'chalk'
import module1 from './module1.js'

const log = console.log;

log(module1.playerDetail)
log(chalk.red('Hello', chalk.underline.bgGreen('world') + '!'));
log(new module1.PlayerClub('Messi', 'Barcelona').getCLubStat())