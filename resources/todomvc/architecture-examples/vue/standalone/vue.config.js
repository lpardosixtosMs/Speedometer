const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: "",
    chainWebpack: (config) => {
        config.plugin("html").tap((args) => {
          args[0].template = "shared/public/index.html";
          return args;
        });
        config.entry("app").clear().add("./standalone/src/main.js");
    },
    terser: {
        minify: "terser",
        terserOptions: {
            compress: true,
        },
    },
});
