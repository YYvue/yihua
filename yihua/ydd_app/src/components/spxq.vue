<template>
	<div>
		<div @click="fhsy" style="position: fixed; top: 0; font-size: 24px;">&lt</div>
		<div id="tpbox">
			<div id="tp"><img v-for="(url, i) of url" :key="i" :src="url" /></div>
		</div>
		<div id="spnr">
			<p v-text="`商品名:${spmc}`" class="spxx"></p>
			<p v-text="`商品价格:¥${spxq.price.toFixed(2)}`" class="spxx price"></p>
			<p v-text="`商品库存:${spxq.kc}`" class="spxx"></p>
		</div>
		<div id="spxq">
			<h3>商品详情</h3>
			<table>
				<tr>
					<td>花语</td>
					<td v-text="spxq.hy"></td>
				</tr>
				<tr>
					<td>概述</td>
					<td v-text="spxq.gs"></td>
				</tr>
				<tr>
					<td>养护知识</td>
					<td v-text="spxq.yhzs"></td>
				</tr>
			</table>
		</div>
		<div id="dbdh">
			<div>
				<div>
					<img src="../assets/spdhl/spkf.png" />
					<p>客服</p>
				</div>
				<div>
					<img src="../assets/spdhl/spgz.png" />
					<p>关注</p>
				</div>
				<div>
					<img src="../assets/spdhl/spgwc.png" />
					<p>购物车</p>
				</div>
			</div>
			<div><button @click="tc">加入购物车</button></div>
		</div>
		<div id="spjm">
			<div>
				<img :src="url[0]" style="width: 100px;margin-right: 10px;" />
				<div>
					<p style="color: red;margin-bottom: 5px;" v-text="`¥${spxq.price.toFixed(2)}`"></p>
					<p v-text="`库存:${spxq.kc}`"></p>
				</div>
				<button @click="gb" style="align-self: flex-start;">x</button>
			</div>
			<div style="display: flex;justify-content: space-between;">
				<p>购买数量</p>
				<div style="display:flex;">
					<button @click="js">-</button>
					<div v-text="count" style="border: 1px solid gray;"></div>
					<button @click="zj">+</button>
				</div>
			</div>
			<div style="display: flex;justify-content: space-between;">
				<p v-text="`共${count}件`"></p>
				<div style="display:flex;">
					<p v-text="`¥${sum.toFixed(2)}`" style="color:red;"></p>
					<button @click="tjgwc" style="background-color: red;color:white;border: 0;">加入购物车</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				id: '', //保存传输过来的id值
				spxq: {
					price: 0
				}, //保存axios请求后的数据
				url: '', //保存接受axios图片的路径
				spmc: '', //保存传输过来的商品名称
				count: 1, //商品数量
				sum: 0, //商品总价格
			};
		},
		methods: {
			// 返回首页
			fhsy() {
				this.$router.go(-1);
			},
			// 弹出购物界面
			tc() {
				var islogin=localStorage.getItem("islogin");
				if (islogin) {
					var spjm = document.getElementById("spjm");
					var dbdh = document.getElementById("dbdh");
					dbdh.style.display = "none";
					spjm.style.display = "block";
				} else{
					this.$messagebox("请先登录");
				}
			},
			// 关闭购物界面
			gb() {
				var spjm = document.getElementById("spjm");
				var dbdh = document.getElementById("dbdh");
				dbdh.style.display = "flex";
				spjm.style.display = "none";
				this.count = 1;
				this.sum = this.spxq.price;
			},
			// 增加count的数量
			zj() {
				this.count++;
				this.sum = this.spxq.price * this.count;
			},
			//减少数量
			js() {
				if (this.count <= 1) {
					this.gb();
				} else {
					this.count--;
					this.sum = this.spxq.price * this.count;
				}
			},
			tjgwc() {
				//商品名称
				var spmc = this.spmc;
				//商品数量
				var spsl = this.count;
				// 商品总价格
				var spjg = this.sum;
				// 用户id
				var yhid = localStorage.getItem("id");
				// 商品图片
				var url = this.url[0];
				this.axios.get("tj", {
					params: {
						spmc: spmc,
						spsl: spsl,
						spjg: spjg,
						yhid: yhid,
						url: url,
					}
				}).then(result => {
					if (result.data.code == 1) {
						console.log(result.data)
						this.$toast("添加购物车成功");
						this.gb();
					} else {
						this.$toast("添加购物车失败")
					}
				})
			}
		},
		created() {
			// 获取传输过来的商品名称
			this.spmc = this.$route.query.spmc;
			// 获取传输过来的id值
			this.id = this.$route.query.id;
			this.axios
				.get('spxq', {
					params: {
						spid: this.id
					}
				})
				.then(result => {
					this.spxq = result.data.data[0];
					this.sum = this.spxq.price;
					// 将图片分割为数组
					this.url = this.spxq.imgs.split(',');
				});
		}
	};
</script>
<style scoped="scoped">
	p {
		margin: 0;
		padding: 0;
	}

	#tpbox {
		height: 375px;
		overflow: hidden;
		margin-bottom: 10px;
	}

	#tp {
		width: 100%;
		overflow-y: scroll;
		display: flex;
		height: calc(100% + 8px);
	}

	#tp>img {
		width: 100%;
		height: 375px;
	}

	/* 设置商品内容样式 */
	#spnr {
		display: flex;
		flex-direction: column;
	}

	/* 设置商品内容下的文字样式 */
	.spxx {
		margin: 0 5px;
		border-bottom: 10px solid gray;
	}

	.spxx.price {
		color: red;
	}

	/* 设置商品详情的样式 */
	#spxq {
		display: flex;
		flex-direction: column;
		margin-bottom: 100px;
	}

	#spxq>h3 {
		font-size: 24px;
		text-align: center;
		background-color: darkgray;
		padding: 20px 0;
	}

	tr {
		vertical-align: top;
	}

	#dbdh {
		position: fixed;
		bottom: 0;
		display: flex;
		width: 100%;
		justify-content: space-between;
		background-color: skyblue;
	}

	#dbdh>div:first-child {
		display: flex;
		flex-basis: 60%;
	}

	#dbdh>div:first-child>div {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-right: 10px;
	}

	#dbdh>div:first-child>div>img {
		width: 100%;
		margin-bottom: 5px;
	}

	#dbdh>div:last-child>button {
		height: 100%;
		background-color: red;
		color: white;
	}

	#spjm {
		display: flex;
		flex-direction: column;
		position: fixed;
		bottom: 0;
		background-color: slategray;
		width: 100%;
		display: none;
	}

	#spjm>div:first-child {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
