<template>
  <div class="searchlists">
      <PlaylistCard v-for="(item,index) in getsongCards" :key="index" :url="item.coverImgUrl" :name="item.name" :desc="item.playCount"/>
  </div>
</template>

<script>
import PlaylistCard from 'components/PlaylistCard'
import {mapGetters} from 'vuex'
export default {
  name:'SearchLists',
  components:{PlaylistCard},
  computed:{
    ...mapGetters(['getsongCards'])
  }
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