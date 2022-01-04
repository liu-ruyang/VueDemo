import Vue from 'vue'
import Vuex from 'vuex'

//安装插件
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    locate: 1,
    temp: 0,
    distance: 12,
    isArrived: [
      {isLighted: false},
      {isLighted: false},
      {isLighted: false}
    ],
    popOut: false,
    show: false,
    urlPath: [
      '/one',
      '/two',
      '/three',
      '/four'
    ]
  },
  getters: {},

})

export default store;