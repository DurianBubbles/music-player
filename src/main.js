import Vue from 'vue'
import App from './App.vue'
import store from './store'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入懒加载
import VueLazyLoad from 'vue-lazyload'

import router from './router/index.js'


Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueLazyLoad)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
