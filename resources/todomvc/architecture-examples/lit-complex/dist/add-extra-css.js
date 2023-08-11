const additionalStyleSheet = new CSSStyleSheet();
for (let i = 0; i < 4; i++) {
    additionalStyleSheet.insertRule(`:host([data-priority="${i}"]) {
    --complex-border-bottom-color-completed: var(--complex-border-bottom-color-0, var(--complex-border-bottom-color-default));
    --complex-border-bottom-color-not-completed: var(--complex-border-bottom-color-1, var(--complex-border-bottom-color-default));

    --complex-background-color-completed: var(--complex-background-color-${4 - i}, var(--complex-background-color-default));
    --complex-background-color-not-completed: var(--complex-background-color-${8 - i}, var(--complex-background-color-default));

    --complex-color-completed: var(--complex-color-1, var(--complex-color-default));
    --complex-color-not-completed: var(--complex-color-0, var(--complex-color-default));

    --complex-box-shadow: var(--complex-box-shadow-0, var(--complex-box-shadow-default));
}`);
}
additionalStyleSheet.insertRule(`li:not(.completed) {
    border-bottom-color: var(--complex-border-bottom-color-not-completed);
    background-color: var(--complex-background-color-not-completed);
}`);
additionalStyleSheet.insertRule(`li.completed {
    background-color: var(--complex-background-color-completed);
    border-bottom-color: var(--complex-border-bottom-color-completed);
}`);
additionalStyleSheet.insertRule(`li:not(.completed) > div > label {
    color: var(--complex-color-not-completed);
}`);
additionalStyleSheet.insertRule(`li.completed > div > label {
    color: var(--complex-color-completed);
}`);
additionalStyleSheet.insertRule(`li.completed > div > :focus,
li.completed > div > .toggle:focus + label {
    box-shadow: var(--complex-box-shadow);}`);

window.extraCssToAdopt = additionalStyleSheet;
