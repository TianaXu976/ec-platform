<template>
  <div class="footer">
    <slot name="footer">
      <el-button type="primary" @click="$emit('cancel')" plain>
        Cancel
      </el-button>
      <el-button type="primary" @click="$emit('confirm')" plain>
        Save
      </el-button>
    </slot>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
