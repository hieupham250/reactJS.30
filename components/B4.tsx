import React, { Component } from "react";

interface Props {}

interface State {
  slogan: string;
}

export default class B4 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      slogan: "Học code để đi làm",
    };
  }
  handleClick = () => {
    this.setState({
      slogan: "Học code sẽ thành công. Cố lên!!!",
    });
  };
  shouldComponentUpdate(): boolean {
    return false;
  }
  render() {
    return (
      <>
        <h3>Slogan: {this.state.slogan}</h3>
        <button onClick={this.handleClick}>Change state</button>
      </>
    );
  }
}
