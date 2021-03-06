import vue from 'vue'
import Vuex from 'vuex'
vue.use(Vuex);

const state={
    photoList:[]
};
const mutations={
setPhotoList(state,status){
    state.photoList=[...status];
}
}
const actions={
    setPhotoList({commit},status){
        commit('setPhotoList',status)
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions
})