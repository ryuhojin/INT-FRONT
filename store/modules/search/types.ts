import * as actions from './actions'
import { ActionType } from 'typesafe-actions'

export type SearchListAction = ActionType<typeof actions>;

export type SearchListState = {
    searchList: {
        loading: boolean;
        error: Error | null;
        list: [];
        pageable: {};
    }
}