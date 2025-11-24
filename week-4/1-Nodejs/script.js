// import chalk from "chalk";

// console.log(chalk.blue("Hello World"));

// const path = require("path");
// console.log(__dirname);
// console.log(__dirname + "index.js"); //string path concatination

// console.log(path.join(__dirname ,"index.js")); //resolves path

const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split('\n').length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });

program.parse();
