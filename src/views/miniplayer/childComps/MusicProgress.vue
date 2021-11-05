<template>
  <div class="musicprogress">
      <Progress prowidth="100%" proheight="100%" :innerwidth="current" :isShow='false' @position="excupos"/>
  </div>
</template>

<script>
import Progress from 'base/Progress.vue'
export default {
  name:'MusicProgress',
  components:{Progress},
  props:['current'],
  methods:{
      excupos(pos){
          this.$emit('position',pos)
      }
  }
}
</script>

<style scoped>
  .musicprogress{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
  }
</style>