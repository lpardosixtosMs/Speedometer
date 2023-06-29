import { NUMBER_VARIABLES_PER_CSS_PROPERTY } from "./params.js";

const variableDefinitions = [new Set(), new Set(), new Set()];

const getVariableDefinition = (property, depth, index) => {
    let definition = `--complex-dom-${property}-${depth}-${index}: `;
    if (!depth) {
        definition += `rgba(140,140,140,${index / 1000});`;
        return definition;
    }
    if (index < NUMBER_VARIABLES_PER_CSS_PROPERTY / 2) {
        const fakeIndex = NUMBER_VARIABLES_PER_CSS_PROPERTY + index;
        definition += `var(--complex-dom-${property}-${depth - 1}-${fakeIndex}, var(--complex-dom-${property}-${depth - 1}-${index}));`;
        return definition;
    }
    definition += `var(--complex-dom-${property}-${depth - 1}-${index});`;
    return definition;
};

export const storeVariableDefinitions = (property, depth, index) => {
    while (depth >= 0) {
        variableDefinitions[depth].add(getVariableDefinition(property, depth, index));
        depth--;
    }
};

export const genVariableDefinitions = () => {
    let css = [
        `:root {
        ${[...variableDefinitions[0]].join("\n")}
    }`,
        `.main-ui {
        ${[...variableDefinitions[1]].join("\n")}
    }`,
        `.todo-area {
        ${[...variableDefinitions[2]].join("\n")}
    }`,
    ].join("\n");
    return css;
};
