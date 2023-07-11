import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { App } from "./src/app";
import { genCss, genWebComponentsCSS } from "./gen-css";

const fs = require("fs");

function writeCss(filePath, cssText) {
    console.log('writing css to', filePath);
    fs.writeFileSync(filePath, `${cssText}\n`);
}

writeCss("./generated.css", genCss(""));
writeCss("./angular/generated.css", genCss("angular"));
writeCss("./javascript-web-components/generated.css", genCss("javascript-web-components"));
const webComponentsCss = genWebComponentsCSS();
writeCss("./javascript-web-components/generated-global.css", webComponentsCss.globalCss);
writeCss("./javascript-web-components/additional-stylesheets.constructable.js", webComponentsCss.additionalStyleSheetsScript);

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
fs.writeFileSync("dist/index.html", html);
