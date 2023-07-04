import { __decorate } from "tslib";
import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { property } from "lit/decorators/property.js";
import { query } from "lit/decorators/query.js";
import { todoStyles } from "./todo.css.js";
import {} from "./todos.js";
import { AddTodoEvent } from "./events.js";
import { updateOnEvent } from "./utils.js";
export let TodoForm = class TodoForm extends LitElement {
    static { this.styles = [
        todoStyles,
        css `
            :host {
                display: block;
            }
            input::-webkit-input-placeholder {
                font-style: italic;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.4);
            }
            input::-moz-placeholder {
                font-style: italic;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.4);
            }
            input::input-placeholder {
                font-style: italic;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.4);
            }
        `,
    ]; }
    render() {
        return html `<input @change=${this.#onChange} @keydown=${this.#onKeydown} class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" />`;
    }
    #onChange() {
        const { value } = this.newTodoInput;
        if (value.length > 0)
            this.dispatchEvent(new AddTodoEvent(value));
        this.newTodoInput.value = "";
    }
    #onKeydown(e) {
        if (e.key === "Enter")
            this.#onChange();
    }
};
__decorate([
    updateOnEvent("change"),
    property({ attribute: false })
], TodoForm.prototype, "todoList", void 0);
__decorate([
    query("input", true)
], TodoForm.prototype, "newTodoInput", void 0);
TodoForm = __decorate([
    customElement("todo-form")
], TodoForm);
//# sourceMappingURL=todo-form.js.map