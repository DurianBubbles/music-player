<template>
  <div class="songs">
    <Tabs />
    <Songlist />
  </div>
</template>

<script>
import Tabs from 'base/Tabs.vue'
import Songlist from './childComps/Songlist.vue'
export default {
  name:'Songs',
  components:{Tabs,Songlist}
}
</script>

<style scoped>
  .songs{
    width: calc(100% - 250px);
    position: absolute;
    right: 0;
    top: 49px;
    bottom: 0;
    padding-top: 10px;
    padding-bottom:80px;
    overflow-y: scroll;
  }

  ::-webkit-scrollbar{
    background: #ededed;
    width:5px;
  } 

  ::-webkit-scrollbar-thumb{
    background: #D0D0D0;
  }
</style>