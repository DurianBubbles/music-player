<template>
  <div class="miniplayer">
    <SongInfo :isShow="getAllInfo.isShowInfo" :nowtime="getAllInfo.nowtime | formatCurrent" :imgurl="getAllInfo.songimgurl" :name="getAllInfo.songname" :art="getAllInfo.art" :duration="getAllInfo.duration | transform"/>
    <Controller />
    <Mode />
    <audio ref="audio" autoplay @timeupdate='refreshTime' :src="getAllInfo.url"></audio>
  </div>
</template>

<script>
import SongInfo from "base/SongInfo.vue";
import Controller from "base/Controller.vue";
import Mode from "base/Mode.vue";

import { mapGetters,mapMutations } from "vuex";
import {formatDuration,formatCurrentTime} from '@/utils/index.js'
export default {
  name: "Miniplayer",
  components: { SongInfo, Controller, Mode },
  computed: {
    ...mapGetters(["getAllInfo"]),
  },
  methods:{
    refreshTime(){
      this.setNowTime(this.$refs.audio.currentTime)
    },
    ...mapMutations(['setNowTime'])
  },
  filters:{
    transform(time){
      return formatDuration(time)
    },
    formatCurrent(time){
      return formatCurrentTime(time)
    }
  }
};
</script>

<style scoped>
.miniplayer {
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