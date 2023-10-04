import { useState } from 'react';

export const State = () => {
  const [color, setColor] = useState<string>('green');
  const [user, setUser] = useState<{ isLogged: boolean; isAdmin: boolean }>({ isLogged: false, isAdmin: false });

  return (
    <div>
      <h1 style={{ color }}>React Hooks</h1>
      <h2>
        {/* {user.isAdmin && 'isAdmin'} {user.isLogged && 'logged'} */}
        {/* {user.isAdmin ?? 'user'} {user.isLogged || 'unlogged'} */}
        {0 || 'number 0'}
        {'' && 'empty'}
        {'' || 'fallback'}
        {0 ?? 'nullish 0'}
        {/* {user.isAdmin ? 'admin' : 'user'} */}
      </h2>
      <button
        type="button"
        onClick={() => {
          // setUser(({ isLogged, isAdmin }) => ({ isLogged: !isLogged, isAdmin }));
          setUser({ ...user, isLogged: !user.isLogged });
          setUser({ ...user, isLogged: !user.isLogged });
        }}
      >
        change color to red
      </button>
    </div>
  );
};
