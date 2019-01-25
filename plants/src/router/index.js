import Vue from 'vue'
import Router from 'vue-router'
console.log(11)
import plantRoute from './plantRoute'
import communityRoute from './communityRoute'
import shoppingRoute from './shopRoute'
import mineRoute from './mineRoute'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    plantRoute,
    communityRoute,
    shoppingRoute,
    mineRoute
  ]
})
