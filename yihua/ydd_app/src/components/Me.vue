<template>
	<div class="all">
		<div class="redbg">
			<div class="message"><img src="../assets/Me/message.png" alt="" /></div>
			<div class="three">
				<div class="flower"><img src="../assets/Me/6.png" alt="" /></div>
				<div v-if="islogin == false" style="display: flex;">
					<p class="login">请登录</p>
					<p class="reg" @click="tz">登录/注册</p>
				</div>
				<div v-if="islogin == true" style="display: flex;">
					<p class="login" v-text="nc"></p>
				</div>
			</div>
			<div class="right">&gt</div>
		</div>

		<div class="middle">
			<div class="f-middle">
				<p>我的订单</p>
				<p>查看全部订单 &gt</p>
			</div>
			<ul>
				<li >
					<h5 @click="pay" ><img src="../assets/Me/fukuanzhuangtai.png" alt="" /></h5>
					待付款
				</li>
				<li>
					<h5><img src="../assets/Me/daishouhuo.png" alt="" /></h5>
					待收货
				</li>
				<li>
					<h5><img src="../assets/Me/evaluate.png" alt="" /></h5>
					待评价
				</li>
				<li>
					<h5><img src="../assets/Me/quxiaofabu.png" alt="" /></h5>
					已取消
				</li>
				<li>
					<h5><img src="../assets/Me/tubiaolunkuo-.png" alt="" /></h5>
					售后
				</li>
			</ul>
		</div>
		<div class="bg"></div>
		<div class="serve">
			<p>我的服务</p>
			<ul>
				<li>
					<h5><img src="../assets/Me/yaoqing.png" alt="" /></h5>
					邀请有礼
				</li>
				<li>
					<h5><img src="../assets/Me/shouhuodizhi.png" alt="" /></h5>
					收货地址
				</li>
				<li>
					<h5><img src="../assets/Me/qingdan.png" alt="" /></h5>
					常购清单
				</li>
				<li>
					<h5><img src="../assets/Me/guanzhu.png" alt="" /></h5>
					我的关注
				</li>
			</ul>
			<ul class="last">
				<li>
					<h5><img src="../assets/Me/kefu.png" alt="" /></h5>
					客服与帮助
				</li>
				<li>
					<h5><img src="../assets/Me/yijianfankui.png" alt="" /></h5>
					意见反馈
				</li>
				<li @click="sz">
					<h5><img src="../assets/Me/kejian.png" alt=""  /></h5>
					设置
				</li>
			</ul>
		</div>
		<div class="position">
			<div class="l-position">
				<h5>0张</h5>
				<p>优惠券</p>
			</div>
			<div class="r-position">
				<h5>0.00元</h5>
				<p>钱包</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			islogin: false, //登录状态
			nc: '' //用户昵称
		};
	},
	methods: {
		//进入设置路由
		sz(){
			if(this.islogin){
				this.$router.push("/sz");
			}else{
				this.$messagebox("请先登录")
			}
		},
		pay(){
			if(this.islogin){
				this.$router.push("/Pay1");
			}else{
				this.$messagebox("请先登录")
			}
		},
		// 获取登录状态
		hqdlzt() {
			var a = localStorage.getItem('islogin');
			if (a) {
				this.islogin = true;
			} else {
				this.islogin = false;
			}
			this.nc = localStorage.getItem('yhnc');
		},
		// 注销登录状态
		
		// 跳转登录界面
		tz() {
			this.$router.push('login');
		}
	},
	created() {
		this.hqdlzt();
	}
};
</script>

<style scoped="scoped">
* {
	margin: 0;
	padding: 0;
}
.redbg {
	position: relative;
	width: 100%;
	height: 160px;
	background-image: url('../assets/Me/timg.jpg');
	background-size: 100% 160px;
}
.message {
	position: absolute;
	right: 10px;
	top: 10px;
}
.message img {
	width: 20px;
	height: 20px;
}
.three {
	height: 50px;
	position: absolute;
	top: 70px;
	left: 10px;
	text-align: center;
}
.three p {
	float: left;
	margin-left: 10px;
	color: #ffffff;
	margin-top: 20px;
}
.flower {
	background-color: #ffffff;
	width: 50px;
	height: 50px;
	border-radius: 50% 50%;
	line-height: 50px;
	float: left;
	margin-top: 10px;
}
.flower img {
	width: 15px;
	height: 15px;
}
.reg {
	background-color: pink;
	border-radius: 10px;
	height: 30px;
}
.right {
	position: absolute;
	right: 10px;
	top: 80px;
	font-size: 20px;
	color: #fff;
}
.f-middle {
	border-bottom: 1px solid #ccc;
	margin-bottom: 20px;
	padding: 50px 15px 10px 15px;
}
.middle div {
	display: flex;
	justify-content: space-between;
}
ul {
	text-align: center;
	list-style-type: none;
	display: flex;
	justify-content: space-around;
}
ul img {
	width: 20px;
	height: 20px;
}
.bg {
	background-color: #ccc;
	width: 100%;
	height: 10px;
	margin-top: 10px;
	margin-bottom: 10px;
}
.serve > ul {
	margin-top: 30px;
	margin-bottom: 30px;
}
.serve > p {
	margin-left: 15px;
}
.last {
	justify-content: flex-start;
	margin-left: 15px;
}
.last li {
	margin-right: 30px;
}
.position {
	position: absolute;
	top: 140px;
	left: 12.5px;
	width: 350px;
	height: 50px;
	background-color: #ffffff;
}
.position p {
	font-size: 12px;
	color: #ccc;
}
.position h5 {
	margin-top: 10px;
	margin-bottom: 5px;
}
.l-position,
.r-position {
	width: 175px;
	height: 50px;
	display: inline-block;
	text-align: center;
}
</style>
