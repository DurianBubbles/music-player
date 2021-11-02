import {request} from './index'

// 获取banner信息
export const getBanner = () => request('/banner?type=0')

//获取推荐歌单
export const getPersonalized = (num) => request({
    url:'/personalized',
    params:{
        limit:num
    }
})