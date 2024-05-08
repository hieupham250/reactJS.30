import React, { Component } from "react";

interface Props {
  massage: string;
}

export default class B5 extends Component<Props> {
  shouldComponentUpdate(): boolean {
    return false;
  }
  render() {
    return (
      <>
        <h3>massage: {this.props.massage}</h3>
      </>
    );
  }
}
