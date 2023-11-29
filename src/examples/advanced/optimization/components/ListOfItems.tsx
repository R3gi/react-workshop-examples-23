import { FC, memo, useCallback } from 'react';
import { Item, MemoizedItem } from './Item';
import { TItem } from './types';

export const MemoizedListOfItems = memo(({ items, onRemove }: { items: TItem[]; onRemove: (id: string) => void }) => {
  console.log('Rendering <MemoizedListOfItems />');

  const handleRemove = useCallback((id: string) => onRemove(id), [onRemove]); // highlight-line

  if (items.length === 0) {
    return null;
  }

  return (
    <ul>
      {items.map(item => (
        <MemoizedItem {...item} key={item.id} onRemove={handleRemove} />
      ))}
    </ul>
  );
});

MemoizedListOfItems.displayName = 'MemoizedListOfItems';

export const ListOfItems: FC<{ items: TItem[]; onRemove: (id: string) => void }> = ({ items, onRemove }) => {
  console.log('Rendering <ListOfItems />');

  if (items.length === 0) {
    return null;
  }

  return (
    <ul>
      {items.map(item => (
        <Item {...item} key={item.id} onRemove={(id: string) => onRemove(id)} />
      ))}
    </ul>
  );
};
