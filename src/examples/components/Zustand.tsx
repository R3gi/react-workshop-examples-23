import React from 'react';
import { create } from 'zustand';

type State = {
  count: number;
  value: number;
  increment: (value: number) => void;
  decrement: (value: number) => void;
};

const useCounterState = create<State>(set => ({
  count: 0,
  value: 0,
  increment: (value: number) => set(state => ({ count: state.count + 1, value })),
  decrement: (value: number) => set(state => ({ count: state.count - 1, value })),
}));

export const Zustand = () => {
  const { count, value, increment, decrement } = useCounterState();

  return (
    <>
      <h2>Zustand</h2>
      Count: {count}
      Value: {value}
      <button type="button" onClick={() => decrement(-1)}>
        -
      </button>
      <button type="button" onClick={() => increment(1)}>
        +
      </button>
    </>
  );
};
