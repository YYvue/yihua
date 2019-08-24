import Vue from 'vue'
import Router from 'vue-router'
// 引入主面板index
import Index from './views/index.vue'
// 引用购物车界面
// import Gwc from './components/gwc.vue';
//引入 测试用商品面板
// import detail from "./components/details";
// 引入测试用商品详情页
import spxq from "./components/spxq.vue";
// 主页的路由
import zhuye from './components/zhuye.vue'
// 登录路由
import Login from './components/Login.vue'
// 我 路由
import Me from './components/Me.vue'
// 注册路由
import Reg from './components/Reg.vue'
//设置路由
import Sz from './components/sz.vue'
//支付路由
import pay from './components/Payment.vue'

import Pay1 from './components/Pay1.vue'
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/index',
			component: Index
		},
		{
			path: '/pay',
			component: pay
		},
		{
			// 设置路由
			path:"/sz",
			component:Sz
		},
		// 购物车测试路由
		// {
		// 	path:"/gwc",
		// 	component:Gwc
		// },
		{
			// 首页的路由
			path: '/zhuye',
			component: zhuye
		},
		{
			// 注册路由
			path:"/reg",
			component:Reg
		},
		{
			// 登录路由
			path:'/login',
			component:Login
		},
		// {
		// 	// 此为测试路由
		// 	path: '/details',
		// 	component: detail
		// },
		{
			// 此为测试路由
			path: "/spxq",
			component: spxq
		},
			{path:"/Pay1",
			component:Pay1}
	]
})
