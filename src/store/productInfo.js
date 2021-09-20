const productInfo = {
  namespaced: true,
  state: {
    productList: [
      {
        category: "Boy",
        title: "Tom",
        price: "189",
        is_enabled: "已下架",
        id: "001",
      },
    ],
  },
  mutations: {
    handleProduct(state, { type, payload }) {
      switch (type) {
        case "CREATE":
          state.productList = [...state.productList, payload];
          break;

        case "EDIT": {
          const itemIdx = state.productList.findIndex(
            (item) => item.id === payload.id
          );
          state.productList.splice(itemIdx, 1, payload);
          break;
        }

        case "DELETE":
          state.productList = state.productList.filter(
            (item) => item.id !== payload
          );
          break;

        default:
          break;
      }
    },
  },
};

export default productInfo;
