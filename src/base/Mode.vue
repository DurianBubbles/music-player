<template>
  <div class="mode">
    <span class="list" @click.stop="setIsShowSonglist"></span>
    <span class="sound"></span>
    <Progress :prowidth='prowidth' :proheight='proheight' :innerwidth='innerwidth' @position='setposition'/>
  </div>
</template>

<script>
import Progress from './Progress.vue'
import {mapMutations} from 'vuex'
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
    },
    ...mapMutations(['setIsShowSonglist'])
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

  .list{
      background: url(~assets/img/miniplayer/list.svg) no-repeat center/cover;
      cursor: pointer;
  }

  .mode span.sound{
      margin-right: 10px;
      background: url(~assets/img/miniplayer/sound.svg) no-repeat center/cover;
      cursor: pointer;
  }
</style>