<template>
  <div class="searchSongs">
    <ul class="title-wrap">
        <li class="title">音乐标题</li>
        <li class="art">歌手</li>
        <li class="album">专辑</li>
        <li class="duration">时长</li>
    </ul>
    <SongsCard :class="{move:isMove(index)}" :num="index" :title="item.name" :art="item.artists.map(item => item.name).join('/')" :album="item.album.name" :duration="item.duration" v-for="(item,index) in getsonglists" :key="index"/>
  </div>
</template>

<script>
import SongsCard from './SongsCard.vue'
import {mapGetters} from 'vuex'
export default {
  name:'SearchSongs',
  components:{SongsCard},
  data(){
    return{
      songlist:[]
    }
  },
  methods:{
    isMove(i){
      return i%2 == 1 ? true :false
    }
  },
  computed:{
    ...mapGetters(['getsonglists'])
  }
}
</script>

<style scoped>
  .searchSongs{
    width: 100%;
  }

  .title-wrap{
      width: calc(100% - 70px);
      height: 30px;
      display: flex;
      margin-left: 70px;
  }

  .title-wrap>li{
      flex: 1;
      line-height: 30px;
      font-size: 12px;
  }

  .title-wrap>li.duration{
      flex: .5;
  }
</style>