import { ChangeEvent, SyntheticEvent, useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { MemoizedListOfItems, ListOfItems } from './ListOfItems';
import { TItem } from './types';

const initialState = [
  { value: '1', id: uuid() },
  { value: '2', id: uuid() },
  { value: '3', id: uuid() },
  { value: '4', id: uuid() },
];

export const MemoizedApp = () => {
  console.log('Rendering <MemoizedApp />');

  const [items, setItems] = useState<TItem[]>(initialState);
  const [newItem, setNewItem] = useState<TItem>({ value: '', id: uuid() });

  const addItem = (event: SyntheticEvent) => {
    event.preventDefault();

    if (newItem.value === '') {
      return;
    }

    setItems([...items, newItem]);

    setNewItem({ value: '', id: uuid() });
  };

  const handleRemove = useCallback((id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  }, []);

  const handleChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setNewItem({ value, id: newItem.id });
    },
    [newItem.id],
  );

  return (
    <div className="App">
      <form onSubmit={addItem}>
        <input placeholder="New number" type="number" value={newItem.value} onChange={handleChange} />

        <input type="submit" value="Add" />
      </form>

      <MemoizedListOfItems items={items} onRemove={handleRemove} />
    </div>
  );
};

export const ToOptimizeApp = () => {
  console.log('Rendering <App />');

  const [items, setItems] = useState(initialState);
  const [newItem, setNewItem] = useState({ value: '', id: uuid() });

  const addItem = (event: SyntheticEvent) => {
    event.preventDefault();

    if (newItem.value === '') {
      return;
    }

    setItems(prevItems => [...prevItems, newItem]);

    setNewItem(() => ({ value: '', id: uuid() }));
  };

  const handleRemove = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewItem({ value: event.target.value, id: newItem.id });
  };

  return (
    <div className="App">
      <form onSubmit={addItem}>
        <input placeholder="New number" type="number" value={newItem.value} onChange={handleChange} />

        <input type="submit" value="Add" />
      </form>

      <ListOfItems items={items} onRemove={handleRemove} />
    </div>
  );
};
