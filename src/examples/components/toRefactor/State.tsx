import { useState } from 'react';

const State = () => {
  const [color, setColor] = useState<string>('green');

  return (
    <div>
      <h1 style={{ color }}>React Hooks</h1>
      <button
        type="button"
        onClick={() => {
          setColor(() => 'red');
        }}
      >
        change color to red
      </button>
    </div>
  );
};

export default State;
