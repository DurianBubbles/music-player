<template>
  <div class="controller">
    <i class="icon-prev"></i>
    <div class="play">
        <i class="icon"></i>
    </div>
    <i class="icon-next"></i>
  </div>
</template>

<script>
export default {
  name:'Controller'
}
</script>

<style scoped>
  .controller{
      height: 60px;
      display: flex;
      align-items: center;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
  }

  .play{
      width: 45px;
      height: 45px;
      position: relative;
      margin: 0 40px;
      background: #d33a31;
      border-radius: 50%;
  }

  .play .icon{
      display: block;
      width: 20px;
      height: 20px;
      background: url(~assets/img/miniplayer/play.svg) no-repeat center/cover;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
  }
  
  .icon-prev{
      display: block;
      width: 25px;
      height: 25px;
      background: url(~assets/img/miniplayer/prev-icon.svg) no-repeat center/cover;
  }

  .icon-next{
      display: block;
      width: 25px;
      height: 25px;
      background: url(~assets/img/miniplayer/next-icon.svg) no-repeat center/cover;
  }
</style>