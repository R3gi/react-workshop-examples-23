import { QueryClient, QueryClientProvider } from 'react-query';
import { FC } from 'react';
import FetchReactQuery from './FetchReactQuery';

const queryClient = new QueryClient();

const ReactQuery: FC = () => (
  <QueryClientProvider client={queryClient}>
    <FetchReactQuery />
  </QueryClientProvider>
);

export default ReactQuery;
