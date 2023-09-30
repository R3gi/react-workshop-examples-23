/* eslint-disable react/state-in-constructor */
import React, { Component, FormEvent } from 'react';

interface State {
  foo: string;
  bar: string;
}

class Input extends Component<unknown, State> {
  state = {
    foo: '',
    bar: '',
  };

  handleChange = (event: FormEvent<HTMLInputElement>) => {
    const savedTarget = event.currentTarget;

    this.setState(
      () =>
        ({
          [savedTarget.name]: savedTarget.value,
        }) as Pick<State, keyof State>,
    );
  };

  render() {
    const { foo, bar } = this.state;

    return (
      <>
        <h2>Input</h2>
        <input
          type="text"
          name="foo"
          value={foo}
          onChange={(event: FormEvent<HTMLInputElement>) => this.handleChange(event)}
        />
        <input type="text" name="bar" value={bar} onChange={this.handleChange} />
      </>
    );
  }
}
export default Input;
