<template>
  <div class="discovery">
    <Banner />
    <NewPlaylists></NewPlaylists>
  </div>
</template>

<script>
import Banner from './childcomps/Banner.vue'
import NewPlaylists from './childcomps/NewPlaylists.vue'

export default {
  name:'Discovery',
  components:{Banner,NewPlaylists}
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