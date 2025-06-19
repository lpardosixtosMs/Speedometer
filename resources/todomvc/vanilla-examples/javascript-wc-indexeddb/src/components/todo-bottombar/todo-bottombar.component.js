import template from "./todo-bottombar.template.js";

import globalStyles from "../../../node_modules/todomvc-css/dist/global.constructable.js";
// import bottombarStyles from "../../../node_modules/todomvc-css/dist/bottombar.constructable.js";

const bottombarStyles = new CSSStyleSheet();
bottombarStyles.replaceSync(`:host {
    display: block;
    box-shadow: none !important;
}

.bottombar {
    padding: 10px 0;
    height: 41px;
    text-align: center;
    font-size: 15px;
    border-top: 1px solid #e6e6e6;
    display: flex;
    flex-direction: row;
}

.bottombar.hidden-footer {
    display: none;
}

.bottombar::before {
    content: "";
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    pointer-events: none;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

.todo-count {
    font-weight: 300;
}

.filter-item {
    display: inline-block;
}

.filter-link {
    color: inherit;
    margin: 3px;
    padding: 0 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
    cursor: pointer;
    display: block;
    height: 26px;
    line-height: 26px;
}

.filter-link:hover {
    border-color: #db7676;
}

.filter-link.selected {
    border-color: #ce4646;
}

.clear-completed-button,
.clear-completed-button:active {
    text-decoration: none;
    cursor: pointer;
    padding: 3px;
    height: 32px;
    line-height: 26px;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
}

.clear-completed-button:hover {
    text-decoration: underline;
}

/* rtl support */
html[dir="rtl"] .todo-status,
:host([dir="rtl"]) .todo-status {
    right: 12px;
    left: unset;
}

html[dir="rtl"] .clear-completed-button,
:host([dir="rtl"]) .clear-completed-button {
    left: 12px;
    right: unset;
}

@media (max-width: 430px) {
    .bottombar {
        height: 120px;
    }

    .todo-status {
        display: block;
        text-align: center;
        position: relative;
        left: unset;
        right: unset;
        top: unset;
        transform: unset;
    }

    .filter-list {
        display: block;
        position: relative;
        left: unset;
        right: unset;
        top: unset;
        transform: unset;
    }

    .clear-completed-button,
    .clear-completed-button:active {
        display: block;
        margin: 0 auto;
        position: relative;
        left: unset;
        right: unset;
        top: unset;
        transform: unset;
    }

        html[dir="rtl"] .todo-status,
    :host([dir="rtl"]) .todo-status {
        right: unset;
        left: unset;
    }

    html[dir="rtl"] .clear-completed-button,
    :host([dir="rtl"]) .clear-completed-button {
        left: unset;
        right: unset;
    }
`);

class TodoBottombar extends HTMLElement {
    static get observedAttributes() {
        return ["total-items", "active-items"];
    }

    constructor() {
        super();

        const node = document.importNode(template.content, true);
        this.element = node.querySelector(".bottombar");
        this.clearCompletedButton = node.querySelector(".clear-completed-button");
        this.nextPageButton = node.getElementById("next-page-button");
        this.todoStatus = node.querySelector(".todo-status");
        this.filterLinks = node.querySelectorAll(".filter-link");

        this.shadow = this.attachShadow({ mode: "open" });
        this.htmlDirection = document.dir || "ltr";
        this.setAttribute("dir", this.htmlDirection);
        this.shadow.adoptedStyleSheets = [globalStyles, bottombarStyles];
        this.shadow.append(node);

        this.clearCompletedItems = this.clearCompletedItems.bind(this);
        this.moveToNextPage = this.moveToNextPage.bind(this);
    }

    updateDisplay() {
        if (parseInt(this["total-items"]) !== 0) {
            this.element.classList.remove("hidden-footer");
        }
        else {
            this.element.classList.add("hidden-footer");
        }

        this.todoStatus.textContent = `${this["active-items"]} ${this["active-items"] === "1" ? "item" : "items"} left!`;
    }

    updateRoute(route) {
        this.filterLinks.forEach((link) => {
            if (link.dataset.route === route)
                link.classList.add("selected");
            else
                link.classList.remove("selected");
        });
    }

    clearCompletedItems() {
        this.dispatchEvent(new CustomEvent("clear-completed-items"));
    }

    moveToNextPage() {
        this.dispatchEvent(new CustomEvent("move-to-next-page"));
    }

    addListeners() {
        this.clearCompletedButton.addEventListener("click", this.clearCompletedItems);
        this.nextPageButton.addEventListener("click", this.moveToNextPage);
    }

    removeListeners() {
        this.clearCompletedButton.removeEventListener("click", this.clearCompletedItems);
        this.nextPageButton.removeEventListener("click", this.moveToNextPage);
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue)
            return;
        this[property] = newValue;

        if (this.isConnected)
            this.updateDisplay();
    }

    connectedCallback() {
        this.updateDisplay();
        this.addListeners();
    }

    disconnectedCallback() {
        this.removeListeners();
    }
}

customElements.define("todo-bottombar", TodoBottombar);

export default TodoBottombar;
