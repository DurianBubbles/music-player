<template>
  <div class="playlists">
    <TopPlaylistCard
      :imgurl="topCardInfo.coverImgUrl"
      :name="topCardInfo.name"
      :desc="topCardInfo.description"
    />
    <Tabs :tittle="tabs" />
    <PlaylistdCard :playlists='listCardInfo'/>
    <Pagination />
  </div>
</template>

<script>
import TopPlaylistCard from "./childComps/TopPlaylistCard.vue";
import Tabs from "base/Tabs.vue";
import PlaylistdCard from "./childComps/PlaylistsCard.vue";
import Pagination from "base/Pagination.vue";

import { getTopPlaylists, getPlaylists } from "network/playlists.js";
export default {
  name: "Playlists",
  components: { TopPlaylistCard, Tabs, PlaylistdCard, Pagination },
  created() {
    getTopPlaylists().then((res) => {
      this.topCardInfo = res.data.playlists[0];
    });
    this.getlistCardInfo()
  },
  data() {
    return {
      // TopPlaylistCard组件内容
      topCardInfo: {},
      // Tabs组件标签内容
      tabs: [
        "全部",
        "欧美",
        "华语",
        "流行",
        "说唱",
        "摇滚",
        "民谣",
        "电子",
        "轻音乐",
        "影视原声",
        "ACG",
        "怀旧",
        "治愈",
        "旅行",
      ],
      // PlaylistdCard组件内容
      listCardInfo: [],
    };
  },
  methods: {
    getlistCardInfo(limit,offset,tag) {
      getPlaylists(limit,offset,tag).then((res) => {
        this.listCardInfo = res.data.playlists
      });
    },
  },
};
</script>

<style scoped>
.playlists {
  width: calc(100% - 250px);
  position: absolute;
  right: 0;
  top: 49px;
  bottom: 0;
  padding-top: 10px;
  padding-bottom: 80px;
  overflow-y: scroll;
}

::-webkit-scrollbar {
  background: #ededed;
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background: #d0d0d0;
}
</style>