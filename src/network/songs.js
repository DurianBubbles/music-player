import { request } from './index'

// 最新音乐
export const getTopSongs = (type=0) => request({
    url:'/top/song',
    params:{
        // 获取地区最新音乐，比如：全部(0) 华语(7) 欧美(96) 日本(8) 韩国(16)
        type:type
    }
})