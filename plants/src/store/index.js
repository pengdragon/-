import Vue from 'vue'
import Vuex from 'vuex'
import plant from './Plant'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    plant,
  }
})
