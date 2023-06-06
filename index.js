#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');

const log = console.log;
const twitterClr = chalk.hex('#1da1f2').bold.inverse;
const gmailClr = chalk.hex('#ea4335').bold.inverse;
const githubClr = chalk.bgWhite.hex('333').inverse;
const italic = chalk.italic;

// Alerts
const sym = require('log-symbols');
const success = chalk.green.inverse;
const info = chalk.blue.inverse;
const warning = chalk.keyword('orange').inverse;
const error = chalk.red.bold.inverse;

welcome({
	title: pkgJSON.name,
	tagLine: `Howdy, nice to meet ya!`,
	description: pkgJSON.description,
	version: pkgJSON.version,
	bgColor: `#FADC00`,
	color: `#000`,
	bold: true,
	clear: true,
});

log(`
${chalk.bgBlue.bold(' Barry Hanna ')}

${italic('Developer, teacher and what not')}

${githubClr(` Github: `)} http://github.com/barryhanna
${gmailClr(` Email:  `)} barryahanna@gmail.com;
${twitterClr(` Twitter: `)} none
`);

console.log(`
${sym.success} ${success(
	' SUCCESS: '
)} Thanks for checking out my CLI.
${sym.info} ${info(' INFO: ')} I'm creating a course on nodecli.com
${sym.warning} ${warning(' WARNING: ')} Please don't copy me.
${sym.error} ${error(' ERROR: ')} I'm on vacation.
`);
