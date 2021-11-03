import { request } from './index'

export const getAllMvs = (area='全部',type='全部',order='上升最快',limit='40',offset='0') => request({
    url:'/mv/all',
    params:{
        area:area,
        type:type,
        order:order,
        limit:limit,
        offset:offset
    }
})