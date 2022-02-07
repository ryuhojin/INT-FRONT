import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { UserAction } from "./types";
import { SignIn, SignRe } from "../../../api/modules/user";
import { setSignInAsync, setSignOutAsync, setSignReAsync } from "./actions";

export function setSignInThunk(params: { username: string, password: string }): ThunkAction<void, RootState, null, UserAction> {
    return async dispatch => {
        const { request, success, failure } = setSignInAsync;
        dispatch(request());
        try {
            const data = await SignIn(params);
            dispatch(success(data));
        } catch (e: any) {
            dispatch(failure(e))
        }
    }
}

export function setSignReThunk(): ThunkAction<void, RootState, null, UserAction> {
    return async dispatch => {
        const { request, success, failure } = setSignReAsync;
        dispatch(request());
        try {
            const data = await SignRe();
            dispatch(success(data));
        } catch (e: any) {
            dispatch(failure(e))
        }
    }
}

export function setSignOutThunk(): ThunkAction<void, RootState, null, UserAction> {
    return async dispatch => {
        dispatch(setSignOutAsync());
    }
};
