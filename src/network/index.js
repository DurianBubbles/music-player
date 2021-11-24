import axios from 'axios'

export function request(config){
 const instance = axios.create({
    baseURL:'https://netease-cloud-music-api-ruddy-three.vercel.app/',
    timeout:5000
  })

  instance.interceptors.request.use(config => {
    //发送成功来到这里,这里拦截下来的config就是向服务器请求所携带的信息
    //拦截之后，要把参数返回出去，要不无法完成请求
    return config
  },err => {
    //发送失败来这里
    console.log(err)
  })
  
  //拦截响应
  instance.interceptors.response.use(res => {
    //res是服务器返回的内容
    //响应结果，拦截下来处理之后，需要返回出去，也可以只返回出去需要用到的内容，比如return res.data
    return res
  },err => {
    //响应失败来到这里
    console.log(err)
  })

  return instance(config)
}