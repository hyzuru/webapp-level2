import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import axios from "axios";

axios.defaults.baseURL = "http://api.openweathermap.org/data/2.5";
Vue.http = Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
