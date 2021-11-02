<template>
  <div class="menu">
    <router-link v-for="(item,index) in menuitem" :key="index" :to="item.path">
      <i :class="item.imgstyle"></i>
      <span>{{item.tittle}}</span>
    </router-link>
  </div>
</template>

<script>
export default { 
  name:'LayoutMenu',
  data(){
    return{
      menuitem:[
        {imgstyle:'discover',tittle:'发现音乐',path:'/discovery'},
        {imgstyle:'playlists',tittle:'推荐歌单',path:'/playlists'},
        {imgstyle:'songs',tittle:'最新音乐',path:'/songs'},
        {imgstyle:'mvs',tittle:'最新mv',path:'/mvs'}
      ]
    }
  }
}
</script>

<style scoped>
  .menu{
    width: 250px;
    position: absolute;
    top: 49px;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    background: #ededed;
    padding-bottom: 80px;
  }

  .menu>a{
    display: block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: left;
    padding: 0 20px;
    font-size: 13px;
  }

  .menu>a:hover{
    background: #e7e7e7;
  }

  .menu>a i{
    display: inline-block;
    width: 15px;
    height: 15px;
    vertical-align: middle;
    margin-right: 8px;
  }

  .discover{
    background: url(../../../assets/img/menu/discover.svg) center/cover;
  }

  .playlists{
    background: url(../../../assets/img/menu/playlists.svg) center/cover;
  }

  .songs{
    background: url(../../../assets/img/menu/songs.svg) center/cover;
  }

  .mvs{
    background: url(../../../assets/img/menu/mvs.svg) center/cover;
  }

  .router-link-active .discover{
    background: url(../../../assets/img/menu/discover-act.svg) center/cover;
  }

  .router-link-active .playlists{
    background: url(../../../assets/img/menu/playlists-act.svg) center/cover;
  }

  .router-link-active .songs{
    background: url(../../../assets/img/menu/songs-act.svg) center/cover;
  }

  .router-link-active .mvs{
    background: url(../../../assets/img/menu/mvs-act.svg) center/cover;
  }

  .router-link-active{
    background: #e2e2e2;
  }

  .router-link-active>span{
    color: #d81e06;
  }
</style>