<template>
  <div class="card">
    <p class="title">{{title}}</p>
    <p class="art">{{art}}</p>
    <p class="time">{{duration}}</p>
  </div>
</template>

<script>
export default {
  name:'Songlistcard',
  props:['title','art','duration']
}
</script>

<style scoped>
  .card{
      width: 100%;
      height: 30px;
      display: flex;
      padding-left: 15px;
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
</style>