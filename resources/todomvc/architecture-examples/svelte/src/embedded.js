import App from "./App.svelte";
import "../../../big-dom-generator/dist/app.css";
import "../../../big-dom-generator/public/layout.css";
import "../../../big-dom-generator/generated.css";

const app = new App({
    target: document.querySelector(".todoapp"),
});

export default app;
