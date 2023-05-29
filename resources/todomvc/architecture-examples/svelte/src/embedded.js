import App from "./App.svelte";
import "../../../big-dom-generator/dist/app.css";
import "../../../big-dom-generator/generated.css";
import "../../../big-dom-generator/public/layout.css";

const app = new App({
    target: document.querySelector(".todo-area"),
});

console.log("svelte app created");

export default app;
