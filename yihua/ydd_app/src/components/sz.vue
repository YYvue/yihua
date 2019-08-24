<template>
	<div>
		<div>
			<ul id="jm">
				<li>更换注册手机号</li>
				<li>解除微信绑定</li>
				<li>清楚缓存</li>
				<li>当前版本</li>
			</ul>
			<mt-button size="large" type="danger" plain @click.native="zx">退出当前账户</mt-button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			zx() {
				this.$messagebox
					.confirm('是否退出')
					.then(action => {
						this.$messagebox("退出成功");
						localStorage.removeItem('islogin');
						localStorage.removeItem('yhnc');
						localStorage.removeItem('id');
						this.$router.push("/index")
					})
					.catch(err => {
						return;
					});
			},
		}
	}
</script>

<style scoped="scoped">
	#jm{
		list-style: none;
		margin: 0;
		padding: 0;
	}
	#jm>li{
		padding:5px 0;
		background-color:black;
		color: white;
		margin-bottom: 5px;
	}
</style>
