<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  async created(){
    if(localStorage.token){
      this.$store.dispatch('updateToken',localStorage.token);
    }else{
      let token = (await this.axios.get(`token`)).data;
      localStorage.token = token;
      this.$store.dispatch('updateToken',token);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
