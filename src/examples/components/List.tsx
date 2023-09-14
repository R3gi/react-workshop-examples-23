const List: React.FC<{ numbers: number[]; type: 'a' | 'b' }> = ({ numbers, type }) => (
  <ul>
    {numbers.map((number, index) => (
      <ListItem key={type + number + index} value={number} />
    ))}
  </ul>
);

const ListItem = ({ value }: { value: number }) => <li>{value}</li>;

export default List;
