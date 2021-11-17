<template>
  <div class="searchlists">
      <PlaylistCard v-for="item in 50" :key="item" url="https://p2.music.126.net/KL-7Odr2cc5cRIUH6SbLeg==/109951166613119051.jpg?param=300y300" name="测试文本" desc="最新推荐"/>
  </div>
</template>

<script>
import PlaylistCard from 'components/PlaylistCard'
export default {
  name:'SearchLists',
  components:{PlaylistCard}
}
</script>

<style scoped>
  .searchlists{
      width: 80%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      padding-top: 30px;
  }
</style>