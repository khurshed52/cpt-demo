<template>
  <div id="app">
     <v-app>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Header/>
    <router-view/>
    </v-app>
   </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components:{
    Header
  }
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  font-family: montserrat, sans-serif;
  font-size: 16px !important;
}

*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

ul li {
  margin: 0px;
  padding: 0px;
}

li {
  list-style: none;
}
#app {
  font-family: montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
