<template>
  <div class="admin">
    <div class="nav"></div>
    <div class="container">
      <div class="side-bar">
        <el-menu
          :default-active="activeItem"
          class="el-menu-vertical-demo"
          @select="handleSelect"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>管理列表</span>
            </template>
            <el-menu-item
              v-for="item in adminItem"
              :index="item.pathName"
              :key="item.pathName"
            >
              {{ item.name }}
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>模擬訂單</span>
            </template>
            <el-menu-item index="2-1">模擬訂單</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data() {
    return {
      activeItem: 'adminProduct',
      adminItem: [
        {
          name: '產品管理',
          pathName: 'adminProduct',
        },
        {
          name: '訂單管理',
          pathName: 'adminOrder',
        },
        {
          name: '優惠卷管理',
          pathName: 'adminCoupon',
        },
      ],
    };
  },
  methods: {
    handleSelect(key) {
      if (key === this.$route.name) return;
      this.$router.push({ name: key });
      this.activeItem = key;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  height: 80px;
  width: 100%;
  border-bottom: 2px solid $grey;
}

.container {
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;

  .side-bar {
    ::v-deep .el-menu {
      border-right: none;
    }
    width: 20%;
    min-width: 200px;
    border-right: 2px solid $grey;
  }

  .wrapper {
    width: 80%;
    min-width: calc(100% - 200px);
    padding: 40px;
  }
}
</style>
