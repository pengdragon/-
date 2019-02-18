import API from '../api'
import {FetchGet} from '../common/fetch'
const state = {
    shopping:{},
}
const mutations = {
    setShopping(state,param){
        state.shopping=param;
    }
}
async function getTest(store){
    let data = await FetchGet(API.TESE)
    data = data.playingList
    store.commit('setTest' , data)
}
async function getShoppingtrade(store){
    let data = await FetchGet(API.USER_SHOPPING)
    console.log(data)
    store.commit('setShopping',data)
}
export default{
    namespaced: true,
    state,
    // getters,
    mutations,
    actions: {
        
        getShoppingtrade
    }

}