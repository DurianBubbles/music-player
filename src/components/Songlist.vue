<template>
  <div class="songlist" v-show="getIsShowSonglist">
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
     <Songlistcard @click.native="changsong(index,item.id)" :index="index" :title="item.songname" :art="item.art" :duration="item.duration" v-for="(item,index) in getPlayList" :key="index"/>
    </div>
  </div>
</template>

<script>
import Songlistcard from 'base/Songlistcard.vue'
import {mapGetters,mapMutations,mapActions} from 'vuex' 
export default {
  name:'Songlist',
  components:{Songlistcard},
  computed:{
      ...mapGetters(['getPlayList','getIsShowSonglist'])
  },
  methods:{
      changsong(index,id){
        //   1.改变currentIndex
        this.setcurrentIndex(index)
        // 2.赋值url
        this.getSongUrl(id)
      },
      ...mapMutations(['setcurrentIndex']),
      ...mapActions(['getSongUrl'])
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

  .list-wrap{
    height: calc(100% - 80px);
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