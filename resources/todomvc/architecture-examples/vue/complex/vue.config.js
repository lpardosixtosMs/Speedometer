const { defineConfig } = require("@vue/cli-service");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: "",
    chainWebpack: (config) => {
        config.plugin("html").tap((args) => {
            args[0].template = "node_modules/big-dom-generator/index.html";
            return args;
        });
        config.plugin("copy").use(CopyWebpackPlugin, [
            {
                patterns: [
                    {
                        from: "node_modules/big-dom-generator/dist/logo.png",
                        to: ".",
                    },
                ],
            },
        ]);
    },
    terser: {
        minify: "terser",
        terserOptions: {
            compress: true,
        },
    },
});
