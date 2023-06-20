const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { getHtmlContent } = require("../shared/utils/getHtmlContent.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            title: "TodoMVC: React Complex DOM Development",
            template: "shared/public/index.html",
            templateParameters: {
                body: getHtmlContent("node_modules/big-dom-generator/dist/index.html"),
                htmlClasses: "spectrum spectrum--medium spectrum--light",
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
