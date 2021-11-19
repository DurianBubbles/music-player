<template>
  <div id="mvlist">
    <NewMvsCard @click.native="tomvdetail(item.id)" :url="item.cover" :playcount="item.playCount" :name="item.name" :art="item.artistName" v-for="(item,index) in mvslist" :key="index"/>
  </div>
</template>

<script>
import NewMvsCard from 'components/NewMvsCard.vue'
export default {
  name:'Mvlists',
  components:{NewMvsCard},
  props:['mvslist'],
  methods:{
    tomvdetail(id){
      this.$router.push('/mvdetail/'+id)
    }
  }
}
</script>

<style scoped>
  #mvlist{
      display: flex;
      flex-wrap: wrap;
      width: calc(80% + 20px);
      margin: 0 auto;
  }
</style>