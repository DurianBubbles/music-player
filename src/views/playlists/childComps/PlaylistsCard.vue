<template>
  <div class="playlistscard">
    <PlaylistCard v-for="item in 50" :key="item" :info="info"/>
  </div>
</template>

<script>
import PlaylistCard from 'components/PlaylistCard.vue'
export default {
  name:'PlaylistsCard',
  components:{PlaylistCard},
  data(){
      return{
          info:{picUrl:'https://p2.music.126.net/dDc1Uwj2D8lGNCK3G_bPnw==/109951166555798684.jpg?param=300y300',copywriter:'播放量31418',name:'大晚上的当然要听古风呀15'}
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