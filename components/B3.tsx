import React, { Component } from "react";

interface Props {}

interface State {
  company: string;
  isActive: boolean;
}

export default class B3 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      company: "rekkei academy",
      isActive: true,
    };
  }

  toggleState = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
      company: prevState.isActive ? "rekkeSoft" : "rekkei academy",
    }));
  };

  render() {
    return (
      <>
        <h3>Company: {this.state.company}</h3>
        <button onClick={this.toggleState}>Change state</button>
      </>
    );
  }
}
