<template>
  <div class="search" v-show="getisShowSearch">
      <div class="block">
          <p class="tittle">热门搜索</p>
          <div class="tags">
              <div>春风吹</div>
              <div>删了吧</div>
              <div>石头计划评选</div>
              <div>年轮</div>
              <div>金玉良缘</div>
              <div>薛之谦</div>
          </div>
      </div>
      <div class="block">
          <p class="tittle">历史搜索</p>
          <div class="tags">
              <div>春风吹</div>
              <div>删了吧</div>
              <div>石头计划评选</div>
              <div>年轮</div>
              <div>金玉良缘</div>
              <div>薛之谦</div>
          </div>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name:'Search',
  computed:{
      ...mapGetters(['getisShowSearch'])
  }
}
</script>

<style scoped>
  .search{
      position: fixed;
      top: 49px;
      right: 0;
      bottom: 60px;
      width: 350px;
      background:#fff;
      z-index: 19;
      text-align: left;
      overflow-y: scroll;
  }

  .block{
      padding: 15px 20px;
  }

  .tittle{
      color: #5c5c5c;
      margin-bottom: 15px;
      font-size: 12px;
  }

  .tags{
      display: flex;
      flex-wrap: wrap;
  }

  .tags>div{
      margin-bottom: 10px;
      margin-right: 5px;
      font-size: 12px;
      cursor: pointer;
      display: inline-block;
      padding: 3px 10px;
      border: 1px solid #D9D9D9;
      border-radius: 5px;
      text-align: center;
  }

  ::-webkit-scrollbar{
    background: #ededed;
    width:5px;
  } 

  ::-webkit-scrollbar-thumb{
    background: #D0D0D0;
  }
</style>