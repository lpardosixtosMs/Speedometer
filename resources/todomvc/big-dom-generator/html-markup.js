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

export const JS_WEB_COMPONENTS_TODO_MVC_HTML_MARKUP = `
<div class="main-ui">
    <div class="show-more"></div>
    <div class="ribbon"></div>
    <div class="top-bar"></div>
    <div class="tree-area"></div>
    <div class="todo-area">
        <header class="header"></header>
        <todo-app dir="ltr">
            <section class="app">
                <todo-topbar dir="ltr" total-items="1" active-items="1" completed-items="0"></todo-topbar>
                <main class="main">
                    <todo-list dir="ltr" total-items="1">
                        <ul class="todo-list" style="display: block;"></ul>
                        <todo-list dir="ltr">
                            <ul class="todo-list" style="display: block;"></ul>
                        </todo-list>
                    </todo-list>
                </main>
            </section>
        </todo-app>
    </div>
</div>
`;
