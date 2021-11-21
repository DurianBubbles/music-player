<template>
  <div class="pagination">
    <el-pagination
      layout="prev, pager, next"
      :current-page.sync="currentPage"
      :page-size="50"
      :total="total"
      @current-change="onPageChange"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props:['currentPage','total','currentTag'],
  methods:{
    onPageChange(page){
      this.$emit('onPageChange',{tag:this.currentTag,page:page})
    }
  },
  watch:{
    currentTag: {
      deep: true,  // 深度监听
      handler(newVal) {
         this.$emit('onPageChange',{tag:newVal,page:1})
      }
    }
  }
};
</script>

<style scoped>
.pagination {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
}
</style>