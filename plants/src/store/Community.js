import API from '../api'
import { FetchGet } from '../common/fetch'
const state = {
    list: [],
    userActivity: []
}
const mutations = {
    setTest(state, param) {
        state.list = param;
    },
    setCommunityUserActivity(state, param) {
        state.userActivity = param;
    }
}
async function getTest(store) {
    let data = await FetchGet(API.TEST)
    data = data.playingList
    store.commit('setTest', data)
}
//用户动态 USER_ACTIVITY
async function getCommunityUserActivity(store) {
    let data = await FetchGet(API.USER_ACTIVITY);
    store.commit('setCommunityUserActivity', data.userActivity);

}
export default {
    namespaced: true,
    state,
    // getters,
    mutations,
    actions: {
        getTest,
        getCommunityUserActivity

    }
}