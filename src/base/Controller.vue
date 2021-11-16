<template>
  <div class="controller">
    <i class="icon-prev" @click="toPrev"></i>
    <div class="play" @click="isPlay">
        <i class="icon" :class="{active:getisPlay}"></i>
    </div>
    <i class="icon-next" @click="toNext"></i>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name:'Controller',
  methods:{
    isPlay(){
      this.$emit('isPlay')
    },
    ...mapActions(['toPrev','toNext'])
  },
  computed:{
    ...mapGetters(['getisPlay'])
  }
}
</script>

<style scoped>
  .controller{
      height: 60px;
      display: flex;
      align-items: center;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
  }

  .play{
      width: 45px;
      height: 45px;
      position: relative;
      margin: 0 40px;
      background: #d33a31;
      border-radius: 50%;
      cursor: pointer;
  }

  .play .icon{
      display: block;
      width: 20px;
      height: 20px;
      background: url(~assets/img/miniplayer/play.svg) no-repeat center/cover;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
  }

  .play .icon.active{
    background: url(~assets/img/miniplayer/pause.svg) no-repeat center/cover;
  }
  
  .icon-prev{
      display: block;
      width: 25px;
      height: 25px;
      background: url(~assets/img/miniplayer/prev-icon.svg) no-repeat center/cover;
      cursor: pointer;
  }

  .icon-next{
      display: block;
      width: 25px;
      height: 25px;
      background: url(~assets/img/miniplayer/next-icon.svg) no-repeat center/cover;
      cursor: pointer;
  }
</style>