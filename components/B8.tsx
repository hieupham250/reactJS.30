import React, { Component } from "react";

interface Props {}
interface State {
  inputValue: string;
}

export default class B8 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  componentDidUpdate() {
    document.title = this.state.inputValue;
  }
  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
      </>
    );
  }
}
