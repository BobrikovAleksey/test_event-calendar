import {IUser} from '@app/models/IUser';
import {AuthAction, AuthActionEnum, AuthState} from './types';

const initialAuth: AuthState = {
  isAuth: false,
  isLoading: false,
  error: '',
  user: {} as IUser,
};

export default function authReducer(state = initialAuth, action: AuthAction): AuthState {
  switch (action.type) {
    default: return state;
    case AuthActionEnum.SET_AUTH:
      return {...state, isAuth: action.payload, isLoading: false};
    case AuthActionEnum.SET_ERROR:
      return {...state, error: action.payload, isLoading: false};
    case AuthActionEnum.SET_LOADING:
      return {...state, isLoading: action.payload};
    case AuthActionEnum.SET_USER:
      return {...state, user: action.payload};
  }
}
