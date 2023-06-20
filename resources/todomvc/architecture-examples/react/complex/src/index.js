import React from "react";
import { render } from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";

import { App } from "../../shared/todo/app";

import "todomvc-app-css/index.css";
import "big-dom-generator/public/layout.css";
import "big-dom-generator/matchingCss.css";
import "big-dom-generator/nonMatchingCss.css";
import "big-dom-generator/dist/app.css";

const todoHolder = document.createElement("div");
todoHolder.className = "todoholder";

render(
    <>
        <section className="todoapp" id="root">
            <HashRouter>
                <Routes>
                    <Route path="*" element={<App />} />
                </Routes>
            </HashRouter>
        </section>
        <footer className="info">
            <p>Click on input field to write your todo.</p>
            <p>At least two characters are needed to be a valid entry.</p>
            <p>Press &lsquo;enter&rsquo; to add the todo.</p>
            <p>Double-click to edit a todo</p>
        </footer>
    </>,
    todoHolder
);

document.querySelector(".todo-area").appendChild(todoHolder);
