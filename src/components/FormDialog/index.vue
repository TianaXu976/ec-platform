<template>
  <el-dialog
    :visible.sync="dialogVisible"
    width="70%"
    :before-close="handleClose"
  >
    <template slot="title"><slot name="title"></slot></template>
    <template slot><slot name="content"></slot></template>

    <span slot="footer" class="dialog-footer">
      <el-button @click="handleOpen(false)">取消</el-button>
      <el-button
        type="primary"
        @click="
          handleOpen(false);
          submitNewProduct();
        "
        >確認</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "FormDialog",
  props: {
    dialogVisible: Boolean,
    handleOpen: Function,
    submitNewProduct: Function,
  },
  data() {
    return {};
  },
  methods: {
    handleClose(done) {
      this.$confirm("Are you sure to close this dialog?")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
  },
};
</script>


