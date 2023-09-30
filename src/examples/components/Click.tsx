import React, { Component } from 'react';

interface Props {
  title: string;
}

class Click extends Component<Props, { toggled: boolean }> {
  // static defaultProps = {
  //   title: 'ahoj',
  // };

  constructor(props: Props) {
    super(props);

    this.state = {
      toggled: false,
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // eslint-disable-next-line react/state-in-constructor
  state = {
    toggled: false,
  };

  handleClick = () => {
    // console.log(this);
    this.setState(state => ({ toggled: !state.toggled }));
  };

  // handleClick() {
  //   console.log(this);
  //   this.setState(state => ({ toggled: !state.toggled }));
  // }

  render() {
    const { props, state } = this;
    const { title } = props;
    const { toggled } = state;

    return (
      <>
        <h2>Click {title}</h2>
        {toggled && <p>Jsem zapnutý</p>}
        <button type="button" onClick={this.handleClick}>
          {/* {toggled && 'On'} */}
          {/* {toggled || 'Off'} */}
          {toggled ? 'On' : 'Off'}
        </button>
      </>
    );
  }
}

export default Click;
