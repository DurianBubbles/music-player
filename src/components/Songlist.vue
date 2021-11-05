<template>
  <div class="songlist">
    <div class="nav">
        <p>播放列表</p>
        <p>历史记录</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'Songlist'
}
</script>

<style scoped>
  .songlist{
      position: fixed;
      top: 0;
      right: 0;
      bottom: 60px;
      width: 400px;
      background: #fff;
      z-index: 11;
  }
</style>