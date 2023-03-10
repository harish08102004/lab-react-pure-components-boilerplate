import React, { Component } from 'react';

class SimpleComponent extends Component {
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
    const { count} = this.state;

    return (
      <div>
        <p>Pure Component</p>
        <div>{count}</div>
        <span><button onClick={this.handleToggle}>
          Toggle
        </button>
        <button onClick={this.handleClick}>Counter</button></span>

      </div>
    );
  }
}

export default SimpleComponent;
