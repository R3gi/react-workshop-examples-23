import React from 'react';
import { Effects } from './EffectHook';
import { Heading, TUser } from './Heading';
import LiftStateUp from './LiftStateUp';
import List from './List';
import { CounterWithDispatcher } from './ReducerHook';
import { Counter } from './StateHook';
import { Fetch } from './toRefactor/Fetch';
import FetchClass from './toRefactor/FetchClass';
import { ReactQuery } from './toRefactor/ReactQuery';
import { State } from './toRefactor/State';
import { TextInput } from './toRefactor/TextInput';
import { UncontrolledForm } from './UncontrolledForm';
import { AdvancedComponents } from '../advanced/AdvancedComponents';
import { CssModule } from './cssModules/CssModule';
import { ContextApply } from './ContextApply';

const user: TUser = {
  name: 'foobar',
};
export const Components = () => (
  <section>
    {/* <CssModule /> */}
    {/* <Heading title="hoo" user={user} button={<button type="button">test</button>}>
      <p>Playground</p>
    </Heading> */}
    {/* <Click title="Title" /> */}
    {/* <State /> */}
    {/* <Input /> */}
    {/* <UncontrolledForm /> */}
    {/* <List numbers={[1, 1, 1]} type="a" /> */}
    {/* <List numbers={[1, 3, 5]} type="b" /> */}
    {/* <ContextApply /> */}
    {/* <Counter /> */}
    {/* <Effects /> */}
    {/* <CounterWithDispatcher /> */}
    {/* <LiftStateUp title="Title" /> */}
    {/* <State /> */}
    {/* <TextInput /> */}
    {/* <FetchClass /> */}
    {/* <ReactQuery /> */}
    {/* <Fetch /> */}
    <AdvancedComponents />
  </section>
);
