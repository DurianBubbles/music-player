<template>
  <div id="app">
    <!-- <Layout /> -->
    <MiniPlayer />
    <Songlist />
    <router-view></router-view>
  </div>
</template>

<script>
// import Layout from 'views/layout/Layout.vue'
import MiniPlayer from 'views/miniplayer/Miniplayer.vue'
import Songlist from 'components/Songlist.vue'
export default {
  name: 'App',
  components:{MiniPlayer,Songlist}
  // Layout,
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
