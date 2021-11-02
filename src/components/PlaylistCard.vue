<template>
  <div class="playlistcard">
    <div class="img-wrap">
        <img :src="info.picUrl" alt="">
        <p class="desc">{{info.copywriter}}</p>
        <PlayIcon class="playicon-wrap" size='36'/>
    </div>
    <p>{{info.name}}</p>
  </div>
</template>

<script>
import PlayIcon from 'base/PlayIcon.vue'
export default {
  name:'PlaylistCard',
  components:{PlayIcon},
  props:{
      info:{
          type:Object,
          default(){
              return {}
          }
      }
  }
}
</script>

<style scoped>
  .playlistcard{
      width: calc(20% - 8px);
      margin-bottom: 20px;
      margin-right: 10px;
      cursor: pointer;
  }

  .playlistcard:nth-child(5n){
      margin-right: 0;
  }

  .playlistcard>p{
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    margin-top:5px;
  }

  .img-wrap{
      width: 100%;
      padding-top: 100%;
      position: relative;
      height: 0;
      border-radius: 5px;
      overflow: hidden;
  }

  .img-wrap img{
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
  }

  .img-wrap .desc{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4);
    padding: 3px 10px;
    text-align: left;
    color: #fff;
    font-size: 12px;
    transform: translateY(-100%);
    transition: all .3s;
  }

  .img-wrap:hover .desc{
    transform: translateY(0);
  }

  .playicon-wrap{
    position: absolute;
    bottom: 3px;
    right: 3px;
    opacity: 0;
  }

  .img-wrap:hover .playicon-wrap{
    opacity: 1;
  }
</style>