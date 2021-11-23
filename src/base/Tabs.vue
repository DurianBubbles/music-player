<template>
  <ul class="tabs">
      <li @click="changeIndex(index)" v-for="(item,index) in tittle" :key="index" :class="{clicked:isclick(index)}">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name:'Tabs',
  props:['tittle','currentIndex','currentTag'],
  methods:{
    isclick(index){
      return this.currentIndex == index ? true : false
    },
    changeIndex(index){
      this.$emit('changeIndex',{index:index,currentTag:this.currentTag})
    }
  }
}
</script>

<style scoped>
  .tabs{
      width: 80%;
      height: 38px;
      margin: 0 auto;
      display: flex;
      justify-content: flex-end;
  }

  .tabs li{
      display: block;
      color:#7F7F81;
      text-align: center;
      font-size: 12px;
      height: 100%;
      line-height: 38px;
      cursor: pointer;
      margin: 0 10px;
  }

  .tabs li.clicked{
    color: #d33a31;
  }
</style>