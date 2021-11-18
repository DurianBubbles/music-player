<template>
  <div class="searchdetail">
     <div class="header">
        <span class="keywords">漠河舞厅</span>
        <span class="found">找到384个结果</span>
     </div>
     <div class="tabs-wrap">
        <div class="showsong" @click="showsongs" :style="{color:songActive}">歌曲</div>
        <div class="showsonglist" @click="showlists" :style="{color:listActive}">歌单</div>
        <div class="showmvs" @click="showmvs" :style="{color:mvsActive}">MV</div>
     </div>
     <router-view></router-view>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name:'SearchDetail',
  created(){
    this.getsearchSongs({keywords:this.$route.params.params,limit:30,offset:0,type:1})
  },
  methods:{
      showsongs(){
          this.$router.push('/layout/search/'+this.$route.params.params+'/songs')
          this.getsearchSongs({keywords:this.$route.params.params,limit:30,offset:0,type:1})
      },
      showlists(){
          this.$router.push('/layout/search/'+this.$route.params.params+'/lists')
          this.getsearchSongs({keywords:this.$route.params.params,limit:30,offset:0,type:1000})
      },
      showmvs(){
          this.$router.push('/layout/search/'+this.$route.params.params+'/mvs')
          this.getsearchSongs({keywords:this.$route.params.params,limit:30,offset:0,type:1004})
      },
      ...mapActions(['getsearchSongs'])
  },
  computed:{
    songActive(){
        return this.$route.path === '/layout/search/'+this.$route.params.params+'/songs' ? '#000' : ''
      },
      listActive(){
        return this.$route.path === '/layout/search/'+this.$route.params.params+'/lists' ? '#000' : ''
      },
      mvsActive(){
        return this.$route.path === '/layout/search/'+this.$route.params.params+'/mvs' ? '#000' : ''
      }
  }
}
</script>

<style scoped>
  .searchdetail{
    width: calc(100% - 250px);
    position: absolute;
    right: 0;
    top: 49px;
    bottom: 0;
    padding-top: 10px;
    padding-bottom: 80px;
    overflow-y: scroll;
    text-align: left;
  }

  .header{
      padding: 20px 30px;
  }

  .header .keywords{
      display: inline-block;
      margin-right: 2px;
      font-size: 24px;
      font-weight: 700;
  }

  .header .found{
      font-size: 12px;
      color:#BEBEBE ;
      letter-spacing: 2px;
  }

  .tabs-wrap{
      padding: 0 30px;
      border-bottom: 1px solid #f2f2f1;
      display: flex;
  }

  .tabs-wrap>div:hover{
    color: #343434;
  }

  .tabs-wrap>div{
      color: #7F7F81;
      padding: 5px 0;
      margin: 0 5px;
      font-size: 15px;
      cursor: pointer;
      /* active-color #000 */
      line-height: 25px;
  }

  ::-webkit-scrollbar{
    background: #ededed;
    width:5px;
  } 

  ::-webkit-scrollbar-thumb{
    background: #D0D0D0;
  }

</style>