import Vue from 'vue'
import Vuex from 'vuex'
import user from "./user"
Vue.use(Vuex)

// store.state.isLogin 引用状态
// store.commit('login') 调用mutations
export default new Vuex.Store({
  state: {
    isLogin:false
  },
  mutations: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    }
  },
  actions: {
    clear({commit}) {
      commit ("$_removeStorage");
    }
  },
  modules: {
    user
  }
})
