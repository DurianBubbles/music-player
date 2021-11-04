<template>
  <div class="topcard">
    <div class="wrap">
      <div class="img-wrap">
        <img v-lazy="imgurl" alt="" />
      </div>
      <div class="content">
        <div class="tag-wrap">精品歌单</div>
        <p class="name">{{ name }}</p>
        <p class="desc">{{ desc }}</p>
      </div>
    </div>
    <div
      class="backgroundcover"
      :style="{ background: `url(${imgurl})` }"
    ></div>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  name: "TopPlaylistCard",
  props: ["imgurl", "name", "desc"],
};
</script>

<style scoped>
.topcard {
  width: 80%;
  height: 172px;
  margin: 0 auto;
  background: #666;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
}

.wrap{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 15px;
  align-items: center;
  z-index: 1;
}

.topcard .wrap .img-wrap {
  width: 140px;
  height: 140px;
  margin-right: 15px;
}

.topcard .wrap .img-wrap img {
  width: 100%;
  height: 100%;
}

.wrap .content {
  height: 140px;
  flex: 1;
  text-align: left;
  overflow: hidden;
}

.wrap .content .tag-wrap {
  width: 90px;
  height: 26px;
  border: 1px solid #e7aa5a;
  font-size: 12px;
  padding: 2px 10px;
  color: #e7aa5a;
  border-radius: 5px;
  text-align: center;
  line-height: 22px;
}

.wrap .content .name {
  color: #fff;
  font-weight: 700;
  line-height: 35px;
  font-size: 16px;
}

.wrap .content .desc {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  font-size: 0.85714rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 9px;
}

.backgroundcover {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 0;
  filter: blur(15px);
}

.mask{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 0;
  background: rgba(0, 0, 0, 0.5);
}
</style>