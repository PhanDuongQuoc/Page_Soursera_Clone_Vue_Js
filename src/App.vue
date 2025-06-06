<template>
  <div id="App">
    <AppHeader/>
    <router-view />
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from './share/Header.vue';
import AppFooter from './share/Footer.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
  margin-top: 60px;
}
</style>
