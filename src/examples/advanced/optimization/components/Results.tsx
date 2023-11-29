import { SyntheticEvent, useEffect, useMemo, useRef, useState } from 'react';
import { Form } from './Form';
import { ResultList } from './ResultList';

type THits = { title: string }[];

const transformData = (hits: THits) =>
  hits.filter(({ title }) => title).map(({ title }, index) => ({ title, id: index + 1 }));

const fetchHits = async (query: string): Promise<THits> => {
  try {
    const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
    const { hits } = await response.json();

    return hits;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return [];
  }
};

export const Results = () => {
  const [data, setData] = useState<THits>([]);
  const [query, setQuery] = useState('');
  const [activeItem, setActiveItem] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const hits = await fetchHits(query);

      setData(hits);
    };

    fetchData();
  }, [query]);

  //   const items = useMemo(() => transformData(data), [data]);
  const items = transformData(data);

  const handleBlur = () => {
    inputRef.current?.blur();
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setQuery(inputRef.current?.value || '');
    handleBlur();
  };

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <div>
        <Form inputRef={inputRef} handleSubmit={handleSubmit} />
      </div>
      <div>
        <ResultList
          items={items}
          setActiveItem={setActiveItem}
          activeItem={activeItem}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
        />
      </div>
    </>
  );
};
