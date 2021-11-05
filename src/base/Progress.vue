<template>
  <div class="progress" ref="progress" :style='[{width:prowidth},{height:proheight}]' @click="setposition">
    <div class="inner-box" ref="innerbox" :style='{width:innerwidth}'>
      <div class="curcle" v-show="isShow"></div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Progress',
  props:{
      // 进度条宽度
      prowidth:{
          type:String,
          default:'100px'
      },
      // 进度条高度
      proheight:{
          type:String,
          default:'10px'
      },
      // 滑块宽度
      innerwidth:{
        type:String,
        default:'50%'
      },
      // 是否显示圆点
      isShow:{
        type:Boolean,
        default:true
      }
  },
  methods:{
    setposition(e){
      const position = ((e.pageX - this.$refs.progress.offsetLeft) / this.$refs.progress.clientWidth).toFixed(2)
      this.$emit('position',position)
    }
  }
}
</script>

<style scoped>
  .progress{
      background: #F5F5F5;
      cursor: pointer;
  }

  .inner-box{
      width: 20%;
      height: 100%;
      background: #d33a31;
      position: relative;
  }

  .curcle{
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #d33a31;
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(-50%,-50%);
  }

</style>