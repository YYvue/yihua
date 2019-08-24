<template>
	<div>
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="首页"><zhuye></zhuye></mt-tab-container-item>
			<mt-tab-container-item id="商品"><spjs></spjs></mt-tab-container-item>
			<mt-tab-container-item id="购物车"><gwc></gwc></mt-tab-container-item>
			<mt-tab-container-item id="我"><me></me></mt-tab-container-item>
		</mt-tab-container>
		<mt-tabbar v-model="selected" fixed>
			<mt-tab-item id="首页" @click.native="change(0)">
				<!-- <img slot="icon" src="../assets/dbdht/h_mr.png" /> -->
				<imgs :selectedImage="require('../assets/dbdht/h_xz.png')" :normalImage="require('../assets/dbdht/h_mr.png')" :focused="currentIndex[0].isselected"></imgs>
				首页
			</mt-tab-item>
			<mt-tab-item id="商品" @click.native="change(1)">
				<!-- <img slot="icon" src="../assets/dbdht/sp_mr.png" /> -->
				<imgs :selectedImage="require('../assets/dbdht/sp_xz.png')" :normalImage="require('../assets/dbdht/sp_mr.png')" :focused="currentIndex[1].isselected"></imgs>
				商品
			</mt-tab-item>
			<mt-tab-item id="购物车" @click.native="change(2)">
				<!-- <img slot="icon" src="../assets/dbdht/gwc_mr.png" /> -->
				<imgs :selectedImage="require('../assets/dbdht/gwc_xz.png')" :normalImage="require('../assets/dbdht/gwc_mr.png')" :focused="currentIndex[2].isselected"></imgs>
				购物车
			</mt-tab-item>
			<mt-tab-item id="我" @click.native="change(3)">
				<!-- <img slot="icon" src="../assets/dbdht/w_mr.png" /> -->
				<imgs :selectedImage="require('../assets/dbdht/w_xz.png')" :normalImage="require('../assets/dbdht/w_mr.png')" :focused="currentIndex[3].isselected"></imgs>
				我
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
// 引入底部导航栏图片的vue组件
import imgs from '../components/tp.vue';
// 引入商品介绍的vue组件
import spjs from '../components/details.vue';
// 引入我 的组件
import me from '../components/Me.vue';
// 引入首页组件
import zhuye from '../components/zhuye.vue';
// 引入购物车组件
import gwc from '../components/gwc.vue';
export default {
	data() {
		return {
			selected: '首页',
			currentIndex: [{ isselected: true }, { isselected: false }, { isselected: false }, { isselected: false }]
		};
	},
	components: {
		// imgs是引入tp.vue生成的标签名
		imgs,
		// spjs是引入spjs生成的标签名
		spjs,
		// me是me.vue生成的标签名
		me,
		// zhuye是首页生成的标签名
		zhuye,
		gwc,
	},
	methods: {
		change(n) {
			for (var i = 0; i < this.currentIndex.length; i++) {
				if (n == i) {
					this.currentIndex[i].isselected = true;
				} else {
					this.currentIndex[i].isselected = false;
				}
			}
		}
	}
};
</script>

<style>
.mint-tabbar > .mint-tab-item.is-selected {
	background-color: transparent !important;
	color: red !important;
}
</style>
