<template>
  <div class="songscard">
    <span>{{index | formatNum}}</span>
    <div class="img-wrap">
      <img :src="info.picUrl" alt="">
      <PlayIcon class="playicon" size='22'/>
    </div>
    <div class="info">
        <p>{{info.song.album.name}}</p>
        <p>{{info.song.artists[0].name}}}</p>
    </div>
  </div>
</template>

<script>
import PlayIcon from 'base/PlayIcon.vue'
export default {
  name:'NewSongsCard',
  components:{PlayIcon},
  props:{
    info:{
      type:Object,
      default(){
        return {}
      }
    },
    index:{
      type:Number
    }
  },
  filters:{
    formatNum(i){
      const t = '00'+(i+1)
      return t.slice(t.length-2,t.length)
    }
  }
}
</script>

<style scoped>
  .songscard{
      width: 50%;
      height: 80px;
      display: flex;
      padding: 10px 10px;
      align-items: center;
      cursor: pointer;
  }

  .songscard:hover{
    background: #f5f5f5;
  }

  .songscard>span{
      font-size: 12px;
      margin-right: 10px;
  }

  .songscard .img-wrap{
    width: 60px;
    height: 60px;
    position: relative;
  }

  .songscard .img-wrap .playicon{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  .songscard img{
      width: 100%;
      height: 100%;
  }

  .songscard .info{
      flex: 1;
      font-size: 12px;
      text-align: left;
      margin-left: 20px;
  }

  .songscard .info>p{
      line-height: 30px;
  }
</style>