import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import common from './common'
console.log(common)
Vue.use(common)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
