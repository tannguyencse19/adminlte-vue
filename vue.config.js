// https://stackoverflow.com/questions/55309945/vue-cli-3-project-alias-src-to-or-not-working
// const path = require("path");
// const vueSrc = "./src";

module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "eProject";
      return args;
    });
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       "@": path.resolve(__dirname, vueSrc),
  //     },
  //     extensions: [".js", ".vue", ".json"],
  //   },
  // },
};
