import React from "react";
import { render } from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";

import { App } from "./todo/app";
import "todomvc-app-css/index.css";
import "./small.css";

render(
    <div class="absolutely-positioned-element">
        <section className="todoapp" id="root">
            <HashRouter>
                <Routes>
                    <Route path="*" element={<App />} />
                </Routes>
            </HashRouter>
        </section>
        <footer class="info">
            <p>Click on input field to write your todo.</p>
            <p>At least two characters are needed to be a valid entry.</p>
            <p>Press 'enter' to add the todo.</p>
            <p>Double-click to edit a todo</p>
        </footer>
    </div>,
    document.getElementById("gen-10-0")
);
