import { lazy } from 'react';

const AppRoutes = [
  {
    id: 1,
    path: '/',
    component: lazy(() => import('container/pages/Contact')),
    exact: true
  },
];


export { AppRoutes};
