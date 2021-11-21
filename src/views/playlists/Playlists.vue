<template>
  <div class="playlists" ref="playlists">
    <TopPlaylistCard
      :imgurl="topCardInfo.coverImgUrl"
      :name="topCardInfo.name"
      :desc="topCardInfo.description"
    />
    <Tabs :tittle="tabs" :currentIndex='currentIndex' @changeIndex="changeIndex"/>
    <PlaylistdCard :playlists='listCardInfo'/>
    <Pagination :currentPage="currentPage" :total="total" @onPageChange="onPageChange" :currentTag='currentTag'/>
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
    // 获取精品歌单
    getTopPlaylists().then((res) => {
      this.topCardInfo = res.data.playlists[0];
    });
    this.getlistCardInfo({limit:50,offset:(1-1)*50,tag:'全部'})
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
      // 当前页码
      currentPage:1,
      // 全部条目
      total:0,
      // 当前tag index
      currentIndex:0
    };
  },
  methods: {
    // 获取listCardInfo
    getlistCardInfo(params) {
      getPlaylists(params).then((res) => {
        this.listCardInfo = res.data.playlists
        this.total = res.data.total
      });
    },
    // 更新歌单
    async onPageChange(params){
      params.limit = 50
      params.offset = (params.page-1)*50
      this.currentPage = params.page
      this.$refs.playlists.scrollTop = 0
      this.getlistCardInfo(params)
    },
    changeIndex(index){
      this.currentIndex = index
    }
  },
  computed:{
    currentTag(){
      return this.tabs[this.currentIndex]
    }
  }
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