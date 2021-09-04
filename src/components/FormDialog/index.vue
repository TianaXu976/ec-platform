<template>
  <el-dialog
    title="Tips"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
    <span>This is a message</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleOpen(false)">Cancel</el-button>
      <el-button type="primary" @click="dialogVisible = false"
        >Confirm</el-button
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
  },
  data() {
    return {

    }
  },
  methods: {
     handleClose(done) {
       this.$confirm('Are you sure to close this dialog?')
          .then(() => {
            done();
          })
          .catch(() => {});
     },

     
  }
}
</script>


