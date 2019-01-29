import React from "react";

class Child extends React.Component {
  constructor(props) {
    super();
    this.state = {
      counter: 0
    };
  }

  // UNSAFE_componentWillReceiveProps = (pp, p) => {
  //   console.log("pp is", pp);
  // };

  static getDerivedStateFromProps(props, state) {
    console.log("pp is", props);
    console.log("Get Derived State called .  ", props.pValue);
    return state;
  }

  onBtnClick = () => {
    let counter = this.state.counter;
    this.setState({
      counter: counter + 1
    });
  };
  render() {
    console.log("Child RERENDERED");
    return (
      <div>
        I am a Child
        <label>{this.state.counter}</label>
        <br />
        <label>{this.props.pValue}</label>
        <br />
        <button onClick={this.onBtnClick}> Clickme </button>
      </div>
    );
  }
}

export default Child;
