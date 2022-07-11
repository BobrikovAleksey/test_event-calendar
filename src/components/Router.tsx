import {createElement, FC} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {PathList} from '@app/router/types';
import {privateRoutes, publicRoutes} from '@app/router';

export const PrivateRouter: FC = () => (
  <Routes>
    {
      privateRoutes.map((route) =>
        <Route key={route.path} path={route.path}
               element={createElement(route.component)}
        />
      )
    }
    <Route
      path="*"
      element={<Navigate to={PathList.EVENTS} replace />}
    />
  </Routes>
);

export const PublicRouter: FC = () => (
  <Routes>
    {
      publicRoutes.map((route) =>
        <Route key={route.path} path={route.path}
               element={createElement(route.component)}
        />
      )
    }
    <Route
      path="*"
      element={<Navigate to={PathList.LOGIN} replace />}
    />
  </Routes>
);
