<template>
  <div class="songs">
    <Tabs :tittle="tabs"/>
    <Songlist :info='songlist'/>
  </div>
</template>

<script>
import Tabs from 'base/Tabs.vue'
import Songlist from './childComps/Songlist.vue'
import {getTopSongs} from 'network/songs.js'
export default {
  name:'Songs',
  components:{Tabs,Songlist},
  data(){
    return{
      // Tabs组件文本内容
      tabs:[
        "全部",
        "华语",
        "欧美",
        "日本",
        "韩国"
      ],
      // Songlist组件内容
      songlist:[]
    }
  },
  created(){
    this.getSonglist()
  },
  methods:{
    async getSonglist(type){
      getTopSongs(type).then(res => {
        this.songlist = res.data.data
      })
    }
  }
}
</script>

<style scoped>
  .songs{
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