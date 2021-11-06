<template>
  <div class="detail">
    <DetailTop />
  </div>
</template>

<script>
import DetailTop from 'components/DetailTop.vue'
export default {
  name:'Detail',
  components:{DetailTop}
}
</script>

<style scoped>
  .detail{
    width: calc(100% - 250px);
    position: absolute;
    right: 0;
    top: 49px;
    bottom: 0;
    padding-top: 10px;
    padding-bottom:80px;
    overflow-y: scroll;
  }
</style>