<template>
  <div class="detail">
    <DetailTop :list='getsongIdList' :info='detailTopInfo'/>
    <Control :count="count"/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div> 
</template>

<script>
import Control from './childComps/Control.vue'
import DetailTop from 'components/DetailTop.vue'

import {getListDetail,DetailPlayList,getListDetailComment} from 'network/detail.js'
import {mapGetters} from 'vuex'
export default {
  name:'Detail',
  components:{DetailTop,Control},
  data(){
    return {
      // 顶部信息
      detailTopInfo:{},
      // 评论总数
      count:0
    }
  },
  created(){
    getListDetail(this.$route.params.id).then(res => {
      this.detailTopInfo = new DetailPlayList(res)
      getListDetailComment({id:this.$route.params.id,limit:1,offset:0}).then((res) => {
        this.count = res.data.total
      });
    })
  },
  computed:{
    ...mapGetters(['getsongIdList'])
  }
}
</script>

<style scoped>
  .detail{
    width: calc(100% - 250px);
    position: absolute;
    right: 0;
    top: 49px;
    bottom: 0;
    padding-top: 10px;
    padding-bottom:80px;
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