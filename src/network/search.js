import { request } from './index'

// 获取搜索歌曲信息 type{1:单曲 1000:歌单 1004:MV}
export const getSearch = (keywords,limit=30,offset=0,type=1) => request({
    url:'/search',
    params:{
        keywords,
        limit,
        offset,
        type
    }
})