import { createAsyncAction, createAction } from "typesafe-actions";
import { AxiosError } from "axios";
import { UserInterface } from "../../../interfaces/user"
/** EXPORT ACTION NAME */
export const SET_LOGIN = 'login/SET_LOGIN';
export const SET_LOGIN_SUCCESS = 'login/SET_LOGIN_SUCCESS';
export const SET_LOGIN_ERROR = 'login/SET_LOGIN_ERROR';

export const SET_REFRESH = 'login/SET_REFRESH';
export const SET_REFRESH_SUCCESS = 'login/SET_REFRESH_SUCCESS';
export const SET_REFRESH_ERROR = 'login/SET_REFRESH_ERROR';

export const SET_LOGOUT = 'login/SET_LOGOUT'

/** ACTION */
export const setSignInAsync = createAsyncAction(
    SET_LOGIN, SET_LOGIN_SUCCESS, SET_LOGIN_ERROR
)<undefined, UserInterface, AxiosError>();

export const setSignReAsync = createAsyncAction(
    SET_REFRESH, SET_REFRESH_SUCCESS, SET_REFRESH_ERROR
)<undefined, UserInterface, AxiosError>();

export const setSignOutAsync = createAction(SET_LOGOUT)();