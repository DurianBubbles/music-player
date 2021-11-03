<template>
  <div class="songcard">
    <span class="song-num">{{num}}</span>
    <div class="img-wrap">
        <img :src="url" alt="">
        <PlayIcon class="play-icon" size="26"/>
    </div>
    <ul class="info-wrap">
        <li>{{name}}</li>
        <li>{{art}}</li>
        <li>{{album}}</li>
        <li>{{time}}</li>
    </ul>
  </div>
</template>

<script>
import PlayIcon from 'base/PlayIcon.vue'
export default {
  name:'SongCard',
  components:{PlayIcon},
  props:['name','art','album','time','url','num']
}
</script>

<style scoped>
  .songcard{
      display: flex;
      height: 70px;
      width: 100%;
      padding: 5px 0;
  }

  .songcard:hover{
      background: #e7e7e7;
  }

  .song-num{
    display: block;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    margin-right: 10px;
    font-size: 12px;
    color: #BEBEBE;
  }

  .img-wrap{
      width: 60px;
      height: 60px;
      position: relative;
      margin-right: 30px;
      border-radius: 8px;
      overflow: hidden;
  }

  .img-wrap img{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
  }

  .img-wrap .play-icon{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      cursor: pointer;
  }

  .info-wrap{
      flex: 1;
      display: flex;
  }

  .info-wrap li{
      flex: 1;
      height: 60px;
      line-height: 60px;
      text-align: left;
      font-size: 12px;
      color: #333333;
  }

  .info-wrap li:last-child{
      flex: .5;
  }
</style>