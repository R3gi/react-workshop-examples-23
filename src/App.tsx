import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Components } from './examples/components/Components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Components />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
