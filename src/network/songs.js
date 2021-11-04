import { request } from './index'

// 最新音乐
export const getTopSongs = (type=0) => request({
    url:'/top/song',
    params:{
        // 获取地区最新音乐，比如：全部(0) 华语(7) 欧美(96) 日本(8) 韩国(16)
        type:type
    }
})

// 根据歌曲id，获取音乐url
export const getMusicUrl = id => request({
    url:'/song/url',
    params:{
        id:id
    }
})

// 根据歌曲id，获取歌曲详情
export const getMusicInfo = id => request({
    url:'/song/detail',
    params:{
        ids:id
    }
})

// 封装miniplayer所需数据
export class SongInfo{
    constructor(info){
        this.songname = info.data.songs[0].name
        this.art = info.data.songs[0].ar.map(item => item.name).reduce((preValue,n) => preValue+'/'+n)
        this.duration = info.data.songs[0].dt
        this.songimgurl = info.data.songs[0].al.picUrl
    }
}