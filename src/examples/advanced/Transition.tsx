import { useState, useTransition, useMemo, ChangeEvent } from 'react';

// export const Transition: React.FC = () => {
//   const [isPending, startTransition] = useTransition();
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     startTransition(() => {
//       setCount(prevCount => prevCount + 1);
//     });
//   };

//   return (
//     <div>
//       {isPending && <p>Loading...</p>}
//       <button onClick={handleClick}>{count}</button>
//     </div>
//   );
// };

const SIZE = 2000;
const list = Array(SIZE)
  .fill(null)
  .map((_, index) => ({ id: index, name: `bar${index.toString()}` }));

export const Transition: React.FC = () => {
  const [name, setName] = useState('');
  const [isPending, startTransition] = useTransition();
  const bigList = useMemo(() => list.filter(item => name !== '' && item.name.includes(name)), [name]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setName(event.target.value);
    });
  };

  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      {bigList.map(item => (
        <Item key={item.id} value={item.name} />
      ))}
    </>
  );
};

interface ItemProps {
  value: string;
}

const Item: React.FC<ItemProps> = ({ value }) => <p>{value}</p>;
