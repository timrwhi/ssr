const express = require('express');
const template = require('./dist/template');
const path = require('path');
const getAppHtml = require('./dist/renderToString');

const app = express();

app.use('/assets', express.static(path.resolve(__dirname, 'dist/min')));

app.listen(process.env.PORT || 3000);

// server rendered home page
app.get('/', (req, res) => {
  const html = getAppHtml();
  const response = template('Server Rendered Page', html);
  res.send(response);
});

// Pure client side rendered page
app.get('/client', (req, res) => {
  let response = template('Client Side Rendered page');
  res.send(response);
});
