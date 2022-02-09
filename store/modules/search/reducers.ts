import { createReducer } from "typesafe-actions";
import { SearchListState, SearchListAction } from "./types";
import {
    GET_SEARCHLIST,
    GET_SERACHLIST_SUCCESS,
    GET_SEARCHLIST_ERROR,
    GET_SCROLLLIST,
    GET_SCROLLLIST_SUCCESS,
    GET_SCROLLLIST_ERROR,
    SET_SEARCH
} from "./actions";

const initialState: SearchListState = {
    searchList: {
        loading: false,
        error: null,
        list: [],
        pageable: {
            page: 0,
            hasMore: true,
            totalPages: 0,
            totalElements: 0,
            query: "",
        },
    },
    search: ""
};

const list = createReducer<SearchListState, SearchListAction>(initialState, {
    [GET_SEARCHLIST]: (state, action) => ({
        ...state,
        searchList: {
            loading: true,
            error: null,
            list: [],
            pageable: {
                page: 0,
                hasMore: true,
                totalPages: 0,
                totalElements: 0,
            },
        },
    }),
    [GET_SERACHLIST_SUCCESS]: (state, action) => ({
        ...state,
        searchList: {
            loading: false,
            error: null,
            list: [...action.payload.list],
            pageable: {
                page: action.payload.pageable.hasMore
                    ? action.payload.pageable.page + 1
                    : action.payload.pageable.page,
                hasMore: action.payload.pageable.hasMore,
                totalPages: action.payload.pageable.totalPages,
                totalElements: action.payload.pageable.totalElements,
                query: action.payload.pageable.query,
            },
        },
    }),
    [GET_SEARCHLIST_ERROR]: (state, action) => ({
        ...state,
        searchList: {
            loading: false,
            error: action.payload,
            list: [],
            pageable: {},
        },
    }),
    [GET_SCROLLLIST]: (state) => ({
        ...state,
        searchList: {
            loading: true,
            error: null,
            list: [...state.searchList.list],
            pageable: { ...state.searchList.pageable },
        },
    }),
    [GET_SCROLLLIST_SUCCESS]: (state, action) => ({
        ...state,
        searchList: {
            loading: false,
            error: null,
            list: [...state.searchList.list, ...action.payload.list],
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
    [GET_SCROLLLIST_ERROR]: (state, action) => ({
        ...state,
        searchList: {
            loading: false,
            error: action.payload,
            list: [],
            pageable: {},
        },
    }),
    [SET_SEARCH]: (state, action) => ({
        ...state,
        search: action.payload
    })
});

export default list;
