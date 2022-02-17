import {
  refresh,
  login,
  register,
  deleteUser,
  updateUser,
} from "../api/modules/user";
import { cookie } from "./common";
import service from "../api";
import { useRecoilState } from "recoil";
import { authAtom } from "../store/atom";

export function useAuth() {
  const [auth, setAuth] = useRecoilState(authAtom);

  async function signin(params: any) {
    const response = await login(params);
    await handleUserResponse(response);
  }
  async function signup(params: any) {
    const response = await register(params);
    await handleUserResponse(response);
  }
  async function signre() {
    if (!cookie.getCookie("access-token")) return null;
    service.defaults.headers.common["access-token"] = String(
      cookie.getCookie("access-token")
    );
    const response = await refresh();
    await handleUserResponse(response);
  }
  async function signout() {
    cookie.delCookie("access-token");
    setAuth(null);
  }
  async function handleUserResponse(params: any) {
    const { headers, data } = params;
    setAuth(data);
    service.defaults.headers.common["userId"] = data.userId;
    if (!headers["access-token"]) return;
    cookie.setCookie("access-token", headers["access-token"]);
    service.defaults.headers.common["access-token"] = headers["access-token"];
  }
  async function deluser(userId: string) {
    await deleteUser(userId);
    cookie.delCookie("access-token");
    setAuth(null);
  }
  async function uptuser(params: any) {
    const { data } = await updateUser(params);
    setAuth(data);
  }
  return {
    signin,
    signout,
    signup,
    signre,
    deluser,
    uptuser,
  };
}
