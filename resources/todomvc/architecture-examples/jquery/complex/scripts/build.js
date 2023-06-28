const fs = require("fs").promises;
const { JSDOM } = require("jsdom");
const path = require("path");
const { getHtmlContent } = require("big-dom-generator/utils/getHtmlContent");

const rootDirectory = "./";
const sourceDirectory = "./shared/src";
const targetDirectory = "./complex/dist";

const htmlFile = "index.html";
const todoHtmlFile = "index.html";

const filesToMove = [
    "node_modules/todomvc-common/base.css",
    "node_modules/todomvc-app-css/index.css",
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/handlebars/dist/handlebars.min.js",
    "node_modules/director/build/director.min.js",
    "node_modules/big-dom-generator/dist/app.css",
    "node_modules/big-dom-generator/matchingCss.css",
    "node_modules/big-dom-generator/nonMatchingCss.css",
    "node_modules/big-dom-generator/public/layout.css",
    "node_modules/big-dom-generator/dist/logo.png",
];

const copy = async (src, dest) => {
    await fs.copyFile(src, dest);
};

const build = async () => {
    // remove dist directory if it exists
    await fs.rm(targetDirectory, { recursive: true, force: true });

    // re-create the directory.
    await fs.mkdir(targetDirectory);

    // copy src folder
    await fs.cp(sourceDirectory, targetDirectory, { recursive: true });

    // copy html file
    await copy(
        path.resolve(__dirname, "../../node_modules/big-dom-generator/dist/index.html"),
        `${targetDirectory}/${htmlFile}`
    );

    // copy files to move
    for (const file of filesToMove) {
        const fileName = file.split("/").pop();
        await copy(path.resolve(__dirname, "../../", file), `${targetDirectory}/${fileName}`);
    }

    // read todo html file
    let todoHtml = await fs.readFile(`${rootDirectory}/${todoHtmlFile}`, "utf8");

    // remove base paths from files to move
    for (const file of filesToMove) {
        const fileName = file.split("/").pop();
        todoHtml = todoHtml.replace(file, fileName);
    }

    // remove basePath from source directory
    const basePath = `${sourceDirectory.split("/")[1]}/${sourceDirectory.split("/")[2]}/`;
    const re = new RegExp(basePath, "g");
    todoHtml = todoHtml.replace(re, "");

    // create a new JSDOM instance with todo.html contents
    const todoDom = new JSDOM(todoHtml);
    const doc = todoDom.window.document;
    const todoHead = todoDom.window.document.querySelector("head");
    const todoBody = todoDom.window.document.querySelector("body");

    doc.documentElement.setAttribute("class", "spectrum spectrum--medium spectrum--light");

    const todoBodyInnerHTML = todoBody.innerHTML;
    todoBody.innerHTML = getHtmlContent("node_modules/big-dom-generator/dist/index.html", true);

    // replace the title with <title>jQuery • TodoMVC Complex DOM</title>
    todoHead.querySelector("title").innerHTML = "jQuery • TodoMVC Complex DOM";

    // add to the contents of .todo-area
    const todoArea = todoDom.window.document.querySelector(".todo-area");

    // create a new div element with the class name of todoHolder
    const todoHolder = todoDom.window.document.createElement("div");
    todoHolder.className = "todoholder";

    todoHolder.innerHTML = todoBodyInnerHTML;

    // find the location to insert the todo.html contents
    todoArea.appendChild(todoHolder);

    // create links for css files and append them to the head
    const cssFiles = ["matchingCss.css", "nonMatchingCss.css", "layout.css"];
    for (const cssFile of cssFiles) {
        const cssLink = doc.createElement("link");
        cssLink.rel = "stylesheet";
        cssLink.href = cssFile;
        todoHead.appendChild(cssLink);
    }

    // write html files
    await fs.writeFile(`${targetDirectory}/${htmlFile}`, todoDom.serialize());

    // combine two css files
    const css1 = await fs.readFile(path.resolve(__dirname, "../../shared/src/app.css"), "utf8");
    const css2 = await fs.readFile(path.resolve(__dirname, "../../node_modules/big-dom-generator/dist/app.css"), "utf8");
    const css = css1 + css2;

    await fs.writeFile(`${targetDirectory}/app.css`, css);

    console.log("done!!");
};

build();
