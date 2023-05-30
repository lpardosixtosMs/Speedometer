import App from "./App.svelte";
import "../../../big-dom-generator/generated.css";
import "../../../big-dom-generator/public/layout.css";
import "../../../big-dom-generator/dist/app.css";

const todoHolder = document.createElement("div");
todoHolder.classList.add("todoholder");

const section = document.createElement("section");
section.classList.add("todoapp");

const footer = document.createElement("footer");
footer.classList.add("info");
footer.innerHTML = `
    <p>Click on input field to write your todo.</p>
    <p>At least two characters are needed to be a valid entry.</p>
    <p>Press 'enter' to add the todo.</p>
    <p>Double-click to edit a todo</p>
`;

const app = new App({
    target: section,
});

todoHolder.appendChild(section);
todoHolder.appendChild(footer);

document.querySelector(".todo-area").appendChild(todoHolder);

export default app;
