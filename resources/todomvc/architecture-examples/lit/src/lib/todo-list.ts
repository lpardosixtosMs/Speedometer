import { LitElement, html, css, nothing } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { property } from "lit/decorators/property.js";
import { repeat } from "lit/directives/repeat.js";

import { todoStyles } from "./todo.css.js";
import { type Todos } from "./todos.js";

import "./todo-item.js";
import { ToggleAllTodoEvent } from "./events.js";
import { updateOnEvent } from "./utils.js";

@customElement("todo-list")
export class TodoList extends LitElement {
    static override styles = [
        todoStyles,
        css`
            :host {
                display: block;
            }
            :host(.show-priority) {
                --complex-border-bottom-color-default: #ededed;
                --complex-border-bottom-color-0: #d7ffd7;
                --complex-border-bottom-color-1: #ffd7d7;

                --complex-background-color-default: #fff;
                --complex-background-color-0: #ccfdcc;
                --complex-background-color-1: #f1faf0;
                --complex-background-color-2: #eafbea;
                --complex-background-color-3: #ddf8dd;
                --complex-background-color-4: #ccfdcc;
                --complex-background-color-5: #faf0f0;
                --complex-background-color-6: #fbeaea;
                --complex-background-color-7: #f8dddd;
                --complex-background-color-8: #fdcccc;

                --complex-color-default: #484848;
                --complex-color-0: #250000;
                --complex-color-1: #87a790;

                --complex-box-shadow-default: none;
                --complex-box-shadow-0: 0 0 2px 2px #7dcf89;
            }
            :focus {
                box-shadow: none !important;
            }
            .todo-list {
                margin: 0;
                padding: 0;
                list-style: none;
            }
            .toggle-all {
                width: 1px;
                height: 1px;
                border: none; /* Mobile Safari */
                opacity: 0;
                position: absolute;
                right: 100%;
                bottom: 100%;
            }

            .toggle-all + label {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 45px;
                height: 65px;
                font-size: 0;
                position: absolute;
                top: -65px;
                left: -0;
            }

            .toggle-all + label:before {
                content: "❯";
                display: inline-block;
                font-size: 22px;
                color: #949494;
                padding: 10px 27px 10px 27px;
                transform: rotate(90deg);
            }

            .toggle-all:checked + label:before {
                color: #484848;
            }

            todo-item {
                border-bottom: 1px solid #ededed;
            }
            todo-item:last-child {
                border-bottom: none;
            }
        `,
    ];

    @updateOnEvent("change")
    @property({ attribute: false })
        todoList?: Todos;

    override render() {
        return html`
            ${(this.todoList?.all.length ?? 0) > 0
        ? html`
                      <input @change=${this.#onToggleAllChange} id="toggle-all" type="checkbox" class="toggle-all" .checked=${this.todoList?.allCompleted ?? false} />
                      <label for="toggle-all"> Mark all as complete </label>
                  `
        : nothing}
            <ul class="todo-list show-priority">
                ${repeat(
        this.todoList?.filtered() ?? [],
        (todo) => todo.id,
        (todo, index) => html`<todo-item .todoId=${todo.id} .text=${todo.text} .completed=${todo.completed} .index=${index}></todo-item>`
    )}
            </ul>
        `;
    }

    #onToggleAllChange() {
        this.dispatchEvent(new ToggleAllTodoEvent());
    }
}

declare global {
    // eslint-disable-next-line no-unused-vars
    interface HTMLElementTagNameMap {
        "todo-list": TodoList;
    }
}
