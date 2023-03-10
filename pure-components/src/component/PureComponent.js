import React, { PureComponent } from 'react';

class Counter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      toggle: false,
    };
  }

  handleClick = () => {
    if (!this.state.toggle) {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }
  };

  handleToggle = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <p>Simple Component</p>
        <div>{count}</div>
        <span><button onClick={this.handleToggle}>
          Toggle
        </button>
        <button onClick={this.handleClick}>Counter</button></span>

       

      </div>
    );
  }
}

export default Counter;
