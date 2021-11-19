<template>
  <div class="searchlists">
      <PlaylistCard @click.native="showdetail(item.id)" v-for="(item,index) in getsongCards" :key="index" :url="item.coverImgUrl" :name="item.name" :desc="item.playCount"/>
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
  },
  methods:{
    showdetail(id){
      console.log(id)
      this.$router.push({path:'/layout/detail/'+id})
    }
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