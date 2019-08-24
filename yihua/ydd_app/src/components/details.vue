<template>
	<div id="sp">
		<div><mt-search style="width:100%;height:auto;" placeholder="搜索你想要的商品"></mt-search></div>
		<div id="zt">
			<div>
				<ul id="ztspfl">
					<li :class="isactive == item.lbbh ? 'wb' : ''" v-for="(item, i) of list" :key="i" v-text="item.lb" @click="ggsp(item.lbbh)"></li>
				</ul>
			</div>
			<div id="nr">
				<ul>
					<li v-for="(item, i) of sp" :key="i" @click="tz(item.id,item.spmc)">
						<img :src="item.sp_url" alt="" />
						<p v-text="item.spmc"></p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list: '',
			spnr: '',
			sp: [],
			isactive: ''
		};
	},
	methods: {
		// 此为跳转对应商品详情页的函数
		tz(id,spmc) {
			this.$router.push({
				path: '/spxq',
				query: {
					id: id,
					spmc:spmc
				}
			});
		},
		// 此为点击后更改商品列表的函数
		ggsp(zl) {
			this.sp = [];
			this.isactive = zl;
			for (var i = 0; i < this.spnr.length; i++) {
				if (zl == this.spnr[i].splb) {
					this.sp.push(this.spnr[i]);
				}
			}
		},
		// 请求商品分类的axios
		load1() {
			this.axios.get('spfl').then(result => {
				this.list = result.data.data;
			});
		},
		// 请求商品图片与名称的axios
		load2() {
			this.axios.get('spjs').then(result => {
				this.spnr = result.data.data;
				for (var i = 0; i < this.spnr.length; i++) {
					if (this.list[0].lbbh == this.spnr[i].splb) {
						this.sp.push(this.spnr[i]);
						this.isactive = this.list[0].lbbh;
					}
				}
			});
		}
	},
	created() {
		this.load1();
		this.load2();
	}
};
</script>

<style scoped="scoped">
.wb {
	color: red;
}

#sp {
	display: flex;
	flex-direction: column;
}

/* 修改搜索框的默认样式 */
.mint-searchbar {
	background-color: transparent !important;
}

.mint-searchbar-core {
	background-color: #d9d9d9;
}

.mint-searchbar-inner > .mintui.mintui-search {
	font-size: 24px;
}

/* 主题内容样式 */
#zt {
	display: flex;
	height: 500px;
}

/* 主题内容分类样式 */
#ztspfl {
	list-style: none;
	display: flex;
	flex-direction: column;
	margin: 0;
	overflow-y: scroll;
	height: 100%;
	padding: 0;
	align-items: center;
	width: calc(100% + 20px);
}

#zt > div:first-child {
	overflow: hidden;
	flex-basis: 35%;
}

/* 设置分类之间的间距 */
#ztspfl > li {
	margin-bottom: 15px;
	font-size: 24px;
}
/* 设置内容样式 */
#nr {
	flex-basis: 65%;
	height: 100%;
	overflow: hidden;
}

#nr > ul {
	list-style: none;
	margin: 0;
	overflow-y: scroll;
	height: 100%;
	padding: 0;
	width: calc(100% + 20px);
}

#nr > ul > li {
	width: 45%;
	display: inline-block;
	padding: 0 5px;
	text-align: center;
}

#nr > ul > li > img {
	width: 100%;
}

#nr > ul > li > p {
	margin: 2px 0 5px 0;
}
</style>
