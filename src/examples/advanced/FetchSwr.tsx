import { FC } from 'react';
import useSWR, { Fetcher } from 'swr';

type Items = { objectID: string; title: string }[];
const fetcher: Fetcher<Items> = (url: string) => fetch(url).then(res => res.json().then(data => data.hits));

const FetchSwr: FC = () => {
  const { data, error } = useSWR('https://hn.algolia.com/api/v1/search?query=redux', fetcher);

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  if (!data) {
    return <p>Loading atesfdsfsfs...</p>;
  }

  return (
    <div>
      {data.map(({ objectID, title }) => (
        <p key={objectID}>{title}</p>
      ))}
    </div>
  );
};

export default FetchSwr;
