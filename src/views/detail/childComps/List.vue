<template>
  <div class="list">
      <div class="notice">
          <p>音乐标题</p>
          <p>歌手</p>
          <p>专辑</p>
          <p>时长</p>
      </div>
      <SongCard @click.native="playmusic(index)" v-for="(item,index) in list" :key="index" :name='item.songName' :art='item.art' :album='item.album' :time='item.duration' :url='item.songImgUrl' :num='index+1' />
  </div>
</template>

<script>
import SongCard from 'base/SongCard.vue'

import {mapActions,mapMutations} from 'vuex'

import {getListDetail,SongInfo} from 'network/detail.js'
import {getMusicInfo} from 'network/songs.js'
export default {
  name:'List',
  components:{SongCard},
  created(){
    getListDetail(this.$route.params.id).then(res => {
      getMusicInfo(res.data.playlist.trackIds.map(item => item.id).join(',')).then(res => {
        res.data.songs.map(item => this.list.push(new SongInfo(item)))
        this.setsongIdList(this.list.map(item => item.id))
      })
    })
  },
  data(){
    return {
      list:[]
    }
  },
  methods:{
    playmusic(index){
      this.setList({idlist:this.list.map(item => item.id),index})
    },
    ...mapActions(['setList']),
    ...mapMutations(['setsongIdList'])
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