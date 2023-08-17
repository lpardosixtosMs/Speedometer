const path = require("path");
const { buildComplex } = require("big-dom-generator/utils/buildComplex");

const SOURCE_DIRECTORY = "node_modules/todomvc-javascript-web-components/dist/";
const TITLE = "TodoMVC: JavaScript Web Components Complex DOM";
const FILES_TO_MOVE = [
    "node_modules/big-dom-generator/dist/big-dom-generator.css",
    "node_modules/big-dom-generator/utils/javascript-web-components/add-todo-item-extra-css.js",
    "node_modules/big-dom-generator/utils/add-todo-list-extra-css.js",
    "node_modules/big-dom-generator/dist/logo.png",
    "app.css"
];
const EXTRA_CSS_TO_LINK = ["app.css"];
const SCRIPTS_TO_LINK = ["add-todo-item-extra-css.js", "add-todo-list-extra-css.js"];

const options = {
    callerDirectory: path.resolve(__dirname),
    sourceDirectory: path.join("..", SOURCE_DIRECTORY),
    title: TITLE,
    filesToMove: FILES_TO_MOVE,
    extraCssToLink: EXTRA_CSS_TO_LINK,
    scriptsToLink: SCRIPTS_TO_LINK,
};

buildComplex(options);
