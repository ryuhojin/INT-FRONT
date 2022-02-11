import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { UserAction } from "./types";
import { SignIn, SignRe, updateUserInfo } from "../../../api/modules/user";
import {
  setSignInAsync,
  setSignOutAsync,
  setSignReAsync,
  setUpdateUserAsync,
} from "./actions";
import Router from "next/router";
import { delCookie } from "../../../utils/common";

export function setSignInThunk(params: {
  username: string;
  password: string;
}): ThunkAction<void, RootState, null, UserAction> {
  return async (dispatch) => {
    const { request, success, failure } = setSignInAsync;
    dispatch(request());
    try {
      const data = await SignIn(params);
      dispatch(success(data));
      Router.back();
    } catch (e: any) {
      alert("아이디 혹은 비밀번호가 일치하지 않습니다.")
      dispatch(failure(e));
    }
  };
}

export function setSignReThunk(): ThunkAction<
  void,
  RootState,
  null,
  UserAction
> {
  return async (dispatch) => {
    const { request, success, failure } = setSignReAsync;
    dispatch(request());
    try {
      const data = await SignRe();
      dispatch(success(data));
    } catch (e: any) {
      alert("토큰이 만료되어 재로그인이 필요합니다.")
      delCookie('access-token')
      dispatch(setSignOutAsync());
      Router.push('/user')
    }
  };
}

export function setSignOutThunk(): ThunkAction<
  void,
  RootState,
  null,
  UserAction
> {
  return async (dispatch) => {
    dispatch(setSignOutAsync());
  };
}

export function setUpdateUserThunk(params: {
  userId: string;
  name: string;
  email: string;
  gitUrl: string;
  webSiteUrl: string;
  groupName: string;
}): ThunkAction<void, RootState, null, UserAction> {
  return async (dispatch) => {
    const data = await updateUserInfo(params);
    dispatch(setUpdateUserAsync(data));
  };
}
