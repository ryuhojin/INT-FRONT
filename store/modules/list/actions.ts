import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
import { responseIssueListInterface } from "../../../interfaces/issue";

export const GET_ISSUELIST = 'list/GET_ISSUELIST';
export const GET_ISSUELIST_SUCCESS = 'list/GET_ISSUELIST_SUCCESS';
export const GET_ISSUELIST_ERROR = 'list/GET_ISSUELIST_ERROR'

export const getIssuListAsync = createAsyncAction(
    GET_ISSUELIST, GET_ISSUELIST_SUCCESS, GET_ISSUELIST_ERROR
)<undefined, responseIssueListInterface, AxiosError>();