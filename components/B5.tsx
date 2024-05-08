import React, { Component } from "react";

interface Props {
  status: string;
}

export default class B5 extends Component<Props> {
  render() {
    return (
      <>
        <h3>status: {this.props.status}</h3>
      </>
    );
  }
}
