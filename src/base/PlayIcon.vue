<template>
  <div class="icon-wrap" :style="[comsize]">
      <i class="icon"></i>
  </div>
</template>

<script>
export default {
  name:'PlayIcon',
  props:{
      size:{
          type:String,
          default:'36'
      }
  },
  computed:{
      comsize(){
          return {width:this.size+'px',height:this.size+'px'}
      }
  }
}
</script>

<style scoped>
  .icon-wrap{
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    transition: all .3s;
    position: relative;
  }

  .icon-wrap .icon{
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: url(~assets/img/discovery/playicon.svg) no-repeat center/cover;
    width: 50%;
    height: 50%;
  }
</style>