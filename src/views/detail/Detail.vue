<template>
  <div class="detail">
    <DetailTop :info='detailTopInfo'/>
    <Control />
    <List :list='songList'/>
  </div> 
</template>

<script>
import Control from './childComps/Control.vue'
import DetailTop from 'components/DetailTop.vue'
import List from './childComps/List.vue'

import {getListDetail,DetailPlayList,SongInfo} from 'network/detail.js'
import {getMusicInfo} from 'network/songs.js'
export default {
  name:'Detail',
  components:{DetailTop,Control,List},
  data(){
    return {
      detailTopInfo:{},
      songList:[]
    }
  },
  created(){
    getListDetail(this.$route.params.id).then(res => {
      this.detailTopInfo = new DetailPlayList(res)
      getMusicInfo(res.data.playlist.trackIds.map(item => item.id).join(',')).then(res => {
        res.data.songs.map(item => this.songList.push(new SongInfo(item)))
      })
    })
  }
}
</script>

<style scoped>
  .detail{
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