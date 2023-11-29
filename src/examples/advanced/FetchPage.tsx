import { FetchSwr } from '../components/fetching/FetchSwr';
import { withVisibility } from './hocs/withVisibility';

const FetchWithVisibility = withVisibility(FetchSwr);

export const FetchPage = () => <FetchWithVisibility isVisible />;
