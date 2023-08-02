const path = require("path");
const { buildComplex } = require("big-dom-generator/utils/buildComplex");

const SOURCE_DIRECTORY = "node_modules/todomvc-react/dist/";
const TITLE = "TodoMVC: React Complex DOM";
const FILES_TO_MOVE = [
    "node_modules/big-dom-generator/dist/big-dom-generator.css",
    "node_modules/big-dom-generator/dist/logo.png",
    "node_modules/big-dom-generator/dist/798f3b3f3a764fd969f5.svg",
    "node_modules/big-dom-generator/dist/da29bc38c9da6cc5461b.svg",
    "node_modules/big-dom-generator/utils/app.css",
];

buildComplex(path.resolve(__dirname), path.join("..", SOURCE_DIRECTORY), TITLE, FILES_TO_MOVE);
