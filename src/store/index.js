import Vue from "vue";
import Vuex from "vuex";
// Import modules
import auth from "./modules/auth";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { auth },
});

export default store;
