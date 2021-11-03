<template>
  <div class="playlistscard">
    <PlaylistCard v-for="(item,index) in playlists" :key="index" :url="item.coverImgUrl"
      :desc="item.playCount | formatDesc"
      :name="item.name"
    />
  </div>
</template>

<script>
import PlaylistCard from 'components/PlaylistCard.vue'
export default {
  name:'PlaylistsCard',
  components:{PlaylistCard},
  props:{
    playlists:{
      type:Array,
      default(){
        return []
      }
    }
  },
  filters:{
    formatDesc(i){
      return '播放量：'+i
    }
  }
}
</script>

<style scoped>
  .playlistscard{
      display: flex;
      width: 80%;
      margin: 0 auto;
      flex-wrap: wrap;
  }
</style>