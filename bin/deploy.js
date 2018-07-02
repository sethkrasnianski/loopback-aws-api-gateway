#!/usr/bin/env node

const claudia = require('claudia');
const path = require('path');

claudia.create({
  source: process.cwd(),
  handler: 'lambda.handler',
  'deploy-proxy-api': true,
  region: 'us-east-1'
}).then((res) => {
  console.info('Deployed!');
  console.info(res);
}).catch((err) => {
  console.error('Error!');
  console.error(err);
});
