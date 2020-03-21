import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        encryptItm:'encryptVal',
        encryptVal:'7777',
    },
    getters:{
        encryptItm:state=>state.encryptItm,
        encryptVal:state=>state.encryptVal,
    },
    mutations:{
        encryptItm:(state,value)=>state.encryptItm=value,
        encryptVal:(state,value)=>state.encryptVal=value,
    },
    actions:{

    }
})