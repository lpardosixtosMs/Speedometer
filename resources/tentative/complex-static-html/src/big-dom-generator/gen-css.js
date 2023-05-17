import { DEFAULT_SEED_FOR_RANDOM_NUMBER_GENERATOR, MAX_SELECTOR_LENGTH_TO_GENERATE } from "./params.js";
import { LCG } from "random-seedable";
import { JSDOM } from "jsdom";

const random = new LCG(DEFAULT_SEED_FOR_RANDOM_NUMBER_GENERATOR);
const NUM_TODO_ITEMS = 100;

const html = `
    <div class="main-ui">
        <div class="show-more"/>
        <div class="top-bar"/>
        <div class="ribbon"/>
        <div class="tree-area"/>
        <div class="todo-area"/>
        <div class="todoholder">
            <section class="todoapp">
                <header class="header" data-testid="header">
                    <h1>todos</h1>
                    <div class="input-container">
                    <input class="new-todo" id="todo-input" type="text" data-testid="text-input" placeholder="What needs to be done?" value="">
                    <label class="visually-hidden" for="todo-input">New Todo Input</label>
                    </div>
                </header>
                <main class="main" data-testid="main">
                    <div class="toggle-all-container">
                    <input class="toggle-all" type="checkbox" data-testid="toggle-all">
                    <label class="toggle-all-label" for="toggle-all">Toggle All Input</label>
                    </div>
                    <ul class="todo-list" data-testid="todo-list"></ul/>
                </main>
                <footer class="footer" data-testid="footer">
                    <span class="todo-count">0 items left!</span>
                    <ul class="filters" data-testid="footer-navigation">
                    <li><a class="selected" href="#/">All</a></li>
                    <li><a class="" href="#/active">Active</a></li>
                    <li><a class="" href="#/completed">Completed</a></li>
                    </ul>
                    <button class="clear-completed">Clear completed</button>
                </footer>
            </section>
        <footer class="info">
          <p>Click on input field to write your todo.</p>
          <p>At least two characters are needed to be a valid entry.</p>
          <p>Press 'enter' to add the todo.</p>
          <p>Double-click to edit a todo</p>
        </footer>
      </div>
    </div>`;

const dom = new JSDOM(html);
const { document } = dom.window;
const todoList = document.querySelector(".todo-list");

const addTodoItems = (NUM_TODO_ITEMS) => {
    for (let i = 0; i < NUM_TODO_ITEMS; i++) {
        const li = document.createElement("li");
        li.className = `li-${i}-0 targeted`;
        li.setAttribute("data-testid", "todo-item");

        const div = document.createElement("div");
        div.className = `view-${i} targeted`;

        const input = document.createElement("input");
        input.className = "toggle";
        input.setAttribute("type", "checkbox");
        input.setAttribute("data-testid", "todo-item-toggle");

        const label = document.createElement("label");
        label.className = "view-label";
        label.innerHTML = "wasd";

        const button = document.createElement("button");
        button.className = "destroy";
        button.setAttribute("data-testid", "todo-item-button");

        div.appendChild(input);
        div.appendChild(label);
        div.appendChild(button);
        li.appendChild(div);
        todoList.appendChild(li);
    }
};

const getClassname = (element) => {
    if (!element) {
        return "";
    }
    const classList = Array.from(element.classList);
    if (classList.length === 1) {
        return `.${classList[0]}`;
    } else if (classList.length > 1) {
        return `.${random.choice(classList)}`;
    } else {
        return "";
    }
};

function getElementType(element) {
    return element.nodeName.toLowerCase();
}

const getElementAtDepth = (combinator, element, currentDepth, depth) => {
    let currentElement = element;
    while (currentDepth > depth) {
        currentElement = currentElement.parentElement;
        currentDepth--;
    }
    return getRandomElement(combinator, currentElement);
};

const getRandomSiblingElementBefore = (element) => {
    const parent = element.parentElement;
    const children = Array.from(parent.children);
    const currentIndex = children.indexOf(element);
    const validChildren = children.slice(0, currentIndex);
    return random.choice(validChildren);
};

const getRandomElement = (combinator, element) => {
    if (combinator === " > ") {
        return element;
    } else if (combinator === " + ") {
        return element.previousElementSibling;
    } else if (combinator === " ~ ") {
        return getRandomSiblingElementBefore(element);
    }
    return element;
};

const getNextDepth = (combinator, depth) => {
    switch (combinator) {
        case " ":
            return random.randRange(0, depth);
        case " > ":
            return depth - 1;
        case " + ":
        case " ~ ":
            return depth;
        default:
            throw new Error(`Invalid combinator: ${combinator}`);
    }
};

// Returns a random combinator chosen so that the generated selector is valid.
const chooseCombinator = (depth, index) => {
    const selectors = [" ", " > "];
    if (index > 0 && depth !== 7) {
        selectors.push(" + ");
        selectors.push(" ~ ");
    }
    return random.choice(selectors);
};

const randomWeighted = (options, probs) => {
    const randNum = random.float();
    let accumProb = 0;
    for (let i = 0; i < probs.length; i++) {
        accumProb += probs[i];
        // prettier-ignore
        if (randNum <= accumProb)
            return options[i];
    }
    return options[options.length - 1];
};

// .todo-area > .todoholder > * > .main .view-4 ~ .toggle
const buildMatchingSelector = (element, depth, oldCombinator, selLen, maxLen) => {
    // prettier-ignore
    if (selLen >= maxLen) 
        return "";

    const getSelector = randomWeighted([getClassname, getElementType, () => "*"], [0.6, 0.3, 0.1]);
    const selector = getSelector(element);
    // prettier-ignore
    if (!depth) {
        return `${selector}${oldCombinator}`;
    }

    const children = Array.from(element.parentElement.children);
    const index = children.indexOf(element);
    const combinator = chooseCombinator(depth, index);

    const nextDepth = getNextDepth(combinator, depth);
    const nextElement = getElementAtDepth(combinator, element, depth, nextDepth);
    return buildMatchingSelector(nextElement, nextDepth, combinator, selLen + 1, maxLen) + selector + oldCombinator;
};

const buildNonMatchingSelector = (element, depth, oldCombinator, selLen, badSelector) => {
    // prettier-ignore
    if (!depth)
        return `.just-span${ oldCombinator}`;

    const getSelector = randomWeighted([getClassname, getElementType, () => "*"], [0.6, 0.3, 0.1]);
    const selector = getSelector(element);
    if (selLen === badSelector) {
        // pick a random classname from the children of the element
        const wrongSelector = getClassname(random.choice(Array.from(element.children)));
        return selector + wrongSelector + oldCombinator;
    }

    const children = Array.from(element.parentElement.children);
    const index = children.indexOf(element);

    // Otherwise, recurse.
    const combinator = chooseCombinator(depth, index);
    const nextDepth = getNextDepth(combinator, depth);
    const nextElement = getElementAtDepth(combinator, element, depth, nextDepth);
    return buildNonMatchingSelector(nextElement, nextDepth, combinator, selLen + 1, badSelector) + selector + oldCombinator;
};

const getRandomPseudoClass = (element) => {
    if (element.tagName === "INPUT" || element.tagName === "BUTTON") {
        return random.choice(cssPseudoClasses);
    }
    return "";
};

const getInitialDepth = (element) => {
    if (element.tagName === "INPUT" || element.tagName === "BUTTON") {
        return 7;
    } else if (element.tagName === "DIV") {
        return 6;
    }
    return 5;
};

const cssProperties = ["accent-color", "border-bottom-color", "border-color", "border-left-color", "border-right-color", "border-top-color", "column-rule-color", "outline-color", "text-decoration-color"];
const cssPseudoClasses = [":hover", ":focus", ":active"];

export const genCss = () => {
    const matchingSelectors = [];
    const nonMatchingSelectors = [];
    addTodoItems(NUM_TODO_ITEMS);
    const elements = document.querySelectorAll(".main li");
    elements.forEach((element) => {
        const chooseFrom = [element, element.firstChild, element.firstChild.firstChild, element.firstChild.lastChild];
        // Add `.targeted` to the matching selectors to match only the todoMVC items.
        matchingSelectors.push(`${buildMatchingSelector(chooseFrom[0], getInitialDepth(chooseFrom[0]), "", 0, random.randRange(3, MAX_SELECTOR_LENGTH_TO_GENERATE))}${getRandomPseudoClass(chooseFrom[0])}.targeted`);
        matchingSelectors.push(`${buildMatchingSelector(chooseFrom[1], getInitialDepth(chooseFrom[1]), "", 0, random.randRange(3, MAX_SELECTOR_LENGTH_TO_GENERATE))}${getRandomPseudoClass(chooseFrom[1])}.targeted`);
        nonMatchingSelectors.push(`${buildNonMatchingSelector(chooseFrom[2], getInitialDepth(chooseFrom[2]), "", 0, random.randRange(3, MAX_SELECTOR_LENGTH_TO_GENERATE))}${getRandomPseudoClass(chooseFrom[2])}`);
        nonMatchingSelectors.push(`${buildNonMatchingSelector(chooseFrom[3], getInitialDepth(chooseFrom[3]), "", 0, random.randRange(3, MAX_SELECTOR_LENGTH_TO_GENERATE))}${getRandomPseudoClass(chooseFrom[3])}`);
    });

    const matchingCssRules = [];
    matchingSelectors.forEach((selector, i) => {
        random.shuffle(cssProperties, true);
        matchingCssRules.push(`${selector} {
        ${cssProperties[0]}: rgba(140,0,0,${i / 1000});
        ${cssProperties[1]}: rgba(140,0,0,${i / 1000});
    }`);
    });
    const nonMatchingCssRules = [];
    nonMatchingSelectors.forEach((selector, i) => {
        random.shuffle(cssProperties, true);
        nonMatchingCssRules.push(`${selector} {
        ${cssProperties[0]}: rgba(140,0,0,${i / 1000});
        ${cssProperties[1]}: rgba(140,0,0,${i / 1000});
     }`);
    });
    return { matchingCss: matchingCssRules.join("\n"), nonMatchingCss: nonMatchingCssRules.join("\n") };
};
