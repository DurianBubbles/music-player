<template>
  <div class="playlistcard">
    <div class="img-wrap">
        <img :src="info.picUrl" alt="">
    </div>
    <p>{{info.name}}</p>
  </div>
</template>

<script>
export default {
  name:'PlaylistCard',
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
</style>