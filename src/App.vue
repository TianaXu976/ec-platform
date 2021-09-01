<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <button @click="goAboutPage"> 按我 </button> -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <!-- <div>{{counter}}</div>
    <button @click="addCount"> +1 </button> -->
      <router-view/>

  </div>
</template>
<script>
export default {
  data() {
    return  {
      counter: 0,
    }
  } ,
  methods: {
    goAboutPage() {
      this.$router.push({name: "About"})
    },
    addCount(){
      this.counter += 1;
    }
  }  
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
