<template>
  <div class="controll">
      <div class="songlist" :class="{active:0 == currentIndex}" @click="tosonglist">歌曲列表</div>
      <div class="comment" :class="{active:1 == currentIndex}" @click="tocomment">评论({{count}})</div>
  </div>
</template>

<script>
export default {
  name:'Control',
  props:['count'],
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    tocomment(){
      this.currentIndex = 1
      this.$router.push('/layout/detail/'+this.$route.params.id+'/comment')
    },
    tosonglist(){
      this.currentIndex = 0
      this.$router.push('/layout/detail/'+this.$route.params.id+'/songlist')
    }
  }
}
</script>

<style scoped>
  .controll{
      width: 90%;
      margin: 0 auto;
      display: flex;
      border-bottom: 1px solid #f2f2f1;
  }

  .controll>div{
      font-size: 14px;
      color:#BEBEBE ;
      text-align: center;
      padding:10px 0;
      margin: 0 10px;
      cursor: pointer;
  }
  
  .controll>div.active{
    border-bottom: 2px solid #d33a31;
      font-weight: 700;
      color: #d33a31;
  }
</style>