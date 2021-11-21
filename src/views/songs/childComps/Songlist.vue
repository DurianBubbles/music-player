<template>
  <div class="songlist">
    <SongCard
      :name="item.name"
      :art="item.artists[0].name"
      :album="item.album.name"
      :time="item.duration"
      :url="item.album.picUrl"
      :num="index+1"
      v-for="(item, index) in info"
      :key="index"
      @click.native="playmusic(index)"
    />
  </div>
</template>
 
<script>
import SongCard from "base/SongCard.vue";
import {mapActions} from 'vuex'
export default {
  name: "Songlist",
  components: { SongCard },
  props: ["info"],
  methods:{
    playmusic(index){
      this.setList({idlist:this.info.map(item => item.id),index})
    },
    ...mapActions(['setList'])
  }
};
</script>

<style scoped>
.songlist {
  width: 80%;
  margin: 0 auto;
}
</style>