<template>
  <div class="layout">
    <LayoutHeader />
    <LayoutMenu />
    <router-view></router-view>
  </div>
</template>

<script>
import LayoutHeader from './childcomps/LayoutHeader.vue'
import LayoutMenu from './childcomps/LayoutMenu.vue'
export default {
  name:'Layout',
  components:{LayoutHeader,LayoutMenu}
}
</script>

<style scoped>
  .layout{
    width: 100%;
    height: 100vh;
  }
</style>