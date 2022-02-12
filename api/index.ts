import axios from 'axios'

const service = axios.create({
    timeout: 3000,
    baseURL: "http://3.17.152.174:8080/api/",
})

service.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})

service.interceptors.response.use((response) => {
    return response
}, (error) => {
    return Promise.reject(error)
})

export default service;