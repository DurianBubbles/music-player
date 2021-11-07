<template>
  <div class="controll">
      <div class="songlist">歌曲列表</div>
      <div class="comment">评论(95)</div>
  </div>
</template>

<script>
export default {
  name:'Control'
}
</script>

<style scoped>
  .controll{
      width: 90%;
      margin: 0 auto;
      display: flex;
  }

  .controll>div{
      font-size: 14px;
      color: #d33a31;
      text-align: center;
      padding:10px 0;
      margin: 0 10px;
      cursor: pointer;
  }

  .controll .songlist{
      border-bottom: 2px solid #d33a31;
      font-weight: 700;
  }

  .controll .comment{
      color:#BEBEBE ;
  }
</style>