const path = require("path");
const { buildComplex } = require("big-dom-generator/utils/buildComplex");

const SOURCE_DIRECTORY = "node_modules/todomvc-lit/dist/";
const TITLE = "TodoMVC: Lit Complex DOM";
const FILES_TO_MOVE = [
    "node_modules/big-dom-generator/dist/big-dom-generator.css",
    "node_modules/big-dom-generator/utils/add-extra-css.js",
    "node_modules/big-dom-generator/utils/todo-list-css.js",
    "node_modules/big-dom-generator/dist/logo.png",
    "app.css"
];
const EXTRA_CSS_TO_LINK = ["app.css"];
const SCRIPTS_TO_LINK = ["add-extra-css.js", "todo-list-css.js"];

buildComplex(path.resolve(__dirname), path.join("..", SOURCE_DIRECTORY), TITLE, FILES_TO_MOVE, EXTRA_CSS_TO_LINK, SCRIPTS_TO_LINK);
