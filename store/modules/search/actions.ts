import { createAction, createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
import { responseIssueListInterface } from "../../../interfaces/issue";

/** EXPORT ACTION NAME */
export const GET_SEARCHLIST = 'search/GET_SEARCHLIST';
export const GET_SERACHLIST_SUCCESS = 'search/GET_SERACHLIST_SUCCESS';
export const GET_SEARCHLIST_ERROR = 'search/GET_SEARCHLIST_ERROR';
export const GET_SCROLLLIST = 'search/GET_SCROLLLIST';
export const GET_SCROLLLIST_SUCCESS = 'search/GET_SCROLLLIST_SUCCESS';
export const GET_SCROLLLIST_ERROR = 'search/GET_SCROLLLIST_ERROR';
export const SET_SEARCH = 'search/SET_SEARCH';

/** ACTION */
export const getSearchListAsync = createAsyncAction(
    GET_SEARCHLIST, GET_SERACHLIST_SUCCESS, GET_SEARCHLIST_ERROR
)<undefined, responseIssueListInterface, AxiosError>();

export const getSearchScrollAsync = createAsyncAction(
    GET_SCROLLLIST, GET_SCROLLLIST_SUCCESS, GET_SCROLLLIST_ERROR
)<undefined, responseIssueListInterface, AxiosError>();

export const setSearchAsync = createAction(SET_SEARCH)<string>();