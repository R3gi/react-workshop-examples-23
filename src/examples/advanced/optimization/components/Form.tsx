import { Ref, SyntheticEvent, memo } from 'react';

export const Form = memo(
  ({ handleSubmit, inputRef }: { handleSubmit: (event: SyntheticEvent) => void; inputRef: Ref<HTMLInputElement> }) => (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} name="search" autoComplete="off" />
      <button type="submit">Search</button>
    </form>
  ),
);

Form.displayName = 'MemoForm';
