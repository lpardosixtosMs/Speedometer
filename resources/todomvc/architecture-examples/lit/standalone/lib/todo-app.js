import { __decorate } from "tslib";
import { LitElement, html, css } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { customElement } from "lit/decorators/custom-element.js";
import { state } from "lit/decorators/state.js";
import { todoStyles } from "./todo.css.js";
import { Todos } from "./todos.js";
import "./todo-list.js";
import "./todo-form.js";
import "./todo-footer.js";
import { AddTodoEvent, DeleteTodoEvent, ToggleAllTodoEvent, EditTodoEvent, ClearCompletedEvent } from "./events.js";
import { updateOnEvent } from "./utils.js";
export let TodoApp = class TodoApp extends LitElement {
    static { this.styles = [
        todoStyles,
        css `
            :host {
                display: block;
                background: #fff;
                margin: 130px 0 40px 0;
                position: relative;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
            }
            h1 {
                position: absolute;
                top: -140px;
                width: 100%;
                font-size: 80px;
                font-weight: 200;
                text-align: center;
                color: #b83f45;
                -webkit-text-rendering: optimizeLegibility;
                -moz-text-rendering: optimizeLegibility;
                text-rendering: optimizeLegibility;
            }
            main {
                position: relative;
                z-index: 2;
                border-top: 1px solid #e6e6e6;
            }
            .hidden {
                display: none;
            }
            :focus {
                box-shadow: none !important;
            }
        `,
    ]; }
    constructor() {
        super();
        this.todoList = new Todos();
        this.#onAddTodo = (e) => {
            this.todoList.add(e.text);
        };
        this.#onDeleteTodo = (e) => {
            this.todoList.delete(e.id);
        };
        this.#onEditTodo = (e) => {
            this.todoList.update(e.edit);
        };
        this.#onToggleAll = (_e) => {
            this.todoList.toggleAll();
        };
        this.#onClearCompleted = (_e) => {
            this.todoList.clearCompleted();
        };
        // event handlers for the app
        this.addEventListener(AddTodoEvent.eventName, this.#onAddTodo);
        this.addEventListener(DeleteTodoEvent.eventName, this.#onDeleteTodo);
        this.addEventListener(EditTodoEvent.eventName, this.#onEditTodo);
        this.addEventListener(ToggleAllTodoEvent.eventName, this.#onToggleAll);
        this.addEventListener(ClearCompletedEvent.eventName, this.#onClearCompleted);
    }
    connectedCallback() {
        super.connectedCallback();
        this.todoList.connect();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.todoList.disconnect();
    }
    render() {
        return html `<section>
            <header class="header">
                <h1>todos</h1>
                <todo-form .todoList=${this.todoList}></todo-form>
            </header>
            <main class="main">
                <todo-list .todoList=${this.todoList}></todo-list>
            </main>
            <todo-footer
                class="${classMap({
            hidden: this.todoList.all.length === 0,
        })}"
                .todoList=${this.todoList}
            ></todo-footer>
        </section>`;
    }
    #onAddTodo;
    #onDeleteTodo;
    #onEditTodo;
    #onToggleAll;
    #onClearCompleted;
};
__decorate([
    updateOnEvent("change"),
    state()
], TodoApp.prototype, "todoList", void 0);
TodoApp = __decorate([
    customElement("todo-app")
], TodoApp);
//# sourceMappingURL=todo-app.js.map