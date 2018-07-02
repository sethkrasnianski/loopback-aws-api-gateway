#!/usr/bin/env node

const claudia = require('claudia');
const path = require('path');

claudia.generateServerlessExpressProxy({
  source: process.cwd(),
  'express-module': 'server/server'
}).then((res) => {
  console.info('Success!');
  console.info(res);
}).catch((err) => {
  console.error('Error!');
  console.error(err);
});
