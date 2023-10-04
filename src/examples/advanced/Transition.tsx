import { useState, useTransition, useMemo, ChangeEvent, FC } from 'react';

interface ItemProps {
  value: string;
}

const Item: FC<ItemProps> = ({ value }) => <p>{value}</p>;

const SIZE = 2000;
const list = Array(SIZE)
  .fill(null)
  .map((_, index) => ({ id: index, name: `bar${index.toString()}` }));

export const Transition: FC = () => {
  const [name, setName] = useState('');
  const [filteredList, setFilteredList] = useState<{ id: number; name: string }[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    startTransition(() => {
      setFilteredList(list.filter(item => name !== '' && item.name.includes(name)));
    });
  };

  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      {filteredList.map(item => (
        <Item key={item.id} value={item.name} />
      ))}
    </>
  );
};
