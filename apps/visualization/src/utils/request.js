import axios from 'axios'

const service = axios.create({
    baseURL: 'https://geo.datav.aliyun.com',
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use((config) => {
    //config.headers.icode = 'input you icode'
    return config
}, (error) => {
    return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    return Promise.reject(error)
})

// 导出
export default service
