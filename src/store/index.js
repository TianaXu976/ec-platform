import Vue from 'vue'
import Vuex from 'vuex'

// modules
import productDialog from './productDialog';
import productInfo from './productInfo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    productDialog,
    productInfo,
  },
})
