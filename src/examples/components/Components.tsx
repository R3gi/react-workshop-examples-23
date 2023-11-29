import React from 'react';
import { Effects } from './EffectHook';
import { Heading, TUser } from './Heading';
import { LiftStateUp } from './LiftStateUp';
import { List } from './List';
import { CounterWithDispatcher } from './ReducerHook';
import { Counter } from './StateHook';
import { Fetch } from './fetching/Fetch';
import { ReactQuery } from './fetching/ReactQuery';
import { State } from './State';
import { TextInput } from './TextInput';
import { UncontrolledForm } from './UncontrolledForm';
import { AdvancedComponents } from '../advanced/AdvancedComponents';
import { CssModule } from './cssModules/CssModule';
import { ContextApply } from './ContextApply';
import { Zustand } from './Zustand';
import { FetchSwr } from './fetching/FetchSwr';
import { RenderPropsPage } from '../advanced/RenderPropsPage';
import { SuspensePage } from '../advanced/SuspensePage';
import { TransitionPage } from '../advanced/TransitionPage';
import { DeferredPage } from '../advanced/DeferredPage';
import { ReactHookForm } from './ReactHookForm';

const user: TUser = {
  name: 'foobar',
};
export const Components = () => (
  <section>
    <CssModule />
    {/* <Heading title="hoo" user={user} button={<button type="button">test</button>}>
      <p>Playground</p>
    </Heading> */}
    {/* <Counter /> */}
    {/* <State /> */}
    {/* <List numbers={[1, 1, 1]} type="a" />
    <List numbers={[1, 3, 5]} type="b" /> */}
    {/* <LiftStateUp title="Title" /> */}
    {/* <Effects /> */}
    {/* <ContextApply /> */}
    {/* <UncontrolledForm /> */}
    {/* <TextInput /> */}
    {/* <CounterWithDispatcher /> */}
    {/* <Zustand /> */}
    {/* <Fetch /> */}
    {/* <ReactQuery /> */}
    {/* <FetchSwr /> */}
    {/* <RenderPropsPage /> */}
    {/* <SuspensePage /> */}
    {/* <TransitionPage /> */}
    {/* <DeferredPage /> */}
    {/* <ReactHookForm /> */}
    {/* <AdvancedComponents /> */}
  </section>
);
