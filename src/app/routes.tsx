import { Outlet, useRoutes } from 'react-router-dom'
import { Home, About } from '@/pages'
import { Layout } from '@/features/Layout'

export const Routes = () =>
  useRoutes([
    {
      path: '/',
      element: <Layout main={<Outlet />} />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
      ],
    },
  ])
