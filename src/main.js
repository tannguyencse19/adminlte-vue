import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
// import bootstrap from "bootstrap";
// import $ from "jquery";
// Con thieu file customize cho tung page, vd: adminlte.js

// Vue.config.productionTip = false;
// $(function () {
//   console.log("hello jquery");
// });
//Vue.use($);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
