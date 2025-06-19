const template = document.createElement("template");

template.id = "todo-list-template";
template.innerHTML = `
    <ul class="todo-list display-none"></ul>
`;

export default template;
