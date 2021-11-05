<template>
  <div class="songinfo">
    <div class="img-wrap" >
      <img
        :src="imgurl"
        alt=""
      />
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
export default {
  name: "SongInfo",
  props:['imgurl','name','art','duration','nowtime']
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
}

.img-wrap img {
  width: 100%;
  height: 100%;
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