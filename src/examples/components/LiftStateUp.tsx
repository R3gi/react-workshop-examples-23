import React, { FC, FormEvent, useState } from 'react';

const TodoItem: FC<{ children: string; onClick: () => void }> = ({ children, onClick }) => (
  <li>
    {children}
    <button type="button" onClick={onClick}>
      x
    </button>
  </li>
);

const TodoList: FC<{ todos: TTodo[]; onClick: (index: number) => void }> = ({ todos, onClick }) => (
  <ul>
    {todos.map(({ value, id }, index) => (
      <TodoItem key={id} onClick={() => onClick(index)}>
        {value}
      </TodoItem>
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

type TTodo = {
  value: string;
  id: string;
};

export const LiftStateUp: FC<{ title: string }> = ({ title }) => {
  const [todos, setTodos] = useState<TTodo[]>([]);

  const addTodo = (value: string) => {
    const id = new Date().toISOString();
    setTodos(prevTodos => [...prevTodos, { value, id }]);
  };

  const deleteTodo = (index: number) => {
    setTodos(prevTodos => prevTodos.filter((_, position) => position !== index));
  };

  return (
    <div>
      {title}
      <Control onClick={addTodo} />
      <TodoList todos={todos} onClick={deleteTodo} />
    </div>
  );
};
