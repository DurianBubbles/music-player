<template>
  <div class="content" :class="{choose:getisShowLyric}" v-if="isShow">
    <div class="wrap">
      <div class="song">
        <div class="left">
          <img class="pointer" src="~assets/img/lyric/pointer.png" alt="" />
          <img class="arm" src="~assets/img/lyric/arm.png" alt="" />
          <div class="img-outer-border">
            <div class="img-outer"> 
              <div class="img-wrap">
                <img
                  :src="getMiniCardInfo.songimgurl"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <p class="songname">{{getMiniCardInfo.songname}}</p>
          <p class="art" @click="position">歌手：<span>{{getMiniCardInfo.art}}</span></p>
          <Scroll ref="lyricsc" class="lyric-wrap" :mouseWheel="true">
            <div class="lryicbox" v-for="(item,index) in lyricrelease" :key="index">
              {{ item.content }}
            </div>
          </Scroll>
        </div>
      </div>
      <div class="bottom"></div>
    </div>
    <div class="bottom">
      <div class="left">
        <div class="block">
          <p>精彩评论</p>
          <CommentCard :imgurl='item.userurl' :name='item.username' :content='item.content' :time='item.time' v-for="(item,index) in getComment.hot" :key="index" />
        </div>
        <div class="block">
          <p>最新评论</p>
          <CommentCard :imgurl='item.userurl' :name='item.username' :content='item.content' :time='item.time' v-for="(item,index) in getComment.new" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentCard from "./childComps/CommentCard.vue";
import Scroll from "base/Scroll.vue";

import {parseLyric} from "@/utils/lrcparse.js";
import {mapGetters} from 'vuex'
export default {
  name: "Lyric",
  components: { CommentCard, Scroll },
  data() {
    return {
      lyricrelease:[]
    };
  },
  methods: {
    position() {
      this.lyricrelease = parseLyric("[00:04.050] [00:12.570]难以忘记初次见你 [00:16.860]一双迷人的眼睛 [00:21.460]在我脑海里 [00:23.960]你的身影 挥散不去 [00:30.160]握你的双手感觉你的温柔 [00:34.940]真的有点透不过气 [00:39.680]你的天真 我想珍惜 [00:43.880]看到你受委屈 我会伤心 [00:48.180]喔 [00:50.340]只怕我自己会爱上你 [00:55.070]不敢让自己靠的太近 [00:59.550]怕我没什么能够给你 [01:04.030]爱你也需要很大的勇气 [01:08.190]只怕我自己会爱上你 [01:12.910]也许有天会情不自禁 [01:17.380]想念只让自己苦了自己 [01:21.840]爱上你是我情非得已 [01:28.810]难以忘记初次见你 [01:33.170]一双迷人的眼睛 [01:37.700]在我脑海里 你的身影 挥散不去 [01:46.360]握你的双手感觉你的温柔 [01:51.120]真的有点透不过气 [01:55.910]你的天真 我想珍惜 [02:00.150]看到你受委屈 我会伤心 [02:04.490]喔 [02:06.540]只怕我自己会爱上你 [02:11.240]不敢让自己靠的太近 [02:15.750]怕我没什么能够给你 [02:20.200]爱你也需要很大的勇气 [02:24.570]只怕我自己会爱上你 [02:29.230]也许有天会情不自禁 [02:33.680]想念只让自己苦了自己 [02:38.140]爱上你是我情非得已 [03:04.060]什么原因 耶 [03:07.730]我竟然又会遇见你 [03:13.020]我真的真的不愿意 [03:16.630]就这样陷入爱的陷阱 [03:20.700]喔 [03:22.910]只怕我自己会爱上你 [03:27.570]不敢让自己靠的太近 [03:32.040]怕我没什么能够给你 [03:36.560]爱你也需要很大的勇气 [03:40.740]只怕我自己会爱上你 [03:45.460]也许有天会情不自禁 [03:49.990]想念只让自己苦了自己 [03:54.510]爱上你是我情非得已 [03:58.970]爱上你是我情非得已 [04:03.000] ");
    },
  },
  computed:{
    ...mapGetters(['getMiniCardInfo','getisShowLyric','getComment','isShow'])
  }
};
</script>

<style scoped>
.content {
  position: absolute;
  top: 49px;
  left: 0;
  right: 0;
  bottom: 60px;
  background: #fff;
  z-index: 15;
  overflow-y: scroll;
  transform: translateY(105%);
  transition: all .5s;
}

.content.choose{
  transform: translate(0);
}

.wrap {
  width: 870px;
  margin: 0 auto;
}

.song {
  width: 100%;
  display: flex;
}

.song .left {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding: 85px 50px;
}

.pointer {
  width: 30px;
  height: 30px;
  position: absolute;
  top: -3%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 15;
}

.arm {
  width: 115px;
  height: 155px;
  position: absolute;
  top: 0%;
  left: 48%;
  z-index: 14;
  transform: rotate(5deg);
  /* transform: rotate(-30deg); */
  transform-origin: 0 0;
}

.img-outer-border {
  width: 320px;
  height: 320px;
  background: #e6e5e6;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-outer {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(-45deg, #333540, #070708, #333540);
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-wrap {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
}

.img-wrap img {
  width: 100%;
  height: 100%;
}

.song .right {
  flex: 1;
  padding-top: 50px;
}

.songname {
  font-size: 22px;
  color: #333333;
  text-align: left;
  margin-bottom: 16px;
}

.art {
  text-align: left;
  font-size: 12px;
  color: #4a4a4a;
  margin-bottom: 20px;
}

.art > span {
  color: #517eaf;
}

.bottom {
  width: 870px;
  margin: 0 auto;
}

.block {
  text-align: left;
  margin-bottom: 20px;
}

.block > p {
  margin-bottom: 20px;
  font-weight: 700;
}

::-webkit-scrollbar {
  background: #ededed;
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background: #d0d0d0;
}

.lyric-wrap {
  height: 350px;
  width: 380px;
  overflow: hidden;
}

.lryicbox{
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-align: left;
  font-size: 14px;
}

.active{
  font-weight: 700;
}
</style>