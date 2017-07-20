import express from 'express';
const app = express();

const isDeveloping = process.env.NODE_ENV !== 'production';
const PORT = isDeveloping ? 8081 : process.env.PORT;

import path from 'path';
import React from 'react';

app.use('/public', express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());

app.listen(PORT, '0.0.0.0', (err) => {
  if (err) {
    console.error(err);
    throw err;
  }
  else console.log(`app listening on port ${PORT}!`);
});

export default app;
