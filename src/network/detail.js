import { request } from './index'

// 根据歌单id获取歌单详细信息
export const getListDetail = id => request({
    url:'/playlist/detail',
    params:{
        id:id
    }
})

// 封装歌单信息
export class DetailPlayList{
    constructor(i){
        this.imgUrl = i.data.playlist.coverImgUrl
        this.title = i.data.playlist.name
        this.createtime = i.data.playlist.createTime
        this.tag = i.data.playlist.tags
        this.biref = i.data.playlist.description
        this.collecturl = i.data.playlist.creator.avatarUrl
        this.collectname = i.data.playlist.creator.nickname
    }
}

// 封装歌曲信息
export class SongInfo{
    constructor(i){
        this.songImgUrl = i.al.picUrl
        this.songName = i.name
        this.art = i.ar.map(item => item.name).join('/')
        this.album = i.al.name
        this.duration = i.dt 
        this.id = i.id
    }
}