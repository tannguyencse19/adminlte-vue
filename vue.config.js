// const webpack = require("webpack");
const jquery = require("jquery")

module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "eProject";
      return args;
    });
  },
  // https://stackoverflow.com/questions/37928998/how-to-use-a-jquery-plugin-inside-vue
  // https://stackoverflow.com/questions/59542447/vue-js-invalid-options-in-vue-config-js-plugins-is-not-allowed
  // https://stackoverflow.com/questions/56472305/how-to-solve-jquery-requires-a-window-with-a-document-error
  // plugins: [
  //   new jquery({
  //     $: "jquery",
  //     jquery: "jquery",
  //     "window.jQuery": "jquery",
  //     jQuery: "jquery",
  //   }),
  // ],
};
