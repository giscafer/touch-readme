'use strict'
/**
 * Module dependencies.
 */
const path = require('path');
const fs = require('fs');
const program = require('commander');
const pkg = require('./package.json');
const CRT_FILE = path.join(process.cwd(), '/', 'README.md')
const TEMP_PATH = path.join(__dirname, './templates/')

program
    .version(pkg.version)
    .option('-v, --version', 'output version number')
    .option('-n, --npm', 'create README.md for middleware project', npm)
    // .option('-c, --common', 'create README.md file for simple project')
    .option('-c, --complex', 'create README.md file for complex project', complex)
    .on('--help', () => {
        console.log('  Examples:');
        console.log();
        console.log('    $ deploy exec sequential');
        console.log('    $ deploy exec async');
        console.log();
    });
program.parse(process.argv);
console.log();

if (!process.argv.slice(2)[0]) {
    common();
}

function npm() {
    createFile('npm')
    return;
}

function complex() {
    createFile('complex')
    return;
}

function common() {
    createFile('simple')
    return;
}

function createFile(type) {
    type = type ? type : 'simple';
    let file = path.join(TEMP_PATH, type + '.md');
    fs.readFile(file, (err, data) => {
        if (err) {
            console.error(err);
            process.exit(-1);
        }
        let contents = data.toString('utf-8');
        contents = contents.replace(/touch-readme/g, pkg.name);
        fs.writeFile(CRT_FILE, contents, (err) = {
            if (err) {
                console.log(err);
                process.exit(-1);
            }
        });
        console.log('create ' + file + ' success!')
    });

}
