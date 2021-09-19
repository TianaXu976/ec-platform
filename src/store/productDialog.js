// export const DIALOG_TYPE = 'dialogType';


 const productDialog = {
  namespaced: true,
  state: {
    dialogState:false,
    dialogName:'',
  },
  mutations: {
    handleDialog(state, payload ) {
      switch (payload){

        case "CLOSE":
          state.dialogState = false;
          state.dialogName = null;
          break;

        case "CREATE":
          state.dialogState = true;
          state.dialogName = "新增產品";
          break;

        case "EDIT":
          state.dialogState = true;
          state.dialogName = "編輯產品";
          break;

        default:
          break;
      }
    }

  },
}

export default productDialog;