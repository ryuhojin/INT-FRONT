import axios from 'axios'
import Router from 'next/router'
import { delCookie } from '../utils/common';
const service = axios.create({
    timeout: 3000,
    baseURL: "http://3.20.158.73:8080/api/",
})

service.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})

service.interceptors.response.use((response) => {
    return response
}, ({ response }) => {
    if (response?.data?.title !== "토큰 에러") return Promise.reject(response)
    alert('로그인이 만료되었습니다');
    delCookie('access-token');
    Router.reload();
    return Promise.reject(response)
})
export default service;