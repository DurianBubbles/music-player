<template>
  <div class="newPlayLists">
    <Title>推荐歌单</Title>
    <div class="card-box">
      <PlayListCard
        :url="item.picUrl"
        :desc="item.copywriter"
        :name="item.name"
        v-for="(item, index) in list"
        :key="index"
      ></PlayListCard>
    </div>
  </div>
</template>

<script>
import Title from "base/Tittle.vue";
import PlayListCard from "components/PlaylistCard.vue";

import { getPersonalized } from "network/discovery.js";
export default {
  name: "NewPlayLists",
  components: { Title, PlayListCard },
  data() {
    return {
      list: [],
    };
  },
  created() {
    getPersonalized(10).then((res) => {
      this.list = res.data.result;
    });
  }
};
</script>

<style scoped>
.newPlayLists {
  width: 80%;
  margin: 0 auto;
}

.newPlayLists .card-box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>