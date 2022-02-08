import { createReducer } from "typesafe-actions";
import { UserState, UserAction } from "./types";
import {
  SET_LOGIN,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR,
  SET_LOGOUT,
  SET_REFRESH,
  SET_REFRESH_SUCCESS,
  SET_REFRESH_ERROR,
  SET_UPDATE,
} from "./actions";

const initialState: UserState = {
  user: {
    loading: false,
    error: null,
    user: {},
  },
};

const user = createReducer<UserState, UserAction>(initialState, {
  [SET_LOGIN]: (state, action) => ({
    ...state,
    user: {
      loading: true,
      error: null,
      user: {},
    },
  }),
  [SET_LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    user: {
      loading: false,
      error: null,
      user: action.payload,
    },
  }),
  [SET_LOGIN_ERROR]: (state, action) => ({
    ...state,
    user: {
      loading: false,
      error: action.payload,
      user: {},
    },
  }),
  [SET_REFRESH]: (state, action) => ({
    ...state,
    user: {
      loading: true,
      error: null,
      user: {},
    },
  }),
  [SET_REFRESH_SUCCESS]: (state, action) => ({
    ...state,
    user: {
      loading: false,
      error: null,
      user: action.payload,
    },
  }),
  [SET_REFRESH_ERROR]: (state, action) => ({
    ...state,
    user: {
      loading: false,
      error: action.payload,
      user: {},
    },
  }),
  [SET_LOGOUT]: (state) => ({
    ...state,
    user: {
      loading: false,
      error: null,
      user: {},
    },
  }),
  [SET_UPDATE]: (state, action) => ({
    ...state,
    user: {
      loading: false,
      error: null,
      user: action.payload,
    },
  }),
});
export default user;
