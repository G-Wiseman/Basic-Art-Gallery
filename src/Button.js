import React from "react"

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Press to change",
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button> 
    );
  }
}

export default Button;
