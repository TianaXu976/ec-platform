<template>

    <div class="container">
      <h1> Sign in</h1>
      <form @submit="atSubmit">
        <label>
         Username
          <input type="text" id="name" name="username" />
        </label>
        <label>
          Password
          <input type="password" id="pwd" name="password" />
        </label>
        <button type="submit" @click="goNextPage">Sign in</button>
      </form>
    </div>

</template>

<script>
export default {
  name: "Login",
  props: {
    // msg: String,
  },
  // data() {
    // return {
    //   a: 3,
    //   b: 5,
    // };
  // },
  methods: {
    atSubmit(e) {
      e.preventDefault();
    },
    goNextPage() {
      this.$router.push({name: "Admin"})
    }
  },
  computed: {
    // total() {
    //   return this.a + this.b;
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.container{
  width: 400px;
  height: 360px;
  background-color: rgb(237, 250, 239);
  border-radius: 5%;
  padding: 20px 0;

  margin: auto;

}

h1 {
  /* margin: ; */
}

form{
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  label{
    width: 60%;
    display: flex;
    justify-content: space-between;
  }
  input{
    outline: none;
    border: none;
  }
  button{
    margin: 20px 0;
    padding: 10px 20px;
    outline: none;
    border: none;
    background-color: rgb(174, 189, 176);
    color: #fff;
    cursor: pointer;
  }



}

</style>
