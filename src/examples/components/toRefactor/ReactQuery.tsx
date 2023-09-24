import { QueryClient, QueryClientProvider } from 'react-query';
import FetchReactQuery from './FetchReactQuery';
import { FC } from 'react';

const queryClient = new QueryClient();

const ReactQuery: FC = () => (
  <QueryClientProvider client={queryClient}>
    <FetchReactQuery />
  </QueryClientProvider>
);

export default ReactQuery;
