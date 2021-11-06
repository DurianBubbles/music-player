import Vue from 'vue'
import Vuex from 'vuex'

// getMusicUrl,
import { getMusicUrl, getMusicInfo, SongInfo } from 'network/songs.js'

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
    currentIndex: 0
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
      })
      // 设置当前播放歌曲index
      context.commit('setcurrentIndex', info.index)
    },
    // 获取url
    getSongUrl(context, id){
      getMusicUrl(id).then(res => {
        context.commit('setUrl', res.data.data[0].url)
      })
    }
  },
  getters: {
    getProgressPosition(state) {
      const bottom = state.playlist[state.currentIndex].duration / 1000
      return ((state.nowtime / bottom) * 100).toFixed(2) + '%'
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
    }
  }
})

//导出对象
export default store