<template>
  <div class="layout" @click="setisShowSearch(false)">
    <LayoutMenu />
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

import LayoutMenu from "./childcomps/LayoutMenu.vue";
import {mapMutations} from 'vuex'
export default {
  name: "Layout",
  components: { LayoutMenu },
  methods:{
    ...mapMutations(['setisShowSearch'])
  }
};
</script>

<style scoped>
.layout {
  width: 100%;
  overflow: hidden;
}
</style>