<template>
  <div class="layout">
    <LayoutMenu />
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

import LayoutMenu from "./childcomps/LayoutMenu.vue";
export default {
  name: "Layout",
  components: { LayoutMenu },
};
</script>

<style scoped>
.layout {
  width: 100%;
  height: 100vh;
}
</style>