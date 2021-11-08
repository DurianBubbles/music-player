<template>
  <div class="card">
      <div class="img-wrap">
          <img src="https://p4.music.126.net/TQjUaPU-HXViM9h-v_OBGQ==/109951166343505673.jpg?param=80y80" alt="">
      </div>
      <div class="txt-wrap">
          <p class="cont">不是噶系：<span>我们一定会一起去看告五人~</span></p>
          <p class="time">2021-11-08 11:28:11</p>
      </div>
  </div>
</template>

<script>
export default {
  name:'CommentCard'
}
</script>

<style scoped>
  .card{
      width: 100%;
      display: flex;
      padding-top: 20px;
  }

  .img-wrap{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
  }

  .img-wrap img{
      width: 100%;
      height: 100%;
  }

  .txt-wrap{
      flex: 1;
      text-align: left;
      padding-bottom: 20px;
      border-bottom: 1px solid #f2f2f1;
  }

  .cont{
      font-size: 12px;
      color: #517eaf;
      line-height: 20px;
  }

  .cont>span{
      color: #4a4a4a;
  }

  .time{
      font-size: 12px;
      color: #BEBEBE;
      line-height: 20px;
  }
</style>