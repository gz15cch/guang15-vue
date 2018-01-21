<template>
    <div class="section">
        <div class="wrapper">
            <div class="wrap-box">
                <!--类别菜单-->
                <div class="left-220" style="margin:0;">
                    <div class="banner-nav">
                        <ul>
                        <!--此处声明下面可重复循环-->
                            <li v-for="item in allData.catelist" :key="item.id">
                                <h3>
                                    <i class="iconfont icon-arrow-right"></i>
                                    <span>{{item.title}}</span>
                                    <p>
                                        <span v-for="subitem in item.subcates" :key="subitem.id">{{subitem.title}}</span>
                                    </p>
                                </h3>
                                <div class="item-box">
                                    <!--如有三级分类，此处可循环-->
                                    <dl>
                                        <dt><a href="#">{{item.title}}</a></dt>
                                        <dd>
                                            <list-left :list="item.subcates"></list-left>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--/类别菜单-->
                
                <!--幻灯片-->
                <div class="left-705">
                    <div class="banner-img">
                        <el-carousel indicator-position="outside">
                            <el-carousel-item v-for="item in allData.sliderlist" :key="item.id">
                                <img :src="item.img_url" alt="" style="width:100%">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <!--/幻灯片-->
                
                <!--推荐商品-->
                <div class="left-220">
                    <list-right :list="allData.toplist"></list-right>
                </div>
                <!--/推荐商品-->
            </div>
        </div>
    </div>
</template>

<script>
    import listLeft from "./listTopChildren/ListLeft.vue";
    import listRight from "./listTopChildren/ListRight.vue";
    export default{
        data () {
            return {
                allData:{
                    catelist:[],//分类列表数据
                    sliderlist:[],//轮播图列表数据
                    toplist:[]//置顶商品列表数据
                }
            }
        },

        methods: {
            // 获取全部数据
            getAllData(){
                this.$http.get(this.$api.goodsTop).then(res => {
                    this.allData = res.data.message;
                });
            }
        },

        created () {
            this.getAllData();
        },
        components: {
            listLeft,
            listRight
        }
    }
</script>

<style scoped>

</style>