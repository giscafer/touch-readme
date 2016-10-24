'use strict'
/**
 * Module dependencies.
 */
const path = require('path');
const fs = require('fs');
const program = require('commander');
const pkg = require('./package.json');

program
    .version(pkg.version)
    .option('-v, --version', 'output version number')
    .option('-n, --npm', 'create README.md for middleware project',npm)
    // .option('-c, --common', 'create README.md file for common project')
    .option('-c, --complex', 'create README.md file for complex project',complex)
    .on('--help', () => {
        console.log('  Examples:');
        console.log();
        console.log('    $ deploy exec sequential');
        console.log('    $ deploy exec async');
        console.log();
    });
program.parse(process.argv);
console.log();

if(!process.argv.slice(2)[0]){
	common();
}
function npm(val) {
  return console.log('npm');
}
 
function complex(val) {
  return console.log('complex');
}

function common(val) {
  return console.log('create README.md file for common project');
}
