import axios from 'axios'

const service = axios.create({
    timeout: 3000,
    baseURL: "https://notworking-api.link/api/",
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