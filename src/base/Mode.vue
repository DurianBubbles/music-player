<template>
  <div class="mode">
    <span class="playtmode"></span>
    <span class="list"></span>
    <span class="sound"></span>
    <Progress :prowidth='prowidth' :proheight='proheight' :innerwidth='innerwidth' @position='setposition'/>
  </div>
</template>

<script>
import Progress from './Progress.vue'
export default {
  name:'Mode',
  components:{Progress},
  data(){
    return{
      // 滚动条宽度
      prowidth:'100px',
      // 滚动条高度
      proheight:'3px',
      // 滑块宽度
      innerwidth:'100%'
    }
  },
  methods:{
    setposition(position){
      this.innerwidth = position * 100 + '%'
      this.$emit('position',position)
    }
  }
}
</script>

<style scoped>
  .mode{
      display: flex;
      align-items: center;
  }

  .mode span{
      display: block;
      width: 20px;
      height: 20px;
      margin-right: 20px;
  }

  .playtmode{
      background: url(~assets/img/miniplayer/sort.svg) no-repeat center/cover;
  }

  .list{
      background: url(~assets/img/miniplayer/list.svg) no-repeat center/cover;
  }

  .mode span.sound{
      margin-right: 10px;
      background: url(~assets/img/miniplayer/sound.svg) no-repeat center/cover;
  }
</style>