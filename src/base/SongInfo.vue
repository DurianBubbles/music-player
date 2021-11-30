<template>
  <div class="songinfo">
    <div class="img-wrap" @click="isShowLyric">
      <div class="inner-img">
        <img
        :src="imgurl"
        alt=""
      />
      </div>
      <div class="cover-wrap" v-if="getisShowLyric == false">
        <img src="~assets/img/miniplayer/updown.svg" alt="">
      </div>
      <div class="cover-wrap" v-else>
        <img src="~assets/img/miniplayer/downup.svg" alt="">
      </div>
      <div class="cover"></div>
    </div>
    <div class="info" >
      <p class="title">
        <span class="songname">{{name}} - </span>
        <span class="art">{{art}}</span>
      </p>
      <p class="progress">
        <span class="now">{{nowtime}} / </span>
        <span class="duration">{{duration}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import {mapMutations,mapGetters} from 'vuex'
export default {
  name: "SongInfo",
  props:['imgurl','name','art','duration','nowtime'],
  methods:{
    isShowLyric(){
      this.setisShowLyric()
    },
    ...mapMutations(['setisShowLyric'])
  },
  computed:{
    ...mapGetters(['getisShowLyric'])
  }
};
</script>

<style scoped>
.songinfo {
  height: 40px;
  display: flex;
  align-items: center;
}

.img-wrap {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.img-wrap .inner-img img {
  width: 100%;
  height: 100%;
  filter: blur(1px);
}

.inner-img{
  z-index: 2;
}

.cover-wrap{
  width: 25px;
  height: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 1;
}

.cover-wrap img{
  width: 100%;
  height: 100%;
}

.cover{
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  background: rgb(0, 0, 0,.2);
}

.info p {
  line-height: 20px;
  text-align: left;
}

.info .title {
  color: #333333;
  font-size: 13px;
}

.info .title .art {
  color: #5c5c5c;
  font-size: 12px;
}

.info .progress {
  color: #5c5c5c;
  font-size: 12px;
}
</style>