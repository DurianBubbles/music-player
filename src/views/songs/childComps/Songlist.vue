<template>
  <div class="songlist">
    <SongCard
      :name="item.name"
      :art="item.artists[0].name"
      :album="item.album.name"
      :time="item.duration"
      :url="item.album.picUrl"
      :num="index"
      v-for="(item, index) in info"
      :key="index"
    />
  </div>
</template>

<script>
import SongCard from "base/SongCard.vue";
export default {
  name: "Songlist",
  components: { SongCard },
  props: ["info"],
};
</script>

<style scoped>
.songlist {
  width: 80%;
  margin: 0 auto;
}
</style>