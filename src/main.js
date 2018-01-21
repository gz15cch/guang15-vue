// 引入所需样式文件
import "normalize.css";
import "./less/index.less";
import "./css/style.css";
import "element-ui/lib/theme-chalk/index.css";

// 导入vue第三方包
import Vue from 'vue';
import Vuex from "vuex";
import ElementUi from "element-ui";

// 导入路由实例
import router from "./router/index.js";

// 导入根组件
import App from './App';

// 引入接口配置文件
import api from "./js/api-config.js";

// 引入axios包
import axios from "axios";

// 导入自己封装的vue插件
import MyFilter from "./filter/filter.js";


// 手动use启动vue插件
Vue.use(Vuex);
Vue.use(ElementUi);
Vue.use(MyFilter);



// 添加请求默认域名
axios.defaults.baseURL = 'http://localhost:8899';
// 设置跨域请求时会将cookie携带到后台去
axios.defaults.withCredentials = true;

// 统一扩展Vue原型
Vue.prototype.$http = axios;
Vue.prototype.$api = api;



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
