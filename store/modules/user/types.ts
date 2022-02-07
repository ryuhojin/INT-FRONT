import * as actions from './actions'
import { ActionType } from 'typesafe-actions'

export type UserAction = ActionType<typeof actions>;

export type UserState = {
    user: {
        loading: boolean;
        error: Error | null;
        user: {};
    }
}