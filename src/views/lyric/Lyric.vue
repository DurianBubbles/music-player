<template>
  <div class="content">
    <div class="wrap">
      <div class="song">
        <div class="left">
          <img class="pointer" src="~assets/img/lyric/pointer.png" alt="" />
          <img class="arm" src="~assets/img/lyric/arm.png" alt="" />
          <div class="img-outer-border">
            <div class="img-outer">
              <div class="img-wrap">
                <img
                  src="https://p2.music.126.net/UWWjHklcLH_R5Q6soiFyAA==/109951165020226069.jpg?param=400y400"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <p class="songname">Crazy Love</p>
          <p class="art">歌手：<span>Bali Bandits</span></p>
        </div>
      </div>
      <div class="bottom"></div>
    </div>
    <div class="bottom">
        <div class="left">
            <div class="block">
                <p>精彩评论</p>
                <CommentCard v-for="item in 10" :key="item"/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import CommentCard from './childComps/CommentCard.vue'
export default {
  name: "Lyric",
  components:{CommentCard}
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
  /* transform: translateY(105%); */
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

.song .right{
    flex: 1;
    padding-top: 50px;
}

.songname{
    font-size:22px;
    color: #333333;
    text-align: left;
    margin-bottom: 16px;
}

.art{
    text-align: left;
    font-size: 12px;
    color: #4a4a4a;
}

.art>span{
    color: #517eaf;
}

.bottom{
    width: 870px;
  margin: 0 auto;
}

.block{
    text-align: left;
}

.block>p{
    margin-bottom: 20px;
    font-weight: 700;
}

::-webkit-scrollbar{
    background: #ededed;
    width:5px;
  } 

  ::-webkit-scrollbar-thumb{
    background: #D0D0D0;
  }
</style>