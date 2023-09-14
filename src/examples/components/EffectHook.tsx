import React from 'react';

// Turn on Strict Mode
const LifecycleDemo: React.FC<{ random: number; mounted: boolean }> = ({ random, mounted }) => {
  React.useEffect(() => {
    console.log('use effect - aka componentDidMount + componentDidUpdate!'); // Every render (componentDidMount + componentDidUpdate)
  });

  React.useEffect(() => {
    console.log('use effect! - aka componentDidMount'); // Only first render componentDidMount
  }, []);

  React.useEffect(() => {
    console.log('use effect! random changed', mounted); // First render + if dep (mounted) is changed
  }, [mounted]);

  React.useEffect(() => {
    return () => console.log('unmounting & clenaup...'); // componentWillUnmount
  }, [mounted]);

  return <p>I'm a lifecycle demo</p>;
};

export const Effects = () => {
  const [random, setRandom] = React.useState(Math.random());
  const [mounted, setMounted] = React.useState(true);

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
      <LifecycleDemo random={random} mounted={mounted} />
    </>
  );
};
