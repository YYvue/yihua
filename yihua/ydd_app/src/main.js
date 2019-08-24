import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
Vue.config.productionTip = false
// 引入mint-ui
import Mint from 'mint-ui';
// 注册mint-ui
Vue.use(Mint);
// 引入mint-ui样式
import 'mint-ui/lib/style.css';
// 引入vue-touch组件
var VueTouch = require('vue-touch');
// 注册vue-touch组件
Vue.use(VueTouch, {
	name: 'v-touch'
})
// 引入axios组件
import axios from "axios"
// 设置session保存的数据可以跨组件保存
axios.defaults.withCredentials = true;
// 设置发送axios时可以自动添加地址
axios.defaults.baseURL = "http://127.0.0.1:3000/";
// 将axios添加到vue的原型对象
Vue.prototype.axios = axios;
//引入Vuex
import Vuex from "vuex";
// 使用vuex
Vue.use(Vuex);
const store = new Vuex.Store({
	// vuex中全局共享的数据
	state: {

	},
	// 修改vuex中全局共享的数据
	mutations: {
		
	},
	// 获取vuex中全局共享的数据
	getters: {
		
	},
	
})
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
