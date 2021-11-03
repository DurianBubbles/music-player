<template>
    <div class="pagination">
      <el-pagination layout="prev, pager, next" :total="80"> </el-pagination>
    </div>
</template>

<script>
export default {
    name:'Pagination'
};
</script>

<style scoped>
  .pagination{
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: flex-end;
  }
</style>