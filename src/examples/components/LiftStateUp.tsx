import React, { FC, FormEvent, useState } from 'react';

const TodoList: FC<{ todos: string[]; onClick: (index: number) => void }> = ({ todos, onClick }) => (
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

const Control: FC<{ onClick: (value: string) => void }> = ({ onClick }) => {
  const [value, setValue] = useState<string>('');

  const handleOnChange = (event: FormEvent<HTMLInputElement>) => {
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

const LiftStateUp: FC<{ title: string }> = ({ title }) => {
  const [todos, setTodos] = useState<string[]>([]);

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
