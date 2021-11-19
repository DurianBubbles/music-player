<template>
  <div class="mvs">
    <div class="place">地区：<Tabs class="tab" :tittle="area"/></div>
    <div class="type">类型：<Tabs class="tab" :tittle="type"/></div>
    <div class="sort">排序：<Tabs class="tab" :tittle="order"/></div>
    <Mvlists :mvslist="mvsData" />
    <Pagination />
  </div>
</template>

<script>
import Tabs from 'base/Tabs.vue'
import Mvlists from './childComps/Mvlists.vue'
import Pagination from 'base/Pagination.vue'

import {getAllMvs} from 'network/mvs.js'
export default {
  name:'Mvs',
  components:{Tabs,Mvlists,Pagination},
  created(){
    this.getMvsData()
  },
  data(){
    return{
      // Mvlists组件内容
      mvsData:[],
      // 地区title
      area:['全部','内地','港台','欧美','日本','韩国'],
      // 类型title
      type:['全部','官方版','原生','现场版','网易出品'],
      // 排序title
      order:['上升最快','最热','最新']
    }
  },
  methods:{
    getMvsData(){
      getAllMvs().then(res => {
        this.mvsData = res.data.data
      })
    }
  }
}
</script>

<style scoped>
  .mvs{
    width: calc(100% - 250px);
    position: absolute;
    right: 0;
    top: 49px;
    bottom: 0;
    padding-top: 10px;
    padding-bottom:80px;
    overflow-y: scroll;
  }

  .mvs>div:not(:last-child){
    width: 80%;
    margin: 0 auto;
    display: flex;
    line-height: 38px;
    font-size: 12px;
  }

  .tab{
    justify-content: flex-start;
    width: 92%;
  }

  ::-webkit-scrollbar{
    background: #ededed;
    width:5px;
  } 

  ::-webkit-scrollbar-thumb{
    background: #D0D0D0;
  }
</style>