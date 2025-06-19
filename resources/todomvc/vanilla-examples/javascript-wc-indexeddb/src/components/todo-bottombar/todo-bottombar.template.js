const template = document.createElement("template");

template.id = "todo-bottombar-template";
template.innerHTML = `
    <footer class="bottombar hidden-footer">
        <div class="todo-status"><span class="todo-count">0</span> item left</div>
        <div class="filter-list">
            <div class="filter-item">
                <a id="filter-link-all" class="filter-link selected" href="#/" data-route="all">All</a>
            </div>
            <div class="filter-item">
                <a id="filter-link-active" class="filter-link" href="#/active" data-route="active">Active</a>
            </div>
            <div class="filter-item">
                <a id="filter-link-completed" class="filter-link" href="#/completed" data-route="completed">Completed</a>
            </div>
        </div>
        <button id="clear-completed" class="clear-completed-button">Clear completed</button>
        <button id="next-page-button"> > </button>
    </footer>
`;

export default template;
