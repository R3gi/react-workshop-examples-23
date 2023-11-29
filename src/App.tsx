/* eslint-disable no-console */
import { Profiler } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Components } from './examples/components/Components';
import { MemoizedApp, ToOptimizeApp } from './examples/advanced/optimization/components/App';
import { Results } from './examples/advanced/optimization/components/Results';

const callback = (
  id: string,
  phase: string,
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number,
) => {
  console.log(`${id}'s ${phase} phase:`);
  console.log(`Actual duration: ${actualDuration}`);
  console.log(`Base duration: ${baseDuration}`);
  console.log(`Start time: ${startTime}`);
  console.log(`Commit time: ${commitTime}`);
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Components />,
      },
      {
        path: 'to-optimize',
        element: (
          <Profiler id="ToOptimizeApp" onRender={callback}>
            <ToOptimizeApp />
          </Profiler>
        ),
      },
      {
        path: 'optimized',
        element: (
          <Profiler id="ToOptimizeApp" onRender={callback}>
            <MemoizedApp />
          </Profiler>
        ),
      },
      {
        path: 'results',
        element: (
          <Profiler id="ResultsApp" onRender={callback}>
            <Results />
          </Profiler>
        ),
      },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;
