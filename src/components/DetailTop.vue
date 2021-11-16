<template>
  <div class="detailtop">
    <div class="img-wrap">
        <img v-lazy="info.imgUrl" alt="">
    </div>
    <div class="content">
        <p class="title">{{info.title}}</p>
        <div class="art">
            <img v-lazy="info.collecturl" alt="">
            <p class="name">{{info.collectname}}</p>
            <p class="time">{{info.createtime}} 创建</p>
        </div>
        <div class="playBtn" @click="playmusic(0)">
            <i></i>
            <p>播放全部</p>
        </div>
        <p class="tag">标签：<span>{{info.tag | addspace}}</span></p>
        <p class="brief">简介：<span>{{info.biref}}</span></p>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name:'DetailTop',
  props:['info','list'],
  methods:{
    playmusic(index){
      this.setList({idlist:this.list.map(item => item.id),index})
    },
    ...mapActions(['setList'])
  },
  filters:{
    addspace(i){
      if(i == undefined ){
        return
      }else{
        return i.join('/')
      }
    }
  }
}
</script>

<style scoped>
  .detailtop{
      width: 90%;
      margin: 0 auto;
      display: flex;
  }

  .img-wrap{
      width: 200px;
      height: 200px;
      margin-right: 20px;
  }

  .img-wrap img{
      width: 100%;
      height: 100%;
  }

  .content{
      flex: 1;
      display: flex;
      flex-direction: column;
      text-align: left;
  }

  .content .title{
    font-size: 18px;
    margin-bottom: 16px;
  }

  .art{
    display: flex;
    align-items: center;
    margin-bottom: 24px;
  }

  .art img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 5px;
  }

  .art .name{
    color: #4a4a4a;
    font-size: 14px;
  }

  .art .time{
    color: #4a4a4a;
    font-size: 12px;
  }

  .playBtn{
    width: 110px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg,#fa5143,#f44d41,#d53b32);
    color: #fbdfdd;
    font-size: 14px;
    margin-bottom: 24px;
    cursor: pointer;
  }

  .playBtn>i{
    display: block;
    width: 20px;
    height: 20px;
    background: url(~assets/img/detail/playbtn.svg) no-repeat center/cover;
    transform: translateY(1px);
    margin-right: 3px;
  }

  .tag{
    font-size: 13px;
    color: #4a4a4a;
    margin-bottom: 10px;
  }

  .brief{
    font-size: 13px;
    color: #4a4a4a;
  }
</style>