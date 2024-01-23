import Vue from 'vue'
import App from './App.vue'

Vue.directive('focus',{
  inserted(el){
    el.focus()
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
