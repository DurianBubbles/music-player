<template>
  <div class="mvcard">
    <div class="img-wrap">
        <img v-lazy="url" alt="">
        <PlayIcon class="playicon"/>
        <p class="playnum">{{playcount}}</p>
    </div>
    <p class="name">{{name}}</p>
    <p class="artists">{{art}}</p>
  </div>
</template>

<script>
import PlayIcon from 'base/PlayIcon.vue'
export default {
  name:'NewMvsCard',
  components:{PlayIcon},
  props:['url','playcount','name','art']
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

  .img-wrap .playnum{
    display: block;
    width: 30px;
    height: 20px;
    font-size: 12px;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    line-height: 20px;
  }

  .img-wrap .playnum:after{
    content: '';
    display: block;
    position: absolute;
    left: -45%;
    top: 50%;
    transform: translateY(-50%);
    width: 13px;
    height: 13px;
    background: url(~assets/img/discovery/playicon.svg) no-repeat center/cover;
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