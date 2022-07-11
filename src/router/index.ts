import Events from '@app/pages/Events';
import Login from '@app/pages/Login';
import {PathList, TRoutes} from './types';

export const privateRoutes: TRoutes = [
  {
    path: PathList.EVENTS,
    component: Events,
  },
];

export const publicRoutes: TRoutes = [
  {
    path: PathList.LOGIN,
    component: Login,
  }
];
