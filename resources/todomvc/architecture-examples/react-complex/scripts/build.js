const path = require("path");
const { buildComplex } = require("big-dom-generator/utils/buildComplex");

const SOURCE_DIRECTORY = "node_modules/todomvc-react/dist/";
const TITLE = "TodoMVC: React Complex DOM";
const FILES_TO_MOVE = [
    "node_modules/big-dom-generator/dist/big-dom-generator.css",
    "node_modules/big-dom-generator/dist/logo.png",
    "node_modules/big-dom-generator/dist/Smock_TaskList_18_N.svg",
    "node_modules/big-dom-generator/utils/app.css",
];

const options = {
    callerDirectory: path.resolve(__dirname),
    sourceDirectory: path.join("..", SOURCE_DIRECTORY),
    title: TITLE,
    filesToMove: FILES_TO_MOVE,
};

buildComplex(options);
