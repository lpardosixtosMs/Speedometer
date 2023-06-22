import { h, createElement, render } from "preact";
import App from "../../shared/src/app/app";
import "big-dom-generator/dist/app.css";
import "todomvc-app-css/index.css";
import "../../shared/src/styles.css";
import "big-dom-generator/public/layout.css";
import "big-dom-generator/matchingCss.css";
import "big-dom-generator/nonMatchingCss.css";

render(<App />, document.querySelector(".todoapp"));
