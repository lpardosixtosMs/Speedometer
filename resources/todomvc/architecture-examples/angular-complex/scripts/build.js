const fs = require("fs");
const path = require("path");
const { buildComplex } = require("big-dom-generator/utils/buildComplex");

const SOURCE_DIRECTORY = "node_modules/todomvc-angular/dist/";
const TITLE = "TodoMVC: Angular Complex DOM";
const FILES_TO_MOVE = ["node_modules/big-dom-generator/dist/big-dom-generator.css", "node_modules/big-dom-generator/dist/logo.png"];

buildComplex(path.resolve(__dirname), path.join("..", SOURCE_DIRECTORY), TITLE, FILES_TO_MOVE);

// get the name of the css file that's in css
const cssFile = fs.readdirSync(path.resolve(__dirname, "..", "dist")).find((file) => file.startsWith("styles") && file.endsWith(".css"));

// overwrite the css file in the dist/css directory with the one from the big-dom-generator module
// but keep the new name so we don't need to add a new link
fs.copyFileSync(path.resolve(__dirname, "..", "node_modules", "big-dom-generator", "utils", "app.css"), path.resolve(__dirname, "..", "dist", cssFile));
