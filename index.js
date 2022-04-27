// const module1 = require('./module1')
import chalk from 'chalk'
import module1 from './module1.js'

const log = console.log;

log(chalk.red('Hello', chalk.underline.bgGreen('world') + '!'));
log(new module1.PlayerClub('Messi', 'Barcelona').getCLubStat())