<template>
	<div>
		<div id="ts" v-if="!islogin">
			<p>你还没有登录,请先登录</p>
			<button @click="dl">登录</button>
		</div>
		<div v-if="islogin">
			<div style="text-align: center;" v-if="k">
				<p>你的购物车空空如也</p>
				<button @click="tz">去逛逛</button>
			</div>
			<div class="selectall" v-if="!k">
				<div>全选<input type="checkbox" @change="qx" /></div>
				<p>名称</p>
				<p>图片</p>
				<p>价格</p>
				<p>数量</p>
			</div>
			<div v-if="!k" class="cart-item" v-for="(item, i) of list" :key="i">
				<div class="leftimgtext">
					<input type="checkbox" v-model="item.cb" />
					<p v-text="item.spmc"></p>
					<img :src="item.sptp" />
					<div class="price">
						<span v-text="`${(item.spsl*item.spjg).toFixed(2)}`"></span>
					</div>
					<div>
						<button @click="js(i)">-</button>
						<p class="sl" :data-id="item.id" style="display: inline-block;" v-text="item.spsl"></p>
						<button @click="zj(i)">+</button>
					</div>
				</div>
			</div>
			<div id="db" v-if="!k">
				<h3 style="color:red" v-text="`购物车数量:${number}` ">:</h3>
				<h3 style="color:red" v-text="`总价:${total}`"></h3>
				<button @click="balance()">结算</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				islogin: false, //登录状态
				list: "", //购物车数据
				k: "", //购物车为空
			}
		},
		created() {
			this.islogin = localStorage.getItem("islogin");
		},	
		methods: {
			 balance(){
				 var sum = 0;var idx=[];
				for (var p of this.list) {
					if (p.cb == true) {
						sum += (p.spsl * p.spjg);
						idx.push(p.id);
				localStorage.setItem("idx",idx);
					}
				}
				sum=sum.toFixed(2);
				 this.$router.push({path:'/pay',query:{
					total:sum,idx:idx
				 }});
			 },
			// 跳转按钮
			tz() {
				this.$router.push('/index');
			},
			// 全选按钮
			qx(e) {
				var zt = e.target.checked;
				for (var i = 0; i < this.list.length; i++) {
					this.list[i].cb = zt;
				}
			},
			// 跳转登录界面
			dl() {
				this.$router.push("/login")
			},
			// 减少数量
			js(n) {
				var sl = document.getElementsByClassName("sl")[n];
				var id = sl.dataset.id;
				if (sl.innerHTML <= 1) {
					this.axios.get("sc", {
						params: {
							id: id
						}
					}).then((result) => {
						this.loadmore();
					})
				} else {
					this.list[n].spsl--;
				}
			},
			// 增加数量
			zj(n) {
				this.list[n].spsl++;
			},
			// 加载商品
			loadmore() {
				var yhid = localStorage.getItem("id");
				this.axios.get("gwc", {
					params: {
						yhid: yhid,
					}
				}).then(result => {
					if (result.data.code > 0) {
						var rows = result.data.data;
						for (let item of rows) {
							item.cb = false;
						}
						this.list = rows;
					} else {
						this.k = true;
					}
				})
			}
		},
		computed: {
			// 总价格
			total() {
				var sum = 0;
				for (var p of this.list) {
					if (p.cb == true) {
						sum += (p.spsl * p.spjg);
						localStorage.setItem("sum",sum);
					}
				}
				return sum.toFixed(2);
			},
			// 总数量
			number() {
				var i = 0;
				for (var p of this.list) {
					if (p.cb == true) {
						i += p.spsl;
					}
				}
				return i
			}
		},
		watch: {
			islogin() {
				if (this.islogin) {
					this.loadmore();
				}
			}
		}
	}
</script>

<style scoped="scoped">
	#ts {
		text-align: center;
		margin-top: 50px;
	}

	.cart-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid red;
	}

	.leftimgtext,
	.selectall {
		display: flex;
		justify-content: space-between;
		width: 100%;
		align-items: center;
	}

	.leftimgtext img {
		width: 50px;
		height: 50px;
	}

	.leftimgtext button {
		padding: 5px;
	}

	.price {
		margin-left: 20px;
	}

	#db {
		position: fixed;
		bottom: 56px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 8px 0;
		background: wheat;
		box-sizing: border-box;
	}

	#db>button {
		color: white;
		background-color: red;
		padding: 8px;
		height: 100%;
	}
</style>
