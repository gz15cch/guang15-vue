<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
    // 引入公共头部和底部
    import appHeader from "./common/Header.vue";
    import appFooter from "./common/Footer.vue";

    export default{
        // 注册公共头部和底部组件，es6语法简写
        components: {
            appHeader,
            appFooter
        }
    }
</script>

<style scoped>

</style>