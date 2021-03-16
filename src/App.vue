<template>
  <div id="app">
     <v-app>
       <router-view/>
    </v-app>
   </div>
</template>

<style>
body {
  margin: 0px;
  padding: 0px;
  font-family: 'Barlow', sans-serif;
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
  font-family: 'Barlow', sans-serif;
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
