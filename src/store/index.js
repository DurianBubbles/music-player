import Vue from 'vue'
import Vuex from 'vuex'

// getMusicUrl,
import { getMusicUrl,getMusicInfo,SongInfo } from 'network/songs.js'
import { resolve } from 'core-js/fn/promise'

//安装插件
Vue.use(Vuex)

//创建对象
const store = new Vuex.Store({
    state: {
        // 音乐url
        url: '',
        // 当前播放时长
        nowtime:0,
        // 歌曲时长
        duration:0,
        // 是否显示歌曲信息
        isShowInfo:false,
        // 音量
        volume:1,
        // 播放列表
        playlist:[],
        // 当前播放歌曲index
        currentIndex:0
    },
    mutations: {
      //设置音乐url   
      setUrl(state,url){
        state.url = url
      },
      //设置歌曲信息   
      setInfo(state,allInfo){
        state.playlist.push(allInfo)
      },
      setcurrentIndex(state,index){
        state.currentIndex = index
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
        setList(context,info) {
            const ids = info.idlist.join(',')
            // 设置歌曲信息
            getMusicInfo(ids).then(res => {
              res.data.songs.map(item => context.commit('setInfo',new SongInfo(item)))
            })

            console.log(context.state.playlist[info.index].id)

            // 设置歌曲url
            getMusicUrl(context.state.playlist[info.index].id).then(res => {
                context.commit('setUrl',res.data.data[0].url)
            })

            // 设置当前播放歌曲index
            context.commit('setcurrentIndex',info.index)
        }
    },
    getters: {
        getProgressPosition(state){
          const bottom = state.playlist[state.currentIndex].duration/1000
          return ((state.nowtime/bottom) * 100).toFixed(2) + '%'
        },
        getPlayList(state){
          return state.playlist
        },
        getMiniCardInfo(state){
          return state.playlist[state.currentIndex]
        },
        getNowTime(state){
          return state.nowtime
        },
        getUrl(state){
          return state.url
        },
        isShow(state){
          return state.playlist.length == 0 ? false : true
        }
    }
})

//导出对象
export default store