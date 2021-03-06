// import axios from "axios"
import axios from '../utils/request.js'
// 封装token
// 定义user相关的网络请求
export const login = (data) => {
  // axios的请求 promise
  return axios.request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

// 获取用户数据
export const getUserInfo = () => {
  return axios.request({
    url: '/sys/profile',
    method: 'GET'
  })
}
