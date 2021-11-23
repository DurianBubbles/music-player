<template>
  <div class="playlistscard">
    <PlaylistCard v-for="(item,index) in playlists" :key="index" :url="item.coverImgUrl"
      :desc="item.playCount | formatDesc"
      :name="item.name"
      @click.native="showdetail(item.id)" 
    />
  </div>
</template>

<script>
import PlaylistCard from 'components/PlaylistCard.vue'
import {formatNumber} from '@/utils/index.js'
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
  methods:{
    showdetail(id){
      this.$router.push({path:'/layout/detail/'+id})
    } 
  },
  filters:{
    formatDesc(i){
      return '播放量：'+ formatNumber(i)
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