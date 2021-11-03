<template>
  <ul class="tabs">
      <li v-for="(item,index) in tittle" :key="index">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name:'Tabs',
  props:['tittle']
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
</style>