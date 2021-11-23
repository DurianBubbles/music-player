<template>
  <div class="listDetail">
    <div class="block" v-if="commentList.hot !== undefined"  >
      <p>精彩评论</p>
      <CommentCard
        :imgurl="item.user.avatarUrl"
        :name="item.user.nickname"
        :content="item.content"
        :time="item.time"
        v-for="(item, index) in commentList.hot"
        :key="index"
      />
    </div>
    <div class="block" v-if="commentList.new !== undefined">
      <p>最新评论</p>
      <CommentCard
        :imgurl="item.user.avatarUrl"
        :name="item.user.nickname"
        :content="item.content"
        :time="item.time"
        v-for="(item, index) in commentList.new"
        :key="index"
      />
    </div>
    <Pagination :total="count" :pagesize="20" :currentPage="currentPage" @onPageChange="onPageChange"/>
  </div>
</template>

<script>
import CommentCard from "views/lyric/childComps/CommentCard.vue";
import Pagination from 'base/Pagination.vue'
import { getListDetailComment } from "network/detail.js";
export default {
  name: "ListDetailComment",
  components: { CommentCard,Pagination },
  created() {
    this.getComment({ id: this.$route.params.id, limit: 20, offset: 0 });
  },
  methods: {
    getComment(params) {
      getListDetailComment(params).then((res) => {
        this.commentList.hot = res.data.hotComments;
        this.commentList.new = res.data.comments;
        this.count = res.data.total
      });
    },
    onPageChange(page){
      this.currentPage = page
      this.getComment({id:this.$route.params.id,limit:20,offset:(page - 1) * 20})
    }
  },
  data() {
    return {
      commentList: { hot: [], new: [] },
      currentPage:1,
      count:0
    };
  }
};
</script>

<style scoped>
.listDetail {
  width: 90%;
  margin: 0 auto;
  padding-top: 10px;
}

.block {
  text-align: left;
  margin-bottom: 20px;
}

.block > p {
  margin-bottom: 10px;
  font-weight: 700;
}
</style>