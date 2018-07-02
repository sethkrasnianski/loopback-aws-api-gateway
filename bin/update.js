#!/usr/bin/env node

const claudia = require('claudia');

claudia.update().then((res) => {
  console.info('Updated!');
  console.info(res);
}).catch((err) => {
  console.error('Error!');
  console.error(err);
});
