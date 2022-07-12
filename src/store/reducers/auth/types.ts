import {IUser} from '@app/models/IUser';

export enum AuthActionEnum {
  SET_AUTH = 'SET_AUTH',
  SET_ERROR = 'SET_ERROR',
  SET_LOADING = 'SET_LOADING',
  SET_USER = 'SET_USER',
}

export interface AuthState {
  error: string;
  isAuth: boolean;
  isLoading: boolean;
  user: IUser;
}

export interface SetAuthAction {
  type: AuthActionEnum.SET_AUTH;
  payload: boolean;
}

export interface SetErrorAction {
  type: AuthActionEnum.SET_ERROR;
  payload: string;
}

export interface SetLoadingAction {
  type: AuthActionEnum.SET_LOADING;
  payload: boolean;
}

export interface SetUserAction {
  type: AuthActionEnum.SET_USER;
  payload: IUser;
}

export type AuthAction = SetAuthAction
  | SetErrorAction
  | SetLoadingAction
  | SetUserAction;
