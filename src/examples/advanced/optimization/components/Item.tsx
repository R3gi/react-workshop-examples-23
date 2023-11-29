import { FC, memo, useMemo } from 'react';

const squareRoot = (num: string) => (Math.round(Math.sqrt(parseInt(num, 10)) * 100) / 100).toFixed(2);

export const MemoizedItem = memo(
  ({ value, id, onRemove }: { value: string; id: string; onRemove: (id: string) => void }) => {
    console.log('Rendering <MemoizedItem />');

    const formattedItemText = useMemo(() => {
      // highlight-line

      console.log(`getFormattedItemText called for number ${value}`);

      return `Square root of ${value} is ${squareRoot(value)}`;
    }, [value]); // highlight-line

    return (
      <li>
        {formattedItemText}

        <button type="button" onClick={() => onRemove(id)}>
          Remove
        </button>
      </li>
    );
  },
);

MemoizedItem.displayName = 'MemoizedItem';

export const Item: FC<{ value: string; id: string; onRemove: (id: string) => void }> = ({ value, id, onRemove }) => {
  console.log('Rendering <Item />');

  const getFormattedItemText = () => {
    console.log(`getFormattedItemText called for number ${value}`);

    return `Square root of ${value} is ${squareRoot(value)}`;
  };

  return (
    <li>
      {getFormattedItemText()}

      <button type="button" onClick={() => onRemove(id)}>
        Remove
      </button>
    </li>
  );
};
