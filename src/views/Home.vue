<template>
  <div class="home">
    <div id="nav">
      <button @click="goLoginPage">Admin</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      msg: "hihi",
    };
  },
  methods: {
    goLoginPage() {
      this.$router.push({ name: "Login" });
    },
  }
};
</script>
