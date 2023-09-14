import React, { PureComponent, ReactNode, RefObject, createRef } from 'react';

const Button: React.FC<{ children: ReactNode; onClick: () => void }> = ({ children, onClick }) => (
  <button type="button" className="btn" onClick={onClick}>
    {children}
  </button>
);

class RefComponent extends PureComponent<unknown> {
  ref: RefObject<HTMLInputElement>;

  constructor(props: unknown) {
    super(props);

    this.ref = createRef<HTMLInputElement>();
  }

  componentDidMount() {
    this.focusTextInput();
  }

  focusTextInput = () => {
    this.ref.current?.focus();
  };

  handleClick = () => {
    this.ref.current?.blur();
  };

  render() {
    return (
      <div>
        <h2>Ref</h2>
        <input type="text" ref={this.ref} />
        <Button onClick={this.handleClick}>Klikni!</Button>
      </div>
    );
  }
}

export default RefComponent;
