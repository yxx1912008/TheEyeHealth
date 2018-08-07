/*
路由中心
 */
import Vue from 'vue'
import Router from 'vue-router'
import Error from '@/view/other/Error'
import EyeTest from '@/view/eyetest'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: '首页',
    meta: {
      title: '首页'
    },
    component: EyeTest
  },
    {
      path: 'eye-test',
      meta: {
        title: '视力测试'
      },
      component: EyeTest
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
