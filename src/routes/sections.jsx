import { lazy, Suspense } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import DashboardLayout from '../layouts/dashboard';

export const Cronograma = lazy(() => import('../pages/cronograma/cronograma'));
export const Page404 = lazy(() => import('../pages/page-not-found'));
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <Cronograma />, index: true },
        { element: <Cronograma />, path: '/' },
        { element: <Cronograma />, path: 'cronograma' },


      ],
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
