<template>
  <div class="layout">
    <LayoutHeader />
    <LayoutMenu />
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import LayoutHeader from "./childcomps/LayoutHeader.vue";
import LayoutMenu from "./childcomps/LayoutMenu.vue";
export default {
  name: "Layout",
  components: { LayoutHeader, LayoutMenu },
};
</script>

<style scoped>
.layout {
  width: 100%;
  height: 100vh;
}
</style>