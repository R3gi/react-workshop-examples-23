import { Suspense, lazy } from 'react';

const DynamicFetch = lazy(() => import('./FetchSwr'));

export const SuspenseDemo: React.FC = () => (
  <Suspense fallback={`Loading...`}>
    <DynamicFetch />
  </Suspense>
);
