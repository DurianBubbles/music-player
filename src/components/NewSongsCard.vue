<template>
  <div class="songscard">
    <span>{{index | formatNum}}</span>
    <img :src="info.picUrl" alt="">
    <div class="info">
        <p>{{info.song.album.name}}</p>
        <p>{{info.song.artists[0].name}}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'NewSongsCard',
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
  }

  .songscard:hover{
    background: #f5f5f5;
  }

  .songscard>span{
      font-size: 12px;
      margin-right: 10px;
  }

  .songscard img{
      width: 60px;
      height: 60px;
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