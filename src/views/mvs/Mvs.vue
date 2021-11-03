<template>
  <div class="mvs">
    <div class="place">地区：<Tabs class="tab"/></div>
    <div class="type">类型：<Tabs class="tab"/></div>
    <div class="sort">排序：<Tabs class="tab"/></div>
    <Mvlists />
    <Pagination />
  </div>
</template>

<script>
import Tabs from 'base/Tabs.vue'
import Mvlists from './childComps/Mvlists.vue'
import Pagination from 'base/Pagination.vue'
export default {
  name:'Mvs',
  components:{Tabs,Mvlists,Pagination}
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
</style>