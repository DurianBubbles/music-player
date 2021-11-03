<template>
  <ul class="tabs">
      <li v-for="(item,index) in btninfo" :key="index">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name:'Tabs',
  data(){
      return{
          btninfo:['全部','欧美','华语','流行','说唱','摇滚','民谣','电子','轻音乐','影视原声','ACG','怀旧','治愈','旅行']
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
      color: #d33a31;
      text-align: center;
      padding: 0 10px;
      font-size: 12px;
      height: 100%;
      line-height: 38px;
  }
</style>