import "normalize.css";
import "./less/index.less";

import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUi);

import api from "./js/api-config.js";
Vue.prototype.$api = api;

import axios from "axios";
axios.defaults.withCredentials = true;
Vue.prototype.$http = axios;



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
