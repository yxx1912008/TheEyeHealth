/*
路由中心
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Error from '@/view/other/Error'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'HelloWorld',
			meta: {
				title: '欢迎界面'
			},
			component: HelloWorld
		},
		{
			path: 'user',
			meta: {
				title: '个人中心'
			},
			component: {}
		},
		{
			path: '*',
			meta: {
				title: '页面不存在'
			},
			component: Error
		}
	]
})