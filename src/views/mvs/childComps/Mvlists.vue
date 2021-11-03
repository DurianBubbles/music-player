<template>
  <div class="mvlist">
    <NewMvsCard v-for="item in 40" :key="item" :info="info"/>
  </div>
</template>

<script>
import NewMvsCard from 'components/NewMvsCard.vue'
export default {
  name:'Mvlists',
  components:{NewMvsCard},
  data(){
      return{
          info:{picUrl:'https://p1.music.126.net/U3JzFKN0T4hSqsbpNcMveA==/109951163426538025.jpg?param=500y260',
          playCount:'320',
          name:'Wuthering Heights',
          artistName:'Kate Bush'}
      }
  }
}
</script>

<style scoped>
  .mvlist{
      display: flex;
      flex-wrap: wrap;
      width: calc(80% + 20px);
      margin: 0 auto;
  }
</style>