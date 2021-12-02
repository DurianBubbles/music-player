<template>
  <div class="miniplayer" @click="setisShowSearch(false),setHideSonglist(false)">
    <SongInfo
      v-if="isShow" 
      :nowtime="getNowTime | formatCurrent"
      :imgurl="getMiniCardInfo.songimgurl"
      :name="getMiniCardInfo.songname"
      :art="getMiniCardInfo.art"
      :duration="getMiniCardInfo.duration | transform"
    />
    <div class="noneinfo" v-else></div>
    <Controller @isPlay="isplay"/>
    <Mode @position="setVolume" />
    <MusicProgress :current="progressIndex" @position="setcurrent" />
    <audio ref="audio" autoplay @timeupdate="refreshTime" :src="getUrl" @ended="end"></audio>
  </div>
</template>

<script>
import SongInfo from "base/SongInfo.vue";
import Controller from "base/Controller.vue";
import Mode from "base/Mode.vue";
import MusicProgress from "./childComps/MusicProgress.vue";

import { mapActions, mapGetters, mapMutations } from "vuex";
import { formatDuration, formatCurrentTime } from "@/utils/index.js";
export default {
  name: "Miniplayer",
  components: { SongInfo, Controller, MusicProgress, Mode },
  data() {
    return {
      // 播放进度条位置
      progressIndex: "0%"
    };
  },
  computed: {
    ...mapGetters([
      "getMiniCardInfo",
      "getProgressPosition",
      "getNowTime",
      "getUrl",
      "isShow",
      "getLyric",
      "getlyricIndex"
    ]),
  },
  methods: {
    refreshTime() {
      let currentTime = this.$refs.audio.currentTime
      this.setNowTime(currentTime);
      this.progressIndex = this.getProgressPosition;
      if(currentTime.toFixed(0) == this.getLyric[this.getlyricIndex].time){
        this.setlyricIndex(this.getlyricIndex+1)
      }
    },
    setcurrent(pos) {
      this.$refs.audio.currentTime =
        pos * (this.getMiniCardInfo.duration / 1000);
    },
    setVolume(pos) {
      this.$refs.audio.volume = pos;
    },
    isplay(){
      const audio = this.$refs.audio
      if(audio.paused){
        audio.play()
        this.setisPlay(true)
      }else{
        audio.pause()
        this.setisPlay(false)
      }
    },
    end(){
      // 顺序播放
      this.toNext()
    },
    ...mapMutations(["setNowTime",'setlyricIndex','setisPlay','setisShowSearch','setHideSonglist']),
    ...mapActions(['toNext'])
  },
  filters: {
    transform(time) {
      return formatDuration(time);
    },
    formatCurrent(time) {
      return formatCurrentTime(time);
    },
  },
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
  z-index: 20;
}

.noneinfo{
  width: 100px;
  height: 55px;
  background: #fff;
}
</style>