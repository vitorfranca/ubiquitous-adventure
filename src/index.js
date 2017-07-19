import express from 'express';
const app = express();
const PORT = 8081;

import path from 'path';
import React from 'react';

app.use('/static', express.static('static'));
// app.get('/', (req, res) => res.send('Hello World!!!'));

import { handleRender } from './handleRender';
app.use(handleRender);

app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));
