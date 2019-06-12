import React from "react"

const buttonStyle = {
  backgroundColor: "rebeccapurple",
  border: "none",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer"
}

class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
  }

  handleClick = () => {
    this.setState({value: this.state.value+1});
  }

  render = () => {
    return <button style={buttonStyle} onClick={this.handleClick}>Clicked: {this.state.value} times.</button>
  }
}

export default ClickCounter
