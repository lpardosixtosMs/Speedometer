const additionalStyleSheet = new CSSStyleSheet();
const PRIORITY_LEVELS = 4;

for (let i = 0; i < PRIORITY_LEVELS; i++) {
    const selector = `:host([data-priority="${i}"])`;

    additionalStyleSheet.insertRule(`
        ${selector} {
            --complex-border-bottom-color-completed: var(--complex-border-bottom-color-0, var(--complex-border-bottom-color-default));
            --complex-border-bottom-color-not-completed: var(--complex-border-bottom-color-1, var(--complex-border-bottom-color-default));
            --complex-background-color-completed: var(--complex-background-color-${4 - i}, var(--complex-background-color-default));
            --complex-background-color-not-completed: var(--complex-background-color-${8 - i}, var(--complex-background-color-default));
            --complex-color-completed: var(--complex-color-1, var(--complex-color-default));
            --complex-color-not-completed: var(--complex-color-0, var(--complex-color-default));
            --complex-box-shadow: var(--complex-box-shadow-0, var(--complex-box-shadow-default));
        }
    `);
}

const selectors = ["li.completed", "li:not(.completed)"];

for (const selector of selectors) {
    additionalStyleSheet.insertRule(`
        ${selector} {
            border-bottom-color: var(--complex-border-bottom-color-${selector === "li.completed" ? "completed" : "not-completed"});
            background-color: var(--complex-background-color-${selector === "li.completed" ? "completed" : "not-completed"});
        }
    `);

    additionalStyleSheet.insertRule(`
        ${selector} > div > label {
            color: var(--complex-color-${selector === "li.completed" ? "completed" : "not-completed"});
        }
    `);
}

additionalStyleSheet.insertRule(`
    ${selectors[0]} > div > :focus,
    ${selectors[0]} > div > .toggle:focus + label {
        box-shadow: var(--complex-box-shadow);
    }
`);

window.extraCssToAdopt = additionalStyleSheet;
