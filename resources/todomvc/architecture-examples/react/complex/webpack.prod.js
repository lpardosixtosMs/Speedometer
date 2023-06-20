const { merge } = require("webpack-merge");
const common = require("../shared/webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    mode: "production",
    devtool: "source-map",
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "node_modules/big-dom-generator/dist/logo.png", to: "." },
            ],
        }),
        new HtmlWebpackPlugin({
            title: "TodoMVC: React Complex DOM",
            template: "shared/public/index.html",
            templateParameters: {
                body: getHtmlContent("../node_modules/big-dom-generator/dist/index.html"),
                htmlClasses: "spectrum spectrum--medium spectrum--light",
            },
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
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
