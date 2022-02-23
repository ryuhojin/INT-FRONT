import axios from 'axios'

const service = axios.create({
    timeout: 3000,
    baseURL: "http://3.20.158.73:8080/api/",
})

service.interceptors.request.use((config: any) => {
    return config
}, (error: any) => {
    return Promise.reject(error)
})

service.interceptors.response.use((response: any) => {
    return response
}, (error: any) => {
    return Promise.reject(error)
})
export default service;