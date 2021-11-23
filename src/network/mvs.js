import { request } from './index'

// 获取全部MV
export const getAllMvs = (area='全部',type='全部',order='上升最快',limit=40,offset=0) => request({
    url:'/mv/all',
    params:{
        area:area,
        type:type,
        order:order,
        limit:limit,
        offset:offset
    }
})

// 根据ID获取mv评论
export const getMvComment = (params) => request({
    url:'/comment/mv',
    params:{
        id:params.id,
        limit:params.limit,
        offset:params.offset
    }
})
 
// 根据id获取mv信息
export const getMvInfo = mvid => request({
    url:'/mv/detail',
    params:{
        mvid
    }
})

// 根据ID获取Mv播放地址
export const getmvSrc = id => request({
    url:'/mv/url',
    params:{
        id
    }
})