<template>
  <div class="mvdetail">
    <div class="wrap">
      <div class="top">
        <p>mv详情</p>
        <video
          class="mvvideo"
          :src="getmvurl"
          controls
          controlsList="nodownload"
        ></video>
      </div>
      <div class="info">
        <div class="info-top">
          <div class="img-wrap">
            <img
              src="https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg?param=120y120"
              alt=""
            />
          </div>
          <p>{{ getmvInfo.artistName }}</p>
        </div>
        <p class="desc">{{ getmvInfo.name }}</p>
        <p class="taps">
          <span class="pushtime">发布：{{ getmvInfo.publishTime }}</span
          ><span>播放：{{ getmvInfo.playCount }}次</span>
        </p>
      </div>
      <div
        class="commentnone"
        v-if="getmvcomment.hot.length == 0 && getmvcomment.new.length == 0"
      >
        <p>暂时还没有评论哦~</p>
      </div>
      <div class="bottom" v-else>
        <div class="block" v-if="getmvcomment.hot.length !== 0">
          <p>精彩评论</p>
          <CommentCard
            :imgurl="item.user.avatarUrl"
            :name="item.user.nickname"
            :content="item.content"
            :time="item.time"
            v-for="(item, index) in getmvcomment.hot"
            :key="index"
          />
        </div>
        <div class="block" v-if="getmvcomment.new.length !== 0">
          <p>最新评论</p>
          <CommentCard
            :imgurl="item.user.avatarUrl"
            :name="item.user.nickname"
            :content="item.content"
            :time="item.time"
            v-for="(item, index) in getmvcomment.new"
            :key="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentCard from "views/lyric/childComps/CommentCard.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "MvDetail",
  components: { CommentCard },
  created() {
    this.getMvDetailAllInfo({ id: this.$route.params.id });
  },
  computed: {
    ...mapGetters(["getmvcomment", "getmvInfo", "getmvurl"]),
  },
  methods: {
    ...mapActions(["getMvDetailAllInfo"]),
  },
};
</script>

<style scoped>
.mvdetail {
  position: absolute;
  top: 49px;
  left: 0;
  right: 0;
  bottom: 60px;
  background: #fff;
  overflow-y: scroll;
}

.wrap {
  width: 60%;
  margin: 0 auto;
}

.bottom .block {
  width: 100%;
  margin-bottom: 20px;
}

.bottom .block > p {
  margin-bottom: 20px;
  font-weight: 700;
  text-align: left;
}

.top {
  text-align: left;
}

.top > p {
  margin: 20px 0;
  font-weight: 700;
}

.mvvideo {
  width: 100%;
  height: 450px;
}

.mvvideo:focus {
  outline: none;
}

.info {
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
}

.info-top {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.info-top .img-wrap {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 5px;
}

.info-top .img-wrap img {
  width: 100%;
  height: 100%;
}

.info-top > p {
  font-size: 15px;
}

.desc {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
}

.taps {
  font-size: 12px;
  color: #bebebe;
}

.pushtime {
  margin-right: 20px;
}

::-webkit-scrollbar {
  background: #ededed;
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background: #d0d0d0;
}
</style>