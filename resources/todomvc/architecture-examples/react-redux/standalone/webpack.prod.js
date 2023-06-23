const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const TerserPlugin = require("terser-webpack-plugin");

const { getHtmlContent } = require("../shared/utils/getHtmlContent.js");

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            title: "TodoMVC: React-Redux",
            template: "shared/public/index.html",
            templateParameters: {
                body: getHtmlContent("standalone/public/partial.html"),
                htmlClasses: "",
            }
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
