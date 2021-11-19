<template>
  <div class="searchmvs">
    <NewMvsCard @click.native="tomvdetail(item.id)" v-for="(item,index) in getsongMvs" :key="index" :art="item.artistName" :name="item.name" :playcount="item.playCount" :url="item.cover"/>
  </div>
</template>

<script>
import NewMvsCard from 'components/NewMvsCard.vue'
import {mapGetters} from 'vuex'
export default {
  name:'SearchMvs',
  components:{NewMvsCard},
  computed:{
    ...mapGetters(['getsongMvs'])
  },
  methods:{
    tomvdetail(id){
      this.$router.push('/mvdetail/'+id)
    }
  }
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