#!/usr/bin/env node

const claudia = require('claudia');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Destroy app? [yes]/no: ", (answer) => {
  if (answer !== 'yes') {
    console.info('No action taken...');
    process.exit(0);
  }

  claudia.destroy().then((res) => {
    console.info('Destroyed!');
    process.exit(0);
  }).catch((err) => {
    console.error('Error!');
    console.error(err);
    process.exit(0);
  });
});

