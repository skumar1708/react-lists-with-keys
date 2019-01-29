import React from "react";
import Child from "./Child";

class Sfull extends React.Component {
  componentWillMount = () => {
    this.currRef = React.createRef();
    this.setState({
      counter: 0
    });
  };
  onBtnClick = () => {
    let counter = this.state.counter;
    this.setState({
      counter: counter + 1
    });
  };
  render() {
    console.log("RERENDERED");
    return (
      <div>
        I am State Full
        <label>{this.state.counter}</label>
        <br />
        <label>{this.props.pValue}</label>
        <br />
        <button onClick={this.onBtnClick}> Clickme </button>
        <br />
        <br />
        <Child pValue={`Child pValue ${this.state.counter}`} />
      </div>
    );
  }
}

export default Sfull;
