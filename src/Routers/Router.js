import { createBrowserRouter } from 'react-router-dom';
import Cherts from '../components/Home/Cherts/Cherts';
import Home from '../components/Home/Home';
import Productes from '../components/Home/Productes/Productes';
import ProductesDetils from '../components/Home/Productes/ProductesDetils';
import UserDetils from '../components/Home/useres/UserDetils';
import UseresTable from '../components/Home/useres/UseresTable';
import MinLayout from '../components/Layouts/MinLayout';
import Login from '../components/log/Login';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MinLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        index: true,
        element: <Cherts />,
      },
      {
        path: '/home/users',
        element: <UseresTable />,
      },
      {
        path: '/home/productes',
        element: <Productes />,
      },
      {
        path: '/home/productes/:id',
        element: <ProductesDetils />,
      },
      {
        path: '/home/users/:id',
        element: <UserDetils />,
      },
    ],
  },
]);
export default Router;
