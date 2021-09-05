const UPDATE_PRODUCT_LIST = 'UPDATE_PRODUCT_LIST';
const UPDATE_EDIT_PRODUCT = 'UPDATE_EDIT_PRODUCT';

const drawer = {
  namespaced: true,
  state: {
    productList: [
      {
        category: 'Boy',
        title: 'Tom',
        price: '189',
        is_enabled: '已下架',
      },
    ],
    editInfo: {
      index: 0,
      product: {
        category: '',
        title: '',
        price: '',
        is_enabled: '',
      },
    },
  },
  actions: {
    updateProductList({ commit }, payload) {
      commit(UPDATE_PRODUCT_LIST, payload);
    },
    addProduct({ state, commit }, payload) {
      commit(UPDATE_PRODUCT_LIST, [...state.productList, payload]);
    },
    updateEditProduct({ commit }, editInfo) {
      commit(UPDATE_EDIT_PRODUCT, editInfo);
    },
    saveProduct({ state, commit }) {
      let copyProductList = state.productList;
      copyProductList.splice(state.editInfo.index, 1, state.editInfo.product);
      commit(UPDATE_PRODUCT_LIST, copyProductList);
    },
  },
  mutations: {
    [UPDATE_PRODUCT_LIST](state, payload) {
      state.productList = payload;
    },
    [UPDATE_EDIT_PRODUCT](state, editInfo) {
      state.editInfo = editInfo;
    },
  },
};

export default drawer;