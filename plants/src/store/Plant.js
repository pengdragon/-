import API from '../api'
import { FetchGet } from '../common/fetch'
const state = {
    list: []
}
const mutations = {
    setTest(state, param) {
        state.list = param;
    }
}
async function getTest(store) {
    let data = await FetchGet(API.TEST)
    data = data.playingList
    store.commit('setTest', data)
}
export default {
    namespaced: true,
    state,
    // getters,
    mutations,
    actions: {
        getTest

    }
}