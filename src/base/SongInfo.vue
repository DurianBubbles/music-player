<template>
  <div class="songinfo">
    <div class="img-wrap">
      <img
        src="https://p2.music.126.net/AChXKfEyAyYQMQTKjSnYTw==/109951166162669700.jpg?param=80y80"
        alt=""
      />
    </div>
    <div class="info">
      <p class="title">
        <span class="songname">Love Story(Version) - </span>
        <span class="art">Taylor Swift</span>
      </p>
      <p class="progress">
        <span class="now">02:04 / </span>
        <span class="duration">03:55</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongInfo",
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