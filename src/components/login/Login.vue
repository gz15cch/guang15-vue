<template>
    <div class="login">
        <!--ref用来关联该dom结构，方便后面获取该dom结构-->
        <h1 ref="title">后台管理</h1>
        <!--model用来关联表单数据（即拿到提交的表单数据），rules用来指定校验规则-->
        <el-form label-position="left" label-width="80px" ref="ruleForm2" :model="formLabelAlign" :rules="rules">
            <!--如果要表单校验与重置功能，必须加上prop属性-->
            <el-form-item label="账号" prop="uname">
                <el-input v-model="formLabelAlign.uname"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="upwd">
                <el-input v-model="formLabelAlign.upwd"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default{
        data () {
            // 校验账号, 将来配置到下面的validator配置项
            function unameFn(rule,value,callback){
                if(value == ""){
                    callback(new Error("账号不能为空"));
                }else{
                    callback();
                }
            }

            // 校验密码, 将来配置到下面的validator配置项
            function upwdFn(rule,value,callback){
                if(value == ""){
                    callback(new Error("密码不能为空"));
                }else{
                    callback();
                }
            }
            return {
                // 表单提交的数据
                formLabelAlign:{
                    uname:"",
                    upwd:""
                },
                // 表单校验规则
                rules:{
                    // required：必填项，message：校验失败的提示信息，trigger：触发校验的事件这里的blur是失去焦点事件，min和max设置长度，validator：设置校验函数，pattern：设置正则
                    uname:[
                        {required:true,message:"请填写账号",trigger:"blur"},
                        {min:5,max:18,message:"账号在5~18位",trigger:"blur"},
                        {validator:unameFn,trigger:"blur"}
                    ],
                    upwd:[
                        {validator:upwdFn,trigger:"blur"},
                        {pattern:/^\w{6,18}$/,message:"密码在6~18位",trigger:"blur"}
                    ]
                }
            }
        },

        methods: {
            // 登陆
            login(){
                this.$http.post(this.$api.login,this.formLabelAlign).then(res =>{
                    if(res.data.status == 0){
                        // 使用了路由插件后, 就会拥有$router对象
                        this.$router.push({name:"goodsList"});
                    }else{
                        this.$alert(res.data.message);
                    }
                });
            },

            // 表单提交时校验全部字段
            submitForm(formName){
                // 通过ref引用得到form表单元素, 然后调用validate方法去校验全部字段
                // 全部字段都通过校验, 那么回调收到的值为true, 否则为false
                // $refs是vue提供的用于替代传统的dom方法获取方式
                // this.$refs.ruleForm2 = document.querySelector("form");
                this.$refs[formName].validate(result => {
                    // 全部都通过校验才登陆
                    if(result){
                        this.login();
                    }else{
                        // 有一个错误也不行
                        this.$alert("格式错误，请重新输入");
                    }
                });
            },

            // 重置
            resetForm(formName){
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    .login{
        width: 400px;
        height: 200px;
        margin:0 auto;
        position:relative;
        top:50%;
        transform: translateY(-50%);
        padding:20px;
        border:1px solid #fff;
        border-radius: 6px;
    }

    h1{
        position: absolute;
        top:-60px;
        width: 100%;
        text-align: center;
        font-size:20px;
        color:#fff;
    }
</style>