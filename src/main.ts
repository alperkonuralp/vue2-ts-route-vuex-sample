import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/fonts/fonts.scss";

Vue.config.productionTip = false;

document.title = "To Do App";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
