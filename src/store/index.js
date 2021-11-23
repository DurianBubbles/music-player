import Vue from 'vue'
import Vuex from 'vuex'

// getMusicUrl, 
import { getMusicUrl, getMusicInfo, SongInfo,getComment,HotComment,getlyric } from 'network/songs.js'
import {parseLyric} from "@/utils/lrcparse.js";
import {getSearch} from 'network/search.js'
import {getMvComment,getMvInfo,getmvSrc} from 'network/mvs.js'

//安装插件
Vue.use(Vuex) 

//创建对象
const store = new Vuex.Store({
  state: {
    // 音乐url
    url: '',
    // 当前播放时长
    nowtime: 0,
    // 歌曲时长
    duration: 0,
    // 是否显示歌曲列表
    isShowSonglist: false,
    // 音量
    volume: 1,
    // 播放列表
    playlist: [],
    // 当前播放歌曲index
    currentIndex: 0,
    // 是否显示歌词
    isShowLyric:false,
    // 评论信息
    comment:{hot:[],new:[]},
    // 歌词信息
    lyric:[],
    // 歌词滚动标识
    lyricIndex:0,
    // 歌词滚动距离
    position:0,
    // 当前audio是否在播放
    isPlay:false,
    // 是否显示搜索框
    isShowSearch:false,
    // 搜索单曲内容
    songlists:[],
    // 搜索歌单内容
    songCards:[],
    // 搜索mv内容
    songMvs:[],
    // mv评论
    mvcomment:{hot:[],new:[]},
    // mv 信息
    mvInfo:{},
    // mv播放地址
    mvurl:'',
    // search总数
    searchCount:0,
    // 歌单ID
    songIdList:[],
    // MV界面评论条目
    mvCount:0
  },
  mutations: {
    //设置音乐url   
    setUrl(state, url) {
      state.url = url
    },
    //设置歌曲信息   
    setInfo(state, allInfo) {
      state.playlist.push(allInfo)
    },
    setcurrentIndex(state, index) {
      state.currentIndex = index
    },
    //设置当前播放时长   
    setNowTime(state, time) {
      state.nowtime = time
    },
    setVolume(state, volume) {
      state.volume = volume
    },
    setIsShowSonglist(state){
      state.isShowSonglist = !state.isShowSonglist
    },
    clearplaylist(state){
      state.playlist= []
    },
    setisShowLyric(state){
      state.isShowLyric = !state.isShowLyric
    },
    setHotComment(state,info){
      state.comment.hot.push(info)
    },
    setNewComment(state,info){
      state.comment.new.push(info)
    },
    clearComment(state){
      state.comment = {hot:[],new:[]}
    },
    setLyric(state,info){
      state.lyric = info
    },
    setlyricIndex(state,index){
      state.lyricIndex = index
    },
    setisPlay(state,type){
      state.isPlay = type
    },
    setisShowSearch(state,type){
      state.isShowSearch = type
    },
    setsonglists(state,info){
      state.songlists = info
    },
    setsongCards(state,info){
      state.songCards = info
    },
    setsongMvs(state,info){
      state.songMvs = info
    },
    setHotMvComment(state,info){
      state.mvcomment.hot = info
    },
    setNewMvComment(state,info){
      state.mvcomment.new = info
    },
    setmvInfo(state,info){
      state.mvInfo = info
    },
    setmvurl(state,url){
      state.mvurl = url
    },
    setsearchCount(state,i){
      state.searchCount = i
    },
    setsongIdList(state,info){
      state.songIdList = info
    },
    setmvCount(state,i){
      state.mvCount = i
    }
  },
  actions: {
    // 给音乐url赋值
    setList(context, info) {
      // 清空列表
      context.commit('clearplaylist')
      // 设置歌曲信息
      getMusicInfo(info.idlist.join(',')).then(res => {
        res.data.songs.map(item => context.commit('setInfo', new SongInfo(item)))
        // 设置歌曲url
        context.dispatch('getSongUrl',context.state.playlist[info.index].id)
        // 设置评论
        context.dispatch('getAllComment',{id:context.state.playlist[info.index].id,offset:0})
        // 设置歌词
        context.dispatch('getlyric',context.state.playlist[info.index].id)
      })
      // 设置当前播放歌曲index
      context.commit('setcurrentIndex', info.index)
      // 设置当前播放状态
      context.commit('setisPlay',true)
    },
    // 获取url
    getSongUrl(context, id){
      getMusicUrl(id).then(res => {
        context.commit('setUrl', res.data.data[0].url)
      })
    },
    // 获取评论
    getAllComment(context,params){
      context.commit('clearComment')
      getComment(params.id).then(res => {
        if(params.offset == 0){
          res.data.hotComments.map(item => context.commit('setHotComment',new HotComment(item)))
        }
        res.data.comments.map(item => context.commit('setNewComment',new HotComment(item)))
      })
    },
    // 获取歌词
    getlyric(context,id){
      getlyric(id).then(res => {
        context.commit('setLyric',parseLyric(res.data.lrc.lyric))
      })
    },
    toPrev(context){
      context.state.currentIndex == 0 ? context.commit('setcurrentIndex',context.state.playlist.length-1) : context.commit('setcurrentIndex',context.state.currentIndex -= 1)
      context.dispatch('changeScrInfo',{index:context.state.currentIndex,id:context.state.playlist[context.state.currentIndex].id})
    },
    toNext(context){
      context.state.currentIndex == context.state.playlist.length-1 ? context.commit('setcurrentIndex',0) : context.commit('setcurrentIndex',context.state.currentIndex += 1)
      context.dispatch('changeScrInfo',{index:context.state.currentIndex,id:context.state.playlist[context.state.currentIndex].id})
    },
    changeScrInfo(context,params){
      //   1.改变currentIndex
      context.commit('setcurrentIndex',params.index)
      // 2.赋值url
      context.dispatch('getSongUrl',params.id)
      // 3.更新评论
      context.dispatch('getAllComment',{id:params.id,offset:0})
      // 4.更新歌词
      context.dispatch('getlyric',params.id)
      //5.更新歌词滚动index
      context.commit('setlyricIndex',0)
    },
    // 获取搜索单曲
    getsearchSongs(context,params){
      getSearch(params.keywords,params.limit,params.offset,params.type).then(res => {
        if(params.type == 1){
          context.commit('setsonglists',res.data.result.songs)
          context.commit('setsearchCount',res.data.result.songCount)
        }else if(params.type == 1000){
          context.commit('setsongCards',res.data.result.playlists)
          context.commit('setsearchCount',res.data.result.playlistCount)
        }else{
          context.commit('setsongMvs',res.data.result.mvs)
          context.commit('setsearchCount',res.data.result.mvCount)
        }
      })
    },
    // 获取mv评论信息
    getMvCommentInfo(context,params){
      getMvComment(params).then(res => {
        console.log(res)
        context.commit('setHotMvComment',res.data.hotComments)
        context.commit('setNewMvComment',res.data.comments)
        context.commit('setmvCount',res.data.total)
      })
    },
    // 获取mv信息
    getmvdata(context,params){
      getMvInfo(params).then(res => {
        context.commit('setmvInfo',res.data.data)
      })
    },
    // 根据MV ID 获取播放路径
    getMvPlayUrl(context,params){
      getmvSrc(params).then(res => {
        context.commit('setmvurl',res.data.data.url)
      })
    },
    // 获取mv详情页所有信息
    getMvDetailAllInfo(context,params){
      context.dispatch('getMvCommentInfo',{id:params.id,limit:20,offset:0})
      context.dispatch('getmvdata',params.id)
      context.dispatch('getMvPlayUrl',params.id)
    }
  },
  getters: {
    getProgressPosition(state) {
      if(state.playlist[state.currentIndex] != undefined){
        const bottom = state.playlist[state.currentIndex].duration / 1000
        return ((state.nowtime / bottom) * 100).toFixed(2) + '%'
      }
      
    },
    getPlayList(state) {
      return state.playlist
    },
    getMiniCardInfo(state) {
      return state.playlist[state.currentIndex]
    },
    getNowTime(state) {
      return state.nowtime
    },
    getUrl(state) {
      return state.url
    },
    isShow(state) {
      return state.playlist.length == 0 ? false : true
    },
    getIsShowSonglist(state){
      return state.isShowSonglist
    },
    getCurrentIndex(state){
      return state.currentIndex
    },
    getisShowLyric(state){
      return state.isShowLyric
    },
    getComment(state){
      return state.comment
    },
    getLyric(state){
      return state.lyric
    },
    getlyricIndex(state){
      return state.lyricIndex
    },
    getposition(state){
      if(state.lyricIndex < 5){
        return 0
      }else{
        return (state.lyricIndex-4) * 35
      }
    },
    getisPlay(state){
      return state.isPlay
    },
    getisShowSearch(state){
      return state.isShowSearch
    },
    getsonglists(state){
      return state.songlists
    },
    getsongCards(state){
      return state.songCards
    },
    getsongMvs(state){
      return state.songMvs
    },
    getmvcomment(state){
      return state.mvcomment
    },
    getmvInfo(state){
      return state.mvInfo
    },
    getmvurl(state){
      return state.mvurl
    },
    getsearchCount(state){
      return state.searchCount
    },
    getsongIdList(state){
      return state.songIdList
    },
    getmvCount(state){
      return state.mvCount
    }
  }
})

//导出对象
export default store