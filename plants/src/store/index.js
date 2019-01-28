import Vue from 'vue'
import Vuex from 'vuex'
import plant from './Plant'
import community from './Community'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    plant,
    community
  }
})
