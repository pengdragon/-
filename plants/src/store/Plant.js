import API from '../api'
import { FetchGet } from '../common/fetch'
const state = {
    list: [],
    plant: {},
}
const mutations = {
    setTest(state, param) {
        state.list = param;
    },
    setPlant(state, param) {
        state.plant = param;
    }
}
async function getTest(store) {
    let data = await FetchGet(API.TEST)
    data = data.playingList
    store.commit('setTest', data)
}
//请求Plant首页
async function getPlantfirst(store) {
    console.log(1)
    let data = await FetchGet(API.USER_PLANT)
    console.log(data)
    store.commit('setPlant', data)

}
export default {
    namespaced: true,
    state,
    // getters,
    mutations,
    actions: {
        getTest,
        getPlantfirst
    }
}