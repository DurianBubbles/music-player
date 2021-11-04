<template>
  <div class="newsongs">
      <Title>最新音乐</Title>
      <div class="card-box">
          <NewSongsCard @click.native="setUrl(item.id)" v-for="(item,index) in songs" :key="index" :info="item" :index="index"></NewSongsCard>
      </div>
  </div>
</template>

<script>
import Title from 'base/Tittle.vue'
import NewSongsCard from 'components/NewSongsCard.vue'

import {getNewSongs} from 'network/discovery.js'
import {mapActions} from 'vuex'

export default {
  name:'NewSongs',
  components:{Title,NewSongsCard},
  created(){
      getNewSongs().then(res => {
          this.songs = res.data.result
      })
  },
  data(){
      return {
        songs:[]
      }
  },
  methods:{
    ...mapActions(['setUrl'])
  }
}
</script>

<style scoped>
  .newsongs{
      width: 80%;
      margin: 0 auto;
  }

  .card-box{
      display: flex;
      width: 100%;
      flex-wrap: wrap;
  }
</style>