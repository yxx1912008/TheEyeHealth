/*
路由中心
 */
import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import Error from '@/view/other/Error'
import EyeTest from '@/view/eyetest'
import AstiTest from '@/view/eyetest/AstiTest'
import ColorTest from '@/view/eyetest/ColorTest'
import MainEyeTest from '@/view/eyetest/MainEyeTest'
import YellowTest from '@/view/eyetest/YellowTest'
import EyeHealth from '@/view/eyehealth/EyeHealth'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: '首页',
    component: App,
    children: [{
      path: '/',
      meta: {
        title: '首页',
        index: 0
      },
      component: EyeTest
    },
      {
        path: 'eyeTest/astiTest',
        meta: {
          title: '散光测试',
          index: 1
        },
        component: AstiTest
      },
      {
        path: 'eyeTest/colorTest',
        meta: {
          title: '色盲色弱测试',
          index: 2
        },
        component: ColorTest
      }, {
        path: 'eyeTest/mainEyeTest',
        meta: {
          title: '主导眼测试',
          index: 2
        },
        component: MainEyeTest
      }, {
        path: 'eyeTest/yellowTest',
        meta: {
          title: '黄斑变性测试',
          index: 2
        },
        component: YellowTest
      },
      {
        path: 'eyeTest/health',
        meta: {
          title: '视力保健',
          index: 1
        },
        component: EyeHealth
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
    },
    {
      path: '*',
      meta:
        {
          title: '页面不存在',
          index: 1
        }
      ,
      component: Error
    }
  ]
})
