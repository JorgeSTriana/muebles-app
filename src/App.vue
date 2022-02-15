<template>
  <div id="app">
    <!-- <AppHeader/> -->
    <router-view></router-view>
  </div>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */
/* import AppHeader from '@/components/AppHeader.vue' */

export default {
  name: 'App',
  components: {
    /* AppHeader */
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/ 
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-decoration: none;
  text-transform: capitalize;
  transition: all .2s linear;
}
</style>
