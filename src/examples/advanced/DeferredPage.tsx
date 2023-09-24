import { useState, ChangeEvent } from 'react';
import { Deferred, Id } from './Deferred';

export const DeferredPage = () => {
  const [name, setName] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <Deferred name={name} />
      <Id />
    </div>
  );
};
