<template>
  <el-dialog
    :visible.sync="dialogState"
    width="70%"
    :before-close="handleClose"
  >
    <template slot="title"
      ><h4>{{ dialogName }}</h4></template
    >
    <template slot>
      <form class="addForm">
        <label>
          類別
          <input type="text" id="category" v-model="dialogForm.category" />
        </label>
        <label>
          品項
          <input type="text" id="title" v-model="dialogForm.title" />
        </label>
        <label>
          價格
          <input type="text" id="price" v-model="dialogForm.price" />
        </label>
        <label>
          上架狀態
          <el-switch
            active-value="上架中"
            inactive-value="已下架"
            v-model="dialogForm.is_enabled"
          >
          </el-switch>
        </label>
      </form>
    </template>

    <span slot="footer" class="dialog-footer">
      <el-button @click="handleDialog({ type: 'CLOSE' })">取消</el-button>
      <el-button type="primary" @click="handleSubmit()">確認</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Dialog",

  data() {
    return {};
  },
  computed: {
    ...mapState("productDialog", [
      "dialogState",
      "dialogName",
      "dialogForm",
      "dialogType",
    ]),
  },
  methods: {
    ...mapMutations("productDialog", ["handleDialog"]),
    ...mapMutations("productInfo", ["handleProduct"]),

    handleSubmit() {
      this.handleProduct({ type: this.dialogType, payload: { ...this.dialogForm } });
      this.handleDialog({ type: "CLOSE" });
    },

    handleClose(done) {
      this.$confirm("編輯尚未儲存，確定要離開嗎？", {
        confirmButtonText: "確定",
        cancelButtonText: "取消",
      })
        .then(() => {
          done();
          this.handleDialog({ type: "CLOSE" });
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


