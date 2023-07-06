import View from "../../javascript-es6-webpack/shared/view";
import Controller from "../../javascript-es6-webpack/shared/controller";
import Model from "../../javascript-es6-webpack/shared/model";
import Store from "../../javascript-es6-webpack/shared/store";
import Template from "../../javascript-es6-webpack/shared/template";

import "../../shared/app.css";

import "todomvc-app-css/index.css";
import "big-dom-generator/dist/app.css";
import "big-dom-generator/generated.css";

let todo;
const onHashChange = () => {
    todo.controller.setView(document.location.hash);
};

const onLoad = () => {
    todo = new Todo("javascript-es6-webpack");
    onHashChange();
};

function Todo(name) {
    this.storage = new Store(name);
    this.model = new Model(this.storage);
    this.template = new Template();
    this.view = new View(this.template);
    this.controller = new Controller(this.model, this.view);
}

/* HOT MODULE SPECIFIC */
if (module.hot) {
    module.hot.accept(function (err) {});
    if (document.readyState === "complete")
        onLoad();
}

window.addEventListener("load", onLoad);
window.addEventListener("hashchange", onHashChange);
