import { DEFAULT_SEED_FOR_RANDOM_NUMBER_GENERATOR, MAX_SELECTOR_LENGTH_TO_GENERATE, NUM_TODOS_TO_INSERT_IN_HTML, TARGETED_CLASS } from "./params.js";
import { LCG } from "random-seedable";
import { JSDOM } from "jsdom";

const random = new LCG(DEFAULT_SEED_FOR_RANDOM_NUMBER_GENERATOR);

const Combinator = {
    DESCENDANT: " ",
    CHILD: " > ",
    ADJACENT_SIBLING: " + ",
    GENERAL_SIBLING: " ~ ",
};

// The generator assumes the page has the following structure,
// and it needs to be updated if the structure changes.
const ANGULAR_HTML_MARKUP = `
<div class="main-ui" dir="ltr">
    <div class="show-more">
    <div class="top-bar"/>
    <div class="ribbon"/>
    <div class="tree-area"/>
    <div class="todo-area">
      <div class="todoholder" ng-version="14.3.0">
        <section class="todoapp">
            <app-todo-header>
                <header class="header">
                    <h1>todos</h1>
                    <input placeholder="What needs to be done?" autofocus="" class="new-todo ng-valid ng-dirty ng-touched">
                </header>
            </app-todo-header>
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
            <app-todo-footer>
                <footer class="footer">
                    <span class="todo-count"><strong>3</strong> items left</span>
                    <ul class="filters">
                        <li><a routerlink="/" class="selected" href="#/"> All </a></li>
                        <li><a routerlink="/active" href="#/active"> Active </a></li>
                        <li><a routerlink="/completed" href="#/completed"> Completed </a></li>
                    </ul>
                    <!---->
                </footer>
                <!---->
            </app-todo-footer>
        </section>
        </div>
        <footer class="info">
            <p>Click on input field to write your todo.</p>
            <p>At least two characters are needed to be a valid entry.</p>
            <p>Press 'enter' to add the todo.</p>
            <p>Double-click to edit a todo</p>
        </footer>
    </div>
</div>
`;
// The generator assumes the page has the following structure,
// and it needs to be updated if the structure changes.
const TODO_MVC_HTML_MARKUP = `
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
    </div>
</div>
`;

const getHtmlMarkup = (angular) => {
    return angular ? ANGULAR_HTML_MARKUP : TODO_MVC_HTML_MARKUP;
};

/** <app-todo-item>
* <li class="targeted li-101">
*              <div class="targeted view-101">
*                 <input type="checkbox" class="toggle">
*                 <label>sdfasdfasdfsdfa</label>
*                 <button class="destroy"></button>
*              </div>
*              <!---->
*           </li>
*  </app-todo-item>
*/
const addTodoItems = (document, NUM_TODOS_TO_INSERT_IN_HTML, angular) => {
    const todoList = document.querySelector(".todo-list");

    for (let i = 0; i < NUM_TODOS_TO_INSERT_IN_HTML; i++) {
        const li = document.createElement("li");
        li.className = `li-${i}`;
        li.setAttribute("data-testid", "todo-item");

        const div = document.createElement("div");
        div.className = `view-${i}`;

        li.appendChild(div);

        if (angular) {
            const appTodoItem = document.createElement("app-todo-item");

            appTodoItem.appendChild(li);
            todoList.appendChild(appTodoItem);
        } else {
            todoList.appendChild(li);
        }
    }
};

const getClassname = (element) => {
    return element && element.classList.length > 0 ? `.${element.classList[0]}` : element.nodeName.toLowerCase();
};

const getElementType = (element) => {
    return element.nodeName.toLowerCase();
};

const getElementAtDepth = (combinator, element, currentDepth, depth) => {
    let currentElement = element;
    while (currentDepth > depth) {
        currentElement = currentElement.parentElement;
        currentDepth--;
    }
    return getRandomElement(combinator, currentElement);
};

const getRandomElement = (combinator, element) => {
    switch (combinator) {
        case Combinator.CHILD:
            return element;
        case Combinator.ADJACENT_SIBLING:
            return element.previousElementSibling;
        case Combinator.GENERAL_SIBLING:
            return getRandomSiblingElementBefore(element);
        default:
            return element;
    }
};

const getRandomSiblingElementBefore = (element) => {
    const parent = element.parentElement;
    const children = Array.from(parent.children);
    const currentIndex = children.indexOf(element);
    const validChildren = children.slice(0, currentIndex);
    return random.choice(validChildren);
};

const getNextDepth = (combinator, depth) => {
    switch (combinator) {
        case Combinator.DESCENDANT:
            return random.randRange(0, depth);
        case Combinator.CHILD:
            return depth - 1;
        case Combinator.ADJACENT_SIBLING:
        case Combinator.GENERAL_SIBLING:
            return depth;
        default:
            throw new Error(`Invalid combinator: ${combinator}`);
    }
};

const chooseCombinator = (depth, index) => {
    const selectors = [Combinator.DESCENDANT, Combinator.CHILD];
    // prettier-ignore
    if (index > 0 && depth !== 7)
        selectors.push(Combinator.ADJACENT_SIBLING, Combinator.GENERAL_SIBLING);

    return random.choice(selectors);
};

// Returns a random option from the given options array, weighted by the corresponding probabilities in the probs array.
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

const buildMatchingSelector = (element, depth, oldCombinator, selLen, maxLen) => {
    // prettier-ignore
    if (selLen >= maxLen)
        return "";

    // Get a random selector for the element.
    const getSelector = randomWeighted([getClassname, getElementType, () => "*"], [0.6, 0.3, 0.1]);
    const selector = getSelector(element);
    // prettier-ignore
    if (!depth)
        return `${selector}${oldCombinator}`;

    const children = Array.from(element.parentElement.children);
    const index = children.indexOf(element);
    const combinator = chooseCombinator(depth, index);

    const nextDepth = getNextDepth(combinator, depth);
    const nextElement = getElementAtDepth(combinator, element, depth, nextDepth);

    // Recurse with the next element and depth, and append the selector and old combinator.
    return buildMatchingSelector(nextElement, nextDepth, combinator, selLen + 1, maxLen) + selector + oldCombinator;
};

const buildNonMatchingSelector = (element, depth, oldCombinator, selLen, badSelector) => {
    // prettier-ignore
    if (!depth)
        return `.just-span${ oldCombinator}`;

    const getSelector = randomWeighted([getClassname, getElementType, () => "*"], [0.6, 0.3, 0.1]);
    const selector = getSelector(element);
    if (selLen === badSelector) {
        const wrongSelector = getClassname(random.choice(Array.from(element.children)));
        return `${selector} ${ wrongSelector}${oldCombinator}`;
    }

    const children = Array.from(element.parentElement.children);
    const index = children.indexOf(element);

    // Otherwise, recurse.
    const combinator = chooseCombinator(depth, index);
    const nextDepth = getNextDepth(combinator, depth);
    const nextElement = getElementAtDepth(combinator, element, depth, nextDepth);

    // Recurse with the next element and depth, and append the selector and old combinator.
    return buildNonMatchingSelector(nextElement, nextDepth, combinator, selLen + 1, badSelector) + selector + oldCombinator;
};

const getInitialDepth = (element) => {
    return element.tagName === "DIV" ? 6 : 5;
};

// Generate CSS rules for the matching and non-matching selectors.
const generateCssRules = (selectors) => {
    return selectors.map((selector, i) => {
        random.shuffle(cssProperties, true);
        return `${selector} {
                    ${cssProperties[0]}: rgba(140,140,140,${i / 1000});
                    ${cssProperties[1]}: rgba(140,140,140,${i / 1000});
                }`;
    });
};

const cssProperties = ["accent-color", "border-bottom-color", "border-color", "border-left-color", "border-right-color", "border-top-color", "column-rule-color", "outline-color", "text-decoration-color"];

export const genCss = (angular = false) => {
    const matchingSelectors = [];
    const nonMatchingSelectors = [];
    const htmlMarkup = getHtmlMarkup(angular);
    const dom = new JSDOM(htmlMarkup);
    const { document } = dom.window;

    addTodoItems(document, NUM_TODOS_TO_INSERT_IN_HTML, angular);
    const elements = document.querySelectorAll(".main li");

    // Generate matching and non-matching selectors for each element.
    elements.forEach((element) => {
        const chooseFrom = [element, element.firstChild];
        random.shuffle(chooseFrom, true);
        // Add `TARGETED_CLASS` to the matching selectors to match only the todoMVC items.
        matchingSelectors.push(`${buildMatchingSelector(chooseFrom[0], getInitialDepth(chooseFrom[0]), "", 0, random.randRange(3, MAX_SELECTOR_LENGTH_TO_GENERATE))}${TARGETED_CLASS}`);
        matchingSelectors.push(`${buildMatchingSelector(chooseFrom[1], getInitialDepth(chooseFrom[1]), "", 0, random.randRange(3, MAX_SELECTOR_LENGTH_TO_GENERATE))}${TARGETED_CLASS}`);
        nonMatchingSelectors.push(`${buildNonMatchingSelector(chooseFrom[0], getInitialDepth(chooseFrom[0]), "", 0, random.randRange(3, MAX_SELECTOR_LENGTH_TO_GENERATE))}`);
        nonMatchingSelectors.push(`${buildNonMatchingSelector(chooseFrom[1], getInitialDepth(chooseFrom[1]), "", 0, random.randRange(3, MAX_SELECTOR_LENGTH_TO_GENERATE))}`);
    });

    const matchingCssRules = generateCssRules(matchingSelectors);
    const nonMatchingCssRules = generateCssRules(nonMatchingSelectors);

    const allCssRules = matchingCssRules.concat(nonMatchingCssRules);
    random.shuffle(allCssRules, true);
    return allCssRules.join("\n");
};
