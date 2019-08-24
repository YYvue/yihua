<template>
	<div class=login>
		<div class="jiantou" @click="jiantou" >&lt</div>
		<h3>注册</h3>
		<mt-field label="用户名" placeholder="请输入用户名" 
		v-model="uname" @blur.native.capture="pd" @change="sx"></mt-field>
		<mt-field label="密码" placeholder="请输入用户名" type="password" 
		v-model="upwd" ></mt-field>
		<mt-field label="昵称" placeholder="请输入昵称" 
		v-model="nc" ></mt-field>
		<mt-button size="large" class="mybutton" @click="Login" id="btn">注册</mt-button>
 
	</div>
</template>

<script>
		// 引入 qs模块
	import qs from 'qs';
	export default{
		data(){
			return{
				uname:"",
				upwd:"",
				nc:"",
			}
		},	
		methods:{
			  sx(){
				var btn=document.getElementById("btn");
				btn.disabled=false	
				},
			    pd(){
						var u=this.uname;
						var url="pd";
						var obj={uname:u};
						this.axios.post(
						 url,qs.stringify(obj)
						).then(result=>{
						  if(result.data.code>0){
						     this.$messagebox("提示","账户已存在");	
								 var btn=document.getElementById("btn");
								 btn.disabled=true;
						 }
						})		
					},
					//跳转到登录见面
			     jiantou(){
					 this.$router.push("/Login")
				  },
					//注册用户
	           Login(){
					  var u=this.uname;
					  var p=this.upwd;
					  var n=this.nc;
				
					  var reg=/^[a-z0-9_]{3,12}/i
					   if(!reg.test(u)){
					  		this.$toast("用户名为3-12位");
					  		return;
					  }
					  if(!reg.test(p)){
						  this.$toast("密码为3-12位");
						  return;
					  }
					  var reg1=/^[\u4e00-\u9fa5]/
					    if(!reg1.test(n)){
					  	   this.$toast("姓名为空或不是中文");
					  		return;
					  }
					  var url="reg";
					  var obj={uname:u,upwd:p,nc:n};
					  
					this.axios.post(
					  url,qs.stringify(obj)
					).then(result=>{
					  if(result.data.code>0){
					       this.$messagebox("提示","注册成功")
								 this.$router.push("/Login")
					 }	
					})  
	      }
		}
	 	
	}
</script>

<style scoped="scoped">
	h3{border-bottom:1px solid #ccc;padding-bottom: 10px;text-align: center;}
	button{
		margin-top:30px;
		width:359px;height: 41px;
	   background-color: #F0F0F0;
		font-size:18px;
		border:1px solid #F4F4F4;
		color:#808080
		  }
		.jiantou{
			position: absolute;
			top:2px;left:10px;
			font-size:15px
		}
</style>	
