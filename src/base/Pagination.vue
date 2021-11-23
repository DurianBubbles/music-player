<template>
  <div class="pagination">
    <el-pagination
      layout="prev, pager, next"
      :current-page.sync="currentPage"
      :page-size="pagesize"
      :total="total"
      @current-change="onPageChange"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props:['total','pagesize','currentPage'],
  methods:{
    onPageChange(page){
      this.$emit('onPageChange',page)
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