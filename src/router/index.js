// 导入相关第三方包
import Vue from 'vue';
import Router from 'vue-router';


// 导入路由守卫
import beforeEach from "./beforeEach.js";

// 导入被路由控制的各个组件
// 这里的@符号指的是src目录，如果路径有涉及到src可用该符号代替，如果导入的是js、vue、json文件，可以省略后缀名
import Login from "@/components/login/Login.vue";
import Store from "@/components/store/Store.vue";
import GoodsList from "@/components/store/goods/List.vue";
import GoodsDetail from "@/components/store/goods/Detail.vue";
import Shopcart from "@/components/store/shopcart/Shopcart.vue";
import OrderCommit from "@/components/store/order/Commit.vue";
import OrderPay from "@/components/store/order/Pay.vue";


// 手动use启动路由插件
Vue.use(Router);

// 创建路由实例，添加路由配置
let router = new Router({
  routes: [
    {name:"index",path:"/"},
    {name:"login",path:"/login",component:Login},
    {name:"store",path:"/store",component:Store,children:[
      // 商品
      {name:"goodsList",path:"goods/list",component:GoodsList},
      {name:"goodsDetail",path:"goods/detail/:id",component:GoodsDetail},

      // 购物车
      {name:"shopcart",path:"shopcart",component:Shopcart},

      // 订单
      {name:"orderCommit",path:"order/commit",component:OrderCommit},
      {name:"orderPay",path:"order/pay",component:OrderPay}
    ]}    
  ]
});
// 添加路由守卫
router.beforeEach(beforeEach);

// 导出路由实例
export default router;
