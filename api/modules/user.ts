import service from '../index'
import { UserInterface } from '../../interfaces/user'


export async function login(params: { username: string, password: string }) {
    return await service.post("auth/login", params);
}
export async function register(params: UserInterface) {
    await service.post("developer", params)
    return await service.post('auth/login', { username: params.userId, password: params.password })
}
export async function refresh() {
    return await service.get('common/refreshtoken');
}
//TODO : SigninRe 와 getLoginUser에 대한정리필요
export async function SignRe() {
    const { data } = await service.get('common/refreshtoken');
    return data;
}

export async function getUserInfo(userId: string) {
    return await service.get(`developer/${userId}`)
}
export async function updateUserInfo(params: { userId: string, name: string, email: string, gitUrl: string, webSiteUrl: string }) {
    const { data } = await service.put('developer', params);
    return data;
}
export async function updateUser(params: { userId: string, name: string, email: string, gitUrl: string, webSiteUrl: string }) {
    return await service.put('developer', params);
}
export async function deleteUser(userId: string) {
    return await service.delete(`developer/${userId}`)
}
export async function checkUserId(userId: string) {
    return await service.get(`developer/checkUserId/${userId}`)
}
export async function checkName(name: string) {
    return await service.get(`developer/checkName/${name}`)
}
export async function followUser(userId: string) {
    return await service.put(`developer/follow/${userId}`)
}