import { createReducer } from "typesafe-actions";
import { IssueListState, IssueListAction } from "./types";
import {
    GET_ISSUELIST,
    GET_ISSUELIST_SUCCESS,
    GET_ISSUELIST_ERROR,
} from "./actions";

const initialState: IssueListState = {
    issueList: {
        loading: false,
        error: null,
        list: [],
        pageable: {
            page: 0,
            hasMore: true,
            totalPages: 0,
            totalElements: 0,
        },
    },
};

const list = createReducer<IssueListState, IssueListAction>(initialState, {
    [GET_ISSUELIST]: (state) => ({
        ...state,
        issueList: {
            loading: true,
            error: null,
            list: [...state.issueList.list],
            pageable: { ...state.issueList.pageable },
        },
    }),
    [GET_ISSUELIST_SUCCESS]: (state, action) => ({
        ...state,
        issueList: {
            loading: false,
            error: null,
            list:
                action.payload.pageable.page == 0
                    ? [...action.payload.list]
                    : [...state.issueList.list, ...action.payload.list],
            pageable: {
                page: action.payload.pageable.hasMore
                    ? action.payload.pageable.page + 1
                    : action.payload.pageable.page,
                hasMore: action.payload.pageable.hasMore,
                totalPages: action.payload.pageable.totalPages,
                totalElements: action.payload.pageable.totalElements,
            },
        },
    }),
    [GET_ISSUELIST_ERROR]: (state, action) => ({
        ...state,
        issueList: {
            loading: false,
            error: action.payload,
            list: [],
            pageable: {},
        },
    }),
});

export default list;
