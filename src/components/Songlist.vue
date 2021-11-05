<template>
  <div class="songlist">
    <div class="nav">
        <p>播放列表</p>
        <p>历史记录</p>
    </div>
    <div class="info">
        <p class="total">总共{{getPlayList.length}}首</p>
        <div class="remove">
            <span class="icon"></span>
            <p class="txt">清空</p>
        </div>
    </div>
    <div class="list-wrap">
     <Songlistcard :title="item.songname" :art="item.art" :duration="item.duration" v-for="(item,index) in getPlayList" :key="index"/>
    </div>
  </div>
</template>

<script>
import Songlistcard from 'base/Songlistcard.vue'
import {mapGetters} from 'vuex'
export default {
  name:'Songlist',
  components:{Songlistcard},
  computed:{
      ...mapGetters(['getPlayList'])
  }
}
</script>

<style scoped>
  .songlist{
      position: fixed;
      top: 0;
      right: 0;
      bottom: 60px;
      width: 400px;
      background: #fff;
      z-index: 11;
  }

  .nav{
      height: 40px;
      display: flex;
      justify-content: center;
  }

  .nav p{
      padding: 5px 10px;
      line-height: 30px;
      font-size: 15px;
  }

  .info{
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 0;
      margin: 0 25px;
      color: #4a4a4a;
      border-bottom: 1px solid #f2f2f1;
  }

  .info .total{
      font-size: 12px;
      line-height: 30px;

  }

  .info .remove{
      display: flex;
      align-items: center;
  }

  .info .remove .icon{
      display: block;
      width: 15px;
      height: 15px;
      margin-right: 5px;
      background: url(~assets/img/miniplayer/delete.svg) no-repeat center/cover;
  }

  .info .remove .txt{
      height: 30px;
      line-height: 30px;
      font-size: 12px;
  }
</style>