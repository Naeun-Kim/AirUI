import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout';
import Home from './routes/home';
import Components from './routes/components';
import Card from './components/Card/Card';
import Tab from '@components/Tab/Tab';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'components',
        element: <Components />,
        children: [
          {
            path: 'card',
            element: <Card />,
          },
          {
            path: 'tab',
            element: <Tab />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
