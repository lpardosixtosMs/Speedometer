import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../../../big-dom-generator/public/layout.css";
import "../../../big-dom-generator/dist/app.css";
import "../../../big-dom-generator/generated.css";

const app = createApp(App);

const todoHolder = document.createElement("div");
todoHolder.className = "todoholder";

app.use(router);

app.mount(todoHolder);

document.querySelector(".todo-area").appendChild(todoHolder);