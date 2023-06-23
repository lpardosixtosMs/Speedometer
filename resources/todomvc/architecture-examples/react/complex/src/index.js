import React from "react";
import { render } from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";

import { App } from "../../shared/todo/app";

import "todomvc-app-css/index.css";
import "big-dom-generator/public/layout.css";
import "big-dom-generator/matchingCss.css";
import "big-dom-generator/nonMatchingCss.css";
import "big-dom-generator/dist/app.css";

render(
    <HashRouter>
        <Routes>
            <Route path="*" element={<App />} />
        </Routes>
    </HashRouter>,
    document.getElementById("root")
);
