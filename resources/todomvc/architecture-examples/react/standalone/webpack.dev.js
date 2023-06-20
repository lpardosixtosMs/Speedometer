const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            title: "Development",
            template: "shared/public/index.html",
            templateParameters: {
                body: getHtmlContent("./partial.html"),
                htmlClasses: "",
            },
        }),
    ],
    devServer: {
        static: "./dist",
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
});

function getHtmlContent(filePath) {
    const absolutePath = path.resolve(__dirname, filePath);
    const fs = require("fs");
    return fs.readFileSync(absolutePath, "utf8");
}

