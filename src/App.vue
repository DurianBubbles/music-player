<template>
  <div id="app">
    <LayoutHeader />
    <MiniPlayer />
    <Songlist />
    <Lyric />
    <router-view></router-view>
  </div>
</template>

<script>
import MiniPlayer from 'views/miniplayer/Miniplayer.vue'
import Songlist from 'components/Songlist.vue'
import Lyric from 'views/lyric/Lyric.vue'
import LayoutHeader from "components/LayoutHeader.vue";
export default {
  name: 'App',
  components:{MiniPlayer,Songlist,Lyric,LayoutHeader}
}
</script>

<style>
@import './assets/css/reset.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  position: relative;
  height: 100vh;
  overflow: hidden;
}
</style>
