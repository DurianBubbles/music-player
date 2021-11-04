<template>
  <div class="miniplayer">
    <SongInfo />
    <Controller />
    <Mode />
    <audio ref="audio"  src='http://m801.music.126.net/20211104141659/a6be4dbadb755ae694db9e0a2635d7a3/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/8076141464/27cc/3457/a19e/2bbc64e2e00c6944cdb0efc02e28e3c6.mp3'></audio>
  </div>
</template>

<script>
import SongInfo from 'base/SongInfo.vue'
import Controller from 'base/Controller.vue'
import Mode from 'base/Mode.vue'
export default {
  name:'Miniplayer',
  components:{SongInfo,Controller,Mode}
        //   console.log(this.$refs.audio.duration/60)
}
</script>

<style scoped>
  .miniplayer{
    height: 60px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
  }
</style>