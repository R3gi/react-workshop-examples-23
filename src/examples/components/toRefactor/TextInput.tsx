import { useRef } from 'react';

export const TextInput = () => {
  const nameRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    nameRef.current?.focus();
  };

  return (
    <div>
      <input ref={nameRef} placeholder="name" />
      <button type="button" onClick={handleFocus}>
        Focus
      </button>
    </div>
  );
};
