import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import css from "rollup-plugin-import-css";
import html from "@rollup/plugin-html";
const { getHtmlContent } = require("../shared/utils/getHtmlContent.js");

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
    input: "standalone/src/index.js",
    output: [
        {
            file: "standalone/dist/app.js",
            format: "iife",
            sourcemap: true,
        },
    ],
    plugins: [
        html({
            title: "Preact • TodoMVC",
            template: ({ attributes, bundle, files, publicPath, title }) => {
                const html = getHtmlContent("shared/public/index.html");
                const body = getHtmlContent("standalone/public/partial.html");
                return html.replace("<body>", `<body>${body}`);
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
        commonjs(),
        production && terser(),
    ],
};
