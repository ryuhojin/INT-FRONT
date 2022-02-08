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
    } catch (e: any) {
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
      dispatch(failure(e));
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
}): ThunkAction<void, RootState, null, UserAction> {
  return async (dispatch) => {
    const data = await updateUserInfo(params);
    dispatch(setUpdateUserAsync(data));
  };
}
