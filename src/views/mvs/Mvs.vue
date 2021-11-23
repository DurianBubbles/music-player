<template>
  <div class="mvs" ref="mvscroll">
    <div class="place">地区：<Tabs class="tab" :tittle="area" currentTag="area" :currentIndex="currentType.area" @changeIndex="changeTitle"/></div>
    <div class="type">类型：<Tabs class="tab" :tittle="type" currentTag="type" :currentIndex="currentType.type" @changeIndex="changeTitle"/></div>
    <div class="sort">排序：<Tabs class="tab" :tittle="order" currentTag="order" :currentIndex="currentType.order" @changeIndex="changeTitle"/></div>
    <Mvlists :mvslist="mvsData" />
    <Pagination :currentPage="currentPage" :total="total" :pagesize="40" @onPageChange="onPageChange"/>
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
    this.getMvsData('全部','全部','上升最快',40,0)
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
      order:['上升最快','最热','最新'],
      currentType:{area:0,type:0,order:0},
      // 当前页码
      currentPage:1,
      // 总条目
      total:0
    }
  },
  methods:{
    getMvsData(area,type,order,limit,offset){
      getAllMvs(area,type,order,limit,offset).then(res => {
        this.mvsData = res.data.data
        if(res.data.count !== undefined) this.total = res.data.count
      })
    },
    changeTitle(info){
      this.currentType[info.currentTag] = info.index
      this.currentPage = 1
      this.$refs.mvscroll.scrollTop = 0
      this.getMvsData(this.area[this.currentType.area],this.type[this.currentType.type],this.order[this.currentType.order],40,0)
    },
    onPageChange(page){
      this.currentPage = page
      this.$refs.mvscroll.scrollTop = 0
      this.getMvsData(this.area[this.currentType.area],this.type[this.currentType.type],this.order[this.currentType.order],40,(page - 1) * 40)
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