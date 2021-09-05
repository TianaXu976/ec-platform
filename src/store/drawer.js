export const UPDATE_DRAWER_COMPONENT = 'updateDrawer';

const drawer = {
  namespaced: true,
  state: {
    drawerType: null,
    drawerName: '',
    drawerTitle: '',
  },
  actions: {
    updateDrawer({ commit }, payload) {
      commit(UPDATE_DRAWER_COMPONENT, payload);
    },
  },
  mutations: {
    [UPDATE_DRAWER_COMPONENT](state, { type, payload }) {
      switch (type) {
        case 'close':
          state.drawerType = 'close';
          state.drawerName = null;
          state.drawerTitle = null;
          break;

        case 'open':
          state.drawerType = 'open';
          state.drawerName = payload.name;
          state.drawerTitle = payload.title;
          break;

        case 'edit':
          state.drawerType = 'edit';
          state.drawerName = payload.name;
          state.drawerTitle = payload.title;
          break;

        default:
          break;
      }
    },
  },
};

export default drawer;
