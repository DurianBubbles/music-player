<template>
  <!-- 实现功能: -->
  <!-- 1.设置滚动监听灵敏度 props:scrollPosition  1,2,3-->
  <!-- 2.设置是否启用上拉加载更多   props:pullUpLoad    true or false-->
  <!-- 3.监听滚动      $emit:nowposition  携带参数position -->
  <!-- 4.监听上拉加载   $emit:loadmore -->
  <!-- 5.设置滚动位置   scrollTo(x,y,time)  x,y轴上的偏移量 time:到具体位置所用时间 -->
  <!-- 6.刷新scroll高度  refreshHeight() -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 导入better-scroll组件
import BScroll from 'better-scroll'
export default {
  name:'Scroll',
  props:{
    // 设置滚动监听灵敏度
    scrollPosition:{
      type:Number,
      default:0
    },
    // 设置是否开启上拉加载更多
    pullUpLoad:{
      type:Boolean,
      default:false
    },
    mouseWheel:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      scroll:null
    }
  },
  mounted(){
    // 创建scroll对象   将this.$refs.wrapper设置为滚动区域
    this.scroll = new BScroll(this.$refs.wrapper,{
      // 滚动区域点击事件是否可以触发
      click:true,
      // 滚动监听灵敏度 1(不监听) ,2(手指离开后的惯性滚动不监听) ,3(监听所有滚动)
      probeType:this.scrollPosition,
      // 是否开启上拉加载更多
      pullUpLoad:this.pullUpLoad,
      // 是否开启鼠标滚动
      mouseWheel:this.mouseWheel
    }),
    // 监听滚动
    this.scroll.on('scroll',(position) => {
      this.$emit('nowposition',position)
    }),
    // 监听上拉加载
    this.scroll.on('pullingUp',() => {
      this.$emit('loadmore')
      // 用于实现多次上拉加载
      this.scroll.finishPullUp()
    })
  },
  methods:{
    scrollTo(x,y,time){
      this.scroll.scrollTo(x,y,time)
    },
    refreshHeight(){
      this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>
