<template>
  <div class="newmvs">
    <Title>推荐MV</Title>
    <div class="card-box">
      <NewMvsCard
        :url="item.picUrl"
        :playcount="item.playCount"
        :name="item.name"
        :art="item.artists[0].name"
        v-for="(item, index) in mvs"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import Title from "base/Tittle.vue";
import NewMvsCard from "components/NewMvsCard.vue";

import { getPersonalizedMv } from "network/discovery.js";
export default {
  name: "NewMvs",
  components: { Title, NewMvsCard },
  created() {
    getPersonalizedMv().then((res) => {
      this.mvs = res.data.result;
    });
  },
  data() {
    return {
      mvs: [],
    };
  },
};
</script>

<style scoped>
.newmvs {
  width: 80%;
  margin: 0 auto;
}
.card-box {
  display: flex;
  width: calc(100% + 20px);
  transform: translateX(-10px);
}
</style>