<template>
  <div class="searchmvs">
    <NewMvsCard v-for="item in 4" :key="item" art="魔眼" name="漠河舞曲" playcount="20" url="https://p1.music.126.net/j8der5yrxRPS290q96eubw==/109951166576145787.jpg?param=500y260"/>
  </div>
</template>

<script>
import NewMvsCard from 'components/NewMvsCard.vue'
export default {
  name:'SearchMvs',
  components:{NewMvsCard}
}
</script>

<style scoped>
  .searchmvs{
      display: flex;
      flex-wrap: wrap;
      width: 80%;
      margin: 0 auto;
      padding-top: 30px;
  }
</style>