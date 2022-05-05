import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabArray:[
      {
      entity: {
        id: 0,
        name: "aa",
        icon: "el-icon-message",
        alias: "首页"
      }
      }
    ]
  },
  mutations: {
    del(state,index){
      state.tabArray.splice(index,1)
    },
    add(state,item){
      state.tabArray.push(item)
    }
  },
  actions: {
  },
  modules: {
  }
})
