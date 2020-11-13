import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  router,
  store,
  validations: {},
  render: (h) => h(App),
}).$mount("#app");
