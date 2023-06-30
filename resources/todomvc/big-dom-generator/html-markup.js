export const ANGULAR_TODO_MVC_HTML_MARKUP = `
<div class="main-ui" dir="ltr">
    <div class="show-more"></div>
    <div class="ribbon"></div>
    <div class="top-bar"></div>
    <div class="tree-area"></div>
    <div class="todo-area">
        <div class="todoholder">
            <app-root ng-version="14.3.0">
                <section class="todoapp">
                    <app-todo-header></app-todo-header>
                    <app-todo-list>
                        <main class="main">
                            <div class="toggle-all-container">
                                <input type="checkbox" class="toggle-all">
                                <label htmlfor="toggle-all" class="toggle-all-label"> Toggle All Input </label>
                            </div>
                            <ul class="todo-list">
                                <!---->
                            </ul>
                        </main>
                        <!---->
                    </app-todo-list>
                </section>
            </app-root>
        </div>
    </div>
</div>
`;

export const TODO_MVC_HTML_MARKUP = `
<div class="main-ui">
    <div class="show-more"></div>
    <div class="ribbon"></div>
    <div class="top-bar"></div>
    <div class="tree-area"></div>
    <div class="todo-area">
        <div class="todoholder">
            <section class="todoapp">
                <header class="header" data-testid="header"></header>
                <main class="main" data-testid="main">
                    <div class="toggle-all-container">
                        <input class="toggle-all" type="checkbox" data-testid="toggle-all">
                        <label class="toggle-all-label" for="toggle-all">Toggle All Input</label>
                    </div>
                    <ul class="todo-list" data-testid="todo-list"></ul>
                </main>
            </section>
        </div>
    </div>
</div>
`;

export const JAVASCRIPT_WEB_COMPONENTS_TODO_MVC_HTML_MARKUP = `
<todo-app dir="ltr">
    <section class="app">
        <todo-topbar dir="ltr" total-items="1" active-items="1" completed-items="0"></todo-topbar>
        <main class="main">
            <todo-list dir="ltr" total-items="1">
                <ul class="todo-list" style="display: block;">
                    <todo-item id="QkzndkZQwxZ0Wsv-2pARK" title="jghfjhgjkh" dir="ltr" completed="false" style="display: block;">
                        <li class="todo-item" id="todo-item-QkzndkZQwxZ0Wsv-2pARK">
                            <div class="display-todo">
                                <label for="toggle-todo" class="toggle-todo-label visually-hidden">Toggle Todo</label>
                                <input id="toggle-todo" class="toggle-todo-input" type="checkbox">
                                <span class="todo-item-text truncate-singleline" tabindex="0">jghfjhgjkh</span>
                                <button class="remove-todo-button" title="Remove Todo"></button>
                            </div>
                            <div class="edit-todo-container">
                                <label for="edit-todo" class="edit-todo-label visually-hidden">Edit todo</label>
                                <input id="edit-todo" class="edit-todo-input">
                            </div>
                        </li>
                    </todo-item>
                    <todo-item id="dlHKQPU9D3U75iEjcYt7F" title="XCVSFDSA" dir="ltr" completed="false" style="display: block;"></todo-item>
                </ul>
                <todo-list dir="ltr">
                    <ul class="todo-list" style="display: block;"></ul>
                </todo-list>
            </todo-list>
        </main>
        <todo-bottombar dir="ltr" total-items="1" active-items="1"></todo-bottombar>
    </section>
</todo-app>
`;

export const LIT_TODO_MVC_HTML_MARKUP = `
<div class="main-ui">
    <div class="show-more"></div>
    <div class="ribbon"></div>
    <div class="top-bar"></div>
    <div class="tree-area"></div>
    <div class="todo-area">
        <div class="todoholder">
            <todo-app>
                <section>
                    <header class="header"></header>
                    <main class="main">
                        <todo-list>
                            <input id="toggle-all" type="checkbox" class="toggle-all">
                            <label for="toggle-all">Mark all as complete</label>
                            <ul class="todo-list">
                                <li class=" todo ">
                                    <div class="view">
                                        <input class="toggle" type="checkbox"> 
                                        <label><!--?lit$0390463987$-->sasddas</label> 
                                        <button class="destroy"></button>
                                    </div>
                                    <input class="edit" type="text">
                                </li>
                            </ul>
                        </todo-list>
                    </main>
                </section>
            </todo-app>
        </div>
    </div>
</div>
`;
