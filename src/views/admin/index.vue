<template>
  <div class="admin">
    <div class="nav"></div>
    <div class="container">
      <div class="side-bar">
        <button @click="goProduct"> Product </button>
      </div>
      <div class="wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
  methods: {
    goProduct() {
      this.$router.push({ name: "Product"})
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  height: 80px;
  width: 100%;
  background-color: $red;
}

.container {
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;

  .side-bar {
    width: 20%;
    max-width: 200px;
    background-color: rgb(226, 226, 226);
  }

  .wrapper {
    width: 80%;
  }
}
</style>
