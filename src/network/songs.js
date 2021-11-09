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
export const getMusicInfo = ids => request({
    url:'/song/detail',
    params:{
        ids:ids
    }
})

// 根据歌曲id，获取评论
export const getComment = (id,limit=20,offset=0) => request({
    url:'/comment/music',
    params:{
        id:id,
        limit:limit,
        offset:offset
    }
})

// 封装miniplayer所需数据
export class SongInfo{
    constructor(info){
        this.songname = info.name
        this.art = info.ar.map(item => item.name).reduce((preValue,n) => preValue+'/'+n)
        this.duration = info.dt
        this.songimgurl = info.al.picUrl
        this.id = info.id
    }
}

// 封装评论所需内容
export class HotComment{
    constructor(i){
        this.username = i.user.nickname
        this.userurl = i.user.avatarUrl
        this.content = i.content
        this.time = i.time
    }
}