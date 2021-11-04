<template>
  <div id="app">
    <Layout />
    <MiniPlayer />
  </div>
</template>

<script>
import Layout from 'views/layout/Layout.vue'
import MiniPlayer from 'views/miniplayer/Miniplayer.vue'
export default {
  name: 'App',
  components:{Layout,MiniPlayer}
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
