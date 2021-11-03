<template>
  <div class="songlist">
    <SongCard v-for="item in 100" :key="item"/>
  </div>
</template>

<script>
import SongCard from 'base/SongCard.vue'
export default {
  name:'Songlist',
  components:{SongCard}
}
</script>

<style scoped>
  .songlist{
      width: 80%;
      margin: 0 auto;
  }
</style>