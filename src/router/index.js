/*
路由中心
 */
import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import Error from '@/view/other/Error'
import EyeTest from '@/view/eyetest'
import AstiTest from '@/view/eyetest/AstiTest'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: '首页',
    component: App,
    children: [{
      path: '/',
      meta: {
        title: '首页'
      },
      component: EyeTest
    },
      {
        path: 'eyeTest/astiTest',
        meta: {
          title: '散光测试'
        },
        component: AstiTest
      }
    ]
  }
    ,
    {
      path: 'user',
      meta:
        {
          title: '个人中心'
        }
      ,
      component: {}
    }
    ,
    {
      path: '*',
      meta:
        {
          title: '页面不存在'
        }
      ,
      component: Error
    }
  ]
})
