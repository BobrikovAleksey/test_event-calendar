import axios from 'axios';
import {IUser} from '@app/models/IUser';
import {AppDispatch} from '@app/store';
import {links} from '@app/utils/links';
import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetLoadingAction,
  SetUserAction,
} from './types';

export const setAuth = (auth: boolean): SetAuthAction => ({
  type: AuthActionEnum.SET_AUTH,
  payload: auth,
});

export const setError = (error: string): SetErrorAction => ({
  type: AuthActionEnum.SET_ERROR,
  payload: error,
});

export const setLoading = (loading: boolean): SetLoadingAction => ({
  type: AuthActionEnum.SET_LOADING,
  payload: loading,
});

export const setUser = (user: IUser): SetUserAction => ({
  type: AuthActionEnum.SET_USER,
  payload: user,
});

export const login = (username: string, password: string) => (
  async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      setTimeout(async () => {
        const response = await axios.get<Array<IUser>>(links.users);
        const mockUser = response.data.find((user) => (
          (user.username === username) && (user.password === password)
        ));
        if (mockUser) {
          dispatch(setUser(mockUser));
          dispatch(setAuth(true));
          localStorage.setItem('user', JSON.stringify({
            username: mockUser.username,
            token: mockUser.token,
          }));
        } else {
          dispatch(setError('Некорректные имя пользователя или пароль'));
        }
      }, 1000)
    } catch (e) {
      dispatch(setError(`Произошла ошибка при входе: ${e}`));
    }
  }
)

export const logout = () => (
  async (dispatch: AppDispatch) => {
    try {
      dispatch(setUser({} as IUser));
      dispatch(setAuth(false));
      localStorage.removeItem('user');
    } catch (e) {
      dispatch(setError(`Произошла ошибка при выходе: ${e}`));
    }
  }
)

export const AuthActionCreators = {
  login,
  logout,
  setAuth,
  setError,
  setLoading,
  setUser,
};

export default AuthActionCreators;
