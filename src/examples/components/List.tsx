import { FC } from 'react';

export const List: FC<{ numbers: number[]; type: 'a' | 'b' }> = ({ numbers, type }) => (
  <ul>
    {numbers.map((number, index) => (
      // eslint-disable-next-line @typescript-eslint/no-use-before-define, react/no-array-index-key
      <ListItem key={type + number + index} value={number} />
    ))}
  </ul>
);

const ListItem = ({ value }: { value: number }) => <li>{value}</li>;
