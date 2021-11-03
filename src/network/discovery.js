import { request } from './index'

// 获取banner信息
export const getBanner = () => request('/banner?type=0')
//获取推荐歌单
export const getPersonalized = num => request({
    url: '/personalized',
    params: {
        // 推荐歌单数量
        limit: num
    }
})
// 获取最新音乐
export const getNewSongs = () => request('/personalized/newsong')
// 推荐mv
export const getPersonalizedMv = () => request(`/personalized/mv`)



// 封装banner信息
export class BannerInfo {
    constructor(i) {
        // url-数组：保存banner中图片的url
        this.url = i.data.banners.map(item => item.imageUrl)
    }
}