<template>
  <div class="searchSongs">
    <ul class="title-wrap">
        <li class="title">音乐标题</li>
        <li class="art">歌手</li>
        <li class="album">专辑</li>
        <li class="duration">时长</li>
    </ul>
    <SongsCard @click.native="playmusic(index)" :class="{move:isMove(index)}" :num="index+1 | formatNum" :title="item.name" :art="item.artists.map(item => item.name).join('/')" :album="item.album.name" :duration="item.duration" v-for="(item,index) in getsonglists" :key="index"/>
  </div>
</template>

<script>
import SongsCard from './SongsCard.vue'
import {mapGetters,mapActions} from 'vuex'
import {formatNum} from '@/utils/index.js'
export default {
  name:'SearchSongs',
  components:{SongsCard},
  methods:{
    isMove(i){
      return i%2 == 1 ? true :false
    },
    playmusic(index){
      this.setList({idlist:this.getsonglists.map(item => item.id),index})
    },
    ...mapActions(['setList'])
  },
  computed:{
    ...mapGetters(['getsonglists'])
  },
  filters:{
    formatNum(value){
      return formatNum(value)
    }
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