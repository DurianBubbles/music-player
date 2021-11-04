<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(item,index) in banners.url" :key="index">
      <img v-lazy="item" class="banner-img">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import {getBanner,BannerInfo} from 'network/discovery.js'
export default {
  name:'Banner',
  created(){
    getBanner().then(res => {
      this.banners = new BannerInfo(res)
    })
  },
  data(){
      return{
          banners:[]
      }
  }
}
</script>

<style scoped>
  .el-carousel{
      width: 80%;
      margin: 0 auto;
  }

  .banner-img{
      width: 100%;
      height: 100%;
      border-radius: 5px;
  }
</style>