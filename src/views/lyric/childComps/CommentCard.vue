<template>
  <div class="card">
      <div class="img-wrap">
          <img :src="imgurl" alt="">
      </div>
      <div class="txt-wrap">
          <p class="cont">{{name}}：<span>{{content}}</span></p>
          <p class="time">{{time | formatTime}}</p>
      </div>
  </div>
</template>

<script>
import {formatDate} from '@/utils/index.js'
export default {
  name:'CommentCard',
  props:['imgurl','name','content','time'],
  filters:{
      formatTime(value){
          let date = new Date(value)
          return formatDate(date,'yyyy-MM-dd HH:mm:ss')
      }
  }
}
</script>

<style scoped>
  .card{
      width: 100%;
      display: flex;
      padding-top: 20px;
  }

  .img-wrap{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
  }

  .img-wrap img{
      width: 100%;
      height: 100%;
  }

  .txt-wrap{
      flex: 1;
      text-align: left;
      padding-bottom: 20px;
      border-bottom: 1px solid #f2f2f1;
  }

  .cont{
      font-size: 12px;
      color: #517eaf;
      line-height: 20px;
  }

  .cont>span{
      color: #4a4a4a;
  }

  .time{
      font-size: 12px;
      color: #BEBEBE;
      line-height: 20px;
  }
</style>