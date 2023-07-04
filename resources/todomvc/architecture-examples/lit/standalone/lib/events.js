/**
 * An event that represents a request to add a new todo.
 */
export class AddTodoEvent extends Event {
    static { this.eventName = "todo-add"; }
    constructor(text) {
        super(AddTodoEvent.eventName, { bubbles: true, composed: true });
        this.text = text;
    }
}
/**
 * An event that represents a request to delete a todo.
 */
export class DeleteTodoEvent extends Event {
    static { this.eventName = "todo-delete"; }
    constructor(id) {
        super(DeleteTodoEvent.eventName, { bubbles: true, composed: true });
        this.id = id;
    }
}
/**
 * An event that represents a request to toggle the completion state of a todo.
 */
export class EditTodoEvent extends Event {
    static { this.eventName = "todo-edit"; }
    constructor(edit) {
        super(EditTodoEvent.eventName, { bubbles: true, composed: true });
        this.edit = edit;
    }
}
/**
 * An event that represents a request to toggle the completion state of a todo.
 */
export class ToggleAllTodoEvent extends Event {
    static { this.eventName = "todo-toggle-all"; }
    constructor() {
        super(ToggleAllTodoEvent.eventName, { bubbles: true, composed: true });
    }
}
/**
 * An event that represents a request to clear all completed todos.
 */
export class ClearCompletedEvent extends Event {
    static { this.eventName = "clear-completed"; }
    constructor() {
        super(ClearCompletedEvent.eventName, { bubbles: true, composed: true });
    }
}
//# sourceMappingURL=events.js.map