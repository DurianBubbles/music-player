<template>
  <div class="songsCard">
    <div class="num">{{num}}</div>
    <div class="wrap">
        <div class="title">{{title}}</div>
        <div class="art">{{art}}</div>
        <div class="album">{{album}}</div>
        <div class="duration">{{duration}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'SongsCard',
  props:['num','title','art','album','duration']
}
</script>

<style scoped>
  .songsCard{
      display: flex;
      width: 100%;
      height: 30px;
      font-size: 12px;
      color: #606266;
  }

  .songsCard .num{
      width: 70px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #BEBEBE;
  }
  .songsCard .wrap{
      display: flex;
      width: calc(100% - 70px);
  }

  .songsCard .wrap>div{
      flex: 1;
      height: 30px;
      line-height: 30px;
  }

  .songsCard .wrap>div.duration{
      flex: .5;
  }

  .move{
      background: #fafafa;
  }

  .songsCard:hover{
      background: #EFEFEF;
  }
</style>