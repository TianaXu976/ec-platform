// export const DIALOG_TYPE = 'dialogType';
import { uuid } from "vue-uuid";

const productDialog = {
  namespaced: true,
  state: {
    dialogState: false,
    dialogType: "",
    dialogName: "",
    dialogForm: {
      category: "",
      title: "",
      price: "",
      is_enabled: "",
      id: "",
    },
  },
  mutations: {
    handleDialog(state, {type, payload}) {
      switch (type) {
        case "CLOSE":
          state.dialogState = false;
          state.dialogName = null;
          state.dialogType = type;
          break;

        case "CREATE":
          state.dialogState = true;
          state.dialogName = "新增產品";
          state.dialogType = type;
          state.dialogForm = {
            category: "",
            title: "",
            price: "",
            is_enabled: "已下架",
            id: uuid.v4(),
          };
          break;

        case "EDIT":
          state.dialogState = true;
          state.dialogName = "編輯產品";
          state.dialogType = type;
          state.dialogForm = payload;
          break;

        default:
          break;
      }
    },
  },
};

export default productDialog;
