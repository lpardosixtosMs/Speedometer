# TodoMVC embedded in a complex big static DOM

## The benchmark

This workload embeds the todoMVC benchmark in an html page with the following characteristics.

-   The page is a big static DOM with around 4000 elements.
-   The page is styled using the @spectrum-css adobe library, which relies on css variables for uniform styling.
-   The @spectrum-css rules of the page are post processed using postcss and purgecss.
-   The page includes other 400 complex color css rules using different kinds of css selectors and combinators.
-   200 of the above rules will fully match elements added by the todoMVC benchmark, but not elements in the UI. E.g. `.toggle-all-container ~ ul > .li-6 > .view-6.targeted`.
-   200 of the above rules will partially match elements added by the todoMVC benchmark (the right most selector will match). E.g. `.header.just-span .header ~ .main .view-31`.
-   We added new classes `li-{index}` and `view-{index}` to the todoMVC benchmark list items to make it easier to match the elements. We also added a class `targeted` to them to avoid affecting other elements with the generated CSS.

<p align = "center">
<img src="complex-dom-workload.png" alt="workload" width="800"/>
</p>

## Structure of the folder

-   _src_ Code to generate the big static DOM
-   _dist_ - Output folder for the big static DOM generator.
-   _angular_ - Output folder for the angular generated.css.

## How to run

`npm run build` - Generates the static html and corresponding css.

`npm run serve` - Serves the dist folder in port 7002.

## The generator

The generator is a nodejs script that uses `renderToStaticMarkup` to generate the static html.

### Dom Generator

-   Uses a random seedable library with a default seed for all its random operations.
-   Takes `MAX_DEPTH`, `TARGET_SIZE` and to randomly generate the big folder-like structure embedded in the sidebar.
-   To generate the sidebar, each node decides if it will have children based on the `CHILD_PROB` value. Then randomly chooses a number of children between 1 and `MAX_BREADTH`.

## Install

In the root directory of this package, run:

```bash
$ npm link
```

This will create a symlink to the package in the global `node_modules` directory.

In the project where we want to use the big-dom-generator package, run:

```bash
$ npm link big-dom-generator --save
```

This will create a symlink to the package in the local `node_modules` directory of the project. The flag `--save` will create an entry in the package.json if one doesn't already exist. Now you can use the package in the project as if it was installed from npm.

## Usage

To use the big-dom-generator package in a javascript project, you can import the CSS file like this:

```javascript
import "big-dom-generator/dist/big-dom-generator.css";
```

This will import the generated.css file from the big-dom-generator package and apply the styles to your web page.

Alternatively, you can include the CSS file in your HTML file using a link tag:

```html
<link rel="stylesheet" href="node_modules/big-dom-generator/dist/big-dom-generator.css" />
```