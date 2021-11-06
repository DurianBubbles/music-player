<template>
  <div class="card">
    <p class="title" :class="{active:isActive}">{{title}}</p>
    <p class="art">{{art}}</p>
    <p class="time">{{duration}}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name:'Songlistcard',
  props:['title','art','duration','index'],
  computed:{
    isActive(){
      return this.index == this.getCurrentIndex ? true : false
    },
    ...mapGetters(['getCurrentIndex'])
  }
}
</script>

<style scoped>
  .card{
      width: 100%;
      height: 30px;
      display: flex;
      padding-left: 15px;
  }

  .card:hover{
    background: #e2e2e2;
  }

  .card p{
      font-size: 12px;
      line-height: 30px;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }

  .title{
      color: #333333;
      width: 150px;
  }

  .art,.time{
      color: #606266;
  }

  .art{
      width: 150px;
  }

  .time{
      width: 100px;
  }

  .active{
    color: #d33a31;
  }
</style>