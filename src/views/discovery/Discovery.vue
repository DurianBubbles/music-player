<template>
  <div class="discovery">
    <Banner />
    <NewPlaylists />
    <NewSongs />
  </div>
</template>

<script>
import Banner from './childcomps/Banner.vue'
import NewPlaylists from './childcomps/NewPlaylists.vue'
import NewSongs from './childcomps/NewSongs.vue'

export default {
  name:'Discovery',
  components:{Banner,NewPlaylists,NewSongs}
}
</script>

<style scoped>
  .discovery{
    width: calc(100% - 250px);
    position: absolute;
    right: 0;
    top: 49px;
    bottom: 0;
    padding-top: 10px;
    overflow-y: scroll;
  }
</style>