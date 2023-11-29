import { FC, Suspense, lazy } from 'react';

const DynamicFetch = lazy(() =>
  import('../components/fetching/FetchSwr').then(({ FetchSwr }) => ({ default: FetchSwr })),
);

export const SuspenseDemo: FC = () => (
  <Suspense fallback="Loading...">
    <DynamicFetch />
  </Suspense>
);
