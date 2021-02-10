import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

document.querySelector('body').append(document.createElement('app'))

new Vue({
  render: h => h(App)
}).$mount('app')
