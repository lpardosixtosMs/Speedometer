/**
 * Builds the TodoMVC Angular Complex DOM.
 * SOURCE_DIRECTORY - The source directory for the TodoMVC Angular app.
 * TITLE - The title of the generated HTML file.
 * FILES_TO_MOVE - An array of file paths to move to the dist directory.
 */
const path = require("path");
const { execSync } = require("child_process");

const COMPLEX_DIRECTORY = path.join(__dirname, "..");
const STANDALONE_DIRECTORY = path.join(__dirname, "..", "..", "angular");
const SOURCE_DIRECTORY = "node_modules/todomvc-angular/dist/";
const TITLE = "TodoMVC: Angular Complex DOM";
const FILES_TO_MOVE = ["node_modules/big-dom-generator/dist/big-dom-generator.css", "node_modules/big-dom-generator/dist/logo.png"];

// Run npm i in big-dom-generator
console.log("Running npm i in big-dom-generator...");
execSync("npm i", { cwd: path.join(__dirname, "..", "..", "..", "big-dom-generator"), stdio: "inherit" });

// Run npm i in the standalone directory
console.log(`Running npm i in the standalone directory... : ${STANDALONE_DIRECTORY}`);
execSync("npm i", { cwd: STANDALONE_DIRECTORY, stdio: "inherit" });

// Run npm run build in the standalone directory
console.log(`Running npm run build in the standalone directory... : ${STANDALONE_DIRECTORY}`);
execSync("npm run build", { cwd: STANDALONE_DIRECTORY, stdio: "inherit" });

console.log(`Running npm i in the complex directory... : ${COMPLEX_DIRECTORY}`);
execSync("npm i", { cwd: COMPLEX_DIRECTORY, stdio: "inherit" });

const { buildComplex } = require("big-dom-generator/utils/buildComplex");

const options = {
    callerDirectory: path.resolve(__dirname),
    sourceDirectory: path.join("..", SOURCE_DIRECTORY),
    title: TITLE,
    filesToMove: FILES_TO_MOVE,
    cssFilePath: path.resolve(__dirname, "..", "node_modules", "big-dom-generator", "utils", "app.css"),
    cssFileNamePattern: /^styles.*\.css$/,
};

buildComplex(options);
