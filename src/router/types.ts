import {ComponentType} from 'react';

export enum PathList {
  EVENTS = '/',
  LOGIN = '/login',
  LOGOUT = '/logout',
  PROFILE = '/profile'
}

export interface IRoute {
  component: ComponentType;
  path: string;
}

export type TRoutes = Array<IRoute>;
