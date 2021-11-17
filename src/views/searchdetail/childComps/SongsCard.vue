<template>
  <div class="songsCard">
    <div class="num">01</div>
    <div class="wrap">
        <div class="title">漠河舞厅</div>
        <div class="art">柳爽</div>
        <div class="album">1st.星球</div>
        <div class="duration">05:34</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'SongsCard'
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