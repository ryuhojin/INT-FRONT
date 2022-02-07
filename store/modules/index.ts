import { AnyAction, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import list from "./list";
import search from "./search";
import user from "./user";
const reducer = (state: any, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload }
        default:
            return combineReducers({
                search: search,
                list: list,
                user: user
            })(state, action);
    }
}
export default reducer;
export type RootState = ReturnType<typeof reducer>;