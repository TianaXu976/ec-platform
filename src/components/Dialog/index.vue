<template>
  <el-dialog
    :visible.sync="dialogState"
    width="70%"
    :before-close="handleClose"
  >
    <template slot="title"><h4>{{ dialogName }}</h4></template>
    <template slot>
      <form class="addForm">
        <label>
          類別
          <input type="text" id="category" />
        </label>
        <label>
          品項
          <input type="text" id="title" />
        </label>
        <label>
          價格
          <input type="text" id="price" />
        </label>
        <label>
          上架狀態
          <el-switch active-value="上架中" inactive-value="已下架"> </el-switch>
        </label>
      </form>
    </template>

    <span slot="footer" class="dialog-footer">
      <el-button @click="handleDialog('CLOSE')">取消</el-button>
      <el-button
        type="primary"
        @click="
          handleDialog('CLOSE');
          submitNewProduct();
        "
        >確認</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "FormDialog",
  props: {
    submitNewProduct: Function,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState("productDialog", ["dialogState", "dialogName"]),
  },
  methods: {
    ...mapMutations('productDialog', ["handleDialog"]),

    handleClose(done) {
      this.$confirm("編輯尚未儲存，確定要離開嗎？", {
        confirmButtonText: "確定",
        cancelButtonText: "取消",
      })
        .then(() => {
          done();
          this.handleDialog("CLOSE");
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.addForm {
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  label {
    padding: 20px;
  }
}
</style>


