const { merge } = require("webpack-merge");
const common = require("../shared/webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = merge(common, {
    entry: {
        app: "./standalone/src/index.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    mode: "production",
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            title: "Production",
            template: "shared/public/index.html",
            templateParameters: {
                title: "TodoMVC: React",
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
