<template>
  <div class="list">
      <div class="notice">
          <p>音乐标题</p>
          <p>歌手</p>
          <p>专辑</p>
          <p>时长</p>
      </div>
      <SongCard @click.native="playmusic(index)" v-for="(item,index) in list" :key="index" :name='item.songName' :art='item.art' :album='item.album' :time='item.duration' :url='item.songImgUrl' :num='index' />
  </div>
</template>

<script>
import SongCard from 'base/SongCard.vue'

import {mapActions} from 'vuex'
export default {
  name:'List',
  components:{SongCard},
  props:['list'],
  methods:{
    playmusic(index){
      this.setList({idlist:this.list.map(item => item.id),index})
    },
    ...mapActions(['setList'])
  }
}
</script>

<style scoped>
  .list{
      width: 90%;
      margin: 0 auto;
  }

  .notice{
      width: 100%;
      padding-left: 160px;
      display: flex;
  }

  .notice>p{
      flex: 1;
      text-align: left;
      height: 30px;
      line-height: 30px;
      font-size: 12px;
  }

  .notice>p:last-child{
      flex: .5;
  }
</style>