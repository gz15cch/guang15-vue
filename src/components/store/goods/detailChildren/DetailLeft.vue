<template>
    <div class="magnifier" id="magnifier1">
		<div class="magnifier-container">
			<div class="images-cover"></div>
			<!--当前图片显示容器-->
			<div class="move-view"></div>
			<!--跟随鼠标移动的盒子-->
		</div>
		<div class="magnifier-assembly">
			<div class="magnifier-btn">
				<span class="magnifier-btn-left">&lt;</span>
				<span class="magnifier-btn-right">&gt;</span>
			</div>
			<!--按钮组-->
			<div class="magnifier-line">
				<ul class="clearfix animation03">
					<li v-for="item in imglist" :key="item.id">
						<div class="small-img">
							<img :src="item.original_path" />
						</div>
					</li>
				</ul>
			</div>
			<!--缩略图-->
		</div>
		<div class="magnifier-view"></div>
		<!--经过放大的图片显示容器-->
	</div>
</template>

<script>
    // 导入放大镜插件的样式与js
    import $ from "jquery";
    import "@/lib/imgzoom/css/magnifier.css";
    import "@.lib/imgzoom/js/magnifier.js";

    export default{
        // 通过props获取由父传给子组件的数据
        // 会出现一个不常见的问题，子组件先拿到父组件初始化时传递过来的空数据，当父组件请求接口成功后才拿到新的有效数据
        props:["imglist"],

        // 监听imglist的变化，变化时重新初始化放大镜插件
        watch:{
            imglist(){
               this.$nextTick(function(){
                    var magnifierConfig = {
                        magnifier : "#magnifier1",//最外层的大容器
                        width : 500,//承载容器宽
                        height : 500,//承载容器高
                        moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
                        zoom : 5//缩放比例
                    };
                    $().imgzoon(magnifierConfig);
               })
            }
        }

        
    }
</script>

<style scoped>

</style>