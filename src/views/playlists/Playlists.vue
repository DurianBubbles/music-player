<template>
  <div class="playlists">
    <TopPlaylistCard />  
    <Tabs />
    <PlaylistdCard />
    <Pagination />
  </div>
</template>

<script>
import TopPlaylistCard from './childComps/TopPlaylistCard.vue'
import Tabs from 'base/Tabs.vue'
import PlaylistdCard from './childComps/PlaylistsCard.vue'
import Pagination from 'base/Pagination.vue'
export default {
  name:'Playlists',
  components:{TopPlaylistCard,Tabs,PlaylistdCard,Pagination}
}
</script>

<style scoped>
  .playlists{
    width: calc(100% - 250px);
    position: absolute;
    right: 0;
    top: 49px;
    bottom: 0;
    padding-top: 10px;
    padding-bottom:80px;
    overflow-y: scroll;
  }
</style>