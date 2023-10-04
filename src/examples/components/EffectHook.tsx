import React, { FC, useEffect, useState } from 'react';

const useLifecycle = (isLogged: boolean, mounted: boolean) => {
  useEffect(() => {
    if (isLogged) {
      console.log('use effect - aka componentDidMount + componentDidUpdate!'); // Every render (componentDidMount + componentDidUpdate)
    }

    return () => console.log('every unmounting & clenaup...'); // componentWillUnmount
  }, [isLogged]);

  useEffect(() => {
    console.log('use effect! - aka componentDidMount'); // Only first render componentDidMount
  }, []);

  useEffect(() => {
    console.log('use effect! random changed', mounted); // First render + if dep (mounted) is changed
  }, [mounted]);

  useEffect(() => {
    return () => console.log('unmounting & clenaup...'); // componentWillUnmount
  }, [mounted]);
};

// Turn on Strict Mode
const LifecycleDemo: FC<{ random: number; mounted: boolean; isLogged: boolean }> = ({ random, mounted, isLogged }) => {
  useLifecycle(isLogged, mounted);

  // eslint-disable-next-line react/no-unescaped-entities
  return <p>I'm a lifecycle demo</p>;
};

export const Effects = () => {
  const [random, setRandom] = useState(Math.random());
  const [mounted, setMounted] = useState(true);

  const reRender = () => setRandom(Math.random());
  const toggle = () => setMounted(prevMounted => !prevMounted);

  return (
    <>
      <h2>useEffect</h2>
      <button type="button" onClick={reRender}>
        Re-render
      </button>
      <button type="button" onClick={toggle}>
        Show/Hide LifecycleDemo
      </button>
      <LifecycleDemo random={random} mounted={mounted} isLogged />
    </>
  );
};
