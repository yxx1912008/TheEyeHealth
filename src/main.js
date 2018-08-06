// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Icon from 'vue-svg-icon/Icon'


//引入图标库 使用 svg图标
Vue.component('icon', Icon)

// 通过components下的index.js文件导入组件
import components from './components/index'

// 通过filters.js导入自定义用于过滤的函数
import filters from './config/filters'
// methods.js导入自定义方法(/变量)用于全局方法
import methods from './config/methods'

Vue.config.productionTip = false
// 使用mint-ui
Vue.use(MintUI)

// 定义一个VUE内全局用到的名称（标题）
Vue.prototype.appName = '视力测试'
// 对导入的组件进行全局组件注册
Object.keys(components).forEach((key) => {
  Vue.component(key, components[key])
})
// 对导入的函数进行全局过滤器注册
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})
// 方法挂靠全局
Object.keys(methods).forEach((key) => {
  Vue.prototype[key] = methods[key]
})

// 添加路由钩子修改每个页面标题
// to 去往的页面 from 来自那个页面 next 开始进入下一个页面
router.beforeEach((to, form, next) => {
  // 如果自定义了标题就取标题，否则拿全局标题
  window.document.title = to.meta.title !== undefined ? (to.meta.title + '-' + Vue.prototype.appName) : Vue.prototype.appName
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
