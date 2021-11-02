<template>
  <div class="layout">
    <LayoutHeader />
    <LayoutMenu />
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

</style>