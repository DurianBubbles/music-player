import Vue from 'vue'
import Vuex from 'vuex'

// getMusicUrl,
import { getMusicUrl, getMusicInfo, SongInfo,getComment,HotComment,getlyric } from 'network/songs.js'
import {parseLyric} from "@/utils/lrcparse.js";

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
    position:0
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
    }
  }
})

//导出对象
export default store