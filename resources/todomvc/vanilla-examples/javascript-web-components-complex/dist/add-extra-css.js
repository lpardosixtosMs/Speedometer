const additionalStyleSheet = new CSSStyleSheet();
// for loop this.
additionalStyleSheet.replaceSync(`:host([data-priority="0"]) {
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
