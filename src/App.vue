<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from 'views/layout/Layout.vue'
export default {
  name: 'App',
  components:{Layout}
}
</script>

<style>
@import './assets/css/reset.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
