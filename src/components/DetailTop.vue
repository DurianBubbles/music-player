<template>
  <div class="detailtop">
    <div class="img-wrap">
        <img src="https://p1.music.126.net/J9CzrcKvr_MRamnIlClgyg==/109951165891721002.jpg?param=400y400" alt="">
    </div>
    <div class="content">
        <p class="title">得饶人处且饶舌</p>
        <div class="art">
            <img src="https://p1.music.126.net/qjIzZM3J-K6ZhPCXmohrcg==/109951166095223324.jpg" alt="">
            <p>性言</p>
            <p>2021-01-01 创建</p>
        </div>
        <div class="playBtn">
            <i></i>
            <p>播放全部</p>
        </div>
        <p>标签：<span>说唱/流行</span></p>
        <p>简介：<span>说唱好才能舌吻好</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailTop'
}
</script>

<style scoped>
  .detailtop{
      width: 100%;
      display: flex;
  }

  .img-wrap{
      width: 200px;
      height: 200px;
      margin-right: 20px;
  }

  .img-wrap img{
      width: 100%;
      height: 100%;
  }

  .content{
      flex: 1;
      display: flex;
      flex-direction: column;
  }
</style>