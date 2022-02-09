import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { SearchListAction } from "./types";
import { getIssueList } from "../../../api/modules/issue";
import { getSearchListAsync, getSearchScrollAsync } from "./actions";

export function getSearchListThunk(query: string): ThunkAction<void, RootState, null, SearchListAction> {
    return async (dispatch) => {

        const { request, success, failure } = getSearchListAsync;
        dispatch(request());
        try {
            const list = await getIssueList({ page: 0, query: query });
            dispatch(success(list));
        } catch (e: any) {
            dispatch(failure(e));
        }
    };
}

export function getSearchScrollThunk(page: number, query: string): ThunkAction<void, RootState, null, SearchListAction> {
    return async (dispatch) => {
        const { request, success, failure } = getSearchScrollAsync;
        dispatch(request());
        try {
            const list = await getIssueList({ page: page, query: query });
            dispatch(success(list));
        } catch (e: any) {
            dispatch(failure(e));
        }
    };
}
