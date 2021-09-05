import Vue from 'vue';
import Vuex from 'vuex';

// modules
import drawer from './drawer';
import products from './products';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    drawer,
    products,
  },
});
