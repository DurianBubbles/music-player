<template>
  <div class="mvcard">
    <div class="img-wrap">
        <img v-lazy="url" alt="">
        <PlayIcon class="playicon"/>
        <div class="count-wrap">
          <span class="play-icon"></span>
          <p class="playnum">{{playcount | filterplaycount}}</p>
        </div>
    </div>
    <p class="name">{{name}}</p>
    <p class="artists">{{art}}</p>
  </div>
</template>

<script>
import PlayIcon from 'base/PlayIcon.vue'
import {formatNumber} from '@/utils/index.js'
export default {
  name:'NewMvsCard',
  components:{PlayIcon},
  props:['url','playcount','name','art'],
  filters:{
    filterplaycount(playcount){
      return formatNumber(playcount)
    }
  }
}
</script>

<style scoped>
  .mvcard{
    box-sizing: border-box;
      width: 25%;
      cursor: pointer;
      padding: 0 10px;
      margin-bottom: 10px;
  }

  .mvcard:nth-child(4n){
      margin-right: 0;
  }

  .img-wrap{
    width: 100%;
    height: 0;
    padding-top: 60%;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 5px;
  }

   .img-wrap .count-wrap{
     display: flex;
     position: absolute;
     top: 0;
     right: 0;
     align-items: center;
   }

  .img-wrap .count-wrap .playnum{
    font-size: 12px;
    color: #fff;
    line-height: 20px;
  }

  .img-wrap .count-wrap  .play-icon{
    display: block;
    width: 13px;
    height: 13px;
    background: url(~assets/img/discovery/playicon.svg) no-repeat center/cover;
    margin-right: 2px;
  }

  .img-wrap .playicon{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    opacity: 0;
  }

  .img-wrap:hover .playicon{
    opacity: 1;
  }

  .img-wrap img{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
  }

  

  .mvcard>p{
      font-size: 12px;
      text-align: left;
      line-height: 20px;
  }

  .mvcard .name{
      color: #4a4a4a;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }

  .mvcard .artists{
      color: #BEBEBE;
  }
</style>