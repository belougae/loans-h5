import Vue from 'vue'
import Vuex from 'vuex'
import storage from '../../src/assets/js/storage'
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        token:"",

    },
    mutations:{
        // isLogins(state,msg){
        //     state.token=msg;
        //     storage.set('token',msg)
        // },
        // removes(state){
        //     storage.remove('token');
        //     state.token = null
        // },
    }
    // mutations,
    // getters,
    // actions
});




export default store;