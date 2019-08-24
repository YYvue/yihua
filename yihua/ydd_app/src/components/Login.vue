<template>
	<div class="login">
		<div class="jiantou" @click="jiantou"> &lt </div>
		<h3>登录</h3>
		<mt-field label="用户名" placeholder="请输入用户名" v-model="uname"></mt-field>
		<mt-field label="密码" placeholder="请输入用户名" type="password" v-model="upwd" class="myinput"></mt-field>
		<mt-button size="large" class="mybutton" @click="Login">登录</mt-button>
		<button @click="T">注册</button>
	</div>
</template>

<script>
// 引入 qs模块
import qs from 'qs';
export default {
	data() {
		return {
			uname: '',
			upwd: ''
		};
	},
	methods: {
		// 箭头跳转上一级
		jiantou() {
			// this.$router.push("/Me")
			this.$router.go(-1)
		},
		//跳转注册页面
		T() {
			this.$router.push("/Reg")
		},
		// 登录按钮
		Login() {
			var u = this.uname;
			var p = this.upwd;
			var reg = /^[a-z0-9_]{3,12}/i;
			if (!reg.test(u)) {
				this.$toast('用户名为空或者不符合要求');
				return;
			}
			if (!reg.test(p)) {
				this.$toast('密码不能为空');
				return;
			}
			var url = 'login';
			var obj = { uname: u, upwd: p };
			this.axios.post(url, qs.stringify(obj)).then(result => {
				if (result.data.code > 0) {
					var yhid=result.data.yhid;
					var yhnc=result.data.nc;
					localStorage.setItem("islogin",true);
					localStorage.setItem("id",yhid);
					localStorage.setItem("yhnc",yhnc);
					this.$router.push('/index');
				} else {
					this.$messagebox('提示', '用户名或密码有误');
				}
			});
		}
	}
};
</script>

<style scoped="scoped">
h3 {
	border-bottom: 1px solid #ccc;
	padding-bottom: 10px;
	text-align: center;
}
button {
	margin-top: 30px;
	width: 359px;
	height: 41px;
	background-color: #f0f0f0;
	font-size: 18px;
	border: 1px solid #f4f4f4;
	color: #808080;
}
.jiantou {
	position: absolute;
	top: 2px;
	left: 10px;
	font-size: 15px;
}
</style>
