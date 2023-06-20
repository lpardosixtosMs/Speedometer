const { merge } = require("webpack-merge");
const common = require("../shared/webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
    entry: {
        app: "./complex/src/index.js",
    },
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
                { from: "../../big-dom-generator/dist/logo.png", to: "." },
                { from: "../../big-dom-generator/dist/index.html", to: "../public" },
            ],
        }),
        new HtmlWebpackPlugin({
            title: "Production",
            template: "complex/public/index.html",
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