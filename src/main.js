import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import OptionsPage from "./components/OptionsPage.vue";

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(VueRouter);

//routes

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/optionspage", component: OptionsPage, name: "OptionsPage" },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
