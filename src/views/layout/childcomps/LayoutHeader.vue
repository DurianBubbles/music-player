<template>
  <div class="layout-header">
      <div class="navicon">
          <i class="el-icon-s-home"></i>
          <i class="el-icon-minus"></i>
          <i class="el-icon-top-right"></i>
      </div>
      <div class="navroute">
          <i class="el-icon-arrow-left"></i>
          <i class="el-icon-arrow-right"></i>
      </div>
      <div class="search">
          <div class="search-box">
              <i class="el-icon-search"></i>
              <input type="text" class="search-input" placeholder="搜索">
          </div>
          <i class="el-icon-magic-stick"></i>
      </div>
  </div>
</template>

<script>
export default {
  name:'LayoutHeader',
  data(){
      return{
          input:''
      }
  }
}
</script>

<style scoped>
  .layout-header{
      height: 49px;
      overflow: hidden;
      background: #D74D45;
  }

  .navicon{
      height: 100%;
      width: 70px;
      float: left;
      display: flex;
      justify-content: space-between;
      padding: 10px 10px;
      font-size: 12px;
  }

  .navicon>i{
      display: block;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      text-align: center;
      line-height: 14px;
  }

  .navicon  .el-icon-s-home{
      background: #ed655a;
  }

  .navicon .el-icon-minus{
      background: #e0c04c;
  }

  .navicon .el-icon-top-right{
      background: #72be47;
  }

  .navroute{
      height: 100%;
      float: left;
      width: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 50px;
  }

  .search{
      float: right;
      display: flex;
      justify-content: space-between;
      height: 100%;
      align-items: center;
      margin-right: 30px;
  }

  .search-box{
      height: 25px;
      width: 160px;
      background: #DD6861;
      display: flex;
      text-align: center;
      border-radius: 5px;
      padding-right: 10px;
      padding-left: 5px;
  }

  .search-box .el-icon-search{
      width: 10%;
      height: 100%;
      line-height: 25px;
      color:#EFB6B2;
      font-size: 12px;
  }

  .search-input{
      width: 90%;
      height: 100%;
      background:#DD6861;
      padding-left: 10px;
      color:#EFB6B2;
      font-size: 12px;
      line-height: 25px;
  }

  .search-input::-webkit-input-placeholder{
      color: #EFB6B2;
  }

  .el-icon-magic-stick{
      color: #EFB6B2;
      margin-left: 15px;
  }
</style>