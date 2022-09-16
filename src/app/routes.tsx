import { useRoutes } from 'react-router-dom'
import { Main } from '@/pages'

export const Routes = () =>
  useRoutes([
    {
      path: '/',
      element: <Main />,
    },
  ])
