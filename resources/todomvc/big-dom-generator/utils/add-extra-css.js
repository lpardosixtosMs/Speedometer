const additionalStyleSheets = [];

additionalStyleSheets[0] = new CSSStyleSheet();
additionalStyleSheets[0].replaceSync(`li:not(.completed):not([data-priority="4"]) {
    border-bottom-color: var(--complex-border-bottom-color-1);
}

li.completed:not([data-priority="4"]) {
    border-bottom-color: var(--complex-border-bottom-color-0);
}

li:not(.completed):not([data-priority="4"]) > div > label {
    color: var(--complex-color-0, var(--complex-color-default));
}

li.completed:not([data-priority="4"]) > div > label {
    color: var(--complex-color-1, var(--complex-color-default));
}

li.completed > div > :focus,
li.completed > div > .toggle:focus + label {
    box-shadow: var(--complex-box-shadow-0, var(--complex-box-shadow-default));}`);

additionalStyleSheets[1] = new CSSStyleSheet();
additionalStyleSheets[1].replaceSync(`li.completed {
    background-color: var(--complex-background-color-1, var(--complex-background-color-default));
}

li:not(.completed):not([data-priority="4"]) {
    border-bottom-color: var(--complex-border-bottom-color-1);
}

li.completed:not([data-priority="4"]) {
    border-bottom-color: var(--complex-border-bottom-color-0);
}

li:not(.completed):not([data-priority="4"]) > div > label {
    color: var(--complex-color-0, var(--complex-color-default));
}

li.completed:not([data-priority="4"]) > div > label {
    color: var(--complex-color-1, var(--complex-color-default));
}

li.completed > div > :focus,
li.completed > div > .toggle:focus + label {
    box-shadow: var(--complex-box-shadow-0, var(--complex-box-shadow-default));
}
    
li:not(.completed) {
    background-color: var(--complex-background-color-5, var(--complex-background-color-default));}`);

additionalStyleSheets[2] = new CSSStyleSheet();
additionalStyleSheets[2].replaceSync(`li.completed {
    background-color: var(--complex-background-color-2, var(--complex-background-color-default));

}

li:not(.completed):not([data-priority="4"]) {
    border-bottom-color: var(--complex-border-bottom-color-1);
}

li.completed:not([data-priority="4"]) {
    border-bottom-color: var(--complex-border-bottom-color-0);
}

li:not(.completed):not([data-priority="4"]) > div > label {
    color: var(--complex-color-0, var(--complex-color-default));
}

li.completed:not([data-priority="4"]) > div > label {
    color: var(--complex-color-1, var(--complex-color-default));
}

li.completed > div > :focus,
li.completed > div > .toggle:focus + label {
    box-shadow: var(--complex-box-shadow-0, var(--complex-box-shadow-default));
}
        
li:not(.completed) {
    background-color: var(--complex-background-color-6, var(--complex-background-color-default));}`);

additionalStyleSheets[3] = new CSSStyleSheet();
additionalStyleSheets[3].replaceSync(`li.completed {
    background-color: var(--complex-background-color-3, var(--complex-background-color-default));
}

li:not(.completed):not([data-priority="4"]) {
    border-bottom-color: var(--complex-border-bottom-color-1);
}

li.completed:not([data-priority="4"]) {
    border-bottom-color: var(--complex-border-bottom-color-0);
}

li:not(.completed):not([data-priority="4"]) > div > label {
    color: var(--complex-color-0, var(--complex-color-default));
}

li.completed:not([data-priority="4"]) > div > label {
    color: var(--complex-color-1, var(--complex-color-default));
}

li.completed > div > :focus,
li.completed > div > .toggle:focus + label {
    box-shadow: var(--complex-box-shadow-0, var(--complex-box-shadow-default));
}
            
li:not(.completed) {
    background-color: var(--complex-background-color-7, var(--complex-background-color-default));}`);

window.extraCssToAdopt = additionalStyleSheets;
