import { FC, Suspense, lazy } from 'react';

const DynamicFetch = lazy(() => import('./FetchSwr'));

export const SuspenseDemo: FC = () => (
  <Suspense fallback={`Loading...`}>
    <DynamicFetch />
  </Suspense>
);
