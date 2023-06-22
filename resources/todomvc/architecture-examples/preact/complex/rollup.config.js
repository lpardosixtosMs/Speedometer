import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import css from "rollup-plugin-import-css";
import copy from "rollup-plugin-copy";
import html from "@rollup/plugin-html";
const { getHtmlContent } = require("../shared/utils/getHtmlContent.js");

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
    input: "complex/src/index.js",
    output: [
        {
            file: "complex/dist/app.js",
            format: "iife",
            sourcemap: true,
        },
    ],
    plugins: [
        html({
            title: "TodoMVC: Preact Complex DOM",
            template: ({ attributes, bundle, files, publicPath, title }) => {
                let html = getHtmlContent("shared/public/index.html");
                const body = getHtmlContent("node_modules/big-dom-generator/dist/index.html", true);
                html = html.replace("<html", "<html class=\"spectrum spectrum--medium spectrum--light\"");
                html = html.replace("<title>TodoMVC: Preact</title>", `<title>${title}</title>`);
                html = html.replace("<body>", `<body>${body}`);
                return html;
            },
            filename: "index.html",
        }),
        css({
            minify: true,
        }),
        babel({
            babelrc: false,
            presets: [
                ["@babel/preset-env", { targets: "defaults" }],
                ["@babel/preset-react", { runtime: "automatic" }],
            ],
            plugins: [
                [
                    "@babel/plugin-transform-react-jsx",
                    {
                        pragma: "h",
                        pragmaFrag: "Fragment",
                    },
                ],
            ],
        }),
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        copy({
            targets: [{ src: "node_modules/big-dom-generator/dist/logo.png", dest: "complex/dist/" }],
        }),
        commonjs(),
        production && terser(),
    ],
};
