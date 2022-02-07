import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { IssueListAction } from "./types";
import { getIssueList } from "../../../api/modules/issue";
import { getIssuListAsync } from "./actions";

export function getListThunk(page: number): ThunkAction<void, RootState, null, IssueListAction> {
    return async dispatch => {
        const { request, success, failure } = getIssuListAsync;
        dispatch(request());
        try {
            const list = await getIssueList({ page: page });
            dispatch(success(list));
        } catch (e: any) {
            dispatch(failure(e))
        }
    }
}