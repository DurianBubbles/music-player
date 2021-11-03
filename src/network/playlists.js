import { request } from './index'

// 获取精品歌单
export const getTopPlaylists = (num=1,tag='全部') => request({
    url:'/top/playlist/highquality', 
    params:{
        // 获取精品歌单个数
        limit:num,
        // 获取歌单风格，比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部"
        cat:tag
    }
})

// 获取推荐歌单
export const getPlaylists = (num=50,offset=0,tag='全部') => request({
    url:'/top/playlist',
    params:{
        // 获取歌单数量
        limit:num,
        // 偏移量
        offset:offset,
        // 歌单类型
        tag:tag
    }
})