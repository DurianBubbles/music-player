<template>
  <div class="discovery">
    <Banner />
    <NewPlaylists />
    <NewSongs />
    <NewMvs />
  </div>
</template>

<script>
import Banner from './childcomps/Banner.vue'
import NewPlaylists from './childcomps/NewPlaylists.vue'
import NewSongs from './childcomps/NewSongs.vue'
import NewMvs from './childcomps/NewMvs.vue'

export default {
  name:'Discovery',
  components:{Banner,NewPlaylists,NewSongs,NewMvs}
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
    padding-bottom:80px;
    overflow-y: scroll;
  }
  ::-webkit-scrollbar{
    background: #ededed;
    width:5px;
  } 

  ::-webkit-scrollbar-thumb{
    background: #D0D0D0;
  }
</style>