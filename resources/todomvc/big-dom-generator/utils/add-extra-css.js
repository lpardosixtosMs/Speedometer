const additionalStyleSheet = new CSSStyleSheet();
additionalStyleSheet.replaceSync(`:host-context(.show-priority) {
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

:host([data-priority="0"]) {
    --complex-border-bottom-color-completed: var(--complex-border-bottom-color-0, var(--complex-border-bottom-color-default));
    --complex-border-bottom-color-not-completed: var(--complex-border-bottom-color-1, var(--complex-border-bottom-color-default));

    --complex-background-color-completed: var(--complex-background-color-4, var(--complex-background-color-default));
    --complex-background-color-not-completed: var(--complex-background-color-8, var(--complex-background-color-default));
    
    --complex-color-completed: var(--complex-color-1, var(--complex-color-default));
    --complex-color-not-completed: var(--complex-color-0, var(--complex-color-default));

    --complex-box-shadow: var(--complex-box-shadow-0, var(--complex-box-shadow-default));
}

:host([data-priority="1"]) {
    --complex-border-bottom-color-completed: var(--complex-border-bottom-color-0, var(--complex-border-bottom-color-default));
    --complex-border-bottom-color-not-completed: var(--complex-border-bottom-color-1, var(--complex-border-bottom-color-default));

    --complex-background-color-completed: var(--complex-background-color-3, var(--complex-background-color-default));
    --complex-background-color-not-completed: var(--complex-background-color-7, var(--complex-background-color-default));

    --complex-color-completed: var(--complex-color-1, var(--complex-color-default));
    --complex-color-not-completed: var(--complex-color-0, var(--complex-color-default));

    --complex-box-shadow: var(--complex-box-shadow-0, var(--complex-box-shadow-default));
}

:host([data-priority="2"]) {
    --complex-border-bottom-color-completed: var(--complex-border-bottom-color-0, var(--complex-border-bottom-color-default));
    --complex-border-bottom-color-not-completed: var(--complex-border-bottom-color-1, var(--complex-border-bottom-color-default));

    --complex-background-color-completed: var(--complex-background-color-2, var(--complex-background-color-default));
    --complex-background-color-not-completed: var(--complex-background-color-6, var(--complex-background-color-default));

    --complex-color-completed: var(--complex-color-1, var(--complex-color-default));
    --complex-color-not-completed: var(--complex-color-0, var(--complex-color-default));

    --complex-box-shadow: var(--complex-box-shadow-0, var(--complex-box-shadow-default));
}

:host([data-priority="3"]) {
    --complex-border-bottom-color-completed: var(--complex-border-bottom-color-0, var(--complex-border-bottom-color-default));
    --complex-border-bottom-color-not-completed: var(--complex-border-bottom-color-1, var(--complex-border-bottom-color-default));

    --complex-background-color-completed: var(--complex-background-color-1, var(--complex-background-color-default));
    --complex-background-color-not-completed: var(--complex-background-color-5, var(--complex-background-color-default));

    --complex-color-completed: var(--complex-color-1, var(--complex-color-default));
    --complex-color-not-completed: var(--complex-color-0, var(--complex-color-default));

    --complex-box-shadow: var(--complex-box-shadow-0, var(--complex-box-shadow-default));
}



li:not(.completed) {
    border-bottom-color: var(--complex-border-bottom-color-not-completed);
    background-color: var(--complex-background-color-not-completed);
}

li.completed {
    background-color: var(--complex-background-color-completed);
    border-bottom-color: var(--complex-border-bottom-color-completed);
}

li:not(.completed) > div > label {
    color: var(--complex-color-not-completed);
}

li.completed > div > label {
    color: var(--complex-color-completed);
}

li.completed > div > :focus,
li.completed > div > .toggle:focus + label {
    box-shadow: var(--complex-box-shadow);}`);

window.extraCssToAdopt = additionalStyleSheet;
