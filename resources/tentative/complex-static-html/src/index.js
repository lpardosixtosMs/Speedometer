import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { App } from './components/app';
import { genCss } from './gen-css'

import './app.css';

const fs = require('fs');

const randomCss = genCss();
fs.writeFileSync('dist/matchingCss.css', randomCss.matchingCss);
fs.writeFileSync('dist/nonMatchingCss.css', randomCss.nonMatchingCss);

const html = 
`<!DOCTYPE html>
<html lang="en" class="spectrum spectrum--medium spectrum--light">
  <head>
    <title>Big Todo App</title>
    <link rel="stylesheet" href="nonMatchingCss.css">
    <link rel="stylesheet" href="app.css">
  </head>
  <body>
    ${renderToStaticMarkup(<App />)}
  </body>
</html>`;
fs.writeFileSync('dist/index.html', html);