<template>
  <el-drawer
    class="drawer"
    :visible="Boolean(drawerName)"
    :title="drawerTitle"
    @close="handleCancel"
    direction="rtl"
    ref="drawer"
    size='25%'
    appendToBody
  >
    <div class="body">
      <component :is="drawerName" />
    </div>
  </el-drawer>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import DrawerProduct from './DrawerProduct.vue';
import CreateOrder from './CreateOrder.vue';

export default {
  name: 'Drawer',
  components: {
    DrawerProduct,
    CreateOrder,
  },
  computed: {
    ...mapState('drawer', ['drawerName', 'drawerTitle']),
  },
  methods: {
    ...mapActions('drawer', ['updateDrawer']),
    handleCancel() {
      this.updateDrawer({ type: 'close' });
    },
  },
};
</script>
<style lang="scss" scoped>
.drawer {
  overflow: hidden;
  ::v-deep .el-drawer__header {
    height: 80px;
    margin-bottom: 0;
    color: #fff;
    padding: 20px;
    background-color: #409eff;
  }
  .body {
    padding: 20px;
    height: calc(100vh - 80px);
    overflow: auto;
  }
}
</style>
