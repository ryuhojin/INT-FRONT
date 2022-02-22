import axios from 'axios'
const service = axios.create({
    timeout: 3000,
    baseURL: "https://3.20.158.73:8080/api/",
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