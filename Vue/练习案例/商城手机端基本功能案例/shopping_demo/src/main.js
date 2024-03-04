import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/vant-ui' // 按需导入
import '@/styles/common.less'

// 全部导入
// import vant from 'vant'
// import 'vant/lib/index.css'
// // 插件安装初始化：内部会将所有的vant所有组件进行导入注册
// Vue.use(vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
