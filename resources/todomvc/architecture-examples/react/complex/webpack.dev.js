const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            title: "TodoMVC: React Complex DOM Development",
            template: "shared/public/index.html",
            templateParameters: {
                body: getHtmlContent("../node_modules/big-dom-generator/dist/index.html"),
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

function getHtmlContent(filePath) {
    const absolutePath = path.resolve(__dirname, filePath);
    const fs = require("fs");
    const htmlContent = fs.readFileSync(absolutePath, "utf8");
    const bodyStartIndex = htmlContent.indexOf("<body>") + 6;
    const bodyEndIndex = htmlContent.indexOf("</body>");
    return htmlContent.substring(bodyStartIndex, bodyEndIndex);
}
