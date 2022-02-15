import service from '../index'
import { UserInterface } from '../../interfaces/user'
import { setCookie } from '../../utils/common';

export async function SignUp(params: UserInterface) {
    return await service.post("developer", params)
}
export async function SignIn<UserInterface>(params: { username: string, password: string }) {
    const response = await service.post("auth/login", params);
    if (response.headers['access-token']) {
        service.defaults.headers.common["access-token"] =
            response.headers["access-token"] || "";
        setCookie("access-token", response.headers["access-token"]);
    }
    return response.data
}
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