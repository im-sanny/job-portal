import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home';
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';
import CardDetails from '../pages/CardDetails';
import AddCard from '../pages/AddCard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/job/:id',
        element: <CardDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: '/add-card',
        element: <AddCard />,
      },
    ],
  },
]);

export default router;
