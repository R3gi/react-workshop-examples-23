import React from 'react';

const TodoList: React.FC<{ todos: string[]; onClick: (index: number) => void }> = ({ todos, onClick }) => (
  <ul>
    {todos.map((todo, index) => (
      <li key={`list-${index}`}>
        {todo}
        <button type="button" onClick={() => onClick(index)}>
          x
        </button>
      </li>
    ))}
  </ul>
);

const Control: React.FC<{ onClick: (value: string) => void }> = ({ onClick }) => {
  const [value, setValue] = React.useState<string>('');

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const clear = () => {
    setValue(() => '');
  };

  const handleOnClick = () => {
    onClick(value);
    clear();
  };

  return (
    <div>
      <input onChange={handleOnChange} type="text" value={value} />
      <button type="button" onClick={handleOnClick}>
        Add Todo
      </button>
    </div>
  );
};

const LiftStateUp: React.FC<{ title: string }> = ({ title }) => {
  const [todos, setTodos] = React.useState<string[]>([]);

  const addTodo = (todo: string) => {
    setTodos(todos => [...todos, todo]);
  };

  const deleteTodo = (index: number) => {
    setTodos(todos => todos.filter((_, position) => position !== index));
  };

  return (
    <div>
      {title}
      <Control onClick={addTodo} />
      <TodoList todos={todos} onClick={deleteTodo} />
    </div>
  );
};

export default LiftStateUp;
