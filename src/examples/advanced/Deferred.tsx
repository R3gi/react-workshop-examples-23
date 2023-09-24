import { useId, useDeferredValue, useMemo, FC } from 'react';

const SIZE = 2000;
const list = Array(SIZE)
  .fill(null)
  .map((_, index) => ({ id: index, name: `bar${index.toString()}` }));

export const Deferred: FC<{ name: string }> = ({ name }) => {
  const deferredName = useDeferredValue(name);
  const bigList = useMemo(
    () => list.filter(item => deferredName !== '' && item.name.includes(deferredName)),
    [deferredName],
  );

  return (
    <>
      {bigList.map(item => (
        <Item key={item.id} value={item.name} />
      ))}
    </>
  );
};

interface ItemProps {
  value: string;
}

const Item: FC<ItemProps> = ({ value }) => <p>{value}</p>;

export const Id = () => {
  const id = useId();

  return (
    <>
      <div className="field">
        <label htmlFor={`${id}-name`}>Name</label>
        <input type="text" name="name" id={`${id}-name`} />
      </div>
      <div className="field">
        <label htmlFor={`${id}-address`}>Address</label>
        <input type="text" aria-labelledby={`${id}-name ${id}-address`} />
      </div>
      <div className="field">
        <label htmlFor={`${id}-passport`}>Do you have passport?</label>
        <input type="checkbox" name="passport" id={`${id}-passport`} />
      </div>
    </>
  );
};
