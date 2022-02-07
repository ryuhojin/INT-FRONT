import * as actions from './actions'
import { ActionType } from 'typesafe-actions'

export type IssueListAction = ActionType<typeof actions>;

export type IssueListState = {
    issueList: {
        loading: boolean;
        error: Error | null;
        list: [];
        pageable: {};
    }
}