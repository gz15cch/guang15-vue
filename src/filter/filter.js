import date from "./date.js";

// vue插件的实现原理，类似于vuex、vue-router、element-ui等这些插件都是对象提供一个install方法，将来通过Vue.use(插件)手动启动插件的

// 写vue插件，就是在install方法里面对象vue的原型进行扩展，或者注册一些新组件以及过滤器等

export default{
    // 这里的vue是定义install方法时作为形参传递的，所以不用导入vue模块，等到真正调用该方法时才需传递进去
    install(vue){
        vue.filter("date",date);
    }
}