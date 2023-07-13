import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { App } from "./src/app";
import { genCss } from "./gen-css";
import { genShadowDomVariables } from "./gen-shadow-dom-variables";

const path = require("path");
const fs = require("fs");

function writeFile(filePath, text) {
  const destinationFilePath = path.join(__dirname, "..", filePath);
  console.log('writing file to', destinationFilePath);
  fs.writeFileSync(destinationFilePath, `${text}\n`);
}

writeFile("generated.css", genCss(""));
writeFile("angular/generated.css", genCss("angular"));
const webComponentsCss = genShadowDomVariables();
writeFile("javascript-web-components/generated-variables.css", webComponentsCss.variables);
writeFile("javascript-web-components/additional-stylesheets.constructable.js", webComponentsCss.styleSheets);

const html = `<!DOCTYPE html>
<html lang="en" class="spectrum spectrum--medium spectrum--light">
  <head>
    <title>Big Todo App</title>
    <script src="app.bundle.js"></script>
    <link rel="stylesheet" href="app.css">
  </head>
  <body>
    ${renderToStaticMarkup(<App />)}
  </body>
</html>`;
writeFile("dist/index.html", html);
