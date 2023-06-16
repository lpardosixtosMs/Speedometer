import { DEFAULT_SEED_FOR_RANDOM_NUMBER_GENERATOR, MAX_SELECTOR_LENGTH_TO_GENERATE, NUM_TODOS_TO_INSERT_IN_HTML, TARGETED_CLASS } from "./params.js";
import { LCG } from "random-seedable";
import { JSDOM } from "jsdom";
import { ANGULAR_TODO_MVC_HTML_MARKUP, TODO_MVC_HTML_MARKUP } from "./html-markup.js";

const random = new LCG(DEFAULT_SEED_FOR_RANDOM_NUMBER_GENERATOR);

const Combinator = {
    DESCENDANT: " ",
    CHILD: " > ",
    ADJACENT_SIBLING: " + ",
    GENERAL_SIBLING: " ~ ",
};

const getHtmlMarkup = (angular) => {
    return angular ? ANGULAR_TODO_MVC_HTML_MARKUP : TODO_MVC_HTML_MARKUP;
};

/**
 * List item structure for Angular:
 * <app-todo-item>
 *     <li class="targeted li-101">
 *         <div class="targeted view-101"/>
 *     </li>
 * </app-todo-item>
 */
const addTodoItems = (document, NUM_TODOS_TO_INSERT_IN_HTML, angular) => {
    const todoList = document.querySelector(".todo-list");

    for (let i = 0; i < NUM_TODOS_TO_INSERT_IN_HTML; i++) {
        const li = document.createElement("li");
        li.className = `li-${i}`;

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
        return `${selector} ${wrongSelector}${oldCombinator}`;
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

const ANGULAR_VIEW_DEPTH = 8;
const ANGULAR_LI_DEPTH = 7;
const NON_ANGULAR_VIEW_DEPTH = 6;
const NON_ANGULAR_LI_DEPTH = 5;

const getInitialDepth = (element, angular) => {
    if (angular)
        return element.tagName === "DIV" ? ANGULAR_VIEW_DEPTH : ANGULAR_LI_DEPTH;

    return element.tagName === "DIV" ? NON_ANGULAR_VIEW_DEPTH : NON_ANGULAR_LI_DEPTH;
};

// Take selectors and generate CSS rules for the matching and non-matching selectors.
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

/**
 * Generates CSS for the matching and non-matching selectors.
 * @param {string} angular whether to generate angular or react markup
 * @returns {string} The css rules for the matching and non-matching selectors.
 */
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
        // Add `TARGETED_CLASS` to the matching selectors to match only the todoMVC items.
        matchingSelectors.push(`${buildMatchingSelector(element, getInitialDepth(element, angular), "", 0, random.randRange(3, MAX_SELECTOR_LENGTH_TO_GENERATE))}${TARGETED_CLASS}`);
        matchingSelectors.push(`${buildMatchingSelector(element.firstChild, getInitialDepth(element.firstChild, angular), "", 0, random.randRange(3, MAX_SELECTOR_LENGTH_TO_GENERATE))}${TARGETED_CLASS}`);
        nonMatchingSelectors.push(`${buildNonMatchingSelector(element, getInitialDepth(element, angular), "", 0, random.randRange(3, MAX_SELECTOR_LENGTH_TO_GENERATE))}`);
        nonMatchingSelectors.push(`${buildNonMatchingSelector(element.firstChild, getInitialDepth(element.firstChild, angular), "", 0, random.randRange(3, MAX_SELECTOR_LENGTH_TO_GENERATE))}`);
    });

    const allCssRules = generateCssRules(matchingSelectors.concat(nonMatchingSelectors));
    random.shuffle(allCssRules, true);
    return allCssRules.join("\n");
};
