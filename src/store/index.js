import Vue from 'vue'
import Vuex from 'vuex'

import { getMusicUrl,getMusicInfo,SongInfo } from 'network/songs.js'

//安装插件
Vue.use(Vuex)

//创建对象
const store = new Vuex.Store({
    state: {
        // 音乐url
        url: '',
        // 音乐名
        songname:'',
        // 歌手
        art:'',
        // 当前播放时长
        nowtime:0,
        // 歌曲时长
        duration:0,
        // 歌曲imgurl
        songimgurl:'',
        // 是否显示歌曲信息
        isShowInfo:false,
        // 音量
        volume:1
    },
    mutations: {
      //设置音乐url   
      setUrl(state,url){
        state.url = url
      },
      //设置歌曲信息   
      setInfo(state,allInfo){
        state.songname = allInfo.songname
        state.art = allInfo.art
        state.duration = allInfo.duration
        state.songimgurl = allInfo.songimgurl
      },
      //清除歌曲信息   
      cleanInfo(state){
        state.url = ''
        state.songname = ''
        state.art = ''
        state.nowtime = 0
        state.duration = 0
        state.songimgurl = ''
      },
      //设置当前播放时长   
      setNowTime(state,time){
        state.nowtime = time
      },
      setVolume(state,volume){
        state.volume = volume
      }
    },
    actions: {
        // 给音乐url赋值
        setUrl(context,id) {
            context.commit('cleanInfo')
            // 设置歌曲url
            getMusicUrl(id).then(res => {
                context.commit('setUrl',res.data.data[0].url)
            }),
            // 设置歌曲信息
            getMusicInfo(id).then(res => {
                context.commit('setInfo',new SongInfo(res))
            })
        }
    },
    getters: {
        getAllInfo(state){
            return state
        },
        getProgressPosition(state){
          const bottom = state.duration/1000
          return ((state.nowtime/bottom) * 100).toFixed(2) + '%'
        }
    }
})

//导出对象
export default store