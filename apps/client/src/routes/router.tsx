import { createBrowserRouter } from 'react-router-dom';
import Home from '@/app/page/Home';
import { AppLayout } from '@/app/layout/AppLayout';

export const router = createBrowserRouter([
  // {
  //   path: '/index',
  //   element: <div>Loading...</div>,
  // },
  {
    path: '/app',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
