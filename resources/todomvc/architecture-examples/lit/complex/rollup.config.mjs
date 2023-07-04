import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import minifyHTML from "rollup-plugin-minify-html-literals";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import { getHtmlContent } from "big-dom-generator/utils/getHtmlContent.js";

export default {
    plugins: [
        typescript({
            compilerOptions: {
                sourceMap: false,
            },
            outputToFilesystem: true,
        }),
        copy({
            targets: [
                {
                    src: "shared/index.html",
                    dest: "standalone/dist/",
                    transform: (contents) => {
                        contents = contents.toString();
                        const body = getHtmlContent("shared/partial.html");
                        contents = contents.replace("<body>", `<body>${body}`);
                        return contents;
                    },
                },
            ],
        }),
        // Resolve bare module specifiers to relative paths
        resolve(),
        // Minify HTML template literals
        minifyHTML.default(),
        // Minify JS
        terser({
            ecma: 2022,
            module: true,
            warnings: true,
        }),
    ],
    input: "standalone/src/index.ts",
    output: {
        file: "standalone/dist/index.js",
        format: "es",
    },
    preserveEntrySignatures: "strict",
};
